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
          bgImage: "/images/flood-damage.webp",
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
        categoria: "restoration",
        hero: {
          title: "Hidden Leaks? We Find & Fix Them Fast",
          description: "Water leaks can cause hidden damage. We use advanced detection to find leaks and repair them immediately.",
          bgImage: "/images/leak-repair.webp"
        }
      },
      {
        slug: "basement-flooding",
        title: "Basement Flooding",
        short: "Basement flooding restoration",
        nombre: "Basement Flooding",
        categoria: "restoration",
        hero: {
          title: "Flooded Basement? Emergency Extraction 24/7",
          description: "Basement flooding requires immediate action. We pump out water and dry your basement completely.",
          bgImage: "/images/basement-flooding.webp"
        }
      },
      {
        slug: "ceiling-water-damage",
        title: "Ceiling Water Damage",
        short: "Ceiling water damage repair",
        nombre: "Ceiling Water Damage",
        categoria: "restoration",
        hero: {
          title: "Ceiling Leaks? We Repair Water Damage Overhead",
          description: "Water stains on your ceiling? We fix the source and repair the damage to prevent collapse or mold.",
          bgImage: "/images/ceiling-water-damage.webp"
        }
      },
      {
        slug: "emergency-water-removal",
        title: "Emergency Water Removal",
        short: "Emergency water extraction services",
        nombre: "Emergency Water Removal",
        categoria: "restoration",
        hero: {
          title: "24/7 Emergency Water Removal Services",
          description: "Fast water extraction when you need it most. Our teams are ready to respond day or night.",
          bgImage: "/images/emergency-water-removal.webp"
        }
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
          bgImage: "/images/smoke-damage.webp",
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
          title: "Soot Cleanup: Restoring Cleanliness & Safety",
          description: "Soot is toxic and corrosive. We professionally clean and remove soot from all surfaces.",
          bgImage: "/images/soot-cleanup.webp"
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
        hero: {
          title: "Complete Fire Damage Repair & Reconstruction",
          description: "From structural repairs to final touches, we rebuild your home after fire damage.",
          bgImage: "/images/fire-damage-repair.webp"
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
          title: "24/7 Emergency Fire Response Team",
          description: "Immediate board-up and securing services after a fire. We are here to help 24/7.",
          bgImage: "/images/emergency-fire-response.webp"
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
          title: "Professional Mold Inspection & Detection",
          description: "Suspect mold? Our certified inspectors identify hidden mold and moisture sources.",
          bgImage: "/images/mold-inspection.webp"
        },
        cta: {
          href: "/book-mold-inspection"
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
          title: "Safe & Effective Black Mold Removal",
          description: "Black mold is dangerous. We safely remove toxic mold and sanitize your property.",
          bgImage: "/images/black-mold-removal.webp"
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
        hero: {
          title: "Long-Term Mold Prevention Solutions",
          description: "Stop mold before it starts. We implement moisture control and prevention strategies.",
          bgImage: "/images/mold-prevention.webp"
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
          title: "Air Quality Testing & Mold Analysis",
          description: "Breathe easier with our professional air quality testing and mold analysis services.",
          bgImage: "/images/mold-testing.webp"
        },
        cta: {
          href: "/book-mold-inspection"
        }
      },
      {
        slug: "mold-damage-restoration",
        title: "Mold Damage Restoration",
        short: "Complete mold damage repair",
        nombre: "Mold Damage Restoration",
        categoria: "restoration",
        seo: {
          title: "Mold Damage Restoration Florida | Complete Property Repair",
          description: "Complete mold damage restoration in Florida. Structural repairs, material replacement, air purification & final clearance testing after mold removal.",
        },
        hero: {
          title: "Complete Mold Damage Restoration",
          description: "Repairing damage caused by mold growth. We restore your home to a safe condition.",
          bgImage: "/images/mold-damage.webp"
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
        hero: {
          title: "Hurricane Damage Restoration Experts",
          description: "Recovering from a hurricane? We provide comprehensive storm damage restoration.",
          bgImage: "/images/hurricane-damage.webp"
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
        hero: {
          title: "Wind Damage Repair & Reconstruction",
          description: "Strong winds can cause severe damage. We repair roofs, siding, and structural issues.",
          bgImage: "/images/wind-damage.webp"
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
          title: "Fast Storm Debris Removal & Cleanup",
          description: "Clearing the way for restoration. We remove fallen trees and storm debris quickly.",
          bgImage: "/images/storm-debris-removal.webp"
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
          title: "Emergency Storm Repair Services",
          description: "Immediate repairs to secure your home after a storm. Tarping, board-up, and more.",
          bgImage: "/images/emergency-storm-repair.webp"
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
        hero: {
          title: "Water Damage Mitigation Services",
          description: "Stopping water damage in its tracks. Immediate mitigation to prevent further loss.",
          bgImage: "/images/mitigation-services.webp"
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
          title: "Fire Damage Mitigation Services",
          description: "Immediate action to limit fire and smoke damage. We secure and stabilize your property.",
          bgImage: "/images/fire-damage-repair.webp"
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
          title: "Mold Damage Mitigation Services",
          description: "Containing mold growth and preventing spread. Expert mitigation for a safer home.",
          bgImage: "/images/mold-prevention.webp"
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
          description: "Storm left your property exposed to weather and intruders? Our mitigation teams provide emergency board-up, temporary roofing, and structural bracing to protect against further damage.",
          bgImage: "/images/emergency-storm-repair.webp"
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

// ===========================
// REGIONAL CONTENT DATA
// ===========================
export const regionalRisks = {
  "South Florida": {
    title: "High Humidity & Hurricane Risks",
    description: "South Florida's tropical climate creates year-round humidity challenges that accelerate mold growth. Combined with frequent tropical storms and hurricanes, properties in this region face unique water intrusion risks that require specialized drying protocols."
  },
  "Central Florida": {
    title: "Storm Surges & Sinkhole Risks",
    description: "Central Florida faces a dual threat of severe afternoon thunderstorms and potential ground shifting. Our restoration protocols account for the region's specific soil conditions and rapid weather changes that can lead to sudden water damage."
  },
  "Tampa Bay": {
    title: "Coastal Flooding & Saltwater Intrusion",
    description: "The Tampa Bay area is particularly susceptible to coastal flooding and storm surges. Saltwater intrusion requires specific cleaning agents and corrosion inhibitors that standard restoration companies often overlook."
  },
  "Southwest Florida": {
    title: "Tropical Storm Exposure",
    description: "Southwest Florida's coastline is directly exposed to Gulf storms. We specialize in addressing the rapid mold development that occurs in this region's consistently high temperatures and humidity levels."
  },
  "Northeast Florida": {
    title: "Nor'easter Storms & Coastal Erosion",
    description: "Northeast Florida faces unique challenges from Nor'easters and coastal erosion. Our teams are equipped to handle the specific structural drying needs caused by these prolonged wind and rain events."
  },
  "Northwest Florida": {
    title: "Panhandle Storm Tracks",
    description: "The Panhandle often faces direct impacts from major Gulf storms. Our restoration approach focuses on rapid structural stabilization and heavy-duty water extraction designed for severe storm aftermaths."
  },
  "Treasure Coast": {
    title: "Atlantic Storm Exposure",
    description: "The Treasure Coast's direct Atlantic exposure brings salt-heavy air and frequent squalls. We use specialized corrosion-resistant materials and drying techniques suited for this coastal environment."
  }
};