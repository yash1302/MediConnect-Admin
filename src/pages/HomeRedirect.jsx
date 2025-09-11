import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/UserContext";

const HomeRedirect = () => {

  const { role } = useContext(userContext);

  if (role === "admin") {
    return <Navigate to="/admin-dashboard" replace />;
  } else if (role === "doctor") {
    return <Navigate to="/doctor-dashboard" replace />;
  } else {
    return <Navigate to="/Unauthorized" replace />;
  }
};

export default HomeRedirect;
