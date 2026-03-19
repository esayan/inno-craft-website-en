import React from "react";
import { founderProfile, positioning } from "../constants";
import styles from "../style";

const About = () => {
  return (
    <section id="about" className={`${styles.paddingY}`}>
      <div className="mb-10">
        <p className="font-poppins text-secondary font-medium text-[16px] uppercase tracking-wider mb-2">
          Who We Are
        </p>
        <h2 className={styles.heading2}>
          Founder & <span className="text-gradient">Leadership</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Founder card */}
        <div className="md:w-[380px] w-full p-8 rounded-[20px] bg-black-gradient border border-[#1c1c2e]">
          <h3 className="font-poppins font-bold text-white text-[28px]">
            {founderProfile.name}
          </h3>
          <p className="font-poppins text-secondary text-[16px] mt-1">
            {founderProfile.title}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {founderProfile.stats.map((s) => (
              <div key={s.label}>
                <p className="font-poppins font-bold text-white text-[28px] leading-[36px]">
                  {s.value}
                </p>
                <p className="font-poppins text-dimWhite text-[13px]">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#2c2c3e]">
            <p className="font-poppins text-dimWhite text-[14px]">{founderProfile.education}</p>
            <p className="font-poppins text-dimWhite text-[14px] mt-1">{founderProfile.certs}</p>
          </div>
        </div>

        {/* Right: Career + Positioning */}
        <div className="flex-1">
          {/* Positioning statement */}
          <div className="mb-8 p-6 rounded-[16px] bg-black-gradient-2 border border-secondary/20">
            {positioning.map((line, i) => (
              <p
                key={i}
                className={`font-poppins text-[18px] leading-[30px] ${
                  i === positioning.length - 1
                    ? "font-bold text-secondary mt-2"
                    : "text-dimWhite"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Career timeline */}
          <div className="space-y-6">
            {founderProfile.career.map((c, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0 mt-2" />
                  {i < founderProfile.career.length - 1 && (
                    <div className="w-[2px] flex-1 bg-secondary/20 mt-1" />
                  )}
                </div>
                <div className="pb-2">
                  <h4 className="font-poppins font-semibold text-white text-[18px]">
                    {c.company}
                  </h4>
                  <p className="font-poppins text-secondary text-[14px]">{c.role}</p>
                  <p className="font-poppins text-dimWhite text-[15px] mt-1 leading-[24px]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
