import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseApi from "../../services/UseApi";
import { IoLocationOutline } from "react-icons/io5";

const ShelterCard = ({ shelter }) => {
  const [province, setProvince] = useState(null);
  const backgroundColor = shelter.type === "Protectora" ? "bg-tertiaryColor" : "bg-quarteryColor";

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const fetchedProvinces = await UseApi.getProvinces(); 
        const shelterProvince = fetchedProvinces.find(
          (province) => province.id === shelter.province_id
        );
        setProvince(shelterProvince);
      } catch (error) {
        console.error("Error al obtener las provincias:", error);
      }
    };

    fetchProvinces();
  }, [shelter.province_id]);

  return (
    <>
      <Link to={`/shelter/${shelter.id}`}  className="w-[70%] md:w-1/4 lg:w-1/5 bg-white rounded-xl overflow-hidden shadow-xl">
        <img className="w-full" src={shelter.image_url} alt={shelter.name} />
        <div className="px-3 py-5">
        <div className="font-bold text-secondaryLetterColor lg:text-[15px] text-xl mb-2">
            {shelter.name}
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex items-center">
              <IoLocationOutline className="text-secondaryLetterColor" />
              <p className="text-secondaryLetterColor lg:text-xs text-sm">
                {province ? province.name : "Cargando..."}
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-primaryColor mr-2 ${backgroundColor}`}>
                {shelter.type}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShelterCard;
