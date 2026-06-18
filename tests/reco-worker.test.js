const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function loadWorkerContext() {
  const workerPath = path.join(__dirname, "..", "public", "reco-worker.js");
  const source = fs.readFileSync(workerPath, "utf8");
  const context = {
    self: { postMessage() {} },
    console,
    Math,
    Set,
    Map
  };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: "reco-worker.js" });
  return context;
}

function baseState(overrides = {}) {
  return {
    activeMode: "mood",
    activeMood: "complexo",
    moodAliasMap: {},
    moodProfiles: {
      leve: {
        preferredGenres: ["Comedia", "Romance", "Musica", "Aventura", "Familia"],
        avoidGenres: ["Drama", "Crime", "Terror", "Suspense", "Guerra", "Misterio"],
        hardAvoidGenres: ["Crime", "Terror", "Guerra"],
        conflictingVibes: ["intenso", "complexo"],
        requiredPositive: true,
        keywords: ["rapido", "fofo", "aventura", "amizade", "musica", "romance", "humor"],
        longMoviePenalty: 130
      },
      complexo: {
        preferredGenres: ["Ficcao cientifica", "Fantasia", "Animacao"],
        avoidGenres: ["Documentario", "Guerra", "Crime", "Musica", "Acao", "Aventura"],
        hardAvoidGenres: ["Documentario", "Guerra", "Crime", "Acao"],
        keywords: ["ficcao", "fantasia", "distopia"],
        requiredComplexity: true,
        surpriseMode: false
      },
      surpresa: {
        preferredGenres: ["Documentario", "Ficcao cientifica", "Fantasia", "Misterio", "Terror", "Drama", "Comedia"],
        avoidGenres: ["Familia"],
        hardAvoidGenres: [],
        conflictingVibes: ["comfort"],
        keywords: ["estranho", "surreal", "cult", "identidade", "sonho", "metalinguagem", "sensorial", "politica", "obsessao"],
        surpriseMode: true
      },
      acao: {
        preferredGenres: ["Acao", "Aventura", "Ficcao cientifica", "Fantasia", "Faroeste", "Guerra", "Crime", "Suspense"],
        avoidGenres: ["Romance", "Musica", "Documentario", "Drama"],
        hardAvoidGenres: ["Documentario"],
        keywords: ["perseguicao", "aventura", "guerra", "fuga", "assalto", "energia", "missao", "explosao", "corrida", "coreografia", "adrenalina", "katana", "vinganca"],
        longMoviePenalty: 170
      }
    },
    profileWatchedKeys: [],
    profileFavoriteDirectors: [],
    profileFavoriteTags: [],
    recommendationHistory: [],
    profileLoaded: false,
    filters: {
      genre: "qualquer",
      duration: "qualquer",
      decade: "qualquer",
      country: "qualquer",
      provider: "qualquer",
      hideWatched: false
    },
    ...overrides
  };
}

function movie(overrides = {}) {
  return {
    key: "movie-key",
    title: "Base Movie",
    year: 2016,
    decade: "2010",
    genre: "Drama",
    genres: ["Drama"],
    director: "Unknown Director",
    duration: 118,
    imdb: 78,
    rt: 80,
    tmdbVotes: 1200,
    country: "Estados Unidos",
    vibes: ["complexo"],
    tags: ["identidade", "distopia"],
    providers: [],
    source: "curated",
    overview: "historia sobre tempo, memoria e identidade",
    posterUrl: "",
    backdropUrl: "",
    watchUrl: "",
    ...overrides
  };
}

test("hasAnyText uses word boundaries for phrase matching", () => {
  const worker = loadWorkerContext();
  assert.equal(worker.hasAnyText("marvel avengers assemble", ["marvel"]), true);
  assert.equal(worker.hasAnyText("marvelous scenario", ["marvel"]), false);
  assert.equal(worker.hasAnyText("time-loop puzzle", ["time loop"]), true);
});

test("complex mood blocks superhero action titles", () => {
  const worker = loadWorkerContext();
  const state = baseState();
  const candidate = movie({
    title: "The Avengers",
    genre: "Acao",
    genres: ["Acao", "Ficcao cientifica", "Aventura"],
    director: "Joss Whedon",
    tags: ["marvel", "vingadores"],
    vibes: ["acao"],
    overview: "marvel avengers heroes salvam o mundo"
  });

  assert.equal(worker.superheroActionSignal(candidate), true);
  assert.equal(worker.moodMismatch(candidate, state), true);
});

