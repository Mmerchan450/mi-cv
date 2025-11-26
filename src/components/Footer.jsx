
import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Marta Merchan Bravo</p>
      <div className="socials">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Mmerchan450" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:tuemail@ejemplo.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
