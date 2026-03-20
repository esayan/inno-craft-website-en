import React from "react";
import styles from "../style";

const Ventures = () => {
  return (
    <section id="ventures" className={`${styles.paddingY}`}>
      <div className="mb-10">
        <p className="font-poppins text-secondary font-medium text-[16px] uppercase tracking-wider mb-2">
          Inno-Craft Labs
        </p>
        <h2 className={styles.heading2}>
          Beyond consulting —{" "}
          <span className="text-gradient">we build products.</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[640px] mt-4`}>
          Inno-Craft develops and supports AI-powered software, digital
          products, and interactive applications for business and innovation use
          cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Game Development Card */}
        <div className="p-8 rounded-[20px] bg-black-gradient border border-[#1c1c2e] hover:border-secondary/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[32px]" role="img" aria-label="Game controller">
              🎮
            </span>
            <h3 className="font-poppins font-semibold text-white text-[24px]">
              Mobile Games
            </h3>
          </div>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[26px] mb-4">
            We design and develop engaging mobile gaming experiences. Our games
            combine creative storytelling with modern technology — built with the
            same engineering rigor we bring to enterprise projects.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {["Mobile Games", "Game Design", "Interactive Apps", "Cross-Platform"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[13px] font-poppins font-medium text-secondary border border-secondary/30 bg-secondary/5"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Digital Products Card */}
        <div className="p-8 rounded-[20px] bg-black-gradient border border-[#1c1c2e] hover:border-secondary/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[32px]" role="img" aria-label="Rocket">
              🚀
            </span>
            <h3 className="font-poppins font-semibold text-white text-[24px]">
              Digital Products & Innovation
            </h3>
          </div>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[26px] mb-4">
            From concept to launch — we build AI-powered digital products,
            interactive applications, and innovation prototypes that push the
            boundaries of what technology can deliver.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {["AI Products", "Prototyping", "Digital Innovation", "SaaS"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[13px] font-poppins font-medium text-secondary border border-secondary/30 bg-secondary/5"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <p className="font-poppins text-dimWhite text-[14px] mt-8 italic">
        Inno-Craft Labs is our product innovation arm — separate from our
        enterprise consulting practice, but powered by the same team and
        technology expertise.
      </p>
    </section>
  );
};

export default Ventures;
