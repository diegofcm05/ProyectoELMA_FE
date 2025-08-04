import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Síguenos en redes sociales</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="icon" />
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Agua Purificada ELMA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
