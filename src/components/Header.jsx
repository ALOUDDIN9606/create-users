import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="header"
      className="w-[20%] min-h-screen pl-10 bg-[url('https://as2.ftcdn.net/v2/jpg/08/56/45/55/1000_F_856455528_cej2Ab07SukGDZWvk9B3oECAYy3VEH9x.jpg')] bg-cover bg-center"
    >
      <nav className="max-w-7xl mx-auto  flex flex-wrap md:justify-between items-center py-6 text-white">
        <div className="text-[35px] font-bold w-full">
          <NavLink to="/" className="hover:opacity-80 transition">
            Create Users
          </NavLink>
        </div>
        <div className="flex flex-wrap flex-col gap-6 pt-10">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-[25px] font-medium ${
                isActive ? "border-b-2 border-white" : "hover:text-gray-200"
              } transition`
            }
          >
            Users Info
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `text-[25px] font-medium ${
                isActive ? "border-b-2 border-white" : "hover:text-gray-200"
              } transition`
            }
          >
            Create Users
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
