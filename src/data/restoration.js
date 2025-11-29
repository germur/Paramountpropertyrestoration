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
    features: [
      { icon: "fas fa-tint", title: "Emergency Water Extraction", description: "Pumps and vacuums remove large volumes of water quickly.", image: "/images/flood-damage.webp", link: "/restoration/water-damage/emergency-water-removal" },
    ],
    subservices: [
      {
        slug: "flood-damage",
        title: "Flood Damage Cleanup",
        short: "Cleanup & restoration after flooding",
        nombre: "Flood Damage Cleanup",
        categoria: "restoration",
        features: [
          { icon: "fas fa-water", title: "Flood Damage", description: "Emergency flood cleanup and water extraction", slug: "flood-damage", image: "/images/flood-damage.webp", link: "/restoration/water-damage/flood-damage" },
        ],
        seo: {
          title: "Flood Damage Cleanup Florida | 24/7 Water Extraction & Drying",
          description: "Certified flood damage cleanup in Florida. Emergency water removal, drying, mold prevention & structural stabilization. 24/7 response across Orlando, Miami & Tampa.",
        },
        hero: {
          title: "Flood Damage? We Extract Water & Restore Homes Across Florida",
          description: "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety.",
        },
        technicalSpecs: {
          equipmentUsed: ["Truck-Mounted Extractors", "LGR Dehumidifiers", "Thermal Imaging Cameras", "Air Movers", "Moisture Meters"],
          certificationsRequired: ["IICRC S500 Water Damage", "IICRC S520 Mold Remediation"],
          methodsApplied: ["Psychrometric Calculations", "Negative Air Pressure", "Controlled Demolition"],
          deliverables: [
            "Emergency flood water extraction and removal",
            "Advanced moisture detection and mapping",
            "Industrial-grade dehumidification and drying",
            "Antimicrobial treatment and sanitization",
            "Structural stabilization and repair",
            "Complete documentation and final inspection"
          ]
        },
        diagnosticTools: {
          warningSigns: ["Standing water or visible flooding", "Musty odors or unusual smells", "Soft or warped flooring and walls", "Water stains on ceilings or walls", "Unexplained increases in water bills"],
          severityAssessment: "Flood damage severity increases rapidly - contact our emergency teams within 24 hours to prevent extensive structural damage and mold growth."
        }
      },
      {
        slug: "leak-repair",
        title: "Leak Repair",
        short: "Emergency water removal services",
        nombre: "Leak Repair",
        categoria: "restoration"
      },
      {
        slug: "basement-flooding",
        title: "Basement Flooding",
        short: "Basement flooding restoration",
        nombre: "Basement Flooding",
        categoria: "restoration",
        features: [
          { icon: "fas fa-home", title: "Basement Flooding", description: "Basement water removal and drying", slug: "basement-flooding", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/basement-flooding" },
        ]
      },
      {
        slug: "ceiling-water-damage",
        title: "Ceiling Water Damage",
        short: "Ceiling water damage repair",
        nombre: "Ceiling Water Damage",
        categoria: "restoration",
        features: [
          { icon: "fas fa-cloud-rain", title: "Ceiling Water Damage", description: "Ceiling leak repair and restoration", slug: "ceiling-water-damage", image: "/images/ceiling-water-damage.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        ]
      },
      {
        slug: "emergency-water-removal",
        title: "Emergency Water Removal",
        short: "Emergency water extraction services",
        nombre: "Emergency Water Removal",
        categoria: "restoration",
        features: [
          { icon: "fas fa-tint", title: "Emergency Water Removal", description: "24/7 rapid water extraction", slug: "emergency-water-removal", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/emergency-water-removal" }
        ]
      }
    ]
  },

  // ===========================
  // FIRE DAMAGE
  // ===========================
  {
    slug: "fire-damage",
    name: "Fire Damage Restoration Florida | 24/7 Smoke & Soot Cleanup",
    template: "fire",
    description: "Expert fire damage restoration in Florida. Emergency smoke damage cleanup, soot removal & structural restoration. 24/7 response across Orlando, Miami & Tampa.",
    subservices: [
      {
        slug: "smoke-damage",
        title: "Smoke Damage Cleanup",
        short: "Professional smoke odor removal",
        nombre: "Smoke Damage Cleanup",
        categoria: "restoration",
        seo: {
          title: "Smoke Damage Cleanup Florida | Professional Odor Removal",
          description: "Expert smoke damage cleanup in Florida. Advanced odor neutralization, air purification & smoke residue removal. 24/7 emergency response.",
        },
        hero: {
          title: "Smoke Damage? We Remove Odors & Restore Air Quality Fast",
          description: "Smoke damage from fire? Our Florida teams provide complete smoke cleanup including odor neutralization, air purification, and residue removal. We eliminate smoke damage before it becomes permanent.",
        },
        technicalSpecs: {
          equipmentUsed: ["Hydroxyl Generators", "Ozone Machines", "HEPA Air Scrubbers", "Thermal Foggers", "Ultrasonic Cleaners"],
          certificationsRequired: ["IICRC S520 Applied Microbial Remediation", "IICRC S500 Water Damage", "IICRC S700 Fire Damage"],
          methodsApplied: ["Dry Chemical Sponging", "Wet Cleaning", "Spray and Wipe", "Foam Cleaning", "Abrasive Cleaning"],
          deliverables: [
            "Complete smoke residue removal from all surfaces",
            "Advanced odor neutralization and air purification",
            "HVAC system cleaning and decontamination",
            "Content cleaning and restoration",
            "Structural deodorization treatments",
            "Air quality testing and certification"
          ]
        },
        diagnosticTools: {
          warningSigns: ["Persistent smoke odors", "Yellow or brown residue on surfaces", "Discolored walls or ceilings", "Smoky taste in air", "HVAC system contamination"],
          severityAssessment: "Smoke damage becomes permanent within 72 hours - immediate professional intervention is critical to prevent irreversible damage."
        }
      },
      {
        slug: "soot-cleanup",
        title: "Soot Cleanup & Removal",
        short: "Professional soot removal services",
        nombre: "Soot Cleanup & Removal",
        categoria: "restoration",
        seo: {
          title: "Soot Cleanup Florida | Professional Fire Residue Removal",
          description: "Professional soot cleanup services in Florida. Complete soot removal from walls, ceilings, furniture & HVAC systems after fire damage.",
        },
        hero: {
          title: "Soot Everywhere? We Clean All Surfaces & Systems",
          description: "Soot contamination after a fire? Our certified technicians remove soot from all surfaces, clean HVAC systems, and restore your property's cleanliness and safety.",
        }
      },
      {
        slug: "fire-damage-repair",
        title: "Fire Damage Repair",
        short: "Complete fire damage restoration",
        nombre: "Fire Damage Repair",
        categoria: "restoration",
        seo: {
          title: "Fire Damage Repair Florida | Complete Structural Restoration",
          description: "Complete fire damage repair services in Florida. Structural restoration, rebuilding, smoke cleanup & content restoration. Insurance approved contractors.",
        },
        features: [
          { icon: "fas fa-paint-roller", title: "Stain & Finish Restoration", description: "Prime, paint, and re-texture surfaces.", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        ],
        hero: {
          title: "Fire Damage Repair - We Rebuild What Fire Destroyed",
          description: "Fire destroyed your property? Our licensed contractors provide complete fire damage repair including structural rebuilding, smoke cleanup, and content restoration. We work with your insurance.",
        }
      },
      {
        slug: "emergency-fire-response",
        title: "Emergency Fire Response",
        short: "24/7 emergency fire damage response",
        nombre: "Emergency Fire Response",
        categoria: "restoration",
        seo: {
          title: "Emergency Fire Response Florida | 24/7 Fire Damage Cleanup",
          description: "24/7 emergency fire response in Florida. Immediate board-up, smoke cleanup, structural stabilization & damage assessment. Fast response guaranteed.",
        },
        hero: {
          title: "Fire Emergency? We Respond Within 60 Minutes",
          description: "Fire emergency requiring immediate help? Our emergency teams provide 24/7 fire damage response including board-up services, structural stabilization, and damage assessment across Florida.",
        }
      }
    ]
  },

  // ===========================
  // MOLD REMEDIATION
  // ===========================
  {
    slug: "mold-remediation",
    name: "Mold Remediation Florida | Professional Mold Removal & Testing",
    template: "mold",
    description: "Certified mold remediation services in Florida. Professional mold inspection, testing, removal & prevention. Licensed mold specialists with 24/7 emergency response.",
    subservices: [
      {
        slug: "mold-inspection",
        title: "Mold Inspection",
        short: "Professional mold testing and inspection",
        nombre: "Mold Inspection",
        categoria: "restoration",
        seo: {
          title: "Mold Inspection Florida | Professional Mold Testing & Detection",
          description: "Professional mold inspection services in Florida. Certified inspectors using advanced detection methods, air quality testing & comprehensive mold assessments.",
        },
        hero: {
          title: "Suspect Mold? Get Professional Testing & Inspection",
          description: "Think you have mold? Our certified mold inspectors provide comprehensive testing including air quality analysis, moisture detection, and visual inspections to identify all mold issues.",
        }
      },
      {
        slug: "black-mold-removal",
        title: "Black Mold Removal",
        short: "Toxic black mold remediation",
        nombre: "Black Mold Removal",
        categoria: "restoration",
        seo: {
          title: "Black Mold Removal Florida | Toxic Mold Remediation",
          description: "Safe black mold removal in Florida. Licensed specialists remove toxic black mold using containment, HEPA filtration & proper disposal methods.",
        },
        hero: {
          title: "Black Mold Found? We Remove It Safely & Completely",
          description: "Discovered black mold in your property? Our licensed specialists safely remove toxic black mold using proper containment, HEPA filtration, and disposal methods to protect your health.",
        },
        technicalSpecs: {
          equipmentUsed: ["HEPA Air Filtration Units", "Negative Air Machines", "Containment Systems", "Personal Protective Equipment", "Antimicrobial Foggers"],
          certificationsRequired: ["IICRC S520 Mold Remediation", "EPA RRP Lead-Safe Work Practices", "OSHA 40-Hour HAZWOPER"],
          methodsApplied: ["Full Containment Protocols", "HEPA Vacuuming", "Wet Wiping with Antimicrobials", "Controlled Material Removal", "Post-Remediation Verification"],
          deliverables: [
            "Complete containment and isolation of affected areas",
            "Safe removal and disposal of contaminated materials",
            "HEPA filtration and air purification",
            "Antimicrobial treatment and surface disinfection",
            "Moisture control and humidity management",
            "Post-remediation testing and clearance certification"
          ]
        },
        diagnosticTools: {
          warningSigns: ["Black or dark green patches on walls", "Strong musty or earthy odors", "Recent water damage or leaks", "Respiratory symptoms or allergies", "High humidity levels above 60%"],
          severityAssessment: "Black mold exposure poses serious health risks - professional removal within 48-72 hours is critical to prevent spore spread and health complications."
        }
      },
      {
        slug: "mold-prevention",
        title: "Mold Prevention Services",
        short: "Prevent future mold growth",
        nombre: "Mold Prevention Services",
        categoria: "restoration",
        seo: {
          title: "Mold Prevention Florida | Stop Mold Before It Grows",
          description: "Professional mold prevention services in Florida. Moisture control, ventilation improvements, antimicrobial treatments & humidity management.",
        },
        features: [
          { icon: "fas fa-shield-alt", title: "Mold Prevention", description: "Antimicrobial treatments protect against bacteria and mold.", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/flood-damage" },
        ],
        hero: {
          title: "Prevent Mold Growth Before It Becomes a Problem",
          description: "Want to prevent mold growth? Our prevention specialists provide moisture control solutions, ventilation improvements, and antimicrobial treatments to stop mold before it starts.",
        }
      },
      {
        slug: "mold-testing",
        title: "Mold Testing & Air Quality",
        short: "Comprehensive mold testing services",
        nombre: "Mold Testing & Air Quality",
        categoria: "restoration",
        seo: {
          title: "Mold Testing Florida | Air Quality & Spore Analysis",
          description: "Professional mold testing services in Florida. Air quality testing, spore identification, moisture mapping & post-remediation verification.",
        },
        hero: {
          title: "Need Proof of Mold? Get Professional Testing & Analysis",
          description: "Need documented proof of mold issues? Our certified labs provide comprehensive mold testing including air sampling, spore identification, and detailed analysis reports.",
        }
      },
      {
        slug: "mold-damage-restoration",
        title: "Mold Damage Restoration",
        short: "Complete mold damage repair",
        nombre: "Mold Damage Restoration",
        categoria: "restoration",
        features: [
          { icon: "fas fa-hammer", title: "Property Restoration", description: "Complete restoration of damaged areas to pre-loss condition.", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/flood-damage" }
        ],
        seo: {
          title: "Mold Damage Restoration Florida | Complete Property Repair",
          description: "Complete mold damage restoration in Florida. Structural repairs, material replacement, air purification & final clearance testing after mold removal.",
        },
        hero: {
          title: "Mold Damaged Your Property? We Restore It Completely",
          description: "Mold caused structural damage? Our restoration team provides complete property repair including material replacement, structural repairs, and final air quality clearance testing.",
        }
      }
    ]
  },

  // ===========================
  // STORM DAMAGE
  // ===========================
  {
    slug: "storm-damage",
    name: "Storm Damage Restoration Florida | Hurricane & Wind Damage Repair",
    template: "storm",
    description: "Expert storm damage restoration in Florida. Hurricane damage repair, wind damage cleanup, emergency board-up & structural restoration. 24/7 storm response.",
    features: [
      { icon: "fas fa-wrench", title: "Leak Repair", description: "Fix burst pipes and hidden leaks", slug: "leak-repair", image: "/images/leak-repair.webp", link: "/restoration/water-damage/leak-repair" },
    ],
    subservices: [
      {
        slug: "hurricane-damage",
        title: "Hurricane Damage Restoration",
        short: "Complete hurricane damage repair",
        nombre: "Hurricane Damage Restoration",
        categoria: "restoration",
        seo: {
          title: "Hurricane Damage Restoration Florida | Emergency Storm Response",
          description: "Expert hurricane damage repair services in Florida. Emergency response, roof repairs, water damage cleanup, wind damage restoration & reconstruction.",
        },
        features: [
          { icon: "fas fa-cloud-rain", title: "Ceiling Leak Repair", description: "Repair water-damaged ceilings, replace drywall & insulation.", image: "/images/flood-damage.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        ],
        hero: {
          title: "Hurricane Damage? We Restore Homes After Major Storms",
          description: "Hurricane caused major damage to your property? Our storm restoration specialists provide complete hurricane damage repair including emergency board-up, water extraction, and structural reconstruction.",
        }
      },
      {
        slug: "wind-damage",
        title: "Wind Damage Repair",
        short: "Wind damage restoration services",
        nombre: "Wind Damage Repair",
        categoria: "restoration",
        seo: {
          title: "Wind Damage Repair Florida | Roof & Siding Storm Damage",
          description: "Professional wind damage repair in Florida. Roof repairs, siding replacement, window damage, structural repairs after severe weather.",
        },
        features: [
          { icon: "fas fa-wrench", title: "Pipe Leak Repair", description: "Fix burst, corroded, or leaking pipes to restore flow & safety.", image: "/images/leak-repair.webp", link: "/restoration/water-damage/leak-repair" },
        ],
        hero: {
          title: "Wind Damage to Roof or Siding? We Fix Storm Damage Fast",
          description: "Severe winds damaged your property? Our certified contractors repair wind damage including roof repairs, siding replacement, window damage, and structural reinforcement.",
        }
      },
      {
        slug: "storm-debris-removal",
        title: "Storm Debris Removal",
        short: "Emergency debris cleanup services",
        nombre: "Storm Debris Removal",
        categoria: "restoration",
        seo: {
          title: "Storm Debris Removal Florida | Emergency Cleanup Services",
          description: "Professional storm debris removal in Florida. Tree removal, structural debris cleanup, emergency property clearing after hurricanes and storms.",
        },
        hero: {
          title: "Storm Left Debris Everywhere? We Clear Your Property Fast",
          description: "Storm debris blocking access or creating safety hazards? Our cleanup crews provide emergency debris removal including tree removal, structural debris, and complete property clearing.",
        }
      },
      {
        slug: "emergency-storm-repair",
        title: "Emergency Storm Repair",
        short: "24/7 emergency storm response",
        nombre: "Emergency Storm Repair",
        categoria: "restoration",
        seo: {
          title: "Emergency Storm Repair Florida | 24/7 Storm Damage Response",
          description: "24/7 emergency storm repair services in Florida. Immediate response, temporary repairs, board-up services & storm damage assessment.",
        },
        hero: {
          title: "Storm Emergency? We Respond Within 60 Minutes",
          description: "Need immediate storm damage help? Our emergency teams provide 24/7 storm repair services including emergency board-up, temporary repairs, and immediate damage assessment.",
        }
      },
    ]
  },

  // ===========================
  // MITIGATION SERVICES
  // ===========================
  {
    slug: "mitigation-services",
    name: "Damage Mitigation Services Florida | Emergency Property Protection",
    template: "mitigation",
    description: "Professional damage mitigation services in Florida. Emergency property protection, damage assessment & immediate stabilization. 24/7 mitigation response.",
    subservices: [
      {
        slug: "water-mitigation",
        title: "Water Damage Mitigation",
        short: "Emergency water damage protection",
        nombre: "Water Damage Mitigation",
        categoria: "restoration",
        seo: {
          title: "Water Damage Mitigation Florida | Emergency Water Protection",
          description: "Emergency water damage mitigation in Florida. Immediate water extraction, moisture control, dehumidification & structural drying to prevent further damage.",
        },
        features: [
          { icon: "fas fa-wind", title: "Industrial Drying", description: "Air movers and dehumidifiers dry walls, floors, and cavities.", image: "/images/leak-repair.webp", link: "/restoration/water-damage/flood-damage" },
        ],
        hero: {
          title: "Water Damage Spreading? We Stop It Before It Gets Worse",
          description: "Water damage spreading through your property? Our mitigation specialists provide immediate water extraction, moisture control, and structural drying to minimize damage and prevent mold growth.",
        }
      },
      {
        slug: "fire-mitigation",
        title: "Fire Damage Mitigation",
        short: "Emergency fire damage protection",
        nombre: "Fire Damage Mitigation",
        categoria: "restoration",
        seo: {
          title: "Fire Damage Mitigation Florida | Emergency Fire Protection",
          description: "Emergency fire damage mitigation in Florida. Board-up services, smoke sealing, structure stabilization & content protection after fires.",
        },
        hero: {
          title: "Fire Damage Getting Worse? We Secure & Protect Immediately",
          description: "Fire damage exposing your property to further harm? Our mitigation teams provide emergency board-up, smoke sealing, and structural protection to prevent additional damage.",
        }
      },
      {
        slug: "mold-mitigation",
        title: "Mold Damage Mitigation",
        short: "Emergency mold containment",
        nombre: "Mold Damage Mitigation",
        categoria: "restoration",
        seo: {
          title: "Mold Damage Mitigation Florida | Emergency Containment Services",
          description: "Emergency mold damage mitigation in Florida. Immediate containment, air filtration, moisture control & prevention of mold spread.",
        },
        hero: {
          title: "Mold Spreading? We Contain & Stop Growth Immediately",
          description: "Discovered mold spreading in your property? Our mitigation specialists provide immediate containment, air filtration, and moisture control to stop mold growth and prevent health risks.",
        }
      },
      {
        slug: "storm-mitigation",
        title: "Storm Damage Mitigation",
        short: "Emergency storm protection",
        nombre: "Storm Damage Mitigation",
        categoria: "restoration",
        seo: {
          title: "Storm Damage Mitigation Florida | Emergency Weather Protection",
          description: "Emergency storm damage mitigation in Florida. Immediate board-up, temporary roofing, structural bracing & weather protection services.",
        },
        hero: {
          title: "Storm Damage Exposed Your Property? We Secure It Fast",
          description: "Storm left your property exposed to weather and intruders? Our mitigation teams provide emergency board-up, temporary roofing, and structural bracing to protect against further damage.",
        }
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
        bgImage: "/images/hero-water.webp",
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