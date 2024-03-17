import React, { useState } from "react";
import Perro from "../../assets/images/Perro.svg";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const AnimalCard = ({ animal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [status] = useState("Disponible"); 

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const getStatusColor = () => {
    switch (status) {
      case "Disponible":
        return "bg-disponible text-primaryColor";
      case "En Acogida":
        return "bg-acogida text-primaryColor";
      case "Urgente":
        return "bg-urgente text-white";
      case "Adoptado":
        return "bg-adoptado text-primaryColor";
      case "Reservado":
        return "bg-reservado text-primaryColor";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <div className="relative w-[70%] md:w-1/4 lg:w-1/5 bg-white rounded overflow-hidden shadow-xl">
        <div className={`absolute top-0 right-0 ${getStatusColor()} font-bold px-2 py-1 rounded-bl`}>
          {status}
        </div>
        <img className="w-full" src={Perro} alt="animal" />
        <div className="px-3 py-4">
          <div className="font-bold text-secondaryLetterColor lg:text-lg text-xl mb-2">Toby</div>
          <div className="flex justify-between flex-wrap">
            <div className="flex items-baseline">
              <IoLocationOutline className="p-0" />
              <p className=" text-secondaryLetterColor lg:text-xs text-sm">Castilla y Leon </p>
            </div>
            <div className="flex items-baseline gap-2">
              <IoMdMale className="text-blue-800 lg:size-6 size-8 bg-male rounded-full p-1"/>
              <span
                className="cursor-pointer text-gray-700 text-xl"
                role="img"
                aria-label="Favorite"
                onClick={toggleFavorite}
              >
                {isFavorite ? (
                  <MdFavorite className="text-secondaryColor size-8 lg:size-6" /> // Corazón relleno
                ) : (
                  <MdFavoriteBorder className="size-8 lg:size-6" /> // Corazón sin relleno
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img className="w-full h-40 object-cover" src={LogoNav} alt="animal" />
        <div className="px-4 py-2 sm:px-6 sm:py-4">
          <div className="font-bold text-secondaryLetterColor text-base sm:text-lg mb-2">
            {animal.name}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <IoLocationOutline className="text-gray-600 mr-1" />
              <p className="text-secondaryLetterColor text-xs sm:text-sm">
                {animal.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {animal.gender === "male" ? (
                <IoMdMale className="text-blue-800 size-6 bg-male rounded-full p-1" />
              ) : (
                <IoMdFemale className="text-pink-600 size-6 bg-female rounded-full p-1" />
              )}
              <span
                className="cursor-pointer text-gray-700 text-xl"
                role="img"
                aria-label="Favorite"
                onClick={toggleFavorite}
              >
                {isFavorite ? (
                  <MdFavorite size={24} className="text-secondaryColor" /> // Corazón relleno
                ) : (
                  <MdFavoriteBorder size={24} /> // Corazón sin relleno
                )}
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AnimalCard;
