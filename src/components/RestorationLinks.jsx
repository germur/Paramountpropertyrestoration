// src/components/RestorationLinks.jsx
import React from 'react';
import { getRestorationServices, cities } from '../data/restoration.js';

const RestorationLinks = ({
  currentService = null,
  currentCity = null,
  showTitle = true,
  maxServices = 6,
  maxCities = 8,
  groupFilter = null
}) => {
  const restorationServices = getRestorationServices()
    .filter(group => !groupFilter || group.slug === groupFilter)
    .flatMap(group =>
      group.subservices.map(service => ({
        ...service,
        groupSlug: group.slug,
        groupName: group.name
      }))
    );

  const getRandomServices = () => {
    const filtered = restorationServices.filter(s => s.slug !== currentService);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, maxServices);
  };

  const getRandomCities = () => {
    const filtered = cities.filter(c => c.slug !== currentCity);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, maxCities);
  };

  const services = getRandomServices();
  const citiesList = getRandomCities();

  const cleanUrl = (path) => path.replace(/\/\/+/g, '/');

  const generateLinks = () => {
    const links = [];

    if (currentService) {
      const currentServiceData = restorationServices.find(s => s.slug === currentService);
      if (currentServiceData) {
        citiesList.forEach(city => {
          links.push({
            url: cleanUrl(`/restoration/${currentServiceData.groupSlug}/${currentService}/${city.slug}/`),
            text: `${currentServiceData.title} in ${city.nombre}`,
            type: 'same-service'
          });
        });
      }
    }

    if (currentCity) {
      const currentCityData = cities.find(c => c.slug === currentCity);
      if (currentCityData) {
        services.forEach(service => {
          links.push({
            url: cleanUrl(`/restoration/${service.groupSlug}/${service.slug}/${currentCity}/`),
            text: `${service.title} in ${currentCityData.nombre}`,
            type: 'same-city'
          });
        });
      }
    }

    if (!currentService && !currentCity) {
      services.slice(0, 3).forEach(service => {
        citiesList.slice(0, 3).forEach(city => {
          links.push({
            url: cleanUrl(`/restoration/${service.groupSlug}/${service.slug}/${city.slug}/`),
            text: `${service.title} in ${city.nombre}`,
            type: 'random'
          });
        });
      });
    }

    return links;
  };

  const links = generateLinks();

  if (links.length === 0) return null;

  return (
    <div className="restoration-links-component">
      {showTitle && (
        <h3 className="restoration-links-title">
          {currentService && currentCity
            ? "Related Restoration Services"
            : currentService
              ? "Other Cities We Serve"
              : currentCity
                ? "Other Restoration Services"
                : "Emergency Restoration Services"}
        </h3>
      )}

      <div className="restoration-links-grid">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`restoration-link ${link.type}`}
            title={link.text}
          >
            <span className="link-icon">
              {link.type === 'same-service' && '🌊'}
              {link.type === 'same-city' && '🏠'}
              {link.type === 'random' && '🚨'}
            </span>
            <span className="link-text">{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export const WaterDamageLinks = (props) => (
  <RestorationLinks {...props} groupFilter="water-damage" />
);

export const FireDamageLinks = (props) => (
  <RestorationLinks {...props} groupFilter="fire-damage" />
);

export const MoldRemediationLinks = (props) => (
  <RestorationLinks {...props} groupFilter="mold-remediation" />
);

export const StormDamageLinks = (props) => (
  <RestorationLinks {...props} groupFilter="storm-damage" />
);

export const RestorationByRegion = ({ region = "South Florida", maxServices = 4 }) => {
  const regionCities = cities.filter(c => c.region === region);
  const restorationServices = restorationGroups
    .flatMap(group =>
      group.subservices.map(service => ({
        ...service,
        groupSlug: group.slug
      }))
    )
    .slice(0, maxServices);

  return (
    <div className="restoration-by-region">
      <h3>Emergency Restoration in {region}</h3>
      <div className="region-links-grid">
        {restorationServices.map(service => (
          regionCities.slice(0, 2).map(city => (
            <a
              key={`${service.slug}-${city.slug}`}
              href={cleanUrl(`/restoration/${service.groupSlug}/${service.slug}/${city.slug}/`)}
              className="region-link"
            >
              {service.title} in {city.nombre}
            </a>
          ))
        ))}
      </div>
    </div>
  );
};

export default RestorationLinks;