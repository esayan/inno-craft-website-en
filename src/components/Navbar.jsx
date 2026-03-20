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
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[15px] text-white hover:text-secondary transition-colors ${
              i === navLinks.length - 1 ? "mr-0" : "mr-8"
            }`}
          >
            <a href={navHref(nav.id)}>{nav.title}</a>
          </li>
        ))}
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
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={navHref(nav.id)} onClick={() => setToggle(false)}>
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
