import React, { useState, useEffect } from "react";
import UseApi from "../../services/UseApi";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

const AdminShelters = () => {
  const itemsPerPage = 4;

  const [shelters, setShelters] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedSherlters = await UseApi.getShelters();
        setShelters(fetchedSherlters);

        const fetchedProvinces = await UseApi.getProvinces();
        setProvinces(fetchedProvinces);
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

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setCurrentPage(0);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setCurrentPage(0);
  };

  let filteredShelters = shelters;
  if (selectedProvince !== "") {
    filteredShelters = filteredShelters.filter(
      (shelter) => shelter.province_id.id.toString() === selectedProvince
    );
  }
  if (searchTerm !== "") {
    filteredShelters = filteredShelters.filter((shelter) =>
      Object.values(shelter).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentShelters = filteredShelters.slice(startIndex, endIndex);
  const deleteShelter = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar esta Protectora/Refugio?"
    );

    if (confirmDelete) {
      try {
        await UseApi.deleteUser(id);

        setShelters((prevShelters) =>
          prevShelters.filter((shelter) => shelter.id !== id)
        );

        console.log(`Provincia/Refugio con ID ${id} eliminado con éxito`);
      } catch (error) {
        console.error(
          `Error al eliminar el Provincia/Refugio con ID ${id}:`,
          error
        );
      }
    }
  };

  return (
    <div className="mt-[120px] lg:mt-[100px] w-[90%] m-auto flex flex-col gap-2">
      <h2 className="text-2xl text-primaryColor font-bold mb-4">
        Listado de Pretectoras y Refugios
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center w-[70%] gap-4 mb-4">
          <select
            value={selectedProvince}
            onChange={handleProvinceChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Todas las Provincias</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
          <Search onSearchChange={handleSearchChange} />
        </div>
        <Link
          to={`/admin/registrar/p&r`}
          className="flex items-center gap-2 bg-quarteryColor text-primaryColor font-semibold py-2 px-4 rounded-xl text-center hover:bg-yellow-500 focus:outline-none focus:ring focus:border-yellow-600 self-end"
        >
          <IoMdAddCircle size={20} />
          Registrar Protectora/Refugio
        </Link>
      </div>
      <div className="overflow-x-auto shadow-sm rounded-xl">
        <table className="w-full text-sm text-left bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Imagen</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Tipo</th>
              <th className="px-4 py-2">Provincia</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentShelters.map((shelter) => (
              <tr key={shelter.id}>
                <td className="px-4 py-2">
                  <img
                    src={shelter.image_url}
                    alt="shelter"
                    style={{ maxWidth: "80px", maxHeight: "80px" }}
                  />
                </td>
                <td className="px-4 py-2">{shelter.name}</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-3 py-1 lg:text-xs text-sm font-semibold text-primaryColor mr-2 ${
                      shelter.type === "Protectora"
                        ? "bg-tertiaryColor"
                        : "bg-quarteryColor"
                    }`}
                  >
                    {shelter.type}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {provinces.find(
                    (province) => province.id === shelter.province_id.id
                  )?.name || "Desconocida"}
                </td>
                <td className="px-4 py-2 flex my-7">
                  <Link to={`/admin/edit/user/${shelter.id}`}>
                    <FaEdit
                      size={20}
                      className="hover:text-yellow-500 text-secondaryLetterColor mx-1"
                    />
                  </Link>
                  <button onClick={() => deleteShelter(shelter.id)}>
                    <FaTrashCan
                      size={20}
                      className="hover:text-red-500 mx-1 text-secondaryLetterColor"
                    />
                  </button>
                  <Link to={`/shelter/${shelter.id}`}>
                    <BiSolidShow
                      size={24}
                      className="hover:text-blue-500 mx-1 text-secondaryLetterColor"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredShelters.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AdminShelters;