test("complex mood keeps speculative non-franchise films", () => {
  const worker = loadWorkerContext();
  const state = baseState();
  const candidate = movie({
    title: "Arrival",
    genre: "Ficcao cientifica",
    genres: ["Ficcao cientifica", "Drama"],
    director: "Denis Villeneuve",
    tags: ["linguagem", "tempo", "distopia"],
    vibes: ["complexo", "intenso"],
    overview: "linguagem alien e paradoxo temporal em narrativa contemplativa"
  });

  assert.equal(worker.speculativeEvidence(candidate), true);
  assert.equal(worker.moodMismatch(candidate, state), false);
});

test("computeItems filters mismatched movie in complex mood", () => {
  const worker = loadWorkerContext();
  const state = baseState();
  const blocked = movie({
    key: "blocked-key",
    title: "Justice League",
    genre: "Acao",
    genres: ["Acao", "Aventura", "Ficcao cientifica"],
    tags: ["justice league", "superman"],
    vibes: ["acao"],
    overview: "liga da justica em batalha de super-herois"
  });
  const allowed = movie({
    key: "allowed-key",
    title: "Stalker",
    year: 1979,
    decade: "1970",
    genre: "Ficcao cientifica",
    genres: ["Ficcao cientifica", "Drama"],
    country: "Uniao Sovietica",
    director: "Andrei Tarkovsky",
    tags: ["zona", "filosofia", "metafisica"],
    vibes: ["surpresa", "complexo"],
    overview: "viagem existencial e especulativa por uma zona proibida"
  });

  const results = worker.computeItems([blocked, allowed], state);
  const resultKeys = Array.from(results, (item) => item.key);
  assert.equal(resultKeys.length, 1);
  assert.equal(resultKeys[0], "allowed-key");
});

test("surprise mood blocks mainstream blockbusters", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "surpresa" });
  const blockbuster = movie({
    key: "blockbuster-key",
    title: "Super Mario Bros. The Movie",
    genre: "Animacao",
    genres: ["Animacao", "Familia", "Aventura"],
    country: "Estados Unidos",
    director: "Known Studio",
    tmdbVotes: 20000,
    imdb: 75,
    rt: 80,
    vibes: ["surpresa"],
    tags: ["super mario", "disney", "aventura"],
    overview: "popular franchise blockbuster"
  });

  assert.equal(worker.mainstreamBlockbusterSignal(blockbuster), true);
  assert.equal(worker.moodMismatch(blockbuster, state), true);
});

test("surprise mood keeps festival-coded discoveries", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "surpresa" });
  const discovery = movie({
    key: "festival-key",
    title: "Festival Discovery",
    genre: "Documentario",
    genres: ["Documentario"],
    country: "Senegal",
    director: "Mati Diop",
    tmdbVotes: 900,
    imdb: 74,
    rt: 96,
    vibes: ["surpresa"],
    tags: ["festival", "sensorial"],
    overview: "festival sensorial documentary"
  });
  const blockbuster = movie({
    key: "blockbuster-key",
    title: "Super Mario Bros. The Movie",
    genre: "Animacao",
    genres: ["Animacao", "Familia", "Aventura"],
    country: "Estados Unidos",
    tmdbVotes: 20000,
    imdb: 75,
    rt: 80,
    vibes: ["surpresa"],
    tags: ["super mario", "disney"],
    overview: "popular franchise blockbuster"
  });

  assert.equal(worker.surpriseDiscoveryEvidence(discovery), true);
  assert.equal(worker.moodMismatch(discovery, state), false);
  assert.ok(worker.moodScore(discovery, state) > worker.moodScore(blockbuster, state));
});

test("surprise mood rejects mainstream titles with weak discovery evidence", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "surpresa" });
  const mainstreamDrama = movie({
    key: "mainstream-drama",
    title: "Famous War Drama",
    genre: "Drama",
    genres: ["Drama", "Suspense", "Guerra"],
    country: "Estados Unidos",
    director: "Famous Director",
    tmdbVotes: 24000,
    imdb: 82,
    rt: 59,
    vibes: ["complexo"],
    tags: ["tempo e memória"],
    overview: "known studio war drama with broad awards awareness"
  });

  assert.equal(worker.surpriseDiscoveryEvidence(mainstreamDrama), false);
  assert.equal(worker.moodMismatch(mainstreamDrama, state), true);
});

