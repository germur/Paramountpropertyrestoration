// src/lib/city-content-generator.js
/**
 * Generates unique, localized content for each city/service combination
 * to prevent "thin content" and improve indexation
 */

// City-specific data for Florida locations
const cityFactsDatabase = {
  // South Florida - Miami Metro Area
  miami: {
    region: "South Florida",
    county: "Miami-Dade County",
    population: "470,000+",
    climate: "tropical monsoon",
    risks: ["hurricanes", "flooding", "high humidity", "mold growth"],
    neighborhoods: ["Downtown", "Brickell", "Coral Gables", "Coconut Grove", "Wynwood"],
    localNote: "Miami's coastal location and high humidity make water damage and mold especially common"
  },
  "fort-lauderdale": {
    region: "South Florida",
    county: "Broward County",
    population: "180,000+",
    climate: "tropical rainforest",
    risks: ["hurricanes", "storm surge", "heavy rainfall", "mold"],
    neighborhoods: ["Las Olas", "Victoria Park", "Coral Ridge", "Harbor Beach"],
    localNote: "Fort Lauderdale's proximity to the ocean requires vigilant storm damage preparation"
  },
  hollywood: {
    region: "South Florida",
    county: "Broward County",
    population: "150,000+",
    climate: "tropical",
    risks: ["coastal flooding", "hurricanes", "water damage"],
    neighborhoods: ["Hollywood Beach", "Downtown Hollywood", "West Hollywood"],
    localNote: "Hollywood's beachfront properties face unique restoration challenges"
  },

  // Central Florida - Orlando Metro Area
  orlando: {
    region: "Central Florida",
    county: "Orange County",
    population: "310,000+",
    climate: "humid subtropical",
    risks: ["severe thunderstorms", "flooding", "fire damage", "mold"],
    neighborhoods: ["Downtown", "Winter Park", "College Park", "Baldwin Park", "Dr. Phillips"],
    localNote: "Orlando's summer storms and humidity create frequent water damage issues"
  },
  kissimmee: {
    region: "Central Florida",
    county: "Osceola County",
    population: "80,000+",
    climate: "humid subtropical",
    risks: ["flooding", "storm damage", "high humidity"],
    neighborhoods: ["Celebration", "Poinciana", "Buenaventura Lakes"],
    localNote: "Kissimmee's rental properties require quick restoration response times"
  },
  lakeland: {
    region: "Central Florida",
    county: "Polk County",
    population: "110,000+",
    climate: "humid subtropical",
    risks: ["lightning strikes", "severe storms", "flooding"],
    neighborhoods: ["Lake Morton", "Downtown", "South Lakeland"],
    localNote: "Lakeland is Florida's lightning capital, making fire damage restoration critical"
  },

  // Tampa Bay Area
  tampa: {
    region: "Tampa Bay",
    county: "Hillsborough County",
    population: "400,000+",
    climate: "humid subtropical",
    risks: ["hurricanes", "flooding", "storm surge", "mold"],
    neighborhoods: ["Hyde Park", "Ybor City", "South Tampa", "Channelside", "Westshore"],
    localNote: "Tampa Bay's storm surge risk makes emergency water extraction essential"
  },
  "st-petersburg": {
    region: "Tampa Bay",
    county: "Pinellas County",
    population: "260,000+",
    climate: "humid subtropical",
    risks: ["hurricanes", "flooding", "coastal damage"],
    neighborhoods: ["Downtown", "Old Northeast", "Snell Isle", "Pasadena"],
    localNote: "St. Petersburg's peninsula location increases flood and water damage risks"
  },
  clearwater: {
    region: "Tampa Bay",
    county: "Pinellas County",
    population: "120,000+",
    climate: "humid subtropical",
    risks: ["hurricanes", "beach erosion", "flooding"],
    neighborhoods: ["Clearwater Beach", "Downtown", "Countryside"],
    localNote: "Clearwater's beachfront properties require specialized storm restoration"
  },

  // Southwest Florida
  sarasota: {
    region: "Southwest Florida",
    county: "Sarasota County",
    population: "55,000+",
    climate: "humid subtropical",
    risks: ["hurricanes", "storm surge", "flooding", "mold"],
    neighborhoods: ["Downtown", "St. Armands", "Siesta Key", "Lido Key"],
    localNote: "Sarasota's luxury properties demand premium restoration services"
  },
  "fort-myers": {
    region: "Southwest Florida",
    county: "Lee County",
    population: "85,000+",
    climate: "tropical savanna",
    risks: ["hurricanes", "flooding", "storm damage"],
    neighborhoods: ["Downtown", "Fort Myers Beach", "McGregor"],
    localNote: "Fort Myers faces significant hurricane risk requiring rapid response"
  },
  naples: {
    region: "Southwest Florida",
    county: "Collier County",
    population: "23,000+",
    climate: "tropical savanna",
    risks: ["hurricanes", "flooding", "storm surge"],
    neighborhoods: ["Old Naples", "Park Shore", "Pelican Bay", "Port Royal"],
    localNote: "Naples' high-end properties require expert restoration craftsmanship"
  },

  // North Florida
  jacksonville: {
    region: "Northeast Florida",
    county: "Duval County",
    population: "950,000+",
    climate: "humid subtropical",
    risks: ["hurricanes", "flooding", "storm damage"],
    neighborhoods: ["Riverside", "San Marco", "Beaches", "Downtown"],
    localNote: "Jacksonville's river location creates unique flood damage challenges"
  },
  gainesville: {
    region: "North Central Florida",
    county: "Alachua County",
    population: "140,000+",
    climate: "humid subtropical",
    risks: ["severe storms", "flooding", "lightning"],
    neighborhoods: ["Downtown", "Duck Pond", "University Heights"],
    localNote: "Gainesville's student housing requires fast, affordable restoration"
  },
  tallahassee: {
    region: "Florida Panhandle",
    county: "Leon County",
    population: "195,000+",
    climate: "humid subtropical",
    risks: ["hurricanes", "tornadoes", "severe storms"],
    neighborhoods: ["Downtown", "Collegetown", "Myers Park"],
    localNote: "Tallahassee's government buildings require certified restoration contractors"
  }
};

