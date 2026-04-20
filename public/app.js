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

const tmdbCatalogConfig = {
  pages: 8,
  limit: 140,
  batchSize: 10,
  omdbEnrichLimit: 36,
  cacheMaxAge: 1000 * 60 * 60 * 8
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

const extraCuratedMovies = [
  ["Moonrise Kingdom", 2012, "Comedia", 94, "Estados Unidos", "Wes Anderson", 78, 93, ["leve", "comfort", "nostalgia"], ["Wes Anderson", "infancia", "aventura"], false],
  ["The Royal Tenenbaums", 2001, "Comedia", 110, "Estados Unidos", "Wes Anderson", 76, 81, ["comfort", "nostalgia", "sensivel"], ["familia", "estilo", "melancolia"], false],
  ["Little Miss Sunshine", 2006, "Comedia", 101, "Estados Unidos", "Jonathan Dayton", 78, 91, ["leve", "comfort", "sensivel"], ["familia", "estrada", "indie"], false],
  ["Palm Springs", 2020, "Comedia", 90, "Estados Unidos", "Max Barbakow", 74, 95, ["leve", "comfort", "complexo"], ["loop temporal", "romance", "rapido"], false],
  ["Game Night", 2018, "Comedia", 100, "Estados Unidos", "John Francis Daley", 69, 85, ["leve", "intenso"], ["misterio", "grupo", "noite"], false],
  ["Booksmart", 2019, "Comedia", 102, "Estados Unidos", "Olivia Wilde", 71, 96, ["leve", "comfort"], ["amizade", "juventude", "festa"], false],
  ["The Big Sick", 2017, "Romance", 120, "Estados Unidos", "Michael Showalter", 75, 98, ["leve", "sensivel", "comfort"], ["romance", "familia", "doenca"], false],
  ["About Time", 2013, "Romance", 123, "Reino Unido", "Richard Curtis", 78, 70, ["comfort", "sensivel", "nostalgia"], ["tempo", "familia", "romance"], true],
  ["Paddington 2", 2017, "Comedia", 103, "Reino Unido", "Paul King", 78, 99, ["comfort", "leve"], ["fofo", "familia", "bondade"], true],
  ["Sing Street", 2016, "Drama", 106, "Irlanda", "John Carney", 79, 95, ["comfort", "nostalgia", "leve"], ["musica", "juventude", "anos 80"], false],
  ["Once", 2007, "Romance", 86, "Irlanda", "John Carney", 78, 97, ["sensivel", "comfort"], ["musica", "Dublin", "romance"], false],
  ["Drive My Car", 2021, "Drama", 179, "Japao", "Ryusuke Hamaguchi", 75, 97, ["sensivel", "complexo"], ["luto", "teatro", "conversa"], true],
  ["Burning", 2018, "Suspense", 148, "Coreia do Sul", "Lee Chang-dong", 75, 95, ["complexo", "intenso"], ["misterio", "obsessao", "ambiguidade"], false],
  ["Decision to Leave", 2022, "Suspense", 138, "Coreia do Sul", "Park Chan-wook", 73, 94, ["intenso", "sensivel", "complexo"], ["romance", "investigacao", "desejo"], true],
  ["Past Lives", 2023, "Romance", 106, "Estados Unidos", "Celine Song", 78, 95, ["sensivel", "nostalgia", "comfort"], ["reencontro", "Coreia", "destino"], true],
  ["Anatomy of a Fall", 2023, "Drama", 151, "Franca", "Justine Triet", 77, 96, ["complexo", "intenso"], ["julgamento", "casamento", "duvida"], true],
  ["The Worst Person in the World", 2021, "Romance", 128, "Noruega", "Joachim Trier", 77, 96, ["sensivel", "leve", "complexo"], ["vida adulta", "Oslo", "amor"], true],
  ["Another Round", 2020, "Drama", 117, "Dinamarca", "Thomas Vinterberg", 77, 92, ["sensivel", "leve"], ["amizade", "crise", "bebida"], false],
  ["The Hunt", 2012, "Drama", 115, "Dinamarca", "Thomas Vinterberg", 83, 93, ["intenso", "sensivel"], ["acusacao", "comunidade", "pressao"], false],
  ["Force Majeure", 2014, "Drama", 120, "Suecia", "Ruben Ostlund", 72, 94, ["complexo", "sensivel"], ["familia", "vergonha", "casamento"], false],
  ["Triangle of Sadness", 2022, "Comedia", 147, "Suecia", "Ruben Ostlund", 73, 72, ["complexo", "leve"], ["satira", "classe", "cruzeiro"], false],
  ["The Banshees of Inisherin", 2022, "Drama", 114, "Irlanda", "Martin McDonagh", 77, 96, ["sensivel", "complexo"], ["amizade", "ilha", "melancolia"], true],
  ["In Bruges", 2008, "Crime", 107, "Reino Unido", "Martin McDonagh", 79, 85, ["intenso", "leve"], ["crime", "culpa", "humor seco"], false],
  ["Children of Men", 2006, "Ficcao cientifica", 109, "Reino Unido", "Alfonso Cuaron", 79, 92, ["intenso", "complexo"], ["distopia", "esperanca", "acao"], true],
  ["Ex Machina", 2014, "Ficcao cientifica", 108, "Reino Unido", "Alex Garland", 77, 92, ["complexo", "intenso"], ["IA", "isolamento", "controle"], false],
  ["Annihilation", 2018, "Ficcao cientifica", 115, "Estados Unidos", "Alex Garland", 68, 88, ["complexo", "intenso"], ["mutacao", "luto", "estranho"], false],
  ["Coherence", 2013, "Ficcao cientifica", 89, "Estados Unidos", "James Ward Byrkit", 72, 89, ["complexo", "intenso"], ["baixo orcamento", "multiverso", "jantar"], false],
  ["Primer", 2004, "Ficcao cientifica", 77, "Estados Unidos", "Shane Carruth", 68, 73, ["complexo"], ["tempo", "quebra-cabeca", "indie"], false],
  ["The Lobster", 2015, "Comedia", 119, "Irlanda", "Yorgos Lanthimos", 71, 87, ["complexo", "leve"], ["absurdo", "romance", "distopia"], false],
  ["Poor Things", 2023, "Comedia", 141, "Reino Unido", "Yorgos Lanthimos", 78, 92, ["complexo", "leve"], ["fantasia", "liberdade", "estranho"], true],
  ["The Favourite", 2018, "Comedia", 120, "Reino Unido", "Yorgos Lanthimos", 75, 93, ["complexo", "intenso"], ["periodo", "poder", "humor acido"], false],
  ["Lady Bird", 2017, "Drama", 94, "Estados Unidos", "Greta Gerwig", 74, 99, ["comfort", "sensivel", "nostalgia"], ["mae e filha", "adolescencia", "Sacramento"], true],
  ["Barbie", 2023, "Comedia", 114, "Estados Unidos", "Greta Gerwig", 69, 88, ["leve", "comfort"], ["satira", "pop", "identidade"], false],
  ["Marriage Story", 2019, "Drama", 137, "Estados Unidos", "Noah Baumbach", 79, 95, ["sensivel", "complexo"], ["divorcio", "familia", "ator"], false],
  ["Uncut Gems", 2019, "Crime", 135, "Estados Unidos", "Josh Safdie", 74, 91, ["intenso"], ["Adam Sandler", "ansiedade", "apostas"], false],
  ["Good Time", 2017, "Crime", 102, "Estados Unidos", "Josh Safdie", 73, 91, ["intenso"], ["noite", "fuga", "crime"], false],
  ["Fargo", 1996, "Crime", 98, "Estados Unidos", "Joel Coen", 81, 94, ["intenso", "leve"], ["neve", "crime", "humor seco"], true],
  ["No Country for Old Men", 2007, "Crime", 122, "Estados Unidos", "Joel Coen", 82, 93, ["intenso", "complexo"], ["perseguicao", "destino", "tensao"], true],
  ["The Big Lebowski", 1998, "Comedia", 117, "Estados Unidos", "Joel Coen", 81, 80, ["leve", "comfort"], ["cult", "detetive", "Los Angeles"], false],
  ["Jackie Brown", 1997, "Crime", 154, "Estados Unidos", "Quentin Tarantino", 75, 88, ["intenso", "comfort"], ["crime", "dialogo", "anos 90"], false],
  ["Pulp Fiction", 1994, "Crime", 154, "Estados Unidos", "Quentin Tarantino", 89, 92, ["intenso", "leve"], ["cult", "dialogo", "crime"], true],
  ["Heat", 1995, "Crime", 170, "Estados Unidos", "Michael Mann", 83, 83, ["intenso", "complexo"], ["assalto", "Los Angeles", "profissional"], true],
  ["Collateral", 2004, "Crime", 120, "Estados Unidos", "Michael Mann", 75, 86, ["intenso"], ["noite", "taxi", "Los Angeles"], false],
  ["Mad Max: Fury Road", 2015, "Ficcao cientifica", 120, "Australia", "George Miller", 81, 97, ["intenso"], ["acao", "deserto", "energia"], true],
  ["Dune: Part One", 2021, "Ficcao cientifica", 155, "Estados Unidos", "Denis Villeneuve", 80, 83, ["complexo", "intenso"], ["deserto", "politica", "saga"], false],
  ["Dune: Part Two", 2024, "Ficcao cientifica", 166, "Estados Unidos", "Denis Villeneuve", 85, 92, ["complexo", "intenso"], ["deserto", "profecia", "saga"], true],
  ["Moonlight", 2016, "Drama", 111, "Estados Unidos", "Barry Jenkins", 74, 98, ["sensivel", "complexo"], ["identidade", "Miami", "intimo"], true],
  ["If Beale Street Could Talk", 2018, "Romance", 119, "Estados Unidos", "Barry Jenkins", 71, 95, ["sensivel", "nostalgia"], ["amor", "familia", "injustica"], false],
  ["Minari", 2020, "Drama", 115, "Estados Unidos", "Lee Isaac Chung", 74, 98, ["sensivel", "comfort"], ["familia", "imigracao", "fazenda"], false],
  ["The Farewell", 2019, "Drama", 100, "Estados Unidos", "Lulu Wang", 75, 97, ["sensivel", "comfort"], ["familia", "China", "segredo"], false],
  ["Everything Everywhere All at Once", 2022, "Ficcao cientifica", 139, "Estados Unidos", "Daniel Kwan", 78, 93, ["complexo", "leve", "sensivel"], ["multiverso", "familia", "caos"], true],
  ["The Zone of Interest", 2023, "Drama", 105, "Reino Unido", "Jonathan Glazer", 74, 93, ["complexo", "intenso"], ["Holocausto", "banalidade", "som"], false],
  ["Under the Skin", 2013, "Ficcao cientifica", 108, "Reino Unido", "Jonathan Glazer", 63, 84, ["complexo", "intenso"], ["alien", "estranho", "sensorial"], false],
  ["Roma", 2018, "Drama", 135, "Mexico", "Alfonso Cuaron", 77, 96, ["sensivel", "nostalgia"], ["memoria", "familia", "preto e branco"], true],
  ["Y Tu Mama Tambien", 2001, "Drama", 106, "Mexico", "Alfonso Cuaron", 77, 92, ["sensivel", "leve", "nostalgia"], ["estrada", "juventude", "desejo"], false],
  ["Pan's Labyrinth", 2006, "Drama", 118, "Mexico", "Guillermo del Toro", 82, 95, ["complexo", "sensivel"], ["fantasia", "guerra", "conto"], true],
  ["The Shape of Water", 2017, "Romance", 123, "Estados Unidos", "Guillermo del Toro", 73, 92, ["sensivel", "comfort"], ["fantasia", "monstro", "amor"], false],
  ["A Separation", 2011, "Drama", 123, "Ira", "Asghar Farhadi", 83, 99, ["complexo", "sensivel"], ["familia", "moral", "julgamento"], true],
  ["The Salesman", 2016, "Drama", 124, "Ira", "Asghar Farhadi", 77, 96, ["complexo", "intenso"], ["casal", "teatro", "culpa"], false],
  ["Capernaum", 2018, "Drama", 126, "Libano", "Nadine Labaki", 84, 90, ["sensivel", "intenso"], ["infancia", "sobrevivencia", "rua"], false],
  ["The Lunchbox", 2013, "Romance", 104, "India", "Ritesh Batra", 78, 97, ["comfort", "sensivel"], ["comida", "cartas", "solidao"], false]
];

function createCuratedMovie([title, year, genre, duration, country, director, imdb, rt, vibes, tags, favoriteSignal]) {
  return {
    title,
    year,
    decade: String(Math.floor(year / 10) * 10),
    genre,
    duration,
    country,
    director,
    imdb,
    rt,
    vibes,
    tags,
    seen: false,
    favoriteSignal,
    colors: colorPairForMovie(title.length + year + duration)
  };
}

curatedMovies.push(...extraCuratedMovies.map(createCuratedMovie));

let activeMood = "comfort";
let activeMode = "mood";
let profileLoaded = false;
let rerollOffset = 0;
let roulettePick = "";
let useTmdb = false;
let tmdbMovies = [];
let tmdbLoadInProgress = false;
const sessionSeed = typeof crypto !== "undefined" && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * 2 ** 32);
const posterCache = JSON.parse(localStorage.getItem("cinepick_poster_cache") || "{}");
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
  provider: document.querySelector("#provider"),
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
  omdbKey: document.querySelector("#omdb-key"),
  loadTmdb: document.querySelector("#load-tmdb"),
  hydratePosters: document.querySelector("#hydrate-posters"),
  useTmdb: document.querySelector("#use-tmdb"),
  tmdbStatus: document.querySelector("#tmdb-status"),
  reroll: document.querySelector("#reroll"),
  spin: document.querySelector("#spin"),
  rouletteWheel: document.querySelector("#roulette-wheel")
};

