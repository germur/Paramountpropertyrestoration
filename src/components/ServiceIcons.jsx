import React from 'react';
import '../styles/components/ServiceIcons.css';

const ServiceIcons = ({ services, title = "Services", variant = "default" }) => {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className={`service-icons-section ${variant}`}>
      <div className="container">
        <h2 className="service-icons-title">{title}</h2>
        <div className={`service-icons-grid ${variant === 'small' ? 'grid-balanced-small' : 'grid-balanced'}`}>
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link || service.href || '#'} 
              className="service-icon-item"
            >
              <div className="service-icon-wrapper">
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h3 className="service-icon-title">{service.title}</h3>
              <p className="service-icon-description">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIcons;