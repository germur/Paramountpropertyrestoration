// src/components/SEOHead.jsx
import React from 'react';
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema
} from './EnhancedSchemas';

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
  // ALWAYS add trailing slash for consistency (except root)
  const cleanPath = p.startsWith('/') ? p : `/${p}`;
  return cleanPath === '/' ? `${cleanSite}/` : `${cleanSite}${cleanPath}/`;
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
  image = '/images/og-image.webp',
  pageType = 'website', // 'website' | 'article' | 'service'
  keywords = [],

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
  phone = '+1-786-602-2217',
  addressLocality, // visible city name (pretty), optional
  addressRegion = 'FL',
  // FAQ schema questions (optional)
  faqQuestions = [],

  // Article-specific fields
  author = 'Paramount Property Restoration',
  datePublished = null,
  dateModified = null,
  category = null,
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

  // 1. Organization Schema (Always present)
  const orgSchema = generateOrganizationSchema({
    name: businessName,
    url: siteUrl,
    phone: phone
  });

  // 2. LocalBusiness Schema
  // Removing hardcoded rating/reviews to avoid fake schema penalties
  // Using addressLocality dynamically if available
  const localBusinessSchema = pageType !== 'article' ? generateLocalBusinessSchema({
    name: businessName,
    url: canonicalURL,
    phone: phone,
    address: {
      addressLocality: addressLocality || 'Florida',
      addressRegion: addressRegion,
      addressCountry: 'US'
    },
    // Only pass geo/areaServed if specific data available, otherwise generator handles defaults carefully
    areaServed: city ? humanize(city) : 'Florida',
    rating: undefined // Do not hardcode fake ratings
  }) : null;

  // 3. Service Schema
  const serviceSchema = service ? generateServiceSchema({
    name: humanize(subservice) || humanize(service),
    description: finalDesc,
    url: canonicalURL,
    serviceType: humanize(service),
    areaServed: city ? humanize(city) : 'Florida'
  }) : null;

  // 4. Breadcrumb Schema (New & Vital)
  // Logic: Home > Vertical > Service > Subservice > City
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    vertical && { name: humanize(vertical), url: `/${vertical}` },
    service && { name: humanize(service), url: `/${vertical}/${service}` },
    subservice && { name: humanize(subservice), url: `/${vertical}/${service}/${subservice}` },
    city && { name: humanize(city), url: canonicalPath }
  ].filter(Boolean);

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems, siteUrl);

  // 5. Article Schema
  const articleSchema = pageType === 'article' ? generateArticleSchema({
    headline: finalTitle,
    description: finalDesc,
    image: imageURL,
    datePublished,
    dateModified,
    author,
    url: canonicalURL,
    siteUrl,
    category,
    keywords
  }) : null;

  // 6. FAQ Schema
  const faqSchema = faqQuestions.length > 0 ? generateFAQSchema(faqQuestions) : null;

  return (
    <>
      {/* Basic SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalURL} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:site_name" content={businessName} />
      {imageURL && <meta property="og:image" content={imageURL} />}
      {imageURL && <meta property="og:image:alt" content={finalTitle} />}
      {imageURL && <meta property="og:image:width" content="1200" />}
      {imageURL && <meta property="og:image:height" content="630" />}
      {pageType === 'article' && author && <meta property="article:author" content={author} />}
      {pageType === 'article' && datePublished && <meta property="article:published_time" content={new Date(datePublished).toISOString()} />}
      {pageType === 'article' && dateModified && <meta property="article:modified_time" content={new Date(dateModified).toISOString()} />}
      {pageType === 'article' && category && <meta property="article:section" content={category} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={imageURL ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:site" content="@paramountppr" />
      <meta name="twitter:creator" content="@paramountppr" />
      {imageURL && <meta name="twitter:image" content={imageURL} />}
      {imageURL && <meta name="twitter:image:alt" content={finalTitle} />}

      {/* Geo/meta mínimos por ciudad */}
      {addressLocality && <meta name="geo.placename" content={addressLocality} />}
      {addressRegion && <meta name="geo.region" content={`US-${addressRegion}`} />}

      {/* hreflang (opcional) */}
      {hrefLangs.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}

      {/* JSON-LD INJECTION */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {localBusinessSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      )}

      {serviceSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}

      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}

      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  );
};

export default SEOHead;