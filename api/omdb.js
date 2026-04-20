module.exports = async function handler(request, response) {
  const key = process.env.OMDB_API_KEY || request.headers["x-omdb-key"];
  const imdbId = request.query.i;
  const title = request.query.t;
  const year = request.query.y;

  if (!key) {
    response.status(500).json({ error: "OMDB_API_KEY is not configured." });
    return;
  }

  if (!imdbId && !title) {
    response.status(400).json({ error: "Provide an IMDb id or title." });
    return;
  }

  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.set("apikey", Array.isArray(key) ? key[0] : key);
  if (imdbId) url.searchParams.set("i", Array.isArray(imdbId) ? imdbId[0] : imdbId);
  if (title) url.searchParams.set("t", Array.isArray(title) ? title[0] : title);
  if (year) url.searchParams.set("y", Array.isArray(year) ? year[0] : year);

  try {
    const omdbResponse = await fetch(url);
    const payload = await omdbResponse.json();
    response.status(omdbResponse.status).json(payload);
  } catch (error) {
    response.status(502).json({ error: error.message });
  }
};
