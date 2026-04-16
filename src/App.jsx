import { useMemo, useState } from "react";

import { personalities } from "./data/personalities";
import { dimensions } from "./data/dimensions";
import { questions } from "./data/questions";
import { categoryStyles } from "./data/categoryStyles";
import { teammateMatches } from "./data/teammateMatches";

import {
  calculatePersonalityScores,
  calculateDimensionScores,
  calculateProfileMatchScores,
  calculateFinalPersonalityScores,
  getTopPersonalityId,
  normalize,
} from "./utils/scoring";

const featuredDimensionKeys = [
  "attack",
  "playmaking",
  "composure",
  "confidence",
  "willingness",
];

function PageShell({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f7f9fc 0%, #eef3ff 52%, #f7f8fb 100%)",
        padding: "32px 20px 56px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: "#101828",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>{children}</div>
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.84)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(96, 130, 255, 0.10)",
        boxShadow: "0 14px 40px rgba(16, 24, 40, 0.06)",
        borderRadius: 28,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Pill({ children, active = false, color = "#5a86ff", bg = "#eef4ff", style }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 18px",
        borderRadius: 999,
        border: active ? `1.5px solid ${color}` : `1.5px solid ${color}66`,
        background: active ? color : bg,
        color: active ? "#fff" : color,
        fontSize: 15,
        fontWeight: 700,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function ScoreBar({ label, value, color }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          marginBottom: 10,
          fontSize: 15,
          fontWeight: 600,
          color: "#1f2937",
        }}
      >
        <span>{label}</span>
        <span style={{ color: "#344054", fontWeight: 700 }}>{value}%</span>
      </div>

      <div
        style={{
          width: "100%",
          height: 14,
          background: "#e7eaf2",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${color}bb, ${color})`,
            borderRadius: 999,
            boxShadow: `0 6px 18px ${color}44`,
            transition: "width 300ms ease",
          }}
        />
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div style={{ marginBottom: 22, textAlign: center ? "center" : "left" }}>
      <h2
        style={{
          margin: 0,
          fontSize: 26,
          lineHeight: 1.2,
          fontWeight: 800,
          color: "#0f172a",
        }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          style={{
            margin: "8px 0 0",
            color: "#667085",
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("zh");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const q = questions[current];
  const selected = answers[current];
  const currentCategoryStyle = categoryStyles[q?.category] || {
    color: "#5a86ff",
    bg: "#eef4ff",
  };

  const personalityScores = useMemo(
    () => calculatePersonalityScores(answers, personalities),
    [answers]
  );

  const dimensionScores = useMemo(
    () => calculateDimensionScores(answers, dimensions),
    [answers]
  );

  const dimensionPercent = useMemo(() => normalize(dimensionScores), [dimensionScores]);

  const profileMatchScores = useMemo(
    () => calculateProfileMatchScores(dimensionScores, personalities, dimensions),
    [dimensionScores]
  );

  const finalScores = useMemo(
    () =>
      calculateFinalPersonalityScores({
        personalityScores,
        profileMatchScores,
        personalityWeight: 0.4,
        profileWeight: 0.6,
      }),
    [personalityScores, profileMatchScores]
  );

  function handleSelect(option) {
    const next = [...answers];
    next[current] = option;
    setAnswers(next);
  }

  function handleNext() {
    if (!selected) return;

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  }

  function handlePrev() {
    if (current > 0) setCurrent(current - 1);
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  }

  if (showResult) {
    const topId = getTopPersonalityId(finalScores);
    const result = personalities.find((p) => p.id === topId);
    const teammate = teammateMatches[topId];

    const theme = categoryStyles[result?.category] || {
      color: "#5a86ff",
      bg: "#eef4ff",
    };

    const displayName = result?.name?.[lang] || result?.name?.zh || result?.name?.en;
    const displayOneLiner =
      result?.oneLiner?.[lang] || result?.oneLiner?.zh || result?.oneLiner?.en;
    const displayDesc =
      result?.desc?.[lang] || result?.desc?.zh || result?.desc?.en || displayOneLiner;
    const keywords = result?.keywords?.[lang] || [];
    const resultColor = theme.color;
    const resultBg = theme.bg;

    const featuredDimensions = featuredDimensionKeys
      .filter((key) => dimensions[key])
      .map((key) => ({
        key,
        label: dimensions[key][lang],
        value: dimensionPercent[key] || 0,
      }));

    return (
      <PageShell>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: 12,
            paddingBottom: 8,
            marginBottom: 16,
          }}
        >
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              border: `1px solid ${resultColor}33`,
              background: "#fff",
              color: resultColor,
              borderRadius: 999,
              padding: "12px 18px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(16,24,40,0.04)",
            }}
          >
            {lang === "en" ? "切换到中文" : "Switch to English"}
          </button>

          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: resultColor,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              UNCCWBA Personality Result
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 48,
                lineHeight: 1.1,
                fontWeight: 900,
                color: "#101828",
                marginBottom: 16,
              }}
            >
              {lang === "en" ? "Your Basketball Identity" : "你的篮球人格结果"}
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.9,
                color: "#667085",
              }}
            >
              {displayDesc}
            </p>
          </div>
        </div>

        <Card
          style={{
            padding: "38px 32px",
            background: resultBg,
            border: `2px solid ${resultColor}`,
            boxShadow: `0 18px 40px ${resultColor}20`,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -40,
              top: -40,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: `${resultColor}14`,
            }}
          />

          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <Pill active color={resultColor} bg={resultBg} style={{ marginBottom: 18, minWidth: 92 }}>
              {result?.name?.en?.toUpperCase?.() || "RESULT"}
            </Pill>

           <div
  style={{
    fontSize: 64,
    lineHeight: 1.02,
    fontWeight: 900,
    color: resultColor,
    letterSpacing: "0.04em",
    marginBottom: 12,
  }}
>
  {result?.name?.en}
</div>

<div
  style={{
    fontSize: 28,
    fontWeight: 800,
    color: "#1f2937",
    marginBottom: 6,
  }}
>
  {result?.name?.zh}
</div>

<div
  style={{
    fontSize: 14,
    color: "#667085",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  }}
>
  {lang === "en" ? "Player Archetype" : "球场人格类型"}
</div>

            <p
              style={{
                maxWidth: 760,
                margin: "20px auto 0",
                fontSize: 18,
                lineHeight: 1.9,
                color: "#1f2937",
                fontWeight: 600,
              }}
            >
              {displayOneLiner}
            </p>

            {Array.isArray(keywords) && keywords.length > 0 ? (
              <div
                style={{
                  marginTop: 26,
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                {keywords.map((tag) => (
                  <Pill key={tag} color={resultColor} bg="#ffffffcc">
                    {tag}
                  </Pill>
                ))}
              </div>
            ) : null}
          </div>
        </Card>

{teammate && (
  <Card style={{ padding: 32, marginTop: 24, textAlign: "center" }}>
    <div
      style={{
        fontSize: 18,
        fontWeight: 800,
        color: "#344054",
        marginBottom: 16,
      }}
    >
      {lang === "en"
        ? "Your UNCCWB personality is:"
        : "你的 UNCCWB 人格是："}
    </div>

    <div
      style={{
        fontSize: 40,
        fontWeight: 900,
        marginBottom: 20,
        color: resultColor,
      }}
    >
      {teammate.name}
    </div>

    <div
      style={{
        width: 140,
        height: 140,
        margin: "0 auto 20px",
        borderRadius: "50%",
        overflow: "hidden",
        background: "#d8dbe2",
      }}
    >
      {teammate.image ? (
        <img
          src={teammate.image}
          alt={teammate.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : null}
    </div>

    <p
      style={{
        fontSize: 18,
        lineHeight: 1.8,
        color: "#1f2937",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      {teammate.description}
    </p>
  </Card>
)}

        <Card
          style={{
            padding: 28,
            marginTop: 24,
            maxWidth: 980,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <SectionTitle
            center
            title={lang === "en" ? "Quick Summary" : "你的核心总结"}
            subtitle={
              lang === "en"
                ? "A more detailed read of how you influence the game."
                : "用更完整的描述概括你如何影响比赛。"
            }
          />

          <div
            style={{
              display: "grid",
              gap: 14,
              maxWidth: 860,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                padding: 24,
                borderRadius: 28,
                background: resultBg,
                border: `1px solid ${resultColor}33`,
              }}
            >
              <div style={{ fontSize: 13, color: resultColor, fontWeight: 800, marginBottom: 8 }}>
                {lang === "en" ? "PRIMARY TYPE" : "主类型"}
              </div>
              <div style={{ fontSize: 24, fontWeight: 900 }}>{displayName}</div>
            </div>

            <div
              style={{
                padding: 24,
                borderRadius: 28,
                background: resultBg,
                border: `1px solid ${resultColor}33`,
              }}
            >
              <div style={{ fontSize: 13, color: resultColor, fontWeight: 800, marginBottom: 8 }}>
                {lang === "en" ? "DETAILED DESCRIPTION" : "详细描述"}
              </div>
              <div style={{ fontSize: 17, lineHeight: 1.95, color: "#344054" }}>
                {displayDesc}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <button
                onClick={handleRestart}
                style={{
                  border: "none",
                  background: resultColor,
                  color: "#fff",
                  borderRadius: 16,
                  padding: "14px 18px",
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: `0 10px 22px ${resultColor}33`,
                }}
              >
                {lang === "en" ? "Try Again" : "重新测试"}
              </button>

              <button
                onClick={() => setShowResult(false)}
                style={{
                  border: `1px solid ${resultColor}33`,
                  background: "#fff",
                  color: "#344054",
                  borderRadius: 16,
                  padding: "14px 18px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {lang === "en" ? "Review Answers" : "回看题目"}
              </button>
            </div>
          </div>
        </Card>

        <Card style={{ padding: 28, marginTop: 24 }}>
          <SectionTitle
            title={lang === "en" ? "Your Style Profile" : "你的风格画像"}
            subtitle={
              lang === "en"
                ? "A small set of key dimensions that best describe your game."
                : "只展示最关键的几个维度，让风格画像更清晰。"
            }
          />

          <div style={{ marginTop: 12 }}>
            {featuredDimensions.map((item) => (
              <ScoreBar
                key={item.key}
                label={item.label}
                value={item.value}
                color={resultColor}
              />
            ))}
          </div>
        </Card>
      </PageShell>
    );
  }

  const progress = Math.round(((current + 1) / questions.length) * 100);

  return (
    <PageShell>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <Card
          style={{
            padding: "48px 40px 36px",
            background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
            border: `1.5px solid ${currentCategoryStyle.color}33`,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: 12,
              paddingBottom: 8,
              marginBottom: 12,
            }}
          >
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                border: `1px solid ${currentCategoryStyle.color}33`,
                background: "#fff",
                color: currentCategoryStyle.color,
                borderRadius: 999,
                padding: "12px 18px",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(16,24,40,0.04)",
              }}
            >
              {lang === "en" ? "切换到中文" : "Switch to English"}
            </button>

            <div
              style={{
                maxWidth: 760,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: currentCategoryStyle.color,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Basketball Personality Test
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: 56,
                  lineHeight: 1.08,
                  fontWeight: 900,
                  color: "#101828",
                  marginBottom: 20,
                }}
              >
                {lang === "en" ? "Find Your Court Identity" : "找到你的球场人格"}
              </h1>

              <p
                style={{
                  margin: 0,
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: "#667085",
                  maxWidth: 720,
                  marginInline: "auto",
                }}
              >
                {lang === "en"
                  ? "Answer a few real-game scenario questions. We'll map your basketball personality and decision style on court."
                  : "回答一些更贴近真实比赛场景的问题，我们会给出你的人格类型与球场决策风格。"}
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                fontSize: 14,
                fontWeight: 700,
                color: "#475467",
              }}
            >
              <span>
                {lang === "en"
                  ? `Question ${current + 1} of ${questions.length}`
                  : `第 ${current + 1} 题 / 共 ${questions.length} 题`}
              </span>
              <span>{progress}%</span>
            </div>

            <div
              style={{
                height: 12,
                background: "#e9eef8",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${currentCategoryStyle.color}99 0%, ${currentCategoryStyle.color} 100%)`,
                  transition: "width 240ms ease",
                }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              padding: 24,
              borderRadius: 24,
              background: "#fff",
              border: `1px solid ${currentCategoryStyle.color}20`,
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: currentCategoryStyle.bg,
                color: currentCategoryStyle.color,
                fontWeight: 700,
                fontSize: 13,
                marginBottom: 18,
              }}
            >
              {lang === "en" ? "Current Question" : "当前题目"}
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: 28,
                lineHeight: 1.5,
                fontWeight: 850,
                color: "#111827",
              }}
            >
              {q.prompt[lang]}
            </h2>

            <div style={{ marginTop: 22, display: "grid", gap: 14 }}>
              {q.options.map((option) => {
                const active = selected?.key === option.key;

                return (
                  <button
                    key={option.key}
                    onClick={() => handleSelect(option)}
                    style={{
                      width: "100%",
                      padding: "18px 18px",
                      borderRadius: 20,
                      border: active
                        ? `2px solid ${currentCategoryStyle.color}`
                        : "1.5px solid #d8e2f4",
                      background: active
                        ? `linear-gradient(180deg, ${currentCategoryStyle.bg} 0%, #ffffff 100%)`
                        : "#ffffff",
                      color: "#111827",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 160ms ease",
                      boxShadow: active
                        ? `0 10px 26px ${currentCategoryStyle.color}22`
                        : "0 2px 10px rgba(16,24,40,0.03)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                      }}
                    >
                      <div
                        style={{
                          minWidth: 34,
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: active ? currentCategoryStyle.color : "#f2f4f7",
                          color: active ? "#fff" : "#667085",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: 14,
                          marginTop: 1,
                        }}
                      >
                        {option.key}
                      </div>
                      <div
                        style={{
                          fontSize: 17,
                          lineHeight: 1.75,
                          fontWeight: active ? 700 : 500,
                        }}
                      >
                        {option.text[lang]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              marginTop: 22,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handlePrev}
              disabled={current === 0}
              style={{
                border: "1px solid #d0d5dd",
                background: current === 0 ? "#f5f6f7" : "#fff",
                color: current === 0 ? "#98a2b3" : "#344054",
                borderRadius: 16,
                padding: "14px 18px",
                fontWeight: 800,
                cursor: current === 0 ? "not-allowed" : "pointer",
              }}
            >
              {lang === "en" ? "Previous" : "上一题"}
            </button>

            <button
              onClick={handleNext}
              disabled={!selected}
              style={{
                border: "none",
                background: !selected ? "#cfd7e6" : currentCategoryStyle.color,
                color: "#fff",
                borderRadius: 16,
                padding: "14px 22px",
                fontWeight: 800,
                cursor: !selected ? "not-allowed" : "pointer",
                boxShadow: !selected ? "none" : `0 14px 26px ${currentCategoryStyle.color}44`,
              }}
            >
              {current === questions.length - 1
                ? lang === "en"
                  ? "See Result"
                  : "查看结果"
                : lang === "en"
                ? "Next"
                : "下一题"}
            </button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
