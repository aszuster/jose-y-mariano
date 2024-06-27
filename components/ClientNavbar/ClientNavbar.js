'use client';
import { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import Login from "../../components/Login/Login";
import { AuthContext } from "../../contexts/AuthContext";

const ClientNavbar = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica si hay información de autenticación en localStorage
    const storedAuth = localStorage.getItem("authStatus");
    if (storedAuth) {
      setAuthStatus(storedAuth);
    }
    setLoading(false); // Set loading to false after checking auth status
  }, []);

  const handleLogin = (status) => {
    setAuthStatus(status);
    localStorage.setItem("authStatus", status);
  };

  const handleLogout = () => {
    setAuthStatus(null);
    localStorage.removeItem("authStatus");
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-gray-100">Cargando...</div>;
  }

  return (
    <AuthContext.Provider value={authStatus}>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">Cargando...</div>
      ) : authStatus ? (
        <>
          <Navbar authStatus={authStatus} onLogout={handleLogout} />
          {children}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </AuthContext.Provider>
  );
};

export default ClientNavbar;
