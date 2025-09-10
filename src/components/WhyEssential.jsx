import React from 'react';

export default function WhyEssential({ whyEssential }) {
  if (!whyEssential || !whyEssential.steps?.length) {
    return null;
  }

  return (
    <section className="why-essential container">
      <h2 className="section__title">{whyEssential.title}</h2>
      <ul className="why-essential__list">
        {whyEssential.steps.map((step, index) => (
          <li key={index} className="why-essential__item">
            <span className="why-essential__icon">⚠️</span>
            <span className="why-essential__text">{step}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}