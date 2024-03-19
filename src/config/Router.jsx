import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Adopta from '../pages/GuestPages/Adopta' 
import Inicio from "../pages/GuestPages/Inicio";
import InfoAnimal from "../pages/GuestPages/InfoAnimal";
import InfoShelter from "../pages/GuestPages/InfoShelter";

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
        <Route path="/" element={<Inicio/>}></Route> 
        {/* <Route path="/register" element={}></Route>
        <Route path="/login" element={}></Route>
        <Route path="/protectoras&refugios" element={}></Route> */}
        <Route path="/adopta" element={<Adopta/>}></Route> 
        {/* <Route path="/provinces" element={}></Route> 
        <Route path="/animals" element={}></Route>  */}
        <Route path="/animal/:id" element={<InfoAnimal/>}></Route> 
        <Route path="/shelter/:id" element={<InfoShelter/>}></Route> 
        {/* Rutas protegidas para Shelter*/}
        
        {/* Rutas protegidas para User*/}

        {/* Rutas protegidas para Admin*/}
    </Routes>
</BrowserRouter>
  )
}

export default Router