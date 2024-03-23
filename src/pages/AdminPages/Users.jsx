import React, { useState, useEffect } from "react";
import UseApi from "../../services/UseApi";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";


const Users = () => {
  const itemsPerPage = 4;

  const [users, setUser] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await UseApi.getUsers();
        setUser(fetchedUsers);

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

  let filteredUsers = users;
  if (selectedProvince !== "") {
    filteredUsers = filteredUsers.filter(
      (user) => user.province_id.id.toString() === selectedProvince
    );
  }
  if (searchTerm !== "") {
    filteredUsers = filteredUsers.filter((user) =>
      Object.values(user).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentUsers = filteredUsers.slice(startIndex, endIndex);
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar esta Protectora/Refugio?"
    );

    if (confirmDelete) {
      try {
        await UseApi.deleteUser(id);

        setUser((prevUsers) =>
          prevUsers.filter((user) => user.id !== id)
        );

        console.log(`Usuario con ID ${id} eliminado con éxito`);
      } catch (error) {
        console.error(
          `Error al eliminar el Usuario con ID ${id}:`,
          error
        );
      }
    }
  };

  return (
    <div className="mt-[120px] lg:mt-[100px] w-[90%] m-auto flex flex-col gap-2">
      <h2 className="text-2xl text-primaryColor font-bold mb-4">
        Listado de Usuarios
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
          to={`/admin/create/user`}
          className="flex items-center gap-2 bg-quarteryColor text-primaryColor font-semibold py-2 px-4 rounded-xl text-center hover:bg-yellow-500 focus:outline-none focus:ring focus:border-yellow-600 self-end"
        >
          <IoMdAddCircle size={20} />
          Registrar Usuario
        </Link>
      </div>
      <div className="overflow-x-auto shadow-sm rounded-xl">
        <table className="w-full text-sm text-left bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Provincia</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">
                 {user.email}
                </td>
                <td className="px-4 py-2">
                  {provinces.find(
                    (province) => province.id === user.province_id.id
                  )?.name || "Desconocida"}
                </td>
                <td className="px-4 py-2 flex my-7">
                  <Link to={`/admin/edit/user/${user.id}`}>
                    <FaEdit
                      size={20}
                      className="hover:text-yellow-500 text-secondaryLetterColor mx-1"
                    />
                  </Link>
                  <button onClick={() => deleteUser(user.id)}>
                    <FaTrashCan
                      size={20}
                      className="hover:text-red-500 mx-1 text-secondaryLetterColor"
                    />
                  </button>
                  <Link to={`/admin/user/${user.id}`}>
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
        totalItems={filteredUsers.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Users