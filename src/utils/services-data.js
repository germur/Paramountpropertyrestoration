// src/utils/services-data.js
// Centralized data for services templates - follows DRY principle

/**
 * Get core services/features for a service group
 * @param {string} groupSlug - The service group identifier
 * @returns {Array<{name: string, icon: string, description: string}>}
 */
export function getServicesForGroup(groupSlug) {
  const serviceConfigs = {
    "kitchen-remodeling": [
      { name: "Custom Cabinetry", icon: "fas fa-cube", description: "Premium cabinet design and installation" },
      { name: "Countertop Installation", icon: "fas fa-gem", description: "Granite, quartz, and marble surfaces" },
      { name: "Kitchen Islands", icon: "fas fa-th-large", description: "Functional island design and construction" },
      { name: "Appliance Integration", icon: "fas fa-blender", description: "Modern appliance installation" },
      { name: "Plumbing & Electrical", icon: "fas fa-bolt", description: "Complete utility upgrades" },
      { name: "Lighting Design", icon: "fas fa-lightbulb", description: "Ambient and task lighting" }
    ],
    "bathroom-remodeling": [
      { name: "Shower & Tub Installation", icon: "fas fa-shower", description: "Custom shower and bathtub design" },
      { name: "Tile & Flooring", icon: "fas fa-th", description: "Premium tile installation and flooring" },
      { name: "Vanity & Storage", icon: "fas fa-archive", description: "Custom vanities and storage solutions" },
      { name: "Plumbing Fixtures", icon: "fas fa-faucet", description: "Modern fixtures and fittings" },
      { name: "Ventilation Systems", icon: "fas fa-fan", description: "Proper ventilation and humidity control" },
      { name: "Waterproofing", icon: "fas fa-shield-alt", description: "Complete waterproofing protection" }
    ],
    "bedroom-remodeling": [
      { name: "Master Suite Design", icon: "fas fa-bed", description: "Luxury master bedroom design" },
      { name: "Closet Organization", icon: "fas fa-hanger", description: "Custom closet systems and storage" },
      { name: "Flooring Installation", icon: "fas fa-layer-group", description: "Hardwood, carpet, and luxury vinyl" },
      { name: "Built-in Storage", icon: "fas fa-cube", description: "Custom built-in furniture and storage" },
      { name: "Lighting & Electrical", icon: "fas fa-lightbulb", description: "Ambient and accent lighting" },
      { name: "Window Treatments", icon: "fas fa-window-maximize", description: "Custom window solutions" }
    ],
    "living-dining-remodeling": [
      { name: "Open Concept Design", icon: "fas fa-expand-arrows-alt", description: "Wall removal and space optimization" },
      { name: "Fireplace Installation", icon: "fas fa-fire", description: "Custom fireplace design and installation" },
      { name: "Flooring Systems", icon: "fas fa-layer-group", description: "Seamless flooring throughout spaces" },
      { name: "Built-in Entertainment", icon: "fas fa-tv", description: "Custom entertainment centers" },
      { name: "Lighting Design", icon: "fas fa-lightbulb", description: "Layered lighting systems" },
      { name: "Ceiling Features", icon: "fas fa-home", description: "Coffered ceilings and architectural details" }
    ],
    "home-additions-remodeling": [
      { name: "Room Additions", icon: "fas fa-plus-square", description: "Single and multi-room expansions" },
      { name: "Second Story Additions", icon: "fas fa-building", description: "Multi-level home expansions" },
      { name: "Outdoor Structures", icon: "fas fa-leaf", description: "Patios, decks, and outdoor rooms" },
      { name: "ADU Construction", icon: "fas fa-home", description: "Accessory dwelling units" },
      { name: "Foundation Work", icon: "fas fa-layer-group", description: "Structural foundation extensions" },
      { name: "Roofing Extensions", icon: "fas fa-roof", description: "Roof modifications and additions" }
    ]
  };
  return serviceConfigs[groupSlug] || [];
}

/**
 * Get trust signals/features for a service group
 * @param {string} groupSlug - The service group identifier
 * @returns {Array<string>}
 */
