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
      complexo: {
        preferredGenres: ["Ficcao cientifica", "Fantasia", "Animacao"],
        avoidGenres: ["Documentario", "Guerra", "Crime", "Musica", "Acao", "Aventura"],
        hardAvoidGenres: ["Documentario", "Guerra", "Crime", "Acao"],
        keywords: ["ficcao", "fantasia", "distopia"],
        requiredComplexity: true,
        surpriseMode: false
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
    vibes: ["complexo"],
    overview: "viagem existencial e especulativa por uma zona proibida"
  });

  const results = worker.computeItems([blocked, allowed], state);
  const resultKeys = Array.from(results, (item) => item.key);
  assert.equal(resultKeys.length, 1);
  assert.equal(resultKeys[0], "allowed-key");
});
