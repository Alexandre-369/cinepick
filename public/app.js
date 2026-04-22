const moods = [
  { id: "leve", label: "Rir sem culpa", hint: "leve, rápido, sem boleto emocional" },
  { id: "comfort", label: "Cobertor cinematográfico", hint: "aconchego, reprise afetiva, zero susto" },
  { id: "nostalgia", label: "Saudade em 24 fps", hint: "cara de outro tempo, cheiro de locadora" },
  { id: "complexo", label: "Cabeça acesa", hint: "quebra-cabeça, teoria no banho" },
  { id: "intenso", label: "Unhas em risco", hint: "pressão, crime, respira fundo" },
  { id: "sensivel", label: "Coração mole", hint: "bonito, humano, talvez um cisco" },
  { id: "acao", label: "Pipoca voando", hint: "ritmo, fuga, soco coreografado" },
  { id: "surpresa", label: "Roleta cult", hint: "fora da bolha, estranho do bem" }
];

const genreIds = {
  "Comedia": 35,
  "Drama": 18,
  "Ficcao cientifica": 878,
  "Suspense": 53,
  "Romance": 10749,
  "Crime": 80,
  "Acao": 28,
  "Animacao": 16,
  "Familia": 10751,
  "Terror": 27,
  "Misterio": 9648
};

const tmdbGenres = {
  28: "Acao",
  12: "Aventura",
  16: "Animacao",
  35: "Comedia",
  80: "Crime",
  99: "Documentario",
  18: "Drama",
  14: "Fantasia",
  36: "Historia",
  27: "Terror",
  10402: "Musica",
  9648: "Misterio",
  878: "Ficcao cientifica",
  53: "Suspense",
  10749: "Romance",
  10751: "Familia",
  10752: "Guerra",
  37: "Faroeste"
};

const countryCodes = {
  "Alemanha": "DE",
  "Africa do Sul": "ZA",
  "Arabia Saudita": "SA",
  "Argentina": "AR",
  "Austria": "AT",
  "Australia": "AU",
  "Belgica": "BE",
  "Brasil": "BR",
  "Canada": "CA",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Costa do Marfim": "CI",
  "Dinamarca": "DK",
  "Egito": "EG",
  "Espanha": "ES",
  "Estonia": "EE",
  "Etiopia": "ET",
  "Filipinas": "PH",
  "Estados Unidos": "US",
  "Georgia": "GE",
  "Grecia": "GR",
  "Guatemala": "GT",
  "Hungria": "HU",
  "Hong Kong": "HK",
  "India": "IN",
  "Ira": "IR",
  "Indonesia": "ID",
  "Irlanda": "IE",
  "Italia": "IT",
  "Israel": "IL",
  "Jordania": "JO",
  "Lesoto": "LS",
  "Libano": "LB",
  "Coreia do Sul": "KR",
  "Japao": "JP",
  "Franca": "FR",
  "Macedonia": "MK",
  "Mali": "ML",
  "Marrocos": "MA",
  "Mauritania": "MR",
  "Mexico": "MX",
  "Noruega": "NO",
  "Nova Zelandia": "NZ",
  "Palestina": "PS",
  "Paises Baixos": "NL",
  "Peru": "PE",
  "Polonia": "PL",
  "Portugal": "PT",
  "Quenia": "KE",
  "Romenia": "RO",
  "Russia": "RU",
  "Senegal": "SN",
  "Suecia": "SE",
  "Tailandia": "TH",
  "Taiwan": "TW",
  "Tunisia": "TN",
  "Turquia": "TR",
  "Uruguai": "UY",
  "Vietna": "VN",
  "Reino Unido": "GB"
};

const tmdbCatalogConfig = {
  cacheVersion: 9,
  limit: 420,
  batchSize: 14,
  omdbEnrichLimit: 24,
  cacheMaxAge: 1000 * 60 * 60 * 8
};

const catalogDecades = [1970, 1980, 1990, 2000, 2010, 2020];
const catalogCountries = ["BR", "US", "GB", "FR", "JP", "KR", "IN", "MX", "DE", "IT", "ES", "AR"];
const catalogSorts = ["vote_count.desc", "popularity.desc", "vote_average.desc", "revenue.desc"];
const recommendationHistoryKey = "cinepick_recommendation_history_v1";
const recommendationHistoryLimit = 90;
const posterCacheKey = "cinepick_poster_cache_v2";
const unavailableStreamingLabel = "Indisponível para streaming";

const displayNames = {
  Acao: "Ação",
  "Africa do Sul": "África do Sul",
  Animacao: "Animação",
  "Arabia Saudita": "Arábia Saudita",
  AT: "Áustria",
  Austria: "Áustria",
  Belgica: "Bélgica",
  Comedia: "Comédia",
  Colombia: "Colômbia",
  "Costa do Marfim": "Costa do Marfim",
  Documentario: "Documentário",
  Egito: "Egito",
  Estonia: "Estônia",
  Etiopia: "Etiópia",
  Familia: "Família",
  Fantasia: "Fantasia",
  Filipinas: "Filipinas",
  Ficcao: "Ficção",
  "Ficcao cientifica": "Ficção científica",
  Historia: "História",
  Japao: "Japão",
  Franca: "França",
  Georgia: "Geórgia",
  Grecia: "Grécia",
  Guatemala: "Guatemala",
  Hungria: "Hungria",
  Australia: "Austrália",
  Canada: "Canadá",
  India: "Índia",
  Indonesia: "Indonésia",
  Ira: "Irã",
  Italia: "Itália",
  Israel: "Israel",
  Jordania: "Jordânia",
  Libano: "Líbano",
  Lesoto: "Lesoto",
  Macedonia: "Macedônia",
  Mali: "Mali",
  Marrocos: "Marrocos",
  Mauritania: "Mauritânia",
  Mexico: "México",
  "Nova Zelandia": "Nova Zelândia",
  Palestina: "Palestina",
  "Paises Baixos": "Países Baixos",
  Peru: "Peru",
  Polonia: "Polônia",
  Quenia: "Quênia",
  Romenia: "Romênia",
  Russia: "Rússia",
  Senegal: "Senegal",
  Suecia: "Suécia",
  Tailandia: "Tailândia",
  Tunisia: "Tunísia",
  Uruguai: "Uruguai",
  Vietna: "Vietnã",
  ZA: "África do Sul",
  acao: "ação",
  adolescencia: "adolescência",
  "animacao adulta": "animação adulta",
  acusacao: "acusação",
  animacao: "animação",
  classico: "clássico",
  colonizacao: "colonização",
  corrupcao: "corrupção",
  comedia: "comédia",
  diaspora: "diáspora",
  documentario: "documentário",
  doenca: "doença",
  duvida: "dúvida",
  epico: "épico",
  estacao: "estação",
  familia: "família",
  ficcao: "ficção",
  "ficcao cientifica": "ficção científica",
  infancia: "infância",
  imigracao: "imigração",
  injustica: "injustiça",
  investigacao: "investigação",
  mae: "mãe",
  "mae e filha": "mãe e filha",
  memoria: "memória",
  migracao: "migração",
  Misterio: "Mistério",
  misterio: "mistério",
  Musica: "Música",
  musica: "música",
  ocupacao: "ocupação",
  operistico: "operístico",
  politica: "política",
  politico: "político",
  "pos-colonial": "pós-colonial",
  perseguicao: "perseguição",
  predio: "prédio",
  pressao: "pressão",
  prisao: "prisão",
  refugio: "refúgio",
  revolucao: "revolução",
  rapido: "rápido",
  satira: "sátira",
  sertao: "sertão",
  silencio: "silêncio",
  solidao: "solidão",
  sobrevivencia: "sobrevivência",
  tensao: "tensão",
  tradicao: "tradição",
  violencia: "violência",
  nostalgia: "nostalgia",
  comfort: "comfort",
  leve: "leve",
  complexo: "complexo",
  intenso: "intenso",
  sensivel: "sensível",
  surpresa: "surpresa"
};

const posterTitleAliases = {
  "About Time": ["Questão de Tempo"],
  "A Brighter Summer Day": ["Um Dia Quente de Verão", "Guling jie shaonian sha ren shijian", "Gu ling jie shao nian sha ren shi jian"],
  "A Scanner Darkly": ["O Homem Duplo", "A Scanner Darkly: O Homem Duplo"],
  "Atlantics": ["Atlantique"],
  "Before Sunrise": ["Antes do Amanhecer"],
  "Black Girl": ["La noire de...", "A Negra de..."],
  "Booksmart": ["Fora de Série"],
  "Cabra Marcado para Morrer": ["Twenty Years Later", "Cabra marcado para morrer"],
  "Cairo Station": ["Bab el Hadid", "Cairo Central"],
  "Central Station": ["Central do Brasil"],
  "Chungking Express": ["Amores Expressos"],
  "City of God": ["Cidade de Deus"],
  "Decision to Leave": ["Decisão de Partir"],
  "Divine Intervention": ["Intervenção Divina"],
  "Drive My Car": ["Doraibu mai ka"],
  "Deus e o Diabo na Terra do Sol": ["Black God, White Devil"],
  "Edificio Master": ["Edifício Master", "Edifício Master: Uma obra sobre pessoas como você e eu"],
  "Felicite": ["Félicité"],
  "Flee": ["Fuga", "Flugt"],
  "Force Majeure": ["Força Maior"],
  "Honeyland": ["Terra do Mel"],
  "I Lost My Body": ["Perdi Meu Corpo"],
  "If Beale Street Could Talk": ["Se a Rua Beale Falasse"],
  "In Bruges": ["Na Mira do Chefe"],
  "In the Mood for Love": ["Amor à Flor da Pele"],
  "Ida": ["Ida"],
  "Little Miss Sunshine": ["Pequena Miss Sunshine"],
  "Macunaima": ["Macunaíma"],
  "Mary and Max": ["Mary e Max"],
  "Minari": ["Minari: Em Busca da Felicidade"],
  "Monos": ["Monos: Entre o Céu e o Inferno"],
  "Mother": ["Madeo"],
  "Moonrise Kingdom": ["Moonrise Kingdom: Amor Sublime"],
  "My Neighbor Totoro": ["Meu Amigo Totoro"],
  "Ilha das Flores": ["Isle of Flowers"],
  "Neighboring Sounds": ["O Som ao Redor", "Neighbouring Sounds"],
  "Night of the Kings": ["La Nuit des rois", "Noite dos Reis"],
  "No Country for Old Men": ["Onde os Fracos Não Têm Vez"],
  "Oldboy": ["Oldeuboi"],
  "Once": ["Apenas Uma Vez"],
  "Ong-Bak": ["Ong-Bak: Guerreiro Sagrado"],
  "Os Fuzis": ["The Guns"],
  "Paddington 2": ["As Aventuras de Paddington 2"],
  "Palm Springs": ["Palm Springs: O Filme"],
  "Pan's Labyrinth": ["O Labirinto do Fauno"],
  "Paradise Now": ["Paradise Now: Paraíso Agora"],
  "Past Lives": ["Vidas Passadas"],
  "Persepolis": ["Persépolis"],
  "Portrait of a Lady on Fire": ["Retrato de uma Jovem em Chamas"],
  "Punch-Drunk Love": ["Embriagado de Amor"],
  "Rafiki": ["Rafiki: Amigas para Sempre"],
  "Pixote": ["Pixote: A Lei do Mais Fraco"],
  "Santiago": ["Santiago: Uma Reflexão Sobre o Material Bruto"],
  "Shoplifters": ["Assunto de Família"],
  "Sing Street": ["Sing Street: Música e Sonho"],
  "Spirited Away": ["A Viagem de Chihiro"],
  "Supa Modo": ["Supa Modo: O Filme"],
  "Taste of Cherry": ["Gosto de Cereja"],
  "Terra em Transe": ["Entranced Earth", "Land in Anguish"],
  "The Act of Killing": ["O Ato de Matar", "Jagal"],
  "The Babadook": ["O Babadook"],
  "The Banshees of Inisherin": ["Os Banshees de Inisherin"],
  "The Big Lebowski": ["O Grande Lebowski"],
  "The Big Sick": ["Doentes de Amor"],
  "The Castle": ["Um Sonho Quase Perfeito"],
  "The Farewell": ["A Despedida"],
  "The Favourite": ["A Favorita"],
  "The Grand Budapest Hotel": ["O Grande Hotel Budapeste"],
  "The Given Word": ["O Pagador de Promessas", "Keeper of Promises"],
  "The Handmaiden": ["A Criada"],
  "The Hunt": ["A Caça"],
  "The Insult": ["O Insulto"],
  "The Intouchables": ["Intocáveis"],
  "The Lobster": ["O Lagosta"],
  "The Lunchbox": ["A Lancheira"],
  "The Milk of Sorrow": ["A Teta Assustada"],
  "The Present": ["O Presente"],
  "The Raid": ["Operação Invasão", "Serbuan maut"],
  "The Raid 2": ["Operação Invasão 2"],
  "The Royal Tenenbaums": ["Os Excêntricos Tenenbaums"],
  "The Salesman": ["O Apartamento"],
  "The Secret in Their Eyes": ["O Segredo dos Seus Olhos"],
  "The Shape of Water": ["A Forma da Água"],
  "The Square": ["A Praça"],
  "The Tale of the Princess Kaguya": ["O Conto da Princesa Kaguya"],
  "The Worst Person in the World": ["A Pior Pessoa do Mundo"],
  "This Is Not a Burial, It's a Resurrection": ["This Is Not a Burial Its a Resurrection"],
  "Touki Bouki": ["A Viagem da Hiena"],
  "Uncle Boonmee Who Can Recall His Past Lives": ["Tio Boonmee, Que Pode Recordar Suas Vidas Passadas"],
  "Wadjda": ["O Sonho de Wadjda"],
  "Waltz with Bashir": ["Valsa com Bashir"],
  "Whale Rider": ["Encantadora de Baleias"],
  "Where Is the Friend's House?": ["Onde Fica a Casa do Meu Amigo?"],
  "Wild Tales": ["Relatos Selvagens"],
  "Xala": ["A Maldição"],
  "Y Tu Mama Tambien": ["E Sua Mãe Também"],
  "Vidas Secas": ["Barren Lives"],
  "Waking Life": ["Waking Life: O Despertar da Vida"],
  "Yi Yi": ["Yi Yi: Um e Dois", "A One and a Two", "Yi Yi: A One and a Two"]
};

