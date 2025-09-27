// src/data/restoration-content.js
// Contenido específico para cada servicio de restauración basado en el documento

export const restorationContent = {
  // ===========================
  // WATER DAMAGE CONTENT
  // ===========================
  "water-damage": {
    hero: {
      title: "Water Damage? We Remove, Dry & Restore",
      description: "Fast water extraction, moisture control, and structural drying to prevent mold and further damage. Serving Orlando, Miami, Tampa & beyond.",
      cta: "Free Water Damage Assessment",
      badges: [
        { icon: "💧", text: "Water Extraction" },
        { icon: "🌬️", text: "Drying" },
        { icon: "🛡️", text: "Mold Prevention" },
        { icon: "🛠️", text: "Restoration" }
      ]
    },
    process: {
      title: "How It Works",
      steps: [
        { title: "Emergency Call", text: "Free on-site inspection & moisture assessment", icon: "fas fa-phone" },
        { title: "Water Extraction", text: "Pumps & vacuums remove standing water", icon: "fas fa-tint" },
        { title: "Drying & Dehumidifying", text: "Air movers, dehumidifiers & moisture readings", icon: "fas fa-wind" },
        { title: "Cleaning & Repairs", text: "Sanitize, deodorize, and restore materials", icon: "fas fa-broom" }
      ]
    },
    services: [
      {
        icon: "🌊",
        title: "Flood Damage",
        description: "Rapid extraction from floods, leaks, or burst pipes to stop damage and protect structure and contents.",
        ctaText: "Start Water Extraction",
        ctaLink: "/restoration/water-damage/flood-damage"
      },
      {
        icon: "🔧",
        title: "Leak Repair",
        description: "Industrial dehumidifiers and air movers dry walls, floors, and cavities with moisture monitoring.",
        ctaText: "Schedule Drying Service",
        ctaLink: "/restoration/water-damage/leak-repair"
      },
      {
        icon: "🏠",
        title: "Basement Flooding",
        description: "Antimicrobial treatments and humidity control prevent mold growth after water exposure.",
        ctaText: "Protect Against Mold",
        ctaLink: "/restoration/water-damage/basement-flooding"
      },
      {
        icon: "🏚️",
        title: "Ceiling Water Damage",
        description: "Replace damaged drywall, insulation, and flooring; restore finishes to pre-loss condition.",
        ctaText: "Schedule Ceiling Repair",
        ctaLink: "/restoration/water-damage/ceiling-water-damage"
      },
      {
        icon: "🚨",
        title: "Emergency Water Removal",
        description: "Rapidly extract standing water to prevent mold, protect structure, and start restoration immediately.",
        ctaText: "Request Water Removal",
        ctaLink: "/restoration/water-damage/emergency-water-removal"
      }
    ],
    warnings: [
      { icon: "💧", text: "Any amount of standing water in your property" },
      { icon: "💨", text: "Smell of mold or mildew indicating hidden moisture" },
      { icon: "🎨", text: "Water stains on walls, ceilings, or floors" },
      { icon: "🌊", text: "Buckled floors, warped walls, or sagging ceilings" }
    ],
    features: [
      "24/7 water damage restoration in Florida",
      "Local teams for fast dispatch",
      "Complete service—from cleanup to rebuild",
      "We assist with insurance paperwork",
      "Trusted by Florida homeowners & businesses"
    ],
    faqs: [
      { q: "How fast should water damage restoration start?", a: "Ideally within 24 hours. Early extraction and drying reduce structural damage and the risk of mold growth." },
      { q: "What does the water damage process include?", a: "Our process includes: emergency inspection & moisture mapping, water extraction, cleaning & sanitizing, odor control, repairs, and finish restoration." },
      { q: "Do you handle floods, leaks, and burst pipes?", a: "Yes. We respond to storm flooding, appliance failures, roof leaks, slab leaks, and burst supply lines." },
      { q: "Can you prevent mold after water damage?", a: "Yes. We control humidity, remove wet materials when needed, and apply antimicrobial treatments to prevent mold." },
      { q: "How long does structural drying take?", a: "Typically 2–5 days, depending on materials, saturation, ventilation, and indoor humidity. We monitor progress daily." },
      { q: "Will my insurance cover water damage?", a: "Many policies cover sudden or accidental water events. Flood damage may require separate coverage. We assist with documentation for your claim." }
    ]
  },

  // ===========================
  // FIRE DAMAGE CONTENT
  // ===========================
  "fire-damage": {
    hero: {
      title: "Fire Damage Restoration Services in Florida",
      description: "We provide 24/7 fire and smoke damage restoration across Florida. From emergency board-up to soot removal and full repairs, our team restores homes and businesses to safe, pre-loss condition.",
      cta: "Clean Up After Fire",
      badges: [
        { icon: "🔥", text: "Smoke Cleanup" },
        { icon: "🏠", text: "Odor Removal" },
        { icon: "🧹", text: "Soot Cleanup" },
        { icon: "🛠️", text: "Structural Repair" }
      ]
    },
    process: {
      title: "How It Works",
      steps: [
        { title: "Emergency Response & Board-Up", text: "Secure the property immediately after the fire", icon: "fas fa-shield" },
        { title: "Soot & Smoke Removal", text: "Clean affected areas with advanced tools and techniques", icon: "fas fa-broom" },
        { title: "Odor Treatment", text: "Deodorize air, walls, and belongings for a safe living space", icon: "fas fa-air-freshener" },
        { title: "Repairs & Restoration", text: "Rebuild damaged structures and restore finishes", icon: "fas fa-hammer" }
      ]
    },
    services: [
      {
        icon: "💨",
        title: "Smoke Damage Cleanup",
        description: "Remove smoke particles and odors from walls, ceilings, and furniture with professional cleaning and deodorizing methods.",
        ctaText: "Eliminate Smoke Odor",
        ctaLink: "/restoration/fire-damage/smoke-damage"
      },
      {
        icon: "🧹",
        title: "Soot Removal",
        description: "Safe cleanup of soot from surfaces, HVAC systems, and personal belongings to prevent long-term damage.",
        ctaText: "Remove Soot Now",
        ctaLink: "/restoration/fire-damage/soot-cleanup"
      },
      {
        icon: "🏗️",
        title: "Fire Structural Repair",
        description: "Repair and replace fire-damaged drywall, insulation, flooring, and framing to restore property integrity.",
        ctaText: "Start Structural Repairs",
        ctaLink: "/restoration/fire-damage/fire-damage-repair"
      },
      {
        icon: "🪟",
        title: "Emergency Board-Up",
        description: "Secure broken windows, doors, and openings after a fire to prevent further damage or theft.",
        ctaText: "Request Emergency Board-Up",
        ctaLink: "/restoration/fire-damage/emergency-fire-response"
      }
    ],
    warnings: [
      { icon: "💨", text: "Persistent smoke smell throughout the property" },
      { icon: "⚫", text: "Black residue on walls, furniture, or belongings" },
      { icon: "🔥", text: "Warped materials, melted items, or discoloration" },
      { icon: "💧", text: "Secondary water damage from firefighting efforts" }
    ],
    features: [
      "24/7 fire and smoke restoration in Florida",
      "Local teams for fast dispatch",
      "Complete service—from cleanup to rebuild",
      "We assist with insurance paperwork",
      "Trusted by Florida homeowners & businesses"
    ],
    faqs: [
      { q: "How to restore fire damage?", a: "Fire damage restoration involves soot cleanup, smoke odor removal, and structural repairs. Professionals handle debris removal, deep cleaning, and rebuilding to return the property to pre-loss condition." },
      { q: "What is the meaning of fire damage restoration?", a: "It's the process of cleaning, repairing, and restoring a property after fire or smoke damage, ensuring safety and habitability." },
      { q: "How to remove soot and smoke damage?", a: "Professionals use HEPA vacuums, chemical sponges, and deodorizing treatments to safely remove soot and smoke particles from surfaces and air systems." },
      { q: "Can you paint over smoke or soot?", a: "Painting over soot is not recommended. Proper cleaning and sealing are required first to prevent stains and odors from returning." },
      { q: "What is fire and flood restoration?", a: "This service covers both fire damage cleanup and water extraction from firefighting, ensuring complete drying, soot removal, and repairs." }
    ]
  },

  // ===========================
  // MOLD REMEDIATION CONTENT
  // ===========================
  "mold-remediation": {
    hero: {
      title: "Mold Remediation & Removal Services in Florida",
      description: "Our Florida teams provide 24/7 mold remediation to protect your home, office, and health. From black mold testing to full remediation and prevention, we deliver safe, lasting results.",
      cta: "Remove Mold Fast",
      badges: [
        { icon: "🦠", text: "Mold Testing" },
        { icon: "🏠", text: "Black Mold Removal" },
        { icon: "🌬️", text: "Air Quality" },
        { icon: "🔒", text: "Prevention" }
      ]
    },
    process: {
      title: "How It Works",
      steps: [
        { title: "Inspection & Testing", text: "Identify mold type, spread, and source", icon: "fas fa-search" },
        { title: "Containment & Protection", text: "Isolate affected areas to stop cross-contamination", icon: "fas fa-shield" },
        { title: "Mold Removal", text: "Safely clean and remove mold colonies", icon: "fas fa-broom" },
        { title: "Air Filtration & Treatment", text: "HEPA filters, antimicrobial agents, and deodorizing", icon: "fas fa-wind" },
        { title: "Prevention & Verification", text: "Moisture control and final clearance testing", icon: "fas fa-check" }
      ]
    },
    services: [
      {
        icon: "🖤",
        title: "Black Mold Removal",
        description: "Safe removal of black mold colonies from walls, ceilings, and hidden spaces with industry-grade equipment.",
        ctaText: "Remove Black Mold",
        ctaLink: "/restoration/mold-remediation/black-mold-removal"
      },
      {
        icon: "🔬",
        title: "Mold Testing & Inspection",
        description: "Professional air and surface testing to identify mold species and hidden contamination.",
        ctaText: "Schedule Mold Testing",
        ctaLink: "/restoration/mold-remediation/mold-inspection"
      },
      {
        icon: "🧴",
        title: "Antimicrobial Treatment",
        description: "Application of antimicrobial agents to prevent mold regrowth and ensure long-term protection.",
        ctaText: "Request Treatment",
        ctaLink: "/restoration/mold-remediation/mold-prevention"
      },
      {
        icon: "💧",
        title: "Moisture & Humidity Control",
        description: "Dehumidifiers and ventilation solutions to eliminate the root cause of mold growth.",
        ctaText: "Control Humidity",
        ctaLink: "/restoration/mold-remediation/mold-testing"
      }
    ],
    warnings: [
      { icon: "👁️", text: "Any visible mold growth, regardless of size" },
      { icon: "🤧", text: "Respiratory issues, allergies, or unexplained illness" },
      { icon: "💦", text: "Previous water damage, leaks, or flooding" },
      { icon: "👃", text: "Persistent moldy or earthy odors" }
    ],
    features: [
      "Safe mold removal for homes & businesses",
      "Black mold experts with advanced equipment",
      "Focus on health & indoor air quality",
      "Moisture control to prevent regrowth",
      "Local Florida response—fast and reliable"
    ],
    faqs: [
      { q: "What is mold remediation?", a: "Mold remediation is the process of identifying, containing, and safely removing mold, followed by cleaning and moisture control to prevent regrowth." },
      { q: "How dangerous is black mold?", a: "Black mold can trigger respiratory issues, allergies, and health risks—especially for children, elderly, and those with asthma. Professional removal is strongly recommended." },
      { q: "Can mold come back after remediation?", a: "Yes, if the source of moisture isn't resolved. That's why remediation always includes humidity control and prevention strategies." },
      { q: "How long does mold remediation take?", a: "Most projects take 1–5 days, depending on the extent of contamination and drying requirements." },
      { q: "What are signs of mold in your home?", a: "Musty odors, visible black or green spots, water stains, or worsening allergies indoors are common signs of mold." }
    ]
  },

  // ===========================
  // STORM DAMAGE CONTENT
  // ===========================
  "storm-damage": {
    hero: {
      title: "Storm Damage Restoration Services in Florida",
      description: "Our Florida storm restoration teams provide 24/7 emergency response for roof damage, flooding, and debris removal. From temporary tarps to full repairs, we restore homes and businesses quickly and safely.",
      cta: "Repair Storm Damage Today",
      badges: [
        { icon: "🌪️", text: "Hurricane Damage" },
        { icon: "🏚️", text: "Roof Repair" },
        { icon: "🌊", text: "Flood Cleanup" },
        { icon: "🧹", text: "Debris Removal" }
      ]
    },
    process: {
      title: "How It Works",
      steps: [
        { title: "Emergency Response", text: "Tarping, boarding, and securing property after storm impact", icon: "fas fa-shield" },
        { title: "Damage Assessment", text: "Roofs, interiors, and structural inspections", icon: "fas fa-clipboard-check" },
        { title: "Cleanup & Water Extraction", text: "Remove debris, water, and damaged materials", icon: "fas fa-broom" },
        { title: "Repairs & Restoration", text: "Roof replacement, structural repairs, and finish restoration", icon: "fas fa-hammer" }
      ]
    },
    services: [
      {
        icon: "🌪️",
        title: "Hurricane Damage",
        description: "Immediate response to wind and water damage after hurricanes, including board-ups, tarping, and emergency repairs.",
        ctaText: "Restore After Hurricane",
        ctaLink: "/restoration/storm-damage/hurricane-damage"
      },
      {
        icon: "🏚️",
        title: "Roof Damage",
        description: "Repair or replace damaged shingles, flashing, and underlayment caused by high winds, hail, or falling debris.",
        ctaText: "Fix My Roof",
        ctaLink: "/restoration/storm-damage/wind-damage"
      },
      {
        icon: "🌊",
        title: "Flood & Water Intrusion",
        description: "Extraction and drying of water intrusion caused by heavy rains or storm surges to prevent mold and structural damage.",
        ctaText: "Start Water Removal",
        ctaLink: "/restoration/storm-damage/storm-debris-removal"
      },
      {
        icon: "🧹",
        title: "Debris Removal",
        description: "Safe cleanup of fallen trees, branches, and structural debris blocking driveways or damaging property.",
        ctaText: "Request Debris Removal",
        ctaLink: "/restoration/storm-damage/emergency-storm-repair"
      }
    ],
    warnings: [
      { icon: "🏠", text: "Missing shingles, holes, or visible roof damage" },
      { icon: "🪟", text: "Cracked or shattered windows and glass doors" },
      { icon: "💧", text: "Water entering through storm-damaged areas" },
      { icon: "🌪️", text: "Damage from flying debris or fallen trees" }
    ],
    features: [
      "24/7 storm response teams across Florida",
      "Emergency tarping, board-up, and roof repair",
      "From cleanup to rebuild—we handle it all",
      "Support with insurance paperwork",
      "Trusted by Florida homeowners after every storm season"
    ],
    faqs: [
      { q: "What does storm damage mean?", a: "Storm damage refers to harm caused by hurricanes, wind, hail, or flooding—often impacting roofs, siding, windows, and interiors. Immediate repairs help prevent further water intrusion and mold." },
      { q: "How to fix storm damage?", a: "Fixing storm damage starts with securing the property—tarping roofs, boarding windows, and removing debris. Professional restoration teams then repair structural damage and restore the property safely." },
      { q: "What is the most common storm damage?", a: "Roof damage is the most common, including missing shingles, leaks, and broken flashing. Other frequent issues are water intrusion, downed trees, and exterior siding damage." },
      { q: "How to recover from hurricane damage?", a: "Recovery involves emergency response, debris removal, water extraction, and roof repair. Restoration professionals coordinate with insurance adjusters to speed up the rebuilding process." },
      { q: "What does a damaged roof look like after a storm?", a: "Signs include missing shingles, leaks, water stains on ceilings, sagging areas, or visible debris impact. If you notice these, call for a professional inspection immediately." }
    ]
  },

  // ===========================
  // MITIGATION SERVICES CONTENT
  // ===========================
  "mitigation-services": {
    hero: {
      title: "Mitigation Services in Florida – Protect Before It Gets Worse",
      description: "Our mitigation services across Florida focus on limiting property loss from water, fire, mold, and storms. By acting fast, we reduce risks, control costs, and keep your home or business safe.",
      cta: "Prevent Further Damage",
      badges: [
        { icon: "💧", text: "Water Mitigation" },
        { icon: "🔥", text: "Fire Mitigation" },
        { icon: "🦠", text: "Mold Mitigation" },
        { icon: "🌪️", text: "Storm Mitigation" }
      ]
    },
    process: {
      title: "How It Works",
      steps: [
        { title: "Inspection & Risk Assessment", text: "Identify threats from water, fire, mold, or storms", icon: "fas fa-search" },
        { title: "Containment & Control", text: "Limit exposure and stop further property loss", icon: "fas fa-shield" },
        { title: "Moisture & Air Quality Management", text: "Use drying, filtration, and antimicrobial methods", icon: "fas fa-wind" },
        { title: "Temporary Protection", text: "Board-ups, tarps, and barriers until full restoration begins", icon: "fas fa-tools" }
      ]
    },
    services: [
      {
        icon: "💧",
        title: "Water Mitigation",
        description: "Emergency extraction, dehumidification, and moisture control to prevent structural damage and mold growth.",
        ctaText: "Start Water Mitigation",
        ctaLink: "/restoration/mitigation-services/water-mitigation"
      },
      {
        icon: "🔥",
        title: "Fire Mitigation",
        description: "Board-ups, smoke containment, and ventilation strategies to limit secondary damage after a fire.",
        ctaText: "Secure My Property",
        ctaLink: "/restoration/mitigation-services/fire-mitigation"
      },
      {
        icon: "🦠",
        title: "Mold Mitigation",
        description: "Moisture control, air filtration, and antimicrobial treatments to prevent mold from spreading.",
        ctaText: "Stop Mold Spread",
        ctaLink: "/restoration/mitigation-services/mold-mitigation"
      },
      {
        icon: "🌪️",
        title: "Storm Mitigation",
        description: "Roof tarping, window boarding, and debris removal to secure properties before and after severe weather.",
        ctaText: "Request Storm Mitigation",
        ctaLink: "/restoration/mitigation-services/storm-mitigation"
      }
    ],
    warnings: [
      { icon: "🚨", text: "Any new damage that could worsen without intervention" },
      { icon: "💧", text: "Ongoing water infiltration or moisture problems" },
      { icon: "⚡", text: "Water near electrical systems or damaged wiring" },
      { icon: "🏗️", text: "Compromised structural elements requiring stabilization" }
    ],
    features: [
      "Mitigation-first approach to reduce repair costs",
      "Fast response teams across Florida",
      "Secure, stabilize, and prevent further loss",
      "Support for both homeowners & businesses",
      "Bridge between emergency response and full restoration"
    ],
    faqs: [
      { q: "What are mitigation services?", a: "Mitigation services limit property damage before full restoration begins. This includes water extraction, mold containment, fire board-ups, and storm tarping to prevent further loss." },
      { q: "What is the difference between mitigation and restoration?", a: "Mitigation reduces the impact of damage immediately—like drying water or boarding windows—while restoration repairs and rebuilds the property to pre-loss condition." },
      { q: "Why is mitigation important?", a: "Acting fast with mitigation saves money, reduces risks, and prevents small problems (like leaks or smoke) from becoming major structural issues." },
      { q: "Does insurance cover mitigation?", a: "Most policies cover mitigation services as part of property loss claims, since they are critical to reducing overall damage." }
    ]
  }
};

// Función para obtener contenido específico
export function getRestorationContent(serviceSlug) {
  return restorationContent[serviceSlug] || restorationContent["water-damage"];
}