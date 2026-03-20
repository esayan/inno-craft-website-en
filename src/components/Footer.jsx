import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src="/IC_logo_hd.png"
            alt="Inno-Craft"
            className="w-[160px] h-auto object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[360px]`}>
            AI-Native Digital Transformation Consulting. From AI ambition to enterprise execution.
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
          &copy; {year} Inno-Craft. All Rights Reserved.
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
                alt="Inno-Craft on LinkedIn"
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
