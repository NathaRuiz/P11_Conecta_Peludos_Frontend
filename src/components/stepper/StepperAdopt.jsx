import React from "react";

const StepperAdopt = () => {
  return (
    <div className="my-8 mx-auto px-5 py-5 w-[90%] lg:w-[80%] bg-white rounded shadow-lg">
      <h2 className="text-primaryColor font-bold text-center">Pasos a Seguir</h2>
      <ol className="items-center my-10 space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        <li className="flex text-primaryColor space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-primaryColor rounded-full shrink-0 ">
            1
          </span>
          <span>
            <h3 className="font-semibold leading-tight mb-1">Busca</h3>
            <p className="text-md">
              Nuestra plataforma cuenta con una amplia variedad de animales.
              Utiliza nuestro filtro para personalizar tu búsqueda y encontrar
              el compañero perfecto que se adapte a tus necesidades
            </p>
          </span>
        </li>
        <li className="flex text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          <span>
            <h3 className="font-semibold leading-tight mb-1">Contacta</h3>
            <p className="text-md">
              ¿Ya has encontrado el animal que te enamora? Clica en “Me
              Interesa” y contactarás directamente con la protectora (debes
              estar registrado para enviar mensajes).
            </p>
          </span>
        </li>
        <li className="flex text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          <span>
            <h3 className="font-semibold leading-tight mb-1">Adopta</h3>
            <p className="text-md">
              Una vez enviado el mensaje, la protectora contactará contigo para
              indicarte como adoptar o cualquier otro proceso en el que estes
              interesado.
            </p>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default StepperAdopt;
