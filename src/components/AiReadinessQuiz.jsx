import React, { useState, useEffect } from "react";
import { quizQuestions, quizLevels } from "../constants";

const MAILTO = "mailto:esayan@inno-craft.com?subject=AI%20Readiness%20Assessment%20—%20Let's%20Talk";

/* ─── tiny helpers ─── */
const getLevel = (total) => quizLevels.find((l) => total >= l.range[0] && total <= l.range[1]) || quizLevels[0];

/* ─── confetti particles (pure CSS, no lib) ─── */
const Confetti = () => (
  <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        className="confetti-piece"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1.5}s`,
          backgroundColor: ["#00f6ff", "#ec4899", "#eab308", "#22c55e", "#6366f1", "#f97316"][i % 6],
        }}
      />
    ))}
  </div>
);

/* ═══════ INTRO SCREEN ═══════ */
const IntroScreen = ({ onStart }) => (
  <div className="flex flex-col items-center text-center max-w-[640px] mx-auto quiz-fade-in">
    <span className="text-[64px] mb-4">🎯</span>
    <h1 className="font-poppins font-semibold text-white text-[36px] sm:text-[44px] leading-tight mb-4">
      AI Readiness <span className="text-gradient">Assessment</span>
    </h1>
    <p className="font-poppins text-dimWhite text-[17px] leading-[28px] mb-3">
      Discover how prepared your organization is to harness the power of AI. This quick
      7-question assessment evaluates your maturity across the{" "}
      <span className="text-secondary">7P Agentic Enterprise Framework</span>.
    </p>
    <p className="font-poppins text-dimWhite/60 text-[14px] mb-8">
      Takes about 2 minutes. No sign-up required.
    </p>
    <button
      onClick={onStart}
      className="py-4 px-10 bg-blue-gradient font-poppins font-semibold text-[18px] text-primary rounded-[12px] hover:opacity-90 transition-opacity"
    >
      Start Assessment
    </button>
  </div>
);

/* ═══════ QUESTION SCREEN ═══════ */
const QuestionScreen = ({ question, index, total, selected, onSelect, onNext, onPrev }) => {
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="max-w-[720px] mx-auto w-full quiz-fade-in">
      {/* progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-poppins text-dimWhite text-[14px]">
            Question {index + 1} of {total}
          </span>
          <span className="font-poppins text-secondary text-[14px] font-medium">
            {question.category}
          </span>
        </div>
        <div className="w-full h-[6px] bg-[#1c1c2e] rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-gradient rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* question */}
      <h2 className="font-poppins font-semibold text-white text-[22px] sm:text-[26px] leading-[36px] mb-6">
        {question.question}
      </h2>

      {/* options */}
      <div className="flex flex-col gap-3 mb-8">
        {question.options.map((opt, oi) => {
          const isSelected = selected === oi;
          return (
            <button
              key={oi}
              onClick={() => onSelect(oi)}
              className={`w-full text-left p-4 sm:p-5 rounded-[14px] border transition-all duration-200 font-poppins text-[15px] sm:text-[16px] leading-[24px]
                ${
                  isSelected
                    ? "border-secondary bg-secondary/10 text-white shadow-[0_0_20px_rgba(0,246,255,0.12)]"
                    : "border-[#1c1c2e] bg-[#0a0a1a] text-dimWhite hover:border-secondary/40 hover:bg-secondary/5"
                }`}
            >
              <span className={`inline-flex items-center justify-center w-[28px] h-[28px] rounded-full mr-3 text-[13px] font-semibold shrink-0
                ${isSelected ? "bg-secondary text-primary" : "bg-[#1c1c2e] text-dimWhite"}`}>
                {String.fromCharCode(65 + oi)}
              </span>
              {opt.text}
            </button>
          );
        })}
      </div>

      {/* navigation */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className={`py-3 px-6 rounded-[10px] font-poppins font-medium text-[15px] transition-colors
            ${index === 0 ? "opacity-30 cursor-not-allowed text-dimWhite" : "border border-secondary/40 text-secondary hover:bg-secondary/10"}`}
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={selected === null}
          className={`py-3 px-8 rounded-[10px] font-poppins font-semibold text-[15px] transition-all
            ${selected !== null ? "bg-blue-gradient text-primary hover:opacity-90" : "bg-[#1c1c2e] text-dimWhite/40 cursor-not-allowed"}`}
        >
          {index === total - 1 ? "See Results" : "Next"}
        </button>
      </div>
    </div>
  );
};

/* ═══════ RESULT SCREEN ═══════ */
const ResultScreen = ({ answers, onRestart }) => {
  const scores = quizQuestions.map((q, i) => q.options[answers[i]].score);
  const total = scores.reduce((a, b) => a + b, 0);
  const level = getLevel(total);
  const pct = Math.round(((total - 7) / 21) * 100);

  const [animatedPct, setAnimatedPct] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPct(pct);
      if (level.id === "leader") setShowConfetti(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [pct, level.id]);

  useEffect(() => {
    if (showConfetti) {
      const t = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(t);
    }
  }, [showConfetti]);

  const shareText = `I scored ${total}/28 (${level.name}) on the AI Readiness Assessment by Inno-Craft! How AI-ready is your organization?`;

  const handleCopy = () => {
    const url = `${window.location.origin}/quiz?result=${level.id}`;
    navigator.clipboard.writeText(`${shareText}\n${url}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleLinkedIn = () => {
    const url = `${window.location.origin}/quiz`;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-[680px] mx-auto w-full quiz-fade-in">
      {showConfetti && <Confetti />}

      {/* level badge */}
      <div className="text-center mb-8">
        <span className="text-[56px]">{level.emoji}</span>
        <h2 className="font-poppins font-semibold text-white text-[32px] sm:text-[40px] leading-tight mt-2">
          You're an AI{" "}
          <span style={{ color: level.color }}>{level.name}</span>
        </h2>
        <p className="font-poppins text-dimWhite text-[17px] mt-3 max-w-[480px] mx-auto">
          {level.description}
        </p>
      </div>

      {/* score ring */}
      <div className="flex justify-center mb-8">
        <div className="relative w-[160px] h-[160px]">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r="52" stroke="#1c1c2e" strokeWidth="8" fill="none" />
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke={level.color}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - animatedPct / 100)}`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-poppins font-bold text-white text-[28px]">{total}</span>
            <span className="font-poppins text-dimWhite text-[13px]">/ 28</span>
          </div>
        </div>
      </div>

      {/* per-category breakdown */}
      <div className="mb-8 space-y-3">
        <h3 className="font-poppins font-semibold text-white text-[18px] mb-4">Score Breakdown</h3>
        {quizQuestions.map((q, i) => {
          const s = scores[i];
          return (
            <div key={q.id} className="flex items-center gap-3">
              <span className="font-poppins text-dimWhite text-[14px] w-[100px] shrink-0">{q.category}</span>
              <div className="flex-1 h-[8px] bg-[#1c1c2e] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${(s / 4) * 100}%`,
                    backgroundColor: level.color,
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              </div>
              <span className="font-poppins text-white text-[14px] font-medium w-[24px] text-right">{s}/4</span>
            </div>
          );
        })}
      </div>

      {/* recommendation */}
      <div className="p-5 rounded-[16px] border border-secondary/20 bg-secondary/5 mb-8">
        <h4 className="font-poppins font-semibold text-secondary text-[15px] mb-2">Our Recommendation</h4>
        <p className="font-poppins text-dimWhite text-[15px] leading-[24px]">{level.recommendation}</p>
      </div>

      {/* share + CTA */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          onClick={handleCopy}
          className="flex-1 py-3 px-6 rounded-[10px] border border-secondary/40 font-poppins font-medium text-[15px] text-secondary hover:bg-secondary/10 transition-colors text-center"
        >
          {copied ? "Copied!" : "Copy Result Link"}
        </button>
        <button
          onClick={handleLinkedIn}
          className="flex-1 py-3 px-6 rounded-[10px] border border-secondary/40 font-poppins font-medium text-[15px] text-secondary hover:bg-secondary/10 transition-colors text-center"
        >
          Share on LinkedIn
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={MAILTO}
          className="flex-1 py-4 px-6 bg-blue-gradient font-poppins font-semibold text-[16px] text-primary rounded-[10px] hover:opacity-90 transition-opacity text-center"
        >
          Talk to Inno-Craft
        </a>
        <button
          onClick={onRestart}
          className="flex-1 py-4 px-6 rounded-[10px] border border-[#1c1c2e] font-poppins font-medium text-[15px] text-dimWhite hover:border-secondary/30 transition-colors text-center"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

/* ═══════ MAIN QUIZ COMPONENT ═══════ */
const AiReadinessQuiz = () => {
  const [phase, setPhase] = useState("intro"); // intro | quiz | result
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));

  // Check URL for shared result
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resultParam = params.get("result");
    if (resultParam && quizLevels.some((l) => l.id === resultParam)) {
      setPhase("intro");
    }
  }, []);

  const handleSelect = (optionIndex) => {
    const next = [...answers];
    next[currentQ] = optionIndex;
    setAnswers(next);
  };

  const handleNext = () => {
    if (answers[currentQ] === null) return;
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setPhase("result");
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleRestart = () => {
    setPhase("intro");
    setCurrentQ(0);
    setAnswers(Array(quizQuestions.length).fill(null));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      {phase === "intro" && <IntroScreen onStart={() => setPhase("quiz")} />}
      {phase === "quiz" && (
        <QuestionScreen
          question={quizQuestions[currentQ]}
          index={currentQ}
          total={quizQuestions.length}
          selected={answers[currentQ]}
          onSelect={handleSelect}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {phase === "result" && <ResultScreen answers={answers} onRestart={handleRestart} />}
    </section>
  );
};

export default AiReadinessQuiz;
