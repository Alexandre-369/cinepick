const moods = [
  { id: "leve", label: "Quero rir", hint: "leve, rapido, sem dever de casa" },
  { id: "comfort", label: "Comfort movie", hint: "aconchego, revisita emocional" },
  { id: "nostalgia", label: "Nostalgia", hint: "cara de outra epoca" },
  { id: "complexo", label: "Quero pensar", hint: "Nolan, Kaufman, quebra-cabeca" },
  { id: "intenso", label: "Algo tenso", hint: "suspense, crime, pressao" },
  { id: "sensivel", label: "Estou sensivel", hint: "humano, bonito, melancolico" }
];

const genreIds = {
  "Comedia": 35,
  "Drama": 18,
  "Ficcao cientifica": 878,
  "Suspense": 53,
  "Romance": 10749,
  "Crime": 80
};

const tmdbGenres = {
  28: "Acao",
  35: "Comedia",
  80: "Crime",
  18: "Drama",
  878: "Ficcao cientifica",
  53: "Suspense",
  10749: "Romance"
};

const countryCodes = {
  "Brasil": "BR",
  "Estados Unidos": "US",
  "Coreia do Sul": "KR",
  "Japao": "JP",
  "Franca": "FR",
  "Reino Unido": "GB"
};

const curatedMovies = [
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
  },
  {
    title: "Frances Ha",
    year: 2012,
    decade: "2010",
    genre: "Comedia",
    duration: 86,
    country: "Estados Unidos",
    director: "Noah Baumbach",
    imdb: 74,
    rt: 92,
    vibes: ["leve", "sensivel", "comfort"],
    tags: ["amizade", "Nova York", "indie"],
    seen: false,
    favoriteSignal: false,
    colors: ["#1d1d1d", "#b7b7b7"]
  },
  {
    title: "Her",
    year: 2013,
    decade: "2010",
    genre: "Romance",
    duration: 126,
    country: "Estados Unidos",
    director: "Spike Jonze",
    imdb: 80,
    rt: 95,
    vibes: ["sensivel", "complexo", "nostalgia"],
    tags: ["solidao", "futuro", "melancolia"],
    seen: false,
    favoriteSignal: true,
    colors: ["#b94c4a", "#e7b75f"]
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    decade: "2010",
    genre: "Comedia",
    duration: 99,
    country: "Estados Unidos",
    director: "Wes Anderson",
    imdb: 81,
    rt: 92,
    vibes: ["leve", "comfort", "nostalgia"],
    tags: ["Wes Anderson", "aventura", "estilo"],
    seen: false,
    favoriteSignal: false,
    colors: ["#c85a75", "#d6a247"]
  },
  {
    title: "Before Sunrise",
    year: 1995,
    decade: "1990",
    genre: "Romance",
    duration: 101,
    country: "Estados Unidos",
    director: "Richard Linklater",
    imdb: 81,
    rt: 100,
    vibes: ["sensivel", "comfort", "nostalgia"],
    tags: ["conversa", "viagem", "romance"],
    seen: false,
    favoriteSignal: true,
    colors: ["#4f7f91", "#c88457"]
  },
  {
    title: "The Truman Show",
    year: 1998,
    decade: "1990",
    genre: "Drama",
    duration: 103,
    country: "Estados Unidos",
    director: "Peter Weir",
    imdb: 82,
    rt: 95,
    vibes: ["complexo", "sensivel", "comfort"],
    tags: ["Jim Carrey", "identidade", "satira"],
    seen: false,
    favoriteSignal: false,
    colors: ["#5f9ab2", "#e2c36b"]
  },
  {
    title: "Parasite",
    year: 2019,
    decade: "2010",
    genre: "Suspense",
    duration: 132,
    country: "Coreia do Sul",
    director: "Bong Joon-ho",
    imdb: 85,
    rt: 99,
    vibes: ["intenso", "complexo"],
    tags: ["classe", "casa", "virada"],
    seen: false,
    favoriteSignal: true,
    colors: ["#2d3e39", "#d2c08a"]
  },
  {
    title: "Shoplifters",
    year: 2018,
    decade: "2010",
    genre: "Drama",
    duration: 121,
    country: "Japao",
    director: "Hirokazu Kore-eda",
    imdb: 79,
    rt: 99,
    vibes: ["sensivel", "comfort"],
    tags: ["familia", "humanista", "delicado"],
    seen: false,
    favoriteSignal: false,
    colors: ["#54716b", "#c99c65"]
  },
  {
    title: "Lost in Translation",
    year: 2003,
    decade: "2000",
    genre: "Drama",
    duration: 102,
    country: "Estados Unidos",
    director: "Sofia Coppola",
    imdb: 77,
    rt: 95,
    vibes: ["sensivel", "nostalgia", "comfort"],
    tags: ["Toquio", "solidao", "noite"],
    seen: false,
    favoriteSignal: false,
    colors: ["#5c6f96", "#d2917b"]
  },
  {
    title: "The Social Network",
    year: 2010,
    decade: "2010",
    genre: "Drama",
    duration: 120,
    country: "Estados Unidos",
    director: "David Fincher",
    imdb: 78,
    rt: 96,
    vibes: ["complexo", "intenso"],
    tags: ["Fincher", "internet", "ambicao"],
    seen: false,
    favoriteSignal: false,
    colors: ["#26384d", "#5f7186"]
  },
  {
    title: "Zodiac",
    year: 2007,
    decade: "2000",
    genre: "Crime",
    duration: 157,
    country: "Estados Unidos",
    director: "David Fincher",
    imdb: 77,
    rt: 90,
    vibes: ["intenso", "complexo"],
    tags: ["obsessao", "investigacao", "Fincher"],
    seen: false,
    favoriteSignal: false,
    colors: ["#5a5d4c", "#b59b67"]
  },
  {
    title: "The Handmaiden",
    year: 2016,
    decade: "2010",
    genre: "Suspense",
    duration: 145,
    country: "Coreia do Sul",
    director: "Park Chan-wook",
    imdb: 81,
    rt: 96,
    vibes: ["intenso", "complexo", "sensivel"],
    tags: ["desejo", "golpe", "periodo"],
    seen: false,
    favoriteSignal: true,
    colors: ["#613c5d", "#b48a61"]
  },
  {
    title: "My Neighbor Totoro",
    year: 1988,
    decade: "1980",
    genre: "Drama",
    duration: 86,
    country: "Japao",
    director: "Hayao Miyazaki",
    imdb: 81,
    rt: 93,
    vibes: ["comfort", "nostalgia", "sensivel"],
    tags: ["infancia", "Ghibli", "natureza"],
    seen: false,
    favoriteSignal: true,
    colors: ["#4d8066", "#c8d1a3"]
  },
  {
    title: "Perfect Blue",
    year: 1997,
    decade: "1990",
    genre: "Suspense",
    duration: 81,
    country: "Japao",
    director: "Satoshi Kon",
    imdb: 81,
    rt: 83,
    vibes: ["intenso", "complexo"],
    tags: ["anime", "identidade", "pesadelo"],
    seen: false,
    favoriteSignal: false,
    colors: ["#344c89", "#a53668"]
  },
  {
    title: "Cidade de Deus",
    year: 2002,
    decade: "2000",
    genre: "Crime",
    duration: 130,
    country: "Brasil",
    director: "Fernando Meirelles",
    imdb: 86,
    rt: 91,
    vibes: ["intenso", "complexo"],
    tags: ["Brasil", "favela", "crime"],
    seen: false,
    favoriteSignal: true,
    colors: ["#c07b35", "#4a3d2f"]
  },
  {
    title: "Bacurau",
    year: 2019,
    decade: "2010",
    genre: "Suspense",
    duration: 131,
    country: "Brasil",
    director: "Kleber Mendonca Filho",
    imdb: 73,
    rt: 93,
    vibes: ["intenso", "complexo"],
    tags: ["Brasil", "politico", "sertao"],
    seen: false,
    favoriteSignal: false,
    colors: ["#9d4d3c", "#d1b056"]
  },
  {
    title: "Central do Brasil",
    year: 1998,
    decade: "1990",
    genre: "Drama",
    duration: 110,
    country: "Brasil",
    director: "Walter Salles",
    imdb: 80,
    rt: 94,
    vibes: ["sensivel", "nostalgia"],
    tags: ["Brasil", "estrada", "familia"],
    seen: false,
    favoriteSignal: true,
    colors: ["#b87538", "#5e7c8b"]
  },
  {
    title: "La Haine",
    year: 1995,
    decade: "1990",
    genre: "Drama",
    duration: 98,
    country: "Franca",
    director: "Mathieu Kassovitz",
    imdb: 81,
    rt: 96,
    vibes: ["intenso", "complexo"],
    tags: ["rua", "juventude", "preto e branco"],
    seen: false,
    favoriteSignal: false,
    colors: ["#202020", "#a9a9a9"]
  },
  {
    title: "Portrait of a Lady on Fire",
    year: 2019,
    decade: "2010",
    genre: "Romance",
    duration: 122,
    country: "Franca",
    director: "Celine Sciamma",
    imdb: 81,
    rt: 97,
    vibes: ["sensivel", "complexo"],
    tags: ["olhar", "pintura", "amor"],
    seen: false,
    favoriteSignal: true,
    colors: ["#2f5870", "#c55b43"]
  },
  {
    title: "Hot Fuzz",
    year: 2007,
    decade: "2000",
    genre: "Comedia",
    duration: 121,
    country: "Reino Unido",
    director: "Edgar Wright",
    imdb: 78,
    rt: 91,
    vibes: ["leve", "intenso", "comfort"],
    tags: ["acao", "buddy movie", "britanico"],
    seen: false,
    favoriteSignal: false,
    colors: ["#2d4d62", "#d94e3f"]
  },
  {
    title: "Shaun of the Dead",
    year: 2004,
    decade: "2000",
    genre: "Comedia",
    duration: 99,
    country: "Reino Unido",
    director: "Edgar Wright",
    imdb: 79,
    rt: 92,
    vibes: ["leve", "intenso", "nostalgia"],
    tags: ["zumbi", "britanico", "amizade"],
    seen: false,
    favoriteSignal: false,
    colors: ["#7f2f2f", "#4d6a56"]
  },
  {
    title: "Knives Out",
    year: 2019,
    decade: "2010",
    genre: "Crime",
    duration: 130,
    country: "Estados Unidos",
    director: "Rian Johnson",
    imdb: 79,
    rt: 97,
    vibes: ["leve", "intenso"],
    tags: ["misterio", "familia", "detetive"],
    seen: false,
    favoriteSignal: false,
    colors: ["#7d3f33", "#d6b36a"]
  },
  {
    title: "Arrival",
    year: 2016,
    decade: "2010",
    genre: "Ficcao cientifica",
    duration: 116,
    country: "Estados Unidos",
    director: "Denis Villeneuve",
    imdb: 79,
    rt: 94,
    vibes: ["complexo", "sensivel"],
    tags: ["linguagem", "tempo", "alien"],
    seen: false,
    favoriteSignal: true,
    colors: ["#59656d", "#b0a48d"]
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    decade: "2010",
    genre: "Ficcao cientifica",
    duration: 164,
    country: "Estados Unidos",
    director: "Denis Villeneuve",
    imdb: 80,
    rt: 88,
    vibes: ["complexo", "intenso", "sensivel"],
    tags: ["futuro", "identidade", "noir"],
    seen: false,
    favoriteSignal: false,
    colors: ["#c76331", "#284f75"]
  },
  {
    title: "Interstellar",
    year: 2014,
    decade: "2010",
    genre: "Ficcao cientifica",
    duration: 169,
    country: "Estados Unidos",
    director: "Christopher Nolan",
    imdb: 87,
    rt: 73,
    vibes: ["complexo", "sensivel"],
    tags: ["Nolan", "espaco", "familia"],
    seen: false,
    favoriteSignal: true,
    colors: ["#1e2934", "#b7a269"]
  },
  {
    title: "Memento",
    year: 2000,
    decade: "2000",
    genre: "Suspense",
    duration: 113,
    country: "Estados Unidos",
    director: "Christopher Nolan",
    imdb: 84,
    rt: 94,
    vibes: ["complexo", "intenso"],
    tags: ["Nolan", "memoria", "quebra-cabeca"],
    seen: false,
    favoriteSignal: true,
    colors: ["#b6b1a2", "#424850"]
  },
  {
    title: "Adaptation",
    year: 2002,
    decade: "2000",
    genre: "Comedia",
    duration: 115,
    country: "Estados Unidos",
    director: "Spike Jonze",
    imdb: 77,
    rt: 91,
    vibes: ["complexo", "leve", "sensivel"],
    tags: ["Charlie Kaufman", "metalinguagem", "roteiro"],
    seen: false,
    favoriteSignal: true,
    colors: ["#6d7d42", "#d2a95b"]
  },
  {
    title: "The Meyerowitz Stories",
    year: 2017,
    decade: "2010",
    genre: "Comedia",
    duration: 112,
    country: "Estados Unidos",
    director: "Noah Baumbach",
    imdb: 69,
    rt: 92,
    vibes: ["sensivel", "leve"],
    tags: ["Adam Sandler", "familia", "dramedy"],
    seen: false,
    favoriteSignal: false,
    colors: ["#6d6155", "#d3b16b"]
  }
];

