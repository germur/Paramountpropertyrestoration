import React from 'react';
import '../styles/components/RestoreWarnings.css';

const RestoreWarnings = ({ 
  title = "Warning Signs",
  warnings = [],
  urgencyMessage,
  variant = "warning" // "warning" | "danger" | "info"
}) => {
  return (
    <section className="restore-warnings">
      <div className="restore-warnings__container">
        <h2 className="restore-warnings__title">
          {variant === "danger" && "🚨"} 
          {variant === "warning" && "⚠️"} 
          {variant === "info" && "ℹ️"} 
          {title}
        </h2>
        
        {urgencyMessage && (
          <div className="restore-warnings__urgency">
            {urgencyMessage}
          </div>
        )}
        
        <div className={`restore-warnings__grid restore-warnings__grid--${variant}`}>
          {warnings.map((warning, index) => (
            <div key={index} className="restore-warnings__item">
              <span className="restore-warnings__icon">
                {warning.icon}
              </span>
              <span className="restore-warnings__text">
                {warning.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestoreWarnings;