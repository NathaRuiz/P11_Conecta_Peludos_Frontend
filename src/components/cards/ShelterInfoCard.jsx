import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const ShelterInfoCard = ({ shelter, province }) => {
  const backgroundColor =
    shelter && shelter.type === "Protectora"
      ? "bg-tertiaryColor"
      : "bg-quarteryColor";
  return (
    <div className="flex flex-col justify-between gap-4 lg:w-3/4 w-full bg-white rounded-lg overflow-hidden shadow-md p-4 mb-4">
      <div className="text-xl font-bold text-primaryColor">{shelter.name}</div>
      <div className="flex flex-wrap items-center gap-5">
        <div
          className={`${backgroundColor} text-sm  font-bold px-2 py-0 rounded-xl`}
        >
          {shelter.type}
        </div>
        <div className="flex items-center ">
          <IoLocationOutline className="text-secondaryLetterColor" />
         <p className=" text-secondaryLetterColor lg:text-xs text-sm">
         {province.name + " - " + shelter.address}
        </p> 
        </div>
        <div className="flex items-center">
          <LuPhone className="text-secondaryLetterColor"/>
          <p className=" text-secondaryLetterColor lg:text-xs text-sm">
            {shelter.telephone}
          </p>
        </div>
        <div className="flex items-center">
          <HiOutlineMail className="text-secondaryLetterColor"/>
          <p className=" text-secondaryLetterColor lg:text-xs text-sm">
            {shelter.email}
          </p>
        </div>
      </div>
      <h3 className="font-bold text-primaryColor text-lg">Nuestra Historia</h3>
      <p className="text-primaryColor">{shelter.description}</p>
    </div>
  );
};

export default ShelterInfoCard;
