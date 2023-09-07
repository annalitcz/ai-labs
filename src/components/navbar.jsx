import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRobot, faCode, faUserSecret } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const navMenu = [
    { to: "/", name: "Home", icon: faHome },
    { to: "/ai", name: "Ai List", icon: faRobot },
    { to: "/about", name: "About", icon: faUserSecret },
  ];

  return (
    <nav className="flex justify-between items-center h-16 p-3 border-b border-slate-600 fixed top-0 left-0 right-0 backdrop-blur-lg drop-shadow">
      <NavLink
        to={"/"}
        className="text-red-600 text-xl font-bold hover:animate-bounce no-decoration"
      >
        🚀 Ai<span className="text-slate-300">Labs</span>
      </NavLink>
      <div className="flex justify-between items-center gap-5">
        {navMenu.map((items) => (
          <NavLink
            to={items.to}
            className="text-gray-500 text-base hover:font-bold hover:text-gray-300 hover:border-b-slate-300"
          >
            <FontAwesomeIcon icon={items.icon} className="mr-1" />{items.name}
          </NavLink>
        ))}
      </div>
      <Link
        to={"https://github.com/annalitcz/ai-labs"}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white rounded-lg p-2 text-sm"
      >
        Code <FontAwesomeIcon icon={faCode} />
      </Link>
    </nav>
  );
};

export default Navbar;
