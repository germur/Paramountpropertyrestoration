// src/data/subservice-content.js
// Contenido específico para cada subservicio basado en los documentos proporcionados

export const subserviceContent = {
  // ===========================
  // WATER DAMAGE SUBSERVICES
  // ===========================
  "flood-damage": {
    hero: {
      title: "Flood Damage? We Extract Water & Restore Homes Across Florida",
      description: "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety. Immediate response across Orlando, Miami, Tampa, and statewide.",
      cta: "Start Flood Extraction Now",
      badges: [
        { icon: "💧", text: "Water Extraction" },
        { icon: "🌬️", text: "Drying" },
        { icon: "🧪", text: "Mold Prevention" },
        { icon: "🛠️", text: "Repair" }
      ]
    },
    process: {
      title: "Quick Relief – How It Works",
      steps: [
        { title: "Inspection & Moisture Mapping", text: "Identify visible and hidden flood damage", icon: "fas fa-search" },
        { title: "Rapid Water Extraction", text: "Remove standing floodwater using high-capacity pumps", icon: "fas fa-tint" },
        { title: "Drying & Dehumidification", text: "Stabilize humidity with industrial air movers", icon: "fas fa-wind" },
        { title: "Antimicrobial Treatment", text: "Protect walls, flooring, and furniture against mold", icon: "fas fa-shield" },
        { title: "Ongoing Monitoring", text: "Daily moisture checks until drying is complete", icon: "fas fa-chart-line" }
      ]
    },
    services: [
      {
        icon: "🚚",
        title: "Emergency Water Extraction",
        description: "Pumps and vacuums remove large volumes of water quickly.",
        ctaText: "Request Flood Water Removal",
        ctaLink: "/contact"
      },
      {
        icon: "🌬️",
        title: "Industrial Drying",
        description: "Air movers and dehumidifiers dry walls, floors, and cavities.",
        ctaText: "Schedule Drying Service",
        ctaLink: "/contact"
      },
      {
        icon: "🧪",
        title: "Mold Prevention",
        description: "Antimicrobial treatments protect against bacteria and mold.",
        ctaText: "Protect Against Mold",
        ctaLink: "/contact"
      },
      {
        icon: "🛠️",
        title: "Structural Stabilization",
        description: "Support for weakened ceilings, floors, and framing.",
        ctaText: "Start Repairs Today",
        ctaLink: "/contact"
      }
    ],
    features: [
      "Faster Recovery – Stop flood damage from spreading",
      "Lower Costs – Early mitigation prevents expensive repairs",
      "Health Protection – Reduce mold and bacteria risks"
    ],
    faqs: [
      { q: "How long does flood cleanup take?", a: "Most properties dry within 2–5 days depending on water levels and building materials. Continuous monitoring ensures safe humidity levels before restoration begins." },
      { q: "Does insurance cover flood damage?", a: "Coverage varies—flooding from storms often requires separate flood insurance. Most policies cover sudden water events. We assist with documentation for your claim." },
      { q: "Can a flooded home be saved?", a: "Yes. With rapid extraction and drying, most structures can be stabilized and restored. Delays increase risks of mold and structural loss." },
      { q: "What should I do first after a flood?", a: "Stay safe, shut off electricity if needed, and call for emergency water removal. Avoid entering rooms with standing water." },
      { q: "What happens if flood water isn't removed quickly?", a: "Mold, structural damage, and electrical hazards escalate within days, turning small repairs into major reconstruction." }
    ]
  },

  "basement-flooding": {
    hero: {
      title: "Basement Flooding? We Pump Out Water & Protect Your Foundation",
      description: "Is your basement underwater? Our Florida team provides 24/7 basement flooding cleanup, including pump-out, cavity drying, and mold prevention. We remove water fast, protect your foundation, and restore your property safely. Serving Orlando, Miami, Tampa, and all Florida regions.",
      cta: "Protect Against Mold",
      badges: [
        { icon: "🪠", text: "Pump-Out" },
        { icon: "🌬️", text: "Drying" },
        { icon: "🛡️", text: "Mold Prevention" },
        { icon: "🧱", text: "Foundation" }
      ]
    },
    process: {
      title: "Quick Relief – How It Works",
      steps: [
        { title: "Safety & Assessment", text: "Check for electrical hazards and structural risks before entry", icon: "fas fa-hard-hat" },
        { title: "Pump-Out & Water Removal", text: "High-capacity pumps quickly clear standing basement water", icon: "fas fa-pump-soap" },
        { title: "Cavity Drying", text: "Industrial dehumidifiers and air movers dry walls, flooring, and crawlspaces", icon: "fas fa-wind" },
        { title: "Humidity Control", text: "Stabilize indoor moisture levels to safe conditions", icon: "fas fa-thermometer-half" },
        { title: "Antimicrobial Treatment", text: "Apply disinfectants to prevent mold and bacteria growth", icon: "fas fa-spray-can" }
      ]
    },
    services: [
      {
        icon: "🪠",
        title: "Basement Pump-Out",
        description: "Rapid water evacuation with high-volume pumps.",
        ctaText: "Request Pump-Out",
        ctaLink: "/contact"
      },
      {
        icon: "🧱",
        title: "Structural Drying",
        description: "Dry walls, subfloors, and insulation to protect the foundation.",
        ctaText: "Schedule Drying",
        ctaLink: "/contact"
      },
      {
        icon: "🛡️",
        title: "Mold Prevention",
        description: "Apply treatments and humidity control to stop mold growth.",
        ctaText: "Protect Basement",
        ctaLink: "/contact"
      },
      {
        icon: "📊",
        title: "Moisture Monitoring",
        description: "Track safe drying progress with daily readings.",
        ctaText: "Monitor My Basement",
        ctaLink: "/contact"
      }
    ],
    features: [
      "Health Protection – Prevent mold spores and bacteria in your home",
      "Structural Safety – Protect your foundation from weakening",
      "Lower Claim Costs – Early cleanup reduces total damage"
    ],
    faqs: [
      { q: "What causes basement flooding?", a: "Common causes include heavy rains, poor drainage, foundation cracks, burst pipes, or failed sump pumps." },
      { q: "Can a flooded basement be saved?", a: "Yes. With fast pump-out and drying, most basements can be restored. Delays increase risks of mold and foundation damage." },
      { q: "Do I need a sump pump installed?", a: "For flood-prone basements, a sump system with backup power is strongly recommended to prevent future flooding." },
      { q: "How long does basement drying take?", a: "Typically 2–5 days depending on water volume and humidity levels. Continuous monitoring ensures safe results." },
      { q: "Does insurance cover basement flooding?", a: "Coverage depends on the source—sudden leaks may be covered, but floodwater often requires separate flood insurance." }
    ]
  },

  "leak-repair": {
    hero: {
      title: "Stop Leaks Before They Cause Bigger Damage",
      description: "Whether it's a burst pipe, ceiling leak, or hidden water damage inside your walls, our Florida leak repair specialists act fast to protect your home or business. With 24/7 emergency response and advanced detection tools, we fix leaks before they become costly disasters.",
      cta: "Fix My Leak Now",
      badges: [
        { icon: "💧", text: "Ceilings" },
        { icon: "🚰", text: "Pipes" },
        { icon: "🏚️", text: "Walls" },
        { icon: "🦠", text: "Mold Prevention" }
      ]
    },
    process: {
      title: "Our Leak Repair Process",
      steps: [
        { title: "Inspection & Leak Detection", text: "Thermal imaging & moisture meters find the source", icon: "fas fa-search" },
        { title: "Emergency Containment", text: "Stop water flow, prevent further damage", icon: "fas fa-stop" },
        { title: "Drying & Dehumidification", text: "Industrial air movers, dehumidifiers", icon: "fas fa-wind" },
        { title: "Repair & Restoration", text: "Pipes, drywall, ceilings, and flooring fixed", icon: "fas fa-tools" },
        { title: "Mold Prevention & Quality Check", text: "Antimicrobial treatment + testing", icon: "fas fa-check-circle" }
      ]
    },
    services: [
      {
        icon: "🛠️",
        title: "Ceiling Leak Repair",
        description: "Repair water-damaged ceilings, replace drywall & insulation.",
        ctaText: "Schedule Ceiling Repair",
        ctaLink: "/contact"
      },
      {
        icon: "🚰",
        title: "Pipe Leak Repair",
        description: "Fix burst, corroded, or leaking pipes to restore flow & safety.",
        ctaText: "Request Pipe Repair",
        ctaLink: "/contact"
      },
      {
        icon: "🔍",
        title: "Hidden Leak Detection",
        description: "Advanced tools locate leaks inside walls, floors, or basements.",
        ctaText: "Find My Leak",
        ctaLink: "/contact"
      }
    ],
    features: [
      "Local Florida teams for faster dispatch",
      "24/7 emergency response available",
      "Experience with residential & commercial properties",
      "Assistance with insurance documentation"
    ],
    faqs: [
      { q: "How do I know if I have a hidden water leak?", a: "Signs include moldy odors, warped walls, and unexplained water bills. We use specialized tools to detect hidden leaks." },
      { q: "Can a ceiling leak cause mold?", a: "Yes. Within 24–48 hours, mold may develop on damp ceilings. Fast drying and repairs are essential." },
      { q: "Can leaking pipes be fixed without replacing everything?", a: "Often yes. We patch, seal, or replace sections of pipe depending on severity." },
      { q: "How long does leak repair take?", a: "Small leaks may be fixed same-day; larger or hidden leaks may take 2–3 days including drying and restoration." }
    ]
  },

  "ceiling-water-damage": {
    hero: {
      title: "Ceiling Leak or Water Stains? We Fix It Fast.",
      description: "From small leaks to major ceiling collapses, our Florida ceiling repair teams restore drywall, insulation, and finishes—stopping hidden mold before it spreads. With 24/7 emergency response and licensed specialists, we protect your home or business from water damage and ceiling collapse.",
      cta: "Schedule Ceiling Repair",
      badges: [
        { icon: "💧", text: "Leaks" },
        { icon: "🟤", text: "Stains" },
        { icon: "🪵", text: "Drywall" },
        { icon: "🦠", text: "Mold" }
      ]
    },
    process: {
      title: "Our Ceiling Repair Process",
      steps: [
        { title: "Inspection & Moisture Detection", text: "Thermal cameras to locate leaks", icon: "fas fa-camera" },
        { title: "Containment & Drying", text: "Industrial dehumidifiers & air movers", icon: "fas fa-wind" },
        { title: "Drywall & Insulation Replacement", text: "Remove damaged materials", icon: "fas fa-hammer" },
        { title: "Mold Prevention", text: "Antimicrobial treatments applied", icon: "fas fa-shield" },
        { title: "Finish Restoration", text: "Paint, texture & restore ceiling", icon: "fas fa-paint-roller" }
      ]
    },
    services: [
      {
        icon: "🔎",
        title: "Leak Source Repair",
        description: "Fix pipes, roof leaks, or AC condensation.",
        ctaText: "Find My Leak",
        ctaLink: "/contact"
      },
      {
        icon: "🧱",
        title: "Drywall & Ceiling Replacement",
        description: "Remove & replace water-damaged sections.",
        ctaText: "Schedule Drywall Repair",
        ctaLink: "/contact"
      },
      {
        icon: "🎨",
        title: "Stain & Finish Restoration",
        description: "Prime, paint, and re-texture surfaces.",
        ctaText: "Restore My Ceiling",
        ctaLink: "/contact"
      },
      {
        icon: "🦠",
        title: "Mold Remediation",
        description: "Long-term protection against hidden growth.",
        ctaText: "Prevent Mold Growth",
        ctaLink: "/contact"
      }
    ],
    features: [
      "Florida-based rapid response teams",
      "24/7 emergency ceiling repair",
      "Insurance claim documentation support",
      "Full cleanup + rebuild, not just patching"
    ],
    faqs: [
      { q: "How do I know if ceiling water damage is serious?", a: "Look for sagging, discoloration, musty odors, or peeling paint. These signal hidden water issues." },
      { q: "Can I just paint over ceiling stains?", a: "No. Without fixing the leak source, stains and mold will return." },
      { q: "How long does it take to repair ceiling water damage?", a: "Small repairs: 1–2 days. Major restoration: up to a week." },
      { q: "Can water-damaged ceilings collapse?", a: "Yes. Untreated damage weakens drywall & beams, raising collapse risk." }
    ]
  },

  "emergency-water-removal": {
    hero: {
      title: "Rapid Emergency Water Removal When Every Minute Counts",
      description: "Flooding, burst pipes, or storm intrusion can overwhelm your home or business in minutes. Our Florida emergency water removal teams respond 24/7 with industrial pumps, vacuums, and drying systems—eliminating standing water before it spreads. Protect your property, prevent mold, and restore safety now.",
      cta: "Request Water Removal Now",
      badges: [
        { icon: "🌊", text: "Flood" },
        { icon: "🚰", text: "Pipes" },
        { icon: "🌪️", text: "Storms" },
        { icon: "🏢", text: "Commercial" }
      ]
    },
    process: {
      title: "Our Emergency Water Removal Process",
      steps: [
        { title: "Inspection & Safety Check", text: "Identify hazards, source of water", icon: "fas fa-hard-hat" },
        { title: "Water Extraction", text: "Industrial pumps + vacuums remove standing water", icon: "fas fa-tint" },
        { title: "Drying & Dehumidification", text: "Air movers + dehumidifiers stabilize humidity", icon: "fas fa-wind" },
        { title: "Antimicrobial Treatment", text: "Stop mold & bacteria growth", icon: "fas fa-spray-can" },
        { title: "Damage Assessment & Restoration Plan", text: "Full documentation for insurance", icon: "fas fa-clipboard-list" }
      ]
    },
    services: [
      {
        icon: "🌊",
        title: "Flooded Living Rooms & Basements",
        description: "Water extraction before it seeps into walls, flooring, and insulation.",
        ctaText: "Extract Water Now",
        ctaLink: "/contact"
      },
      {
        icon: "🚰",
        title: "Burst Pipes or Plumbing Failures",
        description: "Rapid mitigation to stop spreading leaks.",
        ctaText: "Stop Pipe Leak",
        ctaLink: "/contact"
      },
      {
        icon: "🌪️",
        title: "Storm or Hurricane Flooding",
        description: "High-capacity pumps handle heavy stormwater intrusion.",
        ctaText: "Remove Storm Water",
        ctaLink: "/contact"
      },
      {
        icon: "🏢",
        title: "Commercial Water Emergencies",
        description: "Fast removal to minimize downtime and inventory loss.",
        ctaText: "Commercial Service",
        ctaLink: "/contact"
      }
    ],
    features: [
      "24/7 rapid response teams across Florida",
      "Industrial-grade pumps, vacuums, and drying systems",
      "Local crews for faster arrival times",
      "Insurance claim support with detailed documentation"
    ],
    faqs: [
      { q: "Can water be removed immediately after a flood?", a: "Yes. With industrial pumps, most water is extracted within hours. Acting quickly prevents mold and structural damage." },
      { q: "What happens if water isn't removed right away?", a: "It seeps into drywall, flooring, insulation—leading to mold, odor, and weakened structures." },
      { q: "Is emergency water removal different from drying?", a: "Yes. Removal extracts large volumes fast; drying stabilizes hidden moisture after." },
      { q: "Do you handle commercial water emergencies?", a: "Absolutely. We service offices, warehouses, and retail spaces with minimal downtime." }
    ]
  },

  // ===========================
  // FIRE DAMAGE SUBSERVICES
  // ===========================
  "smoke-damage": {
    hero: {
      title: "Breathe Easy Again After Smoke Damage",
      description: "When smoke invades your property, the damage goes beyond stains and odors—it impacts your health and safety. Our certified Florida restoration teams provide 24/7 smoke cleanup, soot removal, odor elimination, and surface repairs. Restore clean air and peace of mind today.",
      cta: "Request Smoke Damage Help Now",
      badges: [
        { icon: "🧹", text: "Soot" },
        { icon: "🌬️", text: "Odors" },
        { icon: "🛋️", text: "Furniture" },
        { icon: "🏠", text: "Structure" }
      ]
    },
    process: {
      title: "How Our Smoke Damage Process Works",
      steps: [
        { title: "Assessment & Air Quality Testing", text: "Identify contamination and affected zones", icon: "fas fa-vial" },
        { title: "Emergency Soot & Debris Removal", text: "Prevent permanent staining and corrosion", icon: "fas fa-broom" },
        { title: "Odor Neutralization", text: "HEPA filters, ozone & hydroxyl treatments", icon: "fas fa-air-freshener" },
        { title: "Deep Cleaning & Sanitization", text: "Walls, furniture, fabrics fully restored", icon: "fas fa-spray-can" },
        { title: "Final Repairs & Quality Check", text: "Structural fixes + guaranteed clean air", icon: "fas fa-check-circle" }
      ]
    },
    services: [
      {
        icon: "🧹",
        title: "Soot & Residue Removal",
        description: "Remove acidic soot before it corrodes surfaces",
        ctaText: "Remove Soot Now",
        ctaLink: "/contact"
      },
      {
        icon: "🌬️",
        title: "Odor Elimination",
        description: "Advanced deodorization with ozone & hydroxyl machines",
        ctaText: "Eliminate Odors",
        ctaLink: "/contact"
      },
      {
        icon: "🛋️",
        title: "Furniture & Fabric Restoration",
        description: "Upholstery, carpets & curtains saved from smoke absorption",
        ctaText: "Restore Furniture",
        ctaLink: "/contact"
      },
      {
        icon: "🏠",
        title: "Structural Cleaning",
        description: "Ceilings, walls & HVAC fully decontaminated",
        ctaText: "Clean Structure",
        ctaLink: "/contact"
      }
    ],
    features: [
      "Local Florida teams with fast dispatch",
      "24/7 emergency smoke cleanup",
      "Full-service: cleanup, deodorization, and repairs",
      "Insurance claim support included"
    ],
    faqs: [
      { q: "Can smoke damage be fully removed?", a: "Yes. With professional cleaning and deodorization, odors and particles can be eliminated." },
      { q: "How long does it take to clean smoke damage?", a: "Minor jobs: 1–2 days. Severe smoke with deep odors: up to a week." },
      { q: "Is smoke damage dangerous?", a: "Yes. Smoke contains toxic particles that may trigger allergies, asthma, and respiratory issues." },
      { q: "Does insurance cover smoke damage?", a: "Most Florida homeowners' policies cover it. We provide full documentation for claims." }
    ]
  },

  // ===========================
  // MOLD REMEDIATION SUBSERVICES
  // ===========================
  "mold-inspection": {
    hero: {
      title: "Get Certified Mold Testing in Florida—Fast, Accurate, Reliable",
      description: "Not sure if mold is hiding in your home or business? Our certified testing identifies mold type & levels—so you know exactly what you're breathing.",
      cta: "Schedule My Mold Test Today",
      badges: [
        { icon: "🧪", text: "Air Testing" },
        { icon: "🧬", text: "Surface Testing" },
        { icon: "📊", text: "Certified Reports" },
        { icon: "🛡️", text: "Insurance-Ready" }
      ]
    },
    process: {
      title: "How Our Mold Testing Works",
      steps: [
        { title: "Initial Walkthrough", text: "Spot visible mold + moisture risks", icon: "fas fa-eye" },
        { title: "Air Sampling", text: "Lab-grade pumps detect invisible mold spores", icon: "fas fa-wind" },
        { title: "Surface Testing", text: "Swabs confirm mold type on walls, vents, furniture", icon: "fas fa-microscope" },
        { title: "Lab Analysis", text: "Certified labs identify strain + spore levels", icon: "fas fa-flask" },
        { title: "Clear Report", text: "Easy-to-read results + photos + action plan", icon: "fas fa-file-alt" }
      ]
    },
    services: [
      {
        icon: "🔬",
        title: "Certified Inspectors",
        description: "Licensed Florida mold inspectors with advanced equipment",
        ctaText: "Book Inspection",
        ctaLink: "/contact"
      },
      {
        icon: "🏥",
        title: "Health-Safe Methods",
        description: "Non-invasive testing that protects your family during inspection",
        ctaText: "Safe Testing",
        ctaLink: "/contact"
      },
      {
        icon: "📋",
        title: "Detailed Reports",
        description: "Comprehensive lab results with clear recommendations",
        ctaText: "Get Report",
        ctaLink: "/contact"
      }
    ],
    features: [
      "Certified Florida mold inspectors",
      "Advanced tech: air pumps, swabs & infrared cameras",
      "Results in 24–48 hours",
      "Reports accepted by insurance & real estate agents",
      "Local teams in Central, Tampa Bay & South Florida"
    ],
    faqs: [
      { q: "What's the difference between inspection and testing?", a: "Inspection = visual & moisture scan. Testing = lab-confirmed type & spore count." },
      { q: "How accurate are mold tests?", a: "Lab-certified results with 99% accuracy." },
      { q: "Is mold testing required before removal?", a: "Yes—testing confirms the strain & guides safe remediation." },
      { q: "How long until I get results?", a: "Most reports delivered in 24–48 hours." }
    ]
  },

  // ===========================
  // STORM DAMAGE SUBSERVICES
  // ===========================
  "hurricane-damage": {
    hero: {
      title: "Hurricane Damage? We Restore Homes & Businesses Across Florida",
      description: "From roof leaks to major flooding, our hurricane restoration team provides emergency cleanup, debris removal, and full structural repairs. Available 24/7 across Florida.",
      cta: "Restore After Hurricane Now",
      badges: [
        { icon: "🌪️", text: "Roof" },
        { icon: "💧", text: "Flood" },
        { icon: "🧹", text: "Debris" },
        { icon: "🛠️", text: "Repair" }
      ]
    },
    process: {
      title: "Our 5-Step Hurricane Restoration Process",
      steps: [
        { title: "Emergency Board-Up & Roof Tarping", text: "Protect interiors from wind & rain", icon: "fas fa-shield" },
        { title: "Water Extraction & Drying", text: "Industrial pumps, dehumidifiers, air movers", icon: "fas fa-tint" },
        { title: "Debris & Tree Removal", text: "Clear fallen trees and hazardous debris", icon: "fas fa-tree" },
        { title: "Structural Repair & Roofing", text: "Rebuild roofs, siding, drywall & interiors", icon: "fas fa-hammer" },
        { title: "Insurance Claim Support", text: "Documentation & direct adjuster communication", icon: "fas fa-file-invoice" }
      ]
    },
    services: [
      {
        icon: "🏚️",
        title: "Roof Leaks & Collapse Risks",
        description: "Wind and flying debris cause hidden roof damage.",
        ctaText: "Fix Roof Damage",
        ctaLink: "/contact"
      },
      {
        icon: "💧",
        title: "Flooding & Water Intrusion",
        description: "Standing water weakens foundations & walls.",
        ctaText: "Remove Flood Water",
        ctaLink: "/contact"
      },
      {
        icon: "🌳",
        title: "Fallen Trees & Debris",
        description: "Storm-force winds scatter debris across property.",
        ctaText: "Clear Debris",
        ctaLink: "/contact"
      },
      {
        icon: "⚡",
        title: "Power & Utility Hazards",
        description: "Downed lines and outages create safety risks.",
        ctaText: "Emergency Safety",
        ctaLink: "/contact"
      }
    ],
    features: [
      "24/7 local emergency response",
      "Licensed & insured storm restoration crews",
      "Full-service: cleanup + structural repair",
      "Experience across Central & South Florida"
    ],
    faqs: [
      { q: "What is hurricane damage restoration?", a: "It's the process of securing, cleaning, drying, and repairing properties after hurricanes." },
      { q: "How long does hurricane restoration take?", a: "Minor repairs may take days; major structural rebuilds can take weeks." },
      { q: "Does insurance cover hurricane damage in Florida?", a: "Yes—most homeowners have hurricane coverage. We assist with full documentation." },
      { q: "Can you remove fallen trees after a hurricane?", a: "Yes. Our crews safely clear trees and storm debris from your property." }
    ]
  }
};

// Función para obtener contenido específico de subservicio
export function getSubserviceContent(subserviceSlug) {
  return subserviceContent[subserviceSlug] || null;
}