import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseApi from "../../services/UseApi";
import ShelterCard from "../../components/cards/ShelterCard";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search"; 
import BannerUneteD from '../../assets/images/Banner-Unete-Desktop.svg'
import BannerUneteM from '../../assets/images/Banner-Unete-Mobile.svg'
import { useMediaQuery } from 'react-responsive';

const Shelters = () => {
  const [shelters, setShelters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda
  const [provinces, setProvinces] = useState([]);
  const itemsPerPage = 6;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const fetchedShelters = await UseApi.getShelters();
        setShelters(fetchedShelters);
      } catch (error) {
        console.error("Error al obtener los refugios:", error);
      }
    };

    const fetchProvinces = async () => {
      try {
        const fetchedProvinces = await UseApi.getProvinces();
        setProvinces(fetchedProvinces);
      } catch (error) {
        console.error("Error al obtener las provincias:", error);
      }
    };

    fetchShelters();
    fetchProvinces();
  }, []);

  // Obtener el nombre de la provincia para cada refugio
  const getProvinceName = (provinceId) => {
    const province = provinces.find((p) => p.id === provinceId);
    return province ? province.name : "Provincia Desconocida";
  };

  // Calcular los índices de inicio y fin para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let filteredShelters = shelters;

  // Aplicar filtro por provincia
  if (selectedProvince !== "") {
    filteredShelters = shelters.filter(shelter => shelter.province_id.toString() === selectedProvince);
  }

  // Aplicar filtro por término de búsqueda
  if (searchTerm !== "") {
    filteredShelters = filteredShelters.filter(shelter =>
      shelter.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const currentShelters = filteredShelters.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setCurrentPage(1); // Resetear la página cuando se cambia la provincia seleccionada
  };

  // Manejar el cambio en el término de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Resetear la página cuando se cambia el término de búsqueda
  };

  return (
    <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-2">
      <div className="lg:w-[70%] m-auto ">
        <h2 className="text-primaryColor font-bold mt-3 mb-5 w-full lg:text-xl text-center">
          Protectoras y refugios
        </h2>
        <div className="flex flex-wrap items-center justify-center lg:justify-normal gap-2">
          <label htmlFor="province" className="text-primaryColor font-bold">Provincia:</label>
          <select
            id="province"
            name="province"
            value={selectedProvince}
            onChange={handleProvinceChange}
            className="px-2 py-1 border border-gray-200 rounded-2xl"
          >
            <option value="">Todas las provincias</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>{province.name}</option>
            ))}
          </select>
           <Search onSearchChange={handleSearchChange} /> 
        </div>
      </div>

      <div className="flex flex-col justify-around items-center my-8">
        <div className="flex flex-wrap gap-x-10 gap-y-8 lg:gap-x-24 lg:w-[70%] justify-around">
          {currentShelters.map((shelter) => (
            <ShelterCard
              key={shelter.id}
              shelter={{ ...shelter, province: getProvinceName(shelter.province_id) }}
            />
          ))}
        </div>
        <Pagination
          totalItems={filteredShelters.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="cursor-pointer">
        {isMobile ? (
          <Link to={`/sobreNosotros`}>
            <img
              src={BannerUneteM}
              alt="Banner"
              className="w-full h-auto m-auto"
            />
          </Link>
        ) : (
          <img
            src={BannerUneteD}
            alt="Banner"
            className="w-[90%] h-auto m-auto"
          />
        )}
      </div>
    </div>
  );
};

export default Shelters;
