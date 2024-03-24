import React from 'react';

const Search = ({ onSearchChange }) => {
  return (
    <div className=" flex items-center w-[90%] sm:w-2/3 md:w-1/2 lg:w-[35%]">
      <input
        type="search"
        className="flex-auto rounded-full bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-400 dark:autofill:shadow-autofill border-2 border-gray-200 "
        placeholder="Buscar por palabra clave o nombre"
        aria-label="Buscar"
        id="exampleFormControlInput3"
        aria-describedby="button-addon3"
        onChange={onSearchChange} 
      />
    </div>
  );
};

export default Search;
