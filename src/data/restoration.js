// src/data/restoration.js - CÓDIGO FINAL CORREGIDO

export const restorationGroups = [
  {
    slug: "water-damage",
    name: "Water Damage Restoration",
    template: "water",
    description: "24/7 water damage restoration services across Florida",
    subservices: [
      {
        slug: "flood-damage",
        title: "Flood Damage",
        nombre: "Flood Damage",
        categoria: "restoration"
      },
      {
        slug: "leak-repair",
        title: "Leak Repair", 
        nombre: "Leak Repair",
        categoria: "restoration"
      },
      {
        slug: "basement-flooding",
        title: "Basement Flooding",
        nombre: "Basement Flooding",
        categoria: "restoration"
      },
      {
        slug: "ceiling-water-damage",
        title: "Ceiling Water Damage",
        nombre: "Ceiling Water Damage",
        categoria: "restoration"
      },
      {
        slug: "emergency-water-removal",
        title: "Emergency Water Removal",
        nombre: "Emergency Water Removal",
        categoria: "restoration"
      }
    ]
  },
  {
    slug: "fire-damage",
    name: "Fire Damage Restoration",
    template: "fire",
    description: "Complete fire and smoke damage restoration services",
    subservices: [
      {
        slug: "smoke-damage",
        title: "Smoke Damage",
        nombre: "Smoke Damage",
        categoria: "restoration"
      },
      {
        slug: "soot-cleanup",
        title: "Soot Cleanup",
        nombre: "Soot Cleanup",
        categoria: "restoration"
      },
      {
        slug: "fire-damage-repair",
        title: "Fire Damage Repair",
        nombre: "Fire Damage Repair",
        categoria: "restoration"
      },
      {
        slug: "emergency-fire-response",
        title: "Emergency Fire Response",
        nombre: "Emergency Fire Response",
        categoria: "restoration"
      }
    ]
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    template: "mold",
    description: "Professional mold inspection, testing, and removal services",
    subservices: [
      {
        slug: "mold-inspection",
        title: "Mold Inspection",
        nombre: "Mold Inspection",
        categoria: "restoration"
      },
      {
        slug: "black-mold-removal",
        title: "Black Mold Removal",
        nombre: "Black Mold Removal",
        categoria: "restoration"
      },
      {
        slug: "mold-prevention",
        title: "Mold Prevention",
        nombre: "Mold Prevention", 
        categoria: "restoration"
      },
      {
        slug: "mold-testing",
        title: "Mold Testing",
        nombre: "Mold Testing",
        categoria: "restoration"
      }
    ]
  },
  {
    slug: "storm-damage",
    name: "Storm Damage Restoration",
    template: "storm",
    description: "Hurricane and storm damage restoration services",
    subservices: [
      {
        slug: "hurricane-damage",
        title: "Hurricane Damage",
        nombre: "Hurricane Damage",
        categoria: "restoration"
      },
      {
        slug: "wind-damage",
        title: "Wind Damage",
        nombre: "Wind Damage",
        categoria: "restoration"
      },
      {
        slug: "storm-debris-removal",
        title: "Storm Debris Removal",
        nombre: "Storm Debris Removal",
        categoria: "restoration"
      },
      {
        slug: "emergency-storm-repair",
        title: "Emergency Storm Repair",
        nombre: "Emergency Storm Repair",
        categoria: "restoration"
      }
    ]
  },
  {
    slug: "mitigation-services",
    name: "Mitigation Services",
    template: "mitigation",
    description: "Professional damage mitigation services",
    subservices: [
      {
        slug: "water-mitigation",
        title: "Water Mitigation",
        nombre: "Water Mitigation",
        categoria: "restoration"
      },
      {
        slug: "fire-mitigation",
        title: "Fire Mitigation",
        nombre: "Fire Mitigation",
        categoria: "restoration"
      },
      {
        slug: "mold-mitigation",
        title: "Mold Mitigation",
        nombre: "Mold Mitigation",
        categoria: "restoration"
      },
      {
        slug: "storm-mitigation",
        title: "Storm Mitigation",
        nombre: "Storm Mitigation",
        categoria: "restoration"
      }
    ]
  }
];

export const remodelingServices = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    nombre: "Kitchen Remodeling",
    categoria: "remodeling"
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    nombre: "Bathroom Remodeling",
    categoria: "remodeling"
  },
  {
    slug: "home-additions-remodeling",
    title: "Home Additions Remodeling",
    nombre: "Home Additions Remodeling",
    categoria: "remodeling"
  },
  {
    slug: "living-dining-remodeling",
    title: "Living Dining Remodeling",
    nombre: "Living Dining Remodeling",
    categoria: "remodeling"
  },
  {
    slug: "bedroom-remodeling",
    title: "Bedroom Remodeling",
    nombre: "Bedroom Remodeling",
    categoria: "remodeling"
  }
];

