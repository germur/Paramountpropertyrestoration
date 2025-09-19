// src/components/RestorationLinks.jsx
import React from 'react';
import { restorationGroups, ciudades } from '../data/restoration.js';

const RestorationLinks = ({ 
  currentService = null, 
  currentCity = null, 
  showTitle = true,
  maxServices = 6,
  maxCities = 8,
  groupFilter = null // "water-damage", "fire-damage", "mold-remediation", "storm-damage"
}) => {
  // Filtrar solo servicios de restoration (excluir remodeling)
  const restorationServices = restorationGroups
    .filter(group => group.slug !== "remodeling-services")
    .filter(group => !groupFilter || group.slug === groupFilter)
    .flatMap(group => 
      group.subservices.map(service => ({
        ...service,
        groupSlug: group.slug,
        groupName: group.name
      }))
    );

  // Obtener servicios aleatorios (excluyendo el actual)
  const getRandomServices = () => {
    const filtered = restorationServices.filter(s => s.slug !== currentService);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, maxServices);
  };

  // Obtener ciudades aleatorias (excluyendo la actual)
  const getRandomCities = () => {
    const filtered = ciudades.filter(c => c.slug !== currentCity);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, maxCities);
  };

  const services = getRandomServices();
  const cities = getRandomCities();

  // Generar combinaciones service + city
  const generateLinks = () => {
    const links = [];
    
    // Si hay servicio actual, mostrar ese servicio en otras ciudades
    if (currentService) {
      const currentServiceData = restorationServices.find(s => s.slug === currentService);
      if (currentServiceData) {
        cities.forEach(city => {
          links.push({
            url: `/services/${currentService}/${city.slug}`,
            text: `${currentServiceData.title} in ${city.nombre}`,
            type: 'same-service'
          });
        });
      }
    }

    // Si hay ciudad actual, mostrar otros servicios en esa ciudad
    if (currentCity) {
      const currentCityData = ciudades.find(c => c.slug === currentCity);
      if (currentCityData) {
        services.forEach(service => {
          links.push({
            url: `/services/${service.slug}/${currentCity}`,
            text: `${service.title} in ${currentCityData.nombre}`,
            type: 'same-city'
          });
        });
      }
    }

    // Si no hay contexto actual, generar combinaciones aleatorias
    if (!currentService && !currentCity) {
      services.slice(0, 3).forEach(service => {
        cities.slice(0, 3).forEach(city => {
          links.push({
            url: `/services/${service.slug}/${city.slug}`,
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

// Variantes específicas para diferentes grupos
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

// Componente para mostrar servicios por región
export const RestorationByRegion = ({ region = "South Florida", maxServices = 4 }) => {
  const regionCities = ciudades.filter(c => c.region === region);
  const restorationServices = restorationGroups
    .filter(group => group.slug !== "remodeling-services")
    .flatMap(group => group.subservices)
    .slice(0, maxServices);

  return (
    <div className="restoration-by-region">
      <h3>Emergency Restoration in {region}</h3>
      <div className="region-links-grid">
        {restorationServices.map(service => (
          regionCities.slice(0, 2).map(city => (
            <a 
              key={`${service.slug}-${city.slug}`}
              href={`/services/${service.slug}/${city.slug}`}
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