import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { Navbar, Footer } from "../components";

const PrivacyPolicy = () => {
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
            <p className="font-poppins text-dimWhite text-[16px] mb-10">
              Effective Date: March 20, 2026
            </p>

            <div className="space-y-8 max-w-[800px]">
              <p className={styles.paragraph}>
                Inno-Craft respects your privacy and is committed to protecting
                personal data handled through this website and related digital
                services.
              </p>

              <Section title="1. Information We May Collect">
                <p className={styles.paragraph}>
                  We may collect limited personal information that you
                  voluntarily provide, such as:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <Li>Name</Li>
                  <Li>Email address</Li>
                  <Li>Company name</Li>
                  <Li>Contact details</Li>
                  <Li>
                    Information submitted through contact forms or business
                    inquiries
                  </Li>
                </ul>
                <p className={`${styles.paragraph} mt-4`}>
                  We may also collect limited technical information
                  automatically, such as:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <Li>Browser type</Li>
                  <Li>Device information</Li>
                  <Li>IP address</Li>
                  <Li>Pages visited</Li>
                  <Li>General website usage analytics</Li>
                </ul>
              </Section>

              <Section title="2. How We Use Information">
                <p className={styles.paragraph}>
                  We may use collected information to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <Li>Respond to inquiries</Li>
                  <Li>
                    Communicate regarding services, partnerships, or products
                  </Li>
                  <Li>Improve website performance and user experience</Li>
                  <Li>Maintain security and operational integrity</Li>
                  <Li>Support business, legal, and compliance needs</Li>
                </ul>
              </Section>

              <Section title="3. Data Sharing">
                <p className={styles.paragraph}>
                  We do not sell personal data. Information may be shared with
                  trusted service providers or technical partners only where
                  reasonably necessary to operate the website, maintain services,
                  support analytics, or meet legal obligations.
                </p>
              </Section>

              <Section title="4. Data Retention">
                <p className={styles.paragraph}>
                  We retain information only as long as reasonably necessary for
                  legitimate business, operational, legal, or security purposes.
                </p>
              </Section>

              <Section title="5. Security">
                <p className={styles.paragraph}>
                  We take reasonable administrative, technical, and
                  organizational measures to protect information. However, no
                  internet-based transmission or storage system can be guaranteed
                  to be fully secure.
                </p>
              </Section>

              <Section title="6. Third-Party Services">
                <p className={styles.paragraph}>
                  This website may use third-party tools, platforms, analytics
                  services, hosting providers, or embedded content. Those third
                  parties may process data according to their own terms and
                  privacy practices.
                </p>
              </Section>

              <Section title="7. Your Rights">
                <p className={styles.paragraph}>
                  Depending on applicable law, you may have rights regarding
                  access, correction, deletion, or objection to the processing
                  of your personal data. Requests may be submitted through our
                  contact details.
                </p>
              </Section>

              <Section title="8. Children's Privacy">
                <p className={styles.paragraph}>
                  This website is not intentionally directed to children unless
                  explicitly stated for a specific product or service. We do not
                  knowingly collect personal information from children through
                  this corporate website without appropriate legal basis.
                </p>
              </Section>

              <Section title="9. Changes">
                <p className={styles.paragraph}>
                  We may update this Privacy Policy from time to time. Updated
                  versions will be posted on this page with an updated effective
                  date.
                </p>
              </Section>

              <Section title="10. Contact">
                <p className={styles.paragraph}>
                  For privacy-related inquiries, please contact:
                </p>
                <div className="mt-3 space-y-1">
                  <p className="font-poppins text-white text-[16px] font-medium">
                    Inno-Craft
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
                  <p className={styles.paragraph}>
                    Email:{" "}
                    <a
                      href="mailto:esayan@inno-craft.com"
                      className="text-secondary hover:underline"
                    >
                      esayan@inno-craft.com
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

export default PrivacyPolicy;
