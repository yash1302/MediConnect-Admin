import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f9fd",
        color: "#d32f2f",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        401 Unauthorized
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "#333" }}>
        You do not have permission to view this page.
        <br />
        Please login with the correct credentials.
      </p>
      <button
        onClick={handleBackToLogin}
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.1)",
        }}
      >
        Go to Login
      </button>
    </div>
  );
};

export default Unauthorized;