/**
 * Generate unique intro paragraph for city/service combination
 */
export function generateCityIntro(citySlug, serviceName, isEmergency = false) {
  const city = cityFactsDatabase[citySlug];
  if (!city) return null;

  const urgency = isEmergency ? "immediate 24/7" : "professional";
  const population = city.population;

  return `Serving ${city.region}'s ${population} residents, our ${urgency} ${serviceName.toLowerCase()} team responds rapidly to emergencies throughout ${city.county}. ${city.localNote}. With years of experience in ${city.region}, we understand the unique restoration challenges facing ${citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} homeowners and businesses.`;
}

/**
 * Generate local risk assessment paragraph
 */
export function generateLocalRisks(citySlug, serviceType) {
  const city = cityFactsDatabase[citySlug];
  if (!city) return null;

  const risks = city.risks.slice(0, 3).join(", ");
  const climate = city.climate;

  return `${city.county} faces elevated risks from ${risks} due to its ${climate} climate. Properties in neighborhoods like ${city.neighborhoods.slice(0, 2).join(" and ")} require specialized ${serviceType.toLowerCase()} services that account for these local environmental factors.`;
}

/**
 * Generate neighborhood-specific content
 */
export function generateNeighborhoodContent(citySlug) {
  const city = cityFactsDatabase[citySlug];
  if (!city) return null;

  const neighborhoods = city.neighborhoods.join(", ");
  return `We proudly serve all ${city.county} neighborhoods including ${neighborhoods}. Our local team understands the specific restoration needs of each area and provides fast response times throughout ${city.region}.`;
}

/**
 * Generate FAQ specific to city
 */
export function generateCityFAQs(citySlug, serviceName) {
  const city = cityFactsDatabase[citySlug];
  if (!city) return [];

  const cityName = citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return [
    {
      question: `How quickly can you respond to ${serviceName.toLowerCase()} emergencies in ${cityName}?`,
      answer: `We provide 24/7 emergency response throughout ${city.county} with typical arrival times of 60-90 minutes. Our ${city.region} team is always ready to respond to urgent ${serviceName.toLowerCase()} situations.`
    },
    {
      question: `Do you service all neighborhoods in ${cityName}?`,
      answer: `Yes! We serve all ${city.county} areas including ${city.neighborhoods.slice(0, 3).join(", ")}, and surrounding communities throughout ${city.region}.`
    },
    {
      question: `What makes ${serviceName.toLowerCase()} in ${cityName} different?`,
      answer: `${city.localNote}. Our team has specialized training and equipment to handle the unique ${serviceName.toLowerCase()} challenges in ${city.region}, from ${city.risks[0]} to ${city.risks[1]}.`
    }
  ];
}

/**
 * Get city data for a given slug
 */
export function getCityData(citySlug) {
  return cityFactsDatabase[citySlug] || null;
}

/**
 * Check if city has content available
 */
export function hasCityContent(citySlug) {
  return !!cityFactsDatabase[citySlug];
}

/**
 * Get all cities with content
 */
export function getAvailableCities() {
  return Object.keys(cityFactsDatabase);
}
