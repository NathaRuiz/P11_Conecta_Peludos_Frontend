import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryBtn = () => {
  return (
    <>
    <Link to="/register"
        type="button"
        className="text-white bg-secondaryColor hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-tertiaryColor font-medium rounded-3xl text-sm px-6 py-2 text-center"
      >
        Registrate
      </Link>
    </>
  )
}

export default SecondaryBtn