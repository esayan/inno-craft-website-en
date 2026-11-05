import React from "react";
import styles from "../style";
import bloodeclipseIcon from "../assets/games/bloodeclipse.png";
import kampusIcon from "../assets/games/kampus.png";
import hopbopIcon from "../assets/games/hopbop.png";

const GAMES = [
  {
    slug: "bloodeclipse",
    name: "Dungeon Adventure BloodEclipse",
    icon: bloodeclipseIcon,
    meta: "Games · 12+ · iOS & Android",
    blurb:
      "A tactical roguelike RPG where no two runs are the same. Explore shadowed corridors, face the creatures of the eclipse, and survive the depths. Built end-to-end on Unity and playable offline.",
    tags: ["Unity", "Roguelike RPG", "Offline play"],
    appStore: "https://apps.apple.com/app/id6762070600",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.innocraft.bloodeclipse",
    trailer: "https://youtube.com/shorts/xUEpO_SX8Zo?feature=share",
    privacy: "/bloodeclipse/privacy/",
    terms: "/bloodeclipse/terms/",
  },
  {
    slug: "kampus",
    name: "Kampus: Istanbul",
    icon: kampusIcon,
    meta: "Games · 12+ · iOS & Android",
    blurb:
      "A university semester in Istanbul: twelve weeks, ten classmates, and a story that bends to every choice you make. A fully offline visual novel with no ads and no purchases.",
    tags: ["Visual novel", "Story-driven", "No ads"],
    appStore: "https://apps.apple.com/app/id6817522678",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.innocraft.kampus",
    privacy: "/kampus/privacy/",
    terms: "/kampus/terms/",
  },
  {
    slug: "hopbop",
    name: "HopBop: Dance & Learn English",
    icon: hopbopIcon,
    meta: "Education · 4+ · iOS & Android",
    blurb:
      "An active English game for ages 2–8. Children dance, jump and stretch with four lovable friends while the camera counts every move — processed on the device and never recorded. No ads.",
    tags: ["Kids & education", "On-device vision", "No ads"],
    appStore: "https://apps.apple.com/app/id6817522363",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.innocraft.hopbop",
    privacy: "/hopbop/privacy/",
    terms: "/hopbop/terms/",
  },
];

