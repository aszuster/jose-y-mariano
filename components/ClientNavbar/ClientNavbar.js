'use client';
import { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import Login from "../../components/Login/Login";

const ClientNavbar = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    // Verifica si hay información de autenticación en localStorage
    const storedAuth = localStorage.getItem("authStatus");
    if (storedAuth) {
      setAuthStatus(storedAuth);
    }
  }, []);

  const handleLogin = (status) => {
    setAuthStatus(status);
    localStorage.setItem("authStatus", status);
  };

  const handleLogout = () => {
    setAuthStatus(null);
    localStorage.removeItem("authStatus");
  };

  if (!authStatus) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar authStatus={authStatus} onLogout={handleLogout} />
      {children}
    </>
  );
};

export default ClientNavbar;
