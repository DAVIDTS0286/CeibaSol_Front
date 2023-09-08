import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contactos from "./components/contactos/contactos";

import QuienesSomos from "./components/quienesSomos/quienesSomos";
import Servicios from "./components/servicios/servicios";
import TrabajosRealizados from "./components/trabajosRealizados/mainTrabajosRealizados";
import NavBar from "./components/mainComponents/navBar";
import FooterCS from "./components/mainComponents/footerCS";
import Cuerpo from "./components/menu/cuerpo";
import Login from "./components/login/login";
import FloatingButton from "./components/contactos/escribenos";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
            <Routes>
              <Route path="/" element={<Cuerpo />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/quinesSomos" element={<QuienesSomos />} />
              <Route path="/contactos" element={<Contactos />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/trabajosRealizados"
                element={<TrabajosRealizados />}
              />
            </Routes>
            <FloatingButton/>
            <FooterCS/>
      </BrowserRouter>
    </>
  );
}


export default App;