const moodProfiles = {
  leve: {
    preferredGenres: ["Comedia", "Animacao", "Familia", "Aventura", "Romance", "Musica"],
    avoidGenres: ["Crime", "Terror", "Suspense", "Guerra", "Misterio"],
    hardAvoidGenres: ["Crime", "Terror", "Guerra"],
    conflictingVibes: ["intenso", "complexo"],
    requiredPositive: true,
    longMoviePenalty: 145
  },
  comfort: {
    preferredGenres: ["Comedia", "Animacao", "Familia", "Romance", "Musica", "Fantasia"],
    avoidGenres: ["Drama", "Terror", "Guerra", "Crime", "Suspense", "Acao", "Misterio", "Ficcao cientifica"],
    hardAvoidGenres: ["Terror", "Crime", "Guerra", "Suspense"],
    conflictingVibes: ["intenso", "complexo"],
    requiredPositive: true,
    longMoviePenalty: 155
  },
  nostalgia: {
    preferredGenres: ["Comedia", "Animacao", "Familia", "Aventura", "Romance", "Fantasia", "Drama"],
    avoidGenres: ["Terror"],
    oldBonus: true
  },
  complexo: {
    preferredGenres: ["Drama", "Ficcao cientifica", "Misterio", "Suspense", "Crime", "Documentario"],
    avoidGenres: ["Familia", "Animacao"],
    keywords: ["tempo", "memoria", "sonho", "identidade", "misterio", "obsessao", "politica"]
  },
  intenso: {
    preferredGenres: ["Suspense", "Crime", "Terror", "Misterio", "Acao", "Guerra"],
    avoidGenres: ["Familia", "Animacao", "Comedia", "Romance", "Musica"],
    hardAvoidGenres: ["Familia", "Animacao", "Musica"],
    conflictingVibes: ["comfort"],
    requiredPositive: true
  },
  sensivel: {
    preferredGenres: ["Drama", "Romance", "Familia", "Musica"],
    avoidGenres: ["Terror", "Acao", "Guerra"],
    keywords: ["familia", "amor", "luto", "memoria", "infancia", "solidão", "solidao"]
  },
  acao: {
    preferredGenres: ["Acao", "Aventura", "Ficcao cientifica", "Fantasia", "Faroeste"],
    avoidGenres: ["Romance", "Musica", "Documentario"],
    hardAvoidGenres: ["Documentario"],
    keywords: ["perseguicao", "aventura", "guerra", "fuga", "assalto", "energia", "missao"],
    longMoviePenalty: 170
  },
  surpresa: {
    preferredGenres: ["Documentario", "Ficcao cientifica", "Fantasia", "Misterio", "Terror", "Drama", "Comedia"],
    avoidGenres: ["Familia"],
    conflictingVibes: ["comfort"],
    keywords: ["estranho", "surreal", "cult", "identidade", "sonho", "metalinguagem", "sensorial", "politica", "obsessao"],
    surpriseMode: true
  }
};

