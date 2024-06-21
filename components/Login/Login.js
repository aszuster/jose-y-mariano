'use client'
// components/Login.js
import { useState } from "react";
import Image from "next/image";
import Firma from "../../public/images/iniciales.svg"

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "password1") {
      onLogin("full");
    } else if (password === "password2") {
      onLogin("limited");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-offWhite">
      <form onSubmit={handleSubmit} className="bg-offWhite h-screen w-screen flex flex-col items-center justify-center">
        <Image src={Firma} className="mb-[84px]" />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
          className="outline-0	w-[306px] bg-transparent p-2 border-b border-mudGreenDark focus:border-b focus:border-mudGreenDark mb-4 text-[18px] text-mudGreenDark focus:border-transparent focus:ring-0"
        />
        <h2 className="mb-4 text-[18px] tracking-[0.4em] font-semibold text-center text-mudGreenDark uppercase">contraseña</h2>
        <button
          type="submit"
          className="uppercase text-[18px] tracking-[0.4em] py-[20px] px-[43px] mt-[84px] bg-gray text-white rounded-tl-[40px] rounded-br-[40px] rounded-tr-[4px] rounded-bl-[4px]"
        >
          Ingresar
        </button>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
