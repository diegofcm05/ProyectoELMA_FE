import React from 'react';
import './HeroSection.css';
import bottleImage from '/Images/fondohome.jpg'; // Ajusta ruta si es necesario

const HeroSection = () => {
  return (
     <div className="hero-section">
      <div className="hero-text">
        <h1>Tu Agua de Confianza, en Cada Presentación.</h1>
        <h3>Nuestros presentaciones especializadas de agua purificada está diseñada para mantener tu bebida fresca, y tu estilo impecable.</h3>
      </div>
      <div className="hero-image" />
    </div>
  );
};

export default HeroSection;
