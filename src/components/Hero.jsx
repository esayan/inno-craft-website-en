import React, { useState, useEffect } from "react";
import styles from "../style";
import { heroRotatingLines } from "../constants";
import heroRight from "../assets/hero-right.png";

const MAILTO =
  "mailto:esayan@inno-craft.com?subject=Inquiry%20from%20Inno-Craft%20website&body=Hi%20Engin,%0D%0A%0D%0AI%20visited%20inno-craft.com%20and%20would%20like%20to%20discuss%20...%0D%0A%0D%0ABest,%0D%0A";

const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const line = heroRotatingLines[lineIndex];
    let timeout;

    if (typing) {
      if (displayed.length < line.length) {
        timeout = setTimeout(() => setDisplayed(line.slice(0, displayed.length + 1)), 45);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
      } else {
        setLineIndex((prev) => (prev + 1) % heroRotatingLines.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, lineIndex]);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Tagline */}
        <p className="font-poppins text-secondary font-medium text-[18px] tracking-wide mb-4 uppercase">
          For the Agentic Enterprise Transformation
        </p>

        {/* Headline */}
        <h1 className="font-poppins font-semibold ss:text-[64px] text-[44px] text-white ss:leading-[80px] leading-[56px]">
          From AI Ambition <br className="sm:block hidden" />
          to <span className="text-gradient">Enterprise Execution</span>
        </h1>

        {/* Typing animation */}
        <div className="mt-6 min-h-[48px]">
          <p className="font-poppins font-medium ss:text-[24px] text-[18px] text-white">
            We{" "}
            <span className="text-secondary">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </p>
        </div>

        {/* Sub description */}
        <p className={`${styles.paragraph} max-w-[560px] mt-6`}>
          AI-Native digital transformation consulting. We help enterprises move from AI ambition
          to scalable, governed, enterprise-grade execution — powered by our proprietary
          7P Agentic Enterprise Framework. Specializing in Gen-AI, Agentic AI agents, Salesforce CRM,
          and staffing services.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap gap-4 mt-8">
          <a
            href={MAILTO}
            className="py-4 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-opacity"
          >
            Book a Discovery Call
          </a>
          <a
            href="#services"
            className="py-4 px-8 border border-secondary font-poppins font-medium text-[18px] text-secondary rounded-[10px] hover:bg-secondary hover:text-primary transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Right: Visual */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={heroRight}
          alt="AI and human collaboration in enterprise setting"
          className="w-[100%] h-auto rounded-[20px] relative z-[5] shadow-2xl"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
