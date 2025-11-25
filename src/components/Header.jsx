import React from "react";
import { Link } from "react-router-dom";
import foto from "../assets/foto.avif";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="profile">
        <img src={foto} alt="Mi foto" className="Header__foto" />
        <h1>Marta Merchan Bravo</h1>
        <h2>Quality Assurance Engineer | Especialista en pruebas de software</h2>
      </div>

      <nav className="nav">
        <Link to="/sobre-mi">  <button>Sobre mí</button>
        <Link to="Experiencia"><button>Experiencia</button></Link>
        <Link to="Educación"><button>Educación</button></Link>
        <Link to="Habilidades"><button>Habilidades</button></Link>
        <Link to="Proyectos"><button>Proyectos</button></Link>
        <Link to="Contacto"><button>Contacto</button></Link>
      </nav>
    </header>
  );
};

export default Header;
