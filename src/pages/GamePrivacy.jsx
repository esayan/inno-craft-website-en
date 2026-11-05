import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { Navbar, Footer } from "../components";

const GAMES = [
  {
    name: "Dungeon Adventure BloodEclipse",
    tag: "Roguelike RPG · 12+ · iOS and Android",
    summary:
      "Shows ads through Unity Ads and offers in-app purchases handled by Apple and Google. Those third parties may collect device identifiers and ad interaction data under their own policies; we collect nothing ourselves.",
    privacy: "/bloodeclipse/privacy/",
    terms: "/bloodeclipse/terms/",
  },
  {
    name: "Kampus: Istanbul",
    tag: "Visual novel · 12+ · iOS and Android",
    summary:
      "Runs fully offline with no ads, no analytics and no in-app purchases. Your player name, choices and saves stay in local files on your own device and are never transmitted.",
    privacy: "/kampus/privacy/",
    terms: "/kampus/terms/",
  },
  {
    name: "HopBop: Dance & Learn English",
    tag: "Kids education · 4+ · iOS and Android",
    summary:
      "Built for children, with no ads and no personal data collection. Camera images are processed on the device in real time to count movements and are never recorded or sent anywhere.",
    privacy: "/hopbop/privacy/",
    terms: "/hopbop/terms/",
  },
];

const GamePrivacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <main className="sm:py-16 py-6">
            <Link
              to="/"
              className="font-poppins text-secondary text-[14px] hover:underline mb-6 inline-block"
            >
              &larr; Back to Home
            </Link>

            <h1 className="font-poppins font-semibold text-white text-[42px] leading-[52px] mb-3">
              Game Privacy Policies
            </h1>
            <p className="font-poppins text-dimWhite text-[16px] mb-10">
              Inno-Craft LLC · Last updated: November 6, 2026
            </p>

            <div className="max-w-[800px]">
              <h2 className="font-poppins font-semibold text-white text-[22px] leading-[32px] mb-3">
                Each game has its own policy
              </h2>
              <p className={styles.paragraph}>
                Inno-Craft LLC publishes three games, and they differ in what
                they do and do not collect. Rather than one combined document,
                each game has its own privacy policy and terms of use, linked
                below. Open the policy for the game you are playing.
              </p>
              <p className={`${styles.paragraph} mt-3`}>
                None of our games requires an account, and none of them sends
                personal data to servers operated by Inno-Craft LLC. We operate
                no backend that stores player data.
              </p>

              <h2 className="font-poppins font-semibold text-white text-[22px] leading-[32px] mt-10 mb-4">
                Our games
              </h2>

              <div className="space-y-4">
                {GAMES.map((game) => (
                  <div
                    key={game.name}
                    className="p-6 rounded-[14px] border border-[#2c2c3e] bg-[rgba(255,255,255,0.02)]"
                  >
                    <h3 className="font-poppins font-semibold text-white text-[19px] leading-[26px] mb-1">
                      {game.name}
                    </h3>
                    <p className="font-poppins text-dimWhite text-[13px] leading-[20px] mb-3">
                      {game.tag}
                    </p>
                    <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[25px] mb-4">
                      {game.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <PolicyLink href={game.privacy}>Privacy Policy</PolicyLink>
                      <PolicyLink href={game.terms}>Terms of Use</PolicyLink>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-poppins font-semibold text-white text-[22px] leading-[32px] mt-10 mb-3">
                Contact us
              </h2>
              <p className={styles.paragraph}>
                If you have any questions about any of these policies, please
                contact us:
              </p>
              <div className="mt-3 space-y-1">
                <p className="font-poppins text-white text-[16px] font-medium">
                  Inno-Craft LLC
                </p>
                <p className={styles.paragraph}>
                  Email:{" "}
                  <a
                    href="mailto:info@inno-craft.com"
                    className="text-secondary hover:underline"
                  >
                    info@inno-craft.com
                  </a>
                </p>
                <p className={styles.paragraph}>
                  Website:{" "}
                  <a
                    href="https://www.inno-craft.com"
                    className="text-secondary hover:underline"
                  >
                    www.inno-craft.com
                  </a>
                </p>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

const PolicyLink = ({ href, children }) => (
  <a
    href={href}
    className="inline-block font-poppins font-medium text-[14px] text-secondary px-3.5 py-2 rounded-[8px] border border-secondary/35 bg-secondary/[0.06] cursor-pointer hover:bg-secondary/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-colors duration-200"
  >
    {children}
  </a>
);

export default GamePrivacy;
