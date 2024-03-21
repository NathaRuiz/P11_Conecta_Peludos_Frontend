import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../services/UseApi";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowAnimal = () => {
    const {id} = useParams();
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedAnimals = await UseApi.getShelterAnimals();
                setAnimals(fetchedAnimals);

              } catch (error) {
                console.error("Error al obtener datos:", error);
                setErrorMessage(
                  "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
                );
              }
            };
        fetchData();
      }, []);
    
    
    const deleteAnimal = async (id) => {
        // Mostrar alerta de confirmación
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
      
        if (confirmDelete) {
          try {
            
            await UseApi.deleteAnimal(id);
      
            // Actualizar la lista de productos después de la eliminación
            setAnimals((prevAnimals) =>
            prevAnimals.filter((animal) => animal.id !== id)
            );
      
            console.log(`Animal con ID ${id} eliminado con éxito`);
          } catch (error) {
            console.error(`Error al eliminar el Animal con ID ${id}:`, error);
          }
        }
      };
  return (
    <div className="my-5 w-[90%] m-auto flex flex-col gap-2">
        <div className='flex flex-wrap justify-center items-center'>
        <Link to={`/shelter/editarAnimal/${id}`} ><FaEdit size={26} className="hover:text-yellow-500 text-secondaryLetterColor mx-1"/></Link>
        <button  onClick={() => deleteAnimal(id)}><FaTrashCan size={26} className="hover:text-red-500 mx-1 text-secondaryLetterColor"/></button> 
        </div>
    </div>
  )
}

export default ShowAnimal