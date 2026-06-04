import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const catalogPath = resolve("public/catalog-seed.json");
const seed = JSON.parse(readFileSync(catalogPath, "utf8"));
const movies = Array.isArray(seed.movies) ? seed.movies : [];

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

const longTailCountries = countries.filter(([, count]) => count < 6).map(([country]) => country);
const lowDecades = decades.filter(([, count]) => count < 24).map(([decade]) => decade);
const lowGenres = genres.filter(([, count]) => count < 35).map(([genre]) => genre);

console.log(`# CinePick catalog audit

Total movies: ${movies.length}
Seed version: ${seed.version || "unknown"}
Generated at: ${seed.generatedAt || "unknown"}

Coverage
- Posters: ${movies.length - missing.poster}/${movies.length} (${pct(movies.length - missing.poster)})
- Backdrops: ${movies.length - missing.backdrop}/${movies.length} (${pct(movies.length - missing.backdrop)})
- Useful overviews: ${movies.length - missing.overview}/${movies.length} (${pct(movies.length - missing.overview)})
- Streaming hints: ${movies.length - missing.streaming}/${movies.length} (${pct(movies.length - missing.streaming)})
- TMDb vote signal: ${movies.length - missing.tmdbVotes}/${movies.length} (${pct(movies.length - missing.tmdbVotes)})
- IMDb IDs: ${movies.length - missing.imdbId}/${movies.length} (${pct(movies.length - missing.imdbId)})

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

Expansion priorities
- Countries below 6 titles: ${longTailCountries.slice(0, 20).join(", ") || "none"}
- Decades below 24 titles: ${lowDecades.join(", ") || "none"}
- Genres below 35 titles: ${lowGenres.slice(0, 20).join(", ") || "none"}
- First data quality pass: fill ${missing.poster} posters, ${missing.overview} overviews, ${missing.streaming} streaming hints.
`);
