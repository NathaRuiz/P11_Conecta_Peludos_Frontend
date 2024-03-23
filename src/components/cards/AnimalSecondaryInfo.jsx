import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import UseApi from "../../services/UseApi";

const AnimalSecondaryInfo = ({ animal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showRegisterMessage, setShowRegisterMessage] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const userRole = localStorage.getItem("role");
    
        if (token && userRole === "User") {
          const favorites = await UseApi.getFavorites();
          setIsFavorite(favorites.some((favorite) => favorite.id === animal.id));
        }
      } catch (error) {
        console.error("Error al verificar el estado de favorito:", error);
      }
    };

    checkFavoriteStatus(); // Verificar el estado de favorito al montar el componente
  }, [animal.id]);

  const toggleFavorite = async () => {
    
    try {
      const token = localStorage.getItem('token');
      const userRole = localStorage.getItem('role');
      
      if (!token || userRole !== 'User') {
        setShowRegisterMessage(true);
        return;
      }

      if (!isFavorite) {
        await UseApi.addToFavorites(animal.id);
      } else {
        await UseApi.removeFromFavorites(animal.id);
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error al cambiar el estado de favorito:', error);
     
    }
  };


  return (
    <>
      <div className="flex flex-col justify-between gap-4 lg:w-3/4 w-[90%] bg-white rounded-lg overflow-hidden shadow-md p-4 mb-4">
      {showRegisterMessage && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white py-2 px-4 text-center">
          Por favor, regístrate como usuario para poder agregar a tus favoritos. ¡Es gratis y solo toma un minuto!
        </div>
      )}
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
          <Link to={`/user/contacta/${animal.id}`}
            className="rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-white bg-primaryColor"
          >
            Estoy Interesado
          </Link>
        </div>
      </div>
    </>
  );
};

export default AnimalSecondaryInfo;
