import React, { useState, useEffect } from "react";
import UseApi from "../../services/UseApi";
import { useParams, useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    type: "",
    email: "",
    address: "",
    province_id: "",
    description: "",
    telephone: "",
    image_url: "",
    
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
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleProvinceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSelectedProvince(value); 
    setUserData({ ...userData, province_id: value }); 
  };

  const handleImageChange = (e) => {
    setErrorMessage("");
    const file = e.target.files[0];
    
    if (file.type.startsWith("image/")) {
      setUserData({ ...userData, image_url: file });
      console.log(file.type);
    } else {
      setErrorMessage("El archivo seleccionado no es una imagen.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });

    try {
      const response = await UseApi.profileUpdate(formData);
      navigate(`/shelter/perfil`);
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
            htmlFor="type"
          >
            Tipo:
          </label>
          <select
            id="type"
            name="type"
            value={userData && userData.type ? userData.type : ""}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona el tipo</option>
            <option value="Protectora">Protectora</option>
            <option value="Refugio">Refugio</option>
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            value={userData && userData.description ? userData.description : ""}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image_url"
          >
            Imagen/Logo:
          </label>
          <input
            id="image_url"
            name="image_url"
            type="file"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
  );
};

export default ProfileUpdate;
