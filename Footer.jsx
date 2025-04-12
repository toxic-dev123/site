import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column">
          <h3>MiMarca</h3>
          <p>La solución todo-en-uno para tu negocio.</p>
        </div>
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#features">Características</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#cta">Precios</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <ul>
            <li><a href="mailto:info@mimarca.com">info@mimarca.com</a></li>
            <li><a href="tel:+123456789">+1 234 567 89</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} MiMarca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;