els.tmdbToken.value = localStorage.getItem("cinepick_tmdb_token") || "";
els.omdbKey.value = localStorage.getItem("cinepick_omdb_key") || "";
els.useTmdb.checked = localStorage.getItem("cinepick_use_tmdb") === "true";
useTmdb = els.useTmdb.checked;

applyPosterCache();

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

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function shuffleNoise(movie) {
  const key = `${sessionSeed}|${movieKey(movie.title, movie.year)}|${activeMode}|${activeMood}`;
  return (hashString(key) % 1000) / 1000;
}

function applyPosterCache() {
  curatedMovies.forEach((movie) => {
    const cached = posterCache[movieKey(movie.title, movie.year)];
    if (!cached) return;
    movie.posterUrl = cached.posterUrl || movie.posterUrl;
    movie.backdropUrl = cached.backdropUrl || movie.backdropUrl;
    movie.imdb = cached.imdb || movie.imdb;
    movie.rt = cached.rt || movie.rt;
    movie.tmdbVotes = cached.tmdbVotes || movie.tmdbVotes;
    movie.imdbId = cached.imdbId || movie.imdbId;
    movie.providers = cached.providers || movie.providers;
    movie.source = cached.source || movie.source || "curated-tmdb-poster";
  });
}

function cacheMovieEnhancement(movie) {
  posterCache[movieKey(movie.title, movie.year)] = {
    posterUrl: movie.posterUrl,
    backdropUrl: movie.backdropUrl,
    imdb: movie.imdb,
    rt: movie.rt,
    tmdbVotes: movie.tmdbVotes,
    imdbId: movie.imdbId,
    providers: movie.providers,
    source: movie.source
  };
  localStorage.setItem("cinepick_poster_cache", JSON.stringify(posterCache));
}

