import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../services/UseApi";
import NavbarGuest from "../../components/navbars/NavbarGuest";
import AnimalPrimaryInfo from "../../components/cards/AnimalPrimaryInfo";
import AnimalSecondaryInfo from "../../components/cards/AnimalSecondaryInfo";
import ShelterAnimalCard from "../../components/cards/ShelterAnimalCard";

const InfoAnimal = () => {
  const { id } = useParams(); // Obtiene el ID del animal de los parámetros de la URL
  const [animal, setAnimal] = useState(null);
  const [shelter, setShelter] = useState(null);
  const [province, setProvince] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAnimal = await UseApi.getAnimalById(id);
        setAnimal(fetchedAnimal);
  
        const shelters = await UseApi.getShelters();
        const shelterOfAnimal = shelters.find(user => user.id === fetchedAnimal.user_id);
        setShelter(shelterOfAnimal);
  
        if (shelterOfAnimal) {
          const provinces = await UseApi.getProvinces();
          const provinceOfShelter = provinces.find(province => province.id === shelterOfAnimal.province_id);
          setProvince(provinceOfShelter);
        }
      } catch (error) {
        console.error("Error al obtener información:", error);
      }
    };
  
    fetchData();
  }, [id]);// Ejecuta la consulta cada vez que cambia el ID del animal

  return (
    <div className="my-3">
      <NavbarGuest />
      {animal ? (
        <div className="lg:mt-[100px] gap-1 mt-[120px]">
          <div className="flex flex-wrap  w-[90%] justify-around items-start m-auto">
            <img src={animal.image_url} alt={animal.name} className="lg:w-[22%] w-full rounded-lg" />
            <AnimalPrimaryInfo animal={animal} />
          </div>
          <div className="flex flex-wrap gap-3 w-[91%] justify-around items-strech m-auto lg:gap-0">
            <AnimalSecondaryInfo animal={animal} />
            <ShelterAnimalCard shelter={shelter}  province={province} />
          </div>
        </div>
      ) : (
        <p>Cargando información del animal...</p>
      )}
    </div>
  );
};

export default InfoAnimal;
