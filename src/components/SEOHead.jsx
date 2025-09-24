// src/components/SEOHead.jsx
import React from 'react';
import { businessInfo, generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../data/seo-config.js';

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  canonical,
  image = "/images/og-image.jpg",
  pageType = "website", // "website", "service", "article"
  serviceName = null,
  serviceType = null, // "restoration" or "remodeling"
  breadcrumbs = [],
  city = null,
  region = null,
  noindex = false
}) => {
  // Generate absolute URLs
  const siteUrl = businessInfo.website;
  const canonicalURL = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageURL = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  // Generate schemas
  const schemas = [];
  
  // Always include LocalBusiness schema
  schemas.push(generateLocalBusinessSchema());
  
  // Add service schema if applicable
  if (serviceName && serviceType) {
    schemas.push(generateServiceSchema(serviceName, serviceType));
  }
  
  // Add breadcrumb schema if provided
  if (breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  // Generate location-specific keywords
  const locationKeywords = city && region ? 
    `${keywords}, ${serviceName || ''} ${city}, ${city} ${serviceType || 'contractor'}, ${region} property services` : 
    keywords;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={locationKeywords} />
      {canonical && <link rel="canonical" href={canonicalURL} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Geographic Tags */}
      {city && (
        <>
          <meta name="geo.region" content={`US-FL`} />
          <meta name="geo.placename" content={`${city}, Florida`} />
          <meta name="geo.position" content="25.7617;-80.1918" />
          <meta name="ICBM" content="25.7617, -80.1918" />
        </>
      )}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Business Open Graph */}
      <meta property="business:contact_data:street_address" content={businessInfo.address.street} />
      <meta property="business:contact_data:locality" content={businessInfo.address.city} />
      <meta property="business:contact_data:region" content={businessInfo.address.state} />
      <meta property="business:contact_data:postal_code" content={businessInfo.address.zip} />
      <meta property="business:contact_data:country_name" content={businessInfo.address.country} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageURL} />

      {/* Additional Meta Tags */}
      <meta name="author" content={businessInfo.name} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${businessInfo.name}`} />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Contact Information */}
      <meta name="contact" content={businessInfo.email} />
      <meta name="phone" content={businessInfo.phone} />

      {/* Service-specific meta tags */}
      {serviceType === 'restoration' && (
        <>
          <meta name="emergency" content="24/7 emergency response available" />
          <meta name="response-time" content="30 minutes" />
        </>
      )}

      {serviceType === 'remodeling' && (
        <>
          <meta name="warranty" content="Satisfaction guaranteed" />
          <meta name="license" content="Licensed and insured contractor" />
        </>
      )}

      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </>
  );
};

export default SEOHead;