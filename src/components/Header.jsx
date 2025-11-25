import React from 'react';
import './Header.css'; // Opcional, tu archivo de estilos

const Header = () => {
  return (
    <header className="header">
      <img 
        src="./assets/foto.avif" 
        alt="Mi foto" 
        className="Header__foto" 
      />
      <h1>Tu Nombre</h1>
      <h2>Desarrollador/a Frontend</h2>
    </header>
  );
};

export default Header;