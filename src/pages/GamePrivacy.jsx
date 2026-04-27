import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { Navbar, Footer } from "../components";

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

            <h1 className="font-poppins font-semibold text-white text-[42px] leading-[52px] mb-2">
              Privacy Policy
            </h1>
            <p className="font-poppins text-dimWhite text-[16px] mb-2">
              <strong className="text-white">Dungeon Adventure BloodEclipse</strong>
            </p>
            <p className="font-poppins text-dimWhite text-[16px] mb-1">
              Last updated: April 27, 2026
            </p>
            <p className="font-poppins text-dimWhite text-[16px] mb-10">
              Developed by Inno-Craft LLC
            </p>

            <div className="space-y-8 max-w-[800px]">
              <Section title="1. Introduction">
                <p className={styles.paragraph}>
                  Inno-Craft LLC ("we", "our", or "us") operates the mobile game{" "}
                  <strong className="text-white">Dungeon Adventure BloodEclipse</strong>{" "}
                  (the "App"), available on the Apple App Store and Google Play.
                  This page informs you of our policies regarding the
                  collection, use, and disclosure of personal data when you use
                  our App on iOS or Android devices.
                </p>
              </Section>

              <Section title="2. Data We Collect">
                <p className={styles.paragraph}>
                  We do not directly collect or store personal data on our own
                  servers. However, third-party services integrated into the
                  App may collect certain data automatically:
                </p>

                <h3 className="font-poppins font-medium text-white text-[18px] mt-5 mb-2">
                  Unity Ads
                </h3>
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
                  <a
                    href="https://unity.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    https://unity.com/legal/privacy-policy
                  </a>
                </p>

                <h3 className="font-poppins font-medium text-white text-[18px] mt-5 mb-2">
                  Apple In-App Purchases (iOS)
                </h3>
                <p className={styles.paragraph}>
                  On iOS, we offer in-app purchases processed entirely by Apple
                  via StoreKit. We do not collect or store your payment
                  information. Apple handles all transactions securely.
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  Apple Privacy Policy:{" "}
                  <a
                    href="https://www.apple.com/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    https://www.apple.com/legal/privacy
                  </a>
                </p>

                <h3 className="font-poppins font-medium text-white text-[18px] mt-5 mb-2">
                  Google Play Billing (Android)
                </h3>
                <p className={styles.paragraph}>
                  On Android, we offer in-app purchases processed entirely by
                  Google via Google Play Billing. We do not collect or store
                  your payment information. Google handles all transactions
                  securely.
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  Google Privacy Policy:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </Section>

              <Section title="3. App Tracking & Advertising Identifiers">
                <h3 className="font-poppins font-medium text-white text-[18px] mt-1 mb-2">
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

              <Section title="4. Children's Privacy">
                <p className={styles.paragraph}>
                  Our App is not directed to children under the age of 13 (or
                  the equivalent minimum age in the relevant jurisdiction). We
                  do not knowingly collect personal information from children.
                  If you believe a child has provided personal data, please
                  contact us and we will take steps to remove that information.
                  We comply with the Google Play Families Policy and Apple's
                  Kids Category requirements where applicable.
                </p>
              </Section>

              <Section title="5. Data Retention">
                <p className={styles.paragraph}>
                  We do not retain personal data on our own servers. Data
                  collected by third-party services (Unity Ads, Apple, Google)
                  is subject to their respective retention policies linked
                  above.
                </p>
              </Section>

              <Section title="6. Your Rights">
                <p className={styles.paragraph}>
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
                  To exercise these rights regarding Unity Ads data, visit:{" "}
                  <a
                    href="https://unity.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    https://unity.com/legal/privacy-policy
                  </a>
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  For Google-related data, visit:{" "}
                  <a
                    href="https://myaccount.google.com/data-and-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    https://myaccount.google.com/data-and-privacy
                  </a>
                </p>
                <p className={`${styles.paragraph} mt-3`}>
                  For Apple-related data, visit:{" "}
                  <a
                    href="https://privacy.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    https://privacy.apple.com
                  </a>
                </p>
              </Section>

              <Section title="7. Data Security">
                <p className={styles.paragraph}>
                  We take reasonable measures to protect any data processed
                  through the App. However, no method of transmission over the
                  internet or electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your
                  data, we cannot guarantee its absolute security.
                </p>
              </Section>

              <Section title="8. Changes to This Policy">
                <p className={styles.paragraph}>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by updating the "Last updated" date
                  at the top of this page. Continued use of the App after such
                  changes constitutes acceptance of the updated policy.
                </p>
              </Section>

              <Section title="9. Contact Us">
                <p className={styles.paragraph}>
                  If you have any questions about this Privacy Policy, please contact us:
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

const Li = ({ children }) => (
  <li className="font-poppins font-normal text-dimWhite text-[16px] leading-[28px]">
    {children}
  </li>
);

export default GamePrivacy;
