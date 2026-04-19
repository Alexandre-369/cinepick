const moods = [
  { id: "leve", label: "Quero rir", hint: "leve, rapido, sem dever de casa" },
  { id: "comfort", label: "Comfort movie", hint: "aconchego, revisita emocional" },
  { id: "nostalgia", label: "Nostalgia", hint: "cara de outra epoca" },
  { id: "complexo", label: "Quero pensar", hint: "Nolan, Kaufman, quebra-cabeca" },
  { id: "intenso", label: "Algo tenso", hint: "suspense, crime, pressao" },
  { id: "sensivel", label: "Estou sensivel", hint: "humano, bonito, melancolico" }
];

const movies = [
  {
    title: "Punch-Drunk Love",
    year: 2002,
    decade: "2000",
    genre: "Romance",
    duration: 95,
    country: "Estados Unidos",
    director: "Paul Thomas Anderson",
    imdb: 73,
    rt: 79,
    vibes: ["leve", "sensivel", "comfort"],
    tags: ["Adam Sandler", "estranho", "romance nervoso"],
    seen: false,
    favoriteSignal: true,
    colors: ["#3f7d9b", "#d85f56"]
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    decade: "2000",
    genre: "Drama",
    duration: 108,
    country: "Estados Unidos",
    director: "Michel Gondry",
    imdb: 83,
    rt: 92,
    vibes: ["complexo", "sensivel", "nostalgia"],
    tags: ["Charlie Kaufman", "memoria", "amor triste"],
    seen: true,
    favoriteSignal: true,
    colors: ["#578fb1", "#f0b55e"]
  },
  {
    title: "The Nice Guys",
    year: 2016,
    decade: "2010",
    genre: "Comedia",
    duration: 116,
    country: "Estados Unidos",
    director: "Shane Black",
    imdb: 73,
    rt: 91,
    vibes: ["leve", "intenso"],
    tags: ["buddy movie", "crime", "anos 70"],
    seen: false,
    favoriteSignal: false,
    colors: ["#d6a247", "#466d61"]
  },
  {
    title: "Memories of Murder",
    year: 2003,
    decade: "2000",
    genre: "Crime",
    duration: 132,
    country: "Coreia do Sul",
    director: "Bong Joon-ho",
    imdb: 81,
    rt: 95,
    vibes: ["intenso", "complexo"],
    tags: ["investigacao", "melancolia", "serial killer"],
    seen: false,
    favoriteSignal: true,
    colors: ["#5c6155", "#b7945b"]
  },
  {
    title: "Aftersun",
    year: 2022,
    decade: "2020",
    genre: "Drama",
    duration: 102,
    country: "Reino Unido",
    director: "Charlotte Wells",
    imdb: 76,
    rt: 96,
    vibes: ["sensivel", "nostalgia"],
    tags: ["memoria", "familia", "ferias"],
    seen: false,
    favoriteSignal: false,
    colors: ["#537c91", "#d99b73"]
  },
  {
    title: "Inception",
    year: 2010,
    decade: "2010",
    genre: "Ficcao cientifica",
    duration: 148,
    country: "Estados Unidos",
    director: "Christopher Nolan",
    imdb: 88,
    rt: 87,
    vibes: ["complexo", "intenso"],
    tags: ["Nolan", "sonhos", "blockbuster cerebral"],
    seen: true,
    favoriteSignal: true,
    colors: ["#3d5f7c", "#1e242c"]
  },
  {
    title: "Tampopo",
    year: 1985,
    decade: "1980",
    genre: "Comedia",
    duration: 114,
    country: "Japao",
    director: "Juzo Itami",
    imdb: 79,
    rt: 100,
    vibes: ["leve", "comfort"],
    tags: ["comida", "charme", "cult"],
    seen: false,
    favoriteSignal: false,
    colors: ["#c54f42", "#e0ba63"]
  },
  {
    title: "O Auto da Compadecida",
    year: 2000,
    decade: "2000",
    genre: "Comedia",
    duration: 104,
    country: "Brasil",
    director: "Guel Arraes",
    imdb: 86,
    rt: 88,
    vibes: ["leve", "comfort", "nostalgia"],
    tags: ["Brasil", "classico", "reassistivel"],
    seen: false,
    favoriteSignal: true,
    colors: ["#c77d34", "#47745b"]
  },
  {
    title: "Amelie",
    year: 2001,
    decade: "2000",
    genre: "Romance",
    duration: 122,
    country: "Franca",
    director: "Jean-Pierre Jeunet",
    imdb: 83,
    rt: 89,
    vibes: ["comfort", "sensivel", "leve"],
    tags: ["Paris", "fantasia", "doce"],
    seen: false,
    favoriteSignal: false,
    colors: ["#8e3f3f", "#5e8b63"]
  },
  {
    title: "Mulholland Drive",
    year: 2001,
    decade: "2000",
    genre: "Suspense",
    duration: 147,
    country: "Estados Unidos",
    director: "David Lynch",
    imdb: 79,
    rt: 84,
    vibes: ["complexo", "intenso"],
    tags: ["surreal", "Hollywood", "pesadelo"],
    seen: false,
    favoriteSignal: false,
    colors: ["#2c3148", "#9a3d61"]
  }
];

