import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseApi from "../../services/UseApi";

const UserProfileUpdate = () => {
    const navigate = useNavigate();
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const [userData, setUserData] = useState({
      name: "",
      email: "",
      address: "",
      province_id: "",
      telephone: "",
    });
  
    useEffect(() => {
      const fetchProvinces = async () => {
        try {
          const fetchedProvinces = await UseApi.getProvinces();
          setProvinces(fetchedProvinces);
  
          const response = await UseApi.getUserData();
          setUserData(response);
        } catch (error) {
          console.error("Error al obtener los Datos:", error);
        }
      };
  
      fetchProvinces();
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  
    const handleProvinceChange = (e) => {
      const value = parseInt(e.target.value, 10);
      setSelectedProvince(value); 
      setUserData({ ...userData, province_id: value }); 
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await UseApi.userProfileUpdate(userData);
        navigate(`/user/perfil`);
      } catch (error) {
        setErrorMessage("Error al actualizar la información:");
      }
    };
  
    return (
      <div className="mt-[120px] lg:mt-[100px] w-[90%] lg:w-[50%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
        {errorMessage && (
          <div className="text-red-700 bg-red-300 p-3 rounded">
            {errorMessage}
          </div>
        )}
  
        <h2 className="text-2xl font-semibold text-primaryColor text-center mb-4">
          Editar Información
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre:
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={userData && userData.name ? userData.name : ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={userData && userData.email ? userData.email : ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Dirección:
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              name="address"
              value={userData && userData.address ? userData.address : ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="province_id"
            >
              Provincia:
            </label>
            <select
              id="province_id"
              name="province_id"
              value={
                userData && userData.province_id
                  ? userData.province_id
                  : selectedProvince
              }
              onChange={handleProvinceChange}
              required
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option disabled>Escoge una</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
         
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="telephone"
            >
              Telefono:
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telephone"
              type="text"
              name="telephone"
              value={userData && userData.telephone ? userData.telephone : ""}
              onChange={handleChange}
              required
            />
          </div>
          
          
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryColor-light hover:to-secondaryColor-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
  )
}

export default UserProfileUpdate