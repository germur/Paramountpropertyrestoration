import "../styles/components/WhyActingFast.css";

const WhyActingFast = ({ whyActingFast }) => {
  if (
    !whyActingFast ||
    !whyActingFast.points ||
    whyActingFast.points.length === 0
  ) {
    return null;
  }

  const displayTitle = whyActingFast.title || "Why Acting Fast Matters";

  return (
    <section className="why-acting-fast container">
      <div className="why-acting-fast__card">
        <h2 className="why-acting-fast__title">{displayTitle}</h2>
        <ul className="why-acting-fast__list">
          {whyActingFast.points.map((point, index) => (
            <li key={index} className="why-acting-fast__item">
              <span className="why-acting-fast__icon" aria-hidden="true">
                ⚠️
              </span>
              <span className="why-acting-fast__text">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyActingFast;
