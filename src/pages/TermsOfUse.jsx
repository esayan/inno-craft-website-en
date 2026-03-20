import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { Navbar, Footer } from "../components";

const TermsOfUse = () => {
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
              Terms of Use
            </h1>
            <p className="font-poppins text-dimWhite text-[16px] mb-10">
              Effective Date: March 20, 2026
            </p>

            <div className="space-y-6 max-w-[800px]">
              <p className={styles.paragraph}>
                By accessing this website, you agree to use it lawfully and
                respectfully. The content provided on this site is for general
                informational purposes unless otherwise stated. Inno-Craft may
                update, change, or remove website content at any time without
                prior notice.
              </p>

              <p className={styles.paragraph}>
                All brand assets, texts, visuals, concepts, and materials on
                this website are owned by or licensed to Inno-Craft unless
                otherwise stated. Unauthorized copying, redistribution, or
                commercial use is not permitted.
              </p>

              <p className={styles.paragraph}>
                Nothing on this website constitutes guaranteed business, legal,
                financial, or technical results. Any project, service, product,
                or implementation is subject to separate discussion, scoping, and
                agreement.
              </p>

              <p className={styles.paragraph}>
                Inno-Craft is not liable for interruptions, inaccuracies, or
                indirect damages arising from the use of this website, to the
                maximum extent permitted by law.
              </p>

              <p className={styles.paragraph}>
                If you do not agree with these terms, please do not use the
                website.
              </p>

              <div className="pt-6 border-t border-[#2c2c3e] mt-8">
                <p className={styles.paragraph}>
                  For questions about these terms, please contact:
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
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
