/**
 * Basketball personality test scoring engine
 *
 * Supports:
 * - question-based personality scoring
 * - question-based dimension scoring
 * - dimension-profile matching against personalities
 * - hybrid final score
 */

/**
 * 把任意 score object 补全成完整 key 集合
 */
function createZeroScoreObject(keys) {
  const obj = {};
  keys.forEach((key) => {
    obj[key] = 0;
  });
  return obj;
}

/**
 * 从 personalities 里拿到所有 personality ids
 */
export function getAllPersonalityIds(personalities = []) {
  return personalities.map((p) => p.id);
}

/**
 * 从 dimensions object 里拿到所有 dimension keys
 */
export function getAllDimensionKeys(dimensions = {}) {
  return Object.keys(dimensions);
}

/**
 * 计算题目直接带来的 personality 分数
 *
 * answers: [selectedOption, selectedOption, ...]
 * personalities: personalities array
 */
export function calculatePersonalityScores(answers = [], personalities = []) {
  const ids = getAllPersonalityIds(personalities);
  const scores = createZeroScoreObject(ids);

  answers.forEach((answer) => {
    if (!answer || !answer.personalityWeights) return;

    Object.entries(answer.personalityWeights).forEach(([key, value]) => {
      if (!(key in scores)) {
        scores[key] = 0;
      }
      scores[key] += Number(value) || 0;
    });
  });

  return scores;
}

/**
 * 计算题目累计出来的 dimension 分数
 *
 * answers: [selectedOption, selectedOption, ...]
 * dimensions: dimensions object
 */
export function calculateDimensionScores(answers = [], dimensions = {}) {
  const dimensionKeys = getAllDimensionKeys(dimensions);
  const scores = createZeroScoreObject(dimensionKeys);

  answers.forEach((answer) => {
    if (!answer || !answer.dimensionWeights) return;

    Object.entries(answer.dimensionWeights).forEach(([key, value]) => {
      if (!(key in scores)) {
        scores[key] = 0;
      }
      scores[key] += Number(value) || 0;
    });
  });

  return scores;
}

/**
 * 把 score 转成百分比，适合前端显示
 *
 * 例如:
 * { attack: 5, defence: 5 } -> { attack: 50, defence: 50 }
 */
export function normalize(scores = {}) {
  const total = Object.values(scores).reduce(
    (sum, value) => sum + (Number(value) || 0),
    0
  );

  const result = {};

  Object.entries(scores).forEach(([key, value]) => {
    result[key] = total === 0 ? 0 : Math.round(((Number(value) || 0) / total) * 100);
  });

  return result;
}

/**
 * 把 raw dimension scores 缩放到 0~1
 *
 * 用当前用户最高维度作为 1
 * 适合拿去和 personality.profile 比较
 *
 * 例如:
 * { attack: 8, defence: 4 } -> { attack: 1, defence: 0.5 }
 */
export function normalizeDimensionScoresToUnit(scores = {}, dimensions = {}) {
  const dimensionKeys = getAllDimensionKeys(dimensions);

  let maxValue = 0;
  dimensionKeys.forEach((key) => {
    const value = Number(scores[key]) || 0;
    if (value > maxValue) maxValue = value;
  });

  const normalized = {};
  dimensionKeys.forEach((key) => {
    const value = Number(scores[key]) || 0;
    normalized[key] = maxValue === 0 ? 0 : value / maxValue;
  });

  return normalized;
}

/**
 * 计算用户画像和某个人格画像之间的“距离”
 * 距离越小，越像
 *
 * 默认所有未写到的维度都按 0 处理
 */
export function getProfileDistance(
  userProfile = {},
  personalityProfile = {},
  dimensions = {}
) {
  const dimensionKeys = getAllDimensionKeys(dimensions);

  let distance = 0;

  dimensionKeys.forEach((key) => {
    const userValue = Number(userProfile[key]) || 0;
    const personalityValue = Number(personalityProfile[key]) || 0;
    distance += Math.abs(userValue - personalityValue);
  });

  return distance;
}

/**
 * 根据 dimension profile 给所有人格算匹配分
 *
 * 返回:
 * {
 *   star: 83.2,
 *   fake: 71.5,
 *   mom: 42.8
 * }
 *
 * 分数越高越像，范围约 0~100
 */
