import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../services/UseApi";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimalPrimaryInfo from "../../components/cards/AnimalPrimaryInfo";
import AnimalSecondaryInfo from "../../components/cards/AnimalSecondaryInfo";

const ShowAnimal = () => {
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
  // const [animals, setAnimals] = useState([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const fetchedAnimals = await UseApi.getShelterAnimals();
  //             setAnimals(fetchedAnimals);

  //           } catch (error) {
  //             console.error("Error al obtener datos:", error);
  //             setErrorMessage(
  //               "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
  //             );
  //           }
  //         };
  //     fetchData();
  //   }, []);

  const deleteAnimal = async (id) => {
    // Mostrar alerta de confirmación
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto?"
    );

    if (confirmDelete) {
      try {
        await UseApi.deleteAnimal(id);

        // Actualizar la lista de productos después de la eliminación
        // setAnimals((prevAnimals) =>
        // prevAnimals.filter((animal) => animal.id !== id)
        // );

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
                className="lg:w-[22%] w-full rounded-lg"
              />
              <AnimalPrimaryInfo
                animal={animalData.animal}
                province={animalData.province}
              />
            </div>
            <div className="flex flex-wrap justify-between gap-2  w-[90%] m-auto">
              <AnimalSecondaryInfo animal={animalData.animal} />
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