function cacheTmdbCatalog() {
  if (!tmdbMovies.length) return;
  localStorage.setItem("cinepick_tmdb_catalog", JSON.stringify({
    savedAt: Date.now(),
    movies: tmdbMovies
  }));
}

function restoreTmdbCatalogCache() {
  const cached = JSON.parse(localStorage.getItem("cinepick_tmdb_catalog") || "null");
  if (!cached?.movies?.length) return false;
  if (Date.now() - Number(cached.savedAt || 0) > tmdbCatalogConfig.cacheMaxAge) return false;

  tmdbMovies = cached.movies;
  useTmdb = true;
  els.useTmdb.checked = true;
  localStorage.setItem("cinepick_use_tmdb", "true");
  updateProviderFilter();
  els.tmdbStatus.textContent = `${tmdbMovies.length} filmes carregados do cache local. Atualizando em segundo plano.`;
  return true;
}

function updateProviderFilter() {
  const current = els.provider.value;
  const providers = [...new Set(activeCatalog().flatMap((movie) => movie.providers || []))]
    .sort((a, b) => a.localeCompare(b));

  els.provider.innerHTML = [
    `<option value="qualquer">Qualquer</option>`,
    ...providers.map((provider) => `<option value="${provider}">${provider}</option>`)
  ].join("");

  els.provider.value = providers.includes(current) ? current : "qualquer";
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

  return score + shuffleNoise(movie) * 9;
}

