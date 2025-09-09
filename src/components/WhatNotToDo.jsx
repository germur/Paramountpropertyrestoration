import "../styles/components/WhatNotToDo.css";

const WhatNotToDo = ({ items, title = "What Not To Do" }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="what-not-to-do container">
      <div className="what-not-to-do__card">
        <h2 className="what-not-to-do__title">{title}</h2>
        <ul className="what-not-to-do__list">
          {items.map((item, index) => (
            <li key={index} className="what-not-to-do__item">
              <span className="what-not-to-do__icon" aria-hidden="true">
                ❌
              </span>
              <span className="what-not-to-do__text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatNotToDo;