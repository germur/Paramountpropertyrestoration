// Enhanced Schema.org markup for rich snippets
// Generates multiple schema types for better SERP visibility

/**
 * Generate enhanced LocalBusiness schema with all properties
 */
export function generateLocalBusinessSchema({
  name = 'Paramount Property Restoration',
  url = 'https://paramountpropertyrestoration.com',
  phone = '+1-786-602-2217',
  email = 'services@paramountpropertyrestoration.com',
  address = {
    streetAddress: '',
    addressLocality: 'Florida',
    addressRegion: 'FL',
    postalCode: '',
    addressCountry: 'US'
  },
  geo,
  openingHours = 'Mo-Su 00:00-24:00',
  priceRange = '$$',
  areaServed = 'Florida',
  rating = {
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '150'
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}/#localbusiness`,
    name,
    image: `${url}/images/ppr-logo-new.webp`,
    url,
    telephone: phone,
    email,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    geo: geo || undefined,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    areaServed: Array.isArray(areaServed) ? areaServed.map(area => ({
      '@type': 'City',
      name: area
    })) : {
      '@type': 'State',
      name: areaServed
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.ratingValue,
      bestRating: rating.bestRating,
      worstRating: rating.worstRating,
      ratingCount: rating.ratingCount
    },
    sameAs: [
      'https://www.facebook.com/paramountpropertyrestoration',
      'https://www.instagram.com/paramountpropertyrestoration'
    ]
  };
}

/**
 * Generate enhanced Service schema
 */
export function generateServiceSchema({
  name,
  description,
  url,
  provider = 'Paramount Property Restoration',
  providerUrl = 'https://paramountpropertyrestoration.com',
  areaServed = 'Florida',
  serviceType,
  offers = {
    price: '0',
    priceCurrency: 'USD',
    availability: 'InStock',
    url: ''
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}/#service`,
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      url: providerUrl
    },
    areaServed: Array.isArray(areaServed) ? areaServed.map(area => ({
      '@type': 'City',
      name: area
    })) : {
      '@type': 'State',
      name: areaServed
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Emergency ${name}`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `24/7 ${name}`
          }
        }
      ]
    },
    offers: {
      '@type': 'Offer',
      ...offers
    }
  };
}

/**
 * Generate enhanced Article schema with breadcrumb
 */
export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Paramount Property Restoration',
  url,
  siteUrl = 'https://paramountpropertyrestoration.com',
  category = 'Home Improvement',
  keywords = [],
  wordCount
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}/#article`,
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630
    },
    datePublished: datePublished ? new Date(datePublished).toISOString() : undefined,
    dateModified: dateModified ? new Date(dateModified).toISOString() : datePublished ? new Date(datePublished).toISOString() : undefined,
    author: {
      '@type': 'Organization',
      name: author,
      url: siteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Paramount Property Restoration',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/ppr-logo-new.webp`,
        width: 600,
        height: 60
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    articleSection: category,
    keywords: keywords.join(', '),
    wordCount,
    inLanguage: 'en-US',
    about: {
      '@type': 'Thing',
      name: category
    }
  };
}

/**
 * Generate enhanced FAQPage schema
 */
export function generateFAQSchema(questions = []) {
  if (!questions.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': '#faqpage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  };
}

/**
 * Generate HowTo schema for process sections
 */
export function generateHowToSchema({
  name,
  description,
  image,
  totalTime = 'P1D',
  steps = [],
  url
}) {
  if (!steps.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${url}/#howto`,
    name,
    description,
    image: {
      '@type': 'ImageObject',
      url: image
    },
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name || step.title,
      text: step.text || step.description,
      url: step.url || `${url}#step-${index + 1}`,
      image: step.image || image
    }))
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items = [], siteUrl = 'https://paramountpropertyrestoration.com') {
  if (!items.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': '#breadcrumb',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteUrl}${item.url}` : undefined
    }))
  };
}

/**
 * Generate Review schema
 */
export function generateReviewSchema({
  itemReviewed,
  reviews = []
}) {
  if (!reviews.length) return null;

  return reviews.map((review, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `#review-${index}`,
    itemReviewed: {
      '@type': 'Service',
      name: itemReviewed
    },
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: review.text,
    datePublished: review.date
  }));
}

/**
 * Generate Organization schema with full details
 */
export function generateOrganizationSchema({
  name = 'Paramount Property Restoration',
  url = 'https://paramountpropertyrestoration.com',
  logo = '/images/ppr-logo-new.webp',
  phone = '+1-786-602-2217',
  email = 'services@paramountpropertyrestoration.com',
  description = "Florida's premier property restoration and remodeling company. 24/7 emergency services for water, fire, mold, and storm damage. Professional home remodeling for kitchens, bathrooms, and more."
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}/#organization`,
    name,
    url,
    logo: {
      '@type': 'ImageObject',
      url: `${url}${logo}`,
      width: 600,
      height: 60
    },
    description,
    telephone: phone,
    email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florida',
      addressRegion: 'FL',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'Customer Service',
      areaServed: 'US-FL',
      availableLanguage: ['en', 'es']
    },
    sameAs: [
      'https://www.facebook.com/paramountpropertyrestoration',
      'https://www.instagram.com/paramountpropertyrestoration'
    ]
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumb,
  siteUrl = 'https://paramountpropertyrestoration.com'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Paramount Property Restoration'
    },
    breadcrumb: breadcrumb ? {
      '@id': '#breadcrumb'
    } : undefined,
    inLanguage: 'en-US'
  };
}

/**
 * React component to render all schemas
 */
export default function EnhancedSchemas({ schemas = {} }) {
  return (
    <>
      {schemas.organization && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }}
        />
      )}
      {schemas.localBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusiness) }}
        />
      )}
      {schemas.service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }}
        />
      )}
      {schemas.article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }}
        />
      )}
      {schemas.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
      )}
      {schemas.howTo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }}
        />
      )}
      {schemas.breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
      )}
      {schemas.webPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }}
        />
      )}
      {schemas.reviews && schemas.reviews.map((review, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
        />
      ))}
    </>
  );
}
