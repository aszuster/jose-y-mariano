'use client'
import { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import Login from "../../components/Login/Login";


const ClientNavbar = ({ onLogin }) => {
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
    
      if (!authStatus) {
        return <Login onLogin={handleLogin} />;
      }
    
      const handleLogout = () => {
        setAuthStatus(null);
        localStorage.removeItem("authStatus");
      };
  
    return (
        <Navbar authStatus={authStatus} onLogout={handleLogout}/>
    );
  };
  
  export default ClientNavbar;