let activeMood = "comfort";
let activeMode = "mood";
let profileLoaded = false;
let rerollOffset = 0;
let roulettePick = "";
const profileData = {
  watched: new Set(),
  highRated: new Set(),
  favoriteDirectors: new Set(),
  favoriteTags: new Set(),
  importedRows: 0
};

const els = {
  modeTabs: document.querySelectorAll("[data-mode]"),
  moodPanel: document.querySelector("#mood-panel"),
  roulettePanel: document.querySelector("#roulette-panel"),
  moods: document.querySelector("#moods"),
  genre: document.querySelector("#genre"),
  duration: document.querySelector("#duration"),
  decade: document.querySelector("#decade"),
  country: document.querySelector("#country"),
  director: document.querySelector("#director"),
  rating: document.querySelector("#rating"),
  ratingValue: document.querySelector("#rating-value"),
  hideWatched: document.querySelector("#hide-watched"),
  hero: document.querySelector("#hero-rec"),
  shortlist: document.querySelector("#shortlist"),
  matchCount: document.querySelector("#match-count"),
  syncDemo: document.querySelector("#sync-demo"),
  syncStatus: document.querySelector("#sync-status"),
  profileFiles: document.querySelector("#profile-files"),
  profileStats: document.querySelector("#profile-stats"),
  reroll: document.querySelector("#reroll"),
  spin: document.querySelector("#spin"),
  rouletteWheel: document.querySelector("#roulette-wheel")
};

function durationBucket(minutes) {
  if (minutes <= 100) return "curto";
  if (minutes <= 130) return "medio";
  return "longo";
}

