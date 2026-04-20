const allowedPaths = [
  /^\/discover\/movie$/,
  /^\/search\/movie$/,
  /^\/search\/person$/,
  /^\/movie\/\d+$/
];

module.exports = async function handler(request, response) {
  const token = process.env.TMDB_READ_TOKEN || request.headers["x-tmdb-token"];
  const path = request.query.path;

  if (!token) {
    response.status(500).json({ error: "TMDB_READ_TOKEN is not configured." });
    return;
  }

  if (!path || !allowedPaths.some((pattern) => pattern.test(path))) {
    response.status(400).json({ error: "Unsupported TMDb path." });
    return;
  }

  const url = new URL(`https://api.themoviedb.org/3${path}`);
  Object.entries(request.query).forEach(([key, value]) => {
    if (key === "path") return;
    url.searchParams.set(key, Array.isArray(value) ? value[0] : value);
  });

  try {
    const tmdbResponse = await fetch(url, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8"
      }
    });
    const payload = await tmdbResponse.json();
    response.status(tmdbResponse.status).json(payload);
  } catch (error) {
    response.status(502).json({ error: error.message });
  }
};
