import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { role } = useContext(userContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white border-r">
      {role === "admin" && (
        <ul className="text-[#515151] mt-5">
          <SidebarItem
            isActive={window.location.pathname === "/admin-dashboard"}
            navigateLocation={"/admin-dashboard"}
            label={"Dashboard"}
            icon={assets.home_icon}
          />
          <SidebarItem
            isActive={window.location.pathname === "/all-appointments"}
            navigateLocation={"/all-appointments"}
            label={"Appointments"}
            icon={assets.appointment_icon}
          />
          <SidebarItem
            isActive={window.location.pathname === "/add-doctor"}
            navigateLocation={"/add-doctor"}
            label={"Add Doctor"}
            icon={assets.add_icon}
          />
          <SidebarItem
            isActive={window.location.pathname === "/doctor-list"}
            navigateLocation={"/doctor-list"}
            label={"Doctors List"}
            icon={assets.people_icon}
          />
        </ul>
      )}

      {role === "doctor" && (
        <ul className="text-[#515151] mt-5">
          <SidebarItem
            isActive={window.location.pathname === "/doctor-dashboard"}
            navigateLocation={"/doctor-dashboard"}
            label={"Dashboard"}
            icon={assets.home_icon}
          />
          <SidebarItem
            isActive={window.location.pathname === "/doctor-appointments"}
            navigateLocation={"/doctor-appointments"}
            label={"Appointments"}
            icon={assets.appointment_icon}
          />
          <SidebarItem
            isActive={window.location.pathname === "/doctor-profile"}
            navigateLocation={"/doctor-profile"}
            label={"Profile"}
            icon={assets.people_icon}
          />
          <SidebarItem
            isActive={window.location.pathname === "/chat"}
            navigateLocation={"/chat"}
            label={"Chat"}
            icon={assets.list_icon} // Change to chat icon if available
          />
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
