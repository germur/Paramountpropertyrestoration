// src/components/SEOHead.jsx
import React from 'react';

/**********************
 * Helpers (JS only)
 **********************/
const slugify = (input) => {
  if (!input) return '';
  return input
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const buildServicePath = ({ vertical = 'restoration', service, subservice, city }) => {
  const parts = [slugify(vertical), slugify(service), slugify(subservice)].filter(Boolean);
  const citySlug = slugify(city);
  const base = `/${parts.join('/')}`;
  return citySlug ? `${base}/${citySlug}` : base;
};

const withBaseUrl = (path, siteUrl) => {
  const cleanSite = (siteUrl || '').replace(/\/$/, '');
  const p = (path || '/').replace(/\/$/, '');
  return `${cleanSite}${p.startsWith('/') ? p : `/${p}`}`;
};

const getHrefLangs = ({ siteUrl, locales = ['en'], currentLocale = 'en', canonicalPath = '/' }) => {
  const base = (siteUrl || '').replace(/\/$/, '');
  const path = (canonicalPath || '/').replace(/\/$/, '');
  return locales.map((lc) => ({
    hreflang: lc,
    href: `${base}${lc === 'en' ? '' : `/${lc}`}${path}`,
    isCurrent: lc === currentLocale,
  }));
};

/**********************
 * Title & Description Generators
 **********************/
const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : '');
const humanize = (slug) => (slug || '').split('-').map(capitalize).join(' ');

function generateTitle({ service, subservice, city, brand = 'Paramount Property Restoration' }) {
  const S = humanize(service);
  const SS = humanize(subservice);
  const C = humanize(city);
  if (S && SS && C) return `${SS} in ${C} | ${S} | ${brand}`;
  if (S && C) return `${S} in ${C} | ${brand}`;
  if (S && SS) return `${SS} | ${S} | ${brand}`;
  if (S) return `${S} | ${brand}`;
  return brand;
}

function generateDescription({ service, subservice, city, region = 'FL' }) {
  const S = humanize(service);
  const SS = humanize(subservice);
  const C = humanize(city);
  if (S && SS && C) return `${SS} in ${C}, ${region}. 24/7 response, certified techs, insurance assistance. Free on-site assessment.`;
  if (S && C) return `${S} services in ${C}, ${region}. Fast mitigation, certified team, direct insurance billing.`;
  if (S && SS) return `${SS} by our ${S} team. Rapid response and full restoration.`;
  if (S) return `${S} across Florida. Emergency response and professional restoration.`;
  return 'Property restoration services across Florida with 24/7 emergency response.';
}

/**********************
 * Component
 **********************/
const SEOHead = ({
  // Site / URLs
  siteUrl = 'https://paramountpropertyrestoration.com',

  // Core SEO
  title,
  description,
  image = '/images/og-image.jpg',
  pageType = 'website', // 'website' | 'article' | 'service'

  // Route parts
  vertical = 'restoration',
  service,
  subservice,
  city,
  isHub = false, // hub => canonical sin city; detail => con city

  // i18n (optional)
  locales = ['en'],
  currentLocale = 'en',

  // Business info (for schema)
  businessName = 'Paramount Property Restoration',
  phone,
  addressLocality, // visible city name (pretty), optional
  addressRegion = 'FL',
}) => {
  const parts = { vertical, service, subservice, city };

  // Canonical path
  const canonicalPath = isHub
    ? buildServicePath({ vertical, service, subservice })
    : buildServicePath(parts);

  const canonicalURL = withBaseUrl(canonicalPath, siteUrl);
  const imageURL = image.startsWith('http') ? image : `${siteUrl.replace(/\/$/, '')}${image.startsWith('/') ? image : `/${image}`}`;

  // Auto title/description if missing
  const finalTitle = title || generateTitle({ service, subservice, city, brand: businessName });
  const finalDesc = description || generateDescription({ service, subservice, city, region: addressRegion });

  // hreflang alternates
  const hrefLangs = getHrefLangs({ siteUrl, locales, currentLocale, canonicalPath });

  // JSON-LD: LocalBusiness + Service (cuando aplique)
  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    url: canonicalURL,
    telephone: phone,
    address: addressLocality ? {
      '@type': 'PostalAddress',
      addressLocality: addressLocality,
      addressRegion: addressRegion,
      addressCountry: 'US',
    } : undefined,
    areaServed: city ? [{ '@type': 'City', name: addressLocality || humanize(city) }] : undefined,
  };

  const jsonLdService = service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: humanize(subservice) || humanize(service),
    provider: { '@type': 'Organization', name: businessName, url: siteUrl },
    areaServed: city ? { '@type': 'City', name: addressLocality || humanize(city) } : { '@type': 'AdministrativeArea', name: 'Florida' },
    serviceType: humanize(service) || 'Restoration',
    url: canonicalURL,
  } : null;

  return (
    <>
      {/* Basic SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={canonicalURL} />

      {/* Open Graph / Twitter */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalURL} />
      {imageURL && <meta property="og:image" content={imageURL} />}

      <meta name="twitter:card" content={imageURL ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      {imageURL && <meta name="twitter:image" content={imageURL} />}

      {/* Geo/meta mínimos por ciudad */}
      {addressLocality && <meta name="geo.placename" content={addressLocality} />}
      {addressRegion && <meta name="geo.region" content={`US-${addressRegion}`} />}

      {/* hreflang (opcional) */}
      {hrefLangs.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      {jsonLdService && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      )}
    </>
  );
};

export default SEOHead;