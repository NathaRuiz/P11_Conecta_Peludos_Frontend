import React, { useState, useEffect } from 'react';
import UseApi from '../../services/UseApi';
import ShelterInfoCard from '../../components/cards/ShelterInfoCard';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [province, setProvince] = useState([]);
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
    const backgroundColor =
    userData && userData.type === "Protectora"
      ? "bg-tertiaryColor"
      : "bg-quarteryColor";
  
    return (
        <div className="mt-[120px] lg:mt-[100px] flex flex-col lg:flex-row m-auto w-[90%] gap-2 justify-between">
             <img
              src={userData.image_url}
              alt={userData.name}
              className="lg:w-[20%] w-full rounded-lg"
            />
            <ShelterInfoCard shelter={userData} province={province}/>
      </div>
    );
  };

export default Profile