// src/data/services.js
// Import cities from restoration data to ensure consistency
import { cities as restorationCities } from "./restoration.js";

export const serviceGroups = [
  // ===========================
  // KITCHEN REMODELING
  // ===========================
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling Services",
    template: "kitchen",
    description: "Transform your kitchen with custom designs, premium finishes, and smart solutions that increase your home's value.",
    subservices: [
      {
        slug: "custom-cabinetry",
        title: "Custom Cabinetry & Storage",
        short: "Custom kitchen cabinets and storage solutions",
        nombre: "Custom Cabinetry & Storage",
        categoria: "remodeling",
        seo: {
          title: "Custom Kitchen Cabinets Florida | Professional Cabinet Installation",
          description: "Premium custom kitchen cabinets in Florida. Professional installation, quality materials, and custom storage solutions for your kitchen remodel.",
        },
        hero: {
          title: "Custom Kitchen Cabinets That Transform Your Space",
          description: "Create the perfect kitchen with custom cabinetry designed for your space. Premium materials, expert craftsmanship, and smart storage solutions.",
        },
        technicalSpecs: {
          materials: ["Solid Wood", "MDF", "Plywood", "Laminate"],
          styles: ["Shaker", "Modern", "Traditional", "Transitional"],
          finishes: ["Natural Wood", "Painted", "Stained", "Distressed"],
          deliverables: [
            "Custom cabinet design and planning",
            "Professional measurement and templating",
            "Quality cabinet manufacturing",
            "Expert installation and finishing",
            "Hardware installation and adjustment",
            "Final quality inspection and warranty"
          ]
        },
        diagnosticTools: {
          warningSigns: ["Outdated cabinet style", "Insufficient storage space", "Damaged or worn cabinet doors", "Poor organization and accessibility", "Outdated hardware and finishes"],
          improvementBenefits: "Custom cabinets can increase your home's value by 15-20% while providing better organization and functionality."
        }
      },
      {
        slug: "countertop-installation",
        title: "Premium Countertop Installation",
        short: "Premium countertop materials and installation",
        nombre: "Premium Countertop Installation",
        categoria: "remodeling"
      },
      {
        slug: "kitchen-island-design",
        title: "Kitchen Island & Layout Design",
        short: "Custom kitchen islands and optimal layouts",
        nombre: "Kitchen Island & Layout Design",
        categoria: "remodeling"
      },
      {
        slug: "appliance-integration",
        title: "Appliance & Plumbing Integration",
        short: "Modern appliance installation and plumbing",
        nombre: "Appliance & Plumbing Integration",
        categoria: "remodeling"
      }
    ]
  },

  // ===========================
  // BATHROOM REMODELING
  // ===========================
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Renovation Services",
    template: "bathroom",
    description: "Create luxurious, functional bathrooms with modern fixtures, premium tiles, and smart design solutions.",
    subservices: [
      {
        slug: "shower-installation",
        title: "Shower Installation & Renovation",
        short: "Custom shower design and installation",
        nombre: "Shower Installation & Renovation",
        categoria: "remodeling",
        seo: {
          title: "Custom Shower Installation Florida | Professional Bathroom Renovation",
          description: "Premium shower installation services in Florida. Custom tile work, modern fixtures, and waterproof installations for your bathroom renovation.",
        },
        hero: {
          title: "Transform Your Bathroom with Custom Shower Design",
          description: "Create a spa-like experience with custom shower installations. Modern fixtures, premium materials, and expert waterproofing.",
        }
      },
      {
        slug: "vanity-upgrade",
        title: "Vanity & Storage Upgrade",
        short: "Custom bathroom vanities and storage",
        nombre: "Vanity & Storage Upgrade",
        categoria: "remodeling"
      },
      {
        slug: "tile-replacement",
        title: "Tile Installation & Replacement",
        short: "Professional bathroom tile work",
        nombre: "Tile Installation & Replacement",
        categoria: "remodeling"
      },
      {
        slug: "bathroom-waterproofing",
        title: "Bathroom Waterproofing",
        short: "Complete bathroom waterproofing services",
        nombre: "Bathroom Waterproofing",
        categoria: "remodeling"
      }
    ]
  },

  // ===========================
  // BEDROOM REMODELING
  // ===========================
  {
    slug: "bedroom-remodeling",
    name: "Bedroom Design & Renovation",
    template: "bedroom",
    description: "Design personalized bedrooms that combine comfort, functionality, and style for the perfect sanctuary.",
    subservices: [
      {
        slug: "master-bedroom-suite",
        title: "Master Bedroom Suite",
        short: "Luxury master bedroom design and renovation",
        nombre: "Master Bedroom Suite",
        categoria: "remodeling"
      },
      {
        slug: "guest-kids-rooms",
        title: "Guest & Kids Rooms",
        short: "Functional guest rooms and children's bedrooms",
        nombre: "Guest & Kids Rooms",
        categoria: "remodeling"
      },
      {
        slug: "closet-organization",
        title: "Closet Organization Systems",
        short: "Custom closet design and organization",
        nombre: "Closet Organization Systems",
        categoria: "remodeling"
      }
    ]
  },

  // ===========================
  // LIVING & DINING
  // ===========================
  {
    slug: "living-dining-remodeling",
    name: "Living & Dining Room Renovation",
    template: "living",
    description: "Create open-concept living spaces that bring families together with modern design and smart layouts.",
    subservices: [
      {
        slug: "open-concept-design",
        title: "Open Concept Design",
        short: "Open floor plans and space optimization",
        nombre: "Open Concept Design",
        categoria: "remodeling"
      },
      {
        slug: "fireplace-renovation",
        title: "Fireplace & Feature Walls",
        short: "Custom fireplace and accent wall design",
        nombre: "Fireplace & Feature Walls",
        categoria: "remodeling"
      },
      {
        slug: "lighting-systems",
        title: "Modern Lighting Systems",
        short: "Smart lighting design and installation",
        nombre: "Modern Lighting Systems",
        categoria: "remodeling"
      }
    ]
  },

  // ===========================
  // HOME ADDITIONS
  // ===========================
  {
    slug: "home-additions-remodeling",
    name: "Home Additions & Expansions",
    template: "additions",
    description: "Expand your living space with expertly designed additions that seamlessly blend with your existing home.",
    subservices: [
      {
        slug: "room-expansions",
        title: "Room Expansions",
        short: "Single room additions and expansions",
        nombre: "Room Expansions",
        categoria: "remodeling"
      },
      {
        slug: "multi-story-projects",
        title: "Multi-Story Additions",
        short: "Complex multi-level home additions",
        nombre: "Multi-Story Additions",
        categoria: "remodeling"
      },
      {
        slug: "outdoor-structures",
        title: "Outdoor Living Structures",
        short: "Patios, decks, and outdoor rooms",
        nombre: "Outdoor Living Structures",
        categoria: "remodeling"
      },
      {
        slug: "adu-construction",
        title: "ADU Construction",
        short: "Accessory dwelling unit construction",
        nombre: "ADU Construction",
        categoria: "remodeling"
      }
    ]
  }
];

