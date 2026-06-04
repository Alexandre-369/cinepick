# CinePick Catalog Expansion

Use this flow before growing `public/catalog-seed.json`.

1. Run `npm run catalog:audit` to see coverage by country, decade, genre, vibe, posters, overviews, and streaming hints.
2. Prioritize gaps that affect recommendations first: countries with fewer than 6 titles, decades with fewer than 24 titles, and genres with fewer than 35 titles.
3. Prefer adding movies with `tmdbId`, `posterUrl`, `backdropUrl`, `overview`, `tmdbVotes`, `providers`, `genres`, `vibes`, and `tags`.
4. Deduplicate by `tmdbId` first, then normalized `title|year`.
5. After changing the seed, run `npm run catalog:audit` and `npm test`.

Good next ingestion batches:

- Global south and non-US picks for `surpresa`, `sensivel`, and `complexo`.
- Horror and mystery titles outside the US/UK for `terror` and `intenso`.
- Shorter comedies and animation for `leve` and mobile-friendly quick sessions.
- Pre-1990 films with reliable posters and overviews to balance decade filters.