function ratingAverage(movie) {
  return Math.round((movie.imdb + movie.rt) / 2);
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function movieKey(title, year) {
  return `${normalize(title)}|${String(year || "").trim()}`;
}

function getColumn(row, names) {
  const keys = Object.keys(row);
  const found = keys.find((key) => names.includes(normalize(key)));
  return found ? row[found] : "";
}

function profileAffinity(movie) {
  let affinity = movie.favoriteSignal ? 8 : 0;

  if (profileData.favoriteDirectors.has(normalize(movie.director))) affinity += 22;
  movie.tags.forEach((tag) => {
    if (profileData.favoriteTags.has(normalize(tag))) affinity += 6;
  });
  movie.vibes.forEach((vibe) => {
    if (profileData.favoriteTags.has(normalize(vibe))) affinity += 4;
  });

  return affinity;
}

function wasWatched(movie) {
  return movie.seen || profileData.watched.has(movieKey(movie.title, movie.year));
}

function scoreMovie(movie) {
  let score = 0;
  const query = normalize(els.director.value);
  const minRating = Number(els.rating.value);

  if (activeMode === "mood" && movie.vibes.includes(activeMood)) score += 42;
  if (activeMode === "roulette") score += Math.round(ratingAverage(movie) / 3);
  if (profileLoaded) score += profileAffinity(movie);
  if (els.genre.value === movie.genre) score += 15;
  if (els.duration.value === durationBucket(movie.duration)) score += 10;
  if (els.decade.value === movie.decade) score += 10;
  if (els.country.value === movie.country) score += 10;
  if (query && `${movie.director} ${movie.tags.join(" ")}`.toLowerCase().includes(query)) score += 24;
  if (ratingAverage(movie) >= minRating) score += 12;
  if (els.hideWatched.checked && wasWatched(movie) && profileLoaded) score -= 100;

  return score;
}

function filteredMovies() {
  return movies
    .map((movie) => ({ ...movie, score: scoreMovie(movie) }))
    .filter((movie) => {
      if (els.genre.value !== "qualquer" && movie.genre !== els.genre.value) return false;
      if (els.duration.value !== "qualquer" && durationBucket(movie.duration) !== els.duration.value) return false;
      if (els.decade.value !== "qualquer" && movie.decade !== els.decade.value) return false;
      if (els.country.value !== "qualquer" && movie.country !== els.country.value) return false;
      if (ratingAverage(movie) < Number(els.rating.value)) return false;
      if (els.hideWatched.checked && profileLoaded && wasWatched(movie)) return false;
      return true;
    })
    .sort((a, b) => b.score - a.score);
}

function reasonFor(movie) {
  if (activeMode === "roulette") {
    const parts = [
      `${movie.duration} min`,
      `${movie.director}`,
      `media critica ${ratingAverage(movie)}`,
      `${movie.country}`
    ];

    if (profileLoaded && profileAffinity(movie) > 10) {
      parts.push("bom encaixe com seus favoritos");
    }

    return `A roleta ignorou humor e sorteou dentro dos seus limites: ${parts.join(", ")}. E pronto: agora e apertar play, nao abrir mais quinze abas.`;
  }

  const mood = moods.find((item) => item.id === activeMood);
  const parts = [
    `Combina com "${mood.label.toLowerCase()}"`,
    `${movie.duration} min`,
    `${movie.director}`,
    `media critica ${ratingAverage(movie)}`
  ];

  if (profileLoaded && profileAffinity(movie) > 10) {
    parts.push("parece conversar com seus favoritos");
  }

  return `${parts.join(", ")}. A sugestao tenta resolver a duvida sem transformar a noite em pesquisa.`;
}

function selectRouletteMovie(list) {
  if (!list.length) {
    roulettePick = "";
    return;
  }

  const weighted = list.map((movie) => ({
    movie,
    weight: Math.max(8, ratingAverage(movie) - Number(els.rating.value) + 18 + (profileLoaded ? profileAffinity(movie) : 0))
  }));
  const total = weighted.reduce((sum, item) => sum + item.weight, 0);
  let cursor = Math.random() * total;

  for (const item of weighted) {
    cursor -= item.weight;
    if (cursor <= 0) {
      roulettePick = item.movie.title;
      return;
    }
  }

  roulettePick = weighted[0].movie.title;
}

function setMode(mode) {
  activeMode = mode;
  rerollOffset = 0;
  els.modeTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  els.moodPanel.hidden = mode !== "mood";
  els.roulettePanel.hidden = mode !== "roulette";

  if (mode === "roulette" && !roulettePick) {
    selectRouletteMovie(filteredMovies());
  }

  render();
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(field);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some((cell) => cell.trim())) rows.push(row);

  const [headers = [], ...body] = rows;
  return body.map((cells) => Object.fromEntries(headers.map((header, index) => [header.trim(), (cells[index] || "").trim()])));
}

