import React, { useState } from "react";
import { frameworkPillars } from "../constants";
import styles from "../style";

const pillarColors = [
  "border-cyan-400 bg-cyan-400/10",
  "border-blue-400 bg-blue-400/10",
  "border-indigo-400 bg-indigo-400/10",
  "border-purple-400 bg-purple-400/10",
  "border-pink-400 bg-pink-400/10",
  "border-orange-400 bg-orange-400/10",
  "border-amber-400 bg-amber-400/10",
];

const headerColors = [
  "bg-cyan-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-amber-500",
];

const Framework = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="framework" className={`${styles.paddingY}`}>
      <div className="mb-10">
        <p className="font-poppins text-secondary font-medium text-[16px] uppercase tracking-wider mb-2">
          Our Differentiator
        </p>
        <h2 className={styles.heading2}>
          The 7P Agentic <br className="sm:block hidden" />
          <span className="text-gradient">Enterprise Framework</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[650px] mt-4`}>
          A holistic, scalable, and auditable operating model for enterprise AI transformation.
          56 topic titles across 7 dimensions — aligned with EU AI Act, ISO 42001, NIST AI RMF,
          and OECD AI Principles.
        </p>
      </div>

      {/* 7P Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {frameworkPillars.map((pillar, index) => (
          <div
            key={pillar.id}
            className={`rounded-[12px] border cursor-pointer transition-all duration-300 ${
              pillarColors[index]
            } ${active === index ? "scale-105 shadow-lg shadow-secondary/10" : "hover:scale-[1.02]"}`}
            onClick={() => setActive(active === index ? null : index)}
          >
            <div className={`${headerColors[index]} rounded-t-[12px] py-3 px-4`}>
              <h4 className="font-poppins font-semibold text-white text-[16px] text-center">
                {pillar.name}
              </h4>
            </div>
            <div className="p-4">
              {pillar.items.map((item, i) => (
                <p
                  key={i}
                  className="font-poppins text-dimWhite text-[13px] leading-[22px] text-center"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom badges */}
      <div className="flex flex-wrap gap-3 mt-8 justify-center">
        {["EU AI Act", "ISO/IEC 42001", "NIST AI RMF", "OECD AI Principles"].map((badge) => (
          <span
            key={badge}
            className="px-4 py-2 rounded-full border border-secondary/40 text-secondary font-poppins text-[14px]"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Framework;