const moodReasonPools = {
  leve: [
    ({ genre, tag }) => `Para rir sem virar tarefa, a escolha puxa ${genre.toLowerCase()} com ${tag}.`,
    ({ director, tagPair }) => `${director} entra pelo lado mais solto, apoiado em ${tagPair}.`,
    ({ decade, country, genre }) => `O clima leve vem de ${genre.toLowerCase()} dos ${decade}, com sabor de ${country}.`,
    ({ tag, minutes }) => `Boa para uma sessão sem peso: ${tag}, ${minutes}, e pouca vontade de pausar para pesquisar contexto.`
  ],
  comfort: [
    ({ genre, tag }) => `O conforto aqui nasce de ${genre.toLowerCase()} com ${tag}, mais acolhimento do que tensão.`,
    ({ director, country }) => `${director} segura uma sessão de ${country} com jeito de filme para baixar a guarda.`,
    ({ tagPair, decade }) => `Tem cara de reencontro: ${tagPair}, recorte dos ${decade}, e ritmo para ficar dentro da história.`,
    ({ genre, minutes }) => `É uma aposta de ${genre.toLowerCase()} em ${minutes}, boa quando a noite pede menos atrito.`
  ],
  nostalgia: [
    ({ decade, country, tag }) => `A nostalgia vem pelo recorte dos ${decade}, por ${country}, e por esse detalhe de ${tag}.`,
    ({ director, decade }) => `${director} traz uma textura de ${decade} que ajuda o filme a parecer lembrança, não tendência.`,
    ({ genre, tagPair }) => `Vai no passado sem museu: ${genre.toLowerCase()} com ${tagPair}.`,
    ({ country, director }) => `A graça é voltar a outro tempo pelo olhar de ${director}, com origem em ${country}.`
  ],
  complexo: [
    ({ director, tagPair }) => `Para pensar, a força está em ${director} cruzando ${tagPair}.`,
    ({ genre, decade, scoreText }) => `A base é ${genre.toLowerCase()} dos ${decade}, ${scoreText}, com camadas suficientes para render conversa depois.`,
    ({ country, tag }) => `A escolha abre uma porta menos óbvia: ${country}, ${tag}, e mais pergunta do que resposta pronta.`,
    ({ director, genre }) => `${director} faz ${genre.toLowerCase()} com densidade, bom para quando a cabeça quer mastigar o filme.`
  ],
  intenso: [
    ({ genre, tag }) => `Para tensão, a recomendação mira ${genre.toLowerCase()} com ${tag} no centro.`,
    ({ director, minutes }) => `${director} entrega pressão em ${minutes}, sem depender só de barulho ou susto.`,
    ({ country, decade, tagPair }) => `O peso vem de ${country}, dos ${decade}, misturando ${tagPair}.`,
    ({ scoreText, genre }) => `É uma escolha ${scoreText} de ${genre.toLowerCase()}, boa para entrar em modo alerta.`
  ],
  sensivel: [
    ({ tagPair, director }) => `Para um humor mais sensível, ${director} trabalha ${tagPair} sem pressa.`,
    ({ genre, country }) => `A aposta é ${genre.toLowerCase()} de ${country}, com atenção ao humano antes do espetáculo.`,
    ({ decade, tag }) => `O recorte dos ${decade} ajuda ${tag} a soar íntimo em vez de calculado.`,
    ({ minutes, scoreText }) => `Cabe numa sessão de ${minutes} e chega ${scoreText}, com espaço para silêncio e afeto.`
  ],
  acao: [
    ({ genre, tag }) => `Para ação, o impulso vem de ${genre.toLowerCase()} com ${tag} puxando o ritmo.`,
    ({ director, minutes }) => `${director} aparece como boa escolha para energia em ${minutes}.`,
    ({ country, tagPair }) => `A recomendação foge do piloto automático: ${country}, ${tagPair}, e movimento real.`,
    ({ decade, scoreText }) => `Tem pulso de ${decade} e chega ${scoreText}, então a rotação não depende só de explosão.`
  ],
  surpresa: [
    ({ country, director }) => `A surpresa está em sair da rota comum: ${country}, por ${director}.`,
    ({ genre, tagPair }) => `Vai pelo desvio interessante: ${genre.toLowerCase()} com ${tagPair}.`,
    ({ decade, tag }) => `O ponto fora da curva é esse encontro entre ${decade} e ${tag}.`,
    ({ scoreText, director }) => `${director} entra como aposta menos previsível, mas ${scoreText}.`
  ],
  roulette: [
    ({ genre, director, country }) => `A roleta puxou ${genre.toLowerCase()} de ${country}, dirigido por ${director}, sem consultar o humor do dia.`,
    ({ decade, tagPair }) => `O giro caiu nos ${decade} e trouxe ${tagPair}; agora a graça é aceitar o desvio.`,
    ({ director, scoreText }) => `Saiu uma escolha de ${director}, ${scoreText}, para cortar a indecisão pela raiz.`,
    ({ country, tag }) => `A roleta foi buscar ${country} e ${tag}; é o tipo de acaso que ainda tem critério.`
  ]
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
  ["The Lunchbox", 2013, "Romance", 104, "India", "Ritesh Batra", 78, 97, ["comfort", "sensivel"], ["comida", "cartas", "solidao"], false],
  ["Touki Bouki", 1973, "Drama", 95, "Senegal", "Djibril Diop Mambety", 70, 89, ["surpresa", "complexo", "nostalgia"], ["Senegal", "road movie", "rebeldia"], false],
  ["Black Girl", 1966, "Drama", 65, "Senegal", "Ousmane Sembene", 74, 96, ["complexo", "sensivel", "nostalgia"], ["colonialismo", "diaspora", "curta"], true],
  ["Xala", 1975, "Comedia", 123, "Senegal", "Ousmane Sembene", 72, 89, ["complexo", "leve", "nostalgia"], ["satira", "pos-colonial", "elite"], false],
  ["Moolaade", 2004, "Drama", 124, "Senegal", "Ousmane Sembene", 77, 99, ["sensivel", "complexo"], ["comunidade", "mulheres", "tradicao"], false],
  ["Yeelen", 1987, "Drama", 105, "Mali", "Souleymane Cisse", 69, 88, ["surpresa", "complexo", "nostalgia"], ["mito", "magia", "Mali"], false],
  ["Timbuktu", 2014, "Drama", 96, "Mauritania", "Abderrahmane Sissako", 71, 99, ["sensivel", "complexo", "intenso"], ["ocupacao", "poesia", "Sahel"], false],
  ["Bamako", 2006, "Drama", 115, "Mali", "Abderrahmane Sissako", 67, 81, ["complexo", "surpresa"], ["politica", "tribunal", "Africa"], false],
  ["Atlantics", 2019, "Drama", 106, "Senegal", "Mati Diop", 67, 96, ["sensivel", "surpresa"], ["fantasma", "migracao", "romance"], false],
  ["This Is Not a Burial, It's a Resurrection", 2019, "Drama", 120, "Lesoto", "Lemohang Jeremiah Mosese", 73, 100, ["sensivel", "complexo", "surpresa"], ["luto", "terra", "Lesoto"], false],
  ["Night of the Kings", 2020, "Drama", 93, "Costa do Marfim", "Philippe Lacote", 65, 97, ["surpresa", "intenso"], ["prisao", "oralidade", "mito"], false],
  ["Rafiki", 2018, "Romance", 83, "Quenia", "Wanuri Kahiu", 68, 94, ["sensivel", "leve"], ["amor", "Nairobi", "cor"], false],
  ["Supa Modo", 2018, "Drama", 74, "Quenia", "Likarion Wainaina", 72, 100, ["sensivel", "comfort"], ["infancia", "super-heroina", "comunidade"], false],
  ["Felicite", 2017, "Drama", 123, "Senegal", "Alain Gomis", 65, 97, ["sensivel", "complexo"], ["musica", "Kinshasa", "maternidade"], false],
  ["Cairo Station", 1958, "Drama", 77, "Egito", "Youssef Chahine", 75, 100, ["intenso", "nostalgia", "surpresa"], ["obsessao", "estacao", "Egito"], false],
  ["The Square", 2013, "Documentario", 108, "Egito", "Jehane Noujaim", 81, 100, ["complexo", "intenso"], ["documentario", "revolucao", "Egito"], false],
  ["Honeyland", 2019, "Documentario", 89, "Macedonia", "Tamara Kotevska", 80, 100, ["sensivel", "complexo", "surpresa"], ["documentario", "natureza", "abelhas"], false],
  ["Close-Up", 1990, "Documentario", 98, "Ira", "Abbas Kiarostami", 82, 89, ["complexo", "surpresa"], ["documentario", "identidade", "cinema"], true],
  ["Taste of Cherry", 1997, "Drama", 95, "Ira", "Abbas Kiarostami", 77, 84, ["complexo", "sensivel"], ["existencial", "estrada", "silencio"], false],
  ["Where Is the Friend's House?", 1987, "Drama", 83, "Ira", "Abbas Kiarostami", 81, 100, ["sensivel", "comfort", "nostalgia"], ["infancia", "amizade", "Iran"], false],
  ["Persepolis", 2007, "Animacao", 96, "Franca", "Marjane Satrapi", 80, 96, ["complexo", "sensivel"], ["animacao adulta", "memoria", "Iran"], true],
  ["Waltz with Bashir", 2008, "Animacao", 90, "Israel", "Ari Folman", 80, 96, ["complexo", "intenso"], ["animacao adulta", "memoria", "guerra"], true],
  ["Theeb", 2014, "Drama", 100, "Jordania", "Naji Abu Nowar", 72, 97, ["intenso", "surpresa"], ["deserto", "sobrevivencia", "beduino"], false],
  ["Wadjda", 2012, "Drama", 98, "Arabia Saudita", "Haifaa al-Mansour", 75, 99, ["sensivel", "leve"], ["infancia", "bicicleta", "Arabia"], false],
  ["The Insult", 2017, "Drama", 113, "Libano", "Ziad Doueiri", 76, 86, ["intenso", "complexo"], ["tribunal", "memoria", "Libano"], false],
  ["The Present", 2020, "Drama", 24, "Palestina", "Farah Nabulsi", 76, 100, ["sensivel", "intenso"], ["curta", "fronteira", "familia"], false],
  ["Divine Intervention", 2002, "Comedia", 92, "Palestina", "Elia Suleiman", 66, 81, ["surpresa", "leve", "complexo"], ["absurdo", "politica", "Palestina"], false],
  ["Paradise Now", 2005, "Drama", 90, "Palestina", "Hany Abu-Assad", 74, 89, ["intenso", "complexo"], ["politica", "amizade", "dilema"], false],
  ["Foxtrot", 2017, "Drama", 113, "Israel", "Samuel Maoz", 72, 94, ["complexo", "intenso"], ["luto", "guerra", "absurdo"], false],
  ["Uncle Boonmee Who Can Recall His Past Lives", 2010, "Fantasia", 114, "Tailandia", "Apichatpong Weerasethakul", 67, 89, ["surpresa", "complexo"], ["fantasma", "selva", "memoria"], true],
  ["Tropical Malady", 2004, "Romance", 118, "Tailandia", "Apichatpong Weerasethakul", 71, 82, ["surpresa", "complexo", "sensivel"], ["selva", "desejo", "mito"], false],
  ["Syndromes and a Century", 2006, "Drama", 105, "Tailandia", "Apichatpong Weerasethakul", 74, 87, ["surpresa", "sensivel"], ["memoria", "hospital", "Tailandia"], false],
  ["Bad Genius", 2017, "Suspense", 130, "Tailandia", "Nattawut Poonpiriya", 76, 100, ["intenso", "acao"], ["prova", "golpe", "ritmo"], false],
  ["Ong-Bak", 2003, "Acao", 105, "Tailandia", "Prachya Pinkaew", 71, 85, ["acao", "intenso"], ["luta", "muay thai", "energia"], false],
  ["The Raid", 2011, "Acao", 101, "Indonesia", "Gareth Evans", 76, 87, ["acao", "intenso"], ["luta", "predio", "adrenalina"], true],
  ["The Raid 2", 2014, "Acao", 150, "Indonesia", "Gareth Evans", 79, 82, ["acao", "intenso"], ["crime", "luta", "operistico"], false],
  ["A Touch of Sin", 2013, "Drama", 130, "China", "Jia Zhangke", 71, 94, ["complexo", "intenso"], ["China", "violencia", "sociedade"], false],
  ["Yi Yi", 2000, "Drama", 173, "Taiwan", "Edward Yang", 81, 96, ["sensivel", "complexo"], ["familia", "Taipei", "vida"], true],
  ["A Brighter Summer Day", 1991, "Drama", 237, "Taiwan", "Edward Yang", 84, 100, ["complexo", "nostalgia"], ["juventude", "Taiwan", "epico"], false],
  ["In the Mood for Love", 2000, "Romance", 98, "Hong Kong", "Wong Kar-wai", 81, 91, ["sensivel", "nostalgia"], ["desejo", "Hong Kong", "estilo"], true],
  ["Chungking Express", 1994, "Romance", 102, "Hong Kong", "Wong Kar-wai", 80, 88, ["leve", "nostalgia", "surpresa"], ["noite", "pop", "Hong Kong"], true],
  ["Deus e o Diabo na Terra do Sol", 1964, "Drama", 120, "Brasil", "Glauber Rocha", 72, 100, ["complexo", "nostalgia", "surpresa"], ["Cinema Novo", "sertao", "politico"], true],
  ["Terra em Transe", 1967, "Drama", 106, "Brasil", "Glauber Rocha", 73, 95, ["complexo", "intenso", "nostalgia"], ["Cinema Novo", "politica", "poesia"], true],
  ["Vidas Secas", 1963, "Drama", 103, "Brasil", "Nelson Pereira dos Santos", 75, 100, ["sensivel", "complexo", "nostalgia"], ["Cinema Novo", "sertao", "familia"], true],
  ["Os Fuzis", 1964, "Drama", 80, "Brasil", "Ruy Guerra", 75, 95, ["intenso", "complexo", "nostalgia"], ["Cinema Novo", "fome", "militares"], false],
  ["Macunaima", 1969, "Comedia", 108, "Brasil", "Joaquim Pedro de Andrade", 70, 90, ["surpresa", "leve", "nostalgia"], ["tropicalismo", "satira", "Brasil"], false],
  ["Cabra Marcado para Morrer", 1984, "Documentario", 119, "Brasil", "Eduardo Coutinho", 84, 100, ["complexo", "sensivel"], ["documentario", "memoria", "politica"], true],
  ["Edificio Master", 2002, "Documentario", 110, "Brasil", "Eduardo Coutinho", 79, 100, ["sensivel", "surpresa"], ["documentario", "conversa", "Rio"], false],
  ["Santiago", 2007, "Documentario", 80, "Brasil", "Joao Moreira Salles", 79, 100, ["complexo", "sensivel"], ["documentario", "memoria", "arquivo"], false],
  ["Ilha das Flores", 1989, "Documentario", 13, "Brasil", "Jorge Furtado", 85, 100, ["complexo", "surpresa"], ["curta", "satira", "capitalismo"], true],
  ["Que Horas Ela Volta?", 2015, "Drama", 112, "Brasil", "Anna Muylaert", 77, 97, ["sensivel", "complexo"], ["classe", "familia", "Brasil"], false],
  ["Anomalisa", 2015, "Animacao", 90, "Estados Unidos", "Charlie Kaufman", 72, 91, ["complexo", "sensivel", "surpresa"], ["animacao adulta", "solidao", "Kaufman"], true],
  ["Waking Life", 2001, "Animacao", 99, "Estados Unidos", "Richard Linklater", 77, 81, ["complexo", "surpresa"], ["animacao adulta", "filosofia", "sonho"], false],
  ["A Scanner Darkly", 2006, "Animacao", 100, "Estados Unidos", "Richard Linklater", 70, 68, ["complexo", "intenso"], ["animacao adulta", "paranoia", "droga"], false],
  ["Mary and Max", 2009, "Animacao", 92, "Australia", "Adam Elliot", 81, 95, ["sensivel", "comfort"], ["animacao adulta", "amizade", "melancolia"], false],
  ["I Lost My Body", 2019, "Animacao", 81, "Franca", "Jeremy Clapin", 75, 97, ["sensivel", "surpresa"], ["animacao adulta", "corpo", "memoria"], false],
  ["Flee", 2021, "Documentario", 90, "Dinamarca", "Jonas Poher Rasmussen", 79, 98, ["sensivel", "complexo"], ["documentario", "animacao", "refugio"], true],
  ["Tower", 2016, "Documentario", 82, "Estados Unidos", "Keith Maitland", 79, 99, ["intenso", "complexo"], ["documentario", "animacao", "memoria"], false],
  ["Kedi", 2016, "Documentario", 79, "Turquia", "Ceyda Torun", 76, 98, ["comfort", "sensivel"], ["documentario", "Istambul", "cotidiano"], false],
  ["The Act of Killing", 2012, "Documentario", 159, "Dinamarca", "Joshua Oppenheimer", 82, 95, ["complexo", "intenso"], ["documentario", "memoria", "Indonesia"], true],
  ["City of God", 2002, "Crime", 130, "Brasil", "Fernando Meirelles", 86, 91, ["intenso", "complexo"], ["favela", "crime", "Brasil"], true],
  ["Central Station", 1998, "Drama", 113, "Brasil", "Walter Salles", 80, 94, ["sensivel", "nostalgia"], ["estrada", "familia", "Brasil"], true],
  ["Pixote", 1980, "Drama", 128, "Brasil", "Hector Babenco", 79, 94, ["intenso", "complexo"], ["infancia", "rua", "Brasil"], false],
  ["Aquarius", 2016, "Drama", 146, "Brasil", "Kleber Mendonca Filho", 74, 97, ["sensivel", "complexo"], ["memoria", "casa", "resistencia"], true],
  ["Neighboring Sounds", 2012, "Drama", 131, "Brasil", "Kleber Mendonca Filho", 71, 92, ["complexo", "surpresa"], ["classe", "bairro", "tensao"], false],
  ["The Given Word", 1962, "Drama", 98, "Brasil", "Anselmo Duarte", 82, 95, ["nostalgia", "complexo"], ["promessa", "religiao", "Brasil"], false],
  ["Black Orpheus", 1959, "Romance", 100, "Brasil", "Marcel Camus", 74, 87, ["nostalgia", "sensivel"], ["musica", "mito", "Rio"], false],
  ["Wild Tales", 2014, "Comedia", 122, "Argentina", "Damian Szifron", 81, 94, ["leve", "intenso", "surpresa"], ["vinganca", "absurdo", "antologia"], true],
  ["The Secret in Their Eyes", 2009, "Crime", 129, "Argentina", "Juan Jose Campanella", 82, 89, ["intenso", "sensivel"], ["memoria", "investigacao", "amor"], true],
  ["La Cienaga", 2001, "Drama", 103, "Argentina", "Lucrecia Martel", 71, 86, ["complexo", "surpresa"], ["familia", "calor", "Argentina"], false],
  ["Nostalgia for the Light", 2010, "Documentario", 90, "Chile", "Patricio Guzman", 76, 100, ["complexo", "sensivel"], ["documentario", "memoria", "deserto"], true],
  ["A Fantastic Woman", 2017, "Drama", 104, "Chile", "Sebastian Lelio", 72, 94, ["sensivel", "complexo"], ["luto", "identidade", "Chile"], false],
  ["Embrace of the Serpent", 2015, "Drama", 125, "Colombia", "Ciro Guerra", 78, 96, ["complexo", "surpresa"], ["Amazonia", "memoria", "colonizacao"], true],
  ["Monos", 2019, "Drama", 103, "Colombia", "Alejandro Landes", 69, 92, ["intenso", "surpresa"], ["selva", "guerra", "juventude"], false],
  ["The Milk of Sorrow", 2009, "Drama", 94, "Peru", "Claudia Llosa", 67, 78, ["sensivel", "complexo"], ["trauma", "musica", "Peru"], false],
  ["The Wolf House", 2018, "Animacao", 75, "Chile", "Cristobal Leon", 75, 96, ["surpresa", "complexo"], ["animacao adulta", "conto", "pesadelo"], false],
  ["Shoplifters", 2018, "Drama", 121, "Japao", "Hirokazu Kore-eda", 79, 99, ["sensivel", "comfort"], ["familia", "crime", "afeto"], true],
  ["Still Walking", 2008, "Drama", 114, "Japao", "Hirokazu Kore-eda", 79, 100, ["sensivel", "comfort"], ["familia", "luto", "cotidiano"], false],
  ["Nobody Knows", 2004, "Drama", 141, "Japao", "Hirokazu Kore-eda", 80, 93, ["sensivel", "intenso"], ["infancia", "abandono", "Japao"], false],
  ["Perfect Days", 2023, "Drama", 124, "Japao", "Wim Wenders", 78, 96, ["sensivel", "comfort"], ["cotidiano", "silencio", "Tokyo"], true],
  ["Spirited Away", 2001, "Animacao", 125, "Japao", "Hayao Miyazaki", 86, 96, ["comfort", "nostalgia", "surpresa"], ["Ghibli", "fantasia", "infancia"], true],
  ["The Tale of the Princess Kaguya", 2013, "Animacao", 137, "Japao", "Isao Takahata", 80, 100, ["sensivel", "complexo"], ["Ghibli", "conto", "melancolia"], false],
  ["The Handmaiden", 2016, "Suspense", 145, "Coreia do Sul", "Park Chan-wook", 81, 95, ["intenso", "complexo"], ["desejo", "golpe", "Coreia"], true],
  ["Memories of Murder", 2003, "Crime", 131, "Coreia do Sul", "Bong Joon-ho", 81, 95, ["intenso", "complexo"], ["investigacao", "crime", "obsessao"], true],
  ["Poetry", 2010, "Drama", 139, "Coreia do Sul", "Lee Chang-dong", 78, 100, ["sensivel", "complexo"], ["poesia", "culpa", "memoria"], false],
  ["Mother", 2009, "Crime", 129, "Coreia do Sul", "Bong Joon-ho", 77, 96, ["intenso", "sensivel"], ["mae", "investigacao", "culpa"], false],
  ["Oldboy", 2003, "Suspense", 120, "Coreia do Sul", "Park Chan-wook", 84, 82, ["intenso", "complexo"], ["vinganca", "cult", "violencia"], true],
  ["A Sun", 2019, "Drama", 156, "Taiwan", "Chung Mong-hong", 76, 96, ["sensivel", "complexo"], ["familia", "culpa", "Taiwan"], false],
  ["The Assassin", 2015, "Acao", 105, "Taiwan", "Hou Hsiao-hsien", 63, 80, ["surpresa", "acao"], ["wuxia", "silencio", "estilo"], false],
  ["Ida", 2013, "Drama", 82, "Polonia", "Pawel Pawlikowski", 74, 96, ["complexo", "sensivel"], ["memoria", "religiao", "preto e branco"], false],
  ["Portrait of a Lady on Fire", 2019, "Romance", 122, "Franca", "Celine Sciamma", 81, 97, ["sensivel", "complexo"], ["desejo", "arte", "memoria"], true],
  ["Petite Maman", 2021, "Drama", 72, "Franca", "Celine Sciamma", 74, 97, ["sensivel", "comfort"], ["infancia", "luto", "fantasia"], false],
  ["The Intouchables", 2011, "Comedia", 113, "Franca", "Olivier Nakache", 85, 76, ["comfort", "leve"], ["amizade", "humor", "Franca"], false],
  ["Raw", 2016, "Terror", 99, "Franca", "Julia Ducournau", 70, 93, ["intenso", "surpresa"], ["corpo", "desejo", "canibalismo"], false],
  ["The Babadook", 2014, "Terror", 94, "Australia", "Jennifer Kent", 68, 98, ["intenso", "complexo"], ["luto", "maternidade", "terror"], false],
  ["The Castle", 1997, "Comedia", 85, "Australia", "Rob Sitch", 76, 87, ["leve", "comfort"], ["familia", "casa", "Australia"], false],
  ["Whale Rider", 2002, "Drama", 101, "Nova Zelandia", "Niki Caro", 75, 91, ["sensivel", "comfort"], ["familia", "tradicao", "lideranca"], false],
  ["Hunt for the Wilderpeople", 2016, "Comedia", 101, "Nova Zelandia", "Taika Waititi", 78, 97, ["leve", "comfort"], ["aventura", "familia", "fuga"], false],
  ["Once Were Warriors", 1994, "Drama", 99, "Nova Zelandia", "Lee Tamahori", 79, 93, ["intenso", "sensivel"], ["familia", "violencia", "Maori"], false],
  ["Collective", 2019, "Documentario", 109, "Romenia", "Alexander Nanau", 81, 99, ["intenso", "complexo"], ["documentario", "jornalismo", "corrupcao"], false]
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
    rtSource: "curated",
    vibes,
    tags,
    seen: false,
    favoriteSignal,
    colors: colorPairForMovie(title.length + year + duration)
  };
}

