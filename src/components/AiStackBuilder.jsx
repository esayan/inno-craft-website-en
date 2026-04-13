import React, { useState, useCallback } from "react";
import { stackLayers, stackComponents, stackSynergies, stackWarnings } from "../constants";

const MAILTO = "mailto:esayan@inno-craft.com?subject=AI%20Stack%20Architecture%20—%20Let's%20Build%20Together";

/* ─── scoring helpers ─── */
const calcScore = (canvas) => {
  const placed = Object.values(canvas).flat();
  if (placed.length === 0) return { score: 0, synergies: [], warnings: [] };

  const ids = placed.map((c) => c.id);

  // base: 15 per unique layer filled
  const filledLayers = new Set(placed.map((c) => c.layer));
  let base = filledLayers.size * 15; // up to 60

  // synergy bonuses
  const synergies = [];
  for (const s of stackSynergies) {
    if (s.combo.every((id) => ids.includes(id))) {
      synergies.push(s);
    }
  }
  const synergyBonus = synergies.reduce((a, s) => a + s.bonus, 0);

  // warnings
  const warnings = [];
  for (const w of stackWarnings) {
    if (w.combo.every((id) => ids.includes(id))) {
      warnings.push(w);
    }
  }

  const score = Math.min(100, base + synergyBonus);
  return { score, synergies, warnings };
};

/* ═══════ PALETTE CARD ═══════ */
const PaletteCard = ({ comp, isUsed, onAdd }) => (
  <button
    onClick={() => !isUsed && onAdd(comp)}
    disabled={isUsed}
    className={`w-full flex items-center gap-3 p-3 rounded-[10px] border text-left transition-all duration-200
      ${
        isUsed
          ? "border-[#1c1c2e]/50 opacity-35 cursor-not-allowed"
          : "border-[#1c1c2e] hover:border-secondary/40 hover:bg-secondary/5 cursor-pointer active:scale-[0.97]"
      }`}
  >
    <span className="text-[22px]">{comp.icon}</span>
    <div className="min-w-0">
      <div className="font-poppins font-medium text-white text-[14px] truncate">{comp.name}</div>
      <div className="font-poppins text-dimWhite/60 text-[12px] truncate">{comp.desc}</div>
    </div>
    {!isUsed && <span className="ml-auto text-secondary/50 text-[18px] shrink-0">+</span>}
  </button>
);

