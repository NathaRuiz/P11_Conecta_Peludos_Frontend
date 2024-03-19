import React from 'react'

const Search = ({ onSearchChange }) => {
  return (
    <>
    <div className="my-4 relative flex w-[90%] sm:w-2/3 md:w-1/2 lg:w-[20%] shadow-md border-2 rounded-full">
      <input
        type="search"
        className="relative m-0 -me-0.5 block flex-auto rounded-full bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-400 dark:autofill:shadow-autofill"
        placeholder="Buscar palabra clave"
        aria-label="Buscar"
        id="exampleFormControlInput3"
        aria-describedby="button-addon3"
        onChange={onSearchChange} 
      />
      <button
        className="z-[2] inline-block rounded-full bg-primaryColor  shadow-xl px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-900 active:text-primary-70"
        data-twe-ripple-init
        data-twe-ripple-color="white"
        type="button"
        id="button-addon3"
      >
        Buscar
      </button>
    </div>
  </>
  )
}

export default Search