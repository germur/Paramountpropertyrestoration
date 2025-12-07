import { useState } from 'react';
import { protocolSteps } from '../../data/cleaning.js';

export default function ProtocolList() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="protocol-container">
      <div className="protocol-tabs">
        {protocolSteps.map((section, index) => (
          <button
            key={index}
            className={`protocol-tab ${activeCategory === index ? 'active' : ''} ${section.highlight ? 'highlight-tab' : ''}`}
            onClick={() => setActiveCategory(index)}
          >
            {section.category}
            {section.highlight && <span className="tab-badge">Exclusive</span>}
          </button>
        ))}
      </div>

      <div className="protocol-content">
        <h3 className="protocol-heading">
          {protocolSteps[activeCategory].category} Protocol
        </h3>
        <ul className="protocol-steps-list">
          {protocolSteps[activeCategory].steps.map((step, idx) => (
            <li key={idx} className="protocol-step-item">
              <span className="step-check">
                <i className="fas fa-check-circle"></i>
              </span>
              <span className="step-text">{step.text}</span>
            </li>
          ))}
        </ul>
        <div className="protocol-note">
          <i className="fas fa-shield-alt"></i>
          <span>Clinical Grade Hygiene Standard</span>
        </div>
      </div>

      <style jsx>{`
        .protocol-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
        }
        .protocol-tabs {
          display: flex;
          overflow-x: auto;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          scrollbar-width: none;
        }
        .protocol-tab {
          padding: 1rem 1.5rem;
          border: none;
          background: none;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .protocol-tab:hover {
          color: #35c3e9;
          background: rgba(53, 195, 233, 0.05);
        }
        .protocol-tab.active {
          color: #35c3e9;
          border-bottom-color: #35c3e9;
          background: white;
        }
        .protocol-tab.highlight-tab {
          color: #0ea5e9;
        }
        .tab-badge {
          font-size: 0.7rem;
          background: #35c3e9;
          color: white;
          padding: 2px 6px;
          border-radius: 10px;
          text-transform: uppercase;
        }
        .protocol-content {
          padding: 2rem;
        }
        .protocol-heading {
          margin-top: 0;
          margin-bottom: 1.5rem;
          color: #1e293b;
          font-size: 1.5rem;
        }
        .protocol-steps-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1rem;
        }
        .protocol-step-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .protocol-step-item:hover {
          transform: translateX(5px);
          background: #f1f5f9;
        }
        .step-check {
          color: #35c3e9;
          font-size: 1.2rem;
          margin-top: 2px;
        }
        .step-text {
          color: #334155;
          line-height: 1.5;
        }
        .protocol-note {
          margin-top: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: #64748b;
          border-top: 1px solid #e2e8f0;
          padding-top: 1rem;
        }
      `}</style>
    </div>
  );
}