// Cities data for services (can be imported from existing data if available)
// Cities data for services (can be imported from existing data if available)
import { cities } from "./locations.js";
export { cities };

// Utility functions for service data
export function getServiceData(slug) {
  for (const group of serviceGroups) {
    for (const service of group.subservices) {
      if (service.slug === slug) {
        return { ...service, groupSlug: group.slug, groupName: group.name, template: group.template };
      }
    }
  }
  return null;
}

export function getServiceGroup(slug) {
  return serviceGroups.find(group => group.slug === slug);
}

export function getCityData(slug) {
  return cities.find(city => city.slug === slug);
}

export function getAllServiceCombinations() {
  const combinations = [];
  serviceGroups.forEach(group => {
    group.subservices.forEach(service => {
      cities.forEach(city => {
        combinations.push({
          servicio: service.slug,
          ciudad: city.slug,
          serviceData: { ...service, groupSlug: group.slug, groupName: group.name, template: group.template },
          cityData: city
        });
      });
    });
  });
  return combinations;
}

// New function for group-level combinations like /services/kitchen-remodeling/tampa
export function getAllGroupCityCombinations() {
  const combinations = [];
  serviceGroups.forEach(group => {
    restorationCities.forEach(city => {
      combinations.push({
        servicio: group.slug,
        ciudad: city.slug,
        serviceData: group,
        cityData: city
      });
    });
  });
  return combinations;
}