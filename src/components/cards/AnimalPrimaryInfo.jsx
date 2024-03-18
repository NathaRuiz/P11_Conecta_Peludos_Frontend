import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const AnimalPrimaryInfo = ({type="Macho" }) => {
  const [status] = useState("Disponible");
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
  const backgroundColor = type === "Macho" ? "bg-tertiaryColor text-primaryColor" : "bg-secondaryColor text-white";
  return (
    <>
      <div className="flex flex-col justify-between gap-4 lg:w-3/4 w-[90%] bg-white rounded-lg overflow-hidden shadow-md p-4 mb-4">
        <div className="flex justify-between">
          <div className="text-xl font-bold text-primaryColor">Toby</div>
          <div className={`${getStatusColor()} text-sm font-bold px-2 py-1 rounded-xl`}>
            {status}
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <div className={`${backgroundColor} text-sm  font-bold px-2 py-0 rounded-xl`}>
            {type}
          </div>
          <div className="flex items-baseline">
              <IoLocationOutline className="p-0" />
              <p className=" text-secondaryLetterColor lg:text-xs text-sm">
                Castilla y Leon{" "}
              </p>
            </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-primaryColor text-lg">Mis Datos</h3>
          <div className="flex gap-1 text-primaryColor"><div className="font-bold">Raza:</div>Podenco</div>
          <div className="flex gap-1  text-primaryColor"><div className="font-bold text-primaryColor">Tamaño:</div>Mediano</div> 
          <div className="flex gap-1  text-primaryColor"><div className="font-bold text-primaryColor">Edad:</div>Senior</div> 
          <div className="flex gap-1  text-primaryColor"><div className="font-bold text-primaryColor">Edad Aproximada:</div>14 Años</div>
        </div>
      </div>
    </>
  );
};

export default AnimalPrimaryInfo;
