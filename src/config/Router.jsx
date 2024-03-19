import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Adopta from '../pages/GuestPages/Adopta' 
import Inicio from "../pages/GuestPages/Inicio";
import InfoAnimal from "../pages/GuestPages/InfoAnimal";
import InfoShelter from "../pages/GuestPages/InfoShelter";
import Shelters from "../pages/GuestPages/Shelters";
import NavbarGuest from "../components/navbars/NavbarGuest";

const AdminRoute = ({ element }) => {
    const rol = localStorage.getItem('role');
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
        {/* <Route path="/register" element={}></Route>
        <Route path="/login" element={}></Route> */}
        <Route path="/protectoras&refugios" element={<><NavbarGuest/><Shelters/></>}></Route>
        <Route path="/adopta" element={<><NavbarGuest/><Adopta/></>}></Route> 
        <Route path="/sobreNosotros" element={<><NavbarGuest/><Inicio/></>}></Route> 
        <Route path="/animal/:id" element={<><NavbarGuest/><InfoAnimal/></>}></Route> 
        <Route path="/shelter/:id" element={<><NavbarGuest/><InfoShelter/></>}></Route> 
        {/* Rutas protegidas para Shelter*/}
        
        {/* Rutas protegidas para User*/}

        {/* Rutas protegidas para Admin*/}
    </Routes>
</BrowserRouter>
  )
}

export default Router