import React from "react";
import { services } from "../constants";
import styles from "../style";

const ServiceCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-col p-6 rounded-[20px] feature-card ${
      index % 2 !== 0 ? "md:mt-6" : ""
    } border border-[#1c1c2e] hover:border-secondary/30 transition-colors`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4`}>
      <img src={icon} alt={`${title} icon`} className="w-[50%] h-[50%] object-contain" />
    </div>
    <h4 className="font-poppins font-semibold text-white text-[20px] leading-[28px] mb-2">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[26px]">
      {content}
    </p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className={`${styles.paddingY}`}>
      <div className="mb-10">
        <p className="font-poppins text-secondary font-medium text-[16px] uppercase tracking-wider mb-2">
          What We Do
        </p>
        <h2 className={styles.heading2}>
          Five integrated domains delivering <br className="sm:block hidden" />
          <span className="text-gradient">end-to-end enterprise transformation.</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
          From boardroom strategy to production-grade AI solutions — no handoff gaps.
          Discovery &rarr; Design &rarr; Roadmap &rarr; Implementation &rarr; Scale.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