function filteredMovies() {
  return activeCatalog()
    .map((movie) => ({ ...movie, score: scoreMovie(movie) }))
    .filter((movie) => {
      if (els.genre.value !== "qualquer" && movie.genre !== els.genre.value) return false;
      if (els.duration.value !== "qualquer" && movieDuration(movie) && durationBucket(movieDuration(movie)) !== els.duration.value) return false;
      if (els.decade.value !== "qualquer" && movie.decade !== els.decade.value) return false;
      if (els.country.value !== "qualquer" && movie.country !== els.country.value) return false;
      if (els.provider.value !== "qualquer" && !(movie.providers || []).includes(els.provider.value)) return false;
      if (ratingAverage(movie) < Number(els.rating.value)) return false;
      if (els.hideWatched.checked && profileLoaded && wasWatched(movie)) return false;
      return true;
    })
    .sort((a, b) => b.score - a.score || shuffleNoise(b) - shuffleNoise(a));
}

function reasonFor(movie) {
  const providerText = movie.providers?.length ? `, disponivel em ${movie.providers.slice(0, 2).join(" ou ")}` : "";

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

    return `A roleta ignorou humor e sorteou dentro dos seus limites: ${parts.join(", ")}${providerText}. E pronto: agora e apertar play, nao abrir mais quinze abas.`;
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

  return `${parts.join(", ")}${providerText}. A sugestao tenta resolver a duvida sem transformar a noite em pesquisa.`;
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
    "x-tmdb-token": token.startsWith("Bearer ") ? token : `Bearer ${token}`,
    "Content-Type": "application/json;charset=utf-8"
  };
}

