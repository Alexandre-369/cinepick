import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, unlinkSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const catalogPath = resolve("public/catalog-seed.json");
const shardDirectory = resolve("public/catalog-shards");
const manifestPath = resolve("public/catalog-manifest.json");
const baseUrl = process.argv.find((arg) => arg.startsWith("--base-url="))?.split("=")[1] || "https://cinepick-three.vercel.app";
const limit = Math.max(1, Number(process.argv.find((arg) => arg.startsWith("--limit="))?.split("=")[1] || 400));
const targetTotal = Math.max(0, Number(process.argv.find((arg) => arg.startsWith("--target-total="))?.split("=")[1] || 0));
const maxPages = Math.max(1, Math.min(25, Number(process.argv.find((arg) => arg.startsWith("--max-pages="))?.split("=")[1] || 8)));
const concurrency = Math.max(1, Math.min(16, Number(process.argv.find((arg) => arg.startsWith("--concurrency="))?.split("=")[1] || 8)));
const shardSize = Math.max(100, Math.min(1000, Number(process.argv.find((arg) => arg.startsWith("--shard-size="))?.split("=")[1] || 400)));
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
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  CZ: "Republica Tcheca",
  DE: "Alemanha",
  DK: "Dinamarca",
  EG: "Egito",
  ES: "Espanha",
  FR: "Franca",
  GB: "Reino Unido",
  IE: "Irlanda",
  ID: "Indonesia",
  IL: "Israel",
  IN: "India",
  IR: "Ira",
  IT: "Italia",
  JP: "Japao",
  KR: "Coreia do Sul",
  MX: "Mexico",
  NG: "Nigeria",
  NO: "Noruega",
  NZ: "Nova Zelandia",
  PH: "Filipinas",
  PL: "Polonia",
  PT: "Portugal",
  RO: "Romenia",
  US: "Estados Unidos",
  SE: "Suecia",
  TH: "Tailandia",
  TR: "Turquia",
  TW: "Taiwan",
  UA: "Ucrania",
  VN: "Vietna",
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

const expansionCountries = [
  "AR", "AT", "AU", "BR", "CA", "CL", "CN", "CO", "CZ", "DE", "DK", "EG", "ES", "FR", "GB", "ID", "IE", "IL",
  "IN", "IR", "IT", "JP", "KR", "MX", "NG", "NO", "NZ", "PH", "PL", "PT", "RO", "SE", "TH", "TR", "TW", "UA", "VN", "ZA"
];
const expansionLanguages = ["ar", "da", "de", "es", "fa", "fr", "hi", "id", "it", "ja", "ko", "pl", "pt", "sv", "th", "tr", "uk", "vi", "zh"];

const expansionGroups = [
  ...expansionCountries.map((country) => ({
    label: `country:${country}`,
    country,
    params: { with_origin_country: country, sort_by: "vote_count.desc", "vote_count.gte": "24", "vote_average.gte": "5.8" }
  })),
  ...[1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020].map((decade) => ({
    label: `decade:${decade}`,
    params: {
      sort_by: "vote_count.desc",
      "vote_count.gte": decade < 1970 ? "35" : "70",
      "vote_average.gte": "6.0",
      "primary_release_date.gte": `${decade}-01-01`,
      "primary_release_date.lte": `${decade + 9}-12-31`
    }
  })),
  ...Object.entries(tmdbGenres).map(([genreId, label]) => ({
    label: `genre:${label}`,
    params: { with_genres: String(genreId), sort_by: "vote_count.desc", "vote_count.gte": "45", "vote_average.gte": "5.9" }
  })),
  ...expansionLanguages.map((language) => ({
    label: `language:${language}`,
    params: { with_original_language: language, sort_by: "vote_count.desc", "vote_count.gte": "28", "vote_average.gte": "5.8" }
  })),
  { label: "quality:popular", params: { sort_by: "popularity.desc", "vote_count.gte": "120", "vote_average.gte": "5.8" } },
  { label: "quality:rated", params: { sort_by: "vote_average.desc", "vote_count.gte": "350", "vote_average.gte": "6.4" } }
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

const delay = (milliseconds) => new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds));

const apiFetch = async (path, params = {}) => {
  const url = new URL("/api/tmdb", baseUrl);
  url.searchParams.set("path", path);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, String(value)));

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(url);
    const payload = await response.json().catch(() => ({}));
    if (response.ok) return payload;
    if (response.status !== 429 && response.status < 500) {
      throw new Error(payload.error || `TMDb proxy returned ${response.status}`);
    }
    await delay(350 * 2 ** attempt);
  }

  throw new Error(`TMDb proxy retries exhausted for ${path}`);
};

