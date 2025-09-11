import "../styles/components/EmergencySigns.css";

const EmergencySigns = ({ emergencySigns }) => {
  if (!emergencySigns || !emergencySigns.items || emergencySigns.items.length === 0) {
    return null;
  }

  const displayTitle = emergencySigns.title || "Emergency Signs";

  return (
    <section className="emergency-signs container">
      <h2 className="section__title">
        🚨 {displayTitle}
      </h2>
      <div className="emergency-signs__grid">
        {emergencySigns.items.map((item, index) => (
          <div key={index} className="emergency-signs__card">
            <span className="emergency-signs__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="emergency-signs__text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmergencySigns;