import React from "react";
import PerroAdopcion from "../../assets/images/Perro-Adopcion.svg";

const InfoAdopt = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl w-[90%] lg:w-[80%] flex flex-col lg:flex-row flex-wrap m-auto justify-around py-5">
      <div className="lg:w-[40%]">
        <img src={PerroAdopcion} alt="Perro" />
      </div>
      <div className="lg:w-[40%] text-primaryColor py-5 px-7">
        <h2 className="font-bold mt-5 mb-8">¿Qué es la adopción responsable?</h2>
        <p className="La adopción responsable implica comprometerse a proporcionar un hogar amoroso y cuidadoso a un animal. Al adoptar, estás asumiendo la responsabilidad de su bienestar a lo largo de toda su vida. Aquí hay algunos principios clave de la adopción responsable:"></p>
        <ul className="text-sm list-disc ">
          <li className="mb-2">
            <span className="font-bold">Investigación Previa: </span>
            Antes de adoptar, investiga sobre la raza o especie para entender sus necesidades y comportamientos.
          </li>
          <li className="mb-2">
            <span className="font-bold">Compromiso a Largo Plazo: </span>
            La adopción es un compromiso a largo plazo. Asegúrate de estar listo para proporcionar amor y atención durante toda la vida de tu mascota.
          </li>
          <li className="mb-2">
            <span className="font-bold">Condiciones de Vida Adecuadas: </span>
            Asegúrate de que tu hogar y estilo de vida sean adecuados para la mascota que estás considerando adoptar.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoAdopt;
