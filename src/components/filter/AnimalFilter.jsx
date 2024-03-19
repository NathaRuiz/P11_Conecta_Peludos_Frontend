import React, { useState, useEffect } from "react";
import UseApi from '../../services/UseApi';

const AnimalFilter = ({ onFilterChange }) => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [status, setStatus] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");

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

  const handleFilterChange = () => {
    const filters = {
      gender,
      age,
      size,
      status,
      province: selectedProvince
    };
    onFilterChange(filters);
  };

  return (
    <div className="flex flex-wrap gap-8 mb-6">
      <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)} className="bg-white shadow-lg rounded-lg px-2 py-1">
        <option value="">Seleccionar Provincia</option>
        {provinces.map((province) => (
          <option key={province.id} value={province.id}>{province.name}</option>
        ))}
      </select>
      <div className="bg-white shadow-lg rounded-lg px-2 py-1">
        <label>Sexo:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Cualquiera</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
      </div>
      <div className="bg-white shadow-lg rounded-lg px-2 py-1">
        <label>Edad:</label>
        <select value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="">Cualquiera</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Adulto">Adulto</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      <div className="bg-white shadow-lg rounded-lg px-2 py-1">
        <label>Tamaño:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Cualquiera</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
          <option value="Gigante">Gigante</option>
        </select>
      </div>
      <div className="bg-white shadow-lg rounded-lg px-2 py-1">
        <label>Estado:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Cualquiera</option>
          <option value="Disponible">Disponible</option>
          <option value="En Acogida">En Acogida</option>
          <option value="Urgente">Urgente</option>
          <option value="Adoptado">Adoptado</option>
          <option value="Reservado">Reservado</option>
        </select>
      </div>
      <button onClick={handleFilterChange} className="bg-primaryColor text-white shadow-lg rounded-lg px-2 py-1">Aplicar filtros</button>
    </div>
  );
};

export default AnimalFilter;
