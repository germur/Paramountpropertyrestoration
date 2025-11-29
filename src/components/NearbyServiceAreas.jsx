import './NearbyServiceAreas.css';

const NearbyServiceAreas = ({ nearbyCities, serviceName, currentCity }) => {
  if (!nearbyCities || nearbyCities.length === 0) return null;

  return (
    <section className="nearby-service-areas">
      <div className="nearby-container">
        <h2>Nearby Service Areas</h2>
        <p className="nearby-subtitle">
          We also provide {serviceName} in these nearby cities:
        </p>
        <div className="nearby-grid">
          {nearbyCities.map((city, index) => (
            <a
              key={index}
              href={`/${city.slug}`}
              className="nearby-card"
            >
              <div className="nearby-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="nearby-content">
                <h3>{serviceName}</h3>
                <p className="nearby-city">{city.city}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyServiceAreas;
