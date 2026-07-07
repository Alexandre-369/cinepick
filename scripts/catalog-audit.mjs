import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const catalogPath = resolve("public/catalog-seed.json");
const manifestPath = resolve("public/catalog-manifest.json");
const shardDirectory = resolve("public/catalog-shards");
const strict = process.argv.includes("--strict");
const minimumTotal = Number(process.argv.find((arg) => arg.startsWith("--min-total="))?.split("=")[1] || 0);
const seed = JSON.parse(readFileSync(catalogPath, "utf8"));
const coreMovies = Array.isArray(seed.movies) ? seed.movies : [];
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : null;
const shardFiles = existsSync(shardDirectory)
  ? readdirSync(shardDirectory).filter((file) => /^catalog-\d+\.json$/.test(file)).sort()
  : [];
const shardMovies = shardFiles.flatMap((file) => {
  const payload = JSON.parse(readFileSync(resolve(shardDirectory, file), "utf8"));
  return Array.isArray(payload.movies) ? payload.movies : [];
});
const movies = [...coreMovies, ...shardMovies];

const countBy = (items, getKey) => {
  const counts = new Map();
  items.forEach((item) => {
    const values = getKey(item);
    const keys = Array.isArray(values) ? values : [values];
    keys.filter(Boolean).forEach((key) => {
      counts.set(key, (counts.get(key) || 0) + 1);
    });
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

const pct = (value, total = movies.length) => {
  if (!total) return "0%";
  return `${Math.round((value / total) * 100)}%`;
};

const formatRows = (rows, limit = 12) => rows
  .slice(0, limit)
  .map(([label, count]) => `- ${label}: ${count}`)
  .join("\n");

const missing = {
  poster: movies.filter((movie) => !movie.posterUrl).length,
  backdrop: movies.filter((movie) => !movie.backdropUrl).length,
  overview: movies.filter((movie) => !movie.overview || String(movie.overview).length < 80).length,
  streaming: movies.filter((movie) => !(movie.providers || []).length).length,
  tmdbVotes: movies.filter((movie) => !Number(movie.tmdbVotes)).length,
  imdbId: movies.filter((movie) => !movie.imdbId).length
};

const decades = countBy(movies, (movie) => movie.decade || "sem década");
const countries = countBy(movies, (movie) => movie.country || "sem país");
const genres = countBy(movies, (movie) => movie.genres?.length ? movie.genres : movie.genre || "sem gênero");
const vibes = countBy(movies, (movie) => movie.vibes?.length ? movie.vibes : "sem vibe");
const providers = countBy(movies, (movie) => movie.providers?.length ? movie.providers : "sem streaming");
const ingestionGroups = countBy(movies, (movie) => movie.ingestionGroup || movie.source || "core");

const normalizedKey = (movie) => `${String(movie.title || "").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()}|${movie.year || ""}`;
const duplicateTitles = movies.length - new Set(movies.map(normalizedKey)).size;
const duplicateTmdbIds = movies.filter((movie) => Number(movie.tmdbId)).length
  - new Set(movies.map((movie) => Number(movie.tmdbId)).filter(Boolean)).size;

const longTailCountries = countries.filter(([, count]) => count < 6).map(([country]) => country);
const lowDecades = decades.filter(([, count]) => count < 24).map(([decade]) => decade);
const lowGenres = genres.filter(([, count]) => count < 35).map(([genre]) => genre);

console.log(`# CinePick catalog audit

Total movies: ${movies.length}
Core movies: ${coreMovies.length}
Expanded movies: ${shardMovies.length} in ${shardFiles.length} shard(s)
Seed version: ${seed.version || "unknown"}
Manifest version: ${manifest?.version || "none"}
Generated at: ${manifest?.generatedAt || seed.generatedAt || "unknown"}

Coverage
- Posters: ${movies.length - missing.poster}/${movies.length} (${pct(movies.length - missing.poster)})
- Backdrops: ${movies.length - missing.backdrop}/${movies.length} (${pct(movies.length - missing.backdrop)})
- Useful overviews: ${movies.length - missing.overview}/${movies.length} (${pct(movies.length - missing.overview)})
- Streaming hints: ${movies.length - missing.streaming}/${movies.length} (${pct(movies.length - missing.streaming)})
- TMDb vote signal: ${movies.length - missing.tmdbVotes}/${movies.length} (${pct(movies.length - missing.tmdbVotes)})
- IMDb IDs: ${movies.length - missing.imdbId}/${movies.length} (${pct(movies.length - missing.imdbId)})
- Duplicate title/year keys: ${duplicateTitles}
- Duplicate TMDb IDs: ${duplicateTmdbIds}

Top countries
${formatRows(countries)}

Top decades
${formatRows(decades)}

Top genres
${formatRows(genres)}

Top vibes
${formatRows(vibes)}

Top providers
${formatRows(providers, 10)}

Top ingestion groups
${formatRows(ingestionGroups, 14)}

Expansion priorities
- Countries below 6 titles: ${longTailCountries.slice(0, 20).join(", ") || "none"}
- Decades below 24 titles: ${lowDecades.join(", ") || "none"}
- Genres below 35 titles: ${lowGenres.slice(0, 20).join(", ") || "none"}
- First data quality pass: fill ${missing.poster} posters, ${missing.overview} overviews, ${missing.streaming} streaming hints.
`);

if (strict) {
  const failures = [];
  if (minimumTotal && movies.length < minimumTotal) failures.push(`total ${movies.length} is below ${minimumTotal}`);
  if (missing.poster) failures.push(`${missing.poster} movies have no poster`);
  if (missing.backdrop) failures.push(`${missing.backdrop} movies have no backdrop`);
  if (duplicateTitles) failures.push(`${duplicateTitles} duplicate title/year keys`);
  if (duplicateTmdbIds) failures.push(`${duplicateTmdbIds} duplicate TMDb IDs`);
  if (countries.length < 24) failures.push(`only ${countries.length} countries represented`);
  if (genres.length < 14) failures.push(`only ${genres.length} genres represented`);
  if (failures.length) {
    console.error(`Strict audit failed:\n- ${failures.join("\n- ")}`);
    process.exitCode = 1;
  } else {
    console.log("Strict audit: PASS");
  }
}