test("action mood prefers kinetic non-superhero action over MCU gravity", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "acao", sessionSeed: "action-score", shuffleSalt: "stable", rerollOffset: 0 });
  const superhero = movie({
    key: "mcu-key",
    title: "Avengers Endgame",
    genre: "Acao",
    genres: ["Acao", "Aventura", "Ficcao cientifica"],
    director: "Known Studio",
    tmdbVotes: 30000,
    imdb: 84,
    rt: 94,
    vibes: ["acao"],
    tags: ["marvel", "avengers", "super-heroi"],
    overview: "marvel avengers heroes em batalha final"
  });
  const kinetic = movie({
    key: "kinetic-key",
    title: "Mad Max Fury Road",
    genre: "Acao",
    genres: ["Acao", "Aventura", "Ficcao cientifica"],
    director: "George Miller",
    tmdbVotes: 22000,
    imdb: 81,
    rt: 97,
    vibes: ["acao"],
    tags: ["perseguicao", "fuga", "adrenalina", "corrida"],
    overview: "perseguição, fuga, explosão e ação física no deserto"
  });

  assert.equal(worker.superheroActionSignal(superhero), true);
  assert.equal(worker.actionMoodEvidence(kinetic), true);
  assert.ok(worker.moodScore(kinetic, state) > worker.moodScore(superhero, state));
});

test("action mood blocks soft family adventure without action evidence", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "acao" });
  const familyAdventure = movie({
    key: "soft-family-adventure",
    title: "The Polar Express",
    genre: "Aventura",
    genres: ["Aventura", "Animacao", "Familia", "Fantasia"],
    tmdbVotes: 12000,
    imdb: 67,
    rt: 56,
    vibes: ["comfort"],
    tags: ["familia", "magia", "natal"],
    overview: "uma aventura familiar em um trem mágico de natal"
  });

  assert.equal(worker.familyAdventureActionMismatch(familyAdventure), true);
  assert.equal(worker.moodMismatch(familyAdventure, state), true);
});

test("light mood prefers live-action comedy over generic family animation", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "leve", sessionSeed: "light-test", shuffleSalt: "stable", rerollOffset: 0 });
  const genericAnimation = movie({
    key: "generic-animation",
    title: "Generic Family Animation",
    genre: "Animacao",
    genres: ["Animacao", "Familia", "Aventura"],
    vibes: ["comfort"],
    tags: ["familia", "aventura"],
    overview: "uma jornada familiar colorida sobre coragem"
  });
  const liveComedy = movie({
    key: "live-comedy",
    title: "Live Comedy",
    genre: "Comedia",
    genres: ["Comedia", "Romance"],
    vibes: ["leve"],
    tags: ["humor", "romance"],
    overview: "comedia leve, romance e humor de amizade"
  });

  assert.ok(worker.moodScore(liveComedy, state) > worker.moodScore(genericAnimation, state));
});

test("light mood still welcomes animated comedy with explicit humor", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "leve" });
  const animatedComedy = movie({
    key: "animated-comedy",
    title: "Animated Comedy",
    genre: "Animacao",
    genres: ["Animacao", "Comedia", "Aventura"],
    vibes: ["leve"],
    tags: ["humor", "satira"],
    overview: "animação com comedia, humor rapido e satira"
  });
  const genericAnimation = movie({
    key: "generic-animation",
    title: "Generic Family Animation",
    genre: "Animacao",
    genres: ["Animacao", "Familia"],
    vibes: ["comfort"],
    tags: ["familia"],
    overview: "uma fantasia familiar aconchegante"
  });

  assert.equal(worker.moodMismatch(animatedComedy, state), false);
  assert.ok(worker.moodScore(animatedComedy, state) > worker.moodScore(genericAnimation, state));
});

test("recommendation breakdown exposes stable scoring layers", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "leve", sessionSeed: "layers", shuffleSalt: "stable", rerollOffset: 0 });
  const candidate = movie({
    key: "poster-ready-comedy",
    title: "Poster Ready Comedy",
    genre: "Comedia",
    genres: ["Comedia", "Romance"],
    vibes: ["leve"],
    tags: ["humor"],
    posterUrl: "https://image.tmdb.org/t/p/w500/poster.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w780/backdrop.jpg",
    providers: ["Netflix"],
    watchUrl: "https://example.test/watch"
  });

  const breakdown = worker.recommendationScoreBreakdown(candidate, state);
  assert.equal(typeof breakdown.total, "number");
  assert.ok(breakdown.mood > 0);
  assert.ok(breakdown.quality > 0);
  assert.ok(breakdown.availability >= 20);
  assert.ok(breakdown.noise >= 0);
});

