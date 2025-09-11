import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ isActive, navigateLocation, label, icon }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(navigateLocation)}
      className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer w-full ${
        isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
      }`}
    >
      <img className="min-w-5" src={icon} alt="" />
      <p className="hidden md:block">{label}</p>
    </div>
  );
};

export default SidebarItem;
