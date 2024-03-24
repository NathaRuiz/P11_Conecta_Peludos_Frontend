import React, { useState, useEffect } from "react";
import UseApi from "../../services/UseApi";
import ProfileCard from "../../components/cards/ProfileCard";

const AdminPerfil = () => {
  const [userData, setUserData] = useState(null);
  const [province, setProvince] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await UseApi.getUserData();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const allProvinces = await UseApi.getProvinces();
        const myProvince = allProvinces.find(
          (p) => p.id === userData.province_id
        );
        setProvince(myProvince);
      } catch (error) {
        setError(error);
      }
    };

    if (userData) {
      fetchProvinces();
    }
  }, [userData]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-[120px] lg:mt-[100px] w-[90%] m-auto flex flex-col gap-2 items-center">
        <ProfileCard userData={userData} province={province}/>
    </div>
  );
};

export default AdminPerfil;
