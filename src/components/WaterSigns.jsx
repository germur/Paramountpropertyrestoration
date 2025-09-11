import "../styles/components/WaterSigns.css";

const WaterSigns = ({ waterSigns }) => {
  if (!waterSigns || !waterSigns.items || waterSigns.items.length === 0) {
    return null;
  }

  const displayTitle = waterSigns.title || "Water Signs";

  return (
    <section className="water-signs container">
      <h2 className="section__title">{displayTitle}</h2>
      <div className="water-signs__grid">
        {waterSigns.items.map((item, index) => (
          <div key={index} className="water-signs__card">
            <span className="water-signs__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="water-signs__text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WaterSigns;