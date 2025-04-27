// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL


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
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Login function untuk menyimpan token di localStorage
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);

      // Ambil user dari token jika perlu (opsional)
      const decodedUser = jwtDecode(token);  // Pastikan kamu install jwt-decode
      setUser(decodedUser);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/login')
  };

  // Check apakah user sudah login atau belum
  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
