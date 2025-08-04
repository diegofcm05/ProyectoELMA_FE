import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroCarousel.css'; // para estilos personalizados


const HeroCarousel = () => {
  return (
    <div className="carousel-container" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <div className="carousel-overlay">
        <h1 className="carousel-title">Agua Purificada ELMA</h1>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={700}
      >
        <div>
          <img src="/Images/fondohome.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="/Images/fondohome.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="/Images/fondohome.jpg" alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
