import React from 'react'

const ProfileCard = ({userData, province}) => {
  return (
    <div className="bg-white shadow-2xl w-[50%] flex flex-col items-center gap-4 py-4 rounded-lg">
        <h2 className="text-xl font-semibold">{userData.name}</h2>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Dirección:</strong> {userData.address}
        </p>
        <p>
          <strong>Provincia:</strong> {province ? province.name : ""}
        </p>
        <p>
          <strong>Teléfono:</strong> {userData.telephone}
        </p>
    </div>
  )
}

export default ProfileCard