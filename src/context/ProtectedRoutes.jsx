import React, { useContext } from "react";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";

const ProtectedRoutes = ({ children, roles }) => {
  const navigate = useNavigate();
  const { role, token } = useContext(userContext);
  if (!token) {
    navigate(`/`);
  }
  if (!roles.includes(role)) {
    navigate(`/Unauthorized`);
  }

  if (window.location.pathname === "/") {
    if (role === "doctor") {
      return <Navigate to="/doctor-dashboard" replace />;
    }
    if (role === "admin") {
      return <Navigate to="/admin-dashboard" replace />;
    }
  }
  return <Outlet />;
};

export default ProtectedRoutes;
