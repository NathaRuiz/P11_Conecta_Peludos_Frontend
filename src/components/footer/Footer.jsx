import React from "react";
import LogoFooter from "../../assets/images/Logo-Blanco.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-2">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-white font-semibold">"Donde cada pata encuentra su camino a casa"</p>
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
              <a href="" className="hover:underline">
                Conecta Peludos
              </a>
            </span>
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={LogoFooter} className="h-16" alt="Logo" />
            </a>
            <span className="block text-sm text-white sm:text-center">
              <a href="" className="hover:underline"></a>
              Terminos y Condiciones
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
