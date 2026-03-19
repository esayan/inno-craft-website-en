import React from "react";
import { impactStats, clientEngagements } from "../constants";
import styles from "../style";

const Impact = () => {
  return (
    <section id="impact" className={`${styles.paddingY}`}>
      <div className="mb-10">
        <p className="font-poppins text-secondary font-medium text-[16px] uppercase tracking-wider mb-2">
          Proven Results
        </p>
        <h2 className={styles.heading2}>
          Representative <span className="text-gradient">Business Impact</span>
        </h2>
      </div>

      {/* Impact metric cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {impactStats.map((stat) => (
          <div
            key={stat.id}
            className="p-6 rounded-[16px] border border-[#1c1c2e] bg-black-gradient-2 text-center"
          >
            <h3 className="font-poppins font-bold text-[42px] text-gradient leading-[52px]">
              {stat.value}
            </h3>
            <p className="font-poppins font-semibold text-white text-[16px] mt-2">
              {stat.label}
            </p>
            <p className="font-poppins text-dimWhite text-[14px] mt-1">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Client Engagements */}
      <div className="mb-6">
        <h3 className="font-poppins font-semibold text-white text-[24px]">
          Client Engagement Examples
        </h3>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clientEngagements.map((ce) => (
          <div
            key={ce.id}
            className="p-6 rounded-[16px] feature-card border border-[#1c1c2e]"
          >
            <p className="font-poppins text-secondary font-medium text-[14px] mb-1">
              {ce.sector}
            </p>
            <h4 className="font-poppins font-semibold text-white text-[18px] mb-3">
              {ce.type}
            </h4>
            <p className="font-poppins text-dimWhite text-[15px] leading-[24px]">
              {ce.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
