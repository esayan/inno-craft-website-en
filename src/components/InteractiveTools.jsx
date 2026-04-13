import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

const tools = [
  {
    emoji: "🎯",
    title: "AI Readiness Quiz",
    desc: "Discover how prepared your organization is for AI transformation. Get a personalized maturity score across 7 key dimensions.",
    link: "/quiz",
    cta: "Take the Quiz",
    tags: ["2 min", "7 Questions", "Free"],
  },
  {
    emoji: "🏗️",
    title: "Build Your AI Stack",
    desc: "Compose your ideal AI architecture by combining infrastructure, data, AI, and application components. Discover synergies and get a stack score.",
    link: "/stack-builder",
    cta: "Build Your Stack",
    tags: ["Interactive", "Drag & Drop", "Free"],
  },
];

const InteractiveTools = () => (
  <section id="tools" className={`${styles.paddingY}`}>
    {/* heading */}
    <div className="text-center mb-10">
      <h2 className={`${styles.heading2} text-center`}>
        Interactive <span className="text-gradient">AI Tools</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[560px] mx-auto mt-4 text-center`}>
        Explore our free interactive tools to assess your AI maturity and architect your ideal AI stack.
      </p>
    </div>

    {/* cards */}
    <div className="grid md:grid-cols-2 gap-6">
      {tools.map((tool) => (
        <Link
          key={tool.link}
          to={tool.link}
          className="group p-8 rounded-[20px] bg-black-gradient border border-[#1c1c2e] hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,246,255,0.06)]"
        >
          <span className="text-[48px] block mb-4">{tool.emoji}</span>
          <h3 className="font-poppins font-semibold text-white text-[24px] mb-2 group-hover:text-secondary transition-colors">
            {tool.title}
          </h3>
          <p className="font-poppins text-dimWhite text-[15px] leading-[24px] mb-5">
            {tool.desc}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[12px] font-poppins font-medium text-secondary border border-secondary/30 bg-secondary/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center font-poppins font-semibold text-secondary text-[15px] group-hover:gap-3 gap-2 transition-all">
            {tool.cta} <span className="text-[18px]">&rarr;</span>
          </span>
        </Link>
      ))}
    </div>
  </section>
);

export default InteractiveTools;
