import React, { useState } from "react";
import { close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: "home",     title: "Home",          href: "#home" },
    { id: "services", title: "Our Services",  href: "#services" },
    { id: "about",    title: "Who we are?",   href: "#about" },
    // Contact Us tıklanınca e-posta açılır
    { id: "contact",  title: "Contact Us",    href: "mailto:esayan@inno-craft.com" },
  ];

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <img
        src="/IC_logo.png"
        alt="Inno-Craft"
        className="w-[180px] sm:w-[200px] md:w-[220px] h-auto object-contain"
      />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={nav.href}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={nav.href} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
