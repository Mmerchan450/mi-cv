
import React from "react";
import "./Home.css";
import perfil from "../assets/foto.avif";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="foto-container">
          <img src={perfil} alt="Marta Merchan" className="foto" />
        </div>
        <h1 className="nombre">Marta Merchan</h1>
        <p className="rol">QA Junior |  Experta en Calidad de Software</p>
        <div className="linea-animada"></div>
      </div>
    </section>
  );
};

export default Home;