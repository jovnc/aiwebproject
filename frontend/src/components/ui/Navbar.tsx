import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header pt-4">
      <nav className="flex text-xl gap-7 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-violet-400" : "text-gray-300 font-bold"
          }
        >
          Link 1
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-violet-400" : "text-gray-300 font-bold"
          }
        >
          Link 2
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-violet-400" : "text-gray-300 font-bold"
          }
        >
          Link 3
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
