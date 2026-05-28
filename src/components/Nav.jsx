// Nav.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center gap-6 p-4 bg-gray-900 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-blue-500 px-4 py-2 rounded" : "px-4 py-2"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className={({ isActive }) =>
          isActive ? "bg-blue-500 px-4 py-2 rounded" : "px-4 py-2"
        }
      >
        Pastes
      </NavLink>
    </div>
  );
};

export default Nav;
