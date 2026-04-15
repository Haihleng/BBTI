import { questions } from "./src/data/questions.js";
import * as scoring from "./src/utils/scoring.js";
import { personalities } from "./src/data/personalities.js";
import { dimensions } from "./src/data/dimensions.js";

// ===== 随机选答案（直接返回 option）=====
function randomAnswers() {
  return questions.map((q) => {
    const options = q.options;
    const idx = Math.floor(Math.random() * options.length);
    return options[idx]; // ⭐关键：直接返回 option
  });
}

// ===== 单次运行 =====
function runOneTrial() {
  const answers = randomAnswers();

  const dimensionScores = scoring.calculateDimensionScores(
    answers,
    dimensions
  );

  const profileMatchScores = scoring.calculateProfileMatchScores(
    dimensionScores,
    personalities,
    dimensions
  );

  return scoring.getTopPersonalityId(profileMatchScores);
}

// ===== 多轮模拟 =====
const N = 10000;
const counts = new Map();

for (let i = 0; i < N; i++) {
  const label = runOneTrial();
  counts.set(label, (counts.get(label) || 0) + 1);
}

const summary = [...counts.entries()]
  .map(([personality, count]) => ({
    personality,
    count,
    probability: ((count / N) * 100).toFixed(2) + "%",
  }))
  .sort((a, b) => b.count - a.count);

console.table(summary);

