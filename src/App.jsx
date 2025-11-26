import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SobreMi from "./pages/SobreMi";
import Experiencia from "./pages/Experiencia";
import Educacion from "./pages/Educacion";
import Habilidades from "./pages/Habilidades";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";


function App() {
  return (
    <Router>
      <Header /> {/* siempre visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;