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

function durationMatches(filter, minutes) {
  if (filter === "qualquer" || !minutes) return true;
  if (filter === "ate90") return minutes <= 90;
  if (filter === "curto") return minutes <= 100;
  if (filter === "medio") return minutes > 100 && minutes <= 130;
  if (filter === "longo") return minutes > 130;
  return true;
}

function ratingAverage(movie) {
  return Math.round((Number(movie.imdb || 0) + Number(movie.rt || 0)) / 2);
}

function movieGenres(movie) {
  const genres = [movie.genre, ...(movie.genres || [])]
    .map((item) => String(item || "").trim())
    .filter(Boolean);
  const dedup = new Set();
  const output = [];
  genres.forEach((item) => {
    const key = normalize(item);
    if (!key || dedup.has(key)) return;
    dedup.add(key);
    output.push(item);
  });
  return output;
}

function hasGenre(movie, genres) {
  if (!movie.__genreSet) {
    movie.__genreSet = new Set(movieGenres(movie).map(normalize));
  }
  return genres.some((genre) => movie.__genreSet.has(normalize(genre)));
}

function genreMatchCount(movie, genres = []) {
  return genres.filter((genre) => hasGenre(movie, [genre])).length;
}

function movieSearchText(movie) {
  if (movie.__searchText) return movie.__searchText;
  movie.__searchText = normalize([
    movie.title,
    movie.director,
    movie.genre,
    ...(movie.genres || []),
    ...(movie.vibes || []),
    ...(movie.tags || []),
    movie.overview
  ].join(" "));
  return movie.__searchText;
}

function hasAnyText(text, terms) {
  return terms.some((term) => text.includes(normalize(term)));
}

function moodAliases(mood, moodAliasMap) {
  const aliases = [mood, ...((moodAliasMap && moodAliasMap[mood]) || [])];
  const seen = new Set();
  const output = [];
  aliases.forEach((item) => {
    const key = normalize(item);
    if (!key || seen.has(key)) return;
    seen.add(key);
    output.push(key);
  });
  return output;
}

function movieHasMoodVibe(movie, mood, moodAliasMap) {
  const aliases = new Set(moodAliases(mood, moodAliasMap));
  return (movie.vibes || []).some((vibe) => aliases.has(normalize(vibe)));
}

function complexityEvidence(movie) {
  const text = movieSearchText(movie);
  const director = normalize(movie.director);
  const auteurDirectors = [
    "charlie kaufman", "christopher nolan", "david lynch", "andrei tarkovsky", "stanley kubrick",
    "paul thomas anderson", "denis villeneuve", "yorgos lanthimos", "bong joon", "park chan",
    "edward yang", "glauber rocha", "eduardo coutinho", "michel gondry", "lynne ramsay"
  ];
  const headyTerms = [
    "tempo", "memoria", "memória", "sonho", "identidade", "obsessao", "obsessão", "politica",
    "política", "paranoia", "filosofia", "metafisica", "metafísica", "luto", "culpa",
    "fragmentado", "existencial", "surreal", "ambiguidade", "arquivo", "ditadura"
  ];
  const hasHeadyGenre = hasGenre(movie, ["Drama", "Documentario", "Ficcao cientifica"]);
  const hasMystery = hasGenre(movie, ["Misterio", "Suspense", "Crime"]);
  const hasPlainHorror = hasGenre(movie, ["Terror"]) && !hasGenre(movie, ["Drama", "Ficcao cientifica", "Documentario"]);
  const hasLightEscape = hasGenre(movie, ["Acao", "Comedia", "Familia", "Aventura", "Animacao"]);
  const hasAuteur = auteurDirectors.some((name) => director.includes(name));
  const hasHeadyText = hasAnyText(text, headyTerms);
  const hasHighCriticalSignal = ratingAverage(movie) >= 82 && Number(movie.tmdbVotes || 0) < 8000;
  const hasOlderOrGlobalSignal = Number(movie.year) < 2005 && movie.country !== "Estados Unidos";

  if (hasAuteur) return true;
  if (hasPlainHorror) return false;
  if (hasHeadyText) return true;
  if (hasHeadyGenre && !hasLightEscape) return true;
  if (hasMystery && !hasLightEscape && (hasHighCriticalSignal || hasOlderOrGlobalSignal)) return true;
  return false;
}