function importProfileRows(rows) {
  rows.forEach((row) => {
    const title = getColumn(row, ["title", "name", "nome", "filme", "movie"]);
    const year = getColumn(row, ["year", "ano"]);
    if (!title) return;

    const key = movieKey(title, year);
    const rating10Value = getColumn(row, ["rating10"]);
    const ratingValue = getColumn(row, ["rating", "nota", "avaliacao"]);
    const rating = Number((rating10Value || ratingValue).replace(",", "."));
    const isTenPointScale = Boolean(rating10Value) || rating > 5;
    const director = getColumn(row, ["directors", "director", "diretor", "diretores"]);
    const tags = getColumn(row, ["tags", "tag", "generos", "genres"]);

    profileData.watched.add(key);
    profileData.importedRows += 1;

    if ((isTenPointScale && rating >= 8) || (!isTenPointScale && rating >= 4)) {
      profileData.highRated.add(key);
      if (director) normalize(director).split(/\s*,\s*/).forEach((item) => profileData.favoriteDirectors.add(item));
      tags.split(/\s*,\s*/).filter(Boolean).forEach((tag) => profileData.favoriteTags.add(normalize(tag)));
    }
  });
}

function renderProfileStats() {
  els.profileStats.hidden = !profileLoaded;
  els.profileStats.innerHTML = `
    <div class="profile-stat"><strong>${profileData.watched.size}</strong><span>vistos</span></div>
    <div class="profile-stat"><strong>${profileData.highRated.size}</strong><span>favoritos</span></div>
    <div class="profile-stat"><strong>${profileData.favoriteDirectors.size}</strong><span>diretores</span></div>
  `;
}

async function importProfileFiles(files) {
  const csvFiles = [...files].filter((file) => file.name.toLowerCase().endsWith(".csv"));
  if (!csvFiles.length) return;

  for (const file of csvFiles) {
    const text = await file.text();
    importProfileRows(parseCsv(text));
  }

  profileLoaded = true;
  roulettePick = "";
  renderProfileStats();
  els.syncStatus.textContent = `${csvFiles.length} arquivo(s) importado(s). Agora o app evita vistos e usa notas altas como sinal de gosto.`;
  if (activeMode === "roulette") selectRouletteMovie(filteredMovies());
  render();
}

function renderMoods() {
  els.moods.innerHTML = moods.map((mood) => `
    <button class="mood-chip ${mood.id === activeMood ? "is-active" : ""}" type="button" data-mood="${mood.id}">
      <strong>${mood.label}</strong>
      <span>${mood.hint}</span>
    </button>
  `).join("");
}

function renderHero(movie) {
  if (!movie) {
    els.hero.innerHTML = `
      <div class="rec-copy">
        <span class="kicker">Sem resultado perfeito</span>
        <h2>Ajuste um filtro.</h2>
        <p class="reason">A combinacao atual ficou exigente demais. Reduza a nota minima ou abra genero, decada ou duracao.</p>
      </div>
    `;
    return;
  }

  els.hero.innerHTML = `
    <div class="poster" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
      <span class="poster-badge">${movie.genre}</span>
      <span class="poster-director">${movie.director}</span>
      <p class="poster-year">${movie.year}</p>
      <h2 class="poster-title">${movie.title}</h2>
    </div>
    <div class="rec-copy">
      <span class="kicker">${activeMode === "roulette" ? "Roleta escolheu" : "Melhor escolha agora"}</span>
      <h2>${movie.title}</h2>
      <p class="reason">${reasonFor(movie)}</p>
      <div class="meta-line">
        <span class="pill">${movie.genre}</span>
        <span class="pill">${movie.country}</span>
        <span class="pill">${movie.decade}s</span>
        <span class="pill">${movie.tags.slice(0, 2).join(" + ")}</span>
      </div>
      <div class="score-row">
        <div class="score"><strong>${movie.imdb}</strong><span>IMDb x10</span></div>
        <div class="score"><strong>${movie.rt}%</strong><span>Rotten Tomatoes</span></div>
        <div class="score"><strong>${Math.max(movie.score, 0)}</strong><span>${activeMode === "roulette" ? "peso" : "encaixe"}</span></div>
      </div>
      <div class="rec-actions">
        <button type="button" data-seen="${movie.title}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
          Ja vi
        </button>
        <button class="secondary" type="button" id="why">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17h.01M12 13a4 4 0 1 0-4-4"/></svg>
          Por que?
        </button>
      </div>
    </div>
  `;
}

