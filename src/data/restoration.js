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
          title:
            "Flood Damage? We Extract Water & Restore Homes Across Florida",
          description:
            "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety. Immediate response across Orlando, Miami, Tampa, and statewide.",
          cta: "Start Flood Extraction Now",
          bg: "/images/FloodDamage.jpg",
          iconRow: [
            { icon: "💧", text: "Water Extraction" },
            { icon: "🌬️", text: "Drying" },
            { icon: "🧪", text: "Mold Prevention" },
            { icon: "🛠️", text: "Repair" },
          ],
        },
        process: {
          title: "Quick Relief – How It Works",
          steps: [
            {
              title: "Inspection & Moisture Mapping",
              text: "Identify visible and hidden flood damage.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Rapid Water Extraction",
              text: "Remove standing floodwater using high-capacity pumps.",
              icon: "fa-solid fa-water",
            },
            {
              title: "Drying & Dehumidification",
              text: "Stabilize humidity with industrial air movers.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Antimicrobial Treatment",
              text: "Protect walls, flooring, and furniture against mold.",
              icon: "fa-solid fa-spray-can-sparkles",
            },
            {
              title: "Ongoing Monitoring",
              text: "Daily moisture checks until drying is complete.",
              icon: "fa-solid fa-gauge",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Mold can begin in 24–48 hours",
            "Structural weakening of drywall, framing, and flooring",
            "Electrical hazards from water intrusion",
            "Higher insurance claim costs if damage spreads",
          ],
        },
        waterSigns: {
          title: "Common Signs of Flood Damage",
          items: [
            { text: "Standing water in rooms or basements", icon: "💧" },
            { text: "Water stains on ceilings and walls", icon: "🟤" },
            { text: "Musty odors after rain or storm", icon: "😷" },
            { text: "Warped floors or bubbling paint", icon: "🏚️" },
          ],
        },
        serviceCards: {
          title: "What We Do",
          items: [
            {
              icon: "🚚",
              title: "Emergency Water Extraction",
              text: "Pumps and vacuums remove large volumes of water quickly.",
              cta: { text: "Request Flood Water Removal", href: "/contact" },
            },
            {
              icon: "🌬️",
              title: "Industrial Drying",
              text: "Air movers and dehumidifiers dry walls, floors, and cavities.",
              cta: { text: "Schedule Drying Service", href: "/contact" },
            },
            {
              icon: "🧪",
              title: "Mold Prevention",
              text: "Antimicrobial treatments protect against bacteria and mold.",
              cta: { text: "Protect Against Mold", href: "/contact" },
            },
            {
              icon: "🛠️",
              title: "Structural Stabilization",
              text: "Support for weakened ceilings, floors, and framing.",
              cta: { text: "Start Repairs Today", href: "/contact" },
            },
          ],
        },
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
        whyChooseUs: [
          "24/7 rapid response teams across Florida",
          "Industrial-grade pumps, vacuums, and drying systems",
          "Stop flood damage from spreading with early mitigation",
          "End-to-end service from mitigation to rebuild",
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
          iconRow: [
            { icon: "💧", text: "Ceilings" },
            { icon: "🚰", text: "Pipes" },
            { icon: "🏚️", text: "Walls" },
            { icon: "🦠", text: "Mold Prevention" },
          ],
        },
        process: {
          title: "Our Leak Repair Process",
          steps: [
            {
              title: "Inspection & Leak Detection",
              text: "Thermal imaging & moisture meters find the source.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Emergency Containment",
              text: "Stop water flow, prevent further damage.",
              icon: "fa-solid fa-square-minus",
            },
            {
              title: "Drying & Dehumidification",
              text: "Industrial air movers, dehumidifiers.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Repair & Restoration",
              text: "Pipes, drywall, ceilings, and flooring fixed.",
              icon: "fa-solid fa-screwdriver-wrench",
            },
            {
              title: "Mold Prevention & Quality Check",
              text: "Antimicrobial treatment + testing.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Moisture spreads through walls and insulation within first 24h",
            "Mold growth begins within 48h, odors intensify",
            "Structural damage and costly repairs become likely after 72h+",
          ],
        },
        waterSigns: {
          title: "Common Signs of a Leak",
          items: [
            { text: "Water stains on ceilings or walls", icon: "💧" },
            { text: "Bubbling paint or warped drywall", icon: "🪞" },
            { text: "Musty smell or early mold growth", icon: "🦠" },
            { text: "Unexpected spike in your water bill", icon: "📉" },
            { text: "Low water pressure in sinks or showers", icon: "🚰" },
          ],
        },
        serviceCards: {
          title: "Subservices",
          items: [
            {
              icon: "🛠️",
              title: "Ceiling Leak Repair",
              text: "Repair water-damaged ceilings, replace drywall & insulation.",
              cta: { text: "Schedule Ceiling Repair", href: "/contact" },
            },
            {
              icon: "🚰",
              title: "Pipe Leak Repair",
              text: "Fix burst, corroded, or leaking pipes to restore flow & safety.",
              cta: { text: "Request Pipe Repair", href: "/contact" },
            },
            {
              icon: "🔍",
              title: "Hidden Leak Detection",
              text: "Advanced tools locate leaks inside walls, floors, or basements.",
              cta: { text: "Find My Leak", href: "/contact" },
            },
          ],
        },
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
        whyChooseUs: [
          "Non-invasive thermal imaging & detection tools",
          "Root-cause fixes, not just symptoms",
          "Damage prevention with precise drying",
          "Workmanship warranty on repairs",
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
          title:
            "Basement Flooding? We Pump Out Water & Protect Your Foundation",
          description:
            "Is your basement underwater? Our Florida team provides 24/7 basement flooding cleanup, including pump-out, cavity drying, and mold prevention. We remove water fast, protect your foundation, and restore your property safely. Serving Orlando, Miami, Tampa, and all Florida regions.",
          cta: "Protect Against Mold",
          bg: "/images/BasementFlooding.jpg",
          iconRow: [
            { icon: "🪠", text: "Pump-Out" },
            { icon: "🌬️", text: "Drying" },
            { icon: "🛡️", text: "Mold Prevention" },
            { icon: "🧱", text: "Foundation" },
          ],
        },
        process: {
          title: "Quick Relief – How It Works",
          steps: [
            {
              title: "Safety & Assessment",
              text: "Check for electrical hazards and structural risks before entry.",
              icon: "fa-solid fa-triangle-exclamation",
            },
            {
              title: "Pump-Out & Water Removal",
              text: "High-capacity pumps quickly clear standing basement water.",
              icon: "fa-solid fa-pump-soap",
            },
            {
              title: "Cavity Drying",
              text: "Industrial dehumidifiers and air movers dry walls, flooring, and crawlspaces.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Humidity Control",
              text: "Stabilize indoor moisture levels to safe conditions.",
              icon: "fa-solid fa-gauge",
            },
            {
              title: "Antimicrobial Treatment",
              text: "Apply disinfectants to prevent mold and bacteria growth.",
              icon: "fa-solid fa-spray-can-sparkles",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Mold forms in 24–48 hours in damp basements",
            "Structural damage to foundation and framing",
            "Electrical shock risk from outlets and panels",
            "Damaged furniture, stored items, and HVAC systems",
          ],
        },
        waterSigns: {
          title: "Common Signs of Basement Flooding",
          items: [
            { text: "Pooling water near foundations", icon: "💧" },
            { text: "Musty odors and damp walls", icon: "😷" },
            { text: "Rusty appliances or water heater", icon: "⚡" },
            { text: "Cracks or leaks around basement windows", icon: "🪟" },
          ],
        },
        serviceCards: {
          title: "What We Do",
          items: [
            {
              icon: "🪠",
              title: "Basement Pump-Out",
              text: "Rapid water evacuation with high-volume pumps.",
              cta: { text: "Request Pump-Out", href: "/contact" },
            },
            {
              icon: "🧱",
              title: "Structural Drying",
              text: "Dry walls, subfloors, and insulation to protect the foundation.",
              cta: { text: "Schedule Drying", href: "/contact" },
            },
            {
              icon: "🛡️",
              title: "Mold Prevention",
              text: "Apply treatments and humidity control to stop mold growth.",
              cta: { text: "Protect Basement", href: "/contact" },
            },
            {
              icon: "📊",
              title: "Moisture Monitoring",
              text: "Track safe drying progress with daily readings.",
              cta: { text: "Monitor My Basement", href: "/contact" },
            },
          ],
        },
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
        whyChooseUs: [
          "Emergency pump-out reduces structural damage",
          "Industrial drying equipment sized for basements & crawlspaces",
          "Mold prevention treatments protect surfaces",
          "Insurance documentation with moisture logs & photos",
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
          iconRow: [
            { icon: "💧", text: "Leaks" },
            { icon: "🟤", text: "Stains" },
            { icon: "🪵", text: "Drywall" },
            { icon: "🦠", text: "Mold" },
          ],
        },
        process: {
          title: "Our Ceiling Repair Process",
          steps: [
            {
              title: "Inspection & Moisture Detection",
              text: "Thermal cameras to locate leaks.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Containment & Drying",
              text: "Industrial dehumidifiers & air movers.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Drywall & Insulation Replacement",
              text: "Remove damaged materials.",
              icon: "fa-solid fa-screwdriver-wrench",
            },
            {
              title: "Mold Prevention",
              text: "Antimicrobial treatments applied.",
              icon: "fa-solid fa-spray-can-sparkles",
            },
            {
              title: "Finish Restoration",
              text: "Paint, texture & restore ceiling.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Moisture spreads inside ceiling cavities within 24h",
            "Mold spores begin to grow within 48h",
            "Structural damage to drywall, beams, insulation after 72h",
            "Ceiling collapse + electrical hazards after 1 week+",
          ],
        },
        waterSigns: {
          title: "Common Signs of Ceiling Water Damage",
          items: [
            { text: "Brown or yellow stains on ceiling", icon: "🟤" },
            { text: "Bubbling paint or peeling plaster", icon: "🖌️" },
            { text: "Sagging drywall or soft spots", icon: "📉" },
            { text: "Musty odors (possible hidden mold)", icon: "🦠" },
            { text: "Dripping water or visible leaks", icon: "💧" },
          ],
        },
        serviceCards: {
          title: "Subservices",
          items: [
            {
              icon: "🔎",
              title: "Leak Source Repair",
              text: "Fix pipes, roof leaks, or AC condensation.",
              cta: { text: "Find My Leak", href: "/contact" },
            },
            {
              icon: "🧱",
              title: "Drywall & Ceiling Replacement",
              text: "Remove & replace water-damaged sections.",
              cta: { text: "Schedule Drywall Repair", href: "/contact" },
            },
            {
              icon: "🎨",
              title: "Stain & Finish Restoration",
              text: "Prime, paint, and re-texture surfaces.",
              cta: { text: "Restore My Ceiling", href: "/contact" },
            },
            {
              icon: "🦠",
              title: "Mold Remediation",
              text: "Long-term protection against hidden growth.",
              cta: { text: "Prevent Mold Growth", href: "/contact" },
            },
          ],
        },
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
        whyChooseUs: [
          "Quick leak isolation to avoid collapse",
          "Targeted drying reduces demolition needs",
          "Sanitize & seal to restore pre-loss condition",
          "Insurance documentation with photos, logs & estimates",
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
          iconRow: [
            { icon: "🌊", text: "Flood" },
            { icon: "🚰", text: "Pipes" },
            { icon: "🌪️", text: "Storms" },
            { icon: "🏢", text: "Commercial" },
          ],
        },
        process: {
          title: "Our Emergency Water Removal Process",
          steps: [
            {
              title: "Inspection & Safety Check",
              text: "Identify hazards, source of water.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Water Extraction",
              text: "Industrial pumps + vacuums remove standing water.",
              icon: "fa-solid fa-water",
            },
            {
              title: "Drying & Dehumidification",
              text: "Air movers + dehumidifiers stabilize humidity.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Antimicrobial Treatment",
              text: "Stop mold & bacteria growth.",
              icon: "fa-solid fa-spray-can-sparkles",
            },
            {
              title: "Damage Assessment & Restoration Plan",
              text: "Full documentation for insurance.",
              icon: "fa-solid fa-clipboard-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Immediate removal prevents mold, warped floors, electrical hazards (0–24h)",
            "Moisture spreads to drywall, ceilings, insulation (24–48h)",
            "Mold colonization + structural weakening (48–72h)",
            "Collapse risk, toxic mold, costly rebuilds (72h+)",
          ],
        },
        waterSigns: {
          title: "Common Scenarios for Emergency Water Removal",
          items: [
            { text: "Flooded living rooms & basements", icon: "🌊" },
            { text: "Burst pipes or plumbing failures", icon: "🚰" },
            { text: "Storm or hurricane flooding", icon: "🌪️" },
            { text: "Commercial water emergencies", icon: "🏢" },
          ],
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
        cta: {
          headline: "Need emergency extraction?",
          button: "Call our 24/7 team for immediate help.",
        },
        whyChooseUs: [
          "24/7 rapid response within 60 minutes",
          "Industrial-grade pumps, vacuums, and drying systems",
          "Insurance-ready reports with logs, photos & estimates",
          "Full service from mitigation through rebuild",
        ],
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
          iconRow: [
            { icon: "🧹", text: "Soot" },
            { icon: "🌬️", text: "Odors" },
            { icon: "🛋️", text: "Furniture" },
            { icon: "🏠", text: "Structure" },
            { icon: "🩺", text: "Health" },
          ],
        },
        process: {
          title: "How Our Smoke Damage Process Works",
          steps: [
            {
              title: "Assessment & Air Quality Testing",
              text: "Identify contamination and affected zones.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Emergency Soot & Debris Removal",
              text: "Prevent permanent staining and corrosion.",
              icon: "fa-solid fa-broom",
            },
            {
              title: "Odor Neutralization",
              text: "HEPA filters, ozone & hydroxyl treatments.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Deep Cleaning & Sanitization",
              text: "Walls, furniture, fabrics fully restored.",
              icon: "fa-solid fa-soap",
            },
            {
              title: "Final Repairs & Quality Check",
              text: "Structural fixes + guaranteed clean air.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Within 24–48 hours, smoke particles settle deep into porous materials",
            "Odors become nearly permanent, corroding surfaces",
            "Health risks escalate with prolonged exposure",
          ],
        },
        emergencySigns: {
          title: "Common Signs of Smoke Damage",
          items: [
            { text: "Blackened walls & ceilings", icon: "⚫" },
            { text: "Persistent smoke odors", icon: "👃" },
            { text: "Stained furniture or fabrics", icon: "🛋️" },
            { text: "Yellowed paint & bubbling finishes", icon: "🎨" },
            {
              text: "Health issues: headaches, allergies, breathing difficulty",
              icon: "🤒",
            },
          ],
        },
        serviceCards: {
          title: "Specialized Smoke Damage Services",
          items: [
            {
              icon: "🧹",
              title: "Soot & Residue Removal",
              text: "Remove acidic soot before it corrodes surfaces.",
              cta: { text: "Remove Soot Now", href: "/contact" },
            },
            {
              icon: "🌬️",
              title: "Odor Elimination",
              text: "Advanced deodorization with ozone & hydroxyl machines.",
              cta: { text: "Eliminate Odors", href: "/contact" },
            },
            {
              icon: "🛋️",
              title: "Furniture & Fabric Restoration",
              text: "Upholstery, carpets & curtains saved from smoke absorption.",
              cta: { text: "Restore Furniture", href: "/contact" },
            },
            {
              icon: "🏠",
              title: "Structural Cleaning",
              text: "Ceilings, walls & HVAC fully decontaminated.",
              cta: { text: "Clean Structure", href: "/contact" },
            },
            {
              icon: "🩺",
              title: "Health & Safety Controls",
              text: "Protect indoor air quality for families & employees.",
              cta: { text: "Protect Health", href: "/contact" },
            },
          ],
        },
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
        whyChooseUs: [
          "Local Florida teams with fast dispatch",
          "24/7 emergency smoke cleanup",
          "Full-service: cleanup, deodorization, and repairs",
          "Insurance claim support included",
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
          iconRow: [
            { icon: "🧹", text: "Cleaning" },
            { icon: "🏠", text: "Walls & Ceilings" },
            { icon: "🛋️", text: "Furniture" },
            { icon: "🌬️", text: "Odor Removal" },
          ],
        },
        process: {
          title: "Our Soot Cleanup Process",
          steps: [
            {
              title: "Inspection & Assessment",
              text: "Identify soot-affected areas and damage levels.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Containment & Safety",
              text: "Seal clean areas to stop residue from spreading.",
              icon: "fa-solid fa-vector-square",
            },
            {
              title: "Deep Cleaning & Removal",
              text: "HEPA vacuums, dry sponges & chemical cleaners for surfaces.",
              icon: "fa-solid fa-broom",
            },
            {
              title: "Odor Neutralization",
              text: "Ozone treatment & thermal fogging to remove smoke smells.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Final Restoration",
              text: "Refinish walls, ceilings, and furniture back to pre-fire condition.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Soot is acidic—within hours it stains surfaces permanently",
            "Materials weaken and become harder to restore",
            "Long-term repair costs increase dramatically",
          ],
        },
        emergencySigns: {
          title: "Risks & Symptoms of Soot Damage",
          items: [
            {
              text: "Black stains on walls, ceilings, or furniture",
              icon: "⚫",
            },
            { text: "Persistent smoke odors that won't fade", icon: "👃" },
            {
              text: "Respiratory irritation from airborne soot particles",
              icon: "🫁",
            },
            { text: "Corrosion of electronics and appliances", icon: "⚡" },
          ],
        },
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
        serviceCards: {
          title: "What We Do (Specialized Services)",
          items: [
            {
              icon: "🏠",
              title: "Wall & Ceiling Soot Removal",
              text: "Clean stains safely without damaging paint or drywall.",
              cta: { text: "Clean My Walls Today", href: "/contact" },
            },
            {
              icon: "🛋️",
              title: "Furniture & Upholstery Cleanup",
              text: "Restore salvageable sofas, chairs & fabrics.",
              cta: { text: "Save My Furniture", href: "/contact" },
            },
            {
              icon: "🌬️",
              title: "Air Duct & Vent Cleaning",
              text: "Remove hidden soot and restore safe indoor air.",
              cta: { text: "Clean My Air Ducts", href: "/contact" },
            },
            {
              icon: "🫧",
              title: "Odor Control Solutions",
              text: "Advanced ozone & hydroxyl treatments to neutralize smells.",
              cta: { text: "Remove Smoke Odor Now", href: "/contact" },
            },
          ],
        },
        whyChooseUs: [
          "Certified Florida soot cleanup specialists",
          "Eco-friendly, safe methods (no harsh chemicals)",
          "End-to-end service: assess → clean → restore",
          "24/7 emergency response statewide",
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
          iconRow: [
            { icon: "🧹", text: "Debris" },
            { icon: "🌬️", text: "Smoke" },
            { icon: "🪣", text: "Soot" },
            { icon: "🛡️", text: "Sanitization" },
          ],
        },
        process: {
          title: "Our Fire Cleanup Process",
          steps: [
            {
              title: "Inspection & Safety Check",
              text: "Assess structural risks and smoke residue spread.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Debris & Ash Removal",
              text: "Remove hazardous debris and fire-damaged materials.",
              icon: "fa-solid fa-dumpster",
            },
            {
              title: "Soot & Smoke Cleanup",
              text: "HEPA vacuums, sponges, and safe chemical treatments.",
              icon: "fa-solid fa-broom",
            },
            {
              title: "Odor Neutralization",
              text: "Ozone & thermal fogging to remove smoke smell.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Final Sanitization",
              text: "Prepare property for fire damage repairs.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Fire, smoke, soot, and water spread damage quickly",
            "The sooner action is taken, the less permanent damage occurs",
            "Delays turn small repairs into major reconstruction",
          ],
        },
        emergencySigns: {
          title: "Common Problems After a Fire",
          items: [
            {
              text: "Black soot stains on walls, ceilings, and furniture",
              icon: "⚫",
            },
            { text: "Persistent smoke odor embedded in fabrics", icon: "👃" },
            { text: "Corrosion of electronics and appliances", icon: "⚡" },
            { text: "Health issues from airborne fire particles", icon: "🫁" },
          ],
        },
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
        serviceCards: {
          title: "Specialized Fire Cleanup Services",
          items: [
            {
              icon: "🗑️",
              title: "Debris & Ash Removal",
              text: "Clear fire remains safely.",
              cta: { text: "Clear My Property", href: "/contact" },
            },
            {
              icon: "🌬️",
              title: "Smoke Residue Cleanup",
              text: "Remove smoke stains and particles.",
              cta: { text: "Remove Smoke Residue", href: "/contact" },
            },
            {
              icon: "🧹",
              title: "Soot Removal",
              text: "Deep cleaning for walls, ceilings, and furniture.",
              cta: { text: "Clean My Home", href: "/contact" },
            },
            {
              icon: "💨",
              title: "Odor Elimination & Air Quality Control",
              text: "HEPA filtration, ozone & hydroxyl machines.",
              cta: { text: "Remove Fire Odor", href: "/contact" },
            },
          ],
        },
        whyChooseUs: [
          "Complete fire cleanup services in Florida",
          "Certified crews with HEPA filtration & safe chemicals",
          "Odor removal & insurance claim support",
          "Fast response for heavy soot and debris",
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
          iconRow: [
            { icon: "🔥", text: "Emergency" },
            { icon: "🛡️", text: "Secure" },
            { icon: "🧹", text: "Cleanup" },
            { icon: "🏠", text: "Restore" },
          ],
        },
        process: {
          title: "Our 24/7 Fire Emergency Process",
          steps: [
            {
              title: "Call & Dispatch",
              text: "Teams deployed instantly.",
              icon: "fa-solid fa-truck",
            },
            {
              title: "On-Site Assessment",
              text: "Document damage for insurance.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Secure the Property",
              text: "Board-ups, roof tarps, stabilization.",
              icon: "fa-solid fa-warehouse",
            },
            {
              title: "Cleanup & Extraction",
              text: "Debris, soot, and water removed.",
              icon: "fa-solid fa-broom",
            },
            {
              title: "Prepare for Repair",
              text: "Seamless handoff to fire damage restoration.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Speed Matters in Fire Emergencies",
          points: [
            "Prevents structural collapse",
            "Stops soot and smoke from embedding deeper into materials",
            "Protects belongings & furniture from permanent loss",
            "Reduces insurance claim costs and delays",
          ],
        },
        emergencyIncludes: {
          title: "What Our Emergency Fire Response Includes",
          items: [
            { title: "Immediate Arrival", text: "Crews on-site within hours, not days." },
            { title: "Property Securing", text: "Boarding windows, tarping roofs, stabilizing walls." },
            { title: "Debris Removal", text: "Safe disposal of fire residue and hazardous materials." },
            { title: "Water Extraction", text: "Remove hose water to prevent mold & structural issues." },
            { title: "Initial Smoke & Odor Control", text: "HEPA scrubbers and deodorization for safety." },
          ],
        },
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
        whyChooseUs: [
          "Crews available 24/7, weekends & holidays",
          "Full-service: from emergency cleanup to complete restoration",
          "Licensed, insured, experienced in residential & commercial fire recovery",
          "Insurance claim assistance from the first call",
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
          iconRow: [
            { icon: "🫁", text: "Health" },
            { icon: "🏡", text: "Home" },
            { icon: "⏳", text: "Prevention" },
          ],
        },
        process: {
          title: "Our Proven 4-Step Inspection",
          steps: [
            {
              title: "Visual Scan & Hotspot Check",
              text: "Identify stains, discoloration, or early mold growth.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Infrared + Air Testing",
              text: "Detect hidden moisture and analyze indoor air quality.",
              icon: "fa-solid fa-camera",
            },
            {
              title: "Photo & Lab Report",
              text: "Clear evidence and certified results for insurance or repairs.",
              icon: "fa-solid fa-file-pdf",
            },
            {
              title: "Clear Action Plan",
              text: "Step-by-step guidance to fix and prevent mold.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        emergencySigns: {
          title: "When to Call Immediately",
          items: [
            { text: "Persistent musty odor", icon: "🌀" },
            { text: "Dark spots on walls/ceilings", icon: "🎨" },
            { text: "Unexplained allergies or breathing issues", icon: "😮‍💨" },
            {
              text: "Recent leaks, flooding, or humidity problems",
              icon: "💧",
            },
          ],
        },
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
        whyChooseUs: [
          "Licensed & Certified Inspectors in Florida",
          "Advanced Technology: IR cameras + air/surface testing",
          "Same-Day Reports with actionable insights",
          "Full Service: Inspection → Removal → Prevention",
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
          iconRow: [
            { icon: "🫁", text: "Health" },
            { icon: "🏠", text: "Home" },
            { icon: "💨", text: "Clean Air" },
            { icon: "🛡️", text: "Prevention" },
          ],
        },
        process: {
          title: "Our Black Mold Remediation Process (4 Steps)",
          steps: [
            {
              title: "Inspection & Testing",
              text: "Detect mold spread and measure spore levels.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Containment & Safety Setup",
              text: "Seal affected areas to prevent further spread.",
              icon: "fa-solid fa-vector-square",
            },
            {
              title: "Removal & Air Scrubbing",
              text: "HEPA filtration, safe disposal, and eco-friendly cleaning.",
              icon: "fa-solid fa-fan",
            },
            {
              title: "Moisture Control & Prevention",
              text: "Fix leaks, humidity, and future mold risks.",
              icon: "fa-solid fa-droplet",
            },
          ],
        },
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
        emergencySigns: {
          title: "Signs of Black Mold Exposure",
          items: [
            { text: "Persistent coughing or sneezing indoors", icon: "🤢" },
            { text: "Breathing difficulty or chest tightness", icon: "😮‍💨" },
            {
              text: "Black or dark-green patches on walls/ceilings",
              icon: "🖤",
            },
            { text: "Musty odor in closed rooms", icon: "🏚️" },
          ],
        },
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
        whyChooseUs: [
          "Certified Florida mold remediation specialists",
          "Eco-friendly, safe methods (no harsh chemicals)",
          "End-to-end service: detect → remove → prevent",
          "24/7 emergency response statewide",
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
          iconRow: [
            { icon: "🛡️", text: "Prevention" },
            { icon: "💧", text: "Moisture Control" },
            { icon: "🌬️", text: "Air Treatment" },
            { icon: "🏠", text: "Protection" },
          ],
        },
        process: {
          title: "Our Mold Prevention Process (4 Steps)",
          steps: [
            {
              title: "Moisture Assessment",
              text: "Identify leaks, humidity levels & hidden risks.",
              icon: "fa-solid fa-droplet",
            },
            {
              title: "Air Quality & Ventilation Check",
              text: "Ensure airflow prevents condensation & spores.",
              icon: "fa-solid fa-fan",
            },
            {
              title: "Protective Barriers & Treatments",
              text: "Apply safe coatings to walls, attics & crawlspaces.",
              icon: "fa-solid fa-spray-can-sparkles",
            },
            {
              title: "Ongoing Prevention Plan",
              text: "Recommendations for dehumidifiers, HVAC care & seasonal checks.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Saves You",
          points: [
            "Mold spreads in 24–48 hours if conditions are right",
            "Prevention is up to 70% cheaper than removal",
            "Early steps protect insurance eligibility for water-related claims",
          ],
        },
        emergencySigns: {
          title: "When to Get Mold Prevention",
          items: [
            {
              text: "High humidity homes (Florida climate = mold risk all year)",
              icon: "💧",
            },
            { text: "After storms, leaks, or flooding", icon: "🌀" },
            { text: "Older homes with poor ventilation", icon: "🏚️" },
            {
              text: "Families with asthma or allergy sensitivities",
              icon: "👨‍👩‍👧",
            },
          ],
        },
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
        whyChooseUs: [
          "Proactive prevention costs less than remediation",
          "Targeted treatments for high-risk areas",
          "Ventilation improvement recommendations",
          "Humidity monitoring systems",
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
          title:
            "Get Certified Mold Testing in Florida—Fast, Accurate, Reliable",
          description:
            "Not sure if mold is hiding in your home or business? Our certified testing identifies mold type & levels—so you know exactly what you're breathing.",
          cta: "Schedule My Mold Test Today",
          bg: "/images/Moldtesting.jpg",
          iconRow: [
            { icon: "🔬", text: "Testing" },
            { icon: "📊", text: "Analysis" },
            { icon: "🫁", text: "Air Quality" },
            { icon: "📋", text: "Reports" },
          ],
        },
        process: {
          title: "How Our Mold Testing Works (5 Steps)",
          steps: [
            {
              title: "Initial Walkthrough",
              text: "Spot visible mold + moisture risks.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Air Sampling",
              text: "Lab-grade pumps detect invisible mold spores.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Surface Testing",
              text: "Swabs confirm mold type on walls, vents, furniture.",
              icon: "fa-solid fa-vial",
            },
            {
              title: "Lab Analysis",
              text: "Certified labs identify strain + spore levels.",
              icon: "fa-solid fa-flask",
            },
            {
              title: "Clear Report",
              text: "Easy-to-read results + photos + action plan.",
              icon: "fa-solid fa-file-pdf",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Mold grows in 24–48 hours and spreads unseen",
            "Certain strains (like black mold) release toxic spores",
            "Early testing = save thousands in future remediation",
            "Certified reports = stronger insurance & legal documentation",
          ],
        },
        emergencySigns: {
          title: "Signs You Need Mold Testing",
          items: [
            { text: "Musty or damp odor indoors", icon: "☑️" },
            {
              text: "Allergy or asthma symptoms at home (but not outdoors)",
              icon: "☑️",
            },
            { text: "Past water damage or recent leak", icon: "☑️" },
            { text: "Spots/discoloration but unsure if it's mold", icon: "☑️" },
            {
              text: "Buying or selling property (inspection requirement)",
              icon: "☑️",
            },
          ],
        },
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
        whyChooseUs: [
          "Independent lab results (reliable & traceable)",
          "Clear criteria interpretation",
          "Fast turnaround (24–72h typically)",
          "Actionable next steps if findings detected",
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
          title:
            "Hurricane Damage? We Restore Homes & Businesses Across Florida",
          description:
            "From roof leaks to major flooding, our hurricane restoration team provides emergency cleanup, debris removal, and full structural repairs. Available 24/7 across Florida.",
          cta: "Restore After Hurricane Now",
          bg: "/images/HurricaneDamage.jpg",
          iconRow: [
            { icon: "🌪️", text: "Roof" },
            { icon: "💧", text: "Flood" },
            { icon: "🧹", text: "Debris" },
            { icon: "🛠️", text: "Repair" },
          ],
        },
        process: {
          title: "Our 5-Step Hurricane Restoration Process",
          steps: [
            {
              title: "Emergency Board-Up & Roof Tarping",
              text: "Protect interiors from wind & rain.",
              icon: "fa-solid fa-umbrella",
            },
            {
              title: "Water Extraction & Drying",
              text: "Industrial pumps, dehumidifiers, air movers.",
              icon: "fa-solid fa-water",
            },
            {
              title: "Debris & Tree Removal",
              text: "Clear fallen trees and hazardous debris.",
              icon: "fa-solid fa-truck",
            },
            {
              title: "Structural Repair & Roofing",
              text: "Rebuild roofs, siding, drywall & interiors.",
              icon: "fa-solid fa-hammer",
            },
            {
              title: "Insurance Claim Support",
              text: "Documentation & direct adjuster communication.",
              icon: "fa-solid fa-file-shield",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Mold begins within 24–48 hours",
            "Soaked materials cause structural weakening",
            "Insurance claims get more complex and costly if delayed",
          ],
        },
        stormDamages: {
          title: "Common Hurricane Damage We Handle",
          items: [
            {
              text: "Roof Leaks & Collapse Risks – Wind and flying debris cause hidden roof damage",
              icon: "🏚️",
            },
            {
              text: "Flooding & Water Intrusion – Standing water weakens foundations & walls",
              icon: "💧",
            },
            {
              text: "Fallen Trees & Debris – Storm-force winds scatter debris across property",
              icon: "🌳",
            },
            {
              text: "Power & Utility Hazards – Downed lines and outages create safety risks",
              icon: "⚡",
            },
          ],
        },
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
        whyChooseUs: [
          "24/7 local emergency response",
          "Licensed & insured storm restoration crews",
          "Full-service: cleanup + structural repair",
          "Experience across Central & South Florida",
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
          title:
            "Wind Damage? We Repair Roofs, Siding & Structures Across Florida",
          description:
            "Strong winds can tear shingles, break windows, and damage property. Our 24/7 emergency response team restores safety and structure fast.",
          cta: "Request Wind Damage Repair Now",
          bg: "/images/WindDamage.jpg",
          iconRow: [
            { icon: "🏚️", text: "Roof" },
            { icon: "🪟", text: "Windows" },
            { icon: "🧱", text: "Siding" },
            { icon: "🌳", text: "Debris" },
          ],
        },
        process: {
          title: "4-Step Wind Damage Process",
          steps: [
            {
              title: "Emergency Tarping & Board-Up",
              text: "Prevent rain and debris from entering.",
              icon: "fa-solid fa-umbrella",
            },
            {
              title: "Roof & Siding Repair",
              text: "Replace missing shingles, siding, or panels.",
              icon: "fa-solid fa-hammer",
            },
            {
              title: "Debris & Hazard Removal",
              text: "Clear fallen branches and dangerous objects.",
              icon: "fa-solid fa-truck",
            },
            {
              title: "Structural & Interior Repairs",
              text: "Restore walls, ceilings, and insulation.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Prevents water intrusion through broken shingles/windows",
            "Reduces risk of structural weakening",
            "Minimizes insurance complications with timely documentation",
          ],
        },
        stormDamages: {
          title: "Common Wind Damage We Handle",
          items: [
            {
              text: "Roof Shingle Loss – Exposed underlayment leads to leaks",
              icon: "🏚️",
            },
            {
              text: "Broken Windows & Glass – Flying debris causes breakage and safety risks",
              icon: "🪟",
            },
            {
              text: "Fallen Branches & Debris – Impacts puncture roofs and siding",
              icon: "🌳",
            },
            {
              text: "Siding & Gutter Damage – High winds loosen or rip away exterior materials",
              icon: "🧱",
            },
          ],
        },
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
        whyChooseUs: [
          "24/7 Emergency Response After Storms",
          "Licensed, Insured & Experienced Teams",
          "Full-Service: From Tarping to Full Rebuild",
          "Serving Central Florida, Tampa Bay & South Florida",
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
          iconRow: [
            { icon: "🌳", text: "Trees" },
            { icon: "🪵", text: "Branches" },
            { icon: "🏗️", text: "Heavy Equipment" },
            { icon: "♻️", text: "Disposal" },
          ],
        },
        process: {
          title: "Our Cleanup Process (4 Steps)",
          steps: [
            {
              title: "Tree & Branch Removal",
              text: "Cut, clear, and haul away fallen trees.",
              icon: "fa-solid fa-tree",
            },
            {
              title: "Debris Collection",
              text: "Remove scattered siding, shingles, and rubble.",
              icon: "fa-solid fa-boxes-stacked",
            },
            {
              title: "Safe Disposal",
              text: "Transport debris for eco-friendly disposal.",
              icon: "fa-solid fa-truck",
            },
            {
              title: "Site Restoration",
              text: "Prepare property for repair and safe use.",
              icon: "fa-solid fa-circle-check",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Prevents injuries from unstable debris",
            "Avoids secondary damage to roofs, fences, and vehicles",
            "Ensures insurance claims process smoothly",
          ],
        },
        stormDamages: {
          title: "Common Storm Debris & Risks if Ignored",
          items: [
            { text: "Fallen trees blocking driveways", icon: "🌳" },
            { text: "Broken branches damaging roofs", icon: "🪵" },
            { text: "Shattered siding, shingles, and gutters", icon: "🧱" },
            { text: "Debris tangled near power lines", icon: "⚡" },
          ],
        },
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
        whyChooseUs: [
          "Emergency 24/7 Cleanup Teams",
          "Heavy Equipment & Trained Crew",
          "Full Service: Removal + Disposal + Restoration",
          "Serving Central Florida, Tampa Bay & South Florida",
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
          iconRow: [
            { icon: "⚡", text: "Emergency" },
            { icon: "🏚️", text: "Roof Repair" },
            { icon: "💧", text: "Water Control" },
            { icon: "🛠️", text: "Restoration" },
          ],
        },
        process: {
          title: "4-Step Emergency Repair Process",
          steps: [
            {
              title: "Immediate Roof Tarping & Board-Up",
              text: "Protect from rain, wind & further damage.",
              icon: "fa-solid fa-umbrella",
            },
            {
              title: "Water Extraction & Drying",
              text: "Industrial pumps & dehumidifiers stop mold and structural weakening.",
              icon: "fa-solid fa-water",
            },
            {
              title: "Debris & Hazard Cleanup",
              text: "Safe removal of fallen trees, branches, and shattered materials.",
              icon: "fa-solid fa-truck",
            },
            {
              title: "Structural & Interior Repairs",
              text: "Restore roofing, walls, insulation & finishes.",
              icon: "fa-solid fa-hammer",
            },
          ],
        },
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
        whyActingFast: {
          title: "Why Acting Fast Matters",
          points: [
            "Prevents secondary damage (mold, leaks, structural rot)",
            "Ensures insurance claim success with proper documentation",
            "Keeps families & businesses safe from hazards",
          ],
        },
        stormDamages: {
          title: "Common Emergency Storm Damages We Handle",
          items: [
            {
              text: "Collapsed or Damaged Roofs – From wind uplift or falling trees",
              icon: "🏚️",
            },
            {
              text: "Water Intrusion – Flooding, leaks & soaked interiors",
              icon: "💧",
            },
            {
              text: "Tree & Debris Impact – Structural risks from branches and projectiles",
              icon: "🌳",
            },
            {
              text: "Power & Utility Hazards – Downed lines or damaged electrical systems",
              icon: "🔌",
            },
          ],
        },
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
        whyChooseUs: [
          "24/7 emergency response across Florida",
          "Roof tarping, board-up & water control",
          "Debris removal & structural stabilization",
          "Local teams for fast dispatch",
          "Insurance claim assistance & documentation",
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
          iconRow: [
            { icon: "💧", text: "Water Extraction" },
            { icon: "🌬️", text: "Drying" },
            { icon: "🛡️", text: "Mold Prevention" },
            { icon: "🏠", text: "Property Protection" },
          ],
        },
        whyEssential: {
          title: "Why Water Mitigation Is Essential",
          steps: [
            "Mold can begin growing in 24–48 hours",
            "Water seeps into drywall, flooring, insulation → hidden long-term damage",
            "Early drying = lower costs & smaller insurance claims",
          ],
        },
        process: {
          title: "Our Water Mitigation Process",
          steps: [
            {
              title: "Emergency Inspection & Moisture Mapping",
              text: "Detect visible + hidden water.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Rapid Water Extraction",
              text: "Pumps & wet vacs remove standing water fast.",
              icon: "fa-solid fa-water",
            },
            {
              title: "Industrial Drying & Dehumidification",
              text: "Stabilize humidity with pro gear.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Antimicrobial Treatment",
              text: "Stop mold & bacteria before they spread.",
              icon: "fa-solid fa-spray-can-sparkles",
            },
            {
              title: "Ongoing Monitoring",
              text: "Daily checks until property is fully dry.",
              icon: "fa-solid fa-gauge",
            },
          ],
        },
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
        highlights: [
          "Emergency water extraction & removal",
          "Industrial drying & dehumidification",
          "Moisture mapping & monitoring",
          "Antimicrobial treatments",
          "Mold prevention protocols",
        ],
        risks: [
          "Structural weakening of wood, drywall & flooring",
          "Mold growth in hidden spaces",
          "Electrical hazards from water intrusion",
          "Higher insurance costs due to larger claims",
        ],
        floridaScenarios: [
          "Hurricane flooding in Miami & Tampa",
          "Burst pipes in Orlando condos",
          "Roof leaks during South Florida storms",
        ],
        whyChooseUs: [
          "24/7 Rapid Response Across Florida",
          "Focus on limiting loss, not just cleanup",
          "Professional industrial-grade drying equipment",
          "We act as the bridge between emergency & restoration",
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
          iconRow: [
            { icon: "🛡️", text: "Secure" },
            { icon: "🧹", text: "Contain" },
            { icon: "🌬️", text: "Ventilate" },
            { icon: "🏠", text: "Stabilize" },
          ],
        },
        whyEssential: {
          title: "Why Fire Mitigation Is Essential",
          steps: [
            "Soot spreads quickly, coating walls, ceilings, and belongings",
            "Smoke odor penetrates fabrics, furniture & HVAC systems",
            "Weakened structures (roofs, walls, framing) need stabilization",
            "Board-up & tarping prevent theft, weather damage & liability risks",
          ],
        },
        process: {
          title: "Our Fire Mitigation Process",
          steps: [
            {
              title: "Emergency Board-Up & Tarping",
              text: "Secure windows, doors, roofs.",
              icon: "fa-solid fa-warehouse",
            },
            {
              title: "Smoke & Soot Containment",
              text: "Isolate affected areas to stop spread.",
              icon: "fa-solid fa-vector-square",
            },
            {
              title: "Ventilation & Air Scrubbing",
              text: "HEPA filters + negative air machines.",
              icon: "fa-solid fa-wind",
            },
            {
              title: "Protection of Belongings",
              text: "Salvage & store safe items.",
              icon: "fa-solid fa-boxes-stacked",
            },
            {
              title: "Moisture Control from Firefighting",
              text: "Drying to prevent mold.",
              icon: "fa-solid fa-droplet",
            },
          ],
        },
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
        highlights: [
          "Emergency board-up & roof tarping",
          "Smoke & soot containment",
          "HVAC protection & cleaning",
          "Salvage & content protection",
          "Moisture drying after firefighting",
        ],
        risks: [
          "Permanent smoke odor in walls, HVAC & fabrics",
          "Corrosion from soot on appliances & metal surfaces",
          "Structural collapse risks if framing isn't secured",
          "Higher restoration costs if damage spreads unchecked",
        ],
        floridaScenarios: [
          "Kitchen fires in Orlando & Miami condos",
          "Electrical fires in aging buildings",
          "Hurricane-related fires from downed power lines",
          "Wildfire smoke intrusion in Central & South Florida",
        ],
        whyChooseUs: [
          "24/7 Emergency Response Across Florida",
          "Expert board-up, tarping & security solutions",
          "Advanced smoke & odor containment systems",
          "We protect what restoration will rebuild",
          "Trusted by homeowners & businesses statewide",
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
          iconRow: [
            { icon: "🛡️", text: "Contain" },
            { icon: "💧", text: "Control Moisture" },
            { icon: "🌬️", text: "Air Quality" },
            { icon: "🫁", text: "Health Protection" },
          ],
        },
        whyEssential: {
          title: "Why Mold Mitigation Is Essential",
          steps: [
            "Mold colonies can grow within 24–48 hours after moisture exposure",
            "Airborne spores contaminate HVAC systems and circulate through the property",
            "Health risks: allergies, asthma triggers, respiratory issues",
            "Early containment makes remediation faster, safer, and less costly",
          ],
        },
        process: {
          title: "Our Mold Mitigation Process",
          steps: [
            {
              title: "Inspection & Moisture Assessment",
              text: "Detect leaks, water damage & humidity.",
              icon: "fa-solid fa-magnifying-glass",
            },
            {
              title: "Containment of Affected Areas",
              text: "Plastic barriers + negative air pressure.",
              icon: "fa-solid fa-vector-square",
            },
            {
              title: "HEPA Air Filtration",
              text: "Capture airborne spores with high-efficiency systems.",
              icon: "fa-solid fa-fan",
            },
            {
              title: "Antimicrobial & Preventive Treatment",
              text: "Apply eco-safe treatments to surfaces.",
              icon: "fa-solid fa-spray-can-sparkles",
            },
            {
              title: "Moisture Control & Monitoring",
              text: "Industrial dehumidifiers + continuous checks.",
              icon: "fa-solid fa-gauge",
            },
          ],
        },
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
        highlights: [
          "Mold containment & sealing",
          "HEPA air filtration & cleaning",
          "Antimicrobial surface treatment",
          "Moisture & humidity control",
          "Hidden mold inspection",
        ],
        risks: [
          "Rapid spread into walls, ceilings, crawlspaces",
          "Poor indoor air quality → chronic health problems",
          "Higher remediation costs if contamination grows unchecked",
          "Long-term structural damage from mold exposure",
        ],
        floridaScenarios: [
          "Subtropical humidity in South Florida accelerates mold growth",
          "Hurricane flooding leaves hidden water → mold hotspots",
          "Roof leaks in Central Florida create perfect spore conditions",
          "AC condensation leads to hidden HVAC mold contamination",
        ],
        whyChooseUs: [
          "Rapid response across Florida",
          "Containment-first approach to stop mold spread",
          "HEPA filtration + antimicrobial treatments",
          "Moisture control for lasting protection",
          "Protects health until remediation is complete",
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
          iconRow: [
            { icon: "🛡️", text: "Secure" },
            { icon: "☔", text: "Waterproof" },
            { icon: "🧹", text: "Debris Removal" },
            { icon: "🏠", text: "Stabilize" },
          ],
        },
        whyEssential: {
          title: "Why Storm Mitigation Is Essential",
          steps: [
            "Roof tarping & board-up prevent water intrusion after shingles/windows break",
            "Debris removal keeps properties safe & accessible",
            "Moisture control stops mold growth in Florida's humid climate",
            "Property security reduces theft & liability after destruction",
          ],
        },
        process: {
          title: "Our Storm Mitigation Process",
          steps: [
            {
              title: "Emergency Board-Up & Roof Tarping",
              text: "Seal windows, doors & roofs against further water.",
              icon: "fa-solid fa-umbrella",
            },
            {
              title: "Debris & Tree Removal",
              text: "Clear dangerous debris, fallen trees, and damaged structures.",
              icon: "fa-solid fa-truck",
            },
            {
              title: "Water Intrusion Control",
              text: "Extract standing water, dry interiors, apply antimicrobials.",
              icon: "fa-solid fa-water",
            },
            {
              title: "Structural Stabilization",
              text: "Shore up walls, ceilings, and framing until restoration starts.",
              icon: "fa-solid fa-helmet-safety",
            },
          ],
        },
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
        highlights: [
          "Emergency roof tarping",
          "Window & door board-up",
          "Fallen tree & debris removal",
          "Water extraction & mold prevention",
          "Temporary structural stabilization",
        ],
        risks: [
          "Severe water damage from rain entering unprotected areas",
          "Mold growth within 24–48 hours in Florida humidity",
          "Structural collapse if weakened framing isn't supported",
          "Higher repair costs from prolonged exposure",
        ],
        floridaScenarios: [
          "Hurricanes & tropical storms → Treasure Coast & South Florida",
          "Tornado-related roof damage → Central Florida",
          "Storm surges & heavy rains → Tampa Bay & Gulf Coast",
          "Fallen trees on homes → Florida suburban neighborhoods",
        ],
        whyChooseUs: [
          "24/7 emergency storm response across Florida",
          "Roof tarping, board-up & water control",
          "Debris removal & structural stabilization",
          "Local teams for fast dispatch",
          "Insurance claim assistance & documentation",
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
