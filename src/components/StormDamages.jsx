import "../styles/components/StormDamages.css";

const StormDamages = ({ stormDamages }) => {
  if (!stormDamages || !stormDamages.items || stormDamages.items.length === 0) {
    return null;
  }

  const displayTitle = stormDamages.title || "Storm Damages";

  return (
    <section className="storm-damages container">
      <h2 className="section__title">
        🏚️ {displayTitle}
      </h2>
      <div className="storm-damages__grid">
        {stormDamages.items.map((item, index) => (
          <div key={index} className="storm-damages__card">
            <span className="storm-damages__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="storm-damages__text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StormDamages;