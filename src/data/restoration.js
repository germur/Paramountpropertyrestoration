// src/data/restoration.js

// -------------------------------
// Estructura por subservicio (opcional):
// {
//   slug: "unique-slug",
//   title: "Readable Title",
//   short: "One-liner",
//   seo: { title, description },
//   hero: { description, cta, bg, badge, tagline },
//   steps: [{ title, text, icon }, ...],
//   reasons: [{ title, text, icon, cta: { label, href } }, ...],
//   links: [{ href, label }, ...],
//   faqs: [{ q, a }, ...],
//   finalCta: { title, text, cta, href },
//   palette: { primary, primaryDark, accent },
//   images: { hero, gallery: [] }
// }
// -------------------------------

export const restorationGroups = [
  // ===========================
  // WATER DAMAGE
  // ===========================
  {
    slug: "water-damage",
    name: "Flood Damage Cleanup Florida | 24/7 Water Extraction & Drying",
    template: "water",
    description:
      "Certified flood damage cleanup in Florida. Emergency water removal, drying, mold prevention & structural stabilization. 24/7 response across Orlando, Miami & Tampa.",
    subservices: [
      {
        slug: "flood-damage",
        title: "Flood Damage Cleanup in Florida",
        short: "Cleanup & restoration after flooding",
        cta: {
          headline: "Don't Let Flood Damage Ruin Your Home",
          button: "Start Flood Extraction Now"
        },
        hero: {
          description:
            "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home’s structure, and restore safety. Immediate response across Orlando, Miami, Tampa, and statewide.",
          cta: "Start Flood Extraction Now →",
          bg: "/images/herowater2.jpg",
        },
        steps: [
          {
            title: "Inspection & Moisture Mapping",
            text: "Identify visible and hidden flood damage.",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            title: "Rapid Water Extraction",
            text: "Remove standing floodwater using high-capacity pumps.",
            icon: "fa-solid fa-faucet-drip",
          },
          {
            title: "Drying & Dehumidification",
            text: "Stabilize humidity with industrial air movers.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Antimicrobial Treatment",
            text: "Protect walls, flooring, and furniture against mold.",
            icon: "fa-solid fa-shield-virus",
          },
          {
            title: "Ongoing Monitoring",
            text: "Daily moisture checks until drying is complete.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Emergency",
            text: "Pumps and vacuums remove large volumes of water quickly.",
            icon: "fa-solid fa-water",
            cta: { label: "Request Removal", href: "/contact" },
          },
          {
            title: "Industrial Drying",
            text: "Air movers and dehumidifiers dry walls, floors, and cavities.",
            icon: "fa-solid fa-wind",
            cta: { label: "Schedule Drying Service", href: "/contact" },
          },
          {
            title: "Mold Prevention",
            text: "Antimicrobial treatments protect against bacteria and mold.",
            icon: "fa-solid fa-shield-virus",
            cta: { label: "Start Claim Assist", href: "/contact" },
          },
          {
            title: "End-to-End Repair",
            text: "From mitigation to rebuild.",
            icon: "fa-solid fa-house-circle-check",
            cta: { label: "Get a Free Estimate", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "How long does flood cleanup take?",
            a: "Most properties dry within 2–5 days depending on water levels and building materials. Continuous monitoring ensures safe humidity levels before restoration begins.",
          },
          {
            q: "Does insurance cover flood damage?",
            a: "Coverage varies—flooding from storms often requires separate flood insurance. Most policies cover sudden water events. We assist with documentation for your claim.",
          },
          {
            q: "Can a flooded home be saved?",
            a: "Yes. With rapid extraction and drying, most structures can be stabilized and restored. Delays increase risks of mold and structural loss.",
          },
          {
            q: "What should I do first after a flood?",
            a: "Stay safe, shut off electricity if needed, and call for emergency water removal. Avoid entering rooms with standing water.",
          },
          {
            q: "What happens if flood water isn’t removed quickly?",
            a: "Mold, structural damage, and electrical hazards escalate within days, turning small repairs into major reconstruction.",
          },
        ],
      },

      // WATER — LEAK REPAIR
      {
        slug: "leak-repair",
        title: "Leak Repair Services in Florida | Ceiling, Wall & Pipe Leaks",
        short: "Find & fix leaks quickly",
        cta: {
          headline: "Don't Let a Small Leak Turn Into a Disaster",
          button: "Fix My Leak Today"
        },
        hero: {
          description:
            "Fast leak detection and permanent repair to prevent hidden moisture damage.",
          cta: "Schedule Inspection",
          bg: "/images/water/leak-hero.jpg",
        },
        steps: [
          {
            title: "Detection",
            text: "Thermal and moisture meters to find the source.",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            title: "Containment",
            text: "Stop the leak and protect unaffected areas.",
            icon: "fa-solid fa-square-minus",
          },
          {
            title: "Targeted Drying",
            text: "Dry walls/ceilings to remove trapped moisture.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Sanitize",
            text: "Antimicrobial application to prevent mold.",
            icon: "fa-solid fa-spray-can-sparkles",
          },
          {
            title: "Repair & Monitor",
            text: "Fix the source and verify moisture reduction.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Non-invasive Tools",
            text: "Thermal imaging & pinless meters.",
            icon: "fa-solid fa-camera",
            cta: { label: "Book Detection", href: "/contact" },
          },
          {
            title: "Root-Cause Fix",
            text: "We repair the problem, not just symptoms.",
            icon: "fa-solid fa-screwdriver-wrench",
            cta: { label: "Request Repair", href: "/contact" },
          },
          {
            title: "Damage Prevention",
            text: "Avoid mold and structural issues.",
            icon: "fa-solid fa-shield-halved",
            cta: { label: "Prevent Damage", href: "/contact" },
          },
          {
            title: "Warranty",
            text: "Workmanship warranty on repairs.",
            icon: "fa-solid fa-badge-check",
            cta: { label: "See Warranty", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "How do I know if I have a hidden water leak?",
            a: "Signs include moldy odors, warped walls, and unexplained water bills. We use specialized tools to detect hidden leaks.",
          },
          {
            q: "Can a ceiling leak cause mold?",
            a: "Yes. Within 24–48 hours, mold may develop on damp ceilings. Fast drying and repairs are essential.",
          },
          {
            q: "Can leaking pipes be fixed without replacing everything?",
            a: "Often yes. We patch, seal, or replace sections of pipe depending on severity.",
          },
          {
            q: "How long does leak repair take?",
            a: "Small leaks may be fixed same-day; larger or hidden leaks may take 2–3 days including drying and restoration.",
          },
        ],
      },

      // WATER — BASEMENT FLOODING
      {
        slug: "basement-flooding",
        title: "Basement Flooding",
        short: "Pumping & drying basements",
        cta: {
          headline: "Don't Let a Flooded Basement Damage Your Foundation",
          button: "Protect Against Mold"
        },
        hero: {
          description:
            "Basement pump-out and structural drying to remove water quickly and safely.",
          cta: "Pump Out Basement",
          bg: "/images/water/basement-hero.jpg",
        },
        steps: [
          {
            title: "Safety & Assessment",
            text: "Check electrical/hazards and inspect water level.",
            icon: "fa-solid fa-triangle-exclamation",
          },
          {
            title: "Pump-Out",
            text: "High-capacity pumps evacuate water fast.",
            icon: "fa-solid fa-pump-soap",
          },
          {
            title: "Drying & Dehumidification",
            text: "Air movers & dehumidifiers stabilize humidity.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Sanitization",
            text: "Antimicrobial treatment to prevent mold/bacteria.",
            icon: "fa-solid fa-shield-virus",
          },
          {
            title: "Monitoring",
            text: "Daily moisture readings until dry standard.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Emergency Pump-Out",
            text: "Rapid removal reduces structural damage.",
            icon: "fa-solid fa-water",
            cta: { label: "Request Pump-Out", href: "/contact" },
          },
          {
            title: "Industrial Drying",
            text: "Equipment sized for basements & crawlspaces.",
            icon: "fa-solid fa-fan",
            cta: { label: "Start Drying", href: "/contact" },
          },
          {
            title: "Mold Prevention",
            text: "Treatments protect surfaces from growth.",
            icon: "fa-solid fa-shield-virus",
            cta: { label: "Prevent Mold", href: "/contact" },
          },
          {
            title: "Insurance Help",
            text: "Moisture logs & photos for your claim.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What causes basement flooding?",
            a: "Common causes include heavy rains, poor drainage, foundation cracks, burst pipes, or failed sump pumps.",
          },
          {
            q: "Can a flooded basement be saved?",
            a: "Yes. With fast pump-out and drying, most basements can be restored. Delays increase risks of mold and foundation damage.",
          },
          {
            q: "Do I need a sump pump installed?",
            a: "For flood-prone basements, a sump system with backup power is strongly recommended to prevent future flooding.",
          },
          {
            q: "How long does basement drying take?",
            a: "Typically 2–5 days depending on water volume and humidity levels. Continuous monitoring ensures safe results.",
          },
          {
            q: "Does insurance cover basement flooding?",
            a: "Coverage depends on the source—sudden leaks may be covered, but floodwater often requires separate flood insurance.",
          },
        ],
      },

      // WATER — CEILING WATER DAMAGE
      {
        slug: "ceiling-water-damage",
        title: "Ceiling Water Damage",
        short: "Ceiling stains & sagging repair",
        cta: {
          headline: "Don't Let a Small Leak Turn Into a Ceiling Collapse",
          button: "Request Emergency Help"
        },
        hero: {
          description:
            "Leak tracing, ceiling drying, and safe repair to prevent collapse and mold.",
          cta: "Fix My Ceiling",
          bg: "/images/water/ceiling-hero.jpg",
        },
        steps: [
          {
            title: "Trace the Source",
            text: "Find the leak path with thermal & moisture tools.",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            title: "Stabilize Area",
            text: "Contain, protect contents, and ensure safety.",
            icon: "fa-solid fa-helmet-safety",
          },
          {
            title: "Dry the Ceiling",
            text: "Ventilated & targeted drying prevents sagging.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Treat & Repair",
            text: "Antimicrobial + drywall/plaster restoration.",
            icon: "fa-solid fa-screwdriver-wrench",
          },
          {
            title: "Verify",
            text: "Moisture checks before repaint/finish.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Ceiling Leak Experts",
            text: "Quick isolation to avoid collapse.",
            icon: "fa-solid fa-house-water",
            cta: { label: "Get Help", href: "/contact" },
          },
          {
            title: "Targeted Drying",
            text: "Reduce demolition with precise drying.",
            icon: "fa-solid fa-fan",
            cta: { label: "Start Drying", href: "/contact" },
          },
          {
            title: "Sanitize & Seal",
            text: "Treat and refinish to pre-loss condition.",
            icon: "fa-solid fa-spray-can-sparkles",
            cta: { label: "Restore Finish", href: "/contact" },
          },
          {
            title: "Insurance Docs",
            text: "Photos, logs, estimates included.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "How do I know if ceiling water damage is serious?",
            a: "Look for sagging, discoloration, musty odors, or peeling paint. These signal hidden water issues.",
          },
          {
            q: "Can I just paint over ceiling stains?",
            a: "No. Without fixing the leak source, stains and mold will return.",
          },
          {
            q: "How long does it take to repair ceiling water damage?",
            a: "Small repairs: 1–2 days. Major restoration: up to a week.",
          },
          {
            q: "Can water-damaged ceilings collapse?",
            a: "Yes. Untreated damage weakens drywall & beams, raising collapse risk.",
          },
        ],
      },

      // WATER — EMERGENCY WATER REMOVAL
      {
        slug: "emergency-water-removal",
        title: "Emergency Water Removal",
        short: "24/7 extraction & drying",
        seo: {
          title: "24/7 Emergency Water Removal | Fast Response",
          description:
            "Immediate water extraction, drying, and dehumidification.",
        },
        hero: {
          badge: "24/7",
          cta: "Call Now — We’re On The Way",
          tagline: "Fast response within 60 minutes",
          description:
            "Emergency extraction and industrial drying to stop damage immediately.",
          bg: "/images/water/emergency-hero.jpg",
        },
        steps: [
          {
            title: "Rapid Dispatch",
            text: "Team on-site to assess and triage.",
            icon: "fa-solid fa-truck",
          },
          {
            title: "Immediate Extraction",
            text: "Portable or truck-mount extraction units.",
            icon: "fa-solid fa-water",
          },
          {
            title: "Industrial Drying",
            text: "Air movers & dehumidifiers stabilize humidity.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Sanitize",
            text: "Antimicrobial application as needed.",
            icon: "fa-solid fa-shield-virus",
          },
          {
            title: "Monitor & Report",
            text: "Daily readings, documentation for insurance.",
            icon: "fa-solid fa-clipboard-check",
          },
        ],
        reasons: [
          {
            title: "Immediate Extraction",
            text: "Stop secondary damage quickly.",
            icon: "fa-solid fa-bolt",
            cta: { label: "Call 24/7", href: "tel:+1-000-000-0000" },
          },
          {
            title: "Heavy-Duty Drying",
            text: "We size equipment for the loss.",
            icon: "fa-solid fa-fan",
            cta: { label: "Start Drying", href: "/contact" },
          },
          {
            title: "Insurance-Ready",
            text: "Logs, photos, and estimates included.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
          {
            title: "Full Service",
            text: "Mitigation through rebuild.",
            icon: "fa-solid fa-house-circle-check",
            cta: { label: "Free Estimate", href: "/contact" },
          },
        ],
        bullets: [
          "Immediate extraction & water removal",
          "Industrial dehumidifiers & air movers",
          "Moisture mapping & documentation",
          "Insurance-ready reports",
        ],
        palette: {
          primary: "#ff9800",
          primaryDark: "#ef6c00",
        },
        faqs: [
          {
            q: "Can water be removed immediately after a flood?",
            a: "Yes. With industrial pumps, most water is extracted within hours. Acting quickly prevents mold and structural damage.",
          },
          {
            q: "What happens if water isn't removed right away?",
            a: "It seeps into drywall, flooring, insulation—leading to mold, odor, and weakened structures.",
          },
          {
            q: "Is emergency water removal different from drying?",
            a: "Yes. Removal extracts large volumes fast; drying stabilizes hidden moisture after.",
          },
          {
            q: "Do you handle commercial water emergencies?",
            a: "Absolutely. We service offices, warehouses, and retail spaces with minimal downtime.",
          },
        ],
        images: {
          hero: "/images/water/emergency-hero.jpg",
          gallery: ["/images/water/w1.jpg", "/images/water/w2.jpg"],
        },
        finalCta: {
          title: "Need emergency extraction?",
          text: "Call our 24/7 team for immediate help.",
          cta: "Call 24/7",
          href: "tel:+1-000-000-0000",
        },
      },
    ],
  },

  // ===========================
  // FIRE DAMAGE
  // ===========================
  {
    slug: "fire-damage",
    name: "Fire Damage",
    template: "fire",
    description: "Fire & smoke cleanup, deodorization and repair.",
    subservices: [
      {
        slug: "smoke-damage",
        title: "Smoke Damage",
        short: "Soot removal & odor control",
        cta: {
          headline: "Don't Let Smoke Linger in Your Home or Business",
          button: "Get Smoke Damage Help Today"
        },
        hero: {
          description:
            "HEPA vacuuming, dry/wet cleaning, and odor neutralization to restore air quality.",
          cta: "Deodorize My Home",
          bg: "/images/fire/smoke-hero.jpg",
        },
        steps: [
          {
            title: "Assessment",
            text: "Identify smoke spread and surface types.",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            title: "Soot Removal",
            text: "HEPA vacuuming and dry/wet cleaning.",
            icon: "fa-solid fa-broom",
          },
          {
            title: "Odor Neutralization",
            text: "Deodorants, hydroxyl/ozone as needed.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "HVAC Cleaning",
            text: "Filters and ducts addressed to prevent re-soiling.",
            icon: "fa-solid fa-fan",
          },
          {
            title: "Final Verification",
            text: "Air quality & odor checks.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Smoke Specialists",
            text: "Proper media and chemistry per surface.",
            icon: "fa-solid fa-fire-extinguisher",
            cta: { label: "Start Cleanup", href: "/contact" },
          },
          {
            title: "Advanced Odor Control",
            text: "Neutralization beyond masking.",
            icon: "fa-solid fa-wind",
            cta: { label: "Remove Odors", href: "/contact" },
          },
          {
            title: "HVAC & Contents",
            text: "Whole-home approach to prevent recontamination.",
            icon: "fa-solid fa-boxes-stacked",
            cta: { label: "Restore Contents", href: "/contact" },
          },
          {
            title: "Documentation",
            text: "Before/after photos for claims.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "Can smoke damage be fully removed?",
            a: "Yes. With professional cleaning and deodorization, odors and particles can be eliminated.",
          },
          {
            q: "How long does it take to clean smoke damage?",
            a: "Minor jobs: 1–2 days. Severe smoke with deep odors: up to a week.",
          },
          {
            q: "Is smoke damage dangerous?",
            a: "Yes. Smoke contains toxic particles that may trigger allergies, asthma, and respiratory issues.",
          },
          {
            q: "Does insurance cover smoke damage?",
            a: "Most Florida homeowners' policies cover it. We provide full documentation for claims.",
          },
        ],
      },
      {
        slug: "soot-cleanup",
        title: "Soot Cleanup",
        short: "Deep cleaning of soot residues",
        cta: {
          headline: "Don't let soot damage linger—restore your home or business today",
          button: "Request Soot Cleanup Now"
        },
        hero: {
          description:
            "Specialized cleaning for soot on walls, ceilings, contents, and HVAC.",
          cta: "Start Soot Cleanup",
          bg: "/images/fire/soot-hero.jpg",
        },
        steps: [
          {
            title: "Surface Testing",
            text: "Determine wet/dry soot and best chemistries.",
            icon: "fa-solid fa-flask",
          },
          {
            title: "Dry Cleaning",
            text: "HEPA vac + chem esponja para no manchar.",
            icon: "fa-solid fa-broom",
          },
          {
            title: "Wet Cleaning",
            text: "Detergentes y neutralizantes específicos.",
            icon: "fa-solid fa-soap",
          },
          {
            title: "Odor Control",
            text: "Filtración/neutralización complementaria.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "QA & Photos",
            text: "Verificación y documentación.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Correct Media",
            text: "Evitamos ‘smear’ con técnicas adecuadas.",
            icon: "fa-solid fa-brush",
            cta: { label: "Deep Clean", href: "/contact" },
          },
          {
            title: "HEPA Filtration",
            text: "Control de partículas durante el trabajo.",
            icon: "fa-solid fa-fan",
            cta: { label: "Air Quality", href: "/contact" },
          },
          {
            title: "Sensitive Surfaces",
            text: "Cuidado con pinturas y acabados.",
            icon: "fa-solid fa-swatchbook",
            cta: { label: "Protect Finishes", href: "/contact" },
          },
          {
            title: "Insurance Docs",
            text: "Reportes para reclamaciones.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is soot cleanup?",
            a: "It's the removal of smoke residue after a fire, including cleaning, deodorizing, and restoring surfaces.",
          },
          {
            q: "Can I clean soot myself?",
            a: "Small spots can be wiped, but DIY often spreads residue. Professionals ensure full and safe removal.",
          },
          {
            q: "Is soot dangerous?",
            a: "Yes. Soot contains toxic particles that irritate lungs and corrode surfaces if untreated.",
          },
          {
            q: "How fast should soot be cleaned?",
            a: "Immediately. Delays cause permanent staining and higher repair costs.",
          },
        ],
      },
      {
        slug: "fire-damage-repair",
        title: "Fire Damage Repair",
        short: "Structural repair & rebuild",
        cta: {
          headline: "Don't let soot, smoke, and fire debris linger—restore your property today",
          button: "Request Fire Cleanup Now"
        },
        hero: {
          description:
            "From shoring and demolition to full rebuild and final finishes.",
          cta: "Plan My Rebuild",
          bg: "/images/fire/repair-hero.jpg",
        },
        steps: [
          {
            title: "Safety & Scope",
            text: "Apuntalamiento, evaluación estructural y permisos.",
            icon: "fa-solid fa-helmet-safety",
          },
          {
            title: "Demolition & Debris",
            text: "Retiro seguro y control de polvo.",
            icon: "fa-solid fa-dumpster",
          },
          {
            title: "Odor/Residue Control",
            text: "Tratamientos antes de reconstruir.",
            icon: "fa-solid fa-wand-magic-sparkles",
          },
          {
            title: "Rebuild",
            text: "Estructura, acabados y MEP coordinados.",
            icon: "fa-solid fa-hammer",
          },
          {
            title: "Final QA",
            text: "Inspección y cierre con el cliente.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "One-Stop",
            text: "Desde mitigación hasta rebuild.",
            icon: "fa-solid fa-house-circle-check",
            cta: { label: "Start Plan", href: "/contact" },
          },
          {
            title: "Permit Handling",
            text: "Coordinamos con las autoridades locales.",
            icon: "fa-solid fa-file-signature",
            cta: { label: "We Handle Permits", href: "/contact" },
          },
          {
            title: "Pro Craft",
            text: "Calidad en estructura y acabados.",
            icon: "fa-solid fa-ruler-combined",
            cta: { label: "Quality Build", href: "/contact" },
          },
          {
            title: "Transparent Docs",
            text: "Cronograma, avances y fotos.",
            icon: "fa-solid fa-clipboard-check",
            cta: { label: "See Timeline", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is fire cleanup?",
            a: "It's the professional removal of debris, soot, and smoke after a fire—making your property safe for restoration.",
          },
          {
            q: "Can I do fire cleanup myself?",
            a: "No. Improper cleaning spreads residue deeper. Certified fire cleanup teams use HEPA, ozone & safe chemicals.",
          },
          {
            q: "How long does fire cleanup take in Florida?",
            a: "1–3 days for minor fire cleanup; up to a week for heavy soot and debris.",
          },
          {
            q: "Does insurance cover fire cleanup?",
            a: "Most homeowners' insurance policies cover fire cleanup services. We help with full documentation.",
          },
        ],
      },
      {
        slug: "emergency-fire-response",
        title: "Emergency Fire Response",
        short: "Board-up & immediate response",
        cta: {
          headline: "Don't wait—every minute after a fire counts",
          button: "Request Emergency Fire Response Now"
        },
        hero: {
          description:
            "Emergency board-up, roof tarping, and site stabilization after a fire.",
          cta: "Board Up Now",
          bg: "/images/fire/emergency-hero.jpg",
        },
        steps: [
          {
            title: "Dispatch",
            text: "Llegada rápida para asegurar la escena.",
            icon: "fa-solid fa-truck",
          },
          {
            title: "Board-Up",
            text: "Cierre de aberturas y puntos vulnerables.",
            icon: "fa-solid fa-warehouse",
          },
          {
            title: "Roof Tarping",
            text: "Tarp para evitar intrusión de clima/agua.",
            icon: "fa-solid fa-umbrella",
          },
          {
            title: "Stabilize",
            text: "Apuntalamiento y control de riesgos.",
            icon: "fa-solid fa-helmet-safety",
          },
          {
            title: "Plan Next Steps",
            text: "Mitigación y limpieza inicial.",
            icon: "fa-solid fa-clipboard-list",
          },
        ],
        reasons: [
          {
            title: "24/7 Response",
            text: "Aseguramos tu propiedad rápido.",
            icon: "fa-solid fa-clock",
            cta: { label: "Call 24/7", href: "/contact" },
          },
          {
            title: "Board-Up Pros",
            text: "Equipo y materiales adecuados.",
            icon: "fa-solid fa-warehouse",
            cta: { label: "Secure Now", href: "/contact" },
          },
          {
            title: "Roof Tarping",
            text: "Previene daños por lluvia.",
            icon: "fa-solid fa-umbrella",
            cta: { label: "Tarp Roof", href: "/contact" },
          },
          {
            title: "Insurance Docs",
            text: "Fotos y reporte inicial.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What should I do immediately after a fire?",
            a: "Call 911 if active, then contact our emergency fire response team to secure and restore your property.",
          },
          {
            q: "How fast can your fire response team arrive?",
            a: "We're available 24/7 and usually arrive within hours of your call.",
          },
          {
            q: "Why is emergency fire response critical?",
            a: "Because fire, smoke, soot, and water spread damage quickly. The sooner we act, the less permanent damage occurs.",
          },
          {
            q: "Does insurance cover emergency fire response in Florida?",
            a: "Yes. Most policies cover it as part of restoration. We coordinate directly with insurers.",
          },
        ],
      },
    ],
  },

  // ===========================
  // MOLD REMEDIATION
  // ===========================
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    template: "mold",
    description: "Certified mold inspection, removal and prevention.",
    subservices: [
      {
        slug: "mold-inspection",
        title: "Mold Inspection",
        short: "Moisture & air sampling",
        cta: {
          headline: "Don't let hidden mold grow into a bigger problem",
          button: "Schedule Your Certified Inspection Today"
        },
        hero: {
          description:
            "Certified inspection with moisture mapping and air sampling when needed.",
          cta: "Book Inspection",
          bg: "/images/mold/inspection-hero.jpg",
        },
        steps: [
          {
            title: "Visual & Mapping",
            text: "Inspección y mapeo de humedad.",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            title: "Sampling (If Needed)",
            text: "Muestreo de aire/superficie para laboratorio.",
            icon: "fa-solid fa-vial",
          },
          {
            title: "Source Analysis",
            text: "Identificar causas de humedad.",
            icon: "fa-solid fa-droplet",
          },
          {
            title: "Plan & Estimate",
            text: "Estrategia y criterios de clearance.",
            icon: "fa-solid fa-clipboard-list",
          },
          {
            title: "Report",
            text: "Informe con hallazgos y recomendaciones.",
            icon: "fa-solid fa-file-pdf",
          },
        ],
        reasons: [
          {
            title: "Certified Inspectors",
            text: "Metodologías y equipos adecuados.",
            icon: "fa-solid fa-award",
            cta: { label: "Schedule Now", href: "/contact" },
          },
          {
            title: "Lab Reports",
            text: "Resultados claros y accionables.",
            icon: "fa-solid fa-flask",
            cta: { label: "View Options", href: "/contact" },
          },
          {
            title: "Root Cause",
            text: "Foco en eliminar la fuente.",
            icon: "fa-solid fa-droplet",
            cta: { label: "Fix Source", href: "/contact" },
          },
          {
            title: "Clear Guidance",
            text: "Plan de acción paso a paso.",
            icon: "fa-solid fa-list-check",
            cta: { label: "Get Plan", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "Do I really need a mold inspection?",
            a: "Yes. Early detection prevents hidden structural damage and health risks.",
          },
          {
            q: "How long does a mold inspection take?",
            a: "Most homes: 1–2 hours, with a full report the same day.",
          },
          {
            q: "Does inspection include testing?",
            a: "Absolutely. We test air and surfaces to identify mold type and levels.",
          },
        ],
      },
      {
        slug: "black-mold-removal",
        title: "Black Mold Removal",
        short: "Safe containment & removal",
        cta: {
          headline: "Protect your family. Breathe safe again",
          button: "Request Black Mold Removal Now"
        },
        hero: {
          description:
            "Containment, negative air, HEPA filtration, and safe material removal.",
          cta: "Remove Mold Safely",
          bg: "/images/mold/black-hero.jpg",
        },
        steps: [
          {
            title: "Containment",
            text: "Barreras y presión negativa.",
            icon: "fa-solid fa-vector-square",
          },
          {
            title: "HEPA & Filtration",
            text: "Filtrado de aire y limpieza de partículas.",
            icon: "fa-solid fa-fan",
          },
          {
            title: "Removal",
            text: "Demolición controlada y descarte seguro.",
            icon: "fa-solid fa-trash-can",
          },
          {
            title: "Sanitize",
            text: "Biocidas/antimicrobianos según guía.",
            icon: "fa-solid fa-spray-can-sparkles",
          },
          {
            title: "Clearance",
            text: "Pruebas y verificación final.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Safety First",
            text: "PPE, contención y protocolos adecuados.",
            icon: "fa-solid fa-shield-heart",
            cta: { label: "Start Safely", href: "/contact" },
          },
          {
            title: "HEPA Negative Air",
            text: "Control de esporas y partículas.",
            icon: "fa-solid fa-fan",
            cta: { label: "Clean Air", href: "/contact" },
          },
          {
            title: "Source Control",
            text: "Corregimos humedad para evitar recurrencia.",
            icon: "fa-solid fa-droplet",
            cta: { label: "Fix Moisture", href: "/contact" },
          },
          {
            title: "Clearance Ready",
            text: "Preparados para auditorías y tests.",
            icon: "fa-solid fa-flask",
            cta: { label: "Pass Clearance", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "Is black mold dangerous?",
            a: "Yes. It produces toxic spores that can cause serious respiratory issues.",
          },
          {
            q: "Can I remove black mold myself?",
            a: "Not safely. DIY cleaning often spreads spores further—professional removal is essential.",
          },
          {
            q: "How long does black mold removal take?",
            a: "Small jobs: 1–2 days. Severe infestations: up to a week.",
          },
          {
            q: "Does insurance cover black mold removal?",
            a: "Often yes, if caused by a covered water damage event.",
          },
        ],
      },
      {
        slug: "mold-prevention",
        title: "Mold Prevention",
        short: "Treatments & humidity control",
        cta: {
          headline: "Keep mold out of your home—before it becomes a problem",
          button: "Schedule Mold Prevention Service Today"
        },
        hero: {
          description:
            "Moisture source control, ventilation upgrades, and antimicrobial treatments.",
          cta: "Prevent Mold",
          bg: "/images/mold/prevention-hero.jpg",
        },
        steps: [
          {
            title: "Assess Humidity",
            text: "Inspección de fuentes y hábito de ventilación.",
            icon: "fa-solid fa-droplet",
          },
          {
            title: "Ventilation Upgrades",
            text: "Mejoras en flujo/renovación de aire.",
            icon: "fa-solid fa-fan",
          },
          {
            title: "Treat Surfaces",
            text: "Productos preventivos en áreas críticas.",
            icon: "fa-solid fa-spray-can-sparkles",
          },
          {
            title: "Dehumidification",
            text: "Control de humedad relativa.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Monitoring",
            text: "Seguimiento con medidores/IoT si aplica.",
            icon: "fa-solid fa-gauge",
          },
        ],
        reasons: [
          {
            title: "Proactive Plan",
            text: "Prevenir siempre cuesta menos que remediar.",
            icon: "fa-solid fa-shield-halved",
            cta: { label: "Get Plan", href: "/contact" },
          },
          {
            title: "Targeted Treatments",
            text: "Foco en zonas con mayor riesgo.",
            icon: "fa-solid fa-bullseye",
            cta: { label: "Protect Areas", href: "/contact" },
          },
          {
            title: "Ventilation",
            text: "Recomendaciones de mejora reales.",
            icon: "fa-solid fa-fan",
            cta: { label: "Improve Venting", href: "/contact" },
          },
          {
            title: "Monitoring",
            text: "Mantén a raya la humedad.",
            icon: "fa-solid fa-chart-line",
            cta: { label: "Start Monitoring", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "How can I prevent mold in Florida homes?",
            a: "By controlling humidity, fixing leaks, and applying preventive coatings.",
          },
          {
            q: "Does mold prevention really work?",
            a: "Yes. Professional prevention reduces risk of infestation by controlling conditions mold needs.",
          },
          {
            q: "What's the difference between mold prevention and mold removal?",
            a: "Prevention stops growth before it starts, while removal handles active infestations.",
          },
          {
            q: "Is mold prevention covered by insurance?",
            a: "Usually no—insurance covers damage, not prevention. But prevention lowers long-term costs.",
          },
        ],
      },
      {
        slug: "mold-testing",
        title: "Mold Testing",
        short: "Lab reports & clearances",
        cta: {
          headline: "Know What's in Your Air—Protect Your Health & Property",
          button: "Book Certified Mold Testing Now"
        },
        hero: {
          description:
            "Pre/post remediation testing with lab reports and clearance criteria.",
          cta: "Schedule Testing",
          bg: "/images/mold/testing-hero.jpg",
        },
        steps: [
          {
            title: "Define Scope",
            text: "Áreas, tipos de muestra, criterios.",
            icon: "fa-solid fa-clipboard-list",
          },
          {
            title: "Air/Surface Samples",
            text: "Tomas conforme a estándares.",
            icon: "fa-solid fa-vial",
          },
          {
            title: "Lab Analysis",
            text: "Resultados cuantitativos/cualitativos.",
            icon: "fa-solid fa-flask",
          },
          {
            title: "Compare & Interpret",
            text: "Con baseline/criterios de clearance.",
            icon: "fa-solid fa-scale-balanced",
          },
          {
            title: "Report & Next Steps",
            text: "Recomendaciones finales.",
            icon: "fa-solid fa-file-pdf",
          },
        ],
        reasons: [
          {
            title: "Independent Lab",
            text: "Resultados confiables y trazables.",
            icon: "fa-solid fa-flask",
            cta: { label: "Book Test", href: "/contact" },
          },
          {
            title: "Clear Criteria",
            text: "Interpretación fácil de entender.",
            icon: "fa-solid fa-list-check",
            cta: { label: "See Criteria", href: "/contact" },
          },
          {
            title: "Fast Turnaround",
            text: "Resultados en 24–72 h típ.",
            icon: "fa-solid fa-bolt",
            cta: { label: "Get Results", href: "/contact" },
          },
          {
            title: "Actionable",
            text: "Siguientes pasos claros si hay hallazgos.",
            icon: "fa-solid fa-clipboard-check",
            cta: { label: "Next Steps", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What's the difference between inspection and testing?",
            a: "Inspection = visual & moisture scan. Testing = lab-confirmed type & spore count.",
          },
          {
            q: "How accurate are mold tests?",
            a: "Lab-certified results with 99% accuracy.",
          },
          {
            q: "Is mold testing required before removal?",
            a: "Yes—testing confirms the strain & guides safe remediation.",
          },
          {
            q: "How long until I get results?",
            a: "Most reports delivered in 24–48 hours.",
          },
        ],
      },
    ],
  },

  // ===========================
  // STORM DAMAGE
  // ===========================
  {
    slug: "storm-damage",
    name: "Storm Damage",
    template: "storm",
    description: "Wind, hail and hurricane damage repair.",
    subservices: [
      {
        slug: "hurricane-damage",
        title: "Hurricane Damage",
        short: "Emergency tarping & repair",
        cta: {
          headline: "Don't Wait—Protect Your Home After the Hurricane",
          button: "Request Emergency Hurricane Help"
        },
        hero: {
          description:
            "Emergency tarping, temporary power, and structural stabilization.",
          cta: "Secure My Property",
          bg: "/images/storm/hurricane-hero.jpg",
        },
        steps: [
          {
            title: "Site Safety",
            text: "Evaluación de riesgos y corte de servicios si aplica.",
            icon: "fa-solid fa-triangle-exclamation",
          },
          {
            title: "Temporary Power/Water",
            text: "Medidas temporales para operar seguro.",
            icon: "fa-solid fa-plug",
          },
          {
            title: "Tarp & Seal",
            text: "Tarping de techos y sellos en aperturas.",
            icon: "fa-solid fa-umbrella",
          },
          {
            title: "Debris Removal",
            text: "Retiro de árboles/escombros.",
            icon: "fa-solid fa-truck",
          },
          {
            title: "Stabilize & Plan",
            text: "Apuntalamiento y plan de reparación.",
            icon: "fa-solid fa-helmet-safety",
          },
        ],
        reasons: [
          {
            title: "Rapid Tarping",
            text: "Evita intrusión de agua.",
            icon: "fa-solid fa-umbrella",
            cta: { label: "Tarp Now", href: "/contact" },
          },
          {
            title: "Debris Teams",
            text: "Retiro seguro y coordinado.",
            icon: "fa-solid fa-truck",
            cta: { label: "Clear Debris", href: "/contact" },
          },
          {
            title: "Stabilization",
            text: "Estructura segura antes de reparar.",
            icon: "fa-solid fa-helmet-safety",
            cta: { label: "Stabilize", href: "/contact" },
          },
          {
            title: "Insurance Help",
            text: "Documentación completa.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is hurricane damage restoration?",
            a: "It's the process of securing, cleaning, drying, and repairing properties after hurricanes.",
          },
          {
            q: "How long does hurricane restoration take?",
            a: "Minor repairs may take days; major structural rebuilds can take weeks.",
          },
          {
            q: "Does insurance cover hurricane damage in Florida?",
            a: "Yes—most homeowners have hurricane coverage. We assist with full documentation.",
          },
          {
            q: "Can you remove fallen trees after a hurricane?",
            a: "Yes. Our crews safely clear trees and storm debris from your property.",
          },
        ],
      },
      {
        slug: "wind-damage",
        title: "Wind Damage",
        short: "Siding, roofing & windows",
        cta: {
          headline: "Restore Your Home After Wind Damage—Act Fast",
          button: "Get Emergency Wind Repair"
        },
        hero: {
          description:
            "Repair of roofing, siding, and windows damaged by strong winds.",
          cta: "Fix Wind Damage",
          bg: "/images/storm/wind-hero.jpg",
        },
        steps: [
          {
            title: "Inspection",
            text: "Techos, siding y ventanas.",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            title: "Temporary Protection",
            text: "Sellos, parches y cubiertas.",
            icon: "fa-solid fa-shield-halved",
          },
          {
            title: "Component Repair",
            text: "Tejados, fascias y cristales.",
            icon: "fa-solid fa-screwdriver-wrench",
          },
          {
            title: "Weatherproofing",
            text: "Sellado y pruebas de estanqueidad.",
            icon: "fa-solid fa-cloud-rain",
          },
          {
            title: "Final QA",
            text: "Verificación de seguridad y acabados.",
            icon: "fa-solid fa-circle-check",
          },
        ],
        reasons: [
          {
            title: "Roof Pros",
            text: "Reparación/replace de tejas y membranas.",
            icon: "fa-solid fa-house-chimney",
            cta: { label: "Roof Help", href: "/contact" },
          },
          {
            title: "Siding & Windows",
            text: "Cambio/ajuste con acabados correctos.",
            icon: "fa-solid fa-border-all",
            cta: { label: "Fix Exteriors", href: "/contact" },
          },
          {
            title: "Seal & Protect",
            text: "Evita filtraciones posteriores.",
            icon: "fa-solid fa-shield",
            cta: { label: "Weatherproof", href: "/contact" },
          },
          {
            title: "Documentation",
            text: "Fotos y reporte para seguros.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is wind damage restoration?",
            a: "It's the process of repairing roofs, siding, windows, and interiors after wind-related destruction.",
          },
          {
            q: "How do you know if your roof has wind damage?",
            a: "Look for missing shingles, leaks, or visible debris impacts.",
          },
          {
            q: "Does insurance cover wind damage in Florida?",
            a: "Yes—most policies include windstorm coverage. We assist with claim documentation.",
          },
          {
            q: "Can you repair broken windows after wind damage?",
            a: "Absolutely—we provide emergency board-up and window replacement.",
          },
        ],
      },
      {
        slug: "storm-debris-removal",
        title: "Storm Debris Removal",
        short: "Clean-up & hauling",
        cta: {
          headline: "Clear your property from storm debris safely and fast",
          button: "Schedule Debris Cleanup Today"
        },
        hero: {
          description:
            "Safe debris removal and haul-away to restore access and safety.",
          cta: "Clear Debris",
          bg: "/images/storm/debris-hero.jpg",
        },
        steps: [
          {
            title: "Assessment & Safety",
            text: "Riesgos, rutas y accesos.",
            icon: "fa-solid fa-triangle-exclamation",
          },
          {
            title: "Segmentation",
            text: "Clasificación de material/volumen.",
            icon: "fa-solid fa-diagram-project",
          },
          {
            title: "Removal",
            text: "Carga y retiro con equipo adecuado.",
            icon: "fa-solid fa-truck",
          },
          {
            title: "Disposal",
            text: "Gestión y disposición autorizada.",
            icon: "fa-solid fa-recycle",
          },
          {
            title: "Final Sweep",
            text: "Revisión de accesos y limpieza.",
            icon: "fa-solid fa-broom",
          },
        ],
        reasons: [
          {
            title: "Heavy Equipment",
            text: "Camiones y herramientas para cargas.",
            icon: "fa-solid fa-truck-ramp-box",
            cta: { label: "Book Removal", href: "/contact" },
          },
          {
            title: "Safe Handling",
            text: "Cuidado con riesgos y servicios.",
            icon: "fa-solid fa-helmet-safety",
            cta: { label: "Safety First", href: "/contact" },
          },
          {
            title: "Sorted & Compliant",
            text: "Retiro conforme a normativas.",
            icon: "fa-solid fa-scale-balanced",
            cta: { label: "Responsible Disposal", href: "/contact" },
          },
          {
            title: "Fast Access",
            text: "Recupera uso y movilidad rápido.",
            icon: "fa-solid fa-road",
            cta: { label: "Restore Access", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is storm debris removal?",
            a: "It's the process of clearing and safely disposing of trees, branches, and construction debris left after a storm.",
          },
          {
            q: "Can you remove large fallen trees?",
            a: "Yes. Our crews use heavy equipment to cut and haul away even the largest trees.",
          },
          {
            q: "Do you also haul away construction debris after storms?",
            a: "Absolutely. We clear siding, roofing, drywall, and other structural debris.",
          },
          {
            q: "Is storm debris removal covered by insurance?",
            a: "In most cases, yes. We document everything for smooth claim approval.",
          },
        ],
      },
      {
        slug: "emergency-storm-repair",
        title: "Emergency Storm Repair",
        short: "Rapid stabilization",
        cta: {
          headline: "Don't Wait – Restore Your Home After the Storm",
          button: "Get Emergency Storm Repair Now"
        },
        hero: {
          description:
            "Board-up, temporary repairs, and water intrusion control after storms.",
          cta: "Start Emergency Repair",
          bg: "/images/storm/emergency-hero.jpg",
        },
        steps: [
          {
            title: "Rapid Response",
            text: "Asegurar sitio y evaluar daños.",
            icon: "fa-solid fa-truck",
          },
          {
            title: "Temporary Repairs",
            text: "Tarp, sellos, apuntalamiento.",
            icon: "fa-solid fa-screwdriver-wrench",
          },
          {
            title: "Water Control",
            text: "Bombeo/extracción si hay intrusión.",
            icon: "fa-solid fa-water",
          },
          {
            title: "Stabilize",
            text: "Medidas para evitar daños mayores.",
            icon: "fa-solid fa-helmet-safety",
          },
          {
            title: "Plan & Transition",
            text: "Handoff a reparación permanente.",
            icon: "fa-solid fa-clipboard-check",
          },
        ],
        reasons: [
          {
            title: "24/7 Teams",
            text: "Disponibles en eventos severos.",
            icon: "fa-solid fa-clock",
            cta: { label: "Call Now", href: "/contact" },
          },
          {
            title: "All-In-One",
            text: "De emergencia a reparación definitiva.",
            icon: "fa-solid fa-house-circle-check",
            cta: { label: "Full Service", href: "/contact" },
          },
          {
            title: "Moisture Control",
            text: "Evita moho y daños ocultos.",
            icon: "fa-solid fa-droplet",
            cta: { label: "Control Moisture", href: "/contact" },
          },
          {
            title: "Insurance Docs",
            text: "Soporte para tu reclamación.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is emergency storm repair?",
            a: "It's immediate action after severe storm damage to secure, stabilize, and begin property restoration.",
          },
          {
            q: "How fast can storm repair teams respond?",
            a: "Our teams mobilize within hours, available 24/7 across Florida.",
          },
          {
            q: "Does insurance cover emergency storm repairs?",
            a: "Yes, most policies cover emergency tarping, water removal, and repairs after a storm.",
          },
          {
            q: "What should I do while waiting for emergency storm repair?",
            a: "Stay safe, avoid hazards like live wires, and document damages for your insurance claim.",
          },
        ],
      },
    ],
  },

  // ===========================
  // MITIGATION SERVICES
  // ===========================
  {
    slug: "mitigation-services",
    name: "Mitigation Services",
    template: "mitigation",
    description: "Immediate actions to reduce loss & prevent further damage.",
    subservices: [
      {
        slug: "water-mitigation",
        title: "Water Mitigation",
        short: "Extraction, drying, dehumidification",
        cta: {
          headline: "Don't wait for water to cause permanent damage",
          button: "Protect Your Property with Professional Water Mitigation Today"
        },
        hero: {
          description:
            "Stop source, extract water, and dry structures to prevent secondary damage.",
          cta: "Start Mitigation",
          bg: "/images/mitigation/water-hero.jpg",
        },
        steps: [
          {
            title: "Source Control",
            text: "Detener fuga/ingreso de agua.",
            icon: "fa-solid fa-droplet-slash",
          },
          {
            title: "Extraction",
            text: "Quitar el volumen de agua rápidamente.",
            icon: "fa-solid fa-water",
          },
          {
            title: "Dry & Dehumidify",
            text: "Estabilizar humedad y materiales.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Sanitize",
            text: "Tratamientos según categoría de agua.",
            icon: "fa-solid fa-spray-can-sparkles",
          },
          {
            title: "Monitor",
            text: "Lecturas diarias hasta estándar seco.",
            icon: "fa-solid fa-gauge",
          },
        ],
        reasons: [
          {
            title: "Fast Action",
            text: "Cada hora cuenta para evitar moho.",
            icon: "fa-solid fa-bolt",
            cta: { label: "Act Now", href: "/contact" },
          },
          {
            title: "Right Equipment",
            text: "Dimensionado según tu pérdida.",
            icon: "fa-solid fa-fan",
            cta: { label: "Start Drying", href: "/contact" },
          },
          {
            title: "Data-Driven",
            text: "Lecturas y reportes claros.",
            icon: "fa-solid fa-clipboard-check",
            cta: { label: "See Reports", href: "/contact" },
          },
          {
            title: "Repair Ready",
            text: "Transición limpia a reconstrucción.",
            icon: "fa-solid fa-house-circle-check",
            cta: { label: "Get Estimate", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is water damage mitigation vs restoration?",
            a: "Mitigation = stop further damage (extraction, drying, stabilization). Restoration = repairs & rebuild. Both are essential.",
          },
          {
            q: "Can I do water mitigation myself?",
            a: "Minor spills = yes. Floods, roof leaks, or burst pipes = need industrial drying to avoid mold & structural weakening.",
          },
          {
            q: "How long does water mitigation take?",
            a: "Usually 1–3 days, depending on severity. Large floods may require longer with daily monitoring.",
          },
          {
            q: "Does insurance cover water mitigation?",
            a: "Yes—most policies cover mitigation since it reduces total claim costs. We provide full documentation for insurers.",
          },
        ],
      },
      {
        slug: "fire-mitigation",
        title: "Fire Mitigation",
        short: "Board-up, shoring, odor control",
        cta: {
          headline: "Secure your property after a fire—don't wait",
          button: "Request 24/7 Fire Mitigation Services Across Florida"
        },
        hero: {
          description:
            "Immediate board-up, shoring, and smoke odor control after a fire.",
          cta: "Stabilize Now",
          bg: "/images/mitigation/fire-hero.jpg",
        },
        steps: [
          {
            title: "Secure & Board-Up",
            text: "Asegurar perímetro y openings.",
            icon: "fa-solid fa-warehouse",
          },
          {
            title: "Shoring",
            text: "Apuntalamientos temporales.",
            icon: "fa-solid fa-crutch",
          },
          {
            title: "Soot/Smoke Control",
            text: "Filtración y control de olores.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Selective Demo",
            text: "Remoción de materiales comprometidos.",
            icon: "fa-solid fa-hammer",
          },
          {
            title: "Plan Next Steps",
            text: "Transición a limpieza/reparación.",
            icon: "fa-solid fa-clipboard-list",
          },
        ],
        reasons: [
          {
            title: "Rapid Stabilization",
            text: "Minimiza riesgos y costos.",
            icon: "fa-solid fa-clock",
            cta: { label: "Stabilize", href: "/contact" },
          },
          {
            title: "Odor Control",
            text: "Tecnologías para aire y superficies.",
            icon: "fa-solid fa-fan",
            cta: { label: "Control Odor", href: "/contact" },
          },
          {
            title: "Structural Safety",
            text: "Shoring y evaluación inicial.",
            icon: "fa-solid fa-helmet-safety",
            cta: { label: "Ensure Safety", href: "/contact" },
          },
          {
            title: "Insurance Docs",
            text: "Fotos y reporte para tu reclamo.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is fire damage mitigation?",
            a: "It's the process of securing & stabilizing a property after a fire—board-ups, smoke containment, ventilation.",
          },
          {
            q: "Why is fire mitigation important?",
            a: "Without mitigation, soot spreads, odors become permanent, and structures weaken—making restoration harder & costlier.",
          },
          {
            q: "What's the difference between fire mitigation and restoration?",
            a: "Mitigation = prevention of further damage. Restoration = rebuild to pre-loss condition.",
          },
          {
            q: "How fast should fire mitigation start?",
            a: "Immediately. The first 24 hours are critical.",
          },
          {
            q: "Does insurance cover fire mitigation?",
            a: "Yes—most policies cover mitigation since it reduces claim costs. We provide full documentation for adjusters.",
          },
        ],
      },
      {
        slug: "mold-mitigation",
        title: "Mold Mitigation",
        short: "Containment & drying",
        cta: {
          headline: "Don't let mold spread across your home",
          button: "Protect Your Property & Health with Professional Mold Mitigation in Florida"
        },
        hero: {
          description:
            "Containment and targeted drying to prevent mold spread and damage.",
          cta: "Contain Growth",
          bg: "/images/mitigation/mold-hero.jpg",
        },
        steps: [
          {
            title: "Containment",
            text: "Aislar áreas con barreras/negativa.",
            icon: "fa-solid fa-vector-square",
          },
          {
            title: "Ventilation/HEPA",
            text: "Control de esporas en el aire.",
            icon: "fa-solid fa-fan",
          },
          {
            title: "Drying",
            text: "Reducir humedad y secar sustratos.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Sanitize",
            text: "Antimicrobiano donde corresponda.",
            icon: "fa-solid fa-spray-can-sparkles",
          },
          {
            title: "Monitor",
            text: "Lecturas y seguimiento.",
            icon: "fa-solid fa-gauge",
          },
        ],
        reasons: [
          {
            title: "Stop Spread",
            text: "Contención efectiva y rápida.",
            icon: "fa-solid fa-ban",
            cta: { label: "Contain Now", href: "/contact" },
          },
          {
            title: "Dry Right",
            text: "Secado focalizado para evitar daños.",
            icon: "fa-solid fa-wind",
            cta: { label: "Targeted Drying", href: "/contact" },
          },
          {
            title: "Air Quality",
            text: "HEPA y control de partículas.",
            icon: "fa-solid fa-fan",
            cta: { label: "Clean Air", href: "/contact" },
          },
          {
            title: "Next Steps",
            text: "Plan de remediación si aplica.",
            icon: "fa-solid fa-clipboard-check",
            cta: { label: "Get Plan", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is mold mitigation?",
            a: "It's the process of containing mold, improving air quality, and controlling moisture before remediation begins.",
          },
          {
            q: "Does mold mitigation remove mold?",
            a: "No—mitigation prevents spread, but remediation removes colonies permanently.",
          },
          {
            q: "Why is mold mitigation important?",
            a: "It protects health, limits property damage, and reduces remediation costs.",
          },
          {
            q: "How long does mitigation take?",
            a: "Usually 1–3 days, depending on moisture and area size.",
          },
          {
            q: "Can mold return after mitigation?",
            a: "Yes—if moisture isn't controlled. That's why mitigation always includes humidity monitoring.",
          },
        ],
      },
      {
        slug: "storm-mitigation",
        title: "Storm Mitigation",
        short: "Tarping & temporary fixes",
        cta: {
          headline: "Don't leave your home exposed after a storm",
          button: "Call Now for 24/7 Storm Mitigation Services in Florida"
        },
        hero: {
          description:
            "Tarping, temporary patches, and moisture control after severe weather.",
          cta: "Protect My Home",
          bg: "/images/mitigation/storm-hero.jpg",
        },
        steps: [
          {
            title: "Initial Safety",
            text: "Riesgos y corte de servicios si aplica.",
            icon: "fa-solid fa-triangle-exclamation",
          },
          {
            title: "Tarp & Seal",
            text: "Cubiertas y parches temporales.",
            icon: "fa-solid fa-umbrella",
          },
          {
            title: "Water Control",
            text: "Extracción si hay intrusión.",
            icon: "fa-solid fa-water",
          },
          {
            title: "Drying",
            text: "Estabiliza humedad y evita moho.",
            icon: "fa-solid fa-wind",
          },
          {
            title: "Plan Repairs",
            text: "Transición a reparación definitiva.",
            icon: "fa-solid fa-clipboard-list",
          },
        ],
        reasons: [
          {
            title: "Fast Protection",
            text: "Reduce daños secundarios.",
            icon: "fa-solid fa-shield-halved",
            cta: { label: "Protect Now", href: "/contact" },
          },
          {
            title: "Right Gear",
            text: "Materiales y equipos adecuados.",
            icon: "fa-solid fa-toolbox",
            cta: { label: "Get Covered", href: "/contact" },
          },
          {
            title: "Moisture Control",
            text: "Previene moho y mal olor.",
            icon: "fa-solid fa-droplet",
            cta: { label: "Control Moisture", href: "/contact" },
          },
          {
            title: "Claim Docs",
            text: "Fotos, logs y estimados.",
            icon: "fa-solid fa-file-shield",
            cta: { label: "Claim Support", href: "/contact" },
          },
        ],
        faqs: [
          {
            q: "What is storm damage mitigation?",
            a: "It's securing & stabilizing a property after a storm—tarping roofs, boarding windows, removing debris.",
          },
          {
            q: "Why is storm mitigation important?",
            a: "Without it, rain, debris & humidity cause higher repair costs & safety risks.",
          },
          {
            q: "What's the difference between storm mitigation & restoration?",
            a: "Mitigation = prevent more damage. Restoration = repair & rebuild.",
          },
          {
            q: "What is the most common storm damage in Florida?",
            a: "Roof damage: missing shingles, leaks, structural weakening. Also water intrusion & fallen trees.",
          },
          {
            q: "How fast should storm mitigation start?",
            a: "Immediately after the storm clears. The sooner it's secured, the less secondary damage occurs.",
          },
        ],
      },
    ],
  },
];

// ===== Utils =====
export function findGroup(slug) {
  return restorationGroups.find((g) => g.slug === slug);
}
export function findSubservice(groupSlug, subSlug) {
  const g = findGroup(groupSlug);
  return g?.subservices.find((s) => s.slug === subSlug);
}
export function getAllCombos() {
  return restorationGroups.flatMap((g) =>
    g.subservices.map((s) => ({
      params: { group: g.slug, subservice: s.slug },
      props: { groupData: g, subData: s },
    }))
  );
}
