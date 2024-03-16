import React from "react";

const PrimaryBtn = () => {
  return (
    <>
      <button
        type="button"
        className="text-white bg-primaryColor hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-tertiaryColor font-medium rounded-3xl text-sm px-6 py-2 text-center"
      >
        Entra
      </button>
    </>
  );
};

export default PrimaryBtn;
