import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Menggunakan Routes dan Route dari React Router v6
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/admin/Dashboard";
import { useAuthContext } from "../context/AuthContext";

const RoutesConfig = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Routes>
      {!isAuthenticated() ? (
        <>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />

        </>
      )}
    </Routes>
  );
};

export default RoutesConfig;
