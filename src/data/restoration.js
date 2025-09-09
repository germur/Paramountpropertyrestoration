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
            q: "Can you detect hidden leaks?",
            a: "Yes, with thermal cameras and moisture mapping we locate concealed moisture sources.",
          },
          {
            q: "Do you repair the plumbing?",
            a: "We repair directly or coordinate licensed plumbers depending on scope.",
          },
          {
            q: "How fast can you respond?",
            a: "Same-day inspections in most areas; emergency service available.",
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
            q: "How quickly can you pump out a basement?",
            a: "Often within hours depending on volume and access.",
          },
          {
            q: "Is the water safe?",
            a: "Flood water is often contaminated—avoid contact and let pros handle it.",
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
            q: "Is a sagging ceiling dangerous?",
            a: "It can be; avoid the area and call a pro to assess and stabilize.",
          },
          {
            q: "Will stains come back?",
            a: "Not if the source is repaired and materials are dried/primed correctly.",
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
          { q: "How fast can you arrive?", a: "Usually within 60–90 minutes." },
          {
            q: "Do you work with insurance?",
            a: "Yes, we document and coordinate.",
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
            q: "Can smoke smell be fully removed?",
            a: "Yes—using proper cleaning, filtration, and odor neutralization methods.",
          },
          {
            q: "Is soot hazardous?",
            a: "It can be; avoid DIY cleaning to prevent smearing and exposure.",
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
            q: "Can I wipe soot myself?",
            a: "No recomendado: puede fijarse a la pintura. Usa limpieza profesional.",
          },
          {
            q: "How long does it take?",
            a: "Según alcance/superficies: desde 1–3 días típicamente.",
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
            q: "Do you manage permits?",
            a: "Sí, según jurisdicción y alcance del rebuild.",
          },
          {
            q: "How long does rebuild take?",
            a: "Depende de daños: semanas a meses con inspecciones.",
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
            q: "Do you handle permits?",
            a: "We coordinate with local authorities when required.",
          },
          {
            q: "How fast can you board up?",
            a: "Usually the same day, depending on distance and scope.",
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
            q: "Do I need air testing?",
            a: "Se recomienda cuando hay dudas o para clearance post-remediación.",
          },
          {
            q: "How soon do I get results?",
            a: "Usualmente 24–72 horas según laboratorio.",
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
            q: "Is black mold more dangerous?",
            a: "Algunos tipos pueden provocar reacciones; seguimos protocolos de seguridad.",
          },
          {
            q: "Do I need to leave home?",
            a: "Puede ser necesario durante etapas de demolición/filtración.",
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
            q: "What humidity is safe indoors?",
            a: "Generalmente 40–55% RH para minimizar riesgo de moho.",
          },
          {
            q: "Do preventive coatings last?",
            a: "Depende del ambiente y mantenimiento; se recomiendan revisiones anuales.",
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
            q: "Do I need both air and surface samples?",
            a: "Depende del caso; a menudo se combinan para mejor diagnóstico.",
          },
          {
            q: "Is testing required for clearance?",
            a: "Es comúnmente recomendado para validar remediación.",
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
            q: "Do you work after-hours during hurricanes?",
            a: "Sí, priorizamos emergencias según seguridad y acceso.",
          },
          {
            q: "Can you coordinate tree removal?",
            a: "Sí, contamos con equipos y socios para retiro seguro.",
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
            q: "Can you match shingles/siding?",
            a: "Haremos lo posible; si no, proponemos alternativas compatibles.",
          },
          {
            q: "How fast are temporary repairs?",
            a: "Generalmente el mismo día según materiales y clima.",
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
            q: "Do you remove fallen trees?",
            a: "Sí, coordinamos corte y retiro con equipo adecuado.",
          },
          {
            q: "Where do you take debris?",
            a: "A sitios autorizados según tipo/material.",
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
            q: "Do you prioritize emergencies?",
            a: "Sí, según severidad, seguridad y disponibilidad.",
          },
          {
            q: "Can you handle multiple properties?",
            a: "Coordinamos equipos para cubrir varias ubicaciones.",
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
            q: "How long does mitigation take?",
            a: "Típicamente 2–4 días según materiales, humedad y ventilación.",
          },
          {
            q: "Do you work with insurance?",
            a: "Sí, proveemos documentación completa.",
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
            q: "Can you start same day?",
            a: "Generalmente sí, según distancia y seguridad del sitio.",
          },
          {
            q: "Do you handle odors?",
            a: "Sí, combinamos métodos para eliminar olores, no solo cubrirlos.",
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
            q: "Is mitigation same as remediation?",
            a: "La mitigación contiene y estabiliza; la remediación elimina el moho.",
          },
          {
            q: "Do I need a clearance test?",
            a: "Recomendado tras remediación completa para verificar.",
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
            q: "How long do temporary repairs last?",
            a: "Están pensados para días/semanas, hasta hacer la reparación definitiva.",
          },
          {
            q: "Can you coordinate roofers?",
            a: "Sí, coordinamos equipos para continuidad.",
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
