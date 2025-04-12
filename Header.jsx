import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">MiMarca</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#features">Características</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#cta">Empezar</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;