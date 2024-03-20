import React, { useState, useEffect } from 'react';
import UseApi from '../../services/UseApi';
import { useNavigate } from 'react-router-dom';

const UserRegister = ({ onSubmit }) => {
  const navigate = useNavigate();
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState(""); 
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchProvinces = async () => {
          try {
            const fetchedProvinces = await UseApi.getProvinces();
            setProvinces(fetchedProvinces);
          } catch (error) {
            console.error("Error al obtener las provincias:", error);
          }
        };
    
        fetchProvinces();
      }, []);

    const [userData, setUserData] = useState({
      role_id:2,
      name: '',
      type:null,
      email: '',
      address: '',
      province_id:null,
      description:null,
      telephone:'',
      image_url:null,
      public_id:null,
      password: '',
      password_confirmation: ''
    });
  
    const handleChange =  (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };

    const handleProvinceChange = (e) => {
      const value = parseInt(e.target.value, 10);
      setSelectedProvince(value); // Asignamos el valor convertido a número
      setUserData({ ...userData, province_id: value }); // Asignamos el valor convertido a userData
    };

    const handlePasswordConfirmationChange = (e) => {
      const value = e.target.value;
      setPasswordConfirmation(value);
      setUserData((prevUserData) => ({ ...prevUserData, password_confirmation: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // Validar la contraseña y la confirmación de contraseña
          if (userData.password !== passwordConfirmation) {
            setErrorMessage(
                "La contraseña y su verificacion no coinciden. Por favor, verifica tus credenciales."
              );
          }
          setUserData({ ...userData, province_id: selectedProvince });
          console.log(userData);
          const response = await UseApi.register(userData);
          console.log('Usuario registrado correctamente:', response);
          
          const loginCredentials = { email: userData.email, password: userData.password };
          const loginResponse = await UseApi.login(loginCredentials);
          console.log('Inicio de sesión automático exitoso:', loginResponse);
          const { token, role } = loginResponse;

          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          
          navigate('/UserHome');
        } catch (error) {
          console.error('Error al registrar usuario o iniciar sesión automáticamente:', error);
          // Manejar el error
        }
    };
  
    return (
        <div className="w-[90%] lg:w-[50%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
            {errorMessage && (
        <div className="text-red-700 bg-red-300 p-3 rounded">
          {errorMessage}
        </div>
      )}

        <h2 className="text-2xl font-semibold mb-4">Regístrate</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre:
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" 
              type="text" 
              name="name" 
              value={userData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" 
              type="email" 
              name="email" 
              value={userData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Dirección:
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address" 
              type="text" 
              name="address" 
              value={userData.address} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province_id">
              Provincia:
            </label>
            <select
              id="province_id"
              name="province_id"
              value={selectedProvince}
              onChange={handleProvinceChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option disabled>Escoge una</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>{province.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
              Telefono:
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telephone" 
              type="text" 
              name="telephone" 
              value={userData.telephone} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña:
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" 
              type="password" 
              name="password" 
              value={userData.password} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirmation">
              Confirmar Contraseña:
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password_confirmation" 
              type="password" 
              name="password_confirmation" 
              value={passwordConfirmation} 
              onChange={handlePasswordConfirmationChange} 
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryColor-light hover:to-secondaryColor-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    );
};

export default UserRegister;