function escapistMismatch(movie) {
  const actionComedy = hasGenre(movie, ["Acao"]) && hasGenre(movie, ["Comedia"]);
  const familyAdventure = hasGenre(movie, ["Familia"]) && hasGenre(movie, ["Aventura", "Animacao"]);
  const lightFranchise = hasGenre(movie, ["Acao"]) && hasGenre(movie, ["Aventura"]) && ratingAverage(movie) < 78;
  return actionComedy || familyAdventure || lightFranchise;
}

function lightMoodMismatch(movie) {
  const text = movieSearchText(movie);
  const hasLightGenre = hasGenre(movie, ["Comedia", "Animacao", "Familia", "Aventura", "Musica"]);
  const isMostlyDrama = hasGenre(movie, ["Drama"]) && !hasLightGenre;
  const isBroodingRomance = hasGenre(movie, ["Romance"]) && hasAnyText(text, [
    "luto", "melancolia", "melancólico", "melancolico", "tragico", "trágico", "obsessao", "obsessão",
    "culpa", "trauma", "vinganca", "vingança", "sombrio", "gótico", "gotico", "depressao", "depressão"
  ]);
  const hasHeavyTerms = hasAnyText(text, [
    "luto", "melancolia", "melancólico", "melancolico", "tragedia", "tragédia", "obsessao", "obsessão",
    "culpa", "trauma", "violencia", "violência", "abuso", "sombrio", "morte", "depressao", "depressão"
  ]);
  const tooLongWithoutRelief = Number(movie.duration || 0) > 132 && !hasLightGenre;
  const hasMismatchVibe = (movie.vibes || []).some((vibe) => ["complexo", "intenso", "sensivel"].includes(vibe)) && !(movie.vibes || []).includes("leve");
  return isMostlyDrama || isBroodingRomance || hasHeavyTerms || tooLongWithoutRelief || hasMismatchVibe;
}

function comfortMoodMismatch(movie) {
  const text = movieSearchText(movie);
  const hasComfortGenre = hasGenre(movie, ["Comedia", "Animacao", "Familia", "Romance", "Musica", "Fantasia"]);
  const grimDrama = hasGenre(movie, ["Drama"]) && !hasComfortGenre;
  const hasHarshTerms = hasAnyText(text, [
    "serial killer", "assassinato", "vinganca", "vingança", "guerra", "massacre", "abuso",
    "trauma", "colapso", "hostil", "apostas", "ansiedade", "sequestro", "prisao", "prisão"
  ]);
  const isTooLong = Number(movie.duration || 0) > 155 && !(movie.vibes || []).includes("comfort");
  const conflictVibe = (movie.vibes || []).some((vibe) => ["intenso", "complexo"].includes(vibe)) && !(movie.vibes || []).includes("comfort");
  return grimDrama || hasHarshTerms || isTooLong || conflictVibe;
}

function moodMismatch(movie, state) {
  if (state.activeMode !== "mood") return false;

  const profile = state.moodProfiles[state.activeMood] || {};
  const preferredMatches = genreMatchCount(movie, profile.preferredGenres || []);
  const hardAvoidMatches = genreMatchCount(movie, profile.hardAvoidGenres || []);
  const hasVibe = movieHasMoodVibe(movie, state.activeMood, state.moodAliasMap);
  const hasConflictingVibe = (movie.vibes || []).some((vibe) => (profile.conflictingVibes || []).includes(vibe));

  if (state.activeMood === "complexo") {
    const hasLightGenre = hasGenre(movie, ["Acao", "Aventura", "Comedia", "Familia", "Animacao"]);
    const hasHeavyThinkingGenre = hasGenre(movie, ["Drama", "Documentario", "Ficcao cientifica", "Misterio", "Suspense"]);
    return hardAvoidMatches > 0
      || !complexityEvidence(movie)
      || escapistMismatch(movie)
      || (hasLightGenre && !hasHeavyThinkingGenre);
  }

  if (state.activeMood === "leve") {
    return hasConflictingVibe || hardAvoidMatches > 0 || lightMoodMismatch(movie) || (!preferredMatches && !hasVibe);
  }

  if (state.activeMood === "comfort") {
    return hasConflictingVibe || hardAvoidMatches > 0 || comfortMoodMismatch(movie) || (!preferredMatches && !hasVibe);
  }

  if (state.activeMood === "intenso") {
    const detectiveGenres = hasGenre(movie, ["Suspense", "Misterio", "Crime"]);
    const detectiveTerms = hasAnyText(movieSearchText(movie), [
      "whodunit", "detetive", "detective", "investigacao", "investigação",
      "suspeito", "suspeitos", "pistas", "serial", "noir", "investigador"
    ]);
    const tooActionHeavy = hasGenre(movie, ["Acao", "Aventura"]) && !detectiveGenres;
    return hasConflictingVibe || hardAvoidMatches > 0 || tooActionHeavy || (!preferredMatches && !hasVibe && !detectiveTerms);
  }

  if (state.activeMood === "terror") {
    const horrorGenres = hasGenre(movie, ["Terror", "Suspense", "Misterio"]);
    return hasConflictingVibe || hardAvoidMatches > 0 || (!horrorGenres && !hasVibe);
  }

  if (state.activeMood === "acao") {
    return hardAvoidMatches > 0 || (!preferredMatches && !hasVibe);
  }

  return false;
}