function renderShortlist(list) {
  els.matchCount.textContent = `${list.length} opcoes`;
  els.shortlist.innerHTML = list.slice(1, 5).map((movie) => `
    <article class="mini-card">
      <div class="mini-poster" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
        <span>${movie.year}</span>
        <strong>${movie.title}</strong>
      </div>
      <h3>${movie.title}</h3>
      <p>${movie.genre} | ${movie.duration} min<br>${movie.director}</p>
    </article>
  `).join("");
}

function render() {
  renderMoods();
  const list = filteredMovies();
  if (activeMode === "roulette") {
    const selected = list.find((movie) => movie.title === roulettePick) || list[0];
    const rotated = selected ? [selected, ...list.filter((movie) => movie.title !== selected.title)] : [];
    renderHero(rotated[0]);
    renderShortlist(rotated);
    return;
  }

  const index = list.length ? rerollOffset % list.length : 0;
  const rotated = [...list.slice(index), ...list.slice(0, index)];
  renderHero(rotated[0]);
  renderShortlist(rotated);
}

els.modeTabs.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

els.moods.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mood]");
  if (!button) return;
  activeMood = button.dataset.mood;
  rerollOffset = 0;
  render();
});

document.querySelectorAll("select, input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input === els.rating) els.ratingValue.textContent = els.rating.value;
    rerollOffset = 0;
    if (activeMode === "roulette") selectRouletteMovie(filteredMovies());
    render();
  });
});

els.syncDemo.addEventListener("click", () => {
  profileLoaded = true;
  profileData.watched.add(movieKey("Eternal Sunshine of the Spotless Mind", 2004));
  profileData.watched.add(movieKey("Inception", 2010));
  profileData.highRated.add(movieKey("Eternal Sunshine of the Spotless Mind", 2004));
  profileData.highRated.add(movieKey("Inception", 2010));
  ["Christopher Nolan", "Charlie Kaufman", "Guel Arraes"].forEach((name) => profileData.favoriteDirectors.add(normalize(name)));
  ["complexo", "nostalgia", "Brasil", "drama sensivel"].forEach((tag) => profileData.favoriteTags.add(normalize(tag)));
  renderProfileStats();
  els.syncStatus.textContent = "Perfil simulado: 2 filmes vistos, gosto por Kaufman, Nolan, classicos brasileiros e drama sensivel.";
  render();
});

els.profileFiles.addEventListener("change", (event) => {
  importProfileFiles(event.target.files);
});

els.reroll.addEventListener("click", () => {
  if (activeMode === "roulette") {
    els.rouletteWheel.classList.remove("is-spinning");
    void els.rouletteWheel.offsetWidth;
    els.rouletteWheel.classList.add("is-spinning");
    selectRouletteMovie(filteredMovies());
    render();
    return;
  }

  rerollOffset += 1;
  render();
});

els.spin.addEventListener("click", () => {
  els.rouletteWheel.classList.remove("is-spinning");
  void els.rouletteWheel.offsetWidth;
  els.rouletteWheel.classList.add("is-spinning");
  selectRouletteMovie(filteredMovies());
  render();
});

els.hero.addEventListener("click", (event) => {
  const seenButton = event.target.closest("[data-seen]");
  if (!seenButton) return;
  const movie = movies.find((item) => item.title === seenButton.dataset.seen);
  if (movie) movie.seen = true;
  if (movie) profileData.watched.add(movieKey(movie.title, movie.year));
  profileLoaded = true;
  renderProfileStats();
  els.syncStatus.textContent = `"${movie.title}" marcado como visto. A proxima sugestao evita repetir.`;
  render();
});

render();
