// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

// Membuat Context
const AuthContext = createContext();

// Hook untuk menggunakan context
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Provider untuk membungkus aplikasi dan memberikan akses auth context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Login function untuk menyimpan token di localStorage
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setToken(token);

      // Ambil user dari token jika perlu (opsional)
      const decodedUser = jwtDecode(token); // Pastikan kamu install jwt-decode
      setUser(decodedUser);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        email,
        password,
      });
      const { message } = response.data;
      
      navigate("/login", {
        state: { registered: true, message: message },
      });
    } catch (error) {
      navigate("/register", {
        state: { failed: true, message: error.response.data.message },
      });
      console.error("Register error:", error);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/welcome",{
      state: { registered: true, message: "Logging Out Successfully" },
    });
  };

  // Check apakah user sudah login atau belum
  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, register, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
