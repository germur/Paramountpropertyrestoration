// src/utils/restoration-data.js
// Centralized data for restoration templates - follows DRY principle
// NO STYLES, NO COMPONENTS - ONLY DATA

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

/**
 * Get content configuration for Water Damage services
 * @param {string} subSlug - Subservice slug
 * @returns {Object} Content configuration
 */
export function getWaterDamageContent(subSlug) {
  const waterContent = {
    "water-damage": {
      hero: {
        title: "Water Damage? We Remove, Dry & Restore",
        description: "Fast water extraction, moisture control, and structural drying to prevent mold and further damage. Serving Orlando, Miami, Tampa & beyond.",
        cta: "Free Water Damage Assessment",
        bgImage: "/images/herowater.jpg"
      },
      services: [
        { icon: "fas fa-water", title: "Flood Damage", description: "Emergency flood cleanup and water extraction", slug: "flood-damage", image: "/images/flood-damage.webp", link: "/restoration/water-damage/flood-damage" },
        { icon: "fas fa-wrench", title: "Leak Repair", description: "Fix burst pipes and hidden leaks", slug: "leak-repair", image: "/images/leak-repair.webp", link: "/restoration/water-damage/leak-repair" },
        { icon: "fas fa-home", title: "Basement Flooding", description: "Basement water removal and drying", slug: "basement-flooding", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/basement-flooding" },
        { icon: "fas fa-cloud-rain", title: "Ceiling Water Damage", description: "Ceiling leak repair and restoration", slug: "ceiling-water-damage", image: "/images/ceiling-water-damage.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        { icon: "fas fa-tint", title: "Emergency Water Removal", description: "24/7 rapid water extraction", slug: "emergency-water-removal", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/emergency-water-removal" }
      ],
      faqs: [
        { q: "What is water damage restoration?", a: "Water damage restoration is the process of cleaning, drying, and repairing property after water intrusion from floods, leaks, or storms. Our certified technicians use industrial-grade equipment to extract water, dry affected areas, and prevent secondary damage like mold growth." },
        { q: "How quickly should water damage restoration start?", a: "Ideally within 24 hours. Early extraction and drying reduce structural damage and the risk of mold growth. The longer water sits, the more expensive and extensive the restoration becomes." },
        { q: "What does the water damage process include?", a: "Our process includes: emergency inspection & moisture mapping, water extraction, cleaning & sanitizing, odor control, repairs, and finish restoration. We follow industry standards throughout the entire process." },
        { q: "Do you handle floods, leaks, and burst pipes?", a: "Yes. We respond to storm flooding, appliance failures, roof leaks, slab leaks, and burst supply lines. Our 24/7 emergency response team is equipped to handle any water damage scenario." },
        { q: "Will my insurance cover water damage restoration?", a: "Most homeowner's policies cover sudden water damage from burst pipes or appliance failures. Flood damage typically requires separate flood insurance. We work directly with insurance companies and help with claims documentation." },
        { q: "How long does the water damage restoration process take?", a: "The timeline varies depending on the extent of damage. Minor water damage can be resolved in 2-3 days, while major flooding may take 1-2 weeks. We provide detailed timelines during our initial assessment." }
      ],
      steps: [
        { title: "Emergency Call", text: "Free on-site inspection & moisture assessment", icon: "fas fa-phone" },
        { title: "Water Extraction", text: "Pumps & vacuums remove standing water", icon: "fas fa-tint" },
        { title: "Drying & Dehumidifying", text: "Air movers, dehumidifiers & moisture readings", icon: "fas fa-wind" },
        { title: "Cleaning & Repairs", text: "Sanitize, deodorize, and restore materials", icon: "fas fa-tools" }
      ]
    },
    "flood-damage": {
      hero: {
        title: "Flood Damage? We Extract Water & Restore Homes Across Florida",
        description: "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety.",
        cta: "Start Flood Extraction Now",
        bgImage: "/images/waterDamage.jpg"
      },
      services: [
        { icon: "fas fa-tint", title: "Emergency Water Extraction", description: "Pumps and vacuums remove large volumes of water quickly.", image: "/images/flood-damage.webp", link: "/restoration/water-damage/emergency-water-removal" },
        { icon: "fas fa-wind", title: "Industrial Drying", description: "Air movers and dehumidifiers dry walls, floors, and cavities.", image: "/images/leak-repair.webp", link: "/restoration/water-damage/flood-damage" },
        { icon: "fas fa-shield-alt", title: "Mold Prevention", description: "Antimicrobial treatments protect against bacteria and mold.", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/flood-damage" },
        { icon: "fas fa-tools", title: "Structural Stabilization", description: "Support for weakened ceilings, floors, and framing.", image: "/images/ceiling-water-damage.webp", link: "/restoration/water-damage/flood-damage" },
        { icon: "fas fa-hammer", title: "Property Restoration", description: "Complete restoration of damaged areas to pre-loss condition.", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/flood-damage" }
      ],
      faqs: [
        { q: "How long does flood cleanup take?", a: "Most properties dry within 2–5 days depending on water levels and building materials. Continuous monitoring ensures safe humidity levels before restoration begins." },
        { q: "Does insurance cover flood damage?", a: "Coverage varies—flooding from storms often requires separate flood insurance. Most policies cover sudden water events. We assist with documentation for your claim." },
        { q: "Can a flooded home be saved?", a: "Yes. With rapid extraction and drying, most structures can be stabilized and restored. Delays increase risks of mold and structural loss." },
        { q: "What should I do first after a flood?", a: "Stay safe, shut off electricity if needed, and call for emergency water removal. Avoid entering rooms with standing water." }
      ],
      steps: [
        { title: "Inspection & Moisture Mapping", text: "Identify visible and hidden flood damage", icon: "fas fa-search" },
        { title: "Rapid Water Extraction", text: "Remove standing floodwater using high-capacity pumps", icon: "fas fa-tint" },
        { title: "Drying & Dehumidification", text: "Stabilize humidity with industrial air movers", icon: "fas fa-wind" },
        { title: "Antimicrobial Treatment", text: "Protect walls, flooring, and furniture against mold", icon: "fas fa-shield-alt" },
        { title: "Ongoing Monitoring", text: "Daily moisture checks until drying is complete", icon: "fas fa-chart-line" }
      ]
    },
    "leak-repair": {
      hero: {
        title: "Stop Leaks Before They Cause Bigger Damage",
        description: "Whether it's a burst pipe, ceiling leak, or hidden water damage inside your walls, our Florida leak repair specialists act fast to protect your home or business. With 24/7 emergency response and advanced detection tools, we fix leaks before they become costly disasters.",
        cta: "Fix My Leak Now",
        bgImage: "/images/waterDamage.jpg"
      },
      services: [
        { icon: "fas fa-cloud-rain", title: "Ceiling Leak Repair", description: "Repair water-damaged ceilings, replace drywall & insulation.", image: "/images/flood-damage.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        { icon: "fas fa-wrench", title: "Pipe Leak Repair", description: "Fix burst, corroded, or leaking pipes to restore flow & safety.", image: "/images/leak-repair.webp", link: "/restoration/water-damage/leak-repair" },
        { icon: "fas fa-search", title: "Hidden Leak Detection", description: "Advanced tools locate leaks inside walls, floors, or basements.", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/leak-repair" },
        { icon: "fas fa-wind", title: "Drying & Dehumidification", description: "Complete moisture removal from affected areas.", image: "/images/ceiling-water-damage.webp", link: "/restoration/water-damage/leak-repair" },
        { icon: "fas fa-shield-alt", title: "Preventive Treatments", description: "Antimicrobial applications to prevent mold growth.", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/leak-repair" }
      ],
      faqs: [
        { q: "How do I know if I have a hidden water leak?", a: "Signs include moldy odors, warped walls, and unexplained water bills. We use specialized tools to detect hidden leaks." },
        { q: "Can a ceiling leak cause mold?", a: "Yes. Within 24–48 hours, mold may develop on damp ceilings. Fast drying and repairs are essential." },
        { q: "Can leaking pipes be fixed without replacing everything?", a: "Often yes. We patch, seal, or replace sections of pipe depending on severity." },
        { q: "How long does leak repair take?", a: "Small leaks may be fixed same-day; larger or hidden leaks may take 2–3 days including drying and restoration." }
      ],
      steps: [
        { title: "Inspection & Leak Detection", text: "Thermal imaging & moisture meters find the source", icon: "fas fa-search" },
        { title: "Emergency Containment", text: "Stop water flow, prevent further damage", icon: "fas fa-stop" },
        { title: "Drying & Dehumidification", text: "Industrial air movers, dehumidifiers", icon: "fas fa-wind" },
        { title: "Repair & Restoration", text: "Pipes, drywall, ceilings, and flooring fixed", icon: "fas fa-tools" },
        { title: "Mold Prevention & Quality Check", text: "Antimicrobial treatment + testing", icon: "fas fa-check-circle" }
      ]
    },
    "basement-flooding": {
      hero: {
        title: "Basement Flooding? We Pump Out Water & Protect Your Foundation",
        description: "Is your basement underwater? Our Florida team provides 24/7 basement flooding cleanup, including pump-out, cavity drying, and mold prevention. We remove water fast, protect your foundation, and restore your property safely.",
        cta: "Protect Against Mold",
        bgImage: "/images/waterDamage.jpg"
      },
      services: [
        { icon: "fas fa-pump-soap", title: "Basement Pump-Out", description: "Rapid water evacuation with high-volume pumps.", image: "/images/flood-damage.webp", link: "/restoration/water-damage/basement-flooding" },
        { icon: "fas fa-wind", title: "Structural Drying", description: "Dry walls, subfloors, and insulation to protect the foundation.", image: "/images/leak-repair.webp", link: "/restoration/water-damage/basement-flooding" },
        { icon: "fas fa-shield-alt", title: "Mold Prevention", description: "Apply treatments and humidity control to stop mold growth.", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/basement-flooding" },
        { icon: "fas fa-chart-line", title: "Moisture Monitoring", description: "Track safe drying progress with daily readings.", image: "/images/ceiling-water-damage.webp", link: "/restoration/water-damage/basement-flooding" },
        { icon: "fas fa-home", title: "Foundation Restoration", description: "Repair and restore basement structure and finishes.", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/basement-flooding" }
      ],
      faqs: [
        { q: "What causes basement flooding?", a: "Common causes include heavy rains, poor drainage, foundation cracks, burst pipes, or failed sump pumps." },
        { q: "Can a flooded basement be saved?", a: "Yes. With fast pump-out and drying, most basements can be restored. Delays increase risks of mold and foundation damage." },
        { q: "Do I need a sump pump installed?", a: "For flood-prone basements, a sump system with backup power is strongly recommended to prevent future flooding." },
        { q: "How long does basement drying take?", a: "Typically 2–5 days depending on water volume and humidity levels. Continuous monitoring ensures safe results." }
      ],
      steps: [
        { title: "Safety & Assessment", text: "Check for electrical hazards and structural risks before entry", icon: "fas fa-hard-hat" },
        { title: "Pump-Out & Water Removal", text: "High-capacity pumps quickly clear standing basement water", icon: "fas fa-pump-soap" },
        { title: "Cavity Drying", text: "Industrial dehumidifiers and air movers dry walls, flooring, and crawlspaces", icon: "fas fa-wind" },
        { title: "Humidity Control", text: "Stabilize indoor moisture levels to safe conditions", icon: "fas fa-thermometer-half" },
        { title: "Antimicrobial Treatment", text: "Apply disinfectants to prevent mold and bacteria growth", icon: "fas fa-spray-can" }
      ]
    },
    "ceiling-water-damage": {
      hero: {
        title: "Ceiling Leak or Water Stains? We Fix It Fast.",
        description: "From small leaks to major ceiling collapses, our Florida ceiling repair teams restore drywall, insulation, and finishes—stopping hidden mold before it spreads. With 24/7 emergency response and licensed specialists, we protect your home or business from water damage and ceiling collapse.",
        cta: "Schedule Ceiling Repair",
        bgImage: "/images/waterDamage.jpg"
      },
      services: [
        { icon: "fas fa-wrench", title: "Leak Source Repair", description: "Fix pipes, roof leaks, or AC condensation.", image: "/images/flood-damage.webp", link: "/restoration/water-damage/leak-repair" },
        { icon: "fas fa-hammer", title: "Drywall & Ceiling Replacement", description: "Remove & replace water-damaged sections.", image: "/images/leak-repair.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        { icon: "fas fa-paint-roller", title: "Stain & Finish Restoration", description: "Prime, paint, and re-texture surfaces.", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        { icon: "fas fa-virus", title: "Mold Remediation", description: "Long-term protection against hidden growth.", image: "/images/ceiling-water-damage.webp", link: "/restoration/water-damage/ceiling-water-damage" },
        { icon: "fas fa-wind", title: "Advanced Drying Systems", description: "Industrial equipment for complete moisture removal.", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/ceiling-water-damage" }
      ],
      faqs: [
        { q: "How do I know if ceiling water damage is serious?", a: "Look for sagging, discoloration, musty odors, or peeling paint. These signal hidden water issues." },
        { q: "Can I just paint over ceiling stains?", a: "No. Without fixing the leak source, stains and mold will return." },
        { q: "How long does it take to repair ceiling water damage?", a: "Small repairs: 1–2 days. Major restoration: up to a week." },
        { q: "Can water-damaged ceilings collapse?", a: "Yes. Untreated damage weakens drywall & beams, raising collapse risk." }
      ],
      steps: [
        { title: "Inspection & Moisture Detection", text: "Thermal cameras to locate leaks", icon: "fas fa-camera" },
        { title: "Containment & Drying", text: "Industrial dehumidifiers & air movers", icon: "fas fa-wind" },
        { title: "Drywall & Insulation Replacement", text: "Remove damaged materials", icon: "fas fa-hammer" },
        { title: "Mold Prevention", text: "Antimicrobial treatments applied", icon: "fas fa-shield-alt" },
        { title: "Finish Restoration", text: "Paint, texture & restore ceiling", icon: "fas fa-paint-roller" }
      ]
    },
    "emergency-water-removal": {
      hero: {
        title: "Rapid Emergency Water Removal When Every Minute Counts",
        description: "Flooding, burst pipes, or storm intrusion can overwhelm your home or business in minutes. Our Florida emergency water removal teams respond 24/7 with industrial pumps, vacuums, and drying systems—eliminating standing water before it spreads.",
        cta: "Request Water Removal Now",
        bgImage: "/images/waterDamage.jpg"
      },
      services: [
        { icon: "fas fa-tint", title: "24/7 Emergency Response", description: "Immediate water extraction deployment", image: "/images/flood-damage.webp", link: "/restoration/water-damage/emergency-water-removal" },
        { icon: "fas fa-pump-soap", title: "High-Capacity Pumps", description: "Remove thousands of gallons quickly", image: "/images/leak-repair.webp", link: "/restoration/water-damage/emergency-water-removal" },
        { icon: "fas fa-wind", title: "Industrial Dehumidifiers", description: "Stabilize humidity and prevent mold", image: "/images/basement-flooding.webp", link: "/restoration/water-damage/emergency-water-removal" },
        { icon: "fas fa-chart-line", title: "Moisture Monitoring", description: "Track drying progress with precision tools", image: "/images/ceiling-water-damage.webp", link: "/restoration/water-damage/emergency-water-removal" },
        { icon: "fas fa-file-invoice", title: "Insurance Documentation", description: "Complete reports for claims processing", image: "/images/emergency-water-removal.webp", link: "/restoration/water-damage/emergency-water-removal" }
      ],
      faqs: [
        { q: "How fast can you remove water?", a: "We typically arrive within 60 minutes and begin extraction immediately with high-capacity pumps." },
        { q: "What equipment do you use?", a: "Industrial pumps, wet vacuums, air movers, dehumidifiers, and moisture meters." },
        { q: "Do you work with insurance?", a: "Yes. We document everything and work directly with adjusters." },
        { q: "What if water returns?", a: "We identify and fix the source to prevent recurrence." }
      ],
      steps: [
        { title: "Emergency Dispatch", text: "60-minute response time guarantee", icon: "fas fa-truck" },
        { title: "Rapid Water Extraction", text: "Industrial pumps remove standing water", icon: "fas fa-tint" },
        { title: "Moisture Mapping", text: "Identify all affected areas", icon: "fas fa-map" },
        { title: "Dehumidification", text: "Stabilize humidity levels", icon: "fas fa-wind" },
        { title: "Continuous Monitoring", text: "Track drying until complete", icon: "fas fa-chart-line" }
      ]
    }
  };

  return waterContent[subSlug] || waterContent["water-damage"];
}

/**
 * Get content configuration for Fire Damage services
 * @param {string} subSlug - Subservice slug
 * @returns {Object} Content configuration
 */
export function getFireDamageContent(_subSlug) {
  // Similar structure for Fire Damage
  // Will be populated from FireTemplate.astro
  return {
    hero: {
      title: "Fire Damage Restoration",
      description: "Professional fire damage cleanup and restoration services.",
      cta: "Get Fire Damage Help",
      bgImage: "/images/herofire.jpg"
    },
    services: [],
    faqs: [],
    steps: []
  };
}

/**
 * Get content configuration for Mold Remediation services
 * @param {string} subSlug - Subservice slug
 * @returns {Object} Content configuration
 */
export function getMoldRemediationContent(_subSlug) {
  // Similar structure for Mold Remediation
  // Will be populated from MoldTemplate.astro
  return {
    hero: {
      title: "Mold Remediation Services",
      description: "Professional mold removal and prevention services.",
      cta: "Schedule Mold Inspection",
      bgImage: "/images/heroMold.jpg"
    },
    services: [],
    faqs: [],
    steps: []
  };
}

/**
 * Get content configuration for Storm Damage services
 * @param {string} subSlug - Subservice slug
 * @returns {Object} Content configuration
 */
export function getStormDamageContent(_subSlug) {
  // Similar structure for Storm Damage
  // Will be populated from StormTemplate.astro
  return {
    hero: {
      title: "Storm Damage Restoration",
      description: "Emergency storm damage repair and restoration services.",
      cta: "Get Storm Damage Help",
      bgImage: "/images/heroStorm.jpg"
    },
    services: [],
    faqs: [],
    steps: []
  };
}

/**
 * Get content configuration for Mitigation services
 * @param {string} subSlug - Subservice slug
 * @returns {Object} Content configuration
 */
export function getMitigationContent(_subSlug) {
  // Similar structure for Mitigation
  // Will be populated from MitigationTemplate.astro
  return {
    hero: {
      title: "Emergency Mitigation Services",
      description: "Fast response mitigation to minimize property damage.",
      cta: "Start Mitigation Now",
      bgImage: "/images/mitigation.jpg"
    },
    services: [],
    faqs: [],
    steps: []
  };
}
