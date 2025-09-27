// src/data/subservice-content.js

// Función para generar contenido enriquecido para subservicios
export function getEnrichedSubserviceContent(subserviceSlug, cityData = null) {
  const subserviceContent = {
    // ===========================
    // WATER DAMAGE SUBSERVICES
    // ===========================
    "flood-damage": {
      hero: {
        title: cityData 
          ? `Flood Damage Cleanup in ${cityData.nombre}, FL | 24/7 Emergency Response`
          : "Flood Damage? We Extract Water & Restore Homes Across Florida",
        description: cityData
          ? `Emergency flood damage cleanup in ${cityData.nombre}, ${cityData.region}. Fast water extraction, drying, and mold prevention. 24/7 response team ready now.`
          : "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety.",
        badge: "🚨 24/7 Emergency Response"
      },
      services: [
        { icon: "fas fa-tint", title: "Emergency Water Extraction", description: "Pumps and vacuums remove large volumes of water quickly." },
        { icon: "fas fa-wind", title: "Industrial Drying", description: "Air movers and dehumidifiers dry walls, floors, and cavities." },
        { icon: "fas fa-shield-alt", title: "Mold Prevention", description: "Antimicrobial treatments protect against bacteria and mold." },
        { icon: "fas fa-tools", title: "Structural Stabilization", description: "Support for weakened ceilings, floors, and framing." }
      ],
      process: {
        title: "Our Flood Damage Process",
        steps: [
          { title: "Inspection & Moisture Mapping", text: "Identify visible and hidden flood damage", icon: "fas fa-search" },
          { title: "Rapid Water Extraction", text: "Remove standing floodwater using high-capacity pumps", icon: "fas fa-tint" },
          { title: "Drying & Dehumidification", text: "Stabilize humidity with industrial air movers", icon: "fas fa-wind" },
          { title: "Antimicrobial Treatment", text: "Protect walls, flooring, and furniture against mold", icon: "fas fa-shield-alt" },
          { title: "Ongoing Monitoring", text: "Daily moisture checks until drying is complete", icon: "fas fa-chart-line" }
        ]
      },
      faqs: [
        { q: "How long does flood cleanup take?", a: "Most properties dry within 2–5 days depending on water levels and building materials. Continuous monitoring ensures safe humidity levels before restoration begins." },
        { q: "Does insurance cover flood damage?", a: "Coverage varies—flooding from storms often requires separate flood insurance. Most policies cover sudden water events. We assist with documentation for your claim." },
        { q: "Can a flooded home be saved?", a: "Yes. With rapid extraction and drying, most structures can be stabilized and restored. Delays increase risks of mold and structural loss." },
        { q: "What should I do first after a flood?", a: "Stay safe, shut off electricity if needed, and call for emergency water removal. Avoid entering rooms with standing water." }
      ]
    },

    "leak-repair": {
      hero: {
        title: cityData 
          ? `Leak Repair Services in ${cityData.nombre}, FL | Stop Leaks Fast`
          : "Stop Leaks Before They Cause Bigger Damage",
        description: cityData
          ? `Professional leak repair in ${cityData.nombre}, ${cityData.region}. Fix burst pipes, ceiling leaks, and hidden water damage. Advanced detection tools and 24/7 emergency response.`
          : "Whether it's a burst pipe, ceiling leak, or hidden water damage inside your walls, our Florida leak repair specialists act fast to protect your home or business.",
        badge: "🔧 Advanced Detection"
      },
      services: [
        { icon: "fas fa-home", title: "Ceiling Leak Repair", description: "Repair water-damaged ceilings, replace drywall & insulation." },
        { icon: "fas fa-wrench", title: "Pipe Leak Repair", description: "Fix burst, corroded, or leaking pipes to restore flow & safety." },
        { icon: "fas fa-search", title: "Hidden Leak Detection", description: "Advanced tools locate leaks inside walls, floors, or basements." }
      ],
      faqs: [
        { q: "How do I know if I have a hidden water leak?", a: "Signs include moldy odors, warped walls, and unexplained water bills. We use specialized tools to detect hidden leaks." },
        { q: "Can a ceiling leak cause mold?", a: "Yes. Within 24–48 hours, mold may develop on damp ceilings. Fast drying and repairs are essential." },
        { q: "How long does leak repair take?", a: "Small leaks may be fixed same-day; larger or hidden leaks may take 2–3 days including drying and restoration." }
      ]
    },

    // ===========================
    // FIRE DAMAGE SUBSERVICES
    // ===========================
    "smoke-damage": {
      hero: {
        title: cityData 
          ? `Smoke Damage Restoration in ${cityData.nombre}, FL | Odor Removal`
          : "Breathe Easy Again After Smoke Damage",
        description: cityData
          ? `Professional smoke damage cleanup in ${cityData.nombre}, ${cityData.region}. Remove smoke odors, soot particles, and restore air quality. 24/7 certified restoration teams.`
          : "When smoke invades your property, the damage goes beyond stains and odors—it impacts your health and safety. Our certified Florida restoration teams provide 24/7 smoke cleanup.",
        badge: "🌬️ Air Quality Experts"
      },
      services: [
        { icon: "fas fa-broom", title: "Soot & Residue Removal", description: "Remove acidic soot before it corrodes surfaces" },
        { icon: "fas fa-air-freshener", title: "Odor Elimination", description: "Advanced deodorization with ozone & hydroxyl machines" },
        { icon: "fas fa-couch", title: "Furniture & Fabric Restoration", description: "Upholstery, carpets & curtains saved from smoke absorption" },
        { icon: "fas fa-home", title: "Structural Cleaning", description: "Ceilings, walls & HVAC fully decontaminated" }
      ],
      faqs: [
        { q: "Can smoke damage be fully removed?", a: "Yes. With professional cleaning and deodorization, odors and particles can be eliminated." },
        { q: "How long does it take to clean smoke damage?", a: "Minor jobs: 1–2 days. Severe smoke with deep odors: up to a week." },
        { q: "Is smoke damage dangerous?", a: "Yes. Smoke contains toxic particles that may trigger allergies, asthma, and respiratory issues." }
      ]
    },

    // ===========================
    // MOLD REMEDIATION SUBSERVICES
    // ===========================
    "mold-inspection": {
      hero: {
        title: cityData 
          ? `Mold Inspection in ${cityData.nombre}, FL | Certified Testing`
          : "Find Mold Before It Finds You",
        description: cityData
          ? `Professional mold inspection in ${cityData.nombre}, ${cityData.region}. Certified inspectors use advanced detection methods to identify hidden mold and air quality issues.`
          : "Our certified inspectors uncover hidden mold, leaks, and air risks—so you can breathe safe and avoid costly damage.",
        badge: "🧪 Lab Certified"
      },
      services: [
        { icon: "fas fa-eye", title: "Visual Inspection", description: "Comprehensive visual examination to identify visible mold and moisture issues." },
        { icon: "fas fa-vial", title: "Testing & Sampling", description: "Air and surface samples are collected for laboratory analysis." },
        { icon: "fas fa-microscope", title: "Lab Analysis", description: "Professional laboratory testing identifies mold types and concentration levels." },
        { icon: "fas fa-file-alt", title: "Detailed Report", description: "You receive a comprehensive report with findings and recommendations." }
      ],
      faqs: [
        { q: "What's the difference between inspection and testing?", a: "Inspection = visual & moisture scan. Testing = lab-confirmed type & spore count." },
        { q: "How accurate are mold tests?", a: "Lab-certified results with 99% accuracy." },
        { q: "How long until I get results?", a: "Most reports delivered in 24–48 hours." }
      ]
    },

    "black-mold-removal": {
      hero: {
        title: cityData 
          ? `Black Mold Removal in ${cityData.nombre}, FL | Safe Remediation`
          : "Black Mold is Toxic—We Remove It Safely",
        description: cityData
          ? `Safe black mold removal in ${cityData.nombre}, ${cityData.region}. Certified teams eliminate dangerous black mold and protect your family's health with proven methods.`
          : "Our certified Florida teams eliminate dangerous black mold, clean the air, and protect your family's health with proven remediation methods.",
        badge: "☣️ Toxic Mold Specialists"
      },
      services: [
        { icon: "fas fa-search", title: "Inspection & Testing", description: "Detect mold spread and measure spore levels." },
        { icon: "fas fa-shield-alt", title: "Containment & Safety Setup", description: "Seal affected areas to prevent further spread." },
        { icon: "fas fa-wind", title: "Removal & Air Scrubbing", description: "HEPA filtration, safe disposal, and eco-friendly cleaning." },
        { icon: "fas fa-tint", title: "Moisture Control & Prevention", description: "Fix leaks, humidity, and future mold risks." }
      ],
      faqs: [
        { q: "How dangerous is black mold?", a: "Black mold can trigger respiratory issues, allergies, and health risks—especially for children, elderly, and those with asthma." },
        { q: "Can I remove black mold myself?", a: "Not safely. DIY cleaning often spreads spores further—professional removal is essential." },
        { q: "How long does black mold removal take?", a: "Small jobs: 1–2 days. Severe infestations: up to a week." }
      ]
    },

    // ===========================
    // STORM DAMAGE SUBSERVICES
    // ===========================
    "hurricane-damage": {
      hero: {
        title: cityData 
          ? `Hurricane Damage Restoration in ${cityData.nombre}, FL | Emergency Response`
          : "Hurricane Damage? We Restore Homes & Businesses Across Florida",
        description: cityData
          ? `Expert hurricane damage repair in ${cityData.nombre}, ${cityData.region}. Emergency response, roof repairs, water damage cleanup, and reconstruction. Available 24/7.`
          : "From roof leaks to major flooding, our hurricane restoration team provides emergency cleanup, debris removal, and full structural repairs.",
        badge: "🌪️ Hurricane Specialists"
      },
      services: [
        { icon: "fas fa-home", title: "Roof Leaks & Collapse Risks", description: "Wind and flying debris cause hidden roof damage." },
        { icon: "fas fa-tint", title: "Flooding & Water Intrusion", description: "Standing water weakens foundations & walls." },
        { icon: "fas fa-tree", title: "Fallen Trees & Debris", description: "Storm-force winds scatter debris across property." },
        { icon: "fas fa-bolt", title: "Power & Utility Hazards", description: "Downed lines and outages create safety risks." }
      ],
      faqs: [
        { q: "What does storm damage mean?", a: "Storm damage refers to harm caused by hurricanes, wind, hail, or flooding—often impacting roofs, siding, windows, and interiors." },
        { q: "How to fix storm damage?", a: "Fixing storm damage starts with securing the property—tarping roofs, boarding windows, and removing debris." },
        { q: "Does insurance cover hurricane damage in Florida?", a: "Yes—most homeowners have hurricane coverage. We assist with full documentation." }
      ]
    }
  };

  return subserviceContent[subserviceSlug] || null;
}