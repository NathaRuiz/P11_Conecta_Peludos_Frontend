import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../services/UseApi";
import NavbarGuest from "../../components/navbars/NavbarGuest";
import ShelterInfoCard from "../../components/cards/ShelterInfoCard"; // Importa la tarjeta del refugio
import AnimalCard from "../../components/cards/AnimalCard";
import Pagination from "../../components/pagination/Pagination";
import FilterColumn from "../../components/filter/FilterColumn";
import AnimalCategoryCard from "../../components/cards/AnimalCategoryCard";
import Search from "../../components/search/Search";

const InfoShelter = () => {
  const { id } = useParams();
  const [shelter, setShelter] = useState(null);
  const [province, setProvince] = useState(null);
  const [animals, setAnimals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener todos los refugios
        const allShelters = await UseApi.getShelters();
        console.log("Todos los refugios:", allShelters);

        const shelters = await UseApi.getShelters();
        // Convertir el ID a tipo numérico
        const shelterId = parseInt(id, 10);
        // Encontrar el refugio con el ID proporcionado en los parámetros de la URL
        const shelterOfInterest = shelters.find((s) => s.id === shelterId);
        setShelter(shelterOfInterest);

        const allProvinces = await UseApi.getProvinces();
        console.log("Todas las provincias:", allProvinces);

        if (shelterOfInterest) {
          // Obtener la provincia del refugio
          const allProvinces = await UseApi.getProvinces();
          console.log("Todas las provincias:", allProvinces);
          const provinceOfShelter = allProvinces.find(
            (province) => province.id === shelterOfInterest.province_id
          );
          console.log("Provincia del refugio:", provinceOfShelter);
          setProvince(provinceOfShelter);
          // Obtener todos los animales
          const allAnimals = await UseApi.getAnimals();
          console.log("Todos los animales:", allAnimals);

          // Filtrar los animales que pertenecen a este refugio
          const shelterAnimals = allAnimals.filter(
            (animal) => animal.user_id === shelterId
          );
          console.log("Animales del refugio:", shelterAnimals);

          setAnimals(shelterAnimals);
        }
      } catch (error) {
        console.error(
          "Error al obtener información del refugio o los animales:",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  const filterByCategory = (animal) => {
    // Si no hay una categoría seleccionada, retornar true para incluir todos los animales
    if (!selectedCategory) {
      return true;
    }
    // Filtrar los animales por categoría
    return animal.category_id === selectedCategory;
  };

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
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(searchText)
    );
  };

  // Aplicar el filtro de búsqueda de palabras clave a los animales
  const filteredAnimals = animals
    .filter(filterAnimals)
    .filter(filterByCategory);

  // Calcular el índice de inicio y fin para la página actual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener los animales de la página actual
  const currentAnimals = filteredAnimals.slice(startIndex, endIndex);

  return (
    <div className="lg:mt-[100px] gap-1 mt-[120px]">
      <NavbarGuest />
     
        {shelter && province && (
          <div className="flex flex-wrap  w-[90%] justify-around items-stretch m-auto">
            <img
              src={shelter.image_url}
              alt={shelter.name}
              className="lg:w-[22%] w-full rounded-lg"
            />
            <ShelterInfoCard shelter={shelter} province={province} />
          </div>
        )}
        <div className="w-[70%] m-auto">
          <AnimalCategoryCard
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
          <div className="flex flex-wrap justify-center mt-4 gap-8 ">
            <Search onSearchChange={handleSearchChange} />
            <FilterColumn />
          </div>
          <div className="flex flex-col justify-around items-center my-8">
            <div className="flex flex-wrap gap-x-10 gap-y-8 lg:gap-x-24 lg:w-[70%] justify-around">
              {currentAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
            <Pagination
              totalItems={filteredAnimals.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
      
    </div>
  );
};

export default InfoShelter;
