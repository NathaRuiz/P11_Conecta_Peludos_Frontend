import React from "react";
import LogoNav from "../../assets/images/Logo-Azul.svg";
import { IoLocationOutline } from "react-icons/io5";


const ShelterAnimalCard = ({ type="Refugio" }) => {
    const backgroundColor = type === "Protectora" ? "bg-tertiaryColor" : "bg-quarteryColor";

    return (
      <>
        <div className="w-[70%] md:w-1/4 lg:w-1/5 bg-white rounded-xl overflow-hidden shadow-xl">
          <img className="w-full" src={LogoNav} alt="animal" />
          <div className="px-3 py-5">
            <div className="font-bold text-secondaryLetterColor text-lg mb-2">
              Toby
            </div>
              <div className="flex items-baseline">
                <IoLocationOutline className="p-0" />
                <p className=" text-secondaryLetterColor lg:text-xs text-sm">Pamplona</p>
              </div>
            <div className="flex justify-between mt-1 flex-wrap">
              <div className="flex items-baseline gap-2">
                <span className={`rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-primaryColor ${backgroundColor}`}>
                  {type}
                </span>
              </div>
             <a href="" className="rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-white bg-primaryColor">
                Explora más
             </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default ShelterAnimalCard