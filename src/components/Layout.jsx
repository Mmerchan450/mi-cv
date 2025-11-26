// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 

const Layout = () => {
  return (
    <>
      <Header />
      
      {/* Contenedor principal para el contenido de las páginas */}
      <main className="main-content">
        {/* Aquí se cargará el componente de la ruta actual (Home, Educacion, etc.) */}
        <Outlet /> 
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;