export function calculateProfileMatchScores(
  userDimensionScores = {},
  personalities = [],
  dimensions = {}
) {
  const userProfile = normalizeDimensionScoresToUnit(userDimensionScores, dimensions);
  const dimensionKeys = getAllDimensionKeys(dimensions);
  const maxDistance = dimensionKeys.length || 1;

  const matchScores = {};

  personalities.forEach((personality) => {
    const personalityProfile = personality.profile || {};
    const distance = getProfileDistance(userProfile, personalityProfile, dimensions);

    const similarity = ((maxDistance - distance) / maxDistance) * 100;
    matchScores[personality.id] = Math.max(0, Number(similarity.toFixed(1)));
  });

  return matchScores;
}

/**
 * 把直接人格分归一化到 0~100
 *
 * 最高分人格记为 100，其他按比例缩放
 */
export function normalizePersonalityScoresTo100(personalityScores = {}) {
  const values = Object.values(personalityScores).map((v) => Number(v) || 0);
  const maxValue = values.length ? Math.max(...values) : 0;

  const normalized = {};

  Object.entries(personalityScores).forEach(([key, value]) => {
    normalized[key] = maxValue === 0 ? 0 : ((Number(value) || 0) / maxValue) * 100;
  });

  return normalized;
}

/**
 * 混合两种人格结果：
 * 1. 题目直接加出来的人格分
 * 2. dimension-profile 匹配分
 *
 * 默认 profile 比重更高一点
 */
export function calculateFinalPersonalityScores({
  personalityScores = {},
  profileMatchScores = {},
  personalityWeight = 0.4,
  profileWeight = 0.6,
}) {
  const finalScores = {};
  const normalizedDirect = normalizePersonalityScoresTo100(personalityScores);

  const allKeys = new Set([
    ...Object.keys(normalizedDirect),
    ...Object.keys(profileMatchScores),
  ]);

  allKeys.forEach((key) => {
    const directScore = Number(normalizedDirect[key]) || 0;
    const profileScore = Number(profileMatchScores[key]) || 0;

    finalScores[key] =
      directScore * personalityWeight + profileScore * profileWeight;
  });

  return finalScores;
}

/**
 * 找最高分人格 id
 */
export function getTopPersonalityId(scores = {}) {
  let topId = null;
  let topScore = -Infinity;

  Object.entries(scores).forEach(([key, value]) => {
    const score = Number(value) || 0;
    if (score > topScore) {
      topScore = score;
      topId = key;
    }
  });

  return topId;
}

/**
 * 返回按分数从高到低排序的人格结果
 *
 * 例如:
 * [
 *   { id: "star", score: 91.2 },
 *   { id: "fake", score: 78.4 }
 * ]
 */
export function sortScoresDescending(scores = {}) {
  return Object.entries(scores)
    .map(([id, score]) => ({
      id,
      score: Number(score) || 0,
    }))
    .sort((a, b) => b.score - a.score);
}

/**
 * 一次性跑完整套逻辑
 *
 * 返回：
 * {
 *   personalityScores,
 *   dimensionScores,
 *   dimensionPercentages,
 *   profileMatchScores,
 *   finalScores,
 *   sortedFinalScores,
 *   topId
 * }
 */
export function runFullScoring({
  answers = [],
  personalities = [],
  dimensions = {},
  personalityWeight = 0.4,
  profileWeight = 0.6,
}) {
  const personalityScores = calculatePersonalityScores(answers, personalities);
  const dimensionScores = calculateDimensionScores(answers, dimensions);
  const dimensionPercentages = normalize(dimensionScores);

  const profileMatchScores = calculateProfileMatchScores(
    dimensionScores,
    personalities,
    dimensions
  );

  const finalScores = calculateFinalPersonalityScores({
    personalityScores,
    profileMatchScores,
    personalityWeight,
    profileWeight,
  });

  const sortedFinalScores = sortScoresDescending(finalScores);
  const topId = getTopPersonalityId(finalScores);

  return {
    personalityScores,
    dimensionScores,
    dimensionPercentages,
    profileMatchScores,
    finalScores,
    sortedFinalScores,
    topId,
  };
}

/**
 * 可选：给结果页用的解释函数
 * 返回某个人格最接近用户的前几个维度
 */
export function getTopMatchingDimensionsForPersonality(
  userDimensionScores = {},
  personality = {},
  dimensions = {},
  topN = 5
) {
  const userProfile = normalizeDimensionScoresToUnit(userDimensionScores, dimensions);
  const profile = personality.profile || {};
  const dimensionKeys = getAllDimensionKeys(dimensions);

  const matches = dimensionKeys.map((key) => {
    const userValue = Number(userProfile[key]) || 0;
    const personalityValue = Number(profile[key]) || 0;
    const gap = Math.abs(userValue - personalityValue);
    const similarity = 1 - gap;

    return {
      key,
      userValue,
      personalityValue,
      similarity,
    };
  });

  return matches
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topN);
}