let activeMood = "comfort";
let activeMode = "mood";
let profileLoaded = false;
let rerollOffset = 0;
let roulettePick = "";
let useTmdb = false;
let tmdbMovies = [];
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
  moreGrid: document.querySelector("#more-grid"),
  moreCount: document.querySelector("#more-count"),
  syncDemo: document.querySelector("#sync-demo"),
  syncStatus: document.querySelector("#sync-status"),
  profileFiles: document.querySelector("#profile-files"),
  profileStats: document.querySelector("#profile-stats"),
  tmdbToken: document.querySelector("#tmdb-token"),
  loadTmdb: document.querySelector("#load-tmdb"),
  useTmdb: document.querySelector("#use-tmdb"),
  tmdbStatus: document.querySelector("#tmdb-status"),
  reroll: document.querySelector("#reroll"),
  spin: document.querySelector("#spin"),
  rouletteWheel: document.querySelector("#roulette-wheel")
};

els.tmdbToken.value = localStorage.getItem("cinepick_tmdb_token") || "";
els.useTmdb.checked = localStorage.getItem("cinepick_use_tmdb") === "true";
useTmdb = els.useTmdb.checked;

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

function activeCatalog() {
  return useTmdb && tmdbMovies.length ? tmdbMovies : curatedMovies;
}

