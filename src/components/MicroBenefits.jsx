import "../styles/components/MicroBenefits.css";

const MicroBenefits = ({ benefits, title = "Micro-Benefits" }) => {
  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <section className="micro-benefits container">
      <h2 className="section__title">{title}</h2>
      <div className="micro-benefits__grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="micro-benefit">
            {benefit.icon && (
              <div className="micro-benefit__icon" aria-hidden="true">
                {benefit.icon}
              </div>
            )}
            <div className="micro-benefit__content">
              <h3 className="micro-benefit__title">{benefit.title}</h3>
              <p className="micro-benefit__description">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MicroBenefits;