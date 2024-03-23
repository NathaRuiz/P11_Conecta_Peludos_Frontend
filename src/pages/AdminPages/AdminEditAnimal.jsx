import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UseApi from "../../services/UseApi";

const AdminEditAnimal = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      user_id:"",
      name: "",
      category_id: "",
      breed: "",
      gender: "",
      size: "",
      age: "",
      approximate_age: "",
      status: "",
      my_story: "",
      description: "",
      delivery_options: "",
      image_url: null,
    });

    const [categories, setCategories] = useState([]);
    const [shelters, setShelters] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
  
     useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await UseApi.getCategories();
        setCategories(fetchedCategories);

        const fetchedShelters = await UseApi.getShelters();
        setShelters(fetchedShelters);

        const fetchedAnimal = await UseApi.getAnimalById(id);
        setFormData(fetchedAnimal);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setErrorMessage(
          "Error al obtener los datos. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image_url: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos recibidos para la actualización:', formData);
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await UseApi.AdminUpdateAnimal(id, formDataToSend);
      navigate(`/animal/${id}`);
    } catch (error) {
      console.error("Error al actualizar animal:", error);
      setErrorMessage(
        "Error al actualizar animal. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className=" lg:mt-[100px] gap-1 mt-[120px] w-[90%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6 mb-5">
      {errorMessage && (
        <div className="text-red-700 bg-red-300 p-3 rounded">
          {errorMessage}
        </div>
      )}

      <h2 className="text-2xl font-semibold text-primaryColor mb-6">
        Crear Nuevo Animal
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
          <div className="mb-4">
          <label  className="block text-gray-700 text-sm font-bold mb-2"  
            htmlFor="user_id">
            Protectoras/Refugios:
            </label>
            <select
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            >
              <option value="">seleccione una</option>
              {shelters.map((shelter) => (
                <option key={shelter.id} value={shelter.id}>
                  {shelter.name}
                </option>
              ))}
            </select>
        </div>
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
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label  className="block text-gray-700 text-sm font-bold mb-2"  
            htmlFor="category_id">
            Categoria:
            </label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            >
              <option value="">seleccione una</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="breed"
          >
            Raza:
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="breed"
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Género:
          </label>
          <select
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            Tamaño:
          </label>
          <select
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
            <option value="Gigante">Gigante</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Edad:
          </label>
          <select
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Adulto">Adulto</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="approximate_age"
          >
            Edad Aproximada:
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="approximate_age"
            type="text"
            name="approximate_age"
            value={formData.approximate_age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Estado:
          </label>
          <select
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Urgente">Urgente</option>
            <option value="Disponible">Disponible</option>
            <option value="En Acogida">En Acogida</option>
            <option value="Reservado">Reservado</option>
            <option value="Adoptado">Adoptado</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="my_story"
          >
            Mi Historia:
          </label>
          <textarea
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="my_story"
            name="my_story"
            value={formData.my_story}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción:
          </label>
          <textarea
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="delivery_options"
          >
            Me Entregan:
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="delivery_options"
            type="text"
            name="delivery_options"
            value={formData.delivery_options}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image_url"
          >
            Imagen:
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image_url"
            type="file"
            accept="image/*"
            name="image_url"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="col-span-full text-center mt-6">
          <button
            type="submit"
            className="w-[50%] text-white bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryColor-light hover:to-secondaryColor-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Editar Animal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminEditAnimal