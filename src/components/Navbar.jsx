// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../config/navLinks";
// import Bars3 from "../assets/bars-3";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <nav>
      <div>
        <h1>Joe's Archive</h1>

        {/* Hamburger button */}
        {/* <button onClick={() => setIsOpen(!isOpen)}>
          { <Bars3 /> }
        </button> */}

        {/* Desktop Links */}
        <ul>
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <ul>
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink to={path} onClick={() => setIsOpen(false)}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )} */}
    </nav>
  );
};

export default Navbar;
