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
        seo: {
          title:
            "Flood Damage Cleanup Florida | 24/7 Water Extraction & Drying",
          description:
            "Certified flood damage cleanup in Florida. Emergency water removal, drying, mold prevention & structural stabilization. 24/7 response across Orlando, Miami & Tampa.",
        },
        cta: {
          headline: "Don't Let Flood Damage Ruin Your Home",
          button: "Start Flood Extraction Now",
        },
        hero: {
          title: "Flood Damage? We Extract Water & Restore Homes Across Florida",
          description:
            "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety. Immediate response across Orlando, Miami, Tampa, and statewide.",
          cta: "Start Flood Extraction Now",
          bg: "/images/FloodDamage.jpg",
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
        microBenefits: [
          {
            icon: "⚡",
            title: "Faster Recovery",
            description: "Stop flood damage from spreading.",
          },
          {
            icon: "💲",
            title: "Lower Costs",
            description: "Early mitigation prevents expensive repairs.",
          },
          {
            icon: "❤️",
            title: "Health Protection",
            description: "Reduce mold and bacteria risks.",
          },
        ],
        whatNotToDo: [
          "Don't use electricity near floodwater.",
          "Don't attempt to dry soaked ceilings yourself.",
          "Don't delay calling professionals—damage worsens quickly.",
        ],
      },

      // WATER — LEAK REPAIR
      {
        slug: "leak-repair",
        title: "Leak Repair Services in Florida | Ceiling, Wall & Pipe Leaks",
        short: "Find & fix leaks quickly",
        seo: {
          title: "Leak Repair Services in Florida | Ceiling, Wall & Pipe Leaks",
          description:
            "Fast, professional leak repair in Florida. Detect hidden leaks, fix ceiling or pipe damage, and prevent mold growth. 24/7 emergency service.",
        },
        cta: {
          headline: "Don't Let a Small Leak Turn Into a Disaster",
          button: "Fix My Leak Today",
        },
        hero: {
          title: "Stop Leaks Before They Cause Bigger Damage",
          description:
            "Whether it's a burst pipe, ceiling leak, or hidden water damage inside your walls, our Florida leak repair specialists act fast to protect your home or business. With 24/7 emergency response and advanced detection tools, we fix leaks before they become costly disasters.",
          cta: "Fix My Leak Now",
          bg: "/images/LeakRepair.jpg",
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
        whatNotToDo: [
          "Don't ignore small stains – they often hide bigger leaks.",
          "Don't paint over damp areas – mold will spread underneath.",
          "Don't delay professional help – DIY fixes rarely solve hidden leaks.",
        ],
      },

      // WATER — BASEMENT FLOODING
      {
        slug: "basement-flooding",
        title: "Basement Flooding",
        short: "Pumping & drying basements",
        seo: {
          title: "Basement Flooding Cleanup Florida | 24/7 Pump-Out & Drying",
          description:
            "Certified basement flooding cleanup in Florida. Emergency pump-out, drying, mold prevention & foundation protection. 24/7 response in Orlando, Miami, Tampa & statewide.",
        },
        cta: {
          headline: "Don't Let a Flooded Basement Damage Your Foundation",
          button: "Protect Against Mold",
        },
        hero: {
          title: "Basement Flooding? We Pump Out Water & Protect Your Foundation",
          description:
            "Is your basement underwater? Our Florida team provides 24/7 basement flooding cleanup, including pump-out, cavity drying, and mold prevention. We remove water fast, protect your foundation, and restore your property safely. Serving Orlando, Miami, Tampa, and all Florida regions.",
          cta: "Protect Against Mold",
          bg: "/images/BasementFlooding.jpg",
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
        microBenefits: [
          {
            icon: "❤️",
            title: "Health Protection",
            description: "Prevent mold spores and bacteria in your home.",
          },
          {
            icon: "🏗️",
            title: "Structural Safety",
            description: "Protect your foundation from weakening.",
          },
          {
            icon: "💲",
            title: "Lower Claim Costs",
            description: "Early cleanup reduces total damage.",
          },
        ],
        whatNotToDo: [
          "Don't enter a flooded basement if power outlets are submerged.",
          "Don't keep wet furniture or boxes together—separate and dry.",
          "Don't repaint or refinish until full drying is confirmed.",
        ],
      },

      // WATER — CEILING WATER DAMAGE
      {
        slug: "ceiling-water-damage",
        title: "Ceiling Water Damage",
        short: "Ceiling stains & sagging repair",
        seo: {
          title:
            "Ceiling Water Damage Repair in Florida | Fast Leak & Stain Fix",
          description:
            "Professional ceiling water damage repair in Florida. Fix leaks, stains, sagging drywall, and mold risk fast. 24/7 emergency service & free inspection.",
        },
        cta: {
          headline: "Don't Let a Small Leak Turn Into a Ceiling Collapse",
          button: "Request Emergency Help",
        },
        hero: {
          title: "Ceiling Leak or Water Stains? We Fix It Fast.",
          description:
            "From small leaks to major ceiling collapses, our Florida ceiling repair teams restore drywall, insulation, and finishes—stopping hidden mold before it spreads. With 24/7 emergency response and licensed specialists, we protect your home or business from water damage and ceiling collapse.",
          cta: "Schedule Ceiling Repair",
          bg: "/images/CeilingWaterDamage.jpg",
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
        whatNotToDo: [
          "Don't poke or push a sagging ceiling",
          "Don't paint over stains without repair",
          "Don't ignore small leaks—they spread fast",
          "Don't delay professional help",
        ],
      },

      // WATER — EMERGENCY WATER REMOVAL
      {
        slug: "emergency-water-removal",
        title: "Emergency Water Removal",
        short: "24/7 extraction & drying",
        seo: {
          title: "Emergency Water Removal in Florida | 24/7 Fast Response",
          description:
            "Certified emergency water removal in Florida. 24/7 rapid response, industrial pumps & drying systems to prevent mold and structural damage. Free inspection today.",
        },
        hero: {
          title: "Rapid Emergency Water Removal When Every Minute Counts",
          badge: "24/7",
          cta: "Request Water Removal Now",
          tagline: "Fast response within 60 minutes",
          description:
            "Flooding, burst pipes, or storm intrusion can overwhelm your home or business in minutes. Our Florida emergency water removal teams respond 24/7 with industrial pumps, vacuums, and drying systems—eliminating standing water before it spreads. Protect your property, prevent mold, and restore safety now.",
          bg: "/images/EmergencyWaterRemoval.jpg",
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
          hero: "/images/EmergencyWaterRemoval.jpg",
          gallery: ["/images/EmergencyWaterRemoval.jpg"],
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
        seo: {
          title:
            "Smoke Damage Restoration in Florida | 24/7 Cleanup & Odor Removal",
          description:
            "Expert smoke damage restoration in Florida. We remove soot, smoke odors & repair affected areas. 24/7 emergency response, free inspection & insurance support.",
        },
        cta: {
          headline: "Don't Let Smoke Linger in Your Home or Business",
          button: "Get Smoke Damage Help Today",
        },
        hero: {
          title: "Breathe Easy Again After Smoke Damage",
          description:
            "When smoke invades your property, the damage goes beyond stains and odors—it impacts your health and safety. Our certified Florida restoration teams provide 24/7 smoke cleanup, soot removal, odor elimination, and surface repairs. Restore clean air and peace of mind today.",
          cta: "Request Smoke Damage Help Now",
          bg: "/images/SmokeDamage.jpg",
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
        seo: {
          title: "Soot Cleanup in Florida | Smoke & Fire Residue Removal",
          description:
            "Professional soot cleanup services in Florida. Remove smoke residue, odors, and stains after a fire. 24/7 emergency response. Free inspection.",
        },
        cta: {
          headline:
            "Don't let soot damage linger—restore your home or business today",
          button: "Request Soot Cleanup Now",
        },
        hero: {
          title: "Soot Cleanup Services Across Florida",
          description:
            "After a fire, soot and smoke residue can spread fast—coating walls, ceilings, furniture, and even air ducts. Our Florida soot cleanup teams respond 24/7 to remove hazardous particles, neutralize odors, and restore your property safely. Protect your health and belongings with certified restoration services.",
          cta: "Request Soot Cleanup Now",
          bg: "/images/SootCleanup.jpg",
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
        microBenefits: [
          {
            title: "Health Protection",
            description: "Reduce toxic particle exposure.",
          },
          {
            title: "Faster Recovery",
            description: "Minimize permanent stains & repairs.",
          },
          {
            title: "Cost Savings",
            description: "Early action lowers insurance claim costs.",
          },
        ],
        whatNotToDo: [
          "Don't scrub soot with water—it spreads and embeds deeper.",
          "Don't ignore smoke odors—they signal hidden contamination.",
          "Don't delay cleanup—acidic soot worsens damage every hour.",
        ],
      },
      {
        slug: "fire-damage-repair",
        title: "Fire Damage Repair",
        short: "Structural repair & rebuild",
        seo: {
          title:
            "Fire Cleanup in Florida | Emergency Debris, Smoke & Soot Removal",
          description:
            "24/7 fire cleanup services in Florida. Remove debris, soot, and smoke residue fast. Certified crews, odor removal & insurance claim support. Free inspection.",
        },
        cta: {
          headline:
            "Don't let soot, smoke, and fire debris linger—restore your property today",
          button: "Request Fire Cleanup Now",
        },
        hero: {
          title: "Fire Cleanup Services in Florida",
          description:
            "Need urgent fire cleanup in Florida? Our certified crews provide complete fire debris removal, smoke residue cleanup, and soot removal. We act fast to restore safety, eliminate odors, and prepare your home or business for full fire damage repair.",
          cta: "Request Fire Cleanup Now",
          bg: "/images/FireDamageRepair.jpg",
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
        seo: {
          title: "24/7 Emergency Fire Response Florida | Fast Fire Damage Help",
          description:
            "Immediate fire emergency response in Florida. Secure, clean, and restore your property after fire. Available 24/7 for residential & commercial needs.",
        },
        cta: {
          headline: "Don't wait—every minute after a fire counts",
          button: "Request Emergency Fire Response Now",
        },
        hero: {
          title: "24/7 Emergency Fire Response Services",
          description:
            "When fire strikes, every minute matters. Our emergency fire response team in Florida is on call 24/7 to secure your property, stop damage from spreading, and begin immediate recovery—day, night, weekends, or holidays.",
          cta: "Request Emergency Response Now",
          bg: "/images/EmergencyFireResponse.jpg",
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
        seo: {
          title: "Florida Mold Inspection | Stop Hidden Mold Before It Spreads",
          description:
            "Certified mold inspection in Florida. Detect hidden mold, humidity & air quality issues. Protect your health—book your inspection today.",
        },
        cta: {
          headline: "Don't let hidden mold grow into a bigger problem",
          button: "Schedule Your Certified Inspection Today",
        },
        hero: {
          title: "Find Mold Before It Finds You",
          description:
            "Our certified inspectors uncover hidden mold, leaks, and air risks—so you can breathe safe and avoid costly damage.",
          cta: "Book My Inspection Now",
          bg: "/images/MoldInspection.jpg",
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
        seo: {
          title: "Black Mold Removal Florida | Safe & Certified Remediation",
          description:
            "Certified black mold removal in Florida. Protect your health with safe remediation, air treatment & moisture prevention. Book emergency service today.",
        },
        cta: {
          headline: "Protect your family. Breathe safe again",
          button: "Request Black Mold Removal Now",
        },
        hero: {
          title: "Black Mold is Toxic—We Remove It Safely",
          description:
            "Our certified Florida teams eliminate dangerous black mold, clean the air, and protect your family's health with proven remediation methods.",
          cta: "Get Black Mold Removal Now",
          bg: "/images/BlackMoldRemoval.jpg",
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
        seo: {
          title: "Mold Prevention Florida | Stop Mold Before It Starts",
          description:
            "Professional mold prevention services in Florida. Moisture control, air treatment & protective barriers to stop mold growth. Protect your home today.",
        },
        cta: {
          headline: "Keep mold out of your home—before it becomes a problem",
          button: "Schedule Mold Prevention Service Today",
        },
        hero: {
          title: "Stop Mold Before It Starts",
          description:
            "Our certified Florida specialists protect your property with proven prevention strategies—moisture control, air treatment, and protective barriers.",
          cta: "Protect My Home From Mold",
          bg: "/images/MoldPrevention.jpg",
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
        seo: {
          title: "Mold Testing Florida | Certified Air & Surface Analysis",
          description:
            "Professional mold testing in Florida. Certified inspectors use advanced air & surface sampling to detect hidden mold. Fast results, clear reports, peace of mind.",
        },
        cta: {
          headline: "Know What's in Your Air—Protect Your Health & Property",
          button: "Book Certified Mold Testing Now",
        },
        hero: {
          title: "Get Certified Mold Testing in Florida—Fast, Accurate, Reliable",
          description:
            "Not sure if mold is hiding in your home or business? Our certified testing identifies mold type & levels—so you know exactly what you're breathing.",
          cta: "Schedule My Mold Test Today",
          bg: "/images/Moldtesting.jpg",
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
        seo: {
          title:
            "Hurricane Damage Restoration Florida | 24/7 Emergency Response",
          description:
            "Certified hurricane damage restoration in Florida. Roof repair, flood cleanup, debris removal & emergency support. Available 24/7 with local response teams.",
        },
        cta: {
          headline: "Don't Wait—Protect Your Home After the Hurricane",
          button: "Request Emergency Hurricane Help",
        },
        hero: {
          title: "Hurricane Damage? We Restore Homes & Businesses Across Florida",
          description:
            "From roof leaks to major flooding, our hurricane restoration team provides emergency cleanup, debris removal, and full structural repairs. Available 24/7 across Florida.",
          cta: "Restore After Hurricane Now",
          bg: "/images/HurricaneDamage.jpg",
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
        seo: {
          title:
            "Wind Damage Restoration Florida | Emergency Roof & Property Repair",
          description:
            "Fast wind damage restoration in Florida. Roof repair, siding replacement, debris removal & emergency storm response. 24/7 local service teams.",
        },
        cta: {
          headline: "Restore Your Home After Wind Damage—Act Fast",
          button: "Get Emergency Wind Repair",
        },
        hero: {
          title: "Wind Damage? We Repair Roofs, Siding & Structures Across Florida",
          description:
            "Strong winds can tear shingles, break windows, and damage property. Our 24/7 emergency response team restores safety and structure fast.",
          cta: "Request Wind Damage Repair Now",
          bg: "/images/WindDamage.jpg",
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
        seo: {
          title: "Storm Debris Removal Florida | Fallen Tree & Hazard Cleanup",
          description:
            "Fast storm debris removal in Florida. Safe cleanup of fallen trees, branches, siding & roofing debris. 24/7 emergency crews with heavy equipment.",
        },
        cta: {
          headline: "Clear your property from storm debris safely and fast",
          button: "Schedule Debris Cleanup Today",
        },
        hero: {
          title: "Storm Debris Removal Services in Florida",
          description:
            "Safe and fast cleanup of fallen trees, branches, and storm debris.",
          cta: "Request Debris Cleanup Now",
          bg: "/images/StormDebrisRemoval.jpg",
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
        seo: {
          title:
            "Emergency Storm Repair Florida | 24/7 Roof, Water & Structural Response",
          description:
            "Fast emergency storm repair in Florida. Roof tarping, water removal, debris cleanup & structural repairs. Local certified teams ready 24/7.",
        },
        cta: {
          headline: "Don't Wait – Restore Your Home After the Storm",
          button: "Get Emergency Storm Repair Now",
        },
        hero: {
          title: "Florida Storm Damage? Get Emergency Repairs 24/7",
          description:
            "When storms strike, every minute matters. Our emergency crews secure, repair, and restore homes and businesses across Central, Tampa Bay & South Florida.",
          cta: "Request Emergency Storm Repair",
          bg: "/images/EmergencyStormRepair.jpg",
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
        seo: {
          title:
            "Water Damage Mitigation Florida | Fast Drying & Flood Prevention",
          description:
            "Certified water damage mitigation in Florida. Rapid water extraction, drying & mold prevention. Protect your home or business—available 24/7.",
        },
        cta: {
          headline: "Don't wait for water to cause permanent damage",
          button:
            "Protect Your Property with Professional Water Mitigation Today",
        },
        hero: {
          title: "Water Damage Mitigation Services in Florida",
          description:
            "Water damage mitigation focuses on stopping the spread of water before it causes permanent structural issues or mold growth. Unlike restoration (which repairs after the damage), mitigation is the first and most critical step to protect your Florida property from further loss.",
          cta: "Start Water Mitigation Now",
          bg: "/images/EmergencyWaterRemoval.jpg",
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
        seo: {
          title:
            "Fire Damage Mitigation in Florida | Secure & Contain After Fire",
          description:
            "Protect your property with fire damage mitigation in Florida. Emergency board-up, smoke containment & ventilation to limit damage. Call 24/7.",
        },
        cta: {
          headline: "Secure your property after a fire—don't wait",
          button: "Request 24/7 Fire Mitigation Services Across Florida",
        },
        hero: {
          title: "Fire Damage Mitigation Services in Florida",
          description:
            "After a fire, the damage doesn't end when the flames are out. Smoke, soot, and structural instability keep spreading harm. Fire damage mitigation focuses on securing, containing, and stabilizing your property to prevent further loss—while restoration repairs and rebuilds later. Mitigation is the bridge between emergency response and full recovery.",
          cta: "Secure My Property Now",
          bg: "/images/EmergencyFireResponse.jpg",
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
        seo: {
          title:
            "Mold Mitigation in Florida | Containment & Prevention Experts",
          description:
            "Florida mold mitigation services. Stop mold spread with containment, moisture control, and antimicrobial treatments. Protect your home & health today.",
        },
        cta: {
          headline: "Don't let mold spread across your home",
          button:
            "Protect Your Property & Health with Professional Mold Mitigation in Florida",
        },
        hero: {
          title: "Mold Mitigation Services in Florida",
          description:
            "Mold mitigation is about prevention and containment—stopping mold from spreading, controlling humidity, and protecting your property until full remediation can safely remove it. Unlike remediation, which eliminates colonies, mitigation is the first line of defense against contamination and health risks.",
          cta: "Stop Mold Spread Today",
          bg: "/images/MoldPrevention.jpg",
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
        seo: {
          title:
            "Storm Damage Mitigation in Florida | Emergency Tarping & Board-Up",
          description:
            "Florida storm damage mitigation services. Secure your property with tarping, board-up & debris removal. Protect against further hurricane & storm damage 24/7.",
        },
        cta: {
          headline: "Don't leave your home exposed after a storm",
          button: "Call Now for 24/7 Storm Mitigation Services in Florida",
        },
        hero: {
          title: "Storm Damage Mitigation Services in Florida",
          description:
            "Storms and hurricanes don't just cause immediate destruction—they leave homes and businesses exposed to secondary damage like flooding, mold, and structural collapse. Storm mitigation focuses on securing and stabilizing your property right after impact. Unlike restoration, which repairs and rebuilds, mitigation prevents additional loss while you prepare for full recovery.",
          cta: "Request Storm Mitigation Now",
          bg: "/images/EmergencyStormRepair.jpg",
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