const mapWithConcurrency = async (items, worker, workerCount = concurrency) => {
  const results = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(workerCount, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
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
    source: "tmdb-expanded",
    ingestionGroup: group.label || "quality:general"
  };
};

const readJson = (path, fallback) => {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return fallback;
  }
};

const seed = readJson(catalogPath, { version: 1, movies: [] });
const coreMovies = Array.isArray(seed.movies) ? seed.movies : [];
const previousManifest = readJson(manifestPath, null);
const existingShardFiles = existsSync(shardDirectory)
  ? readdirSync(shardDirectory).filter((file) => /^catalog-\d+\.json$/.test(file)).sort()
  : [];
const existingShardMovies = existingShardFiles.flatMap((file) => {
  const payload = readJson(resolve(shardDirectory, file), { movies: [] });
  return Array.isArray(payload.movies) ? payload.movies : [];
});

const dedupeMovieList = (items) => {
  const ids = new Set();
  const imdbIds = new Set();
  const keys = new Set();
  return items.filter((movie) => {
    const tmdbId = Number(movie.tmdbId || 0);
    const imdbId = String(movie.imdbId || "");
    const key = movieKey(movie);
    if ((tmdbId && ids.has(tmdbId)) || (imdbId && imdbIds.has(imdbId)) || keys.has(key)) return false;
    if (tmdbId) ids.add(tmdbId);
    if (imdbId) imdbIds.add(imdbId);
    keys.add(key);
    return true;
  });
};

const expandedMovies = dedupeMovieList(existingShardMovies);
const allExistingMovies = dedupeMovieList([...coreMovies, ...expandedMovies]);
const desiredTotal = targetTotal || allExistingMovies.length + limit;
const requiredAdditions = Math.max(0, desiredTotal - allExistingMovies.length);
const existingTmdbIds = new Set(allExistingMovies.map((movie) => Number(movie.tmdbId || 0)).filter(Boolean));
const existingImdbIds = new Set(allExistingMovies.map((movie) => movie.imdbId).filter(Boolean));
const existingKeys = new Set(allExistingMovies.map(movieKey));
const additions = [];
const runVersion = Number(previousManifest?.version || 0) + 1;
const generatedAt = new Date().toISOString();

const writeJsonAtomic = (path, value) => {
  const temporaryPath = `${path}.tmp`;
  writeFileSync(temporaryPath, `${JSON.stringify(value, null, 2)}\n`);
  renameSync(temporaryPath, path);
};

const persistShards = (movies, checkpoint = false) => {
  if (dryRun) return;
  mkdirSync(shardDirectory, { recursive: true });
  const shards = [];
  const activeFiles = new Set();

  for (let index = 0; index < movies.length; index += shardSize) {
    const shardMovies = movies.slice(index, index + shardSize);
    const file = `catalog-${String(shards.length + 1).padStart(3, "0")}.json`;
    const payload = { version: runVersion, generatedAt, movies: shardMovies };
    const serialized = `${JSON.stringify(payload, null, 2)}\n`;
    const checksum = createHash("sha256").update(serialized).digest("hex").slice(0, 16);
    writeJsonAtomic(resolve(shardDirectory, file), payload);
    activeFiles.add(file);
    shards.push({ file: `./catalog-shards/${file}`, count: shardMovies.length, checksum });
  }

  existingShardFiles.filter((file) => !activeFiles.has(file)).forEach((file) => unlinkSync(resolve(shardDirectory, file)));
  writeJsonAtomic(manifestPath, {
    version: runVersion,
    generatedAt,
    coreCount: coreMovies.length,
    expandedCount: movies.length,
    totalMovies: coreMovies.length + movies.length,
    shardSize,
    checkpoint,
    shards
  });
};

if (!activeGroups.length) throw new Error("No expansion groups matched --groups.");

