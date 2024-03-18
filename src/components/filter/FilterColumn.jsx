// import React, { useState } from "react";

// const FilterColumn = ({ provinces }) => {
//   const [selectedProvince, setSelectedProvince] = useState("");
//   const [selectedSex, setSelectedSex] = useState("");
//   const [selectedAge, setSelectedAge] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");

//   const handleProvinceChange = (e) => {
//     setSelectedProvince(e.target.value);
//   };

//   const handleSexChange = (e) => {
//     setSelectedSex(e.target.value);
//   };

//   const handleAgeChange = (e) => {
//     setSelectedAge(e.target.value);
//   };

//   const handleSizeChange = (e) => {
//     setSelectedSize(e.target.value);
//   };

//   const handleStatusChange = (e) => {
//     setSelectedStatus(e.target.value);
//   };

//   return (
//     <div className="flex flex-col gap-4 text-primaryColor bg-white shadow-lg p-4">
//       {/* Select para seleccionar la provincia */}
//       <p className="font-bold text-lg text-center">Filtros</p>
//       <p className="font-bold text-md">Provincia:</p>
//       <select
//         value={selectedProvince}
//         onChange={handleProvinceChange}
//         className="border p-2 rounded-lg"
//       >
//         <option value="">Seleccionar Provincia</option>
//         {/* {provinces.map((province) => (
//           <option key={province} value={province}>
//             {province}
//           </option>
//         ))} */}
//       </select>
//       <hr className=" border-gray-200 my-2" />
//       {/* Radio buttons para seleccionar el sexo */}
//       <div className=" flex flex-col gap-1">
//         <p className="font-bold text-md">Sexo:</p>
//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Macho"
//             name="sex"
//             value="Macho"
//             checked={selectedSex === "Macho"}
//             onChange={handleSexChange}
//           />
//           <label htmlFor="Macho">Macho</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Hembra"
//             name="sex"
//             value="Hembra"
//             checked={selectedSex === "Hembra"}
//             onChange={handleSexChange}
//           />
//           <label htmlFor="Hembra">Hembra</label>
//         </div>
//       </div>
//       <hr className=" border-gray-200 my-2" />
//       {/* Radio buttons para seleccionar la edad */}
//       <div className=" flex flex-col gap-1">
//         <p className="font-bold text-md">Edad:</p>
//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Cachorro"
//             name="age"
//             value="Cachorro"
//             checked={selectedAge === "Cachorro"}
//             onChange={handleAgeChange}
//           />
//           <label htmlFor="Cachorro">Cachorro</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Adulto"
//             name="age"
//             value="Adulto"
//             checked={selectedAge === "Adulto"}
//             onChange={handleAgeChange}
//           />
//           <label htmlFor="Adulto">Adulto</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Senior"
//             name="age"
//             value="Senior"
//             checked={selectedAge === "Senior"}
//             onChange={handleAgeChange}
//           />
//           <label htmlFor="Senior">Cachorro</label>
//         </div>
//       </div>
//       <hr className=" border-gray-200 my-2" />
//       {/* Radio buttons para seleccionar el tamaño */}
//       <div className=" flex flex-col gap-1">
//         <p className="font-bold text-md">Tamaño:</p>
//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Pequeño"
//             name="size"
//             value="Pequeño"
//             checked={selectedSize === "Pequeño"}
//             onChange={handleSizeChange}
//           />
//           <label htmlFor="Pequeño">Pequeño</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Mediano"
//             name="size"
//             value="Mediano"
//             checked={selectedSize === "Mediano"}
//             onChange={handleSizeChange}
//           />
//           <label htmlFor="Mediano">Mediano</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Grande"
//             name="size"
//             value="Grande"
//             checked={selectedSize === "Grande"}
//             onChange={handleSizeChange}
//           />
//           <label htmlFor="Grande">Grande</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Gigante"
//             name="size"
//             value="Gigante"
//             checked={selectedSize === "Gigante"}
//             onChange={handleSizeChange}
//           />
//           <label htmlFor="Gigante">Gigante</label>
//         </div>
//       </div>
//       <hr className=" border-gray-200 my-2" />
//       {/* Radio buttons para seleccionar el estado */}
//       <div className=" flex flex-col gap-1">
//         <p className="font-bold text-md">Estado:</p>
//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Disponible"
//             name="status"
//             value="Disponible"
//             checked={selectedStatus === "Disponible"}
//             onChange={handleStatusChange}
//           />
//           <label htmlFor="Disponible" className="bg-disponible px-1 py-0 rounded-lg">Disponible</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="En Acogida"
//             name="status"
//             value="En Acogida"
//             checked={selectedStatus === "En Acogida"}
//             onChange={handleStatusChange}
//           />
//           <label htmlFor="En Acogida" className="bg-acogida px-1 py-0 rounded-lg">En Acogida</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="urgente"
//             name="status"
//             value="urgente"
//             checked={selectedStatus === "urgente"}
//             onChange={handleStatusChange}
//           />
//           <label htmlFor="urgente" className="bg-urgente px-1 py-0 rounded-lg  text-white">Urgente</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Adoptado"
//             name="status"
//             value="Adoptado"
//             checked={selectedStatus === "Adoptado"}
//             onChange={handleStatusChange}
//           />
//           <label htmlFor="Adoptado" className="bg-adoptado px-1 py-0 rounded-lg">Adoptado</label>
//         </div>