test("availability layer prefers poster-ready recommendations", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "leve", sessionSeed: "availability", shuffleSalt: "stable", rerollOffset: 0 });
  const bare = movie({
    key: "bare-comedy",
    title: "Bare Comedy",
    genre: "Comedia",
    genres: ["Comedia", "Romance"],
    vibes: ["leve"],
    tags: ["humor"]
  });
  const ready = movie({
    ...bare,
    key: "ready-comedy",
    title: "Ready Comedy",
    posterUrl: "https://image.tmdb.org/t/p/w500/poster.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w780/backdrop.jpg",
    providers: ["Prime Video"],
    watchUrl: "https://example.test/watch"
  });

  assert.ok(worker.recommendationScoreBreakdown(ready, state).total > worker.recommendationScoreBreakdown(bare, state).total);
});

test("recent history layer pushes repeated titles down", () => {
  const worker = loadWorkerContext();
  const repeated = movie({
    key: "repeat-me",
    title: "Repeat Me",
    genre: "Comedia",
    genres: ["Comedia"],
    vibes: ["leve"],
    tags: ["humor"],
    posterUrl: "https://image.tmdb.org/t/p/w500/poster.jpg"
  });
  const state = baseState({
    activeMood: "leve",
    sessionSeed: "history",
    shuffleSalt: "stable",
    rerollOffset: 0,
    recommendationHistory: ["repeat-me"]
  });

  const breakdown = worker.recommendationScoreBreakdown(repeated, state);
  assert.ok(breakdown.freshness <= -300);
  assert.ok(breakdown.total < worker.recommendationScoreBreakdown({ ...repeated, key: "fresh-title", title: "Fresh Title" }, { ...state, recommendationHistory: [] }).total);
});

test("light mood keeps animation as a minority in a mixed strong pool", () => {
  const worker = loadWorkerContext();
  const state = baseState({ activeMood: "leve", sessionSeed: "mixed-light", shuffleSalt: "stable", rerollOffset: 0 });
  const pool = [
    movie({ key: "comedy-1", title: "Comedy 1", genre: "Comedia", genres: ["Comedia", "Romance"], vibes: ["leve"], tags: ["humor"], imdb: 78, rt: 86, posterUrl: "poster" }),
    movie({ key: "comedy-2", title: "Comedy 2", genre: "Comedia", genres: ["Comedia", "Musica"], vibes: ["leve"], tags: ["musica"], imdb: 76, rt: 84, posterUrl: "poster" }),
    movie({ key: "romance-1", title: "Romance 1", genre: "Romance", genres: ["Romance", "Comedia"], vibes: ["leve"], tags: ["romance"], imdb: 77, rt: 83, posterUrl: "poster" }),
    movie({ key: "music-1", title: "Music 1", genre: "Musica", genres: ["Musica", "Comedia"], vibes: ["leve"], tags: ["musica"], imdb: 75, rt: 85, posterUrl: "poster" }),
    movie({ key: "animation-1", title: "Animation 1", genre: "Animacao", genres: ["Animacao", "Familia", "Comedia"], vibes: ["leve"], tags: ["humor"], imdb: 86, rt: 94, posterUrl: "poster" }),
    movie({ key: "animation-2", title: "Animation 2", genre: "Animacao", genres: ["Animacao", "Familia", "Aventura"], vibes: ["comfort", "leve"], tags: ["familia"], imdb: 84, rt: 92, posterUrl: "poster" }),
    movie({ key: "animation-3", title: "Animation 3", genre: "Animacao", genres: ["Animacao", "Comedia"], vibes: ["leve"], tags: ["humor"], imdb: 83, rt: 91, posterUrl: "poster" }),
    movie({ key: "animation-4", title: "Animation 4", genre: "Animacao", genres: ["Animacao", "Familia"], vibes: ["comfort"], tags: ["familia"], imdb: 88, rt: 96, posterUrl: "poster" })
  ];

  const topFive = worker.computeItems(pool, state).slice(0, 5);
  const topFiveAnimationCount = topFive.filter((item) => item.key.startsWith("animation")).length;
  assert.ok(topFiveAnimationCount <= 2);
});
