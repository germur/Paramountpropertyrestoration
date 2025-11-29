import './SEOCityLinks.css';

const SEOCityLinks = ({ links, title = "Locations We Serve" }) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="seo-city-links">
      <div className="seo-links-container">
        <h3>{title}</h3>
        <div className="seo-links-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="seo-city-link"
              title={`${link.anchor} - Professional service in ${link.city}`}
            >
              <span className="seo-link-icon">📍</span>
              <span className="seo-link-text">{link.anchor}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOCityLinks;
