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
      <form onSubmit={handleSubmit} className="bg-offWhite h-screen flex flex-col items-center justify-center">
        <Image src={Firma} className="mb-[50px] md:mb-[64px] w-[220px] md:w-[280px]" />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
          className="outline-0 w-[200px] md:w-[250px] bg-transparent p-2  text-[16px] md:text-[18px] text-mudGreenDark focus:border-transparent focus:ring-0"
        />
        <hr className="border-1 border-mudGreenDark  w-[200px] md:w-[250px] mb-4"/>
        <h2 className="mb-4 text-[12px] md:text-[15px] tracking-[0.4em] font-semibold text-center text-mudGreenDark uppercase">contraseña</h2>
        <button
          type="submit"
          className="uppercase text-[12px] md:text-[15px] tracking-[0.4em] py-[15px] md:py-[18px] px-[27px] md:px-[40px] mt-[50px] md:mt-[64px] bg-gray text-white rounded-tl-[20px] rounded-br-[20px] rounded-tr-[2px] rounded-bl-[2px] lg:rounded-tl-[30px] lg:rounded-br-[30px] lg:rounded-tr-[3px] lg:rounded-bl-[3px] transition-colors duration-300 ease-in-out hover:bg-mudGreen"
        >
          Ingresar
        </button>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
