import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="Inno-Craft"
            className="w-[266px] h-[172px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[360px]`}>
            Inno-Craft is a boutique consultancy for GenAI strategy & roadmap,
            AI-focused digital transformation, and Salesforce CRM implementation.
          </p>
          <p className="mt-3 text-dimWhite">
            <a className="underline" href="mailto:esayan@inno-craft.com">
              esayan@inno-craft.com
            </a>
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {group.title}
              </h4>
              <ul className="list-none mt-4">
                {group.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== group.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {/* link'i tıklanabilir yap */}
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
          © {year} Inno-Craft. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