function movieDuration(movie) {
  return Number(movie.duration) || 0;
}

function scoreMovie(movie) {
  let score = 0;
  const query = normalize(els.director.value);
  const minRating = Number(els.rating.value);

  if (activeMode === "mood" && movie.vibes.includes(activeMood)) score += 42;
  if (activeMode === "roulette") score += Math.round(ratingAverage(movie) / 3);
  if (profileLoaded) score += profileAffinity(movie);
  if (els.genre.value === movie.genre) score += 15;
  if (movieDuration(movie) && els.duration.value === durationBucket(movieDuration(movie))) score += 10;
  if (els.decade.value === movie.decade) score += 10;
  if (els.country.value === movie.country) score += 10;
  if (query && `${movie.director} ${movie.tags.join(" ")}`.toLowerCase().includes(query)) score += 24;
  if (ratingAverage(movie) >= minRating) score += 12;
  if (els.hideWatched.checked && wasWatched(movie) && profileLoaded) score -= 100;

  return score;
}

function filteredMovies() {
  return activeCatalog()
    .map((movie) => ({ ...movie, score: scoreMovie(movie) }))
    .filter((movie) => {
      if (els.genre.value !== "qualquer" && movie.genre !== els.genre.value) return false;
      if (els.duration.value !== "qualquer" && movieDuration(movie) && durationBucket(movieDuration(movie)) !== els.duration.value) return false;
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
      movie.duration ? `${movie.duration} min` : "duracao a confirmar",
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
    movie.duration ? `${movie.duration} min` : "duracao a confirmar",
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

function tmdbHeaders() {
  const token = els.tmdbToken.value.trim();
  if (!token) return null;
  return {
    Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
    "Content-Type": "application/json;charset=utf-8"
  };
}

function tmdbParams() {
  const params = new URLSearchParams({
    include_adult: "false",
    include_video: "false",
    language: "pt-BR",
    sort_by: activeMode === "roulette" ? "popularity.desc" : "vote_count.desc",
    "vote_count.gte": "80",
    "vote_average.gte": String(Math.max(0, Number(els.rating.value) / 10)),
    page: "1"
  });

  if (els.genre.value !== "qualquer" && genreIds[els.genre.value]) {
    params.set("with_genres", String(genreIds[els.genre.value]));
  }

  if (els.country.value !== "qualquer" && countryCodes[els.country.value]) {
    params.set("with_origin_country", countryCodes[els.country.value]);
  }

  if (els.decade.value !== "qualquer") {
    const start = Number(els.decade.value);
    params.set("primary_release_date.gte", `${start}-01-01`);
    params.set("primary_release_date.lte", `${start + 9}-12-31`);
  }

  if (els.duration.value === "curto") params.set("with_runtime.lte", "100");
  if (els.duration.value === "medio") {
    params.set("with_runtime.gte", "100");
    params.set("with_runtime.lte", "130");
  }
  if (els.duration.value === "longo") params.set("with_runtime.gte", "130");

  return params;
}

async function tmdbFetch(path, params = new URLSearchParams()) {
  const headers = tmdbHeaders();
  if (!headers) throw new Error("Token TMDb ausente.");
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  params.forEach((value, key) => url.searchParams.set(key, value));
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`TMDb respondeu ${response.status}.`);
  return response.json();
}

async function directorIdForQuery(query) {
  if (!query) return "";
  const result = await tmdbFetch("/search/person", new URLSearchParams({ query, language: "pt-BR" }));
  const person = (result.results || []).find((item) =>
    (item.known_for_department === "Directing" || normalize(item.name).includes(query)) && item.id
  );
  return person ? String(person.id) : "";
}

function countryNameFromCode(code) {
  return Object.entries(countryCodes).find(([, value]) => value === code)?.[0] || code || "Internacional";
}

function mapTmdbMovie(movie, details) {
  const releaseYear = Number((movie.release_date || "").slice(0, 4)) || 0;
  const director = (details.credits?.crew || []).find((person) => person.job === "Director")?.name || "Direcao nao informada";
  const genre = movie.genre_ids.map((id) => tmdbGenres[id]).find(Boolean) || details.genres?.[0]?.name || "Drama";
  const country = countryNameFromCode(details.origin_country?.[0] || movie.original_language?.toUpperCase());
  const vote = Math.round((movie.vote_average || 0) * 10);

  return {
    title: movie.title || movie.original_title,
    year: releaseYear || "----",
    decade: releaseYear ? String(Math.floor(releaseYear / 10) * 10) : "qualquer",
    genre,
    duration: details.runtime || 0,
    country,
    director,
    imdb: vote,
    rt: Math.min(100, Math.round((movie.popularity || 0) / 2) + 50),
    tmdbVotes: movie.vote_count || 0,
    vibes: inferVibes(genre, movie.overview || ""),
    tags: [genre, director, country].filter(Boolean),
    seen: false,
    favoriteSignal: false,
    posterUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "",
    backdropUrl: movie.backdrop_path ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` : "",
    colors: colorPairForMovie(movie.id || vote),
    source: "tmdb"
  };
}

function colorPairForMovie(seed) {
  const palette = [
    ["#3f7d9b", "#d85f56"],
    ["#c77d34", "#47745b"],
    ["#2d3e39", "#d2c08a"],
    ["#613c5d", "#b48a61"],
    ["#59656d", "#b0a48d"],
    ["#7d3f33", "#d6b36a"]
  ];
  return palette[Math.abs(Number(seed) || 0) % palette.length];
}

function inferVibes(genre, overview) {
  const text = normalize(`${genre} ${overview}`);
  const vibes = new Set();
  if (text.includes("comedia") || text.includes("familia")) vibes.add("leve");
  if (text.includes("romance") || text.includes("drama")) vibes.add("sensivel");
  if (text.includes("crime") || text.includes("suspense") || text.includes("thriller")) vibes.add("intenso");
  if (text.includes("ficcao") || text.includes("science") || text.includes("misterio")) vibes.add("complexo");
  if (text.includes("familia") || text.includes("amizade")) vibes.add("comfort");
  return [...(vibes.size ? vibes : new Set(["comfort"]))];
}

async function loadTmdbCatalog() {
  const token = els.tmdbToken.value.trim();
  if (!token) {
    els.tmdbStatus.textContent = "Cole um token de leitura do TMDb para buscar catalogo real.";
    return;
  }

  localStorage.setItem("cinepick_tmdb_token", token);
  els.tmdbStatus.textContent = "Buscando filmes no TMDb...";
  els.loadTmdb.disabled = true;

  try {
    const params = tmdbParams();
    const query = normalize(els.director.value);
    if (query) {
      const directorId = await directorIdForQuery(query);
      if (directorId) params.set("with_crew", directorId);
    }

    const pages = await Promise.all([1, 2, 3].map((page) => {
      const nextParams = new URLSearchParams(params);
      nextParams.set("page", String(page));
      return tmdbFetch("/discover/movie", nextParams);
    }));
    const baseResults = pages.flatMap((page) => page.results || []).filter((movie) => movie.poster_path);
    const uniqueResults = [...new Map(baseResults.map((movie) => [movie.id, movie])).values()].slice(0, 42);
    const detailed = await Promise.all(uniqueResults.map(async (movie) => {
      const details = await tmdbFetch(`/movie/${movie.id}`, new URLSearchParams({ append_to_response: "credits", language: "pt-BR" }));
      return mapTmdbMovie(movie, details);
    }));

    tmdbMovies = detailed;
    useTmdb = true;
    els.useTmdb.checked = true;
    localStorage.setItem("cinepick_use_tmdb", "true");
    roulettePick = "";
    if (activeMode === "roulette") selectRouletteMovie(filteredMovies());
    els.tmdbStatus.textContent = `${tmdbMovies.length} filmes carregados do TMDb com capas oficiais.`;
    render();
  } catch (error) {
    useTmdb = false;
    els.useTmdb.checked = false;
    localStorage.setItem("cinepick_use_tmdb", "false");
    els.tmdbStatus.textContent = `${error.message} Mantive a curadoria local ativa.`;
    render();
  } finally {
    els.loadTmdb.disabled = false;
  }
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
    <div class="poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
      ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="Capa de ${movie.title}">` : ""}
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
        <div class="score"><strong>${movie.imdb}</strong><span>${movie.source === "tmdb" ? "TMDb x10" : "IMDb x10"}</span></div>
        <div class="score"><strong>${movie.source === "tmdb" ? movie.tmdbVotes : `${movie.rt}%`}</strong><span>${movie.source === "tmdb" ? "votos" : "Rotten Tomatoes"}</span></div>
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
      <div class="mini-poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
        ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="Capa de ${movie.title}">` : ""}
        <span>${movie.year}</span>
        <strong>${movie.title}</strong>
      </div>
      <h3>${movie.title}</h3>
      <p>${movie.genre} | ${movie.duration ? `${movie.duration} min` : "duracao n/d"}<br>${movie.director}</p>
    </article>
  `).join("");
  renderMoreOptions(list);
}

function renderMoreOptions(list) {
  const extra = list.slice(5, 17);
  els.moreCount.textContent = extra.length ? `${extra.length} filmes` : "sem extras";
  els.moreGrid.innerHTML = extra.map((movie) => `
    <article class="more-card">
      <div class="more-poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
        ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="">` : ""}
        <span>${movie.year}</span>
      </div>
      <div>
        <h3>${movie.title}</h3>
        <p>${movie.genre} | ${movie.country}<br>${movie.director}</p>
      </div>
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

els.loadTmdb.addEventListener("click", () => {
  loadTmdbCatalog();
});

els.useTmdb.addEventListener("change", () => {
  useTmdb = els.useTmdb.checked;
  localStorage.setItem("cinepick_use_tmdb", String(useTmdb));

  if (useTmdb && !tmdbMovies.length) {
    els.tmdbStatus.textContent = "Clique em Carregar para buscar filmes reais do TMDb.";
  }

  roulettePick = "";
  if (activeMode === "roulette") selectRouletteMovie(filteredMovies());
  render();
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
  const movie = activeCatalog().find((item) => item.title === seenButton.dataset.seen);
  if (movie) movie.seen = true;
  if (movie) profileData.watched.add(movieKey(movie.title, movie.year));
  profileLoaded = true;
  renderProfileStats();
  els.syncStatus.textContent = `"${movie.title}" marcado como visto. A proxima sugestao evita repetir.`;
  render();
});

render();
