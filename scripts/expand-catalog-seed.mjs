import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const catalogPath = resolve("public/catalog-seed.json");
const baseUrl = process.argv.find((arg) => arg.startsWith("--base-url="))?.split("=")[1] || "https://cinepick-three.vercel.app";
const limit = Number(process.argv.find((arg) => arg.startsWith("--limit="))?.split("=")[1] || 96);
const groupFilter = process.argv.find((arg) => arg.startsWith("--groups="))?.split("=")[1]
  ?.split(",")
  .map((value) => value.trim())
  .filter(Boolean) || [];
const dryRun = process.argv.includes("--dry-run");

const countryNames = {
  AR: "Argentina",
  AT: "Austria",
  AU: "Australia",
  BR: "Brasil",
  CA: "Canada",
  CN: "China",
  DE: "Alemanha",
  ES: "Espanha",
  FR: "Franca",
  GB: "Reino Unido",
  IE: "Irlanda",
  IL: "Israel",
  IN: "India",
  IT: "Italia",
  JP: "Japao",
  KR: "Coreia do Sul",
  MX: "Mexico",
  NO: "Noruega",
  US: "Estados Unidos",
  SE: "Suecia",
  ZA: "Africa do Sul"
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

const expansionGroups = [
...["AU", "CA", "CN", "ZA", "AT", "IL", "IE", "NO"].map((country) => ({
    label: `country:${country}`,
    country,
    params: { with_origin_country: country, sort_by: "vote_count.desc", "vote_count.gte": "45", "vote_average.gte": "6.2" }
  })),
  ...[1950, 1960, 1970, 1980].map((decade) => ({
    label: `decade:${decade}`,
    params: {
      sort_by: "vote_count.desc",
      "vote_count.gte": "90",
      "vote_average.gte": "6.4",
      "primary_release_date.gte": `${decade}-01-01`,
      "primary_release_date.lte": `${decade + 9}-12-31`
    }
  })),
  ...[
    [99, "Documentario"],
    [10402, "Musica"],
    [36, "Historia"],
    [10752, "Guerra"],
    [37, "Faroeste"]
  ].map(([genreId, label]) => ({
    label: `genre:${label}`,
    params: { with_genres: String(genreId), sort_by: "vote_count.desc", "vote_count.gte": "80", "vote_average.gte": "6.3" }
  }))
];
const activeGroups = groupFilter.length
  ? expansionGroups.filter((group) => groupFilter.includes(group.label))
  : expansionGroups;

const normalize = (value) => String(value || "")
  .normalize("NFD")
  .replace(/\p{Diacritic}/gu, "")
  .toLowerCase()
  .trim();

const movieKey = (movie) => `${normalize(movie.title)}|${movie.year || ""}`;

const uniqueValues = (values) => {
  const seen = new Set();
  return values.filter((value) => {
    const key = normalize(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const pickOverview = (...values) => values
  .map((value) => String(value || "").trim())
  .find((value) => value && value !== "N/A" && value.length >= 18) || "";

const colorPairForMovie = (seed) => {
  const palette = [
    ["#3f7d9b", "#d85f56"],
    ["#c77d34", "#47745b"],
    ["#2d3e39", "#d2c08a"],
    ["#613c5d", "#b48a61"],
    ["#59656d", "#b0a48d"],
    ["#7d3f33", "#d6b36a"]
  ];
  return palette[Math.abs(Number(seed) || 0) % palette.length];
};

const canonicalProviderName = (provider) => {
  const key = normalize(provider);
  if (!key) return "";
  if (key.includes("telecine")) return "Telecine";
  if (key.includes("globoplay")) return "Globoplay";
  if (key.includes("paramount")) return "Paramount+";
  if (key.includes("disney")) return "Disney+";
  if (key.includes("netflix")) return "Netflix";
  if (key.includes("hbo") || key === "max" || key.includes(" max")) return "Max";
  if (key.includes("mubi")) return "MUBI";
  if (key.includes("apple")) return "Apple TV";
  if (key.includes("google")) return "Google Play";
  if (key.includes("claro")) return "Claro tv+";
  if (key.includes("crunchyroll")) return "Crunchyroll";
  if (key.includes("looke")) return "Looke";
  if (key.includes("youtube")) return "YouTube";
  if (key.includes("amazon") || key.includes("prime")) return "Prime Video";
  return String(provider || "").trim();
};

const dedupeProviders = (providers = []) => uniqueValues(providers.map(canonicalProviderName)).slice(0, 4);

const inferVibes = (genres, overview, year = 0, title = "") => {
  const text = normalize(`${title} ${genres.join(" ")} ${overview}`);
  const vibes = new Set();
  const hasGentleGenre = text.includes("comedia") || text.includes("familia") || text.includes("animacao") || text.includes("romance") || text.includes("musica");
  const hasHeavyGenre = text.includes("crime") || text.includes("suspense") || text.includes("thriller") || text.includes("terror") || text.includes("guerra");
  if (hasGentleGenre || (text.includes("aventura") && !hasHeavyGenre)) vibes.add("leve");
  if (text.includes("romance") || text.includes("drama") || text.includes("familia")) vibes.add("sensivel");
  if (hasHeavyGenre || text.includes("misterio")) vibes.add("intenso");
  if (text.includes("ficcao cientifica") || text.includes("documentario") || text.includes("memoria") || text.includes("politica") || text.includes("surreal")) vibes.add("complexo");
  if (text.includes("familia") || text.includes("amizade") || text.includes("animacao") || text.includes("romance")) vibes.add("comfort");
  if (text.includes("terror") || text.includes("fantasma") || text.includes("sobrenatural")) vibes.add("terror");
  if (text.includes("acao") || text.includes("aventura") || text.includes("faroeste") || text.includes("guerra")) vibes.add("acao");
  if (text.includes("documentario") || text.includes("estranho") || text.includes("surreal") || text.includes("misterio") || text.includes("terror")) vibes.add("surpresa");
  if (Number(year) && Number(year) < 2005) vibes.add("nostalgia");
  return [...(vibes.size ? vibes : new Set(["comfort"]))];
};

const apiFetch = async (path, params = {}) => {
  const url = new URL("/api/tmdb", baseUrl);
  url.searchParams.set("path", path);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  const response = await fetch(url);
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || `TMDb proxy returned ${response.status}`);
  return payload;
};

const providersFromDetails = (details) => {
  const br = details["watch/providers"]?.results?.BR || {};
  return dedupeProviders([...(br.flatrate || []), ...(br.rent || []), ...(br.buy || [])].map((provider) => provider.provider_name));
};

const mapMovie = (movie, details, group = {}) => {
  const year = Number((movie.release_date || "").slice(0, 4)) || 0;
  const genres = uniqueValues([
    ...(movie.genre_ids || []).map((id) => tmdbGenres[id]),
    ...(details.genres || []).map((genre) => tmdbGenres[genre.id] || genre.name)
  ]);
  const genre = genres[0] || "Drama";
  const originCountries = details.origin_country || [];
  const productionCountries = (details.production_countries || []).map((country) => country.iso_3166_1).filter(Boolean);
  const countryCode = group.country && originCountries.includes(group.country)
    ? group.country
    : originCountries[0] || productionCountries[0] || movie.original_language?.toUpperCase();
  const country = countryNames[countryCode] || countryCode || "Internacional";
  const director = (details.credits?.crew || []).find((person) => person.job === "Director")?.name || "Direção não informada";
  const overview = pickOverview(movie.overview, details.overview);
  const vote = Math.round((movie.vote_average || 0) * 10);
  const providers = providersFromDetails(details);

  return {
    title: movie.title || movie.original_title,
    year: year || "----",
    decade: year ? String(Math.floor(year / 10) * 10) : "qualquer",
    genre,
    duration: details.runtime || 0,
    country,
    director,
    genres,
    overview,
    imdb: vote,
    rt: vote,
    rtSource: "tmdb",
    tmdbVotes: movie.vote_count || 0,
    imdbId: details.external_ids?.imdb_id || "",
    tmdbId: movie.id || details.id || 0,
    originalLanguage: movie.original_language || details.original_language || "",
    providers,
    vibes: inferVibes(genres, overview, year, movie.title || movie.original_title || ""),
    tags: uniqueValues(genres.filter((item) => normalize(item) !== normalize(genre))).slice(0, 5),
    seen: false,
    favoriteSignal: false,
    posterUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "",
    backdropUrl: movie.backdrop_path ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` : "",
    colors: colorPairForMovie(movie.id || vote),
    source: "tmdb-expanded"
  };
};

const seed = JSON.parse(readFileSync(catalogPath, "utf8"));
const movies = Array.isArray(seed.movies) ? seed.movies : [];
const existingTmdbIds = new Set(movies.map((movie) => Number(movie.tmdbId || 0)).filter(Boolean));
const existingImdbIds = new Set(movies.map((movie) => movie.imdbId).filter(Boolean));
const existingKeys = new Set(movies.map(movieKey));
const additions = [];
const seenCandidates = new Set();
const targetPerGroup = Math.max(2, Math.ceil(limit / activeGroups.length));

for (const group of activeGroups) {
  if (additions.length >= limit) break;
  let groupAdditions = 0;
  const page = await apiFetch("/discover/movie", {
    include_adult: "false",
    include_video: "false",
    language: "pt-BR",
    page: "1",
    ...group.params
  });

  for (const movie of page.results || []) {
    if (additions.length >= limit) break;
    if (groupAdditions >= targetPerGroup) break;
    if (!movie.id || !movie.poster_path || seenCandidates.has(movie.id) || existingTmdbIds.has(movie.id)) continue;
    seenCandidates.add(movie.id);

    const details = await apiFetch(`/movie/${movie.id}`, {
      append_to_response: "credits,external_ids,watch/providers",
      language: "pt-BR"
    });
    if (group.country && !(details.origin_country || []).includes(group.country)) continue;
    if (details.external_ids?.imdb_id && existingImdbIds.has(details.external_ids.imdb_id)) continue;

    const mapped = mapMovie(movie, details, group);
    if (!mapped.title || !mapped.posterUrl || !mapped.backdropUrl || !mapped.tmdbId || !mapped.duration) continue;
    if (existingKeys.has(movieKey(mapped))) continue;

    additions.push(mapped);
    groupAdditions += 1;
    existingKeys.add(movieKey(mapped));
    existingTmdbIds.add(Number(mapped.tmdbId));
    if (mapped.imdbId) existingImdbIds.add(mapped.imdbId);
    console.log(`+ ${mapped.title} (${mapped.year}) via ${group.label}`);
  }
}

const nextSeed = {
  ...seed,
  version: Number(seed.version || 1) + (additions.length && !dryRun ? 1 : 0),
  generatedAt: new Date().toISOString().slice(0, 10),
  movies: [...movies, ...additions]
};

console.log(`\nExisting: ${movies.length}`);
console.log(`Additions: ${additions.length}`);
console.log(`Next total: ${nextSeed.movies.length}`);

if (!dryRun && additions.length) {
  writeFileSync(catalogPath, `${JSON.stringify(nextSeed, null, 2)}\n`);
}
