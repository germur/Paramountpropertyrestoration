import styles from "./RegionalCoverage.module.css";

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
    <section className={styles.regionalCoverage}>
      <div className={styles.regionalCoverageContainer}>
        <h2 className={styles.regionalCoverageTitle}>{title}</h2>
        <p className={styles.regionalCoverageSubtitle}>
          Serving all of Florida, including:
        </p>

        <div className={styles.regionsGrid}>
          {regions.map((region, index) => (
            <div className={styles.regionItem} key={index}>
              <h3 className={styles.regionName}>{region.name}:</h3>
              <p className={styles.regionCities}>
                {region.cities.map((city, cityIndex) => (
                  <span key={cityIndex}>
                    <a
                      href={`/restoration/${service}/${subcategory}/${cityToSlug(city)}`}
                      className={styles.cityLink}
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
          <div className={styles.internalLinksSection}>
            <ul className={styles.internalLinksList}>
              {internalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className={styles.internalLink}>
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
