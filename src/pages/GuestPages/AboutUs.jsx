import React from "react";
import Logo from "../../assets/images/Logo-Blanco.svg";
import AdoptMe from "../../assets/images/AdoptMe.jpg";
import StepperAdopt from "../../components/stepper/StepperAdopt";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";


const AboutUs = () => {
  return (
    <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-2  m-auto">
      <h1 className="text-primaryColor font-bold text-center">
        Sobre Nosotros
      </h1>
      <div className="lg:w-[80%] m-auto flex flex-col lg:flex-row justify-between mt-3">
        <div className="bg-primaryColor lg:w-[20%] p-5 rounded-2xl shadow-xl">
          <img src={Logo} alt="Logo" className=" w-full rounded-lg" />
        </div>
        <div className="bg-secondaryColor lg:w-[75%] p-5 rounded-2xl shadow-xl text-white">
          <h2 className="font-bold my-3">Nuestra Misión</h2>
          <p className="font-semibold">
            En Conecta Peludos estamos comprometidos con la causa de conectar a
            los animales necesitados con hogares amorosos. Nuestra misión es
            proporcionar una plataforma segura y efectiva que facilite la
            adopción responsable de mascotas y promueva la conexión entre
            refugios, protectoras y amantes de los animales.
          </p>
        </div>
      </div>
      <div className="lg:w-[80%] m-auto flex flex-col lg:flex-row justify-between mt-3">
        <div className="bg-quarteryColor lg:w-[75%] p-5 rounded-2xl shadow-xl text-primaryColor">
          <h2 className="font-bold my-3">Historia de Inicio</h2>
          <p className="font-semibold">
            Todo comenzó con la visión de Nathalia Ruiz y su familia, quienes
            soñaban con crear un espacio en línea donde los refugios y
            protectoras pudieran llegar a una audiencia más amplia y donde las
            personas pudieran encontrar fácilmente a su compañero peludo ideal.
            Desde entonces, hemos crecido y evolucionado, pero nuestra pasión
            por hacer una diferencia en la vida de los animales sigue siendo el
            corazón de nuestro proyecto
          </p>
        </div>
        <div className="lg:w-[20%]  rounded-2xl shadow-xl">
          <img src={AdoptMe} alt="AdoptMe" className=" w-full rounded-lg" />
        </div>
      </div>

      <div className="lg:w-[80%] bg-tertiaryColor  m-auto p-5 rounded-2xl shadow-xl text-primaryColor mt-3">
        <h2 className="font-bold my-3">Nuestro Compromiso</h2>
        <p className="font-semibold">
          En Conecta Peludos, nos comprometemos a promover la adopción
          responsable, educar a la comunidad sobre el cuidado adecuado de
          mascotas y apoyar a refugios y protectoras en su valioso trabajo.
          Creemos en la conexión única entre humanos y animales, y trabajamos
          cada día para hacer posible que más animales encuentren un hogar lleno
          de amor.
        </p>
        <h2 className="font-bold my-3">Equipo</h2>
        <p className="font-semibold">
          Nuestro equipo está formado por apasionados amantes de los animales y
          desarrolladores comprometidos. Juntos, colaboramos para crear y
          mantener una plataforma que marque la diferencia en la vida de los
          animales necesitados.
        </p>
        <h2 className="font-bold my-3">Compromiso con la Transparencia</h2>
        <p className="font-semibold">
          En Conecta Peludos, valoramos la transparencia. Trabajamos
          diligentemente para garantizar que todas las interacciones en nuestra
          plataforma sean seguras y éticas. Nos esforzamos por proporcionar
          información clara sobre cómo funcionamos y cómo puedes participar en
          nuestra misión.
        </p>
      </div>
      <div className="w-full">
        <StepperAdopt/>
      </div>
      <div className=" lg:w-[85%] m-auto">
      <h2 className="font-bold text-center text-primaryColor">
        Información de Contaco
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap justify-around gap-2 text-secondaryLetterColor my-5">
        <div className="bg-white shadow-xl rounded-xl hover:text-white hover:bg-primaryColor p-10 text-center flex items-center gap-2">
          <HiOutlineMail />
          <p className="">
            conecta_peludos@example.com
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-xl hover:text-white hover:bg-primaryColor p-10 text-center flex items-center gap-2">
          <LuPhone />
          <p className="">
            +34 644 33 22 11
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-xl hover:text-white hover:bg-primaryColor p-10 text-center flex items-center gap-2">
          <IoLocationOutline />
          <p className="">
            Calle Ejemplo Pamplona - Navarra
          </p>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default AboutUs;
