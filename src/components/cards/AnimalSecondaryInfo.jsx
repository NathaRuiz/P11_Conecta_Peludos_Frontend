import React, { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const AnimalSecondaryInfo = ({ animal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="lg:w-3/4 flex flex-col gap-2 bg-white rounded-lg overflow-hidden shadow-md p-4">
        <h3 className="font-bold text-primaryColor text-md">Mis Historia</h3>
        <div className="text-primaryColor text-sm">{animal.my_story}</div>
        <h3 className="font-bold text-primaryColor text-md">¿Cómo soy?</h3>
        <div className="text-primaryColor text-sm">{animal.description}</div>
        <h3 className="font-bold text-primaryColor text-md">Me entregan</h3>
        <div className="text-primaryColor text-sm">{animal.delivery_options}</div>
        <div className="flex gap-2 justify-end">
          <span
            className="cursor-pointer text-gray-700 text-xl"
            role="img"
            aria-label="Favorite"
            onClick={toggleFavorite}
          >
            {isFavorite ? (
              <MdFavorite className="text-secondaryColor size-8 lg:size-6" />
            ) : (
              <MdFavoriteBorder className="size-8 lg:size-6" />
            )}
          </span>
          <a
            href=""
            className="rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-white bg-primaryColor"
          >
            Estoy Interesado
          </a>
        </div>
      </div>
    </>
  );
};

export default AnimalSecondaryInfo;
