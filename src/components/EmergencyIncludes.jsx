import "../styles/components/EmergencyIncludes.css";

const EmergencyIncludes = ({ emergencyIncludes }) => {
  if (!emergencyIncludes || !emergencyIncludes.items || emergencyIncludes.items.length === 0) {
    return null;
  }

  const displayTitle = emergencyIncludes.title || "Emergency Response Includes";

  return (
    <section className="emergency-includes">
      <div className="container">
        <h2 className="section__title">{displayTitle}</h2>
        <div className="emergency-includes__grid">
          {emergencyIncludes.items.map((item, index) => (
            <div key={index} className="emergency-includes__item">
              <div className="emergency-includes__icon" aria-hidden="true">⚡</div>
              <div className="emergency-includes__content">
                <h3 className="emergency-includes__title">{item.title}</h3>
                <p className="emergency-includes__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyIncludes;