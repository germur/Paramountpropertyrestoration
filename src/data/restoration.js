// src/data/restoration.js

export const restorationGroups = [
  // ===========================
  // WATER DAMAGE
  // ===========================
  {
    slug: "water-damage",
    name: "Flood Damage Cleanup Florida | 24/7 Water Extraction & Drying",
    template: "water",
    description: "Certified flood damage cleanup in Florida. Emergency water removal, drying, mold prevention & structural stabilization. 24/7 response across Orlando, Miami & Tampa.",
    subservices: [
      {
        slug: "flood-damage",
        title: "Flood Damage Cleanup",
        short: "Cleanup & restoration after flooding",
        nombre: "Flood Damage Cleanup",
        categoria: "restoration",
        seo: {
          title: "Flood Damage Cleanup Florida | 24/7 Water Extraction & Drying",
          description: "Certified flood damage cleanup in Florida. Emergency water removal, drying, mold prevention & structural stabilization. 24/7 response across Orlando, Miami & Tampa.",
        },
        hero: {
          title: "Flood Damage? We Extract Water & Restore Homes Across Florida",
          description: "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety.",
          bgImage: "/images/herowater.jpg",
          gallery: ["/images/waterDamage.jpg", "/images/EmergencyWaterRemoval.jpg", "/images/FloodDamage.jpg"]
        }
      },
      {
        slug: "leak-repair",
        title: "Leak Repair",
        short: "Emergency water removal services",
        nombre: "Leak Repair",
        categoria: "restoration",
        hero: {
          bgImage: "/images/LeakRepair.jpg"
        },
        gallery: ["/images/LeakRepair.jpg", "/images/CeilingWaterDamage.jpg", "/images/waterDamage.jpg"]
      },
      {
        slug: "basement-flooding",
        title: "Basement Flooding",
        short: "Basement flooding restoration",
        nombre: "Basement Flooding",
        categoria: "restoration",
        hero: {
          bgImage: "/images/BasementFlooding.jpg"
        },
        gallery: ["/images/BasementFlooding.jpg", "/images/waterDamage.jpg", "/images/EmergencyWaterRemoval.jpg"]
      },
      {
        slug: "ceiling-water-damage",
        title: "Ceiling Water Damage",
        short: "Ceiling water damage repair",
        nombre: "Ceiling Water Damage",
        categoria: "restoration",
        hero: {
          bgImage: "/images/CeilingWaterDamage.jpg"
        },
        gallery: ["/images/CeilingWaterDamage.jpg", "/images/LeakRepair.jpg", "/images/waterDamage.jpg"]
      },
      {
        slug: "emergency-water-removal",
        title: "Emergency Water Removal",
        short: "Emergency water extraction services",
        nombre: "Emergency Water Removal",
        categoria: "restoration",
        hero: {
          bgImage: "/images/EmergencyWaterRemoval.jpg"
        },
        gallery: ["/images/EmergencyWaterRemoval.jpg", "/images/FloodDamage.jpg", "/images/waterDamage.jpg"]
      }
    ]
  },

  // ===========================
  // FIRE DAMAGE
  // ===========================
  {
    slug: "fire-damage",
    name: "Fire Damage Restoration",
    template: "fire",
    description: "Complete fire and smoke damage restoration services",
    subservices: [
      {
        slug: "smoke-damage",
        title: "Smoke Damage",
        short: "Professional smoke removal",
        nombre: "Smoke Damage",
        categoria: "restoration",
        hero: {
          bgImage: "/images/SmokeDamage.jpg"
        },
        gallery: ["/images/SmokeDamage.jpg", "/images/SootCleanup.jpg", "/images/fireDamage.jpg"]
      },
      {
        slug: "soot-cleanup",
        title: "Soot Cleanup",
        short: "Soot cleanup and removal",
        nombre: "Soot Cleanup",
        categoria: "restoration",
        hero: {
          bgImage: "/images/SootCleanup.jpg"
        },
        gallery: ["/images/SootCleanup.jpg", "/images/SmokeDamage.jpg", "/images/fireDamage.jpg"]
      },
      {
        slug: "fire-damage-repair",
        title: "Fire Damage Repair",
        short: "Complete fire damage restoration",
        nombre: "Fire Damage Repair",
        categoria: "restoration",
        seo: {
          title: "Fire Damage Repair Florida | Smoke & Soot Cleanup",
          description: "Professional fire damage restoration in Florida. Complete fire, smoke, and soot cleanup with structural restoration services.",
          bgImage: "/images/FireDamageRepair.jpg",
          gallery: ["/images/FireDamageRepair.jpg", "/images/herofire.jpg", "/images/fireDamage.jpg"]
        }
      },
      {
        slug: "emergency-fire-response",
        title: "Emergency Fire Response",
        short: "24/7 emergency fire response",
        nombre: "Emergency Fire Response",
        categoria: "restoration",
        hero: {
          bgImage: "/images/EmergencyFireResponse.jpg"
        },
        gallery: ["/images/EmergencyFireResponse.jpg", "/images/herofire.jpg", "/images/fireDamage.jpg"]
      }
    ]
  },

  // ===========================
  // MOLD REMEDIATION
  // ===========================
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    template: "mold",
    description: "Professional mold inspection, testing, and removal services",
    subservices: [
      {
        slug: "mold-inspection",
        title: "Mold Inspection",
        short: "Professional mold testing and inspection",
        nombre: "Mold Inspection",
        categoria: "restoration",
        seo: {
          title: "Mold Inspection Florida | Professional Mold Testing",
          description: "Professional mold inspection and testing services in Florida. Certified inspectors using advanced detection methods.",
          bgImage: "/images/MoldInspection.jpg",
          gallery: ["/images/MoldInspection.jpg", "/images/Moldtesting.jpg", "/images/moldDamage.jpg"]
        }
      },
      {
        slug: "black-mold-removal",
        title: "Black Mold Removal",
        short: "Black mold remediation",
        nombre: "Black Mold Removal",
        categoria: "restoration",
        hero: {
          bgImage: "/images/BlackMoldRemoval.jpg"
        },
        gallery: ["/images/BlackMoldRemoval.jpg", "/images/moldDamage.jpg", "/images/MoldPrevention.jpg"]
      },
      {
        slug: "mold-prevention",
        title: "Mold Prevention",
        short: "Mold prevention services",
        nombre: "Mold Prevention",
        categoria: "restoration",
        hero: {
          bgImage: "/images/MoldPrevention.jpg"
        },
        gallery: ["/images/MoldPrevention.jpg", "/images/moldDamage.jpg", "/images/MoldInspection.jpg"]
      },
      {
        slug: "mold-testing",
        title: "Mold Testing",
        short: "Professional mold testing",
        nombre: "Mold Testing",
        categoria: "restoration",
        hero: {
          bgImage: "/images/Moldtesting.jpg"
        },
        gallery: ["/images/Moldtesting.jpg", "/images/MoldInspection.jpg", "/images/moldDamage.jpg"]
      }
    ]
  },

  // ===========================
  // STORM DAMAGE
  // ===========================
  {
    slug: "storm-damage",
    name: "Storm Damage Restoration",
    template: "storm",
    description: "Hurricane and storm damage restoration services",
    subservices: [
      {
        slug: "hurricane-damage",
        title: "Hurricane Damage",
        short: "Hurricane damage repair",
        nombre: "Hurricane Damage",
        categoria: "restoration",
        seo: {
          title: "Hurricane Damage Restoration Florida | Emergency Storm Response",
          description: "Expert hurricane damage repair services in Florida. Emergency response, roof repairs, water damage cleanup, and reconstruction.",
          bgImage: "/images/HurricaneDamage.jpg",
          gallery: ["/images/HurricaneDamage.jpg", "/images/heroStorm.jpg", "/images/stormDamage.jpg"]
        }
      },
      {
        slug: "wind-damage",
        title: "Wind Damage",
        short: "Wind damage repair services",
        nombre: "Wind Damage",
        categoria: "restoration",
        hero: {
          bgImage: "/images/WindDamage.jpg"
        },
        gallery: ["/images/WindDamage.jpg", "/images/heroStorm.jpg", "/images/stormDamage.jpg"]
      },
      {
        slug: "storm-debris-removal",
        title: "Storm Debris Removal",
        short: "Storm debris cleanup and removal",
        nombre: "Storm Debris Removal",
        categoria: "restoration",
        hero: {
          bgImage: "/images/StormDebrisRemoval.jpg"
        },
        gallery: ["/images/StormDebrisRemoval.jpg", "/images/heroStorm.jpg", "/images/stormDamage.jpg"]
      },
      {
        slug: "emergency-storm-repair",
        title: "Emergency Storm Repair",
        short: "24/7 emergency storm response",
        nombre: "Emergency Storm Repair",
        categoria: "restoration",
        hero: {
          bgImage: "/images/EmergencyStormRepair.jpg"
        },
        gallery: ["/images/EmergencyStormRepair.jpg", "/images/heroStorm.jpg", "/images/stormDamage.jpg"]
      }
    ]
  },

  // ===========================
  // MITIGATION SERVICES
  // ===========================
  {
    slug: "mitigation-services",
    name: "Mitigation Services",
    template: "mitigation",
    description: "Professional damage mitigation services",
    subservices: [
      {
        slug: "water-mitigation",
        title: "Water Mitigation",
        short: "Water damage mitigation",
        nombre: "Water Mitigation",
        categoria: "restoration",
        hero: {
          bgImage: "/images/mitigation.jpg"
        },
        gallery: ["/images/mitigation.jpg", "/images/waterDamage.jpg", "/images/herowater.jpg"]
      },
      {
        slug: "fire-mitigation",
        title: "Fire Mitigation",
        short: "Fire damage mitigation",
        nombre: "Fire Mitigation",
        categoria: "restoration",
        hero: {
          bgImage: "/images/mitigation.jpg"
        },
        gallery: ["/images/mitigation.jpg", "/images/fireDamage.jpg", "/images/herofire.jpg"]
      },
      {
        slug: "mold-mitigation",
        title: "Mold Mitigation",
        short: "Mold damage mitigation",
        nombre: "Mold Mitigation",
        categoria: "restoration",
        hero: {
          bgImage: "/images/mitigation.jpg"
        },
        gallery: ["/images/mitigation.jpg", "/images/moldDamage.jpg", "/images/heroMold.jpg"]
      },
      {
        slug: "storm-mitigation",
        title: "Storm Mitigation",
        short: "Storm damage mitigation",
        nombre: "Storm Mitigation",
        categoria: "restoration",
        hero: {
          bgImage: "/images/mitigation.jpg"
        },
        gallery: ["/images/mitigation.jpg", "/images/stormDamage.jpg", "/images/heroStorm.jpg"]
      }
    ]
  },

  // ===========================
  // REMODELING SERVICES
  // ===========================
  {
    slug: "remodeling-services",
    name: "Remodeling Services",
    template: "remodeling",
    description: "Professional home remodeling and renovation services",
    subservices: [
      {
        slug: "kitchen-remodeling",
        title: "Kitchen Remodeling",
        short: "Complete kitchen renovation",
        nombre: "Kitchen Remodeling",
        categoria: "remodeling",
        seo: {
          title: "Kitchen Remodeling Florida | Custom Kitchen Renovation",
          description: "Professional kitchen remodeling services in Florida. Custom cabinets, countertops, and complete kitchen renovations.",
        }
      },
      {
        slug: "bathroom-remodeling",
        title: "Bathroom Remodeling",
        short: "Complete bathroom renovation",
        nombre: "Bathroom Remodeling",
        categoria: "remodeling",
        seo: {
          title: "Bathroom Remodeling Florida | Professional Renovation Services",
          description: "Expert bathroom remodeling services in Florida. Custom designs, quality materials, and professional installation.",
        }
      },
      {
        slug: "bedroom-remodeling",
        title: "Bedroom Remodeling",
        short: "Bedroom renovation and updates",
        nombre: "Bedroom Remodeling",
        categoria: "remodeling",
        seo: {
          title: "Bedroom Remodeling Florida | Custom Bedroom Renovation",
          description: "Transform your bedroom with professional remodeling services in Florida. Custom designs and quality craftsmanship.",
        }
      },
      {
        slug: "living-dining-remodeling",
        title: "Living & Dining Remodeling",
        short: "Living and dining room renovation",
        nombre: "Living & Dining Remodeling",
        categoria: "remodeling",
        seo: {
          title: "Living & Dining Remodeling Florida | Open Concept Renovation",
          description: "Professional living and dining room remodeling in Florida. Create open, modern spaces for entertaining.",
        }
      },
      {
        slug: "home-additions-remodeling",
        title: "Home Additions Remodeling",
        short: "Home additions and expansions",
        nombre: "Home Additions Remodeling",
        categoria: "remodeling",
        seo: {
          title: "Home Additions Florida | Room Additions & Expansions",
          description: "Expert home additions and expansion services in Florida. Add space and value to your home.",
        }
      }
    ]
  }
];

// ===========================
// CITIES DATA
// ===========================
export const cities = [
  // Central Florida
  { slug: "orlando", name: "Orlando", nombre: "Orlando", county: "Orange County", region: "Central Florida" },
  { slug: "kissimmee", name: "Kissimmee", nombre: "Kissimmee", county: "Osceola County", region: "Central Florida" },
  { slug: "lakeland", name: "Lakeland", nombre: "Lakeland", county: "Polk County", region: "Central Florida" },
  { slug: "winter-garden", name: "Winter Garden", nombre: "Winter Garden", county: "Orange County", region: "Central Florida" },
  { slug: "clermont", name: "Clermont", nombre: "Clermont", county: "Lake County", region: "Central Florida" },
  { slug: "leesburg", name: "Leesburg", nombre: "Leesburg", county: "Lake County", region: "Central Florida" },
  { slug: "ocala", name: "Ocala", nombre: "Ocala", county: "Marion County", region: "Central Florida" },
  { slug: "deltona", name: "Deltona", nombre: "Deltona", county: "Volusia County", region: "Central Florida" },
  { slug: "winter-haven", name: "Winter Haven", nombre: "Winter Haven", county: "Polk County", region: "Central Florida" },
  { slug: "sanford", name: "Sanford", nombre: "Sanford", county: "Seminole County", region: "Central Florida" },
  { slug: "apopka", name: "Apopka", nombre: "Apopka", county: "Orange County", region: "Central Florida" },
  { slug: "plant-city", name: "Plant City", nombre: "Plant City", county: "Hillsborough County", region: "Central Florida" },

  // Tampa Bay Area
  { slug: "tampa", name: "Tampa", nombre: "Tampa", county: "Hillsborough County", region: "Tampa Bay" },
  { slug: "st-petersburg", name: "St. Petersburg", nombre: "St. Petersburg", county: "Pinellas County", region: "Tampa Bay" },
  { slug: "clearwater", name: "Clearwater", nombre: "Clearwater", county: "Pinellas County", region: "Tampa Bay" },
  { slug: "brandon", name: "Brandon", nombre: "Brandon", county: "Hillsborough County", region: "Tampa Bay" },
  { slug: "largo", name: "Largo", nombre: "Largo", county: "Pinellas County", region: "Tampa Bay" },
  { slug: "pinellas-park", name: "Pinellas Park", nombre: "Pinellas Park", county: "Pinellas County", region: "Tampa Bay" },
  { slug: "temple-terrace", name: "Temple Terrace", nombre: "Temple Terrace", county: "Hillsborough County", region: "Tampa Bay" },
  { slug: "safety-harbor", name: "Safety Harbor", nombre: "Safety Harbor", county: "Pinellas County", region: "Tampa Bay" },

  // Southwest Florida
  { slug: "fort-myers", name: "Fort Myers", nombre: "Fort Myers", county: "Lee County", region: "Southwest Florida" },
  { slug: "cape-coral", name: "Cape Coral", nombre: "Cape Coral", county: "Lee County", region: "Southwest Florida" },
  { slug: "naples", name: "Naples", nombre: "Naples", county: "Collier County", region: "Southwest Florida" },
  { slug: "bonita-springs", name: "Bonita Springs", nombre: "Bonita Springs", county: "Lee County", region: "Southwest Florida" },
  { slug: "estero", name: "Estero", nombre: "Estero", county: "Lee County", region: "Southwest Florida" },
  { slug: "sarasota", name: "Sarasota", nombre: "Sarasota", county: "Sarasota County", region: "Southwest Florida" },
  { slug: "bradenton", name: "Bradenton", nombre: "Bradenton", county: "Manatee County", region: "Southwest Florida" },
  { slug: "venice", name: "Venice", nombre: "Venice", county: "Sarasota County", region: "Southwest Florida" },
  { slug: "port-charlotte", name: "Port Charlotte", nombre: "Port Charlotte", county: "Charlotte County", region: "Southwest Florida" },
  { slug: "north-port", name: "North Port", nombre: "North Port", county: "Sarasota County", region: "Southwest Florida" },

  // South Florida
  { slug: "miami", name: "Miami", nombre: "Miami", county: "Miami-Dade County", region: "South Florida" },
  { slug: "fort-lauderdale", name: "Fort Lauderdale", nombre: "Fort Lauderdale", county: "Broward County", region: "South Florida" },
  { slug: "hollywood", name: "Hollywood", nombre: "Hollywood", county: "Broward County", region: "South Florida" },
  { slug: "coral-gables", name: "Coral Gables", nombre: "Coral Gables", county: "Miami-Dade County", region: "South Florida" },
  { slug: "hialeah", name: "Hialeah", nombre: "Hialeah", county: "Miami-Dade County", region: "South Florida" },
  { slug: "plantation", name: "Plantation", nombre: "Plantation", county: "Broward County", region: "South Florida" },
  { slug: "davie", name: "Davie", nombre: "Davie", county: "Broward County", region: "South Florida" },
  { slug: "sunrise", name: "Sunrise", nombre: "Sunrise", county: "Broward County", region: "South Florida" },
  { slug: "pompano-beach", name: "Pompano Beach", nombre: "Pompano Beach", county: "Broward County", region: "South Florida" },
  { slug: "deerfield-beach", name: "Deerfield Beach", nombre: "Deerfield Beach", county: "Broward County", region: "South Florida" },
  { slug: "boca-raton", name: "Boca Raton", nombre: "Boca Raton", county: "Palm Beach County", region: "South Florida" },
  { slug: "west-palm-beach", name: "West Palm Beach", nombre: "West Palm Beach", county: "Palm Beach County", region: "South Florida" },
  { slug: "miramar", name: "Miramar", nombre: "Miramar", county: "Broward County", region: "South Florida" },
  { slug: "pembroke-pines", name: "Pembroke Pines", nombre: "Pembroke Pines", county: "Broward County", region: "South Florida" },
  { slug: "homestead", name: "Homestead", nombre: "Homestead", county: "Miami-Dade County", region: "South Florida" },

  // Treasure Coast
  { slug: "port-st-lucie", name: "Port St. Lucie", nombre: "Port St. Lucie", county: "St. Lucie County", region: "Treasure Coast" },
  { slug: "fort-pierce", name: "Fort Pierce", nombre: "Fort Pierce", county: "St. Lucie County", region: "Treasure Coast" },
  { slug: "stuart", name: "Stuart", nombre: "Stuart", county: "Martin County", region: "Treasure Coast" },
  { slug: "jensen-beach", name: "Jensen Beach", nombre: "Jensen Beach", county: "Martin County", region: "Treasure Coast" },
  { slug: "vero-beach", name: "Vero Beach", nombre: "Vero Beach", county: "Indian River County", region: "Treasure Coast" },
  { slug: "jupiter", name: "Jupiter", nombre: "Jupiter", county: "Palm Beach County", region: "Treasure Coast" },
  { slug: "palm-city", name: "Palm City", nombre: "Palm City", county: "Martin County", region: "Treasure Coast" },
  { slug: "hobe-sound", name: "Hobe Sound", nombre: "Hobe Sound", county: "Martin County", region: "Treasure Coast" },

  // Additional Southwest Florida
  { slug: "marco-island", name: "Marco Island", nombre: "Marco Island", county: "Collier County", region: "Southwest Florida" },

  // Northeast Florida  
  { slug: "jacksonville", name: "Jacksonville", nombre: "Jacksonville", county: "Duval County", region: "Northeast Florida" },
  { slug: "st-augustine", name: "St. Augustine", nombre: "St. Augustine", county: "St. Johns County", region: "Northeast Florida" },
  { slug: "gainesville", name: "Gainesville", nombre: "Gainesville", county: "Alachua County", region: "Northeast Florida" },
  { slug: "palm-coast", name: "Palm Coast", nombre: "Palm Coast", county: "Flagler County", region: "Northeast Florida" },

  // Northwest Florida
  { slug: "tallahassee", name: "Tallahassee", nombre: "Tallahassee", county: "Leon County", region: "Northwest Florida" },
  { slug: "pensacola", name: "Pensacola", nombre: "Pensacola", county: "Escambia County", region: "Northwest Florida" },
  { slug: "panama-city", name: "Panama City", nombre: "Panama City", county: "Bay County", region: "Northwest Florida" }
];

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Get all restoration services only
export function getRestorationServices() {
  return restorationGroups.filter(group =>
    group.slug !== "remodeling-services"
  );
}

