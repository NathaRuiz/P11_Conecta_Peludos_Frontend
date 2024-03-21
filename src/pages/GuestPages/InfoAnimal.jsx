import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../services/UseApi";
import AnimalPrimaryInfo from "../../components/cards/AnimalPrimaryInfo";
import AnimalSecondaryInfo from "../../components/cards/AnimalSecondaryInfo";
import ShelterAnimalCard from "../../components/cards/ShelterAnimalCard";

const InfoAnimal = ({link}) => {
  const { id } = useParams();
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await UseApi.getAnimalDataById(id);
        setAnimalData(fetchedData);
      } catch (error) {
        console.error("Error al obtener información:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="my-3">
      
      {animalData ? (
        <div className="lg:mt-[100px] gap-1 mt-[120px]">
          <div className="flex flex-wrap  w-[90%] justify-around items-start m-auto">
            <img
              src={animalData.animal.image_url}
              alt={animalData.animal.name}
              className="lg:w-[22%] w-full rounded-lg"
            />
            <AnimalPrimaryInfo
              animal={animalData.animal}
              province={animalData.province}
            />
          </div>
          <div className="flex flex-wrap gap-3 w-[91%] justify-around items-strech m-auto lg:gap-0">
            <AnimalSecondaryInfo animal={animalData.animal} />
            <ShelterAnimalCard
              shelter={animalData.shelter}
              province={animalData.province}
            />
          </div>
        </div>
      ) : (
        <p>Cargando información del animal...</p>
      )}
    </div>
  );
};

export default InfoAnimal;
