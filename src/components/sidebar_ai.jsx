import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faPen, faImage, faSearch, faComment } from '@fortawesome/free-solid-svg-icons'

const SidebarAi = () => {
  const location = useLocation();
  const menuItems = [
    { to: "ai_programming", label: "Programming", icon: faComputer },
    { to: "ai_write", label: "Writing", icon: faPen },
    { to: "ai_img", label: "Image", icon: faImage },
    { to: "ai_research", label: "Research", icon: faSearch },
    { to: "ai_chat", label: "Chatting", icon: faComment }
    // Add more menu items if needed
  ];

  const isLinkActive = (targetPath) => location.pathname.includes(targetPath);

  return (
    <div className="fixed left-0 h-full w-56 border-r border-slate-600">
      <h3 className="text-lg font-semibold mt-2 text-center text-slate-400">
        Get Started
      </h3>
      <div className="sidebar flex flex-col py-4 px-4 gap-y-4 border-l-slate-700 list-inside">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            className={`${
              isLinkActive(item.to)
                ? "font-bold border-l-2 border-blue-400 text-blue-400"
                : "hover:border-l-3 hover:font-bold"
            } rounded-sm text-slate-300 text-sm pl-2 py-1`}
            to={item.to}
          >
            <FontAwesomeIcon icon={item.icon} className="mr-2"/>{" "}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarAi;