export const cities = [
  // Central Florida
  { slug: "orlando", name: "Orlando", nombre: "Orlando", county: "Orange County", region: "Central Florida" },
  { slug: "altamonte-springs", name: "Altamonte Springs", nombre: "Altamonte Springs", county: "Seminole County", region: "Central Florida" },
  { slug: "kissimmee", name: "Kissimmee", nombre: "Kissimmee", county: "Osceola County", region: "Central Florida" },
  { slug: "oviedo", name: "Oviedo", nombre: "Oviedo", county: "Seminole County", region: "Central Florida" },
  { slug: "clermont", name: "Clermont", nombre: "Clermont", county: "Lake County", region: "Central Florida" },
  { slug: "lakeland", name: "Lakeland", nombre: "Lakeland", county: "Polk County", region: "Central Florida" },
  { slug: "winter-garden", name: "Winter Garden", nombre: "Winter Garden", county: "Orange County", region: "Central Florida" },

  // Tampa Bay
  { slug: "tampa", name: "Tampa", nombre: "Tampa", county: "Hillsborough County", region: "Tampa Bay" },
  { slug: "brandon", name: "Brandon", nombre: "Brandon", county: "Hillsborough County", region: "Tampa Bay" },
  { slug: "largo", name: "Largo", nombre: "Largo", county: "Pinellas County", region: "Tampa Bay" },
  { slug: "sarasota", name: "Sarasota", nombre: "Sarasota", county: "Sarasota County", region: "Tampa Bay" },
  { slug: "st-petersburg", name: "St. Petersburg", nombre: "St. Petersburg", county: "Pinellas County", region: "Tampa Bay" },
  { slug: "bradenton", name: "Bradenton", nombre: "Bradenton", county: "Manatee County", region: "Tampa Bay" },
  { slug: "clearwater", name: "Clearwater", nombre: "Clearwater", county: "Pinellas County", region: "Tampa Bay" },

  // South Florida
  { slug: "fort-lauderdale", name: "Fort Lauderdale", nombre: "Fort Lauderdale", county: "Broward County", region: "South Florida" },
  { slug: "homestead", name: "Homestead", nombre: "Homestead", county: "Miami-Dade County", region: "South Florida" },
  { slug: "miami", name: "Miami", nombre: "Miami", county: "Miami-Dade County", region: "South Florida" },
  { slug: "pembroke-pines", name: "Pembroke Pines", nombre: "Pembroke Pines", county: "Broward County", region: "South Florida" },
  { slug: "west-palm-beach", name: "West Palm Beach", nombre: "West Palm Beach", county: "Palm Beach County", region: "South Florida" },
  { slug: "miramar", name: "Miramar", nombre: "Miramar", county: "Broward County", region: "South Florida" },
  { slug: "hollywood", name: "Hollywood", nombre: "Hollywood", county: "Broward County", region: "South Florida" },
  { slug: "boca-raton", name: "Boca Raton", nombre: "Boca Raton", county: "Palm Beach County", region: "South Florida" },
  { slug: "coral-gables", name: "Coral Gables", nombre: "Coral Gables", county: "Miami-Dade County", region: "South Florida" },

  // Southwest Florida
  { slug: "bonita-springs", name: "Bonita Springs", nombre: "Bonita Springs", county: "Lee County", region: "Southwest Florida" },
  { slug: "estero", name: "Estero", nombre: "Estero", county: "Lee County", region: "Southwest Florida" },
  { slug: "fort-myers", name: "Fort Myers", nombre: "Fort Myers", county: "Lee County", region: "Southwest Florida" },
  { slug: "venice", name: "Venice", nombre: "Venice", county: "Sarasota County", region: "Southwest Florida" },
  { slug: "naples", name: "Naples", nombre: "Naples", county: "Collier County", region: "Southwest Florida" },
  { slug: "cape-coral", name: "Cape Coral", nombre: "Cape Coral", county: "Lee County", region: "Southwest Florida" },
  { slug: "marco-island", name: "Marco Island", nombre: "Marco Island", county: "Collier County", region: "Southwest Florida" },
  { slug: "port-charlotte", name: "Port Charlotte", nombre: "Port Charlotte", county: "Charlotte County", region: "Southwest Florida" },

  // Treasure Coast
  { slug: "stuart", name: "Stuart", nombre: "Stuart", county: "Martin County", region: "Treasure Coast" },
  { slug: "jensen-beach", name: "Jensen Beach", nombre: "Jensen Beach", county: "Martin County", region: "Treasure Coast" },
  { slug: "port-st-lucie", name: "Port St. Lucie", nombre: "Port St. Lucie", county: "St. Lucie County", region: "Treasure Coast" },
  { slug: "fort-pierce", name: "Fort Pierce", nombre: "Fort Pierce", county: "St. Lucie County", region: "Treasure Coast" },
  { slug: "jupiter", name: "Jupiter", nombre: "Jupiter", county: "Palm Beach County", region: "Treasure Coast" },
  { slug: "vero-beach", name: "Vero Beach", nombre: "Vero Beach", county: "Indian River County", region: "Treasure Coast" },
  { slug: "palm-city", name: "Palm City", nombre: "Palm City", county: "Martin County", region: "Treasure Coast" },
  { slug: "hobe-sound", name: "Hobe Sound", nombre: "Hobe Sound", county: "Martin County", region: "Treasure Coast" }
];

// FUNCIONES PARA RUTAS DINÁMICAS
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
          groupData: group
        });
      });
    });
  });
  
  return combinations;
}

export function getAllServicesCombinations() {
  const combinations = [];
  
  remodelingServices.forEach(service => {
    cities.forEach(city => {
      combinations.push({
        service: service.slug,
        ciudad: city.slug,
        servicioData: service,
        ciudadData: city
      });
    });
  });
  
  return combinations;
}

export function getRestorationGroupCombinations() {
  const combinations = [];
  
  restorationGroups.forEach(group => {
    group.subservices.forEach(subservice => {
      combinations.push({
        group: group.slug,
        subservice: subservice.slug,
        groupData: group,
        subData: subservice
      });
    });
  });
  
  return combinations;
}