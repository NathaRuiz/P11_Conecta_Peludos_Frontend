import React, { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import UseApi from "../../services/UseApi";

const AnimalCard = ({ animal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [shelterData, setShelterData] = useState(null);
  const [showRegisterMessage, setShowRegisterMessage] = useState(false);

  useEffect(() => {
    const fetchShelterData = async () => {
      try {
        const fetchedData = await UseApi.getShelterDataById(animal.user_id);
        setShelterData(fetchedData);
      } catch (error) {
        console.error("Error al obtener información del refugio:", error);
      }
    };

    fetchShelterData();

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
  }, [animal.id, animal.user_id]);

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


  const getStatusColor = () => {
    switch (animal.status) {
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

  const handleRegisterMessageClick = () => {
    // Ocultar el mensaje de registro al hacer clic en él
    setShowRegisterMessage(false);
  };

  return (
    <div
      className="relative w-[70%] md:w-1/4 lg:w-1/5 bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-gray-500"
    >
      {showRegisterMessage && (
        <div className="absolute top-5 left-0 right-0 bg-red-500 text-white py-2 px-4 text-center" onClick={handleRegisterMessageClick}>
          Regístrate como usuario para poder agregar a tus favoritos. ¡Es gratis y solo toma un minuto!
        </div>
      )}
      <div
        className={`absolute top-0 right-0 ${getStatusColor()} font-bold px-2 py-1 rounded-bl`}
      >
        {animal.status}
      </div>
      <img className="w-full" src={animal.image_url} alt={animal.name} />
      <div className="px-3 py-4 ">
        <Link to={`/animal/${animal.id}`} className="cursor-pointer">
        <div className="font-bold text-secondaryLetterColor lg:text-lg text-xl mb-2  hover:text-primaryColor">
          {animal.name}
        </div>
        </Link>
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center">
            <IoLocationOutline className="text-secondaryLetterColor" />
            <p className="text-secondaryLetterColor lg:text-xs text-sm">
              {shelterData && shelterData.province && shelterData.province.name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {animal.gender === "Macho" ? (
              <IoMdMale className="text-blue-800 size-6 bg-male rounded-full p-1" />
            ) : (
              <IoMdFemale className="text-pink-600 size-6 bg-female rounded-full p-1" />
            )}
            <span
              className="cursor-pointer text-gray-700 text-xl"
              role="img"
              aria-label="Favorite"
              onClick={(e) => {
                e.stopPropagation(); // Detener la propagación del evento
                toggleFavorite(); // Llamar a la función toggleFavorite
              }}
            >
              {isFavorite ? (
                <MdFavorite className="text-secondaryColor size-8 lg:size-6" /> // Corazón relleno
              ) : (
                <MdFavoriteBorder className="size-8 lg:size-6" /> // Corazón sin relleno
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