export function getTrustSignalsForGroup(groupSlug) {
  const features = {
    "kitchen-remodeling": [
      "Licensed Kitchen Contractors",
      "Custom Cabinet Manufacturing",
      "Premium Material Selection",
      "3D Design Visualization",
      "Code-Compliant Installation",
      "Warranty on All Work"
    ],
    "bathroom-remodeling": [
      "Licensed Bathroom Contractors",
      "Waterproof Installation Guarantee",
      "Premium Fixture Selection",
      "ADA Compliance Available",
      "Mold Prevention Techniques",
      "Complete Project Management"
    ],
    "bedroom-remodeling": [
      "Custom Bedroom Design",
      "Built-in Storage Solutions",
      "Premium Material Selection",
      "Energy-Efficient Solutions",
      "Smart Home Integration",
      "Professional Color Consultation"
    ],
    "living-dining-remodeling": [
      "Open Concept Specialists",
      "Structural Engineering Support",
      "Premium Flooring Installation",
      "Custom Built-in Features",
      "Smart Home Integration",
      "Architectural Detail Work"
    ],
    "home-additions-remodeling": [
      "Licensed General Contractors",
      "Structural Engineering Services",
      "City Permit Management",
      "Architectural Design Support",
      "Foundation to Finish Services",
      "HOA Compliance Assistance"
    ]
  };
  return features[groupSlug] || [];
}

/**
 * Get warning signs/pain points for a service group
 * @param {string} groupSlug - The service group identifier
 * @returns {Array<string>}
 */
export function getWarningSignsForGroup(groupSlug) {
  const signs = {
    "kitchen-remodeling": [
      "Outdated cabinets and countertops",
      "Insufficient storage and counter space",
      "Poor lighting and ventilation",
      "Inefficient layout and workflow",
      "Aging appliances and fixtures"
    ],
    "bathroom-remodeling": [
      "Outdated fixtures and finishes",
      "Poor ventilation and moisture issues",
      "Insufficient storage space",
      "Accessibility concerns",
      "Worn tile and grout"
    ],
    "bedroom-remodeling": [
      "Lack of storage space",
      "Poor lighting and ambiance",
      "Outdated flooring and finishes",
      "Inadequate closet organization",
      "Uncomfortable room temperature"
    ],
    "living-dining-remodeling": [
      "Closed-off room layout",
      "Poor traffic flow",
      "Inadequate lighting",
      "Lack of entertaining space",
      "Outdated architectural features"
    ],
    "home-additions-remodeling": [
      "Need for more living space",
      "Growing family requirements",
      "Home office needs",
      "Desire for better property value",
      "Aging in place modifications"
    ]
  };
  return signs[groupSlug] || [];
}

/**
 * Get 4-step process for services
 * @returns {Array<{step: number, title: string, description: string, icon: string}>}
 */
export function getServiceProcess() {
  return [
    {
      step: 1,
      title: "Design Consultation",
      description: "Free in-home consultation and 3D design visualization",
      icon: "fas fa-drafting-compass"
    },
    {
      step: 2,
      title: "Material Selection",
      description: "Choose from premium materials and finishes",
      icon: "fas fa-palette"
    },
    {
      step: 3,
      title: "Professional Installation",
      description: "Licensed contractors complete your project",
      icon: "fas fa-tools"
    },
    {
      step: 4,
      title: "Final Walkthrough",
      description: "Quality inspection and project completion",
      icon: "fas fa-check-circle"
    }
  ];
}

/**
 * Get hero configuration for a service
 * @param {object} group - Service group object
 * @param {object|null} sub - Subservice object (optional)
 * @param {boolean} isHub - Whether this is a hub page
 * @returns {object} Hero configuration
 */
export function getHeroConfig(group, sub = null, isHub = false) {
  return {
    title: isHub ? `${group.name} in Florida` : (sub?.hero?.title || `${sub.title} Experts in Florida`),
    description: isHub
      ? group.description
      : (sub?.hero?.description || `Professional ${sub.title.toLowerCase()} services across Florida. Quality craftsmanship, licensed contractors, and satisfaction guaranteed.`),
    ctaText: isHub ? "Get Free Consultation" : "Start Your Project",
    ctaPhone: "+1-786-602-2217",
    badgeText: isHub ? "Licensed & Insured Contractors" : "Quality Guaranteed Work"
  };
}

/**
 * Get hero image path for a service group
 * @param {string} slug - Service group slug
 * @returns {{webp: string, jpg: string, key: string}}
 */
export function getHeroImage(slug) {
  const imageMap = {
    'kitchen-remodeling': 'kitchenHero',
    'bathroom-remodeling': 'bathroomHero',
    'bedroom-remodeling': 'bedroomHero',
    'living-dining-remodeling': 'livingDiningHero',
    'home-additions-remodeling': 'home-additionsHero'
  };

  const key = imageMap[slug] || 'portadaHome';

  return {
    webp: `/images/${key}.webp`,
    jpg: `/images/${key}.jpg`,
    key
  };
}

/**
 * Group cities by region
 * @param {Array} cities - Array of city objects
 * @returns {Object} Cities grouped by region
 */
export function getCitiesByRegion(cities) {
  const regions = {};
  cities.forEach(city => {
    if (!regions[city.region]) {
      regions[city.region] = [];
    }
    regions[city.region].push(city);
  });
  return regions;
}
