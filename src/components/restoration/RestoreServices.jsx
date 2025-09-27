import React from 'react';
import '../styles/components/RestoreServices.css';

const RestoreServices = ({ 
  title = "Our Services",
  services = [],
  layout = "grid" // "grid" | "cards" | "list"
}) => {
  return (
    <section className="restore-services">
      <div className="restore-services__container">
        <h2 className="restore-services__title">{title}</h2>
        
        <div className={`restore-services__${layout}`}>
          {services.map((service, index) => (
            <div key={index} className="restore-services__item">
              <div className="restore-services__icon">
                {service.icon}
              </div>
              <div className="restore-services__content">
                <h3 className="restore-services__name">{service.title}</h3>
                {service.description && (
                  <p className="restore-services__description">{service.description}</p>
                )}
                {service.features && (
                  <ul className="restore-services__features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                {service.ctaText && service.ctaLink && (
                  <a href={service.ctaLink} className="restore-services__cta">
                    {service.ctaText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestoreServices;