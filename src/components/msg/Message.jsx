import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa';

const Message = ({message}) => {

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
    <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"></div>
    <div className="relative mx-auto max-w-sm p-6 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col items-center">
        <FaRegCheckCircle size={32} color="green" />

        <h3 className="text-lg font-semibold text-green-700">
          {message}
        </h3>
      </div>
    </div>
  </div>
  )
}

export default Message