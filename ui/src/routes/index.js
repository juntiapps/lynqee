import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Menggunakan Routes dan Route dari React Router v6
import Welcome from "../pages/Welcome";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import FullLayout from "../layouts/full/FullLayout";
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
          <Route
            path="/admin"
            element={<FullLayout />}
            children={
              <>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/*" element={<Navigate to="/admin/dashboard" />} />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/admin/dashboard" />} />

          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} /> */}
        </>
      )}
    </Routes>
  );
};

export default RoutesConfig;
