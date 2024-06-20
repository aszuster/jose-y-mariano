'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false); // Close dropdown when menu is toggled
  };

  return (
    <nav className="flex justify-end lg:justify-center bg-offWhite p-4 border-b border-mudGreenDark h-[52px] lg:h-[110px] z-50 relative">
      <div className="max-w-7xl lg:mx-auto flex justify-end lg:justify-center items-center w-full">
        <div className="hidden md:flex space-x-10">
          <Link href="/">
            <p className="text-mudGreenDark uppercase text-lg tracking-[0.35em]">Inicio</p>
          </Link>
          <Link href="/preboda">
            <p className="text-mudGreenDark uppercase text-lg tracking-[0.35em]">Preboda</p>
          </Link>
          <Link href="/boda">
            <p className="text-mudGreenDark uppercase text-lg tracking-[0.35em]">Boda</p>
          </Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-mudGreenDark uppercase text-lg tracking-[0.35em]">
              Recomendaciones
            </button>
            {dropdownOpen && (
              <div className="absolute bg-lightGray shadow-md mt-2 rounded-md px-[20px] py-[7px]">
                <Link href="/recomendaciones-mendoza">
                  <p className="block text-[18px] font-light px-4 py-2 text-mudGreenDark my-3 tracking-[0.3em] uppercase">Mendoza</p>
                </Link>
                <Link href="/recomendaciones-buenos-aires">
                  <p className="block text-[18px] font-light px-4 py-2 text-mudGreenDark my-3 tracking-[0.3em] uppercase">Buenos Aires</p>
                </Link>
              </div>
            )}
          </div>
          <Link href="/rsvp">
            <p className="text-mudGreenDark uppercase text-lg tracking-[0.35em]">RSVP</p>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[52px] font-light p-[28px] left-[50%] translate-x-[-50%] w-[90%] bg-lightGray z-50">
          <Link href="/" className=''>
            <p className="block text-[18px] font-light px-4 py-2 uppercase text-mudGreenDark my-5 tracking-[0.3em]">Inicio</p>
          </Link>
          <Link href="/preboda">
            <p className="block text-[18px] font-light px-4 py-2 uppercase text-mudGreenDark my-5 tracking-[0.3em]">Preboda</p>
          </Link>
          <Link href="/boda">
            <p className="block text-[18px] font-light px-4 py-2 uppercase text-mudGreenDark my-5 tracking-[0.3em]">Boda</p>
          </Link>
          <button onClick={toggleDropdown} className="block font-light text-[18px] px-4 py-2 uppercase text-mudGreenDark text-left tracking-[0.3em] w-full">
            Recomendaciones
          </button>
          {dropdownOpen && (
            <div className="bg-mudGreenDark py-2">
              <Link href="/recomendaciones-mendoza">
                <p className="block text-[18px] font-light px-4 py-2 text-white my-5 tracking-[0.3em] uppercase">Mendoza</p>
              </Link>
              <Link href="/recomendaciones-buenos-aires">
                <p className="block text-[18px] font-light px-4 py-2 text-white my-5 tracking-[0.3em] uppercase">Buenos Aires</p>
              </Link>
            </div>
          )}
          <Link href="/rsvp">
            <p className="block text-[18px] font-light px-4 py-2 uppercase text-mudGreenDark my-5 tracking-[0.3em]">RSVP</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
