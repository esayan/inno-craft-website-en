import React from "react";
import styles from "../style";

const MAILTO =
  "mailto:esayan@inno-craft.com?subject=Inquiry%20from%20Inno-Craft%20website&body=Hi%20Engin,%0D%0A%0D%0AI%20visited%20inno-craft.com%20and%20would%20like%20to%20discuss%20...%0D%0A%0D%0ABest,%0D%0A";

const Contact = () => {
  return (
    <section id="contact" className={`${styles.paddingY}`}>
      <div className="w-full rounded-[20px] bg-black-gradient border border-[#1c1c2e] p-10 sm:p-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left: CTA */}
          <div className="flex-1">
            <p className="font-poppins text-secondary font-medium text-[16px] uppercase tracking-wider mb-2">
              Let's Talk
            </p>
            <h2 className={`${styles.heading2} !text-[36px] !leading-[48px]`}>
              Ready to transform <br className="sm:block hidden" />
              your enterprise with AI?
            </h2>
            <p className={`${styles.paragraph} max-w-[480px] mt-4`}>
              Book a free 30-minute discovery call. We'll assess your AI readiness,
              identify quick wins, and outline a path to measurable business impact.
            </p>
            <a
              href={MAILTO}
              className="inline-block mt-8 py-4 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call
            </a>
          </div>

          {/* Right: Contact info */}
          <div className="md:w-[320px] w-full space-y-6">
            <div>
              <p className="font-poppins text-dimWhite text-[14px] uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:esayan@inno-craft.com"
                className="font-poppins text-white text-[18px] hover:text-secondary transition-colors"
              >
                esayan@inno-craft.com
              </a>
            </div>
            <div>
              <p className="font-poppins text-dimWhite text-[14px] uppercase tracking-wider mb-1">
                Phone
              </p>
              <a
                href="tel:+905070480418"
                className="font-poppins text-white text-[18px] hover:text-secondary transition-colors"
              >
                +90 507 048 0418
              </a>
            </div>
            <div>
              <p className="font-poppins text-dimWhite text-[14px] uppercase tracking-wider mb-1">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/enginsayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-white text-[18px] hover:text-secondary transition-colors"
              >
                linkedin.com/in/enginsayan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="font-poppins text-center text-secondary font-medium text-[20px] mt-10">
        We craft innovation. We operationalize AI. We scale responsibly.
      </p>
    </section>
  );
};

export default Contact;
