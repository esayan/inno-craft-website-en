import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Left: Copy */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Badge */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="promo" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> 30-min discovery call
          </p>
        </div>

        {/* Headline + CTA */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span> of AI & Digital Consulting.
          </h1>

        {/* Desktop CTA */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted /> {/* (İstersen buton yazısını sonra değiştiririz) */}
          </div>
        </div>

        {/* Subheadline */}
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          From strategy to production.
        </h1>

        {/* Paragraph */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Inno-Craft helps companies design, build and ship Gen-AI, CRM and Data
          solutions—end-to-end. From prototypes to production systems with
          measurable business impact.
        </p>
      </div>

      {/* Right: Visual */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="Inno-Craft consulting visual"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Mobile CTA */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
