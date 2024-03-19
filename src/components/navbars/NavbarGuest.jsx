import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar el componente Link de react-router-dom
import LogoNav from '../../assets/images/Logo-Azul.svg';
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

const NavbarGuest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse"> {/* Reemplazar el enlace de <a> por <Link> */}
            <img
              src={LogoNav}
              className="h-16"
              alt="Logo"
            />
          </Link>
          <div className="flex -1 md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
            <PrimaryBtn></PrimaryBtn>
            <SecondaryBtn></SecondaryBtn>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primaryColor rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-primaryColor dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${isOpen ? "hidden" : "block"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <svg
                className={`w-5 h-5 ${isOpen ? "block" : "hidden"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M14.33 5.424l.943.943L10 11.886l-5.273-5.52.943-.943L10 10l4.33-4.576z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "" : "hidden"}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-white md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link to="/" className="block py-2 px-3 text-primaryColor rounded hover:bg-gray-100 " aria-current="page">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/adopta" className="block py-2 px-3 text-primaryColor rounded hover:bg-gray-100 ">
                  Adopta
                </Link>
              </li>
              <li>
                <Link to="/protectoras&refugios" className="block py-2 px-3 text-primaryColor rounded hover:bg-gray-100 ">
                  Protectoras y Refugios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="block py-2 px-3 text-primaryColor rounded hover:bg-gray-100 ">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/aprende" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">
                  Aprende
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarGuest;
