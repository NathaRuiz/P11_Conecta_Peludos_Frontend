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
import NavbarAdmin from "../components/navbars/NavbarAdmin";
import Animales from "../pages/AdminPages/Animales";
import Users from "../pages/AdminPages/Users";
import AdminShelters from "../pages/AdminPages/AdminShelters";
import AdminCreateAnimal from "../pages/AdminPages/AdminCreateAnimal";
import AdminEditAnimal from "../pages/AdminPages/AdminEditAnimal";
import AdminUserRegister from "../pages/AdminPages/AdminUserRegister";
import AdminShelterRegister from "../pages/AdminPages/AdminShelterRegister";
import AdminShelterEdit from "../pages/AdminPages/AdminShelterEdit";
import AdminEditUser from "../pages/AdminPages/AdminEditUser";
import AdminPerfil from "../pages/AdminPages/AdminPerfil";
import ProfileUpdate from "../pages/ShelterPages/ProfileUpdate";
import UserProfileUpdate from "../pages/UserPages/UserProfileUpdate";


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
        <Route path="/register" element={<><NavbarGuest/><Register/></>}></Route>
        <Route path="/login" element={<><NavbarGuest/><Login/></>}></Route>

        <Route path="/" element={<><NavBar/> <Inicio/></>}></Route> 
        <Route path="/accesoDenegado" element={<><NavBar/><AccessDenied/></>}></Route>
        <Route path="/adopta" element={<><NavBar/><Adopta/></>}></Route> 
        <Route path="/protectoras&refugios" element={<><NavBar/><Shelters/></>}></Route>
        <Route path="/sobreNosotros" element={<><NavBar/><AboutUs/></>}></Route> 
        <Route path="/aprende" element={<><NavBar/><Learn/></>}></Route> 
        <Route path="/animal/:id" element={<><NavBar/><InfoAnimal/></>}></Route> 
        <Route path="/shelter/:id" element={<><NavBar/><InfoShelter/></>}></Route>

          
        {/* Rutas protegidas para User*/}
        <Route path="/user/favoritos" element={<UserRoute element={<><NavbarUser/><Favorites/></>} />} />
        <Route path="/user/perfil" element={<UserRoute element={<><NavbarUser/><UserProfile/></>} />} />
        <Route path="/user/actualizar/perfil" element={<UserRoute element={<><NavbarUser/><UserProfileUpdate/></>} />} />
        <Route path="/user/contacta/:id" element={<UserRoute element={<><NavbarUser/><Contact/></>} />} />

        {/* Rutas protegidas para Shelter*/}
        <Route path="/shelter/misAnimales" element={<ShelterRoute element={<><NavbarShelter/><AnimalsShelter/></>} />} />
        <Route path="/shelter/perfil" element={<ShelterRoute element={<><NavbarShelter/><Profile/></>} />} />
        <Route path="/shelter/actualizar/perfil" element={<ShelterRoute element={<><NavbarShelter/><ProfileUpdate/></>} />} />
        <Route path="/shelter/editarAnimal/:id" element={<ShelterRoute element={<><NavbarShelter/><EditAnimal/></>} />} />
        <Route path="/shelter/registrarAnimal" element={<ShelterRoute element={<><NavbarShelter/><CreateAnimal/></>} />} />
        <Route path="/shelter/verAnimal/:id" element={<ShelterRoute element={<><NavbarShelter/><ShowAnimal/></>} />} />

        {/* Rutas protegidas para el Admin*/}
        <Route path="/admin/perfil" element={<AdminRoute element={<><NavbarAdmin/><AdminPerfil/></>} />} />
        <Route path="/admin/animales" element={<AdminRoute element={<><NavbarAdmin/><Animales/></>} />} />
        <Route path="/admin/create/animal" element={<AdminRoute element={<><NavbarAdmin/><AdminCreateAnimal/></>} />} />
        <Route path="/admin/edit/animal/:id" element={<AdminRoute element={<><NavbarAdmin/><AdminEditAnimal/></>} />} />
        <Route path="/admin/usuarios" element={<AdminRoute element={<><NavbarAdmin/><Users/></>} />} />
        <Route path="/admin/registrarUsuario" element={<AdminRoute element={<><NavbarAdmin/><AdminUserRegister/></>} />} />
        <Route path="/admin/editar/user/:id" element={<AdminRoute element={<><NavbarAdmin/><AdminEditUser/></>} />} />
        <Route path="/admin/protectoras&refugios" element={<AdminRoute element={<><NavbarAdmin/><AdminShelters/></>} />} />
        <Route path="/admin/registrar/p&r" element={<AdminRoute element={<><NavbarAdmin/><AdminShelterRegister/></>} />} />
        <Route path="/admin/editar/p&r/:id" element={<AdminRoute element={<><NavbarAdmin/><AdminShelterEdit/></>} />} />
      
    </Routes>
</BrowserRouter>
  )
}

export default Router