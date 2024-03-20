import React from 'react'
import UserRegister from '../../components/forms/UserRegister'
import ShelterRegister from '../../components/forms/ShelterRegister'

const Register = () => {
  return (
    <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-2">
        {/* <UserRegister/> */}
        <ShelterRegister/>
    </div>
  )
}

export default Register