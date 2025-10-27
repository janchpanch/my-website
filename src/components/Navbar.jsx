import React from "react";
import "../App.css";

import navLinks from "../config/navLinks";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="inline-flex bg-purple-400 px-6 py-3 mx-auto">
      <ul className="flex gap-6 text-white font-medium">
        {navLinks.map(({ name, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold" : ""
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
