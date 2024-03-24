import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../services/UseApi";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AnimalPrimaryInfo from "../../components/cards/AnimalPrimaryInfo";
import AnimalSecondaryInfo from "../../components/cards/AnimalSecondaryInfo";

const ShowAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await UseApi.getShelterAnimalById(id);
        setAnimalData(fetchedData);
      } catch (error) {
        console.error("Error al obtener información:", error);
      }
    };

    fetchData();
  }, [id]);
  
  const deleteAnimal = async (id) => {
    // Mostrar alerta de confirmación
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este animal de tus registros?"
    );

    if (confirmDelete) {
      try {
        await UseApi.deleteAnimal(id);
        navigate(`/shelter/misAnimales`);
        console.log(`Animal con ID ${id} eliminado con éxito`);
      } catch (error) {
        console.error(`Error al eliminar el Animal con ID ${id}:`, error);
      }
    }
  };
  return (
    <div className="lg:mt-[100px] gap-1 mt-[120px] mb-8">
      <div className="">
        {animalData ? (
          <div>
            <div className="flex flex-wrap  w-[90%] justify-around items-start m-auto">
              <img
                src={animalData.animal.image_url}
                alt={animalData.animal.name}
                className="lg:w-[22%] w-full rounded-lg shadow-lg"
              />
              <AnimalPrimaryInfo
                animal={animalData.animal}
                province={animalData.province}
              />
            </div>
            <div className="flex flex-wrap lg:w-[90%] justify-around items-start m-auto">
              <AnimalSecondaryInfo animal={animalData.animal}/>
              <div className="flex flex-col items-center bg-white w-full lg:w-[20%] rounded-lg shadow-xl">
                <p className="text-primaryColor font-bold text-lg mt-5">Acciones a realizar</p>
                <div className="flex flex-wrap p-3 justify-center items-center m-auto">
                <Link to={`/shelter/editarAnimal/${id}`}>
                  <FaEdit
                    size={40}
                    className="hover:text-yellow-500 text-secondaryLetterColor mx-1"
                  />
                </Link>
                <button onClick={() => deleteAnimal(id)}>
                  <FaTrashCan
                    size={40}
                    className="hover:text-red-500 mx-1 text-secondaryLetterColor"
                  />
                </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Cargando información del animal...</p>
        )}
      </div>
    </div>
  );
};

export default ShowAnimal;
