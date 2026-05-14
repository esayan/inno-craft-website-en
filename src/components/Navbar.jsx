import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img
          src="/IC_logo_hd.png"
          alt="Inno-Craft"
          className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain"
        />
      </Link>

      {/* Desktop */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[15px] text-white hover:text-secondary transition-colors mr-6"
          >
            <a href={navHref(nav.id)}>{nav.title}</a>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[15px] text-white hover:text-secondary transition-colors mr-6">
          <a href="/trust-compact/">Trust Compact</a>
        </li>
        <li className="mr-3">
          <Link
            to="/quiz"
            className="py-2 px-4 bg-blue-gradient font-poppins font-medium text-[13px] text-primary rounded-[8px] hover:opacity-90 transition-opacity"
          >
            AI Quiz
          </Link>
        </li>
        <li>
          <a
            href={navHref("ventures")}
            className="py-2 px-4 font-poppins font-medium text-[13px] text-secondary border border-secondary/50 rounded-[8px] hover:bg-secondary/10 transition-colors"
          >
            Play BloodEclipse
          </a>
        </li>
      </ul>

      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Toggle navigation menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar z-[100]`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4"
              >
                <a href={navHref(nav.id)} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4">
              <a href="/trust-compact/" onClick={() => setToggle(false)}>
                Trust Compact
              </a>
            </li>
            <li className="mb-3">
              <Link
                to="/quiz"
                onClick={() => setToggle(false)}
                className="py-2 px-4 bg-blue-gradient font-poppins font-medium text-[13px] text-primary rounded-[8px]"
              >
                AI Quiz
              </Link>
            </li>
            <li>
              <a
                href={navHref("ventures")}
                onClick={() => setToggle(false)}
                className="py-2 px-4 font-poppins font-medium text-[13px] text-secondary border border-secondary/50 rounded-[8px] inline-block"
              >
                Play BloodEclipse
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
