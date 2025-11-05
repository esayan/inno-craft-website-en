import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="services" className={layout.section}>
      {/* LEFT TEXT BLOCK */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          AI-empowered CRM & GenAI-driven transformation
          <br className="sm:block hidden" /> are redefining how businesses grow.
        </h2>

        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Companies embracing AI-powered CRM and Generative AI strategies are
          experiencing dramatic performance gains—faster sales cycles,
          personalized customer engagement, predictive insights, and
          organization-wide productivity lift.  
          <br />
          <br />
          Inno-Craft helps leaders move beyond experimentation and turn GenAI
          and CRM capabilities into measurable growth engines.
        </p>

        <Button styles="mt-10" />
      </div>

      {/* RIGHT FEATURE CARDS */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