function profileAffinity(movie, state, favoriteDirectorsSet, favoriteTagsSet) {
  let affinity = movie.favoriteSignal ? 8 : 0;
  if (favoriteDirectorsSet.has(normalize(movie.director))) affinity += 22;
  (movie.tags || []).forEach((tag) => {
    if (favoriteTagsSet.has(normalize(tag))) affinity += 6;
  });
  (movie.vibes || []).forEach((vibe) => {
    if (favoriteTagsSet.has(normalize(vibe))) affinity += 4;
  });
  return affinity;
}

function freshnessPenalty(movie, history) {
  const index = history.indexOf(movie.key);
  if (index < 0) return 0;
  if (index < 12) return 380;
  if (index < 30) return 260;
  if (index < 70) return 170;
  if (index < 140) return 96;
  if (index < 260) return 46;
  if (index < 420) return 20;
  return 10;
}

function shuffleNoise(movie, state) {
  const key = `${state.sessionSeed}|${state.shuffleSalt}|${state.rerollOffset}|${movie.key}|${state.activeMode}|${state.activeMood}`;
  return (hashString(key) % 1000) / 1000;
}

function seededUnit(movie, state, scope = "pick") {
  const key = `${state.sessionSeed}|${state.shuffleSalt}|${state.rerollOffset}|${scope}|${movie.key}|${state.activeMode}|${state.activeMood}`;
  return ((hashString(key) % 9999) + 1) / 10000;
}

function moodScore(movie, state) {
  if (state.activeMode !== "mood") return 0;

  const profile = state.moodProfiles[state.activeMood] || {};
  const text = movieSearchText(movie);
  const hasVibe = movieHasMoodVibe(movie, state.activeMood, state.moodAliasMap);
  const preferredMatches = genreMatchCount(movie, profile.preferredGenres || []);
  const avoidMatches = genreMatchCount(movie, profile.avoidGenres || []);
  const hardAvoidMatches = genreMatchCount(movie, profile.hardAvoidGenres || []);
  const keywordMatches = (profile.keywords || []).filter((keyword) => text.includes(normalize(keyword))).length;
  let score = 0;

  if (moodMismatch(movie, state)) score -= 120;
  if (hasVibe) score += 44;
  score += Math.min(preferredMatches, 3) * 22;
  score += Math.min(keywordMatches, 3) * 8;
  score -= avoidMatches * 28;
  score -= hardAvoidMatches * 34;

  if (profile.requiredPositive && !hasVibe && !preferredMatches && !keywordMatches) score -= 46;
  if (profile.requiredComplexity && !complexityEvidence(movie)) score -= 92;
  if (state.activeMood === "complexo" && escapistMismatch(movie)) score -= 68;
  if (profile.longMoviePenalty && Number(movie.duration || 0) > profile.longMoviePenalty) score -= 14;
  if (profile.oldBonus && Number(movie.year) && Number(movie.year) < 2005) score += 14;
  if (state.activeMood === "comfort" && Number(movie.year) && Number(movie.year) >= 2020 && !(movie.vibes || []).includes("comfort")) score -= 10;
  if (state.activeMood === "leve" && (movie.vibes || []).includes("complexo")) score -= 18;
  if (state.activeMood === "comfort" && (movie.vibes || []).includes("complexo")) score -= 16;
  if (state.activeMood === "surpresa") {
    if (Number(movie.year) && Number(movie.year) < 2010) score += 10;
    if (ratingAverage(movie) >= 78) score += 8;
    if ((movie.providers || []).length) score += 4;
  }

  return score;
}

