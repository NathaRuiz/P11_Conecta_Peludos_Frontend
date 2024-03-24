import React, { useState, useEffect } from "react";
import UseApi from "../../services/UseApi";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

const Animales = () => {
  const itemsPerPage = 4;

  const [animals, setAnimals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAnimals = await UseApi.getAnimals();
        setAnimals(fetchedAnimals);

        const fetchedCategories = await UseApi.getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setErrorMessage(
          "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); 
    setCurrentPage(0); 
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setCurrentPage(0); 
  };
  
  let filteredAnimals = animals;
  if (selectedCategory !== "") {
    filteredAnimals = filteredAnimals.filter(
      (animal) => animal.category_id.toString() === selectedCategory
    );
  }
  if (searchTerm !== "") {
    filteredAnimals = filteredAnimals.filter((animal) =>
      Object.values(animal).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
  
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentAnimals = filteredAnimals.slice(startIndex, endIndex);
  const deleteAnimal = async (id) => {
    
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este animal de los registros?");
  
    if (confirmDelete) {
      try {
        
        await UseApi.AdminDeleteAnimal(id);
  
       
        setAnimals((prevAnimals) =>
        prevAnimals.filter((animal) => animal.id !== id)
        );
        
        console.log(`Animal con ID ${id} eliminado con éxito`);
      } catch (error) {
        console.error(`Error al eliminar el Animal con ID ${id}:`, error);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
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


  return (
    <div className="mt-[120px] lg:mt-[100px] w-[90%] m-auto flex flex-col gap-2">
      <h2 className="text-2xl text-primaryColor font-bold mb-4">
        Listado de los Animales
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center w-[70%] gap-4 mb-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 border rounded bg-white"
        >
          <option value="">Todas las Categorías</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <Search onSearchChange={handleSearchChange} />
        </div>
        <Link
          to={`/admin/create/animal`}
          className="flex items-center gap-2 bg-quarteryColor text-primaryColor font-semibold py-2 px-4 rounded-xl text-center hover:bg-yellow-500 focus:outline-none focus:ring focus:border-yellow-600 self-end"
        >
          <IoMdAddCircle size={20}/>Registrar Animal
        </Link>
      </div>
      <div className="overflow-x-auto shadow-sm rounded-xl">
        <table className="w-full text-sm text-left bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Imagen</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Categoría</th>
              <th className="px-4 py-2">Raza</th>
              <th className="px-4 py-2">Sexo</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentAnimals.map((animal) => (
              <tr key={animal.id}>
                <td className="px-4 py-2">
                  <img
                    src={animal.image_url}
                    alt="animal"
                    style={{ maxWidth: "80px", maxHeight: "80px" }}
                  />
                </td>
                <td className="px-4 py-2">{animal.name}</td>
                <td className="px-4 py-2">
                  {categories.find(
                    (category) => category.id === animal.category_id
                  )?.name || "Desconocida"}
                </td>
                <td className="px-4 py-2">{animal.breed}</td>
                <td className="px-4 py-2">{animal.gender}</td>
                <td className="px-4 py-2"><span className={`px-1 py-1 text-primaryColor font-semibold rounded-lg ${getStatusColor(animal.status)}`}>{animal.status}</span></td>
                <td className="px-4 py-2 flex my-7">
                  <Link to={`/admin/edit/animal/${animal.id}`} ><FaEdit size={20} className="hover:text-yellow-500 text-secondaryLetterColor mx-1"/></Link>
                  <button  onClick={() => deleteAnimal(animal.id)}><FaTrashCan size={20} className="hover:text-red-500 mx-1 text-secondaryLetterColor"/></button>
                  <Link to={`/animal/${animal.id}`}><BiSolidShow size={24} className="hover:text-blue-500 mx-1 text-secondaryLetterColor"/></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredAnimals.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Animales;
