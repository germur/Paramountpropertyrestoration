import { pricingPackages } from '../../data/cleaning.js';

export default function PricingCards() {
    return (
        <div className="pricing-grid">
            {pricingPackages.map((pkg) => (
                <div key={pkg.id} className={`pricing-card ${pkg.isPopular ? 'popular' : ''}`}>
                    {pkg.isPopular && <div className="popular-tag">Most Recommended</div>}

                    <div className="card-header">
                        <div className="icon-wrapper">
                            <i className={pkg.icon}></i>
                        </div>
                        <h3 className="pkg-name">{pkg.name}</h3>
                        <p className="pkg-tagline">{pkg.tagline}</p>
                    </div>

                    <div className="card-body">
                        <p className="ideal-for">
                            <strong>Best for:</strong> {pkg.idealFor}
                        </p>
                        <ul className="pkg-features">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx}>
                                    <i className="fas fa-check"></i>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-footer">
                        <a href="#contact" className={`pkg-btn ${pkg.isPopular ? 'btn-primary' : 'btn-outline'}`}>
                            {pkg.cta}
                        </a>
                    </div>
                </div>
            ))}

            <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }
        .pricing-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .pricing-card.popular {
          border: 2px solid #35c3e9;
          background: linear-gradient(to bottom, #f0f9ff, #fff);
          transform: scale(1.05);
          z-index: 2;
          box-shadow: 0 25px 50px rgba(53, 195, 233, 0.15);
        }
        .popular-tag {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #35c3e9;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .icon-wrapper {
          width: 50px;
          height: 50px;
          background: #e0f2fe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .pkg-name {
          font-size: 1.5rem;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }
        .pkg-tagline {
          color: #64748b;
          font-size: 0.95rem;
          margin: 0 0 1.5rem 0;
        }
        .card-body {
          flex: 1;
        }
        .ideal-for {
          background: rgba(0,0,0,0.03);
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #475569;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .pkg-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }
        .pkg-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: #334155;
        }
        .pkg-features li i {
          color: #10b981;
          margin-top: 4px;
        }
        .pkg-btn {
          display: block;
          text-align: center;
          padding: 1rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-primary {
          background: #35c3e9;
          color: white;
          box-shadow: 0 4px 15px rgba(53, 195, 233, 0.4);
        }
        .btn-primary:hover {
          background: #0ea5e9;
          transform: translateY(-2px);
        }
        .btn-outline {
          border: 2px solid #e2e8f0;
          color: #475569;
        }
        .btn-outline:hover {
          border-color: #35c3e9;
          color: #35c3e9;
          background: white;
        }
        @media (max-width: 768px) {
          .pricing-card.popular {
             transform: scale(1);
             margin: 1rem 0;
          }
        }
      `}</style>
        </div>
    );
}