function moodCollectionScore(movie, state) {
  if (state.activeMode !== "mood") return 0;

  const profile = state.moodProfiles[state.activeMood] || {};
  const hasVibe = movieHasMoodVibe(movie, state.activeMood, state.moodAliasMap);
  const preferredMatches = genreMatchCount(movie, profile.preferredGenres || []);
  const keywordMatches = (profile.keywords || []).filter((keyword) => movieSearchText(movie).includes(normalize(keyword))).length;

  if (profile.requiredComplexity && !complexityEvidence(movie)) return -28;
  if (hasVibe) return 28;
  if (preferredMatches || keywordMatches) return 12;
  return -18;
}

function computeItems(movies, state) {
  const watchedSet = new Set(state.profileWatchedKeys || []);
  const favoriteDirectorsSet = new Set(state.profileFavoriteDirectors || []);
  const favoriteTagsSet = new Set(state.profileFavoriteTags || []);
  const history = state.recommendationHistory || [];
  const filters = state.filters || {};
  const profile = state.moodProfiles[state.activeMood] || {};

  const scored = [];

  for (const movie of movies) {
    if (filters.genre !== "qualquer" && !hasGenre(movie, [filters.genre])) continue;
    if (!durationMatches(filters.duration, Number(movie.duration || 0))) continue;
    if (filters.decade !== "qualquer" && movie.decade !== filters.decade) continue;
    if (filters.country !== "qualquer" && movie.country !== filters.country) continue;
    if (filters.provider !== "qualquer" && !(movie.providers || []).includes(filters.provider)) continue;
    if (filters.hideWatched && state.profileLoaded && (movie.seen || watchedSet.has(movie.key))) continue;
    if (state.activeMode === "mood" && moodMismatch(movie, state)) continue;

    let score = 0;
    score += moodScore(movie, state);
    score += moodCollectionScore(movie, state);
    if (state.activeMode === "roulette") score += Math.round(ratingAverage(movie) / 3);
    if (state.profileLoaded) score += profileAffinity(movie, state, favoriteDirectorsSet, favoriteTagsSet);
    if (hasGenre(movie, [filters.genre])) score += 15;
    if (Number(movie.duration || 0) && durationMatches(filters.duration, Number(movie.duration || 0)) && filters.duration !== "qualquer") score += 10;
    if (filters.decade === movie.decade) score += 10;
    if (filters.country === movie.country) score += 10;
    if (state.activeMode === "mood" && profile.surpriseMode) {
      score += seededUnit(movie, state, "surprise-score") * 38;
      if (ratingAverage(movie) > 88) score -= 12;
    }
    if (filters.hideWatched && state.profileLoaded && (movie.seen || watchedSet.has(movie.key))) score -= 100;
    score -= freshnessPenalty(movie, history);
    score += shuffleNoise(movie, state) * (profile.surpriseMode ? 132 : (state.activeMode === "roulette" ? 118 : 78));

    scored.push({
      key: movie.key,
      score
    });
  }

  const byKey = new Map();
  for (const item of scored) {
    const existing = byKey.get(item.key);
    if (!existing || item.score > existing.score) byKey.set(item.key, item);
  }

  return [...byKey.values()]
    .sort((a, b) => b.score - a.score)
    .map((item) => ({ key: item.key, score: item.score }));
}

self.onmessage = (event) => {
  const payload = event.data || {};
  if (payload.type !== "compute") return;

  try {
    const items = computeItems(payload.movies || [], payload.state || {});
    self.postMessage({
      requestId: payload.requestId,
      signature: payload.signature,
      items
    });
  } catch (error) {
    self.postMessage({
      requestId: payload.requestId,
      signature: payload.signature,
      error: error instanceof Error ? error.message : "falha no worker"
    });
  }
};
