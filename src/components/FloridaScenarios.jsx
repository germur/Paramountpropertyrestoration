import React from 'react';

export default function FloridaScenarios({ scenarios, title = "Florida-Specific Scenarios" }) {
  if (!scenarios || !scenarios.length) {
    return null;
  }

  return (
    <section className="florida-scenarios container">
      <h2 className="section__title">{title}</h2>
      <ul className="florida-scenarios__list">
        {scenarios.map((scenario, index) => (
          <li key={index} className="florida-scenarios__item">
            <span className="florida-scenarios__icon">🌴</span>
            <span className="florida-scenarios__text">{scenario}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}