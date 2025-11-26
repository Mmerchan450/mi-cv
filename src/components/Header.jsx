import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 
import foto from "../assets/foto.avif"; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/educacion">Educacion</Link> 
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/experiencia">Experiencia</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

     


    </header>
  );
};

export default Header;
