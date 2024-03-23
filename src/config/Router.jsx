import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import React, { useState } from "react";
import Adopta from '../pages/GuestPages/Adopta' 
import Inicio from "../pages/GuestPages/Inicio";
import InfoAnimal from "../pages/GuestPages/InfoAnimal";
import InfoShelter from "../pages/GuestPages/InfoShelter";
import Shelters from "../pages/GuestPages/Shelters";
import NavbarGuest from "../components/navbars/NavbarGuest";
import AboutUs from "../pages/GuestPages/AboutUs";
import Learn from "../pages/GuestPages/Learn";
import Register from "../pages/GuestPages/Register";
import Login from "../pages/GuestPages/Login";
import UserHome from "../pages/UserPages/UserHome";
import NavbarUser from "../components/navbars/NavbarUser";
import NavbarShelter from "../components/navbars/NavbarShelter";
import AnimalsShelter from "../pages/ShelterPages/AnimalsShelter";
import Profile from "../pages/ShelterPages/Profile";
import EditAnimal from "../pages/ShelterPages/EditAnimal";
import CreateAnimal from "../pages/ShelterPages/CreateAnimal";
import ShowAnimal from "../pages/ShelterPages/ShowAnimal";
import Favorites from "../pages/UserPages/Favorites";
import UserProfile from "../pages/UserPages/UserProfile";
import Contact from "../pages/UserPages/Contact";
import AccessDenied from "../pages/AccessDenied";


const AdminRoute = ({ element }) => {
    const role = localStorage.getItem('role');
    return role === 'Admin' ? element : <Navigate to="/accesoDenegado" />;
  };
  
  const UserRoute = ({ element }) => {
    const role = localStorage.getItem('role');
    return role === 'User' ? element : <Navigate to="/accesoDenegado" />;
  };
  
  const ShelterRoute = ({ element }) => {
    const role = localStorage.getItem('role');
    return role === 'Shelter' ? element : <Navigate to="/accesoDenegado" />;
  };

  
  const Router = () => {
    const role = localStorage.getItem('role');
    let NavBar;
    switch (role) {
        case 'User':
            NavBar = NavbarUser;
            break;
        case 'Shelter':
            NavBar = NavbarShelter;
            break;
        case 'Admin':
            NavBar = NavbarAdmin;
            break;
        default:
            NavBar = NavbarGuest;
            break;
    }

    return (
    <BrowserRouter>
    <Routes>

        {/* Rutas publicas */}
        <Route path="/" element={<><NavbarGuest/> <Inicio/></>}></Route> 
        <Route path="/register" element={<><NavbarGuest/><Register/></>}></Route>
        <Route path="/login" element={<><NavbarGuest/><Login/></>}></Route>

        <Route path="/accesoDenegado" element={<><NavBar/><AccessDenied/></>}></Route>
        <Route path="/adopta" element={<><NavBar/><Adopta/></>}></Route> 
        <Route path="/protectoras&refugios" element={<><NavBar/><Shelters/></>}></Route>
        <Route path="/sobreNosotros" element={<><NavBar/><AboutUs/></>}></Route> 
        <Route path="/aprende" element={<><NavBar/><Learn/></>}></Route> 
        <Route path="/animal/:id" element={<><NavBar/><InfoAnimal/></>}></Route> 
        <Route path="/shelter/:id" element={<><NavBar/><InfoShelter/></>}></Route>

          
        {/* Rutas protegidas para User*/}
        <Route path="/UserHome" element={<UserRoute element={<><NavbarUser/><UserHome/></>} />} />
        <Route path="/user/favoritos" element={<UserRoute element={<><NavbarUser/><Favorites/></>} />} />
        <Route path="/user/perfil" element={<UserRoute element={<><NavbarUser/><UserProfile/></>} />} />
        <Route path="/user/contacta" element={<UserRoute element={<><NavbarUser/><Contact/></>} />} />

        {/* Rutas protegidas para Shelter*/}
        <Route path="/shelter/misAnimales" element={<ShelterRoute element={<><NavbarShelter/><AnimalsShelter/></>} />} />
        <Route path="/shelter/perfil" element={<ShelterRoute element={<><NavbarShelter/><Profile/></>} />} />
        <Route path="/shelter/editarAnimal/:id" element={<ShelterRoute element={<><NavbarShelter/><EditAnimal/></>} />} />
        <Route path="/shelter/registrarAnimal" element={<ShelterRoute element={<><NavbarShelter/><CreateAnimal/></>} />} />
        <Route path="/shelter/verAnimal/:id" element={<ShelterRoute element={<><NavbarShelter/><ShowAnimal/></>} />} />

      
    </Routes>
</BrowserRouter>
  )
}

export default Router