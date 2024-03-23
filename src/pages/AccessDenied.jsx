import React from "react";
import { FaDog } from "react-icons/fa"; // Importa el ícono de un perro desde react-icons/fa

const AccessDenied = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center items-center">
          <FaDog className="h-12 w-12 text-red-500" /> {/* Ícono de un perro */}
          <h1 className="ml-4 text-2xl font-bold text-gray-800">Acceso Denegado</h1>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Lo siento, no tienes permiso para acceder a esta página.
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;