/* ═══════ CANVAS LAYER ═══════ */
const CanvasLayer = ({ layer, items, onRemove, onDrop, dragOver, setDragOver }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(layer.id);
  };
  const handleDragLeave = () => setDragOver(null);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(null);
    try {
      const comp = JSON.parse(e.dataTransfer.getData("text/plain"));
      if (comp.layer === layer.id) onDrop(comp);
    } catch {}
  };

  const isOver = dragOver === layer.id;

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`rounded-[14px] border-2 border-dashed p-4 min-h-[80px] transition-all duration-200
        ${isOver ? "border-secondary/60 bg-secondary/5" : "border-[#1c1c2e] bg-[#060610]"}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[18px]">{layer.icon}</span>
        <span className="font-poppins font-semibold text-[14px]" style={{ color: layer.color }}>
          {layer.name}
        </span>
      </div>

      {items.length === 0 ? (
        <p className="font-poppins text-dimWhite/30 text-[13px] text-center py-2">
          Click or drag components here
        </p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {items.map((comp) => (
            <span
              key={comp.id}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-[13px] font-poppins font-medium text-white border border-secondary/20 bg-secondary/5 group cursor-pointer hover:bg-red-500/10 hover:border-red-400/30 transition-colors"
              onClick={() => onRemove(comp.id)}
              title="Click to remove"
            >
              {comp.icon} {comp.name}
              <span className="text-dimWhite/40 group-hover:text-red-400 ml-0.5">x</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════ SCORE PANEL ═══════ */
const ScorePanel = ({ score, synergies, warnings }) => {
  const getColor = () => {
    if (score >= 80) return "#00f6ff";
    if (score >= 50) return "#22c55e";
    if (score >= 25) return "#eab308";
    return "#f97316";
  };

  return (
    <div className="rounded-[16px] border border-[#1c1c2e] bg-[#0a0a1a] p-5">
      {/* score circle */}
      <div className="flex justify-center mb-4">
        <div className="relative w-[100px] h-[100px]">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r="52" stroke="#1c1c2e" strokeWidth="8" fill="none" />
            <circle
              cx="60" cy="60" r="52"
              stroke={getColor()}
              strokeWidth="8" fill="none" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - score / 100)}`}
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-poppins font-bold text-white text-[22px]">{score}</span>
            <span className="font-poppins text-dimWhite/60 text-[11px]">/ 100</span>
          </div>
        </div>
      </div>

      <h3 className="font-poppins font-semibold text-white text-[16px] text-center mb-4">Stack Score</h3>

      {/* synergies */}
      {synergies.length > 0 && (
        <div className="mb-4">
          <h4 className="font-poppins font-medium text-secondary text-[13px] mb-2">Synergies Found</h4>
          {synergies.map((s, i) => (
            <div key={i} className="flex items-start gap-2 mb-1.5">
              <span className="text-green-400 text-[12px] mt-0.5">+{s.bonus}</span>
              <span className="font-poppins text-dimWhite text-[12px] leading-[18px]">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* warnings */}
      {warnings.length > 0 && (
        <div className="mb-4">
          <h4 className="font-poppins font-medium text-orange-400 text-[13px] mb-2">Considerations</h4>
          {warnings.map((w, i) => (
            <div key={i} className="flex items-start gap-2 mb-1.5">
              <span className="text-orange-400 text-[12px] mt-0.5">!</span>
              <span className="font-poppins text-dimWhite text-[12px] leading-[18px]">{w.message}</span>
            </div>
          ))}
        </div>
      )}

      {score === 0 && (
        <p className="font-poppins text-dimWhite/40 text-[13px] text-center">
          Add components to build your AI stack
        </p>
      )}
    </div>
  );
};

/* ═══════ CELEBRATION ═══════ */
const Celebration = () => (
  <div className="text-center py-4 quiz-fade-in">
    <span className="text-[40px]">🎉</span>
    <p className="font-poppins font-semibold text-secondary text-[15px] mt-2">
      Perfect Stack! You've built an enterprise-grade AI architecture.
    </p>
  </div>
);

/* ═══════ MAIN COMPONENT ═══════ */
const AiStackBuilder = () => {
  const [canvas, setCanvas] = useState({
    infrastructure: [],
    data: [],
    "ai-ml": [],
    application: [],
  });
  const [dragOver, setDragOver] = useState(null);
  const [activeTab, setActiveTab] = useState("infrastructure");

  const usedIds = new Set(Object.values(canvas).flat().map((c) => c.id));

  const addToCanvas = useCallback((comp) => {
    setCanvas((prev) => {
      if (prev[comp.layer].some((c) => c.id === comp.id)) return prev;
      return { ...prev, [comp.layer]: [...prev[comp.layer], comp] };
    });
  }, []);

  const removeFromCanvas = useCallback((compId) => {
    setCanvas((prev) => {
      const updated = {};
      for (const [layer, items] of Object.entries(prev)) {
        updated[layer] = items.filter((c) => c.id !== compId);
      }
      return updated;
    });
  }, []);

  const handleReset = () => {
    setCanvas({ infrastructure: [], data: [], "ai-ml": [], application: [] });
  };

  const handleDragStart = (e, comp) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(comp));
  };

  const { score, synergies, warnings } = calcScore(canvas);

  const paletteByLayer = stackLayers.map((layer) => ({
    ...layer,
    components: stackComponents.filter((c) => c.layer === layer.id),
  }));

  return (
    <section className="py-12 px-4">
      {/* header */}
      <div className="text-center max-w-[640px] mx-auto mb-10 quiz-fade-in">
        <span className="text-[48px]">🏗️</span>
        <h1 className="font-poppins font-semibold text-white text-[32px] sm:text-[40px] leading-tight mt-2 mb-3">
          Build Your <span className="text-gradient">AI Stack</span>
        </h1>
        <p className="font-poppins text-dimWhite text-[16px] leading-[26px]">
          Compose your ideal AI solution architecture. Add components to each layer and discover
          synergies between them.
        </p>
      </div>

      {/* main grid: palette | canvas | score */}
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[260px_1fr_240px] gap-6">
        {/* ── PALETTE (left) ── */}
        <div className="rounded-[16px] border border-[#1c1c2e] bg-[#0a0a1a] p-4 h-fit lg:sticky lg:top-6">
          <h3 className="font-poppins font-semibold text-white text-[15px] mb-3">Components</h3>

          {/* layer tabs */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {stackLayers.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveTab(l.id)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-poppins font-medium transition-colors
                  ${activeTab === l.id ? "bg-secondary/15 text-secondary border border-secondary/30" : "text-dimWhite/60 border border-[#1c1c2e] hover:border-secondary/20"}`}
              >
                {l.icon} {l.name}
              </button>
            ))}
          </div>

          {/* component list for active tab */}
          <div className="flex flex-col gap-2">
            {paletteByLayer
              .find((l) => l.id === activeTab)
              ?.components.map((comp) => (
                <div
                  key={comp.id}
                  draggable={!usedIds.has(comp.id)}
                  onDragStart={(e) => handleDragStart(e, comp)}
                >
                  <PaletteCard comp={comp} isUsed={usedIds.has(comp.id)} onAdd={addToCanvas} />
                </div>
              ))}
          </div>
        </div>

        {/* ── CANVAS (center) ── */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-poppins font-semibold text-white text-[16px]">Architecture Canvas</h3>
            <button
              onClick={handleReset}
              className="font-poppins text-dimWhite/50 text-[13px] hover:text-red-400 transition-colors"
            >
              Reset All
            </button>
          </div>

          {/* layers top → bottom: Application → AI/ML → Data → Infrastructure */}
          {[...stackLayers].reverse().map((layer) => (
            <CanvasLayer
              key={layer.id}
              layer={layer}
              items={canvas[layer.id]}
              onRemove={removeFromCanvas}
              onDrop={addToCanvas}
              dragOver={dragOver}
              setDragOver={setDragOver}
            />
          ))}

          {score >= 100 && <Celebration />}

          {/* CTA */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={MAILTO}
              className="flex-1 py-4 px-6 bg-blue-gradient font-poppins font-semibold text-[15px] text-primary rounded-[10px] hover:opacity-90 transition-opacity text-center"
            >
              Let Inno-Craft Architect This Stack
            </a>
          </div>
        </div>

        {/* ── SCORE PANEL (right) ── */}
        <div className="lg:sticky lg:top-6 h-fit">
          <ScorePanel score={score} synergies={synergies} warnings={warnings} />
        </div>
      </div>
    </section>
  );
};

export default AiStackBuilder;
