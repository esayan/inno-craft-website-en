import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { Navbar, Footer } from "../components";

const GAMES = [
  {
    name: "Dungeon Adventure BloodEclipse",
    platforms: "iOS (App Store), Android (Google Play)",
    ads: "Unity Ads",
    purchases: "Yes — Apple / Google",
    servers: "None",
  },
  {
    name: "Kampus: Istanbul",
    platforms: "Android, Windows, macOS, Linux",
    ads: "None",
    purchases: "None",
    servers: "None",
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
              Game Privacy Policy
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Dungeon Adventure BloodEclipse</Badge>
              <Badge>Kampus: Istanbul</Badge>
            </div>
            <p className="font-poppins text-dimWhite text-[16px] mb-1">
              Last updated: September 14, 2026
            </p>
            <p className="font-poppins text-dimWhite text-[16px] mb-10">
              Developed by Inno-Craft LLC
            </p>

            <div className="space-y-8 max-w-[800px]">
              <Section title="1. Introduction">
                <p className={styles.paragraph}>
                  Inno-Craft LLC ("we", "our", or "us") develops and publishes
                  the games listed below (each an "App", together the "Apps").
                  This page explains our policies regarding the collection,
                  use, and disclosure of personal data when you use our Apps.
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  The Apps differ in what they do and do not collect, so each
                  section below states which App it applies to. Where a section
                  is marked for one App only, it does not apply to the other.
                </p>
              </Section>

              <Section title="2. Games Covered by This Policy">
                <div className="mt-1 overflow-x-auto">
                  <table className="w-full min-w-[620px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-[#2c2c3e]">
                        <Th>Game</Th>
                        <Th>Platforms</Th>
                        <Th>Advertising</Th>
                        <Th>In-app purchases</Th>
                        <Th>Accounts / our servers</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {GAMES.map((game) => (
                        <tr key={game.name} className="border-b border-[#2c2c3e]">
                          <Td className="text-white font-medium">{game.name}</Td>
                          <Td>{game.platforms}</Td>
                          <Td>{game.ads}</Td>
                          <Td>{game.purchases}</Td>
                          <Td>{game.servers}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className={`${styles.paragraph} mt-4`}>
                  Neither App requires you to create an account, and neither
                  App sends personal data to servers operated by Inno-Craft
                  LLC. We do not operate any backend that stores player data.
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  Kampus: Istanbul additionally requires no internet connection
                  at all: it is ad-free, purchase-free, and plays entirely on
                  your device.
                </p>
              </Section>

              <Section title="3. Data We Collect">
                <h3 className="font-poppins font-medium text-white text-[18px] mt-1 mb-2">
                  Dungeon Adventure BloodEclipse
                </h3>
                <AppliesTo>Dungeon Adventure BloodEclipse only</AppliesTo>
                <p className={`${styles.paragraph} mt-3`}>
                  We do not directly collect or store personal data on our own
                  servers. However, third-party services integrated into this
                  App may collect certain data automatically:
                </p>

                <h4 className="font-poppins font-medium text-white text-[17px] mt-5 mb-2">
                  Unity Ads
                </h4>
                <p className={styles.paragraph}>
                  We use Unity Ads (provided by Unity Technologies) to display
                  advertisements on both iOS and Android. Unity Ads may collect:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <Li>Device identifiers (IDFA on iOS with your permission; Android Advertising ID on Android)</Li>
                  <Li>IP address</Li>
                  <Li>Device type, OS version, language, country</Li>
                  <Li>Ad interaction data (impressions, clicks, completion events)</Li>
                </ul>
                <p className={`${styles.paragraph} mt-3`}>
                  Unity Ads Privacy Policy:{" "}
                  <ExtLink href="https://unity.com/legal/privacy-policy">
                    https://unity.com/legal/privacy-policy
                  </ExtLink>
                </p>

                <h4 className="font-poppins font-medium text-white text-[17px] mt-5 mb-2">
                  Apple In-App Purchases (iOS)
                </h4>
                <p className={styles.paragraph}>
                  On iOS, we offer in-app purchases processed entirely by Apple
                  via StoreKit. We do not collect or store your payment
                  information. Apple handles all transactions securely.
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  Apple Privacy Policy:{" "}
                  <ExtLink href="https://www.apple.com/legal/privacy">
                    https://www.apple.com/legal/privacy
                  </ExtLink>
                </p>

                <h4 className="font-poppins font-medium text-white text-[17px] mt-5 mb-2">
                  Google Play Billing (Android)
                </h4>
                <p className={styles.paragraph}>
                  On Android, we offer in-app purchases processed entirely by
                  Google via Google Play Billing. We do not collect or store
                  your payment information. Google handles all transactions
                  securely.
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  Google Privacy Policy:{" "}
                  <ExtLink href="https://policies.google.com/privacy">
                    https://policies.google.com/privacy
                  </ExtLink>
                </p>

                <div className="mt-8 pt-6 border-t border-[#2c2c3e]">
                  <h3 className="font-poppins font-medium text-white text-[18px] mb-2">
                    Kampus: Istanbul
                  </h3>
                  <AppliesTo>Kampus: Istanbul only</AppliesTo>
                  <p className={`${styles.paragraph} mt-3`}>
                    Kampus: Istanbul is a single-player story game that runs{" "}
                    <strong className="text-white">
                      fully offline
                    </strong>
                    . No internet connection is required to play it, and it
                    contains{" "}
                    <strong className="text-white">
                      no ads, no advertising or analytics SDKs, no in-app
                      purchases, and no account system
                    </strong>
                    . Nothing in the game is locked behind a payment and there
                    are no paid advantages — every character, choice, and
                    ending is reached by playing. The game does not transmit
                    any data to us or to any third party, and it does not
                    request network, location, contacts, camera, or microphone
                    permissions.
                  </p>
                  <p className={`${styles.paragraph} mt-3`}>
                    The following information is created by you while playing
                    and is stored{" "}
                    <strong className="text-white">
                      only on your own device
                    </strong>
                    , inside the game's local save files:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <Li>The player name you type at the start of the game (this can be any name or nickname you choose)</Li>
                    <Li>In-game choices you select (department, story decisions, relationship progress, unlocked codex entries)</Li>
                    <Li>Save slots, progress, and screenshots of save points generated by the game</Li>
                    <Li>Game settings such as text speed, audio volume, and language</Li>
                  </ul>
                  <p className={`${styles.paragraph} mt-3`}>
                    We never see this information. You can delete all of it at
                    any time by deleting your save files from the in-game load
                    screen, by clearing the app's storage in your device
                    settings, or by uninstalling the game.
                  </p>
                </div>
              </Section>

              <Section title="4. App Tracking & Advertising Identifiers">
                <AppliesTo>Dungeon Adventure BloodEclipse only</AppliesTo>
                <p className={`${styles.paragraph} mt-3`}>
                  Kampus: Istanbul does not use advertising identifiers and
                  does not track you across apps or websites, so this section
                  does not apply to it.
                </p>

                <h3 className="font-poppins font-medium text-white text-[18px] mt-5 mb-2">
                  iOS — App Tracking Transparency (ATT)
                </h3>
                <p className={styles.paragraph}>
                  On iOS 14.5 and later, we request your permission before
                  accessing your device's advertising identifier (IDFA), as
                  required by Apple's App Tracking Transparency framework. You
                  can change your preference at any time in:
                </p>
                <p className="font-poppins text-white text-[16px] mt-3 font-medium">
                  Settings &rarr; Privacy & Security &rarr; Tracking
                </p>

                <h3 className="font-poppins font-medium text-white text-[18px] mt-5 mb-2">
                  Android — Advertising ID
                </h3>
                <p className={styles.paragraph}>
                  On Android, the App may use your Android Advertising ID
                  (AAID) for advertising and analytics purposes via Unity Ads.
                  You can reset or opt out of personalized advertising at any
                  time in:
                </p>
                <p className="font-poppins text-white text-[16px] mt-3 font-medium">
                  Settings &rarr; Google &rarr; Ads
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  If you decline tracking or opt out, you will still see ads,
                  but they will not be personalized.
                </p>
              </Section>

              <Section title="5. Children's Privacy">
                <AppliesTo>Both games</AppliesTo>
                <p className={`${styles.paragraph} mt-3`}>
                  Our Apps are not directed to children under the age of 13 (or
                  the equivalent minimum age in the relevant jurisdiction). We
                  do not knowingly collect personal information from children.
                  If you believe a child has provided personal data, please
                  contact us and we will take steps to remove that information.
                  We comply with the Google Play Families Policy and Apple's
                  Kids Category requirements where applicable.
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  Kampus: Istanbul is a teen-oriented story about university
                  life. It contains mild romance and friendship themes and no
                  sexually explicit content, but it is not designed for young
                  children. Each store assigns its own content rating, which is
                  shown on the App's store listing.
                </p>
              </Section>

              <Section title="6. Data Retention">
                <AppliesTo>Both games</AppliesTo>
                <p className={`${styles.paragraph} mt-3`}>
                  We do not retain personal data on our own servers for either
                  App.
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <Li>
                    <strong className="text-white">Dungeon Adventure BloodEclipse:</strong>{" "}
                    data collected by third-party services (Unity Ads, Apple,
                    Google) is subject to their respective retention policies
                    linked above.
                  </Li>
                  <Li>
                    <strong className="text-white">Kampus: Istanbul:</strong>{" "}
                    save data stays on your device for as long as you keep it,
                    and is removed when you delete your saves or uninstall the
                    game.
                  </Li>
                </ul>
              </Section>

              <Section title="7. Your Rights">
                <AppliesTo>Both games</AppliesTo>
                <p className={`${styles.paragraph} mt-3`}>
                  Depending on your location (e.g., EEA, UK, California), you
                  may have the right to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <Li>Access the personal data held about you</Li>
                  <Li>Request correction or deletion of your personal data</Li>
                  <Li>Opt out of personalized advertising</Li>
                  <Li>Withdraw consent at any time</Li>
                </ul>
                <p className={`${styles.paragraph} mt-3`}>
                  Because Kampus: Istanbul keeps everything on your device and
                  sends nothing to us, you can exercise these rights for that
                  App directly by deleting your save files or uninstalling it.
                  For Dungeon Adventure BloodEclipse, the third-party services
                  below hold the relevant data:
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  To exercise these rights regarding Unity Ads data, visit:{" "}
                  <ExtLink href="https://unity.com/legal/privacy-policy">
                    https://unity.com/legal/privacy-policy
                  </ExtLink>
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  For Google-related data, visit:{" "}
                  <ExtLink href="https://myaccount.google.com/data-and-privacy">
                    https://myaccount.google.com/data-and-privacy
                  </ExtLink>
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  For Apple-related data, visit:{" "}
                  <ExtLink href="https://privacy.apple.com">
                    https://privacy.apple.com
                  </ExtLink>
                </p>
              </Section>

              <Section title="8. Data Security">
                <AppliesTo>Both games</AppliesTo>
                <p className={`${styles.paragraph} mt-3`}>
                  We take reasonable measures to protect any data processed
                  through the Apps. However, no method of transmission over the
                  internet or electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your
                  data, we cannot guarantee its absolute security.
                </p>
              </Section>

              <Section title="9. Changes to This Policy">
                <AppliesTo>Both games</AppliesTo>
                <p className={`${styles.paragraph} mt-3`}>
                  We may update this Privacy Policy from time to time,
                  including when we add a new game to the list above. We will
                  notify you of any changes by updating the "Last updated" date
                  at the top of this page. Continued use of an App after such
                  changes constitutes acceptance of the updated policy.
                </p>
              </Section>

              <Section title="10. Contact Us">
                <p className={styles.paragraph}>
                  If you have any questions about this Privacy Policy, or about
                  either game, please contact us:
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
              </Section>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="font-poppins font-semibold text-white text-[22px] leading-[32px] mb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="font-poppins text-white text-[13px] leading-[20px] px-3 py-1 rounded-full border border-[#2c2c3e] bg-[rgba(255,255,255,0.03)]">
    {children}
  </span>
);

const AppliesTo = ({ children }) => (
  <span className="inline-block font-poppins text-secondary text-[12px] leading-[18px] tracking-[0.04em] uppercase px-2.5 py-1 rounded-[4px] border border-[rgba(0,246,255,0.35)] bg-[rgba(0,246,255,0.06)]">
    Applies to: {children}
  </span>
);

const Th = ({ children }) => (
  <th className="font-poppins font-medium text-white text-[14px] leading-[22px] py-3 pr-5 align-bottom">
    {children}
  </th>
);

const Td = ({ children, className = "" }) => (
  <td
    className={`font-poppins font-normal text-dimWhite text-[15px] leading-[24px] py-3 pr-5 align-top ${className}`}
  >
    {children}
  </td>
);

const ExtLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-secondary hover:underline"
  >
    {children}
  </a>
);

const Li = ({ children }) => (
  <li className="font-poppins font-normal text-dimWhite text-[16px] leading-[28px]">
    {children}
  </li>
);

export default GamePrivacy;
