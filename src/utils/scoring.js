/**
 * Basketball personality test scoring engine
 *
 * Updated for:
 * - scenario-based questions
 * - positive / negative dimension weights
 * - sparse personality profiles
 * - cleaner result-page dimension display
 */

/**
 * 创建全 0 的 score object
 */
function createZeroScoreObject(keys) {
  const obj = {};
  keys.forEach((key) => {
    obj[key] = 0;
  });
  return obj;
}

/**
 * personalities -> ids
 */
export function getAllPersonalityIds(personalities = []) {
  return personalities.map((p) => p.id);
}

/**
 * dimensions object -> keys
 */
export function getAllDimensionKeys(dimensions = {}) {
  return Object.keys(dimensions);
}

/**
 * 题目直接累计出来的人格分
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
 * 题目累计出来的 dimension 分数
 * 支持负权重
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
 * 给结果页展示用：
 * 把 raw dimension score 映射成 0~100
 *
 * 逻辑：
 * - 先找当前用户所有维度里的最小值 / 最大值
 * - 做 min-max normalization
 * - 避免负数导致“总占比”失真
 *
 * 适合前端进度条展示
 */
export function normalize(scores = {}) {
  const values = Object.values(scores).map((v) => Number(v) || 0);

  if (!values.length) return {};

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const result = {};

  Object.entries(scores).forEach(([key, value]) => {
    const num = Number(value) || 0;

    if (maxValue === minValue) {
      result[key] = 0;
    } else {
      result[key] = Math.round(((num - minValue) / (maxValue - minValue)) * 100);
    }
  });

  return result;
}

/**
 * 给人格匹配用：
 * 把 raw dimension scores 转成 0~1
 *
 * 注意：
 * - 负数不适合直接拿去和 personality.profile 比
 * - 这里先把负数 clamp 到 0
 * - 再按当前用户最高正向维度缩放
 */
export function normalizeDimensionScoresToUnit(scores = {}, dimensions = {}) {
  const dimensionKeys = getAllDimensionKeys(dimensions);

  const values = dimensionKeys.map((key) => Number(scores[key]) || 0);

  const min = Math.min(...values);
  const max = Math.max(...values);

  const normalized = {};

  dimensionKeys.forEach((key) => {
    const value = Number(scores[key]) || 0;

    if (max === min) {
      normalized[key] = 0.5; // 全一样 → 中性
    } else {
      normalized[key] = (value - min) / (max - min);
    }
  });

  return normalized;
}

/**
 * 只拿某个人格 profile 里真正定义过的维度来比较
 *
 * 例如 personality.profile = { attack: 1, confidence: 0.8 }
 * 那就只比较这两个维度
 */
export function getRelevantProfileKeys(personalityProfile = {}, dimensions = {}) {
  const validDimensionKeys = new Set(getAllDimensionKeys(dimensions));

  return Object.keys(personalityProfile).filter((key) => validDimensionKeys.has(key));
}

/**
 * 计算用户画像和某个人格画像之间的距离
 * 距离越小，越像
 *
 * 这里只比较人格自己定义过的维度
 */
export function getProfileDistance(
  userProfile = {},
  personalityProfile = {},
  dimensions = {}
) {
  const relevantKeys = getRelevantProfileKeys(personalityProfile, dimensions);

  if (!relevantKeys.length) {
    return {
      distance: Infinity,
      comparedKeyCount: 0,
    };
  }

  let distance = 0;

  relevantKeys.forEach((key) => {
    const userValue = Number(userProfile[key]) || 0;
    const personalityValue = Number(personalityProfile[key]) || 0;
    distance += Math.abs(userValue - personalityValue);
  });

  return {
    distance,
    comparedKeyCount: relevantKeys.length,
  };
}

/**
 * 根据 dimension profile 给所有人格算匹配分
 *
 * 分数范围约 0~100
 * 分数越高越像
 */
export function calculateProfileMatchScores(
  userDimensionScores = {},
  personalities = [],
  dimensions = {}
) {
  const userProfile = normalizeDimensionScoresToUnit(userDimensionScores, dimensions);
  const matchScores = {};

  personalities.forEach((personality) => {
    const personalityProfile = personality.profile || {};
    const { distance, comparedKeyCount } = getProfileDistance(
      userProfile,
      personalityProfile,
      dimensions
    );

    if (comparedKeyCount === 0 || distance === Infinity) {
      matchScores[personality.id] = 0;
      return;
    }

    // 最大距离 = comparedKeyCount * 1
    // 因为每个维度都在 0~1 范围内，单维最大差值是 1
    const maxDistance = comparedKeyCount;
    const similarity = ((maxDistance - distance) / maxDistance) * 100;

    matchScores[personality.id] = Math.max(0, Number(similarity.toFixed(1)));
  });

  return matchScores;
}

/**
 * 把直接人格分归一化到 0~100
 *
 * 注意：
 * 如果所有人格 direct score 都是 0，则全部返回 0
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
 * 默认 profile 比重更高
 */
export function calculateFinalPersonalityScores({
  personalityScores = {},
  profileMatchScores = {},
  personalityWeight = 0.6,
  profileWeight = 0.4,
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
 * 分数从高到低排序
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
 * 一次性跑完整套 scoring
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

  // 这个是给前端结果页进度条展示用
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
 * 给结果页解释用：
 * 找某个人格和用户最接近的几个维度
 *
 * 这里只比较 personality.profile 里真正写过的维度
 */
export function getTopMatchingDimensionsForPersonality(
  userDimensionScores = {},
  personality = {},
  dimensions = {},
  topN = 5
) {
  const userProfile = normalizeDimensionScoresToUnit(userDimensionScores, dimensions);
  const profile = personality.profile || {};
  const relevantKeys = getRelevantProfileKeys(profile, dimensions);

  const matches = relevantKeys.map((key) => {
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