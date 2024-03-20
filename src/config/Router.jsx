import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
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
import MyViewPage from "../pages/ShelterPages/MyViewPage";
import ShelterAboutUs from "../pages/ShelterPages/ShelterAboutUs";


const AdminRoute = ({ element }) => {
    const role = localStorage.getItem('role');
    return role === 'Admin' ? element : <Navigate to="/login" />;
  };
  
  const UserRoute = ({ element }) => {
    const role = localStorage.getItem('role');
    return role === 'User' ? element : <Navigate to="/login" />;
  };
  
  const ShelterRoute = ({ element }) => {
    const role = localStorage.getItem('role');
    return role === 'Shelter' ? element : <Navigate to="/login" />;
  };

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<><NavbarGuest/> <Inicio/></>}></Route> 
        <Route path="/register" element={<><NavbarGuest/><Register/></>}></Route>
        <Route path="/login" element={<><NavbarGuest/><Login/></>}></Route>
        <Route path="/protectoras&refugios" element={<><NavbarGuest/><Shelters/></>}></Route>
        <Route path="/adopta" element={<><NavbarGuest/><Adopta/></>}></Route> 
        <Route path="/sobreNosotros" element={<><NavbarGuest/><AboutUs/></>}></Route> 
        <Route path="/aprende" element={<><NavbarGuest/><Learn/></>}></Route> 
        <Route path="/animal/:id" element={<><NavbarGuest/><InfoAnimal/></>}></Route> 
        <Route path="/shelter/:id" element={<><NavbarGuest/><InfoShelter/></>}></Route> 

        {/* Rutas protegidas para Shelter*/}
        <Route path="/shelter/misAnimales" element={<ShelterRoute element={<><NavbarShelter/><AnimalsShelter/></>} />} />
        <Route path="/shelter/comoMeVen" element={<ShelterRoute element={<><NavbarShelter/><MyViewPage/></>} />} />
        <Route path="/shelter/sobreNosotros" element={<ShelterRoute element={<><NavbarShelter/><ShelterAboutUs/></>} />} />

        {/* Rutas protegidas para User*/}
        <Route path="/UserHome" element={<UserRoute element={<><NavbarUser/><UserHome/></>} />} />

        {/* Rutas protegidas para Admin*/}
    </Routes>
</BrowserRouter>
  )
}

export default Router