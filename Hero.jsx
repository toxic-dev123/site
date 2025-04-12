import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>La solución perfecta para tu negocio</h1>
          <p>Descubre cómo nuestra plataforma puede transformar tu empresa con herramientas innovadoras y fáciles de usar.</p>
          <button className="cta-button">Prueba Gratis</button>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/600x400" alt="Dashboard de la aplicación" />
        </div>
      </div>
    </section>
  );
};

export default Hero;