curatedMovies.push(...extraCuratedMovies.map(createCuratedMovie));
curatedMovies.forEach((movie) => {
  movie.source = movie.source || "curated";
  movie.rtSource = movie.rtSource || "curated";
});

let activeMood = "comfort";
let activeMode = "mood";
let profileLoaded = false;
let rerollOffset = 0;
let shuffleSalt = Math.floor(Math.random() * 100000);
let roulettePick = "";
let useTmdb = false;
let tmdbMovies = [];
let tmdbLoadInProgress = false;
let lastRenderedHeroKey = "";
let currentHeroKey = "";
let recommendationQueue = [];
let recommendationSignature = "";
let priorityPosterHydrationStarted = false;
let catalogPosterHydrationStarted = false;
const sessionSeed = typeof crypto !== "undefined" && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * 2 ** 32);
const legacyPosterCache = JSON.parse(localStorage.getItem("cinepick_poster_cache") || "{}");
const posterCache = JSON.parse(localStorage.getItem(posterCacheKey) || "{}");
let recommendationHistory = JSON.parse(localStorage.getItem(recommendationHistoryKey) || "[]");
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
  if (minutes <= 90) return "ate90";
  if (minutes <= 100) return "curto";
  if (minutes <= 130) return "medio";
  return "longo";
}

function durationMatches(filter, minutes) {
  if (filter === "qualquer" || !minutes) return true;
  if (filter === "ate90") return minutes <= 90;
  if (filter === "curto") return minutes <= 100;
  if (filter === "medio") return minutes > 100 && minutes <= 130;
  if (filter === "longo") return minutes > 130;
  return true;
}

function displayText(value) {
  const text = String(value || "");
  if (displayNames[text]) return displayNames[text];
  const normalizedMatch = Object.keys(displayNames).find((key) => normalize(key) === normalize(text));
  return normalizedMatch ? displayNames[normalizedMatch] : text;
}

function posterQueriesForMovie(movie) {
  const aliases = titleAliasesFor(movie.title);
  const simpleTitle = String(movie.title || "").replace(/\s*[:–-]\s*(o filme|the movie)$/i, "");
  return uniqueNormalized([movie.title, simpleTitle, ...aliases]).slice(0, 8);
}

function posterMatchScore(item, movie, queries) {
  if (!item.poster_path) return -Infinity;
  const releaseYear = Number((item.release_date || "").slice(0, 4)) || 0;
  const yearDelta = releaseYear ? Math.abs(releaseYear - Number(movie.year)) : 99;
  const acceptedTitles = uniqueNormalized([...queries, movie.title]).map(normalize);
  const candidateTitles = uniqueNormalized([item.title, item.original_title]).map(normalize);
  let score = 0;

  if (yearDelta === 0) score += 90;
  else if (yearDelta === 1) score += 35;
  else score -= Math.min(60, yearDelta * 8);

  candidateTitles.forEach((candidate) => {
    if (acceptedTitles.includes(candidate)) score += 60;
    else if (acceptedTitles.some((title) => title.includes(candidate) || candidate.includes(title))) score += 24;
  });

  score += Math.min(18, Number(item.vote_count || 0) / 450);
  score += Math.min(12, Number(item.popularity || 0) / 18);
  return score;
}

function bestPosterMatch(results, movie, queries) {
  return (results || [])
    .map((item) => ({ item, score: posterMatchScore(item, movie, queries) }))
    .filter(({ score }) => score > 15)
    .sort((a, b) => b.score - a.score)[0]?.item || null;
}

function ratingAverage(movie) {
  return Math.round((movie.imdb + movie.rt) / 2);
}

function formatImdbScore(score) {
  return (Number(score || 0) / 10).toFixed(1).replace(".", ",");
}

function secondaryScoreLabel(movie) {
  if (movie.rtSource === "omdb" || movie.rtSource === "curated") return "Rotten Tomatoes";
  return "TMDb";
}

