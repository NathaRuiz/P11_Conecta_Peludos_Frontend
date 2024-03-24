import React, { useState } from 'react';
import UserRegister from '../../components/forms/UserRegister';
import ShelterRegister from '../../components/forms/ShelterRegister';

const Register = () => {
  const [showUserForm, setShowUserForm] = useState(true);

  return (
    <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-4 items-center">
      <div className="flex gap-4">
        <button
          className={`bg-tertiaryColor hover:bg-emerald-400 text-primaryColor font-semibold px-4 py-2 rounded focus:outline-none ${showUserForm ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => setShowUserForm(true)}
          disabled={showUserForm}
        >
          Registrarse como Usuario
        </button>
        <button
          className={`bg-quarteryColor hover:bg-yellow-500 text-primaryColor font-semibold px-4 py-2 rounded focus:outline-none ${!showUserForm ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => setShowUserForm(false)}
          disabled={!showUserForm}
        >
          Registrarse como Protectora o Refugio
        </button>
      </div>
      {showUserForm ? <UserRegister /> : <ShelterRegister />}
    </div>
  );
};

export default Register;
