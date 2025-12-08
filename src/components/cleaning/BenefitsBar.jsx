import React from 'react';
import { Microscope, Leaf, Award, ShieldCheck } from 'lucide-react';

const BenefitsBar = () => {
  const benefits = [
    {
      icon: <Microscope size={32} />,
      title: "ATP Audit Reports",
      desc: "Verifiable Sanitation Metrics"
    },
    {
      icon: <Leaf size={32} />,
      title: "LEED Compliant",
      desc: "Green Seal Certified Products"
    },
    {
      icon: <Award size={32} />,
      title: "Vetted Staff",
      desc: "Background Checked & Uniformed"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Bonded & Insured",
      desc: "$2M Liability Coverage"
    }
  ];

  return (
    <div className="benefits-bar-wrapper">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                {item.icon}
              </div>
              <div className="benefit-text">
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefits-bar-wrapper {
          background: white;
          padding: 3rem 0;
          border-bottom: 1px solid #f1f5f9;
          position: relative;
          z-index: 20;
          margin-top: -20px; /* Slight overlap or pull up visually if needed, but let's keep it safe first */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .benefit-item:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .benefit-icon {
          color: #f97316; /* Brand Orange */
          background: #fff7ed;
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(249, 115, 22, 0.1);
        }

        .benefit-title {
          font-weight: 700;
          color: #1e293b;
          font-size: 1.1rem;
          margin: 0 0 4px 0;
        }

        .benefit-desc {
          color: #64748b;
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .benefit-item {
            background: #f8fafc; /* More visible on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default BenefitsBar;
