import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../auth/Login";

function Navbar() {
  return (
    <nav className="flex flex-row p-4 bg-transparent justify-between">
      <div className="flex flex-row gap-4">
        <NavLink
          to="/"
          className="text-2xl font-bold text-violet-400 flex flex-row items-center gap-2"
        >
          <img
            src="/splitsy.png"
            alt="logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-md">Splitsy</p>
        </NavLink>
      </div>
      <div className="flex text-xl gap-7 font-medium w-full justify-end">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-violet-400" : "text-gray-700 "
          }
        >
          Link
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-violet-400" : "text-gray-700"
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
