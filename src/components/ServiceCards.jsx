import "../styles/components/ServiceCards.css";

const ServiceCards = ({ serviceCards }) => {
  if (!serviceCards || !serviceCards.items || serviceCards.items.length === 0) {
    return null;
  }

  const displayTitle = serviceCards.title || "Service Cards";

  return (
    <section className="service-cards">
      <div className="container">
        <h2 className="section__title">{displayTitle}</h2>
        <div className="service-cards__grid">
        {serviceCards.items.map((item, index) => (
          <div key={index} className="service-cards__card">
            <div className="service-cards__icon">
              {item.icon}
            </div>
            <div className="service-cards__content">
              <h3 className="service-cards__title">{item.title}</h3>
              <p className="service-cards__text">{item.text}</p>
              <a href={item.cta.href} className="service-cards__cta">
                {item.cta.text}
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;