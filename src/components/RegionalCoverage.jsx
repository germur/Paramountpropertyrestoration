import "../styles/components/RegionalCoverage.css";

const defaultRegions = [
  {
    name: "Central Florida",
    cities: ["Orlando", "Kissimmee", "Clermont", "Winter Garden"],
  },
  {
    name: "Tampa Bay",
    cities: ["Tampa", "St. Petersburg", "Clearwater"],
  },
  {
    name: "South Florida",
    cities: ["Miami", "Fort Lauderdale", "West Palm Beach", "Boca Raton"],
  },
  {
    name: "Treasure Coast",
    cities: ["Port St. Lucie", "Vero Beach", "Stuart"],
  },
];

// Helper function to convert city names to URL-friendly slugs
const cityToSlug = (cityName) => {
  return cityName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

export default function RegionalCoverage({
  title = "Regional Coverage",
  regions = defaultRegions,
  internalLinks = [],
  service = "water-damage",
  subcategory = "emergency",
}) {
  return (
    <section className="regional-coverage">
      <div className="regional-coverage-container">
        <h2 className="regional-coverage-title">{title}</h2>
        <p className="regional-coverage-subtitle">
          Serving all of Florida, including:
        </p>

        <div className="regions-grid">
          {regions.map((region, index) => (
            <div className="region-item" key={index}>
              <h3 className="region-name">{region.name}:</h3>
              <p className="region-cities">
                {region.cities.map((city, cityIndex) => (
                  <span key={cityIndex}>
                    <a 
                      href={`/restoration/${service}/${subcategory}/${cityToSlug(city)}`}
                      className="city-link"
                    >
                      {city}
                    </a>
                    {cityIndex < region.cities.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {internalLinks && internalLinks.length > 0 && (
          <div className="internal-links-section">
            <ul className="internal-links-list">
              {internalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="internal-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