function omdbHeaders() {
  const key = els.omdbKey.value.trim();
  if (!key) return {};
  return { "x-omdb-key": key };
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
  const url = new URL("/api/tmdb", window.location.origin);
  url.searchParams.set("path", path);
  params.forEach((value, key) => url.searchParams.set(key, value));
  const response = await fetch(url, { headers: headers || {} });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || `TMDb respondeu ${response.status}.`);
  }
  return response.json();
}

async function omdbFetch(movie) {
  const key = els.omdbKey.value.trim();
  if (key) localStorage.setItem("cinepick_omdb_key", key);

  const params = new URLSearchParams();
  if (movie.imdbId) params.set("i", movie.imdbId);
  if (!movie.imdbId) {
    params.set("t", movie.title);
    params.set("y", String(movie.year));
  }

  const response = await fetch(`/api/omdb?${params.toString()}`, { headers: omdbHeaders() });
  if (!response.ok) return null;
  const payload = await response.json();
  if (payload.Response === "False") return null;
  return payload;
}

function rottenTomatoesFromOmdb(payload) {
  const rating = (payload.Ratings || []).find((item) => item.Source === "Rotten Tomatoes")?.Value || "";
  return Number(rating.replace("%", "")) || 0;
}

async function enrichRatingsFromOmdb(movie) {
  const payload = await omdbFetch(movie);
  if (!payload) return false;

  const imdb = Math.round((Number(payload.imdbRating) || 0) * 10);
  const rt = rottenTomatoesFromOmdb(payload);
  if (imdb) movie.imdb = imdb;
  if (rt) movie.rt = rt;
  movie.imdbId = payload.imdbID || movie.imdbId || "";
  movie.source = movie.source && movie.source.includes("tmdb") ? "tmdb-omdb" : "curated-omdb";
  cacheMovieEnhancement(movie);
  return Boolean(imdb || rt);
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

function providersFromDetails(details) {
  const br = details["watch/providers"]?.results?.BR || {};
  const providers = [...(br.flatrate || []), ...(br.rent || []), ...(br.buy || [])]
    .map((provider) => provider.provider_name)
    .filter(Boolean);
  return [...new Set(providers)].slice(0, 4);
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
    imdbId: details.external_ids?.imdb_id || "",
    providers: providersFromDetails(details),
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

async function loadTmdbCatalog({ auto = false } = {}) {
  if (tmdbLoadInProgress) return false;

  const token = els.tmdbToken.value.trim();
  if (token) {
    localStorage.setItem("cinepick_tmdb_token", token);
  }

  tmdbLoadInProgress = true;
  els.tmdbStatus.textContent = auto ? "Carregando catalogo expandido automaticamente..." : "Buscando catalogo expandido no TMDb...";
  els.loadTmdb.disabled = true;

  try {
    const params = tmdbParams();
    const query = normalize(els.director.value);
    if (query) {
      const directorId = await directorIdForQuery(query);
      if (directorId) params.set("with_crew", directorId);
    }

    const pages = await Promise.all(Array.from({ length: tmdbCatalogConfig.pages }, (_, index) => index + 1).map((page) => {
      const nextParams = new URLSearchParams(params);
      nextParams.set("page", String(page));
      return tmdbFetch("/discover/movie", nextParams);
    }));
    const baseResults = pages.flatMap((page) => page.results || []).filter((movie) => movie.poster_path);
    const uniqueResults = [...new Map(baseResults.map((movie) => [movie.id, movie])).values()].slice(0, tmdbCatalogConfig.limit);
    const detailed = [];

    for (let index = 0; index < uniqueResults.length; index += tmdbCatalogConfig.batchSize) {
      const batch = uniqueResults.slice(index, index + tmdbCatalogConfig.batchSize);
      const nextMovies = await Promise.all(batch.map(async (movie, offset) => {
        const details = await tmdbFetch(`/movie/${movie.id}`, new URLSearchParams({ append_to_response: "credits,external_ids,watch/providers", language: "pt-BR" }));
        const mapped = mapTmdbMovie(movie, details);
        if (index + offset < tmdbCatalogConfig.omdbEnrichLimit) {
          await enrichRatingsFromOmdb(mapped).catch(() => false);
        }
        return mapped;
      }));

      detailed.push(...nextMovies);
      tmdbMovies = detailed;
      useTmdb = true;
      els.useTmdb.checked = true;
      localStorage.setItem("cinepick_use_tmdb", "true");
      updateProviderFilter();
      cacheTmdbCatalog();
      els.tmdbStatus.textContent = `${tmdbMovies.length} de ${uniqueResults.length} filmes carregados com capas e streaming.`;
      render();
    }

    tmdbMovies = detailed;
    useTmdb = true;
    els.useTmdb.checked = true;
    localStorage.setItem("cinepick_use_tmdb", "true");
    updateProviderFilter();
    cacheTmdbCatalog();
    roulettePick = "";
    if (activeMode === "roulette") selectRouletteMovie(filteredMovies());
    els.tmdbStatus.textContent = `${tmdbMovies.length} filmes carregados do TMDb com capas oficiais.`;
    render();
    return true;
  } catch (error) {
    useTmdb = false;
    els.useTmdb.checked = false;
    localStorage.setItem("cinepick_use_tmdb", "false");
    els.tmdbStatus.textContent = `${error.message} Mantive a curadoria local ativa.`;
    render();
    return false;
  } finally {
    tmdbLoadInProgress = false;
    els.loadTmdb.disabled = false;
  }
}

async function searchTmdbAndHydrate() {
  els.loadTmdb.disabled = true;
  els.hydratePosters.disabled = true;
  const loaded = await loadTmdbCatalog();
  if (!loaded) {
    els.loadTmdb.disabled = false;
    els.hydratePosters.disabled = false;
    return;
  }
  await hydrateCuratedPosters();
  els.loadTmdb.disabled = false;
  els.hydratePosters.disabled = false;
}

async function findPosterForMovie(movie) {
  const params = new URLSearchParams({
    query: movie.title,
    language: "pt-BR",
    include_adult: "false",
    year: String(movie.year)
  });
  const result = await tmdbFetch("/search/movie", params);
  const match = (result.results || []).find((item) => item.poster_path && Number((item.release_date || "").slice(0, 4)) === Number(movie.year))
    || (result.results || []).find((item) => item.poster_path);

  if (!match) return false;
  const details = await tmdbFetch(`/movie/${match.id}`, new URLSearchParams({ append_to_response: "external_ids,watch/providers", language: "pt-BR" }));
  movie.posterUrl = `https://image.tmdb.org/t/p/w500${match.poster_path}`;
  if (match.backdrop_path) movie.backdropUrl = `https://image.tmdb.org/t/p/w780${match.backdrop_path}`;
  movie.imdb = Math.round((match.vote_average || movie.imdb / 10) * 10);
  movie.rt = Math.max(movie.rt || 0, Math.min(100, Math.round((match.vote_average || 0) * 10)));
  movie.tmdbVotes = match.vote_count || movie.tmdbVotes || 0;
  movie.imdbId = details.external_ids?.imdb_id || movie.imdbId || "";
  movie.providers = providersFromDetails(details);
  movie.source = movie.source || "curated-tmdb-poster";
  await enrichRatingsFromOmdb(movie).catch(() => false);
  cacheMovieEnhancement(movie);
  return true;
}

async function hydrateCuratedPosters() {
  const token = els.tmdbToken.value.trim();
  if (token) localStorage.setItem("cinepick_tmdb_token", token);

  els.hydratePosters.disabled = true;
  els.tmdbStatus.textContent = "Buscando capas oficiais da curadoria...";

  let found = 0;
  let attempted = 0;

  try {
    const pending = curatedMovies.filter((movie) => !movie.posterUrl);
    const batchSize = 6;

    for (let index = 0; index < pending.length; index += batchSize) {
      const batch = pending.slice(index, index + batchSize);
      const results = await Promise.all(batch.map((movie) => findPosterForMovie(movie).catch(() => false)));
      attempted += batch.length;
      found += results.filter(Boolean).length;
      updateProviderFilter();
      els.tmdbStatus.textContent = `Capas encontradas: ${found}. Processados: ${attempted} de ${pending.length}.`;
      render();
    }

    updateProviderFilter();
    els.tmdbStatus.textContent = `${found} capas oficiais adicionadas a curadoria local.`;
    render();
  } catch (error) {
    els.tmdbStatus.textContent = `${error.message} Configure TMDB_READ_TOKEN na Vercel ou cole um token no campo acima.`;
  } finally {
    els.hydratePosters.disabled = false;
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

  const hasOmdb = movie.source && movie.source.includes("omdb");
  const hasTmdb = movie.source && movie.source.includes("tmdb");
  const providerPills = (movie.providers || []).slice(0, 3).map((provider) => `<span class="pill">${provider}</span>`).join("");

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
        ${providerPills}
      </div>
      <div class="score-row">
        <div class="score"><strong>${movie.imdb}</strong><span>${hasOmdb || !hasTmdb ? "IMDb x10" : "TMDb x10"}</span></div>
        <div class="score"><strong>${hasTmdb && !hasOmdb ? movie.tmdbVotes : `${movie.rt}%`}</strong><span>${hasTmdb && !hasOmdb ? "votos" : "Rotten Tomatoes"}</span></div>
        <div class="score"><strong>${Math.round(Math.max(movie.score, 0))}</strong><span>${activeMode === "roulette" ? "peso" : "encaixe"}</span></div>
      </div>
      <div class="rec-actions">
        <button type="button" data-next>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          Proximo
        </button>
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
  els.shortlist.innerHTML = list.slice(1, 5).map((movie) => {
    const providerLine = movie.providers?.length ? `<br>${movie.providers.slice(0, 2).join(" / ")}` : "";
    return `
    <article class="mini-card">
      <div class="mini-poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
        ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="Capa de ${movie.title}">` : ""}
        <span>${movie.year}</span>
        <strong>${movie.title}</strong>
      </div>
      <h3>${movie.title}</h3>
      <p>${movie.genre} | ${movie.duration ? `${movie.duration} min` : "duracao n/d"}<br>${movie.director}${providerLine}</p>
    </article>
  `;
  }).join("");
  renderMoreOptions(list);
}

function renderMoreOptions(list) {
  const extra = list.slice(5, 29);
  els.moreCount.textContent = extra.length ? `${extra.length} filmes` : "sem extras";
  els.moreGrid.innerHTML = extra.map((movie) => {
    const providerLine = movie.providers?.length ? `<br>${movie.providers.slice(0, 2).join(" / ")}` : "";
    return `
    <article class="more-card">
      <div class="more-poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
        ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="">` : ""}
        <span>${movie.year}</span>
      </div>
      <div>
        <h3>${movie.title}</h3>
        <p>${movie.genre} | ${movie.country}<br>${movie.director}${providerLine}</p>
      </div>
    </article>
  `;
  }).join("");
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
  searchTmdbAndHydrate();
});

els.hydratePosters.addEventListener("click", () => {
  hydrateCuratedPosters();
});

els.useTmdb.addEventListener("change", () => {
  useTmdb = els.useTmdb.checked;
  localStorage.setItem("cinepick_use_tmdb", String(useTmdb));

  if (useTmdb && !tmdbMovies.length) {
    els.tmdbStatus.textContent = "Clique em Atualizar para carregar filmes reais do TMDb.";
  }

  roulettePick = "";
  updateProviderFilter();
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
  if (event.target.closest("[data-next]")) {
    els.reroll.click();
    return;
  }

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

restoreTmdbCatalogCache();
updateProviderFilter();
render();
window.setTimeout(() => {
  loadTmdbCatalog({ auto: true });
}, 700);
