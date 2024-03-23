import React, { useState, useEffect } from "react";
import UseApi from "../../services/UseApi";
import AnimalCard from "../../components/cards/AnimalCard";
import Pagination from "../../components/pagination/Pagination";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; 

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesData = await UseApi.getFavorites();
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error al obtener los animales favoritos:", error);
      }
    };

    fetchFavorites();
  }, [favorites]);

  
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  
  const currentFavorites = favorites.slice(startIndex, endIndex);

  return (
    <div className="mt-[120px] lg:mt-[100px] w-[90%] m-auto flex flex-col gap-2">
      <h2 className="text-xl text-primaryColor text-center font-bold mb-4">Mis Favoritos</h2>
      <div className="flex flex-col justify-around items-center my-8">
        <div className="flex flex-wrap gap-x-10 gap-y-8 lg:gap-x-24 lg:w-[70%] justify-around">
          {currentFavorites.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        <Pagination
          totalItems={favorites.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Favorites;
