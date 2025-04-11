import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Rápido y Eficiente",
      description: "Procesamiento de datos en tiempo real para máxima productividad."
    },
    {
      icon: "🔒",
      title: "Seguridad Avanzada",
      description: "Protección de datos con cifrado de última generación."
    },
    {
      icon: "🔄",
      title: "Integraciones",
      description: "Conecta con las herramientas que ya usas en tu negocio."
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Características Principales</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;