// Get all remodeling services only  
export function getRemodelingServices() {
  return restorationGroups.filter(group =>
    group.slug === "remodeling-services"
  );
}

// Get all services (restoration + remodeling)
export function getAllServices() {
  return restorationGroups;
}

// Get service by slug
export function getServiceBySlug(slug) {
  for (const group of restorationGroups) {
    const service = group.subservices.find(s => s.slug === slug);
    if (service) {
      return { ...service, group: group.slug };
    }
  }
  return null;
}

// Get city by slug
export function getCityBySlug(slug) {
  return cities.find(city => city.slug === slug);
}

// FUNCIÓN CORREGIDA - Generate all service + city combinations for restoration services
export function getAllRestorationCombinations() {
  const combinations = [];

  restorationGroups.forEach(group => {
    group.subservices.forEach(subservice => {
      cities.forEach(city => {
        combinations.push({
          service: group.slug,
          subcategory: subservice.slug,
          ciudad: city.slug,
          servicioData: subservice,
          ciudadData: city,
          groupData: group,
          serviceName: subservice.title,
          cityName: city.name,
          path: `/restoration/${group.slug}/${subservice.slug}/${city.slug}`
        });
      });
    });
  });

  return combinations;
}

// Generate all service + city combinations for remodeling services
export function getAllRemodelingCombinations() {
  const remodelingServices = getRemodelingServices();
  const combinations = [];

  remodelingServices.forEach(group => {
    group.subservices.forEach(service => {
      cities.forEach(city => {
        combinations.push({
          service: service.slug,
          city: city.slug,
          serviceData: service,
          cityData: city,
          serviceName: service.title,
          cityName: city.name,
          path: `/services/${service.slug}/${city.slug}`
        });
      });
    });
  });

  return combinations;
}

// Generate all combinations (restoration + remodeling)
export function getAllCombinations() {
  return [
    ...getAllRestorationCombinations(),
    ...getAllRemodelingCombinations()
  ];
}

// Get service data by slug (for dynamic routes)
export function getServiceData(serviceSlug) {
  for (const group of restorationGroups) {
    const service = group.subservices.find(s => s.slug === serviceSlug);
    if (service) {
      return {
        ...service,
        group: group.slug,
        groupName: group.name,
        template: group.template
      };
    }
  }
  return null;
}

// Get city data by slug (for dynamic routes)
export function getCityData(citySlug) {
  return cities.find(city => city.slug === citySlug);
}

// Statistics
export function getStats() {
  const restorationServices = getRestorationServices().reduce((total, group) => total + group.subservices.length, 0);
  const remodelingServices = getRemodelingServices().reduce((total, group) => total + group.subservices.length, 0);

  return {
    totalGroups: restorationGroups.length,
    restorationServices,
    remodelingServices,
    totalServices: restorationServices + remodelingServices,
    totalCities: cities.length,
    totalCombinations: getAllCombinations().length
  };
}