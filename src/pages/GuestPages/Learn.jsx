import React from "react";
import InfoAdopt from "../../components/cards/InfoAdopt";
import { IoPaw } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa";
import Training from "../../assets/images/Dibujo-Training.svg";
import Grupo from "../../assets/images/Dibujo-Grupo.svg";

const Learn = () => {
  return (
    <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-5">
      <InfoAdopt />
      <div className="lg:w-[80%] m-auto flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[48%] bg-white rounded-lg shadow-xl text-primaryColor py-5 px-10">
          <h2 className="font-bold mt-5 mb-8">
            Consejos para el Cuidado Diario:
          </h2>
          <p className="text-sm mb-5">
            Proporcionar cuidados diarios adecuados es esencial para el
            bienestar de tu mascota. Aquí hay algunos consejos generales:
          </p>
          <ul className="text-sm list-disc ">
            <li className="mb-2 ml-8 mr-8">
              <span className="font-bold">Alimentación Balanceada: </span>
              Ofrece una dieta equilibrada y adecuada a las necesidades
              nutricionales de tu mascota
            </li>
            <li className="mb-2 ml-8  mr-8">
              <span className="font-bold"> Ejercicio Regular: </span>
              Proporciona oportunidades para el ejercicio diario. Esto es
              crucial para la salud física y mental de tu mascota.
            </li>
            <li className="mb-2 ml-8  mr-8">
              <span className="font-bold">Atención Veterinaria: </span>
              Programa visitas regulares al veterinario y asegúrate de mantener
              al día las vacunas y tratamientos preventivos.
            </li>
          </ul>

          <IoPaw className="m-auto mt-5 border border-secondaryLetterColor text-secondaryLetterColor p-1 rounded-full text-5xl" />
        </div>
        <div className="lg:w-[48%] bg-white rounded-lg shadow-xl text-primaryColor py-5 px-11">
          <h2 className="font-bold mt-5 mb-8">
            Señales de Bienestar y Problemas de Salud
          </h2>
          <p className="text-sm mb-5">
            Conocer las señales de bienestar y posibles problemas de salud es
            fundamental para proporcionar cuidados adecuados. Presta atención a:
          </p>
          <ul className="text-sm list-disc ">
            <li className="mb-2 ml-8 mr-7">
              <span className="font-bold">Comportamiento: </span>
              Comportamiento: Observa cambios en el comportamiento que podrían
              indicar incomodidad o enfermedad.
            </li>
            <li className="mb-2 ml-8  mr-7">
              <span className="font-bold"> Alimentación y Hidratación: </span>
              Monitorea los patrones de alimentación y asegúrate de que tu
              mascota esté bien hidratada.
            </li>
            <li className="mb-2 ml-8  mr-7">
              <span className="font-bold">Apariencia Física: </span>
              Examina regularmente la piel, el pelaje, los ojos, las orejas y la
              boca de tu mascota.
            </li>
          </ul>
          <FaBriefcaseMedical className="m-auto mt-5 border border-secondaryLetterColor text-secondaryLetterColor p-2 rounded text-5xl" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-xl w-[90%] lg:w-[80%] flex flex-col lg:flex-row flex-wrap m-auto  py-5">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[48%] text-primaryColor py-5 px-7">

          <h2 className="font-bold mt-5 mb-5">Entrenamiento Positivo:</h2>
          <p className="text-sm mb-5">
            Al utilizar el refuerzo positivo, los dueños de mascotas pueden
            construir una relación más fuerte y positiva con sus compañeros
            peludos, fomentando la confianza, el respeto y la comunicación
            efectiva.
          </p>
          <ul className="text-sm list-disc ">
            <li className="mb-2 ml-8  mr-8">
              <span className="font-bold">
                
                Recompensas y Reforzamiento Positivo:
              </span>
              Utiliza recompensas y reforzamiento positivo para el
              entrenamiento. Celebra los comportamientos deseables.
            </li>
            <li className="mb-2 ml-8  mr-8">
              <span className="font-bold"> Consistencia: </span>
              Sé consistente en tus expectativas y recompensas para ayudar a tu
              mascota a entender las reglas.
            </li>
          </ul>
          </div>
        <div className="lg:w-[48%]">
          <img src={Training} alt="Entrenando un Perro" />
        </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-xl w-[90%] lg:w-[80%] flex flex-col lg:flex-row flex-wrap m-auto justify-around py-5">
      <div className="lg:w-[50%]">
          <img src={Grupo} alt="Entrenando un Perro" />
        </div>
        <div className="lg:w-[48%] text-primaryColor py-5 px-6">
          <h2 className="font-bold mt-5 mb-5">Integración Exitosa:</h2>
          <p className="text-sm mb-5">
          Al brindar tiempo, atención y cuidado amoroso durante el período de integración, puedes establecer una base sólida para una relación duradera y satisfactoria con tu nueva mascota.
          </p>
          <ul className="text-sm list-disc ">
            <li className="mb-2 ml-8  mr-8">
              <span className="font-bold">
              Tiempo de Adaptación:
              </span>
              Dale a tu nueva mascota tiempo para adaptarse a su nuevo hogar. Sé paciente y proporciónale un entorno tranquilo.
            </li>
            <li className="mb-2 ml-8  mr-8">
              <span className="font-bold"> Socialización: </span>
               Socializa gradualmente a tu mascota con otras personas y animales. Esto es especialmente importante para perros y gatos.
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Learn;