//         <div className="flex gap-1">
//           <input
//             type="radio"
//             id="Reservado"
//             name="status"
//             value="Reservado"
//             checked={selectedStatus === "Reservado"}
//             onChange={handleStatusChange}
//           />
//           <label htmlFor="Reservado" className="bg-reservado text-primaryColor px-1 py-0 rounded-lg">Reservado</label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterColumn;
import React, { useState } from "react";

const FilterColumn = ({ provinces }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  const handleSexChange = (e) => {
    setSelectedSex(e.target.value);
  };

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <>
      <button
        className="text-white mt-2 bg-primaryColor hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
        type="button"
        onClick={toggleDrawer}
      >
        Mostrar filtros
      </button>

      <div
        id="drawer-contact"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform shadow-2xl ${
          isDrawerOpen ? "" : "-translate-x-full"
        } bg-white w-full md:w-80`}
        tabIndex="-1"
      >

<button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={toggleDrawer}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

         {/* Select para seleccionar la provincia */}
       <p className="font-bold text-lg text-center">Filtros</p>
       <p className="font-bold text-md">Provincia:</p>
       <select
         value={selectedProvince}
         onChange={handleProvinceChange}
         className="border p-2 rounded-lg"
       >
         <option value="">Seleccionar Provincia</option>
         {/* {provinces.map((province) => (
           <option key={province} value={province}>
             {province}
           </option>
         ))} */}
       </select>
       <hr className=" border-gray-200 " />
       {/* Radio buttons para seleccionar el sexo */}
       <div className=" flex flex-col gap-1">
         <p className="font-bold text-md">Sexo:</p>
         <div className="flex gap-1">
           <input
             type="radio"
             id="Macho"
             name="sex"
             value="Macho"
             checked={selectedSex === "Macho"}
             onChange={handleSexChange}
           />
           <label htmlFor="Macho">Macho</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Hembra"
             name="sex"
             value="Hembra"
             checked={selectedSex === "Hembra"}
             onChange={handleSexChange}
           />
           <label htmlFor="Hembra">Hembra</label>
         </div>
       </div>
       <hr className=" border-gray-200 my-2" />
       {/* Radio buttons para seleccionar la edad */}
       <div className=" flex flex-col gap-1">
         <p className="font-bold text-md">Edad:</p>
         <div className="flex gap-1">
           <input
             type="radio"
             id="Cachorro"
             name="age"
             value="Cachorro"
             checked={selectedAge === "Cachorro"}
             onChange={handleAgeChange}
           />
           <label htmlFor="Cachorro">Cachorro</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Adulto"
             name="age"
             value="Adulto"
             checked={selectedAge === "Adulto"}
             onChange={handleAgeChange}
           />
           <label htmlFor="Adulto">Adulto</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Senior"
             name="age"
             value="Senior"
             checked={selectedAge === "Senior"}
             onChange={handleAgeChange}
           />
           <label htmlFor="Senior">Cachorro</label>
         </div>
       </div>
       <hr className=" border-gray-200 my-2" />
       {/* Radio buttons para seleccionar el tamaño */}
       <div className=" flex flex-col gap-1">
         <p className="font-bold text-md">Tamaño:</p>
         <div className="flex gap-1">
           <input
             type="radio"
             id="Pequeño"
             name="size"
             value="Pequeño"
             checked={selectedSize === "Pequeño"}
             onChange={handleSizeChange}
           />
           <label htmlFor="Pequeño">Pequeño</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Mediano"
             name="size"
             value="Mediano"
             checked={selectedSize === "Mediano"}
             onChange={handleSizeChange}
           />
           <label htmlFor="Mediano">Mediano</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Grande"
             name="size"
             value="Grande"
             checked={selectedSize === "Grande"}
             onChange={handleSizeChange}
           />
           <label htmlFor="Grande">Grande</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Gigante"
             name="size"
             value="Gigante"
             checked={selectedSize === "Gigante"}
             onChange={handleSizeChange}
           />
           <label htmlFor="Gigante">Gigante</label>
         </div>
       </div>
       <hr className=" border-gray-200 my-2" />
       {/* Radio buttons para seleccionar el estado */}
       <div className=" flex flex-col gap-1">
         <p className="font-bold text-md">Estado:</p>
         <div className="flex gap-1">
           <input
             type="radio"
             id="Disponible"
             name="status"
             value="Disponible"
             checked={selectedStatus === "Disponible"}
             onChange={handleStatusChange}
           />
           <label htmlFor="Disponible" className="bg-disponible px-1 py-0 rounded-lg">Disponible</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="En Acogida"
             name="status"
             value="En Acogida"
             checked={selectedStatus === "En Acogida"}
             onChange={handleStatusChange}
           />
           <label htmlFor="En Acogida" className="bg-acogida px-1 py-0 rounded-lg">En Acogida</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="urgente"
             name="status"
             value="urgente"
             checked={selectedStatus === "urgente"}
             onChange={handleStatusChange}
           />
           <label htmlFor="urgente" className="bg-urgente px-1 py-0 rounded-lg  text-white">Urgente</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Adoptado"
             name="status"
             value="Adoptado"
             checked={selectedStatus === "Adoptado"}
             onChange={handleStatusChange}
           />
           <label htmlFor="Adoptado" className="bg-adoptado px-1 py-0 rounded-lg">Adoptado</label>
         </div>

         <div className="flex gap-1">
           <input
             type="radio"
             id="Reservado"
             name="status"
             value="Reservado"
             checked={selectedStatus === "Reservado"}
             onChange={handleStatusChange}
           />
           <label htmlFor="Reservado" className="bg-reservado text-primaryColor px-1 py-0 rounded-lg">Reservado</label>
         </div>
       </div>
      </div>
    </>
  );
};

export default FilterColumn;
