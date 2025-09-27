import React from 'react';
import '../styles/components/RestoreHero.css';

const RestoreHero = ({ 
  title, 
  description, 
  ctaText = "Get Help Now",
  ctaLink = "/contact",
  backgroundImage,
  badges = [],
  emergencyPhone = "(786) 602-2217",
  showEmergencyBadge = true
}) => {
  return (
    <section 
      className="restore-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="restore-hero__overlay"></div>
      <div className="restore-hero__container">
        <div className="restore-hero__content">
          {showEmergencyBadge && (
            <div className="restore-hero__emergency-badge">
              🚨 24/7 Emergency Response
            </div>
          )}
          
          <h1 className="restore-hero__title">{title}</h1>
          <p className="restore-hero__description">{description}</p>
          
          {badges.length > 0 && (
            <div className="restore-hero__badges">
              {badges.map((badge, index) => (
                <span key={index} className="restore-hero__badge">
                  <span className="badge-icon">{badge.icon}</span>
                  <span className="badge-text">{badge.text}</span>
                </span>
              ))}
            </div>
          )}
          
          <div className="restore-hero__actions">
            <a href={ctaLink} className="restore-hero__cta-primary">
              {ctaText}
            </a>
            <a href={`tel:${emergencyPhone.replace(/[^0-9+]/g, '')}`} className="restore-hero__cta-emergency">
              <i className="fas fa-phone"></i>
              Emergency: {emergencyPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestoreHero;