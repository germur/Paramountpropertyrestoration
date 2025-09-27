import React from 'react';
import '../styles/components/RestoreFeatures.css';

const RestoreFeatures = ({ 
  title = "Why Choose Us",
  features = [],
  layout = "list" // "list" | "grid" | "cards"
}) => {
  return (
    <section className="restore-features">
      <div className="restore-features__container">
        <h2 className="restore-features__title">{title}</h2>
        
        <div className={`restore-features__${layout}`}>
          {features.map((feature, index) => (
            <div key={index} className="restore-features__item">
              <div className="restore-features__icon">
                <i className="fas fa-check"></i>
              </div>
              <div className="restore-features__content">
                {typeof feature === 'string' ? (
                  <span className="restore-features__text">{feature}</span>
                ) : (
                  <>
                    <h3 className="restore-features__name">{feature.title}</h3>
                    <p className="restore-features__description">{feature.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestoreFeatures;