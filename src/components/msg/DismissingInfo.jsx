import React, { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbAlertTriangle } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const DismissingInfo = ({ message, type = 'info' }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const renderIcon = () => {
    switch (type) {
      case 'info':
        return <IoInformationCircleOutline size={38} color="blue" />;
      case 'alert':
        return <TbAlertTriangle size={32} color="orange" />;
      case 'error':
        return <BiErrorCircle size={32} color="red" />;
      default:
        return <FaRegCheckCircle size={32} color="green" />;
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
      <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"></div>
      <div className="relative mx-auto max-w-sm p-6 bg-white rounded-lg shadow-xl">
        <div className="flex justify-end w-full">
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="flex flex-col items-center">
          {renderIcon()}
          <h3 className="text-lg font-semibold text-center text-primaryColor mt-2">
            {message}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DismissingInfo;
