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

/**
 * Build FAQPage schema for JSON-LD
 */
function generateFAQSchema(questions = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
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
  phone,
  addressLocality, // visible city name (pretty), optional
  addressRegion = 'FL',
  // FAQ schema questions (optional)
  faqQuestions = [],

  // Article-specific fields
  author = 'Paramount Property Restoration',
  datePublished,
  dateModified,
  category,
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

  // JSON-LD: Enhanced LocalBusiness with more details
  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${canonicalURL}#localbusiness`,
    name: businessName,
    image: `${siteUrl}/images/ppr-logo-new.png`,
    url: canonicalURL,
    telephone: phone,
    email: 'services@paramountpropertyrestoration.com',
    priceRange: '$$',
    address: addressLocality ? {
      '@type': 'PostalAddress',
      addressLocality: addressLocality,
      addressRegion: addressRegion,
      addressCountry: 'US',
    } : {
      '@type': 'PostalAddress',
      addressLocality: 'Florida',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: addressLocality ? undefined : {
      '@type': 'GeoCoordinates',
      latitude: '27.6648',
      longitude: '-81.5158'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    areaServed: city ? [{ '@type': 'City', name: addressLocality || humanize(city) }] : {
      '@type': 'State',
      name: 'Florida'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '150'
    },
    sameAs: [
      'https://www.facebook.com/paramountpropertyrestoration',
      'https://www.instagram.com/paramountpropertyrestoration'
    ]
  };

  const jsonLdService = service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalURL}#service`,
    name: humanize(subservice) || humanize(service),
    description: finalDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: businessName,
      url: siteUrl,
      telephone: phone
    },
    areaServed: city ? {
      '@type': 'City',
      name: addressLocality || humanize(city),
      address: {
        '@type': 'PostalAddress',
        addressLocality: addressLocality || humanize(city),
        addressRegion: addressRegion || 'FL',
        addressCountry: 'US'
      }
    } : {
      '@type': 'State',
      name: 'Florida',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'FL',
        addressCountry: 'US'
      }
    },
    serviceType: humanize(service) || 'Restoration',
    url: canonicalURL,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: canonicalURL,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: 'Emergency Service',
        availableLanguage: ['en', 'es'],
        hoursAvailable: '24/7'
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${humanize(service)} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Emergency ${humanize(service)}`
          }
        }
      ]
    }
  } : null;

  // JSON-LD Enhanced Article Schema
  const jsonLdArticle = pageType === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalURL}#article`,
    headline: finalTitle,
    description: finalDesc,
    image: {
      '@type': 'ImageObject',
      url: imageURL,
      width: 1200,
      height: 630
    },
    datePublished: datePublished ? new Date(datePublished).toISOString() : new Date().toISOString(),
    dateModified: dateModified ? new Date(dateModified).toISOString() : datePublished ? new Date(datePublished).toISOString() : new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: author || businessName,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: businessName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/ppr-logo-new.png`,
        width: 600,
        height: 60
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalURL,
    },
    articleSection: category || 'Home Improvement',
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    inLanguage: 'en-US',
    about: {
      '@type': 'Thing',
      name: category || 'Home Improvement'
    },
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: businessName
    }
  } : null;

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

      {/* JSON-LD */}
      {pageType !== 'article' && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      )}
      {jsonLdService && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      )}
      {jsonLdArticle && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      )}
      {/* FAQPage schema JSON-LD */}
      {faqQuestions.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqQuestions)) }}
        />
      )}
    </>
  );
};

export default SEOHead;