import React, { useState } from 'react';
import '../../styles/components/RestoreFAQ.css';

const RestoreFAQ = ({ 
  title = "Frequently Asked Questions",
  faqs = [],
  maxVisible = null
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const displayFaqs = maxVisible ? faqs.slice(0, maxVisible) : faqs;
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="restore-faq">
      <div className="restore-faq__container">
        <h2 className="restore-faq__title">{title}</h2>
        
        <div className="restore-faq__list">
          {displayFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`restore-faq__item ${openIndex === index ? 'restore-faq__item--open' : ''}`}
            >
              <button 
                className="restore-faq__question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question || faq.q}</span>
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
              </button>
              
              <div className="restore-faq__answer">
                <div className="restore-faq__answer-content">
                  {faq.answer || faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestoreFAQ;