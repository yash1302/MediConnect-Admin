import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";

const Navbar = () => {
  const { setToken, role } = useContext(userContext);

  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          onClick={() => navigate("/")}
          className="w-10 h-10 cursor-pointer"
          src={assets.favicon}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {role === "admin" ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={() => logout()}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