function formatRuntime(minutes) {
  return minutes ? `${minutes} min` : "n/d";
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function uniqueNormalized(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = normalize(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function movieKey(title, year) {
  return `${normalize(title)}|${String(year || "").trim()}`;
}

function movieTitleKey(movie) {
  return normalize(movie.title);
}

function titleAliasesFor(title) {
  const normalizedTitle = normalize(title);
  const direct = Object.entries(posterTitleAliases).find(([key]) => normalize(key) === normalizedTitle);
  if (direct) return direct[1];

  const reverse = Object.entries(posterTitleAliases).find(([, aliases]) => (
    aliases.some((alias) => normalize(alias) === normalizedTitle)
  ));
  if (!reverse) return [];

  const [canonical, aliases] = reverse;
  return uniqueNormalized([canonical, ...aliases.filter((alias) => normalize(alias) !== normalizedTitle)]);
}

function movieTitleKeys(movie) {
  return uniqueNormalized([movie.title, ...titleAliasesFor(movie.title)]).map(normalize);
}

function movieCacheKeys(movie) {
  const year = String(movie.year || "").trim();
  return movieTitleKeys(movie).map((title) => `${title}|${year}`);
}

function moviesShareTitle(movie, other) {
  const movieYear = String(movie.year || "").trim();
  const otherYear = String(other.year || "").trim();
  if (movieYear && otherYear && movieYear !== otherYear) return false;

  const keys = new Set(movieTitleKeys(movie));
  return movieTitleKeys(other).some((key) => keys.has(key));
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
  const key = `${sessionSeed}|${shuffleSalt}|${movieKey(movie.title, movie.year)}|${activeMode}|${activeMood}`;
  return (hashString(key) % 1000) / 1000;
}

function seededUnit(movie, scope = "pick") {
  const key = `${sessionSeed}|${shuffleSalt}|${scope}|${movieKey(movie.title, movie.year)}|${activeMode}|${activeMood}`;
  return ((hashString(key) % 9999) + 1) / 10000;
}

function movieGenres(movie) {
  return uniqueNormalized([movie.genre, ...(movie.genres || [])]);
}

function movieSearchText(movie) {
  return normalize([
    movie.title,
    movie.director,
    movie.genre,
    ...(movie.genres || []),
    ...(movie.vibes || []),
    ...(movie.tags || []),
    movie.overview
  ].join(" "));
}

function moodScore(movie) {
  if (activeMode !== "mood") return 0;

  const profile = moodProfiles[activeMood] || {};
  const genres = movieGenres(movie);
  const text = movieSearchText(movie);
  const hasVibe = (movie.vibes || []).includes(activeMood);
  const preferredMatches = genres.filter((genre) => (profile.preferredGenres || []).includes(genre)).length;
  const avoidMatches = genres.filter((genre) => (profile.avoidGenres || []).includes(genre)).length;
  const hardAvoidMatches = genres.filter((genre) => (profile.hardAvoidGenres || []).includes(genre)).length;
  const keywordMatches = (profile.keywords || []).filter((keyword) => text.includes(normalize(keyword))).length;
  let score = 0;

  if (moodMismatch(movie)) score -= 120;
  if (hasVibe) score += 44;
  score += Math.min(preferredMatches, 3) * 22;
  score += Math.min(keywordMatches, 3) * 8;
  score -= avoidMatches * 28;
  score -= hardAvoidMatches * 34;

  if (profile.requiredPositive && !hasVibe && !preferredMatches && !keywordMatches) score -= 46;
  if (profile.longMoviePenalty && movieDuration(movie) > profile.longMoviePenalty) score -= 14;
  if (profile.oldBonus && Number(movie.year) && Number(movie.year) < 2005) score += 14;
  if (activeMood === "nostalgia" && Number(movie.year) && Number(movie.year) >= 2020) score -= 10;
  if (activeMood === "leve" && (movie.vibes || []).includes("complexo")) score -= 18;
  if (activeMood === "comfort" && (movie.vibes || []).includes("complexo")) score -= 16;
  if (activeMood === "leve" && ratingAverage(movie) < 62) score -= 8;
  if (activeMood === "surpresa") {
    if (Number(movie.year) && Number(movie.year) < 2010) score += 10;
    if (ratingAverage(movie) >= 78) score += 8;
    if ((movie.providers || []).length) score += 4;
  }

  return score;
}

function moodCollectionScore(movie) {
  if (activeMode !== "mood") return 0;

  const profile = moodProfiles[activeMood] || {};
  const genres = movieGenres(movie);
  const hasVibe = (movie.vibes || []).includes(activeMood);
  const preferredMatches = genres.filter((genre) => (profile.preferredGenres || []).includes(genre)).length;
  const keywordMatches = (profile.keywords || []).filter((keyword) => movieSearchText(movie).includes(normalize(keyword))).length;

  if (hasVibe) return 28;
  if (preferredMatches || keywordMatches) return 12;
  return -18;
}

function recentRecommendationIndex(movie) {
  const keys = movieCacheKeys(movie);
  const titleKeys = movieTitleKeys(movie);
  return recommendationHistory.findIndex((item) => (
    keys.includes(item) || titleKeys.some((titleKey) => item.startsWith(`${titleKey}|`))
  ));
}

function isRecentlyRecommended(movie, limit = 28) {
  const index = recentRecommendationIndex(movie);
  return index >= 0 && index < limit;
}

function freshnessPenalty(movie) {
  const index = recentRecommendationIndex(movie);
  if (index < 0) return 0;
  if (index < 3) return 140;
  if (index < 10) return 82;
  if (index < 25) return 42;
  if (index < 45) return 18;
  return 8;
}

function rememberRecommendation(movie) {
  if (!movie) return;
  const key = movieKey(movie.title, movie.year);
  if (key === lastRenderedHeroKey) return;

  lastRenderedHeroKey = key;
  const keys = movieCacheKeys(movie);
  const titleKeys = movieTitleKeys(movie);
  recommendationHistory = [key, ...recommendationHistory.filter((item) => (
    !keys.includes(item) && !titleKeys.some((titleKey) => item.startsWith(`${titleKey}|`))
  ))].slice(0, recommendationHistoryLimit);
  localStorage.setItem(recommendationHistoryKey, JSON.stringify(recommendationHistory));
}

function diversityPenalty(movie, selected) {
  return selected.slice(0, 10).reduce((penalty, item, index) => {
    const distance = Math.max(1, index + 1);
    const sameGenre = movie.genre === item.genre || movieGenres(movie).some((genre) => movieGenres(item).includes(genre));
    const sameCountry = movie.country === item.country;
    const sameDecade = movie.decade === item.decade;
    return penalty
      + (sameGenre ? 15 / distance : 0)
      + (sameCountry ? 10 / distance : 0)
      + (sameDecade ? 7 / distance : 0);
  }, 0);
}

function weightedShuffle(list, scope = "weighted") {
  if (!list.length) return [];
  const minScore = Math.min(...list.map((movie) => movie.score));

  return list
    .map((movie) => {
      const normalizedScore = Math.max(1, movie.score - minScore + 12);
      const weight = Math.pow(normalizedScore, 1.18);
      const random = Math.max(0.0001, seededUnit(movie, scope));
      return {
        movie,
        sortKey: -Math.log(random) / weight
      };
    })
    .sort((a, b) => a.sortKey - b.sortKey)
    .map((item) => item.movie);
}

function mergeMovieEnhancements(primary, candidate) {
  return {
    ...primary,
    imdb: primary.imdb || candidate.imdb || 0,
    rt: primary.rtSource === "omdb" || primary.rtSource === "curated" ? primary.rt : candidate.rt || primary.rt || 0,
    rtSource: primary.rtSource === "omdb" || primary.rtSource === "curated" ? primary.rtSource : candidate.rtSource || primary.rtSource || "",
    posterUrl: primary.posterUrl || candidate.posterUrl || "",
    backdropUrl: primary.backdropUrl || candidate.backdropUrl || "",
    imdbId: primary.imdbId || candidate.imdbId || "",
    tmdbVotes: primary.tmdbVotes || candidate.tmdbVotes || 0,
    providers: primary.providers?.length ? primary.providers : candidate.providers || [],
    source: primary.source || candidate.source || "",
    genres: uniqueNormalized([...(primary.genres || []), ...(candidate.genres || [])]),
    overview: primary.overview || candidate.overview || "",
    tags: uniqueNormalized([...(primary.tags || []), ...(candidate.tags || [])]).slice(0, 8),
    vibes: uniqueNormalized([...(primary.vibes || []), ...(candidate.vibes || [])])
  };
}

function applyMovieEnhancements(target, enhanced) {
  target.imdb = target.imdb || enhanced.imdb || 0;
  if ((target.rtSource !== "omdb" && target.rtSource !== "curated") || !target.rt) {
    target.rt = enhanced.rt || target.rt || 0;
    target.rtSource = enhanced.rtSource || target.rtSource || "";
  }
  target.posterUrl = target.posterUrl || enhanced.posterUrl || "";
  target.backdropUrl = target.backdropUrl || enhanced.backdropUrl || "";
  target.imdbId = target.imdbId || enhanced.imdbId || "";
  target.tmdbVotes = target.tmdbVotes || enhanced.tmdbVotes || 0;
  target.providers = target.providers?.length ? target.providers : enhanced.providers || [];
  target.source = target.source || enhanced.source || "";
  target.genres = uniqueNormalized([...(target.genres || []), ...(enhanced.genres || [])]);
  target.overview = target.overview || enhanced.overview || "";
  target.tags = uniqueNormalized([...(target.tags || []), ...(enhanced.tags || [])]).slice(0, 8);
  target.vibes = uniqueNormalized([...(target.vibes || []), ...(enhanced.vibes || [])]);
}

function mergeCatalogEnhancements(list) {
  const byTitle = new Map();

  list.forEach((movie) => {
    const keys = movieCacheKeys(movie);
    const current = keys.map((key) => byTitle.get(key)).find(Boolean);
    if (!current) {
      keys.forEach((key) => byTitle.set(key, movie));
      return;
    }

    applyMovieEnhancements(current, mergeMovieEnhancements(current, movie));
    applyMovieEnhancements(movie, mergeMovieEnhancements(movie, current));
    uniqueNormalized([...keys, ...movieCacheKeys(current)]).forEach((key) => byTitle.set(key, current));
  });
}

function dedupeByTitle(list) {
  const byTitle = new Map();

  list.forEach((movie) => {
    const keys = movieCacheKeys(movie);
    const current = keys.map((key) => byTitle.get(key)).find(Boolean);
    if (!current) {
      keys.forEach((key) => byTitle.set(key, movie));
      return;
    }

    const winner = movie.score > current.score ? movie : current;
    const detailsSource = movie.score > current.score ? current : movie;
    const merged = mergeMovieEnhancements(winner, detailsSource);
    uniqueNormalized([...keys, ...movieCacheKeys(current)]).forEach((key) => byTitle.set(key, merged));
  });

  return [...new Set(byTitle.values())];
}

function diversifyMovies(list, anchors = []) {
  const selected = [...anchors];
  const remaining = [...list];
  const result = [];

  while (remaining.length) {
    let bestIndex = 0;
    let bestValue = -Infinity;
    const windowSize = Math.min(90, remaining.length);

    for (let index = 0; index < windowSize; index += 1) {
      const movie = remaining[index];
      const value = movie.score
        - diversityPenalty(movie, selected)
        + seededUnit(movie, `diversity-${result.length}`) * 26;
      if (value > bestValue) {
        bestValue = value;
        bestIndex = index;
      }
    }

    const [picked] = remaining.splice(bestIndex, 1);
    selected.unshift(picked);
    result.push(picked);
  }

  return result;
}

function recommendationList() {
  return recommendationListForRender(false);
}

function recommendationStateSignature() {
  return [
    activeMode,
    activeMood,
    els.genre.value,
    els.duration.value,
    els.decade.value,
    els.country.value,
    els.provider.value,
    normalize(els.director.value),
    els.rating.value,
    String(els.hideWatched.checked),
    String(useTmdb),
    String(activeCatalog().length),
    String(shuffleSalt)
  ].join("|");
}

function buildRecommendationQueue(rankedAll, scope = "queue") {
  const veryFresh = rankedAll.filter((movie) => !isRecentlyRecommended(movie, 28));
  const moderatelyFresh = rankedAll.filter((movie) => !isRecentlyRecommended(movie, 12));
  const ranked = veryFresh.length ? veryFresh : (moderatelyFresh.length ? moderatelyFresh : rankedAll);
  if (!ranked.length) return [];

  const profile = moodProfiles[activeMood] || {};
  const spread = activeMode === "roulette" || profile.surpriseMode ? 0.68 : 0.48;
  const minimumPool = activeMode === "roulette" || profile.surpriseMode ? 90 : 58;
  const poolSize = Math.min(Math.max(minimumPool, Math.ceil(ranked.length * spread)), ranked.length);
  const frontPool = weightedShuffle(ranked.slice(0, poolSize), `${scope}-front`);
  const middle = weightedShuffle(ranked.slice(poolSize, Math.min(ranked.length, poolSize + 90)), `${scope}-middle`);
  const tail = weightedShuffle(ranked.slice(poolSize + 90), `${scope}-tail`);
  return diversifyMovies([...frontPool, ...middle, ...tail]);
}

function movieFromKey(list, key) {
  return list.find((movie) => movieKey(movie.title, movie.year) === key || movieTitleKey(movie) === normalize(key));
}

function resetRecommendationFlow({ keepCurrent = false } = {}) {
  if (!keepCurrent) currentHeroKey = "";
  recommendationQueue = [];
  recommendationSignature = "";
  roulettePick = "";
}

function recommendationListForRender(advance = false) {
  const rankedAll = filteredMovies();
  if (!rankedAll.length) return [];

  const signature = recommendationStateSignature();
  const signatureChanged = signature !== recommendationSignature;
  if (signatureChanged || !recommendationQueue.length) {
    recommendationQueue = buildRecommendationQueue(rankedAll, signature);
    recommendationSignature = signature;
  }

  const current = currentHeroKey ? movieFromKey(rankedAll, currentHeroKey) : null;
  if (!advance && current) {
    const rest = diversifyMovies(rankedAll.filter((movie) => movieKey(movie.title, movie.year) !== movieKey(current.title, current.year)), [current]);
    return [current, ...rest];
  }

  const selectedIndex = recommendationQueue.findIndex((movie) => {
    const key = movieKey(movie.title, movie.year);
    if (currentHeroKey && key === currentHeroKey) return false;
    return !isRecentlyRecommended(movie, 28);
  });
  const fallbackIndex = recommendationQueue.findIndex((movie) => !currentHeroKey || movieKey(movie.title, movie.year) !== currentHeroKey);
  const index = selectedIndex >= 0 ? selectedIndex : fallbackIndex;
  const [selected] = index >= 0 ? recommendationQueue.splice(index, 1) : [rankedAll[0]];

  currentHeroKey = movieKey(selected.title, selected.year);
  rememberRecommendation(selected);

  const rest = diversifyMovies(rankedAll.filter((movie) => movieKey(movie.title, movie.year) !== currentHeroKey), [selected]);
  return [selected, ...rest];
}

function moodMismatch(movie) {
  if (activeMode !== "mood") return false;

  const profile = moodProfiles[activeMood] || {};
  const genres = movieGenres(movie);
  const preferredMatches = genres.filter((genre) => (profile.preferredGenres || []).includes(genre)).length;
  const hardAvoidMatches = genres.filter((genre) => (profile.hardAvoidGenres || []).includes(genre)).length;
  const hasVibe = (movie.vibes || []).includes(activeMood);
  const hasConflictingVibe = (movie.vibes || []).some((vibe) => (profile.conflictingVibes || []).includes(vibe));

  if (activeMood === "leve") {
    return hasConflictingVibe || hardAvoidMatches > 0 || (!preferredMatches && !hasVibe);
  }

  if (activeMood === "comfort") {
    return hasConflictingVibe || hardAvoidMatches > 0 || (!preferredMatches && !hasVibe);
  }

  if (activeMood === "intenso") {
    return hasConflictingVibe || hardAvoidMatches > 0 || (!preferredMatches && !hasVibe);
  }

  if (activeMood === "acao") {
    return hardAvoidMatches > 0 || (!preferredMatches && !hasVibe);
  }

  return false;
}

function applyPosterCache() {
  curatedMovies.forEach((movie) => {
    const keys = movieCacheKeys(movie);
    const cached = keys.map((key) => posterCache[key]).find(Boolean);
    const legacyCached = keys.map((key) => legacyPosterCache[key]).find(Boolean);
    const enhancement = cached || legacyCached;
    if (!enhancement) return;

    movie.posterUrl = enhancement.posterUrl || movie.posterUrl;
    movie.backdropUrl = enhancement.backdropUrl || movie.backdropUrl;
    movie.imdb = enhancement.imdb || movie.imdb;
    movie.tmdbVotes = enhancement.tmdbVotes || movie.tmdbVotes;
    movie.imdbId = enhancement.imdbId || movie.imdbId;
    movie.providers = enhancement.providers || movie.providers;
    movie.source = enhancement.source || movie.source || "curated-tmdb-poster";

    if (cached) {
      movie.rt = cached.rt || movie.rt;
      movie.rtSource = cached.rtSource || movie.rtSource;
    }

    if (!cached && legacyCached?.posterUrl) {
      cacheMovieEnhancement(movie);
    }
  });
}

function cacheMovieEnhancement(movie) {
  const enhancement = {
    posterUrl: movie.posterUrl,
    backdropUrl: movie.backdropUrl,
    imdb: movie.imdb,
    rt: movie.rt,
    rtSource: movie.rtSource,
    tmdbVotes: movie.tmdbVotes,
    imdbId: movie.imdbId,
    providers: movie.providers,
    source: movie.source
  };
  movieCacheKeys(movie).forEach((key) => {
    posterCache[key] = enhancement;
  });
  localStorage.setItem(posterCacheKey, JSON.stringify(posterCache));
  syncMovieEnhancement(movie);
}

function syncMovieEnhancement(movie) {
  [...curatedMovies, ...tmdbMovies].forEach((target) => {
    if (moviesShareTitle(target, movie)) applyMovieEnhancements(target, movie);
  });
}

function cacheTmdbCatalog() {
  if (!tmdbMovies.length) return;
  localStorage.setItem("cinepick_tmdb_catalog", JSON.stringify({
    version: tmdbCatalogConfig.cacheVersion,
    savedAt: Date.now(),
    movies: tmdbMovies
  }));
}

function restoreTmdbCatalogCache() {
  const cached = JSON.parse(localStorage.getItem("cinepick_tmdb_catalog") || "null");
  if (!cached?.movies?.length) return false;
  if (cached.version !== tmdbCatalogConfig.cacheVersion) return false;
  if (Date.now() - Number(cached.savedAt || 0) > tmdbCatalogConfig.cacheMaxAge) return false;

    tmdbMovies = cached.movies;
    tmdbMovies.forEach((movie) => {
      movie.rtSource = movie.rtSource || (movie.source && movie.source.includes("omdb") ? "omdb" : "tmdb");
    });
  useTmdb = true;
  els.useTmdb.checked = true;
  localStorage.setItem("cinepick_use_tmdb", "true");
  updateProviderFilter();
  els.tmdbStatus.textContent = `${tmdbMovies.length} filmes carregados do cache local. Atualizando em segundo plano.`;
  return true;
}

async function restoreCatalogSeed() {
  if (tmdbMovies.length) return false;

  try {
    const response = await fetch("./catalog-seed.json", { cache: "force-cache" });
    if (!response.ok) return false;
    const seed = await response.json();
    if (!seed?.movies?.length) return false;

    tmdbMovies = seed.movies.map((movie) => ({
      ...movie,
      rtSource: movie.rtSource || (movie.source && movie.source.includes("omdb") ? "omdb" : "tmdb")
    }));
    useTmdb = true;
    els.useTmdb.checked = true;
    localStorage.setItem("cinepick_use_tmdb", "true");
    updateProviderFilter();
    cacheTmdbCatalog();
    els.tmdbStatus.textContent = `${tmdbMovies.length} filmes carregados do catálogo pré-gerado. Atualizando em segundo plano.`;
    render();
    return true;
  } catch {
    return false;
  }
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
  const catalog = useTmdb && tmdbMovies.length ? [...curatedMovies, ...tmdbMovies] : curatedMovies;
  mergeCatalogEnhancements(catalog);
  return catalog;
}

function movieDuration(movie) {
  return Number(movie.duration) || 0;
}

function scoreMovie(movie) {
  let score = 0;
  const query = normalize(els.director.value);
  const minRating = Number(els.rating.value);
  const profile = moodProfiles[activeMood] || {};

  score += moodScore(movie);
  score += moodCollectionScore(movie);
  if (activeMode === "roulette") score += Math.round(ratingAverage(movie) / 3);
  if (profileLoaded) score += profileAffinity(movie);
  if (movieGenres(movie).includes(els.genre.value)) score += 15;
  if (movieDuration(movie) && durationMatches(els.duration.value, movieDuration(movie)) && els.duration.value !== "qualquer") score += 10;
  if (els.decade.value === movie.decade) score += 10;
  if (els.country.value === movie.country) score += 10;
  if (query && `${movie.director} ${movie.tags.join(" ")}`.toLowerCase().includes(query)) score += 24;
  if (ratingAverage(movie) >= minRating) score += 12;
  if (activeMode === "mood" && profile.surpriseMode) {
    score += seededUnit(movie, "surprise-score") * 38;
    if (ratingAverage(movie) > 88) score -= 12;
  }
  if (els.hideWatched.checked && wasWatched(movie) && profileLoaded) score -= 100;
  score -= freshnessPenalty(movie);

  return score + shuffleNoise(movie) * (profile.surpriseMode ? 48 : 34);
}

function filteredMovies() {
  const filtered = activeCatalog()
    .map((movie) => ({ ...movie, score: scoreMovie(movie) }))
    .filter((movie) => {
      if (activeMode === "mood" && moodMismatch(movie)) return false;
      if (els.genre.value !== "qualquer" && !movieGenres(movie).includes(els.genre.value)) return false;
      if (!durationMatches(els.duration.value, movieDuration(movie))) return false;
      if (els.decade.value !== "qualquer" && movie.decade !== els.decade.value) return false;
      if (els.country.value !== "qualquer" && movie.country !== els.country.value) return false;
      if (els.provider.value !== "qualquer" && !(movie.providers || []).includes(els.provider.value)) return false;
      if (ratingAverage(movie) < Number(els.rating.value)) return false;
      if (els.hideWatched.checked && profileLoaded && wasWatched(movie)) return false;
      return true;
    });

  return dedupeByTitle(filtered)
    .sort((a, b) => b.score - a.score || shuffleNoise(b) - shuffleNoise(a));
}

function pickBySeed(items, movie, scope) {
  if (!items.length) return "";
  const index = Math.floor(seededUnit(movie, scope) * items.length) % items.length;
  return items[index];
}

function scoreDescriptor(movie) {
  const average = ratingAverage(movie);
  if (average >= 88) return "com reputação fortíssima";
  if (average >= 80) return "com notas muito fortes";
  if (average >= 72) return "com boas notas";
  if (average >= 64) return "com notas sólidas e cara de descoberta";
  return "mais arriscado nas notas, mas com personalidade";
}

function reasonTags(movie) {
  const blocked = new Set([
    normalize(movie.genre),
    normalize(movie.country),
    normalize(movie.director),
    ...movieGenres(movie).map(normalize),
    ...(movie.providers || []).map(normalize)
  ]);

  return uniqueNormalized([...(movie.tags || []), ...(movie.vibes || [])])
    .filter((tag) => !blocked.has(normalize(tag)))
    .map(displayText)
    .slice(0, 3);
}

function movieReasonContext(movie) {
  const tags = reasonTags(movie);
  const genre = displayText(movie.genre || movieGenres(movie)[0] || "filme");
  const country = displayText(movie.country || "origem indefinida");
  const decade = movie.decade && movie.decade !== "qualquer" ? `${movie.decade}s` : `${movie.year || "sem década"}`;
  const director = displayText(movie.director || "direção não informada");
  const tag = tags[0] || displayText((movie.vibes || [])[0] || movie.genre || "vibe própria");
  const tagPair = tags.length > 1 ? `${tags[0]} e ${tags[1]}` : tag;

  return {
    genre,
    country,
    decade,
    director,
    tag,
    tagPair,
    minutes: formatRuntime(movieDuration(movie)),
    scoreText: scoreDescriptor(movie)
  };
}

function buildReasonSentence(movie, poolId, scope) {
  const pool = moodReasonPools[poolId] || moodReasonPools.surpresa;
  const template = pickBySeed(pool, movie, scope);
  return typeof template === "function" ? template(movieReasonContext(movie)) : template;
}

function reasonFor(movie) {
  const context = movieReasonContext(movie);
  const poolId = activeMode === "roulette" ? "roulette" : activeMood;
  const opening = buildReasonSentence(movie, poolId, `reason-opening-${poolId}`);
  const detailOptions = [
    `O detalhe que diferencia a escolha é ${context.director}, ${context.country}, ${context.decade}, com ${context.tagPair}.`,
    `Entra na fila por combinar ${context.genre.toLowerCase()}, ${context.tagPair}, ${context.country}, ${context.scoreText}.`,
    `${context.director} dá a assinatura; ${context.decade}, ${context.minutes} e ${context.tag} ajudam a calibrar a sessão.`,
    `A escolha fica mais específica pela mistura: ${context.genre.toLowerCase()}, ${context.country}, ${context.tagPair}, ${context.scoreText}.`
  ];
  const detail = pickBySeed(detailOptions, movie, `reason-detail-${poolId}`);
  const profileText = profileLoaded && profileAffinity(movie) > 10 ? " Também conversa com sinais do seu perfil." : "";

  if (activeMode === "roulette") {
    return `${opening} ${detail}`;
  }

  return `${opening} ${detail}${profileText}`;
}

function selectRouletteMovie(list) {
  if (!list.length) {
    roulettePick = "";
    return;
  }

  shuffleSalt = Math.floor(Math.random() * 100000);
  const freshList = list.filter((movie) => !isRecentlyRecommended(movie, 28));
  const source = freshList.length ? freshList : list;
  const roulettePool = diversifyMovies(weightedShuffle(source.slice(0, Math.min(160, source.length)), "roulette-pool"));
  roulettePick = (roulettePool[0] || list[0]).title;
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

  if (els.duration.value === "ate90") params.set("with_runtime.lte", "90");
  if (els.duration.value === "curto") params.set("with_runtime.lte", "100");
  if (els.duration.value === "medio") {
    params.set("with_runtime.gte", "100");
    params.set("with_runtime.lte", "130");
  }
  if (els.duration.value === "longo") params.set("with_runtime.gte", "130");

  return params;
}

function baseCatalogParams(overrides = {}) {
  return new URLSearchParams({
    include_adult: "false",
    include_video: "false",
    language: "pt-BR",
    sort_by: overrides.sortBy || "vote_count.desc",
    "vote_count.gte": String(overrides.minVotes || 90),
    "vote_average.gte": String(overrides.minRating || 5.8),
    page: String(overrides.page || 1)
  });
}

function catalogDiscoveryGroups() {
  const groups = [];

  catalogSorts.forEach((sortBy) => {
    const pages = sortBy === "vote_average.desc" ? 2 : 3;
    for (let page = 1; page <= pages; page += 1) {
      groups.push(baseCatalogParams({ sortBy, page, minVotes: sortBy === "vote_average.desc" ? 250 : 90 }));
    }
  });

  Object.values(genreIds).forEach((genreId) => {
    for (let page = 1; page <= 2; page += 1) {
      const params = baseCatalogParams({ sortBy: page === 1 ? "vote_count.desc" : "popularity.desc", page });
      params.set("with_genres", String(genreId));
      groups.push(params);
    }
  });

  catalogDecades.forEach((decade) => {
    const params = baseCatalogParams({ sortBy: "vote_count.desc", page: 1, minVotes: 70 });
    params.set("primary_release_date.gte", `${decade}-01-01`);
    params.set("primary_release_date.lte", `${decade + 9}-12-31`);
    groups.push(params);
  });

  catalogCountries.forEach((countryCode) => {
    const params = baseCatalogParams({ sortBy: "vote_count.desc", page: 1, minVotes: 50 });
    params.set("with_origin_country", countryCode);
    groups.push(params);
  });

  if (els.genre.value !== "qualquer" && genreIds[els.genre.value]) {
    const params = baseCatalogParams({ sortBy: "vote_count.desc", page: 1, minVotes: 40 });
    params.set("with_genres", String(genreIds[els.genre.value]));
    groups.unshift(params);
  }

  if (els.country.value !== "qualquer" && countryCodes[els.country.value]) {
    const params = baseCatalogParams({ sortBy: "vote_count.desc", page: 1, minVotes: 40 });
    params.set("with_origin_country", countryCodes[els.country.value]);
    groups.unshift(params);
  }

  return groups;
}

function interleaveUniqueMovies(groups) {
  const seen = new Set();
  const rows = groups.map((group) => group.filter((movie) => movie.poster_path));
  const result = [];
  let cursor = 0;
  let added = true;

  while (added && result.length < tmdbCatalogConfig.limit) {
    added = false;
    for (const row of rows) {
      if (result.length >= tmdbCatalogConfig.limit) break;
      const movie = row[cursor];
      if (!movie || seen.has(movie.id)) continue;
      seen.add(movie.id);
      result.push(movie);
      added = true;
    }
    cursor += 1;
  }

  return result;
}

async function fetchCatalogPages(requests) {
  const pages = [];
  const batchSize = 8;

  for (let index = 0; index < requests.length; index += batchSize) {
    const batch = requests.slice(index, index + batchSize);
    const nextPages = await Promise.all(batch.map((requestParams) => tmdbFetch("/discover/movie", requestParams)));
    pages.push(...nextPages);
  }

  return pages;
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
  if (rt) {
    movie.rt = rt;
    movie.rtSource = "omdb";
  }
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

function genreNamesFromDetails(movie, details) {
  const ids = movie.genre_ids || [];
  const mapped = ids.map((id) => tmdbGenres[id]).filter(Boolean);
  const detailNames = (details.genres || []).map((genre) => tmdbGenres[genre.id] || genre.name).filter(Boolean);
  return uniqueNormalized([...mapped, ...detailNames]);
}

function providersFromDetails(details) {
  const br = details["watch/providers"]?.results?.BR || {};
  const providers = [...(br.flatrate || []), ...(br.rent || []), ...(br.buy || [])]
    .map((provider) => provider.provider_name)
    .filter(Boolean);
  return [...new Set(providers)].slice(0, 4);
}

function tagsForMovie(movie, details, genre, director, country) {
  const genres = genreNamesFromDetails(movie, details);
  const overview = normalize(movie.overview || "");
  const signals = [];

  if (overview.includes("amizade")) signals.push("amizade");
  if (overview.includes("familia")) signals.push("família");
  if (overview.includes("investiga")) signals.push("investigação");
  if (overview.includes("amor") || overview.includes("romance")) signals.push("romance");
  if (overview.includes("tempo") || overview.includes("memoria")) signals.push("tempo e memória");
  if (overview.includes("assassin") || overview.includes("crime")) signals.push("crime");

  const blocked = new Set([normalize(genre), normalize(director), normalize(country)]);
  return uniqueNormalized([...genres, ...signals]).filter((tag) => !blocked.has(normalize(tag))).slice(0, 5);
}

function mapTmdbMovie(movie, details) {
  const releaseYear = Number((movie.release_date || "").slice(0, 4)) || 0;
  const director = (details.credits?.crew || []).find((person) => person.job === "Director")?.name || "Direção não informada";
  const genres = genreNamesFromDetails(movie, details);
  const genre = genres[0] || "Drama";
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
    genres,
    overview: movie.overview || "",
    imdb: vote,
    rt: vote,
    rtSource: "tmdb",
    tmdbVotes: movie.vote_count || 0,
    imdbId: details.external_ids?.imdb_id || "",
    providers: providersFromDetails(details),
    vibes: inferVibes(genres, movie.overview || "", releaseYear),
    tags: tagsForMovie(movie, details, genre, director, country),
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

function inferVibes(genres, overview, year = 0) {
  const genreList = Array.isArray(genres) ? genres : [genres];
  const text = normalize(`${genreList.join(" ")} ${overview}`);
  const vibes = new Set();
  const hasGentleGenre = text.includes("comedia") || text.includes("familia") || text.includes("animacao") || text.includes("romance") || text.includes("musica");
  const hasHeavyGenre = text.includes("crime") || text.includes("suspense") || text.includes("thriller") || text.includes("terror") || text.includes("guerra");
  if (hasGentleGenre || (text.includes("aventura") && !hasHeavyGenre)) vibes.add("leve");
  if (text.includes("romance") || text.includes("drama") || text.includes("familia")) vibes.add("sensivel");
  if (hasHeavyGenre || text.includes("misterio")) vibes.add("intenso");
  if (text.includes("ficcao") || text.includes("science") || text.includes("misterio") || text.includes("memoria") || text.includes("tempo")) vibes.add("complexo");
  if (text.includes("familia") || text.includes("amizade") || text.includes("animacao") || text.includes("romance")) vibes.add("comfort");
  if (text.includes("acao") || text.includes("aventura") || text.includes("faroeste") || text.includes("guerra")) vibes.add("acao");
  if (text.includes("documentario") || text.includes("estranho") || text.includes("surreal") || text.includes("misterio") || text.includes("terror")) vibes.add("surpresa");
  if (Number(year) && Number(year) < 2005) vibes.add("nostalgia");
  return [...(vibes.size ? vibes : new Set(["comfort"]))];
}

async function loadTmdbCatalog({ auto = false } = {}) {
  if (tmdbLoadInProgress) return false;
  const previousCatalog = [...tmdbMovies];
  const canRenderProgressively = previousCatalog.length < 200;

  const token = els.tmdbToken.value.trim();
  if (token) {
    localStorage.setItem("cinepick_tmdb_token", token);
  }

  tmdbLoadInProgress = true;
  els.tmdbStatus.textContent = auto ? "Carregando catálogo expandido automaticamente..." : "Buscando catálogo expandido no TMDb...";
  els.loadTmdb.disabled = true;

  try {
    const params = tmdbParams();
    const query = normalize(els.director.value);
    if (query) {
      const directorId = await directorIdForQuery(query);
      if (directorId) params.set("with_crew", directorId);
    }

    const catalogRequests = catalogDiscoveryGroups().map((requestParams) => {
      const nextParams = new URLSearchParams(requestParams);
      params.forEach((value, key) => {
        if (key === "with_crew") nextParams.set(key, value);
      });
      return nextParams;
    });
    const pages = await fetchCatalogPages(catalogRequests);
    const uniqueResults = interleaveUniqueMovies(pages.map((page) => page.results || []));
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
      if (canRenderProgressively) {
        tmdbMovies = detailed;
        useTmdb = true;
        els.useTmdb.checked = true;
        localStorage.setItem("cinepick_use_tmdb", "true");
        updateProviderFilter();
        cacheTmdbCatalog();
        render();
      }
      els.tmdbStatus.textContent = `${detailed.length} de ${uniqueResults.length} filmes carregados com capas e streaming.`;
    }

    tmdbMovies = detailed.length >= previousCatalog.length ? detailed : previousCatalog;
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
    if (tmdbMovies.length) {
      useTmdb = true;
      els.useTmdb.checked = true;
      localStorage.setItem("cinepick_use_tmdb", "true");
      els.tmdbStatus.textContent = `${error.message} Mantive o catálogo pré-carregado ativo.`;
      render();
      return false;
    }

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
  const queries = posterQueriesForMovie(movie);
  let match = null;

  for (const query of queries) {
    for (const language of ["pt-BR", "en-US"]) {
      for (const yearMode of ["year", "primary_release_year", "loose"]) {
        const params = new URLSearchParams({
          query,
          language,
          include_adult: "false"
        });
        if (yearMode !== "loose") params.set(yearMode, String(movie.year));
        const result = await tmdbFetch("/search/movie", params);
        match = bestPosterMatch(result.results, movie, queries);
        if (match) break;
      }
      if (match) break;
    }
    if (match) break;
  }

  if (!match) return false;
  const details = await tmdbFetch(`/movie/${match.id}`, new URLSearchParams({ append_to_response: "external_ids,watch/providers", language: "pt-BR" }));
  movie.posterUrl = `https://image.tmdb.org/t/p/w500${match.poster_path}`;
  if (match.backdrop_path) movie.backdropUrl = `https://image.tmdb.org/t/p/w780${match.backdrop_path}`;
  movie.imdb = Math.round((match.vote_average || movie.imdb / 10) * 10);
  if (!movie.rt || movie.rtSource === "tmdb") {
    movie.rt = Math.min(100, Math.round((match.vote_average || 0) * 10));
    movie.rtSource = "tmdb";
  }
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
    els.tmdbStatus.textContent = `${found} capas oficiais adicionadas à curadoria local.`;
    render();
  } catch (error) {
    els.tmdbStatus.textContent = `${error.message} Configure TMDB_READ_TOKEN na Vercel ou cole um token no campo acima.`;
  } finally {
    els.hydratePosters.disabled = false;
  }
}

async function hydratePriorityPosters() {
  if (priorityPosterHydrationStarted) return;
  const staticLocalhost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname) && !els.tmdbToken.value.trim();
  if (staticLocalhost) return;
  priorityPosterHydrationStarted = true;

  const visibleMovies = filteredMovies();
  const ratingCandidates = visibleMovies
    .filter((movie) => movie.rtSource !== "omdb" && movie.imdbId)
    .slice(0, 32);
  const candidates = visibleMovies
    .filter((movie) => !movie.posterUrl)
    .slice(0, 48);
  if (!candidates.length && !ratingCandidates.length) return;

  const previousStatus = els.tmdbStatus.textContent;
  let found = 0;

  try {
    if (ratingCandidates.length) {
      const ratingResults = await Promise.all(ratingCandidates.map((movie) => enrichRatingsFromOmdb(movie).catch(() => false)));
      found += ratingResults.filter(Boolean).length;
      if (found) render();
    }

    for (let index = 0; index < candidates.length; index += 4) {
      const batch = candidates.slice(index, index + 4);
      const results = await Promise.all(batch.map((movie) => findPosterForMovie(movie).catch(() => false)));
      found += results.filter(Boolean).length;
      if (found) {
        updateProviderFilter();
        render();
      }
    }

    if (found) {
      els.tmdbStatus.textContent = `${found} capas e notas oficiais adicionadas automaticamente aos filmes em destaque.`;
      render();
      return;
    }

    els.tmdbStatus.textContent = previousStatus;
  } catch {
    els.tmdbStatus.textContent = previousStatus;
  }
}

async function hydrateCatalogPostersInBackground() {
  if (catalogPosterHydrationStarted) return;
  const staticLocalhost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname) && !els.tmdbToken.value.trim();
  if (staticLocalhost) return;
  catalogPosterHydrationStarted = true;

  const missingPosters = activeCatalog()
    .filter((movie) => !movie.posterUrl)
    .slice(0, 180);
  if (!missingPosters.length) return;

  const previousStatus = els.tmdbStatus.textContent;
  let found = 0;

  try {
    for (let index = 0; index < missingPosters.length; index += 4) {
      const batch = missingPosters.slice(index, index + 4);
      const results = await Promise.all(batch.map((movie) => findPosterForMovie(movie).catch(() => false)));
      const batchFound = results.filter(Boolean).length;
      found += batchFound;

      if (batchFound) {
        updateProviderFilter();
        els.tmdbStatus.textContent = `${found} capas recuperadas no catálogo expandido.`;
        render();
      }
    }

    if (!found) els.tmdbStatus.textContent = previousStatus;
  } catch {
    els.tmdbStatus.textContent = previousStatus;
  }
}

function setMode(mode) {
  activeMode = mode;
  rerollOffset = 0;
  shuffleSalt = Math.floor(Math.random() * 100000);
  resetRecommendationFlow();
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
  resetRecommendationFlow();
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
        <p class="reason">A combinação atual ficou exigente demais. Reduza a nota mínima ou abra gênero, década ou duração.</p>
      </div>
    `;
    return;
  }

  const hasOmdb = movie.source && movie.source.includes("omdb");
  const hasTmdb = movie.source && movie.source.includes("tmdb");
  const providers = (movie.providers || []).slice(0, 3);
  const blockedTagKeys = [
    ...movieGenres(movie),
    movie.country,
    movie.director,
    ...providers
  ].map(normalize);
  const visibleVibes = (movie.vibes || []).filter((vibe) => vibe === activeMood || (activeMood === "nostalgia" && vibe === "comfort"));
  const hiddenForMood = new Set();
  if (activeMood === "acao") ["Familia", "família", "comfort", "sensível"].forEach((tag) => hiddenForMood.add(normalize(tag)));
  if (activeMood === "surpresa") ["Familia", "família", "comfort"].forEach((tag) => hiddenForMood.add(normalize(tag)));
  if (activeMood === "leve" || activeMood === "comfort") ["crime", "intenso", "terror"].forEach((tag) => hiddenForMood.add(normalize(tag)));
  const displayTags = uniqueNormalized([...(movie.tags || []), ...visibleVibes])
    .filter((tag) => !blockedTagKeys.includes(normalize(tag)))
    .filter((tag) => !hiddenForMood.has(normalize(tag)))
    .slice(0, 5);
  const tagPills = displayTags.map((tag) => `<span class="pill">${displayText(tag)}</span>`).join("");

  els.hero.innerHTML = `
    <div class="poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
      ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="Capa de ${movie.title}">` : ""}
      <span class="poster-badge">${displayText(movie.genre)}</span>
      <span class="poster-director">${movie.director}</span>
      <p class="poster-year">${movie.year}</p>
      <h2 class="poster-title">${movie.title}</h2>
    </div>
    <div class="rec-copy">
      <span class="kicker">${activeMode === "roulette" ? "Roleta escolheu" : "Melhor escolha agora"}</span>
      <h2>${movie.title}</h2>
      <p class="reason">${reasonFor(movie)}</p>
      <div class="fact-grid">
        <div class="fact-item"><span>Direção</span><strong>${movie.director}</strong></div>
        <div class="fact-item"><span>Duração</span><strong>${formatRuntime(movie.duration)}</strong></div>
        <div class="fact-item"><span>Origem</span><strong>${displayText(movie.country)}</strong></div>
        <div class="fact-item"><span>Período</span><strong>${movie.decade}s</strong></div>
      </div>
      <div class="watch-strip">
        <span>Onde assistir</span>
        <strong>${providers.length ? providers.join(" / ") : unavailableStreamingLabel}</strong>
      </div>
      <div class="meta-block">
        <span class="section-label">Vibe</span>
        <div class="meta-line">
          <span class="pill">${displayText(movie.genre)}</span>
          ${tagPills}
        </div>
      </div>
      <div class="score-row">
        <div class="score"><strong>${formatImdbScore(movie.imdb)}</strong><span>${hasOmdb || !hasTmdb ? "IMDb" : "TMDb"}</span></div>
        <div class="score"><strong>${movie.rt}%</strong><span>${secondaryScoreLabel(movie)}</span></div>
      </div>
      <div class="rec-actions">
        <button type="button" data-next>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          Próximo
        </button>
        <button type="button" data-seen="${movie.title}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
          Já vi
        </button>
      </div>
    </div>
  `;
}

function renderShortlist(list) {
  els.matchCount.textContent = `${list.length} opções`;
  els.shortlist.innerHTML = list.slice(1, 5).map((movie) => {
    const providerLine = `<br>${movie.providers?.length ? movie.providers.slice(0, 2).join(" / ") : unavailableStreamingLabel}`;
    return `
    <article class="mini-card">
      <div class="mini-poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
        ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="Capa de ${movie.title}">` : ""}
        <span>${movie.year}</span>
        <strong>${movie.title}</strong>
      </div>
      <h3>${movie.title}</h3>
      <p>${displayText(movie.genre)} | ${movie.duration ? `${movie.duration} min` : "duração n/d"}<br>${movie.director}${providerLine}</p>
    </article>
  `;
  }).join("");
  renderMoreOptions(list);
}

function renderMoreOptions(list) {
  const extra = list.slice(5, 29);
  els.moreCount.textContent = extra.length ? `${extra.length} filmes` : "sem extras";
  els.moreGrid.innerHTML = extra.map((movie) => {
    const providerLine = `<br>${movie.providers?.length ? movie.providers.slice(0, 2).join(" / ") : unavailableStreamingLabel}`;
    return `
    <article class="more-card">
      <div class="more-poster ${movie.posterUrl ? "has-official-poster" : ""}" style="--poster-a: ${movie.colors[0]}; --poster-b: ${movie.colors[1]}">
        ${movie.posterUrl ? `<img class="poster-img" src="${movie.posterUrl}" alt="">` : ""}
        <span>${movie.year}</span>
      </div>
      <div>
        <h3>${movie.title}</h3>
        <p>${displayText(movie.genre)} | ${displayText(movie.country)}<br>${movie.director}${providerLine}</p>
      </div>
    </article>
  `;
  }).join("");
}

function render() {
  renderWithAdvance(false);
}

function renderWithAdvance(advance) {
  renderMoods();
  const list = recommendationListForRender(advance);
  if (activeMode === "roulette") {
    const selected = list.find((movie) => movie.title === roulettePick) || list[0];
    const rotated = selected ? [selected, ...diversifyMovies(list.filter((movie) => movie.title !== selected.title), [selected])] : [];
    if (selected) {
      currentHeroKey = movieKey(selected.title, selected.year);
      rememberRecommendation(selected);
    }
    renderHero(rotated[0]);
    renderShortlist(rotated);
    return;
  }

  renderHero(list[0]);
  renderShortlist(list);
}

els.modeTabs.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

els.moods.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mood]");
  if (!button) return;
  activeMood = button.dataset.mood;
  rerollOffset = 0;
  shuffleSalt = Math.floor(Math.random() * 100000);
  resetRecommendationFlow();
  render();
});

document.querySelectorAll("select, input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input === els.rating) els.ratingValue.textContent = els.rating.value;
    rerollOffset = 0;
    shuffleSalt = Math.floor(Math.random() * 100000);
    resetRecommendationFlow();
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
  els.syncStatus.textContent = "Perfil simulado: 2 filmes vistos, gosto por Kaufman, Nolan, clássicos brasileiros e drama sensível.";
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
  resetRecommendationFlow();
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
    renderWithAdvance(true);
    return;
  }

  shuffleSalt = Math.floor(Math.random() * 100000);
  rerollOffset += 1 + Math.floor(Math.random() * Math.max(8, filteredMovies().length));
  renderWithAdvance(true);
});

els.spin.addEventListener("click", () => {
  els.rouletteWheel.classList.remove("is-spinning");
  void els.rouletteWheel.offsetWidth;
  els.rouletteWheel.classList.add("is-spinning");
  selectRouletteMovie(filteredMovies());
  renderWithAdvance(true);
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
  els.syncStatus.textContent = `"${movie.title}" marcado como visto. A próxima sugestão evita repetir.`;
  render();
});

const restoredInitialCatalog = restoreTmdbCatalogCache();
updateProviderFilter();
render();
window.setTimeout(async () => {
  await restoreCatalogSeed();
  if (!restoredInitialCatalog && tmdbMovies.length < 200) {
    loadTmdbCatalog({ auto: true });
  }
  hydratePriorityPosters().then(hydrateCatalogPostersInBackground);
}, 700);
