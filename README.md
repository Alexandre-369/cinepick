# CinePick

CinePick is a lightweight movie decision app for people who spend too long choosing what to watch.

It combines mood-based recommendations, objective filters, a roulette mode, Letterboxd/Filmow CSV imports, and optional TMDb/OMDb loading for official posters, IMDb/Rotten Tomatoes ratings, streaming providers, and a larger movie base.

## Features

- Mood-based movie recommendations
- Roulette mode for indecisive nights
- Filters for genre, duration, decade, country, director/vibe, and minimum rating
- Local CSV import for watched movies and taste signals
- Optional TMDb integration using `TMDB_READ_TOKEN` or a browser-provided read token
- Optional OMDb integration using `OMDB_API_KEY` or a browser-provided key
- Brazilian streaming provider hints from TMDb watch providers
- Static Vercel deployment

## Environment

Set these variables in Vercel for the best experience:

- `TMDB_READ_TOKEN`: TMDb API read access token. Required for official posters, TMDb catalog loading, and streaming providers.
- `OMDB_API_KEY`: OMDb API key. Optional, used to refresh IMDb and Rotten Tomatoes ratings when available.

## Local Use

Open `public/index.html` directly in a browser.

No build step is required.
