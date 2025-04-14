import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Esta plataforma ha revolucionado nuestra forma de trabajar. ¡Increíble!",
      author: "Carlos Mendoza",
      role: "Director, TechSolutions"
    },
    {
      quote: "La mejor inversión que hemos hecho en nuestro negocio en los últimos años.",
      author: "Ana López",
      role: "Gerente de Marketing"
    },
    {
      quote: "Sencillo de usar pero con todas las funciones que necesitamos. Perfecto.",
      author: "Javier Ruiz",
      role: "Emprendedor"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">{testimonial.author}</p>
              <p className="role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;