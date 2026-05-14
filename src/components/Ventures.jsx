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

      {/* Featured Release — BloodEclipse */}
      <div className="mt-10 p-6 sm:p-8 rounded-[20px] bg-black-gradient border border-[#1c1c2e]">
        <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
          {/* Trailer column (9:16 YouTube Short) */}
          <div className="w-full max-w-[260px] mx-auto md:mx-0">
            <div
              className="relative overflow-hidden rounded-[14px] border border-[#2a2a3e] bg-black"
              style={{ aspectRatio: "9 / 16" }}
            >
              <iframe
                src="https://www.youtube.com/embed/xUEpO_SX8Zo"
                title="Dungeon Adventure: BloodEclipse — trailer"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Info column */}
          <div>
            <p className="font-poppins text-secondary font-medium text-[13px] uppercase tracking-wider mb-2">
              Featured Release
            </p>
            <h3 className="font-poppins font-semibold text-white text-[26px] leading-[1.2] mb-3">
              Dungeon Adventure: BloodEclipse
            </h3>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[26px] mb-4">
              Our first published mobile title from Inno-Craft Labs — a dark,
              atmospheric dungeon-crawler adventure. Explore shadowed corridors,
              face the creatures of the eclipse, and survive the depths. Designed
              and built end-to-end on Unity, available worldwide on iOS and
              Android.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mobile Game", "Unity", "iOS", "Android", "Action-Adventure"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[12px] font-poppins font-medium text-secondary border border-secondary/30 bg-secondary/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/tr/app/dungeon-adventure-bloodeclipse/id6762070600"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-[10px] bg-black border border-white/20 hover:border-white/40 transition-colors"
                aria-label="Download Dungeon Adventure BloodEclipse on the App Store"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden="true">
                  <path d="M17.5 12.5c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1-1 0-2.4-1.1-3.9-1.1-2 0-3.9 1.2-4.9 3-2.1 3.7-.5 9.1 1.5 12.1 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 3.9-1 1.8 0 2.3 1 3.9 1 1.6 0 2.6-1.5 3.6-3 1.1-1.7 1.6-3.4 1.6-3.5-.1 0-3.1-1.2-3.1-4.6zM14.6 4.4c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.3.1 2.7-.7 3.6-1.7z" />
                </svg>
                <span className="text-left leading-none">
                  <span className="block font-poppins text-[10px] text-white/70 tracking-wider uppercase">Download on the</span>
                  <span className="block font-poppins font-semibold text-[16px] text-white">App Store</span>
                </span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.innocraft.bloodeclipse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-[10px] bg-black border border-white/20 hover:border-white/40 transition-colors"
                aria-label="Get Dungeon Adventure BloodEclipse on Google Play"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.6 1.3C3.2 1.5 3 2 3 2.7v18.6c0 .7.2 1.2.6 1.4l10.5-10.7L3.6 1.3z" fill="#00D4FF" />
                  <path d="M17.6 8.8 14.1 12l3.5 3.2 3.8-2.2c1.1-.6 1.1-1.6 0-2.2l-3.8-2z" fill="#FFC107" />
                  <path d="M14.1 12 3.6 22.7c.5.3 1.1.2 1.8-.2l13-7.3L14.1 12z" fill="#FF5252" />
                  <path d="M14.1 12 18.4 8.8 5.4 1.5C4.7 1.1 4.1 1 3.6 1.3L14.1 12z" fill="#00C853" />
                </svg>
                <span className="text-left leading-none">
                  <span className="block font-poppins text-[10px] text-white/70 tracking-wider uppercase">Get it on</span>
                  <span className="block font-poppins font-semibold text-[16px] text-white">Google Play</span>
                </span>
              </a>

              <a
                href="https://youtube.com/shorts/xUEpO_SX8Zo?feature=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-secondary/10 border border-secondary/40 hover:bg-secondary/20 transition-colors"
                aria-label="Watch the Dungeon Adventure BloodEclipse trailer on YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-secondary" aria-hidden="true">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
                <span className="font-poppins font-medium text-[14px] text-secondary">Watch trailer</span>
              </a>
            </div>
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