const CAPABILITIES = [
  {
    title: "Mobile Games",
    Icon: GamepadIcon,
    body: "We design and develop engaging mobile gaming experiences. Our games combine creative storytelling with modern technology — built with the same engineering rigor we bring to enterprise projects.",
    tags: ["Mobile Games", "Game Design", "Interactive Apps", "Cross-Platform"],
  },
  {
    title: "Digital Products & Innovation",
    Icon: RocketIcon,
    body: "From concept to launch — we build AI-powered digital products, interactive applications, and innovation prototypes that push the boundaries of what technology can deliver.",
    tags: ["AI Products", "Prototyping", "Digital Innovation", "SaaS"],
  },
];

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
        {CAPABILITIES.map(({ title, Icon, body, tags }) => (
          <div
            key={title}
            className="p-8 rounded-[20px] bg-black-gradient border border-[#1c1c2e] hover:border-secondary/30 transition-colors duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-[12px] bg-secondary/10 border border-secondary/25 text-secondary shrink-0">
                <Icon />
              </span>
              <h3 className="font-poppins font-semibold text-white text-[24px]">
                {title}
              </h3>
            </div>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[26px] mb-4">
              {body}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Published titles */}
      <div className="mt-16">
        <div className="mb-8">
          <p className="font-poppins text-secondary font-medium text-[13px] uppercase tracking-wider mb-2">
            Published Titles
          </p>
          <h3 className="font-poppins font-semibold text-white text-[28px] leading-[1.25]">
            Three apps, live worldwide on iOS and Android
          </h3>
          <p className={`${styles.paragraph} max-w-[640px] mt-3 !text-[16px] !leading-[26px]`}>
            Every title below is designed, built, and published end-to-end by
            Inno-Craft LLC — from the first prototype to store review.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game) => (
            <article
              key={game.slug}
              className="flex flex-col p-6 rounded-[20px] bg-black-gradient border border-[#1c1c2e] hover:border-secondary/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={game.icon}
                  alt={`${game.name} app icon`}
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-[14px] border border-white/10 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">
                    {game.name}
                  </h4>
                  <p className="font-poppins text-dimWhite text-[13px] leading-[20px] mt-1">
                    {game.meta}
                  </p>
                </div>
              </div>

              <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[25px] mb-4">
                {game.blurb}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {game.tags.map((tag) => (
                  <Tag key={tag} small>
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Store buttons pinned to the card foot so every card lines up */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-3">
                  <StoreLink
                    href={game.appStore}
                    label={`Download ${game.name} on the App Store`}
                    top="Download on the"
                    bottom="App Store"
                    icon={<AppleIcon />}
                  />
                  <StoreLink
                    href={game.googlePlay}
                    label={`Get ${game.name} on Google Play`}
                    top="Get it on"
                    bottom="Google Play"
                    icon={<GooglePlayIcon />}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4 pt-4 border-t border-[#2c2c3e]">
                  <SmallLink href={game.privacy}>Privacy</SmallLink>
                  <Dot />
                  <SmallLink href={game.terms}>Terms</SmallLink>
                  {game.trailer && (
                    <>
                      <Dot />
                      <SmallLink href={game.trailer} external>
                        Trailer
                      </SmallLink>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Trailer */}
      <div className="mt-10 p-6 sm:p-8 rounded-[20px] bg-black-gradient border border-[#1c1c2e]">
        <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="w-full max-w-[220px] mx-auto md:mx-0">
            <div
              className="relative overflow-hidden rounded-[14px] border border-[#2a2a3e] bg-black"
              style={{ aspectRatio: "9 / 16" }}
            >
              <iframe
                src="https://www.youtube.com/embed/xUEpO_SX8Zo"
                title="Dungeon Adventure BloodEclipse — trailer"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div>
            <p className="font-poppins text-secondary font-medium text-[13px] uppercase tracking-wider mb-2">
              Watch
            </p>
            <h3 className="font-poppins font-semibold text-white text-[24px] leading-[1.25] mb-3">
              Dungeon Adventure BloodEclipse — trailer
            </h3>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[26px]">
              Our first published title: a dark, atmospheric dungeon crawler
              designed and built on Unity, now joined by Kampus: Istanbul and
              HopBop in the Inno-Craft Labs catalogue.
            </p>
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

/* ---------------------------------------------------------------- building blocks */

const Tag = ({ children, small = false }) => (
  <span
    className={`${
      small ? "px-3 py-1 text-[12px]" : "px-3 py-1 text-[13px]"
    } rounded-full font-poppins font-medium text-secondary border border-secondary/30 bg-secondary/5`}
  >
    {children}
  </span>
);

const StoreLink = ({ href, label, top, bottom, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2.5 px-4 py-2.5 min-h-[44px] rounded-[10px] bg-black border border-white/20 cursor-pointer hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-colors duration-200"
  >
    {icon}
    <span className="text-left leading-none">
      <span className="block font-poppins text-[9px] text-white/70 tracking-wider uppercase">
        {top}
      </span>
      <span className="block font-poppins font-semibold text-[14px] text-white">
        {bottom}
      </span>
    </span>
  </a>
);

const SmallLink = ({ href, children, external = false }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="font-poppins text-[13px] text-dimWhite cursor-pointer hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-[3px] transition-colors duration-200"
  >
    {children}
  </a>
);

const Dot = () => (
  <span aria-hidden="true" className="text-dimWhite/50 text-[13px]">
    ·
  </span>
);

/* ---------------------------------------------------------------- icons */

function GamepadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="11" x2="10" y2="11" />
      <line x1="8" y1="9" x2="8" y2="13" />
      <line x1="15" y1="12" x2="15.01" y2="12" />
      <line x1="18" y1="10" x2="18.01" y2="10" />
      <rect x="2" y="6" width="20" height="12" rx="5" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white shrink-0" aria-hidden="true">
      <path d="M17.5 12.5c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1-1 0-2.4-1.1-3.9-1.1-2 0-3.9 1.2-4.9 3-2.1 3.7-.5 9.1 1.5 12.1 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 3.9-1 1.8 0 2.3 1 3.9 1 1.6 0 2.6-1.5 3.6-3 1.1-1.7 1.6-3.4 1.6-3.5-.1 0-3.1-1.2-3.1-4.6zM14.6 4.4c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.3.1 2.7-.7 3.6-1.7z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
      <path d="M3.6 1.3C3.2 1.5 3 2 3 2.7v18.6c0 .7.2 1.2.6 1.4l10.5-10.7L3.6 1.3z" fill="#00D4FF" />
      <path d="M17.6 8.8 14.1 12l3.5 3.2 3.8-2.2c1.1-.6 1.1-1.6 0-2.2l-3.8-2z" fill="#FFC107" />
      <path d="M14.1 12 3.6 22.7c.5.3 1.1.2 1.8-.2l13-7.3L14.1 12z" fill="#FF5252" />
      <path d="M14.1 12 18.4 8.8 5.4 1.5C4.7 1.1 4.1 1 3.6 1.3L14.1 12z" fill="#00C853" />
    </svg>
  );
}

export default Ventures;
