import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../services/UseApi";

const Contact = () => {
  const { id } = useParams(); 
  const [animal, setAnimal] = useState(null);
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const fetchAnimalDetails = async () => {
      try {
        const fetchedAnimal = await UseApi.getAnimalDataById(id);
        setAnimal(fetchedAnimal);
      } catch (error) {
        console.error("Error al obtener los detalles del animal:", error);
      }
    };

    fetchAnimalDetails();
  }, [id]);

  const handleSendMessage = async () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
  
    if (!token || role !== "User") return console.error("No se pudo enviar el mensaje debido a permisos insuficientes o falta de autenticación.");
  
    try {
      await UseApi.sendMessageToShelter(id, message);
      setMessageSent(true);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div className="mt-[120px] lg:mt-[100px] flex flex-col lg:flex-row  justify-around w-[90%] m-auto gap-2 text-primaryColor">
      
      {!messageSent && animal ? (
        <>
          <div className="flex flex-col justify-between gap-4 lg:w-[40%] w-full bg-white rounded-lg overflow-hidden shadow-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Opciones de Interacción:</h2>
            <p>
              ¡Has expresado tu interés en <span className="font-bold text-disponible">{animal.animal.name}</span> ! A continuación, te presentamos algunas opciones para que decidas cómo deseas interactuar con este adorable amigo peludo:
            </p>
            <ul>
              <li><span className="font-bold">Adoptar:</span> ¿Estás listo para brindarle a {animal.animal.name} un hogar permanente lleno de amor?</li>
              <li><span className="font-bold">Acoger Temporalmente:</span> ¿No puedes comprometerte a la adopción permanente, pero aún así quieres ayudar? Considera acoger temporalmente a {animal.animal.name}.</li>
              <li><span className="font-bold">Realizar una Donación: </span>Si deseas apoyar al refugio o protectora ( <span className="font-bold text-adoptado">{animal.shelter.name}</span> ) pero no puedes adoptar o acoger a {animal.animal.name}, puedes realizar una donación para contribuir a su bienestar.</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:w-[40%] w-full bg-white rounded-lg overflow-hidden shadow-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Formulario de Mensaje:</h2>
            <p>
              Utiliza el siguiente formulario para enviar un mensaje a <span className="font-bold text-adoptado">{animal.shelter.name}</span> y expresar tus intenciones. Ellos te responderán vía email y aclararán todas tus dudas.
            </p>
            <div className="mt-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
                className="w-full border rounded p-2"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                onClick={handleSendMessage}
                className="text-white bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryColor-light hover:to-secondaryColor-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-green-600 font-semibold">
          ¡Mensaje enviado correctamente a {animal && animal.shelter.name}!
        </div>
      )}
    </div>
  );
};

export default Contact