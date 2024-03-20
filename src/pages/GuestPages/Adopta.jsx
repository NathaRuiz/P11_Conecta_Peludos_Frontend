import React, { useState, useEffect } from "react";
import UseApi from '../../services/UseApi';
import AnimalCard from "../../components/cards/AnimalCard";
import FilterColumn from "../../components/filter/FilterColumn";
import AnimalCategoryCard from "../../components/cards/AnimalCategoryCard";
import Pagination from "../../components/pagination/Pagination";
import Search from '../../components/search/Search';
import BannerAmigoMasD from '../../assets/images/Banner-UnAmigo-Desktop.svg'
import BannerAmigoMasM from '../../assets/images/Banner-UnAmigo-Mobile.svg'
import { useMediaQuery } from 'react-responsive';


const Adopta = () => {
  const [animals, setAnimals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState(''); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const itemsPerPage = 6;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const fetchedAnimals = await UseApi.getAnimals(); 
        setAnimals(fetchedAnimals);
      } catch (error) {
        console.error("Error al obtener los animales:", error);
      }
    };
  
    fetchAnimals();
  }, []);
  
  const filterByCategory = (animal) => {
    // Si no hay una categoría seleccionada, retornar true para incluir todos los animales
    if (!selectedCategory) {
      return true;
    }
    // Filtrar los animales por categoría
    return animal.category_id === selectedCategory;
  };
  
  // Filtrar los animales por categoría después de recibirlos del backend
  const animalsFilteredByCategory = animals.filter(filterByCategory);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  
  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase()); 
  };
  
  // Filtrar los animales según el texto de búsqueda
  const filterAnimals = (animal) => {
    // Verificar si alguno de los atributos del animal incluye el texto de búsqueda
    return Object.values(animal).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(searchText)
    );
  };

  // Aplicar el filtro de búsqueda de palabras clave a los animales filtrados por categoría
  const filteredAnimals = animalsFilteredByCategory.filter(filterAnimals);

  // Calcular el índice de inicio y fin para la página actual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // Obtener los animales de la página actual
  const currentAnimals = filteredAnimals.slice(startIndex, endIndex);

  
  return (
    <>
      <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-2">
        
        <div className="w-[70%] m-auto">
          <AnimalCategoryCard onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        </div>
          <div className="flex flex-wrap mt-4 w-[70%] m-auto justify-center lg:justify-normal">
          <Search onSearchChange={handleSearchChange} />
          <FilterColumn />
          </div>
        <div className="flex flex-col justify-around items-center my-8">
          <div className="flex flex-wrap gap-x-10 gap-y-8 lg:gap-x-24 lg:w-[70%] justify-around">
            {currentAnimals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
          <Pagination 
            totalItems={filteredAnimals.length} 
            itemsPerPage={itemsPerPage} 
            onPageChange={handlePageChange} 
          />
        </div>
        <div>
          {isMobile ? (
            <img
              src={BannerAmigoMasM}
              alt="Banner"
              className="w-full h-auto m-auto"
            />
          ) : (
            <img
              src={BannerAmigoMasD}
              alt="Banner"
              className="w-[90%] h-auto m-auto"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Adopta;
