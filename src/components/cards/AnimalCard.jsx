import React, { useState } from "react";
import Perro from "../../assets/images/Perro.svg";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; // 

const AnimalCard = ({ animal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [status] = useState("Disponible");

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const getStatusColor = () => {
    switch (animal.status) {
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
    <Link to={`/animal/${animal.id}`} className="relative w-[70%] md:w-1/4 lg:w-1/5 bg-white rounded overflow-hidden shadow-xl cursor-pointer">
      
        <div
          className={`absolute top-0 right-0 ${getStatusColor()} font-bold px-2 py-1 rounded-bl`}
        >
          {animal.status}
        </div>
        <img className="w-full" src={animal.image_url} alt="animal" />
        <div className="px-3 py-4 ">
          <div className="font-bold text-secondaryLetterColor lg:text-lg text-xl mb-2">
            {animal.name}
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex items-baseline">
              <IoLocationOutline className="p-0" />
              <p className="text-secondaryLetterColor lg:text-xs text-sm">
                province
              </p>
            </div>
            <div className="flex items-center gap-2">
              {animal.gender === "Macho" ? (
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
                  <MdFavorite className="text-secondaryColor size-8 lg:size-6" /> // Corazón relleno
                ) : (
                  <MdFavoriteBorder className="size-8 lg:size-6" /> // Corazón sin relleno
                )}
              </span>
            </div>
          </div>
        </div>
    </Link>
  );
};

export default AnimalCard;
