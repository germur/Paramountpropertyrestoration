import React from 'react';
import '../styles/components/RestoreProcess.css';

const RestoreProcess = ({ 
  title = "How We Help You",
  steps = [],
  timeline = "Most projects completed within 24-48 hours"
}) => {
  return (
    <section className="restore-process">
      <div className="restore-process__container">
        <h2 className="restore-process__title">{title}</h2>
        
        <div className="restore-process__grid">
          {steps.map((step, index) => (
            <div key={index} className="restore-process__step">
              <div className="restore-process__number">{index + 1}</div>
              <div className="restore-process__icon">
                <i className={step.icon}></i>
              </div>
              <h3 className="restore-process__step-title">{step.title}</h3>
              <p className="restore-process__step-text">{step.text}</p>
            </div>
          ))}
        </div>
        
        <div className="restore-process__footer">
          <p className="restore-process__timeline">
            <strong>Timeline:</strong> {timeline}
          </p>
          <a href="/contact" className="restore-process__cta">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestoreProcess;