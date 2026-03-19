import React from "react";
import { engagementSteps } from "../constants";
import styles from "../style";

const StepCard = ({ step, title, description, deliverable, timeline, isLast }) => (
  <div className="flex-1 min-w-[250px]">
    <div className="flex items-center mb-4">
      <div className="w-[56px] h-[56px] rounded-[12px] bg-blue-gradient flex items-center justify-center mr-4 flex-shrink-0">
        <span className="font-poppins font-bold text-primary text-[20px]">{step}</span>
      </div>
      {!isLast && (
        <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-secondary/50 to-transparent" />
      )}
    </div>
    <h4 className="font-poppins font-semibold text-white text-[20px] leading-[28px] mb-2">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[24px] mb-3">
      {description}
    </p>
    <div className="space-y-1">
      <p className="font-poppins text-secondary text-[14px]">
        Timeline: {timeline}
      </p>
      <p className="font-poppins text-dimWhite text-[13px] italic">
        Deliverable: {deliverable}
      </p>
    </div>
  </div>
);

const HowWeEngage = () => {
  return (
    <section id="engagement" className={`${styles.paddingY}`}>
      <div className="mb-10">
        <p className="font-poppins text-secondary font-medium text-[16px] uppercase tracking-wider mb-2">
          Our Process
        </p>
        <h2 className={styles.heading2}>
          How We <span className="text-gradient">Engage</span> With Clients
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
          A structured, phased approach to enterprise AI transformation.
          Each phase can be executed independently or as part of a comprehensive program.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {engagementSteps.map((s, i) => (
          <StepCard
            key={s.id}
            {...s}
            isLast={i === engagementSteps.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default HowWeEngage;
