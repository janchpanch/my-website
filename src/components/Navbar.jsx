// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../config/navLinks";
import Bars3 from "../assets/bars-3";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 text-white px-6 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Joe's Archive</h1>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white hover:bg-blue-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3 />
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={path} className="no-underline">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-300" : ""
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-3 gap-3 md:hidden bg-purple-700">
          {navLinks.map(({ name, path }) => (
            <li key={path} className="">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-300 no-underline" : ""
                }
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
