import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      window.location.href = "/";
      window.location.reload();
    }
  }, []);
  return (
    <div className="bg-[#F8F9FD] h-screen overflow-hidden">
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
