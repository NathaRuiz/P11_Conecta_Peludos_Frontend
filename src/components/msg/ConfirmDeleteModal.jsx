import React from 'react';

const ConfirmDeleteModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
      <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" onClick={onCancel}></div>
      <div className="relative mx-auto max-w-sm p-6 bg-white rounded-lg shadow-xl">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-red-700">{message}</h3>
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              onClick={onConfirm}
            >
              Confirmar
            </button>
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              onClick={onCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
