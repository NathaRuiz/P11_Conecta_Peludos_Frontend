import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const ShelterAnimalCard = ({ shelter, province,link }) => {
  const backgroundColor = shelter && shelter.type === "Protectora" ? "bg-tertiaryColor" : "bg-quarteryColor";

  return (
    <>
      {shelter && province && (
        <div className="w-[80%] md:w-1/4 lg:w-1/5 bg-white rounded-xl overflow-hidden shadow-xl">
          <img className="w-full" src={shelter.image_url} alt="animal" />
          <div className="px-3 py-2">
            <div className="font-bold text-secondaryLetterColor text-lg mb-2">
              {shelter.name}
            </div>
            <div className="flex items-center">
              <IoLocationOutline className="text-secondaryLetterColor" />
              <p className="text-secondaryLetterColor lg:text-xs text-sm">{province.name}</p>
            </div>
            <div className="flex justify-between mt-1 flex-wrap">
              <div className="flex items-baseline gap-2">
                <span className={`rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-primaryColor ${backgroundColor}`}>
                  {shelter.type}
                </span>
              </div>
              <Link to={link} className="rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-white bg-primaryColor cursor-pointer">
                  Explora más
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export default ShelterAnimalCard