if (!requiredAdditions) {
  console.log(`Catalog already has ${allExistingMovies.length} movies; target is ${desiredTotal}.`);
} else {
  const targetPerGroup = Math.max(4, Math.ceil(requiredAdditions / activeGroups.length));
  const candidateLimitPerGroup = Math.max(24, targetPerGroup * 5);
  console.log(`Discovering candidates across ${activeGroups.length} groups, up to ${maxPages} pages each...`);

  const candidateLists = await mapWithConcurrency(activeGroups, async (group) => {
    const candidates = [];
    const groupIds = new Set();
    for (let pageNumber = 1; pageNumber <= maxPages && candidates.length < candidateLimitPerGroup; pageNumber += 1) {
      try {
        const page = await apiFetch("/discover/movie", {
          include_adult: "false",
          include_video: "false",
          language: "pt-BR",
          page: String(pageNumber),
          ...group.params
        });
        for (const movie of page.results || []) {
          if (!movie.id || !movie.poster_path || !movie.backdrop_path || groupIds.has(movie.id) || existingTmdbIds.has(movie.id)) continue;
          groupIds.add(movie.id);
          candidates.push({ movie, group });
          if (candidates.length >= candidateLimitPerGroup) break;
        }
        if (pageNumber >= Number(page.total_pages || pageNumber)) break;
      } catch (error) {
        console.warn(`! discovery ${group.label} page ${pageNumber}: ${error.message}`);
        break;
      }
    }
    console.log(`? ${group.label}: ${candidates.length} candidates`);
    return candidates;
  }, Math.min(6, concurrency));

  const candidatePool = [];
  const seenCandidates = new Set();
  const longestList = Math.max(0, ...candidateLists.map((list) => list.length));
  for (let cursor = 0; cursor < longestList; cursor += 1) {
    candidateLists.forEach((list) => {
      const candidate = list[cursor];
      if (!candidate || seenCandidates.has(candidate.movie.id)) return;
      seenCandidates.add(candidate.movie.id);
      candidatePool.push(candidate);
    });
  }

  console.log(`Enriching ${candidatePool.length} unique candidates for ${requiredAdditions} open slots...`);
  const groupCounts = new Map();
  const groupCap = Math.max(targetPerGroup + 8, Math.ceil(targetPerGroup * 1.75));
  const batchSize = concurrency * 3;
  let lastCheckpoint = 0;

  for (let offset = 0; offset < candidatePool.length && additions.length < requiredAdditions; offset += batchSize) {
    const batch = candidatePool.slice(offset, offset + batchSize);
    const enriched = await mapWithConcurrency(batch, async ({ movie, group }) => {
      if ((groupCounts.get(group.label) || 0) >= groupCap) return null;
      try {
        const details = await apiFetch(`/movie/${movie.id}`, {
          append_to_response: "credits,external_ids,watch/providers",
          language: "pt-BR"
        });
        if (group.country && !(details.origin_country || []).includes(group.country)) return null;
        if (details.external_ids?.imdb_id && existingImdbIds.has(details.external_ids.imdb_id)) return null;
        const mapped = mapMovie(movie, details, group);
        const validYear = Number(mapped.year) >= 1900 && Number(mapped.year) <= new Date().getFullYear() + 1;
        const validRuntime = Number(mapped.duration) >= 40 && Number(mapped.duration) <= 400;
        if (!mapped.title || !mapped.posterUrl || !mapped.backdropUrl || !mapped.tmdbId || !validYear || !validRuntime) return null;
        if (!mapped.overview || mapped.overview.length < 18 || existingKeys.has(movieKey(mapped))) return null;
        return mapped;
      } catch (error) {
        console.warn(`! detail ${movie.id}: ${error.message}`);
        return null;
      }
    });

    for (const mapped of enriched.filter(Boolean)) {
      if (additions.length >= requiredAdditions) break;
      const tmdbId = Number(mapped.tmdbId || 0);
      if (existingTmdbIds.has(tmdbId) || existingKeys.has(movieKey(mapped))) continue;
      if (mapped.imdbId && existingImdbIds.has(mapped.imdbId)) continue;
      additions.push(mapped);
      existingTmdbIds.add(tmdbId);
      existingKeys.add(movieKey(mapped));
      if (mapped.imdbId) existingImdbIds.add(mapped.imdbId);
      groupCounts.set(mapped.ingestionGroup, (groupCounts.get(mapped.ingestionGroup) || 0) + 1);
      console.log(`+ ${mapped.title} (${mapped.year}) via ${mapped.ingestionGroup} [${additions.length}/${requiredAdditions}]`);
    }

    if (additions.length - lastCheckpoint >= 100) {
      persistShards(dedupeMovieList([...expandedMovies, ...additions]), true);
      lastCheckpoint = additions.length;
    }
  }
}

const nextExpandedMovies = dedupeMovieList([...expandedMovies, ...additions]);
if (additions.length) persistShards(nextExpandedMovies, false);
if (!additions.length && previousManifest?.checkpoint && nextExpandedMovies.length) persistShards(nextExpandedMovies, false);

console.log(`\nCore catalog: ${coreMovies.length}`);
console.log(`Existing shards: ${expandedMovies.length}`);
console.log(`Additions: ${additions.length}`);
console.log(`Next total: ${coreMovies.length + nextExpandedMovies.length}`);
if (requiredAdditions && additions.length < requiredAdditions) {
  console.warn(`Target shortfall: ${requiredAdditions - additions.length} movies. Increase --max-pages or relax group filters.`);
}
