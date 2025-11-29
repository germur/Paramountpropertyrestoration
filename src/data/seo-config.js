// src/data/seo-config.js
export const businessInfo = {
  name: "Paramount Property Restoration",
  legalName: "Paramount Property Restoration LLC",
  phone: "+17866022217",
  email: "services@paramountpropertyrestoration.com",
  address: {
    street: "10890 NW 17th St Suite 138",
    city: "Miami",
    state: "FL",
    zip: "33172",
    country: "United States"
  },
  website: "https://paramountpropertyrestoration.com",
  founded: "2018",
  experience: "15+ years",
  serviceAreas: ["Miami-Dade County", "Broward County", "Palm Beach County", "Florida"],
  description: "Florida's complete property partner: 24/7 emergency restoration (water, fire, mold, storm) + professional remodeling services.",
  services: {
    restoration: ["Water Damage", "Fire Damage", "Mold Remediation", "Storm Damage", "Emergency Response"],
    remodeling: ["Kitchen Remodeling", "Bathroom Remodeling", "Home Additions", "Complete Home Renovation"]
  }
};

// SEO Templates for programmatic pages
export const seoTemplates = {
  // Para /services/[servicio]/[ciudad]/
  remodeling: {
    titleTemplate: "{service} in {city}, FL | Paramount Property Restoration",
    descriptionTemplate: "Professional {service} services in {city}, {region}. Licensed contractors, quality materials, and satisfaction guaranteed. Free estimates. Call (786) 602-2217",
    keywordsTemplate: "{service} {city}, {service} contractor {city}, home renovation {city}, remodeling {city} FL",
    h1Template: "Professional {service} in {city}, Florida"
  },

  // Para /restoration/[service]/[subcategory]/[ciudad]/
  restoration: {
    titleTemplate: "{subcategory} in {city}, FL | 24/7 Emergency Response",
    descriptionTemplate: "Emergency {subcategory} services in {city}, {region}. 24/7 response, licensed technicians, insurance billing. Call (786) 602-2217 now!",
    keywordsTemplate: "{subcategory} {city}, emergency restoration {city}, water damage repair {city}, {service} {city} FL",
    h1Template: "24/7 {subcategory} Services in {city}, Florida"
  },

  // Para páginas principales
  homepage: {
    title: "Property Restoration & Remodeling Experts | Paramount Property Restoration Florida",
    description: "Florida's complete property partner: 24/7 emergency restoration (water, fire, mold, storm) + professional remodeling services. Licensed, insured, rapid response guaranteed.",
    keywords: "property restoration Florida, emergency restoration, water damage restoration, fire damage restoration, mold remediation, storm damage restoration, kitchen remodeling, bathroom remodeling, general contractor Florida, 24/7 emergency response"
  },

  services: {
    title: "Professional Remodeling & Construction Services | Paramount Property Restoration",
    description: "Expert home remodeling and construction services in Florida. Kitchen, bathroom, additions, and complete home renovations. Licensed contractors with quality guarantee.",
    keywords: "home remodeling Florida, kitchen remodeling, bathroom remodeling, home additions, general contractor, construction services Florida"
  },

  restoration: {
    title: "24/7 Emergency Property Restoration Services | Water, Fire, Mold & Storm Damage",
    description: "Emergency property restoration services across Florida. 24/7 response for water damage, fire damage, mold remediation, and storm damage. Licensed and insured.",
    keywords: "emergency restoration Florida, water damage restoration, fire damage restoration, mold remediation, storm damage restoration, 24/7 emergency response"
  }
};

// Schema.org generators
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": businessInfo.name,
  "image": `${businessInfo.website}/images/og-image.webp`,
  "telephone": businessInfo.phone,
  "email": businessInfo.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": businessInfo.address.street,
    "addressLocality": businessInfo.address.city,
    "addressRegion": businessInfo.address.state,
    "postalCode": businessInfo.address.zip,
    "addressCountry": businessInfo.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "url": businessInfo.website,
  "description": businessInfo.description,
  "priceRange": "$$",
  "areaServed": businessInfo.serviceAreas,
  "serviceType": [...businessInfo.services.restoration, ...businessInfo.services.remodeling],
  "openingHours": "Mo-Su 00:00-23:59",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
});

export const generateServiceSchema = (serviceName, serviceType) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": `Professional ${serviceName.toLowerCase()} services in Florida`,
  "provider": {
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "telephone": businessInfo.phone
  },
  "areaServed": businessInfo.serviceAreas,
  "serviceType": serviceType === 'restoration' ? "Emergency Property Restoration" : "Home Remodeling",
  "offers": {
    "@type": "Offer",
    "description": serviceType === 'restoration' ? "24/7 Emergency Response" : "Free Estimates Available",
    "priceRange": "$$"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${businessInfo.website}${crumb.url}`
  }))
});

// Utility functions
export const generateSEO = (pageType, data = {}) => {
  const template = seoTemplates[pageType];
  if (!template) return {};

  let seo = {};

  if (template.titleTemplate) {
    seo.title = template.titleTemplate
      .replace('{service}', data.service || '')
      .replace('{subcategory}', data.subcategory || '')
      .replace('{city}', data.city || '')
      .replace('{region}', data.region || '');
  } else {
    seo.title = template.title;
  }

  if (template.descriptionTemplate) {
    seo.description = template.descriptionTemplate
      .replace('{service}', data.service || '')
      .replace('{subcategory}', data.subcategory || '')
      .replace('{city}', data.city || '')
      .replace('{region}', data.region || '');
  } else {
    seo.description = template.description;
  }

  if (template.keywordsTemplate) {
    seo.keywords = template.keywordsTemplate
      .replace('{service}', data.service || '')
      .replace('{subcategory}', data.subcategory || '')
      .replace('{city}', data.city || '')
      .replace('{region}', data.region || '');
  } else {
    seo.keywords = template.keywords;
  }

  if (template.h1Template) {
    seo.h1 = template.h1Template
      .replace('{service}', data.service || '')
      .replace('{subcategory}', data.subcategory || '')
      .replace('{city}', data.city || '')
      .replace('{region}', data.region || '');
  }

  return seo;
};