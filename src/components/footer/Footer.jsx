import React from "react";
import LogoNav from "../../assets/images/Logo-Blanco.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 md:p-0 mt-2 mb-2 font-medium md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2  text-white rounded hover:bg-gray-100 "
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2  text-white rounded hover:bg-gray-100 "
                >
                  Adopta
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white rounded hover:bg-gray-100 "
                >
                  Protectoras y Refugios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white rounded hover:bg-gray-100 "
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-900 rounded hover:bg-gray-100 "
                >
                  Aprende
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-4 items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <a href="#">
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="size-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="size-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoYoutube className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
          <div className="flex justify-between flex-wrap ">
            <span className="block text-white sm:text-center">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Conecta Peludos
              </a>
            </span>
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={LogoNav} className="h-16" alt="Logo" />
            </a>
            <span className="block text-sm text-white sm:text-center">
              <a href="https://flowbite.com/" className="hover:underline"></a>
              Terminos y Condiciones
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
