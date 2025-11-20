// src/data/restoration-content.js
// Centralized content for all restoration templates
// This file contains all the content for water, fire, mold, storm, and mitigation services

/**
 * Water Damage Content
 * Includes: water-damage, flood-damage, leak-repair, basement-flooding, ceiling-water-damage, emergency-water-removal
 */
export const waterContent = {
    "water-damage": {
        hero: {
            title: "Water Damage? We Remove, Dry & Restore",
            description: "Fast water extraction, moisture control, and structural drying to prevent mold and further damage. Serving Orlando, Miami, Tampa & beyond.",
            cta: "Free Water Damage Assessment",
            bgImage: "/images/hero-water.webp",
        },
        services: [
            {
                icon: "fas fa-water",
                title: "Flood Damage",
                description: "Emergency flood cleanup and water extraction",
                slug: "flood-damage",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-wrench",
                title: "Leak Repair",
                description: "Fix burst pipes and hidden leaks",
                slug: "leak-repair",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-home",
                title: "Basement Flooding",
                description: "Basement water removal and drying",
                slug: "basement-flooding",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-cloud-rain",
                title: "Ceiling Water Damage",
                description: "Ceiling leak repair and restoration",
                slug: "ceiling-water-damage",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-tint",
                title: "Emergency Water Removal",
                description: "24/7 rapid water extraction",
                slug: "emergency-water-removal",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/emergency-water-removal",
            },
        ],
        faqs: [
            {
                q: "What is water damage restoration?",
                a: "Water damage restoration is the process of cleaning, drying, and repairing property after water intrusion from floods, leaks, or storms. Our certified technicians use industrial-grade equipment to extract water, dry affected areas, and prevent secondary damage like mold growth.",
            },
            {
                q: "How quickly should water damage restoration start?",
                a: "Ideally within 24 hours. Early extraction and drying reduce structural damage and the risk of mold growth. The longer water sits, the more expensive and extensive the restoration becomes.",
            },
            {
                q: "What does the water damage process include?",
                a: "Our process includes: emergency inspection & moisture mapping, water extraction, cleaning & sanitizing, odor control, repairs, and finish restoration. We follow IICRC standards throughout the entire process.",
            },
            {
                q: "Do you handle floods, leaks, and burst pipes?",
                a: "Yes. We respond to storm flooding, appliance failures, roof leaks, slab leaks, and burst supply lines. Our 24/7 emergency response team is equipped to handle any water damage scenario.",
            },
            {
                q: "Will my insurance cover water damage restoration?",
                a: "Most homeowner's policies cover sudden water damage from burst pipes or appliance failures. Flood damage typically requires separate flood insurance. We work directly with insurance companies and help with claims documentation.",
            },
            {
                q: "How long does the water damage restoration process take?",
                a: "The timeline varies depending on the extent of damage. Minor water damage can be resolved in 2-3 days, while major flooding may take 1-2 weeks. We provide detailed timelines during our initial assessment.",
            },
        ],
        steps: [
            {
                title: "Emergency Call",
                text: "Free on-site inspection & moisture assessment",
                icon: "fas fa-phone",
            },
            {
                title: "Water Extraction",
                text: "Pumps & vacuums remove standing water",
                icon: "fas fa-tint",
            },
            {
                title: "Drying & Dehumidifying",
                text: "Air movers, dehumidifiers & moisture readings",
                icon: "fas fa-wind",
            },
            {
                title: "Cleaning & Repairs",
                text: "Sanitize, deodorize, and restore materials",
                icon: "fas fa-tools",
            },
        ],
    },

    "flood-damage": {
        hero: {
            title: "Flood Damage? We Extract Water & Restore Homes Across Florida",
            description: "Need flood cleanup fast? Our Florida teams provide 24/7 flood damage cleanup, including water extraction, drying, and mold prevention. We stop water damage before it spreads, protect your home's structure, and restore safety.",
            cta: "Start Flood Extraction Now",
            bgImage: "/images/waterDamage.webp",
        },
        services: [
            {
                icon: "fas fa-tint",
                title: "Emergency Water Extraction",
                description: "Pumps and vacuums remove large volumes of water quickly.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/emergency-water-removal",
            },
            {
                icon: "fas fa-wind",
                title: "Industrial Drying",
                description: "Air movers and dehumidifiers dry walls, floors, and cavities.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-shield-alt",
                title: "Mold Prevention",
                description: "Antimicrobial treatments protect against bacteria and mold.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-tools",
                title: "Structural Stabilization",
                description: "Support for weakened ceilings, floors, and framing.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-hammer",
                title: "Property Restoration",
                description: "Complete restoration of damaged areas to pre-loss condition.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/flood-damage",
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
        ],
        steps: [
            {
                title: "Inspection & Moisture Mapping",
                text: "Identify visible and hidden flood damage",
                icon: "fas fa-search",
            },
            {
                title: "Rapid Water Extraction",
                text: "Remove standing floodwater using high-capacity pumps",
                icon: "fas fa-tint",
            },
            {
                title: "Drying & Dehumidification",
                text: "Stabilize humidity with industrial air movers",
                icon: "fas fa-wind",
            },
            {
                title: "Antimicrobial Treatment",
                text: "Protect walls, flooring, and furniture against mold",
                icon: "fas fa-shield-alt",
            },
            {
                title: "Ongoing Monitoring",
                text: "Daily moisture checks until drying is complete",
                icon: "fas fa-chart-line",
            },
        ],
    },

    "leak-repair": {
        hero: {
            title: "Stop Leaks Before They Cause Bigger Damage",
            description: "Whether it's a burst pipe, ceiling leak, or hidden water damage inside your walls, our Florida leak repair specialists act fast to protect your home or business. With 24/7 emergency response and advanced detection tools, we fix leaks before they become costly disasters.",
            cta: "Fix My Leak Now",
            bgImage: "/images/waterDamage.webp",
        },
        services: [
            {
                icon: "fas fa-cloud-rain",
                title: "Ceiling Leak Repair",
                description: "Repair water-damaged ceilings, replace drywall & insulation.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-wrench",
                title: "Pipe Leak Repair",
                description: "Fix burst, corroded, or leaking pipes to restore flow & safety.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-search",
                title: "Hidden Leak Detection",
                description: "Advanced tools locate leaks inside walls, floors, or basements.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-wind",
                title: "Drying & Dehumidification",
                description: "Complete moisture removal from affected areas.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-shield-alt",
                title: "Preventive Treatments",
                description: "Antimicrobial applications to prevent mold growth.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/leak-repair",
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
        steps: [
            {
                title: "Inspection & Leak Detection",
                text: "Thermal imaging & moisture meters find the source",
                icon: "fas fa-search",
            },
            {
                title: "Emergency Containment",
                text: "Stop water flow, prevent further damage",
                icon: "fas fa-stop",
            },
            {
                title: "Drying & Dehumidification",
                text: "Industrial air movers, dehumidifiers",
                icon: "fas fa-wind",
            },
            {
                title: "Repair & Restoration",
                text: "Pipes, drywall, ceilings, and flooring fixed",
                icon: "fas fa-tools",
            },
            {
                title: "Mold Prevention & Quality Check",
                text: "Antimicrobial treatment + testing",
                icon: "fas fa-check-circle",
            },
        ],
    },

    "basement-flooding": {
        hero: {
            title: "Basement Flooding? We Pump Out Water & Protect Your Foundation",
            description: "Is your basement underwater? Our Florida team provides 24/7 basement flooding cleanup, including pump-out, cavity drying, and mold prevention. We remove water fast, protect your foundation, and restore your property safely.",
            cta: "Protect Against Mold",
            bgImage: "/images/waterDamage.webp",
        },
        services: [
            {
                icon: "fas fa-pump-soap",
                title: "Basement Pump-Out",
                description: "Rapid water evacuation with high-volume pumps.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-wind",
                title: "Structural Drying",
                description: "Dry walls, subfloors, and insulation to protect the foundation.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-shield-alt",
                title: "Mold Prevention",
                description: "Apply treatments and humidity control to stop mold growth.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-chart-line",
                title: "Moisture Monitoring",
                description: "Track safe drying progress with daily readings.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-home",
                title: "Foundation Restoration",
                description: "Repair and restore basement structure and finishes.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/basement-flooding",
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
        ],
        steps: [
            {
                title: "Safety & Assessment",
                text: "Check for electrical hazards and structural risks before entry",
                icon: "fas fa-hard-hat",
            },
            {
                title: "Pump-Out & Water Removal",
                text: "High-capacity pumps quickly clear standing basement water",
                icon: "fas fa-pump-soap",
            },
            {
                title: "Cavity Drying",
                text: "Industrial dehumidifiers and air movers dry walls, flooring, and crawlspaces",
                icon: "fas fa-wind",
            },
            {
                title: "Humidity Control",
                text: "Stabilize indoor moisture levels to safe conditions",
                icon: "fas fa-thermometer-half",
            },
            {
                title: "Antimicrobial Treatment",
                text: "Apply disinfectants to prevent mold and bacteria growth",
                icon: "fas fa-spray-can",
            },
        ],
    },

    "ceiling-water-damage": {
        hero: {
            title: "Ceiling Leak or Water Stains? We Fix It Fast.",
            description: "From small leaks to major ceiling collapses, our Florida ceiling repair teams restore drywall, insulation, and finishes—stopping hidden mold before it spreads. With 24/7 emergency response and licensed specialists, we protect your home or business from water damage and ceiling collapse.",
            cta: "Schedule Ceiling Repair",
            bgImage: "/images/waterDamage.webp",
        },
        services: [
            {
                icon: "fas fa-wrench",
                title: "Leak Source Repair",
                description: "Fix pipes, roof leaks, or AC condensation.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-hammer",
                title: "Drywall & Ceiling Replacement",
                description: "Remove & replace water-damaged sections.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-paint-roller",
                title: "Stain & Finish Restoration",
                description: "Prime, paint, and re-texture surfaces.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-virus",
                title: "Mold Remediation",
                description: "Long-term protection against hidden growth.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-wind",
                title: "Advanced Drying Systems",
                description: "Industrial equipment for complete moisture removal.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
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
        steps: [
            {
                title: "Inspection & Moisture Detection",
                text: "Thermal cameras to locate leaks",
                icon: "fas fa-camera",
            },
            {
                title: "Containment & Drying",
                text: "Industrial dehumidifiers & air movers",
                icon: "fas fa-wind",
            },
            {
                title: "Drywall & Insulation Replacement",
                text: "Remove damaged materials",
                icon: "fas fa-hammer",
            },
            {
                title: "Mold Prevention",
                text: "Antimicrobial treatments applied",
                icon: "fas fa-shield-alt",
            },
            {
                title: "Finish Restoration",
                text: "Paint, texture & restore ceiling",
                icon: "fas fa-paint-roller",
            },
        ],
    },

    "emergency-water-removal": {
        hero: {
            title: "Rapid Emergency Water Removal When Every Minute Counts",
            description: "Flooding, burst pipes, or storm intrusion can overwhelm your home or business in minutes. Our Florida emergency water removal teams respond 24/7 with industrial pumps, vacuums, and drying systems—eliminating standing water before it spreads.",
            cta: "Request Water Removal Now",
            bgImage: "/images/waterDamage.webp",
        },
        services: [
            {
                icon: "fas fa-home",
                title: "Flooded Living Rooms & Basements",
                description: "Water extraction before it seeps into walls, flooring, and insulation.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-wrench",
                title: "Burst Pipes or Plumbing Failures",
                description: "Rapid mitigation to stop spreading leaks.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-cloud-bolt",
                title: "Storm or Hurricane Flooding",
                description: "High-capacity pumps handle heavy stormwater intrusion.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-building",
                title: "Commercial Water Emergencies",
                description: "Fast removal to minimize downtime and inventory loss.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/emergency-water-removal",
            },
            {
                icon: "fas fa-phone",
                title: "24/7 Emergency Response",
                description: "Immediate response to prevent further damage.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/emergency-water-removal",
            },
        ],
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
        steps: [
            {
                title: "Inspection & Safety Check",
                text: "Identify hazards, source of water",
                icon: "fas fa-hard-hat",
            },
            {
                title: "Water Extraction",
                text: "Industrial pumps + vacuums remove standing water",
                icon: "fas fa-tint",
            },
            {
                title: "Drying & Dehumidification",
                text: "Air movers + dehumidifiers stabilize humidity",
                icon: "fas fa-wind",
            },
            {
                title: "Antimicrobial Treatment",
                text: "Stop mold & bacteria growth",
                icon: "fas fa-spray-can",
            },
            {
                title: "Damage Assessment & Restoration Plan",
                text: "Full documentation for insurance",
                icon: "fas fa-clipboard-list",
            },
        ],
    },

};

/**
 * Fire Damage Content
 * Includes: fire-damage, smoke-damage, soot-cleanup, fire-damage-repair, emergency-fire-response
 */
export const fireContent = {
    "fire-damage": {
        hero: {
            title: "Fire Damage Restoration Services in Florida",
            description: "We provide 24/7 fire and smoke damage restoration across Florida. From emergency board-up to soot removal and full repairs, our team restores homes and businesses to safe, pre-loss condition.",
            cta: "Clean Up After Fire",
            bgImage: "/images/hero-fire.webp"
        },
        services: [
            { icon: "fas fa-smog", title: "Smoke Damage", description: "Professional smoke removal and odor elimination", slug: "smoke-damage", image: "/images/smoke-damage.webp", link: "/restoration/fire-damage/smoke-damage" },
            { icon: "fas fa-broom", title: "Soot Cleanup", description: "Safe soot removal from all surfaces", slug: "soot-cleanup", image: "/images/soot-cleanup.webp", link: "/restoration/fire-damage/soot-cleanup" },
            { icon: "fas fa-hammer", title: "Fire Damage Repair", description: "Complete fire damage restoration", slug: "fire-damage-repair", image: "/images/fire-damage-repair.webp", link: "/restoration/fire-damage/fire-damage-repair" },
            { icon: "fas fa-fire-extinguisher", title: "Emergency Fire Response", description: "24/7 emergency fire response", slug: "emergency-fire-response", image: "/images/emergency-fire-response.webp", link: "/restoration/fire-damage/emergency-fire-response" }
        ],
        faqs: [
            { q: "How to restore fire damage?", a: "Fire damage restoration involves soot cleanup, smoke odor removal, and structural repairs. Professionals handle debris removal, deep cleaning, and rebuilding to return the property to pre-loss condition." },
            { q: "What is the meaning of fire damage restoration?", a: "It's the process of cleaning, repairing, and restoring a property after fire or smoke damage, ensuring safety and habitability." },
            { q: "How to remove soot and smoke damage?", a: "Professionals use HEPA vacuums, chemical sponges, and deodorizing treatments to safely remove soot and smoke particles from surfaces and air systems." },
            { q: "Can you paint over smoke or soot?", a: "Painting over soot is not recommended. Proper cleaning and sealing are required first to prevent stains and odors from returning." },
            { q: "How long does fire damage restoration take?", a: "Fire damage restoration typically takes 1-2 weeks for minor damage, and 4-6 weeks for extensive damage. Timeline depends on damage severity, size of affected area, and insurance approval process." },
            { q: "What should I do immediately after a house fire?", a: "Contact your insurance company, secure the property with emergency board-up services, avoid entering unsafe areas, and call professional fire restoration specialists to prevent further damage." }
        ],
        steps: [
            { title: "Emergency Response & Board-Up", text: "Secure the property immediately after the fire", icon: "fas fa-shield-alt" },
            { title: "Soot & Smoke Removal", text: "Clean affected areas with advanced tools and techniques", icon: "fas fa-broom" },
            { title: "Odor Treatment", text: "Deodorize air, walls, and belongings for a safe living space", icon: "fas fa-wind" },
            { title: "Repairs & Restoration", text: "Rebuild damaged structures and restore finishes", icon: "fas fa-hammer" }
        ]
    },
    "smoke-damage": {
        hero: {
            title: "Breathe Easy Again After Smoke Damage",
            description: "When smoke invades your property, the damage goes beyond stains and odors—it impacts your health and safety. Our certified Florida restoration teams provide 24/7 smoke cleanup, soot removal, odor elimination, and surface repairs.",
            cta: "Request Smoke Damage Help Now",
            bgImage: "/images/fire-damage.webp"
        },
        services: [
            { icon: "fas fa-broom", title: "Soot & Residue Removal", description: "Remove acidic soot before it corrodes surfaces", image: "/images/soot-cleanup.webp", link: "/restoration/fire-damage/soot-cleanup" },
            { icon: "fas fa-wind", title: "Odor Elimination", description: "Advanced deodorization with ozone & hydroxyl machines", image: "/images/smoke-damage.webp", link: "/restoration/fire-damage/odor-elimination" },
            { icon: "fas fa-couch", title: "Furniture & Fabric Restoration", description: "Upholstery, carpets & curtains saved from smoke absorption", image: "/images/fire-damage.webp", link: "/restoration/fire-damage/furniture-restoration" },
            { icon: "fas fa-building", title: "Structural Cleaning", description: "Ceilings, walls & HVAC fully decontaminated", image: "/images/fire-damage-repair.webp", link: "/restoration/fire-damage/structural-cleaning" }
        ],
        faqs: [
            { q: "Can smoke damage be fully removed?", a: "Yes. With professional cleaning and deodorization, odors and particles can be eliminated." },
            { q: "How long does it take to clean smoke damage?", a: "Minor jobs: 1–2 days. Severe smoke with deep odors: up to a week." },
            { q: "Is smoke damage dangerous?", a: "Yes. Smoke contains toxic particles that may trigger allergies, asthma, and respiratory issues." },
            { q: "Does insurance cover smoke damage?", a: "Most Florida homeowners' policies cover it. We provide full documentation for claims." }
        ],
        steps: [
            { title: "Assessment & Air Quality Testing", text: "Identify contamination and affected zones", icon: "fas fa-search" },
            { title: "Emergency Soot & Debris Removal", text: "Prevent permanent staining and corrosion", icon: "fas fa-broom" },
            { title: "Odor Neutralization", text: "HEPA filters, ozone & hydroxyl treatments", icon: "fas fa-wind" },
            { title: "Deep Cleaning & Sanitization", text: "Walls, furniture, fabrics fully restored", icon: "fas fa-broom" },
            { title: "Final Repairs & Quality Check", text: "Structural fixes + guaranteed clean air", icon: "fas fa-check-circle" }
        ]
    },
    "soot-cleanup": {
        hero: {
            title: "Soot Cleanup Services Across Florida",
            description: "After a fire, soot and smoke residue can spread fast—coating walls, ceilings, furniture, and even air ducts. Our Florida soot cleanup teams respond 24/7 to remove hazardous particles, neutralize odors, and restore your property safely.",
            cta: "Request Soot Cleanup Now",
            bgImage: "/images/fire-damage.webp"
        },
        services: [
            { icon: "fas fa-paint-roller", title: "Wall & Ceiling Soot Removal", description: "Clean stains safely without damaging paint or drywall.", image: "/images/soot-cleanup.webp", link: "/restoration/fire-damage/wall-ceiling-cleanup" },
            { icon: "fas fa-couch", title: "Furniture & Upholstery Cleanup", description: "Restore salvageable sofas, chairs & fabrics.", image: "/images/fire-damage.webp", link: "/restoration/fire-damage/furniture-restoration" },
            { icon: "fas fa-fan", title: "Air Duct & Vent Cleaning", description: "Remove hidden soot and restore safe indoor air.", image: "/images/fire-damage-repair.webp", link: "/restoration/fire-damage/air-duct-cleaning" },
            { icon: "fas fa-wind", title: "Odor Control Solutions", description: "Advanced ozone & hydroxyl treatments to neutralize smells.", image: "/images/smoke-damage.webp", link: "/restoration/fire-damage/odor-elimination" }
        ],
        faqs: [
            { q: "What is soot cleanup?", a: "It's the removal of smoke residue after a fire, including cleaning, deodorizing, and restoring surfaces." },
            { q: "Can I clean soot myself?", a: "Small spots can be wiped, but DIY often spreads residue. Professionals ensure full and safe removal." },
            { q: "Is soot dangerous?", a: "Yes. Soot contains toxic particles that irritate lungs and corrode surfaces if untreated." },
            { q: "How fast should soot be cleaned?", a: "Immediately. Delays cause permanent staining and higher repair costs." }
        ],
        steps: [
            { title: "Inspection & Assessment", text: "Identify soot-affected areas and damage levels", icon: "fas fa-search" },
            { title: "Containment & Safety", text: "Seal clean areas to stop residue from spreading", icon: "fas fa-shield-alt" },
            { title: "Deep Cleaning & Removal", text: "HEPA vacuums, dry sponges & chemical cleaners for surfaces", icon: "fas fa-broom" },
            { title: "Odor Neutralization", text: "Ozone treatment & thermal fogging to remove smoke smells", icon: "fas fa-fire" },
            { title: "Final Restoration", text: "Refinish walls, ceilings, and furniture back to pre-fire condition", icon: "fas fa-hammer" }
        ]
    },
    "fire-damage-repair": {
        hero: {
            title: "Fire Damage Restoration Services in Florida",
            description: "We provide 24/7 fire and smoke damage restoration across Florida. From emergency board-up to soot removal and full repairs, our team restores homes and businesses to safe, pre-loss condition.",
            cta: "Clean Up After Fire",
            bgImage: "/images/fire-damage.webp"
        },
        services: [
            { icon: "fas fa-smog", title: "Smoke Damage Cleanup", description: "Remove smoke particles and odors from walls, ceilings, and furniture with professional cleaning and deodorizing methods.", image: "/images/smoke-damage.webp", link: "/restoration/fire-damage/smoke-damage" },
            { icon: "fas fa-broom", title: "Soot Removal", description: "Safe cleanup of soot from surfaces, HVAC systems, and personal belongings to prevent long-term damage.", image: "/images/soot-cleanup.webp", link: "/restoration/fire-damage/soot-cleanup" },
            { icon: "fas fa-hammer", title: "Fire Structural Repair", description: "Repair and replace fire-damaged drywall, insulation, flooring, and framing to restore property integrity.", image: "/images/fire-damage-repair.webp", link: "/restoration/fire-damage/structural-repair" },
            { icon: "fas fa-shield-alt", title: "Emergency Board-Up", description: "Secure broken windows, doors, and openings after a fire to prevent further damage or theft.", image: "/images/emergency-fire-response.webp", link: "/restoration/fire-damage/emergency-fire-response" }
        ],
        faqs: [
            { q: "How to restore fire damage?", a: "Fire damage restoration involves soot cleanup, smoke odor removal, and structural repairs. Professionals handle debris removal, deep cleaning, and rebuilding to return the property to pre-loss condition." },
            { q: "What is the meaning of fire damage restoration?", a: "It's the process of cleaning, repairing, and restoring a property after fire or smoke damage, ensuring safety and habitability." },
            { q: "How to remove soot and smoke damage?", a: "Professionals use HEPA vacuums, chemical sponges, and deodorizing treatments to safely remove soot and smoke particles from surfaces and air systems." },
            { q: "Can you paint over smoke or soot?", a: "Painting over soot is not recommended. Proper cleaning and sealing are required first to prevent stains and odors from returning." },
            { q: "How long does fire damage restoration take?", a: "Fire damage restoration typically takes 1-2 weeks for minor damage, and 4-6 weeks for extensive damage. Timeline depends on damage severity, size of affected area, and insurance approval process." },
            { q: "What should I do immediately after a house fire?", a: "Contact your insurance company, secure the property with emergency board-up services, avoid entering unsafe areas, and call professional fire restoration specialists to prevent further damage." }
        ],
        steps: [
            { title: "Emergency Response & Board-Up", text: "Secure the property immediately after the fire", icon: "fas fa-shield-alt" },
            { title: "Soot & Smoke Removal", text: "Clean affected areas with advanced tools and techniques", icon: "fas fa-broom" },
            { title: "Odor Treatment", text: "Deodorize air, walls, and belongings for a safe living space", icon: "fas fa-wind" },
            { title: "Repairs & Restoration", text: "Rebuild damaged structures and restore finishes", icon: "fas fa-hammer" }
        ]
    },
    "emergency-fire-response": {
        hero: {
            title: "24/7 Emergency Fire Response in Florida",
            description: "When fire strikes, every second counts. Our emergency fire response teams provide immediate board-up, smoke containment, and damage assessment to protect your property and begin the restoration process.",
            cta: "Get Emergency Fire Help",
            bgImage: "/images/fire-damage.webp"
        },
        services: [
            { icon: "fas fa-shield-alt", title: "Emergency Board-Up", description: "Immediate securing of windows, doors, and openings.", image: "/images/emergency-fire-response.webp", link: "/restoration/fire-damage/board-up-services" },
            { icon: "fas fa-smog", title: "Smoke Containment", description: "Prevent smoke from spreading to unaffected areas.", image: "/images/smoke-damage.webp", link: "/restoration/fire-damage/smoke-containment" },
            { icon: "fas fa-search", title: "Damage Assessment", description: "Complete evaluation for insurance and restoration planning.", image: "/images/fire-damage-repair.webp", link: "/restoration/fire-damage/damage-assessment" },
            { icon: "fas fa-phone", title: "24/7 Response Team", description: "Always available for immediate emergency response.", image: "/images/emergency-fire-response.webp", link: "/contact" }
        ],
        faqs: [
            { q: "What is emergency fire response?", a: "It's immediate action after a fire to secure the property, assess damage, and begin the restoration process." },
            { q: "How fast can emergency fire teams respond?", a: "Our teams mobilize within hours, available 24/7 across Florida." },
            { q: "What should I do while waiting for emergency fire response?", a: "Stay safe, avoid entering damaged areas, and document damages for your insurance claim." },
            { q: "Does insurance cover emergency fire response?", a: "Yes, most policies cover emergency services like board-up and damage assessment after a fire." }
        ],
        steps: [
            { title: "Emergency Call Response", text: "Immediate dispatch of certified fire response team", icon: "fas fa-phone" },
            { title: "Property Securing", text: "Board-up and tarping to prevent further damage", icon: "fas fa-shield-alt" },
            { title: "Safety Assessment", text: "Evaluate structural integrity and safety hazards", icon: "fas fa-hard-hat" },
            { title: "Restoration Planning", text: "Develop comprehensive restoration plan", icon: "fas fa-clipboard-list" }
        ]
    }
};

/**
 * Mold Remediation Content
 * Includes: mold-remediation, mold-inspection, black-mold-removal, mold-prevention, mold-testing
 */
export const moldContent = {
    "mold-remediation": {
        hero: {
            title: "Florida Certified Mold Testing: Get Expert Insurance Claim Support",
            description: "Our Florida teams provide 24/7 mold remediation to protect your home, office, and health. From black mold testing to full remediation and prevention, we deliver safe, lasting results.",
            cta: "Remove Mold Fast",
            bgImage: "/images/hero-mold.webp"
        },
        services: [
            { icon: "fas fa-magnifying-glass", title: "Mold Inspection", description: "Professional mold testing and inspection", slug: "mold-inspection", image: "/images/mold-inspection.webp", link: "/restoration/mold-remediation/mold-inspection" },
            { icon: "fas fa-broom", title: "Black Mold Removal", description: "Safe removal of toxic black mold", slug: "black-mold-removal", image: "/images/black-mold-removal.webp", link: "/restoration/mold-remediation/black-mold-removal" },
            { icon: "fas fa-shield-alt", title: "Mold Prevention", description: "Prevent future mold growth", slug: "mold-prevention", image: "/images/mold-prevention.webp", link: "/restoration/mold-remediation/mold-prevention" },
            { icon: "fas fa-vial", title: "Mold Testing", description: "Certified mold testing services", slug: "mold-testing", image: "/images/mold-testing.webp", link: "/restoration/mold-remediation/mold-testing" }
        ],
        faqs: [
            { q: "¿Cubre mi seguro de casa el moho en Florida?", a: "Las pólizas estándar tienen limitaciones. El moho debe ser el resultado de un daño cubierto (ej. tubería rota). Por eso, nuestra documentación certificada es crítica para respaldar tu reclamo." },
            { q: "¿Necesito un asesor de moho (Assessor) o un remediador (Remediator) en Florida?", a: "La ley de FL exige que el asesor que hace la prueba sea independiente del remediador. Nosotros somos asesores licenciados por el DBPR para evitar conflictos de interés." },
            { q: "¿Cuánto tiempo tarda en crecer el moho después de una inundación?", a: "El moho puede comenzar a activarse en 24 horas y el crecimiento visible puede ocurrir en 48-72 horas. La acción inmediata es esencial para limitar los daños estructurales y los costos." },
            { q: "¿Qué incluye el servicio de prueba de moho certificado?", a: "Incluye inspección visual, muestreo de aire, análisis de laboratorio, lecturas de humedad y temperatura, y un protocolo de remediación detallado para su seguro." }
        ],
        steps: [
            { title: "Inspection", text: "Identify mold type & source", icon: "fas fa-magnifying-glass" },
            { title: "Containment", text: "Isolate affected areas", icon: "fas fa-hard-hat" },
            { title: "Removal", text: "Safely clean mold colonies", icon: "fas fa-broom" },
            { title: "Air Treatment", text: "HEPA filtration & agents", icon: "fas fa-wind" },
            { title: "Prevention", text: "Moisture control & testing", icon: "fas fa-shield-alt" }
        ]
    },
    "mold-inspection": {
        hero: {
            title: "Get Certified Mold Testing in Florida—Fast, Accurate, Reliable",
            description: "Not sure if mold is hiding in your home or business? Our certified testing identifies mold type & levels—so you know exactly what you're breathing.",
            cta: "Schedule My Mold Test Today",
            bgImage: "/images/mold-damage.webp"
        },
        services: [
            { icon: "fas fa-eye", title: "Visual Inspection", description: "Comprehensive visual examination to identify visible mold and moisture issues.", image: "/images/mold-inspection.webp", link: "/restoration/mold-remediation/mold-inspection" },
            { icon: "fas fa-flask", title: "Testing & Sampling", description: "Air and surface samples are collected for laboratory analysis.", image: "/images/black-mold-removal.webp", link: "/restoration/mold-remediation/mold-testing" },
            { icon: "fas fa-microscope", title: "Lab Analysis", description: "Professional laboratory testing identifies mold types and concentration levels.", image: "/images/mold-prevention.webp", link: "/restoration/mold-remediation/mold-testing" },
            { icon: "fas fa-clipboard-list", title: "Detailed Report", description: "You receive a comprehensive report with findings and recommendations.", image: "/images/mold-testing.webp", link: "/restoration/mold-remediation/mold-inspection" }
        ],
        faqs: [
            { q: "What's the difference between inspection and testing?", a: "Inspection = visual & moisture scan. Testing = lab-confirmed type & spore count." },
            { q: "How accurate are mold tests?", a: "Lab-certified results with 99% accuracy." },
            { q: "Is mold testing required before removal?", a: "Yes—testing confirms the strain & guides safe remediation." },
            { q: "How long until I get results?", a: "Most reports delivered in 24–48 hours." }
        ],
        steps: [
            { title: "Initial Check", text: "Spot visible mold & risks", icon: "fas fa-eye" },
            { title: "Air Sampling", text: "Detect invisible spores", icon: "fas fa-lungs" },
            { title: "Surface Test", text: "Confirm mold type", icon: "fas fa-hand-paper" },
            { title: "Lab Analysis", text: "Identify strain & levels", icon: "fas fa-microscope" },
            { title: "Clear Report", text: "Results & action plan", icon: "fas fa-clipboard-list" }
        ]
    },
    "black-mold-removal": {
        hero: {
            title: "Black Mold is Toxic—We Remove It Safely",
            description: "Our certified Florida teams eliminate dangerous black mold, clean the air, and protect your family's health with proven remediation methods.",
            cta: "Get Black Mold Removal Now",
            bgImage: "/images/mold-damage.webp"
        },
        services: [
            { icon: "fas fa-magnifying-glass", title: "Inspection & Testing", description: "Detect mold spread and measure spore levels.", image: "/images/mold-inspection.webp", link: "/restoration/mold-remediation/mold-inspection" },
            { icon: "fas fa-hard-hat", title: "Containment & Safety Setup", description: "Seal affected areas to prevent further spread.", image: "/images/black-mold-removal.webp", link: "/restoration/mold-remediation/black-mold-removal" },
            { icon: "fas fa-wind", title: "Removal & Air Scrubbing", description: "HEPA filtration, safe disposal, and eco-friendly cleaning.", image: "/images/mold-prevention.webp", link: "/restoration/mold-remediation/black-mold-removal" },
            { icon: "fas fa-droplet", title: "Moisture Control & Prevention", description: "Fix leaks, humidity, and future mold risks.", image: "/images/mold-testing.webp", link: "/restoration/mold-remediation/mold-prevention" }
        ],
        faqs: [
            { q: "How dangerous is black mold?", a: "Black mold can trigger respiratory issues, allergies, and health risks—especially for children, elderly, and those with asthma. Professional removal is strongly recommended." },
            { q: "Can I remove black mold myself?", a: "Not safely. DIY cleaning often spreads spores further—professional removal is essential." },
            { q: "How long does black mold removal take?", a: "Small jobs: 1–2 days. Severe infestations: up to a week." },
            { q: "Does insurance cover black mold removal?", a: "Often yes, if caused by a covered water damage event." }
        ],
        steps: [
            { title: "Inspection", text: "Detect spread & levels", icon: "fas fa-magnifying-glass" },
            { title: "Containment", text: "Seal affected areas", icon: "fas fa-hard-hat" },
            { title: "Removal", text: "HEPA filtration & cleaning", icon: "fas fa-wind" },
            { title: "Prevention", text: "Fix leaks & humidity", icon: "fas fa-droplet" }
        ]
    },
    "mold-prevention": {
        hero: {
            title: "Stop Mold Before It Starts",
            description: "Our certified Florida specialists protect your property with proven prevention strategies—moisture control, air treatment, and protective barriers.",
            cta: "Protect My Home From Mold",
            bgImage: "/images/mold-damage.webp"
        },
        services: [
            { icon: "fas fa-thermometer-half", title: "Moisture Assessment", description: "Identify leaks, humidity levels & hidden risks.", image: "/images/mold-inspection.webp", link: "/restoration/mold-remediation/mold-inspection" },
            { icon: "fas fa-fan", title: "Air Quality & Ventilation Check", description: "Ensure airflow prevents condensation & spores.", image: "/images/black-mold-removal.webp", link: "/restoration/mold-remediation/mold-prevention" },
            { icon: "fas fa-paint-brush", title: "Protective Barriers & Treatments", description: "Apply safe coatings to walls, attics & crawlspaces.", image: "/images/mold-prevention.webp", link: "/restoration/mold-remediation/mold-prevention" },
            { icon: "fas fa-calendar-check", title: "Ongoing Prevention Plan", description: "Recommendations for dehumidifiers, HVAC care & seasonal checks.", image: "/images/mold-testing.webp", link: "/restoration/mold-remediation/mold-prevention" }
        ],
        faqs: [
            { q: "How can I prevent mold in Florida homes?", a: "By controlling humidity, fixing leaks, and applying preventive coatings." },
            { q: "Does mold prevention really work?", a: "Yes. Professional prevention reduces risk of infestation by controlling conditions mold needs." },
            { q: "What's the difference between mold prevention and mold removal?", a: "Prevention stops growth before it starts, while removal handles active infestations." },
            { q: "Is mold prevention covered by insurance?", a: "Usually no—insurance covers damage, not prevention. But prevention lowers long-term costs." }
        ],
        steps: [
            { title: "Assessment", text: "Identify leaks & risks", icon: "fas fa-thermometer-half" },
            { title: "Air Check", text: "Ensure proper airflow", icon: "fas fa-fan" },
            { title: "Protection", text: "Apply safe coatings", icon: "fas fa-paint-brush" },
            { title: "Prevention", text: "Ongoing care plan", icon: "fas fa-calendar-check" }
        ]
    },
    "mold-testing": {
        hero: {
            title: "Know What's in Your Air—Protect Your Health & Property",
            description: "Professional mold testing in Florida. Certified inspectors use advanced air & surface sampling to detect hidden mold. Fast results, clear reports, peace of mind.",
            cta: "Book Certified Mold Testing Now",
            bgImage: "/images/mold-damage.webp"
        },
        services: [
            { icon: "fas fa-lungs", title: "Air Testing", description: "Lab-grade air sampling to detect invisible mold spores.", image: "/images/mold-inspection.webp", link: "/restoration/mold-remediation/mold-testing" },
            { icon: "fas fa-hand-paper", title: "Surface Testing", description: "Swab testing to confirm mold type on surfaces.", image: "/images/black-mold-removal.webp", link: "/restoration/mold-remediation/mold-testing" },
            { icon: "fas fa-file-medical", title: "Lab Reports", description: "Certified laboratory analysis with detailed findings.", image: "/images/mold-prevention.webp", link: "/restoration/mold-remediation/mold-testing" },
            { icon: "fas fa-checklist", title: "Prevention Plan", description: "Recommendations to prevent future mold growth.", image: "/images/mold-testing.webp", link: "/restoration/mold-remediation/mold-prevention" }
        ],
        faqs: [
            { q: "What is mold testing?", a: "Professional air and surface testing to identify mold species and hidden contamination." },
            { q: "How long does mold testing take?", a: "Most homes: 1–2 hours, with a full report the same day." },
            { q: "Does testing include air quality analysis?", a: "Absolutely. We test air and surfaces to identify mold type and levels." },
            { q: "Is testing required before mold removal?", a: "Yes—testing confirms the strain & guides safe remediation." }
        ],
        steps: [
            { title: "Visual Scan", text: "Identify early growth", icon: "fas fa-eye" },
            { title: "Air Testing", text: "Analyze indoor quality", icon: "fas fa-lungs" },
            { title: "Lab Report", text: "Certified results", icon: "fas fa-file-medical" },
            { title: "Action Plan", text: "Fix & prevent guidance", icon: "fas fa-checklist" }
        ]
    }
};

/**
 * Storm Damage Content
 * Includes: storm-damage, hurricane-damage, wind-damage, storm-debris-removal, emergency-storm-repair
 */
export const stormContent = {
    "storm-damage": {
        hero: {
            title: "Storm Damage Restoration Services in Florida",
            description: "Our Florida storm restoration teams provide 24/7 emergency response for roof damage, flooding, and debris removal. From temporary tarps to full repairs, we restore homes and businesses quickly and safely.",
            cta: "Repair Storm Damage Today",
            bgImage: "/images/hero-storm.webp"
        },
        services: [
            { icon: "fas fa-hurricane", title: "Hurricane Damage", description: "Complete hurricane damage restoration", slug: "hurricane-damage", image: "/images/hurricane-damage.webp", link: "/restoration/storm-damage/hurricane-damage" },
            { icon: "fas fa-wind", title: "Wind Damage", description: "Roof and siding wind damage repair", slug: "wind-damage", image: "/images/wind-damage.webp", link: "/restoration/storm-damage/wind-damage" },
            { icon: "fas fa-tree", title: "Storm Debris Removal", description: "Safe cleanup of fallen trees and debris", slug: "storm-debris-removal", image: "/images/storm-debris-removal.webp", link: "/restoration/storm-damage/storm-debris-removal" },
            { icon: "fas fa-ambulance", title: "Emergency Storm Repair", description: "24/7 emergency storm response", slug: "emergency-storm-repair", image: "/images/emergency-storm-repair.webp", link: "/restoration/storm-damage/emergency-storm-repair" }
        ],
        faqs: [
            { q: "What does storm damage mean?", a: "Storm damage refers to harm caused by hurricanes, wind, hail, or flooding—often impacting roofs, siding, windows, and interiors. Immediate repairs help prevent further water intrusion and mold." },
            { q: "How to fix storm damage?", a: "Fixing storm damage starts with securing the property—tarping roofs, boarding windows, and removing debris. Professional restoration teams then repair structural damage and restore the property safely." },
            { q: "What is the most common storm damage?", a: "Roof damage is the most common, including missing shingles, leaks, and broken flashing. Other frequent issues are water intrusion, downed trees, and exterior siding damage." },
            { q: "How to recover from hurricane damage?", a: "Recovery involves emergency response, debris removal, water extraction, and roof repair. Restoration professionals coordinate with insurance adjusters to speed up the rebuilding process." },
            { q: "How much does storm damage restoration cost in Florida?", a: "Costs vary widely based on damage extent, ranging from $2,000 for minor repairs to $50,000+ for major reconstruction. Most homeowner's insurance policies cover storm damage, and we work directly with your insurer to ensure proper coverage." },
            { q: "What should I do immediately after storm damage occurs?", a: "Prioritize safety first—avoid downed power lines and structural hazards. Document damage with photos, contact your insurance company, and call our 24/7 emergency line for immediate protective measures like tarping and boarding." }
        ],
        steps: [
            { title: "Emergency Response", text: "Tarping, boarding, and securing property after storm impact", icon: "fas fa-shield-alt" },
            { title: "Damage Assessment", text: "Roofs, interiors, and structural inspections", icon: "fas fa-search" },
            { title: "Cleanup & Water Extraction", text: "Remove debris, water, and damaged materials", icon: "fas fa-broom" },
            { title: "Repairs & Restoration", text: "Roof replacement, structural repairs, and finish restoration", icon: "fas fa-hammer" }
        ]
    },
    "hurricane-damage": {
        hero: {
            title: "Hurricane Damage? We Restore Homes & Businesses Across Florida",
            description: "From roof leaks to major flooding, our hurricane restoration team provides emergency cleanup, debris removal, and full structural repairs. Available 24/7 across Florida.",
            cta: "Restore After Hurricane Now",
            bgImage: "/images/storm-damage.webp"
        },
        services: [
            { icon: "fas fa-home-damage", title: "Roof Leaks & Collapse Risks", description: "Wind and flying debris cause hidden roof damage.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/hurricane-damage" },
            { icon: "fas fa-water", title: "Flooding & Water Intrusion", description: "Standing water weakens foundations & walls.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/hurricane-damage" },
            { icon: "fas fa-tree", title: "Fallen Trees & Debris", description: "Storm-force winds scatter debris across property.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/storm-debris-removal" },
            { icon: "fas fa-bolt", title: "Power & Utility Hazards", description: "Downed lines and outages create safety risks.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/emergency-storm-repair" }
        ],
        faqs: [
            { q: "What does storm damage mean?", a: "Storm damage refers to harm caused by hurricanes, wind, hail, or flooding—often impacting roofs, siding, windows, and interiors. Immediate repairs help prevent further water intrusion and mold." },
            { q: "How to fix storm damage?", a: "Fixing storm damage starts with securing the property—tarping roofs, boarding windows, and removing debris. Professional restoration teams then repair structural damage and restore the property safely." },
            { q: "What is the most common storm damage?", a: "Roof damage is the most common, including missing shingles, leaks, and broken flashing. Other frequent issues are water intrusion, downed trees, and exterior siding damage." },
            { q: "How to recover from hurricane damage?", a: "Recovery involves emergency response, debris removal, water extraction, and roof repair. Restoration professionals coordinate with insurance adjusters to speed up the rebuilding process." }
        ],
        steps: [
            { title: "Emergency Board-Up & Roof Tarping", text: "Protect interiors from wind & rain", icon: "fas fa-shield-alt" },
            { title: "Water Extraction & Drying", text: "Industrial pumps, dehumidifiers, air movers", icon: "fas fa-water" },
            { title: "Debris & Tree Removal", text: "Clear fallen trees and hazardous debris", icon: "fas fa-tree" },
            { title: "Structural Repair & Roofing", text: "Rebuild roofs, siding, drywall & interiors", icon: "fas fa-hammer" },
            { title: "Insurance Claim Support", text: "Documentation & direct adjuster communication", icon: "fas fa-clipboard" }
        ]
    },
    "wind-damage": {
        hero: {
            title: "Wind Damage? We Repair Roofs, Siding & Structures Across Florida",
            description: "Strong winds can tear shingles, break windows, and damage property. Our 24/7 emergency response team restores safety and structure fast.",
            cta: "Request Wind Damage Repair Now",
            bgImage: "/images/storm-damage.webp"
        },
        services: [
            { icon: "fas fa-home", title: "Roof Shingle Loss", description: "Exposed underlayment leads to leaks.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/wind-damage" },
            { icon: "fas fa-window-maximize", title: "Broken Windows & Glass", description: "Flying debris causes breakage and safety risks.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/wind-damage" },
            { icon: "fas fa-tree", title: "Fallen Branches & Debris", description: "Impacts puncture roofs and siding.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/storm-debris-removal" },
            { icon: "fas fa-tools", title: "Siding & Gutter Damage", description: "High winds loosen or rip away exterior materials.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/wind-damage" }
        ],
        faqs: [
            { q: "What is wind damage restoration?", a: "It's the process of repairing roofs, siding, windows, and interiors after wind-related destruction." },
            { q: "How do you know if your roof has wind damage?", a: "Look for missing shingles, leaks, or visible debris impacts." },
            { q: "Does insurance cover wind damage in Florida?", a: "Yes—most policies include windstorm coverage. We assist with claim documentation." },
            { q: "Can you repair broken windows after wind damage?", a: "Absolutely—we provide emergency board-up and window replacement." }
        ],
        steps: [
            { title: "Emergency Tarping & Board-Up", text: "Prevent rain and debris from entering", icon: "fas fa-tarp" },
            { title: "Roof & Siding Repair", text: "Replace missing shingles, siding, or panels", icon: "fas fa-home" },
            { title: "Debris & Hazard Removal", text: "Clear fallen branches and dangerous objects", icon: "fas fa-tree" },
            { title: "Structural & Interior Repairs", text: "Restore walls, ceilings, and insulation", icon: "fas fa-tools" }
        ]
    },
    "storm-debris-removal": {
        hero: {
            title: "Safe and fast cleanup of fallen trees, branches, and storm debris.",
            description: "Fast storm debris removal in Florida. Safe cleanup of fallen trees, branches, siding & roofing debris. 24/7 emergency crews with heavy equipment.",
            cta: "Request Debris Cleanup Now",
            bgImage: "/images/storm-damage.webp"
        },
        services: [
            { icon: "fas fa-tree", title: "Tree & Branch Removal", description: "Cut, clear, and haul away fallen trees.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/storm-debris-removal" },
            { icon: "fas fa-trash", title: "Debris Collection", description: "Remove scattered siding, shingles, and rubble.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/storm-debris-removal" },
            { icon: "fas fa-recycle", title: "Safe Disposal", description: "Transport debris for eco-friendly disposal.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/storm-debris-removal" },
            { icon: "fas fa-hammer", title: "Site Restoration", description: "Prepare property for repair and safe use.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/storm-debris-removal" }
        ],
        faqs: [
            { q: "What is storm debris removal?", a: "It's the process of clearing and safely disposing of trees, branches, and construction debris left after a storm." },
            { q: "Can you remove large fallen trees?", a: "Yes. Our crews use heavy equipment to cut and haul away even the largest trees." },
            { q: "Do you also haul away construction debris after storms?", a: "Absolutely. We clear siding, roofing, drywall, and other structural debris." },
            { q: "Is storm debris removal covered by insurance?", a: "In most cases, yes. We document everything for smooth claim approval." }
        ],
        steps: [
            { title: "Tree & Branch Removal", text: "Cut, clear, and haul away fallen trees", icon: "fas fa-tree" },
            { title: "Debris Collection", text: "Remove scattered siding, shingles, and rubble", icon: "fas fa-trash" },
            { title: "Safe Disposal", text: "Transport debris for eco-friendly disposal", icon: "fas fa-recycle" },
            { title: "Site Restoration", text: "Prepare property for repair and safe use", icon: "fas fa-hammer" }
        ]
    },
    "emergency-storm-repair": {
        hero: {
            title: "Florida Storm Damage? Get Emergency Repairs 24/7",
            description: "When storms strike, every minute matters. Our emergency crews secure, repair, and restore homes and businesses across Central, Tampa Bay & South Florida.",
            cta: "Request Emergency Storm Repair",
            bgImage: "/images/storm-damage.webp"
        },
        services: [
            { icon: "fas fa-tarp", title: "Immediate Roof Tarping & Board-Up", description: "Protect from rain, wind & further damage.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/emergency-storm-repair" },
            { icon: "fas fa-water", title: "Water Extraction & Drying", description: "Industrial pumps & dehumidifiers stop mold and structural weakening.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/emergency-storm-repair" },
            { icon: "fas fa-tree", title: "Debris & Hazard Cleanup", description: "Safe removal of fallen trees, branches, and shattered materials.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/storm-debris-removal" },
            { icon: "fas fa-tools", title: "Structural & Interior Repairs", description: "Restore roofing, walls, insulation & finishes.", image: "/images/stormDamage.webp", link: "/restoration/storm-damage/emergency-storm-repair" }
        ],
        faqs: [
            { q: "What is emergency storm repair?", a: "It's immediate action after severe storm damage to secure, stabilize, and begin property restoration." },
            { q: "How fast can storm repair teams respond?", a: "Our teams mobilize within hours, available 24/7 across Florida." },
            { q: "Does insurance cover emergency storm repairs?", a: "Yes, most policies cover emergency tarping, water removal, and repairs after a storm." },
            { q: "What should I do while waiting for emergency storm repair?", a: "Stay safe, avoid hazards like live wires, and document damages for your insurance claim." }
        ],
        steps: [
            { title: "Immediate Roof Tarping & Board-Up", text: "Protect from rain, wind & further damage", icon: "fas fa-tarp" },
            { title: "Water Extraction & Drying", text: "Industrial pumps & dehumidifiers stop mold and structural weakening", icon: "fas fa-water" },
            { title: "Debris & Hazard Cleanup", text: "Safe removal of fallen trees, branches, and shattered materials", icon: "fas fa-tree" },
            { title: "Structural & Interior Repairs", text: "Restore roofing, walls, insulation & finishes", icon: "fas fa-tools" }
        ]
    }
};

/**
 * Mitigation Services Content
 * Includes: mitigation-services, water-mitigation, fire-mitigation, mold-mitigation, storm-mitigation
 */
export const mitigationContent = {
    "mitigation-services": {
        hero: {
            title: "Mitigation Services in Florida – Protect Before It Gets Worse",
            description: "Our mitigation services across Florida focus on limiting property loss from water, fire, mold, and storms. By acting fast, we reduce risks, control costs, and keep your home or business safe.",
            cta: "Prevent Further Damage",
            bgImage: "/images/mitigation.webp"
        },
        services: [
            { icon: "fas fa-tint", title: "Water Mitigation", description: "Emergency water damage mitigation", slug: "water-mitigation", image: "/images/water-damage.webp", link: "/restoration/mitigation-services/water-mitigation" },
            { icon: "fas fa-fire-extinguisher", title: "Fire Mitigation", description: "Fire damage containment and mitigation", slug: "fire-mitigation", image: "/images/fire-damage.webp", link: "/restoration/mitigation-services/fire-mitigation" },
            { icon: "fas fa-virus", title: "Mold Mitigation", description: "Mold containment and prevention", slug: "mold-mitigation", image: "/images/mold-damage.webp", link: "/restoration/mitigation-services/mold-mitigation" },
            { icon: "fas fa-cloud-rain", title: "Storm Mitigation", description: "Storm damage prevention and securing", slug: "storm-mitigation", image: "/images/storm-damage.webp", link: "/restoration/mitigation-services/storm-mitigation" }
        ],
        faqs: [
            { q: "What are mitigation services?", a: "Mitigation services limit property damage before full restoration begins. This includes water extraction, mold containment, fire board-ups, and storm tarping to prevent further loss." },
            { q: "What is the difference between mitigation and restoration?", a: "Mitigation reduces the impact of damage immediately—like drying water or boarding windows—while restoration repairs and rebuilds the property to pre-loss condition." },
            { q: "Why is mitigation important?", a: "Acting fast with mitigation saves money, reduces risks, and prevents small problems (like leaks or smoke) from becoming major structural issues." },
            { q: "Does insurance cover mitigation?", a: "Most policies cover mitigation services as part of property loss claims, since they are critical to reducing overall damage." }
        ],
        steps: [
            { title: "Inspection & Risk Assessment", text: "Identify threats from water, fire, mold, or storms", icon: "fas fa-magnifying-glass" },
            { title: "Containment & Control", text: "Limit exposure and stop further property loss", icon: "fas fa-hard-hat" },
            { title: "Moisture & Air Quality Management", text: "Use drying, filtration, and antimicrobial methods", icon: "fas fa-wind" },
            { title: "Temporary Protection", text: "Board-ups, tarps, and barriers until full restoration begins", icon: "fas fa-shield-alt" }
        ]
    },
    "water-mitigation": {
        hero: {
            title: "Water Damage Mitigation Services in Florida",
            description: "Water damage mitigation focuses on stopping the spread of water before it causes permanent structural issues or mold growth. Unlike restoration (which repairs after the damage), mitigation is the first and most critical step to protect your Florida property from further loss.",
            cta: "Start Water Mitigation Now",
            bgImage: "/images/mitigation.webp"
        },
        services: [
            { icon: "fas fa-eye", title: "Emergency Inspection & Moisture Mapping", description: "Detect visible + hidden water.", image: "/images/water-damage.webp", link: "/restoration/mitigation-services/water-mitigation" },
            { icon: "fas fa-pump-soap", title: "Rapid Water Extraction", description: "Pumps & wet vacs remove standing water fast.", image: "/images/emergency-water-removal.webp", link: "/restoration/mitigation-services/water-mitigation" },
            { icon: "fas fa-fan", title: "Industrial Drying & Dehumidification", description: "Stabilize humidity with pro gear.", image: "/images/waterproofing.webp", link: "/restoration/mitigation-services/water-mitigation" },
            { icon: "fas fa-spray-can", title: "Antimicrobial Treatment", description: "Stop mold & bacteria before they spread.", image: "/images/moisture-repair.webp", link: "/restoration/mitigation-services/water-mitigation" }
        ],
        faqs: [
            { q: "What is water damage mitigation vs restoration?", a: "Mitigation = stop further damage (extraction, drying, stabilization). Restoration = repairs & rebuild. Both are essential." },
            { q: "Can I do water mitigation myself?", a: "Minor spills = yes. Floods, roof leaks, or burst pipes = need industrial drying to avoid mold & structural weakening." },
            { q: "How long does water mitigation take?", a: "Usually 1–3 days, depending on severity. Large floods may require longer with daily monitoring." },
            { q: "Does insurance cover water mitigation?", a: "Yes—most policies cover mitigation since it reduces total claim costs. We provide full documentation for insurers." }
        ],
        steps: [
            { title: "Emergency Inspection & Moisture Mapping", text: "Detect visible + hidden water", icon: "fas fa-eye" },
            { title: "Rapid Water Extraction", text: "Pumps & wet vacs remove standing water fast", icon: "fas fa-pump-soap" },
            { title: "Industrial Drying & Dehumidification", text: "Stabilize humidity with pro gear", icon: "fas fa-fan" },
            { title: "Antimicrobial Treatment", text: "Stop mold & bacteria before they spread", icon: "fas fa-spray-can" },
            { title: "Ongoing Monitoring", text: "Daily checks until property is fully dry", icon: "fas fa-chart-line" }
        ]
    },
    "fire-mitigation": {
        hero: {
            title: "Fire Damage Mitigation Services in Florida",
            description: "After a fire, the damage doesn't end when the flames are out. Smoke, soot, and structural instability keep spreading harm. Fire damage mitigation focuses on securing, containing, and stabilizing your property to prevent further loss—while restoration repairs and rebuilds later.",
            cta: "Secure My Property Now",
            bgImage: "/images/mitigation.webp"
        },
        services: [
            { icon: "fas fa-tarp", title: "Emergency Board-Up & Tarping", description: "Seal windows, doors & roofs against further water.", image: "/images/emergency-storm-repair.webp", link: "/restoration/mitigation-services/fire-mitigation" },
            { icon: "fas fa-hard-hat", title: "Smoke & Soot Containment", description: "Isolate affected areas to stop spread.", image: "/images/smoke-damage.webp", link: "/restoration/mitigation-services/fire-mitigation" },
            { icon: "fas fa-wind", title: "Ventilation & Air Scrubbing", description: "HEPA filters + negative air machines.", image: "/images/soot-cleanup.webp", link: "/restoration/mitigation-services/fire-mitigation" },
            { icon: "fas fa-box", title: "Protection of Belongings", description: "Salvage & store safe items.", image: "/images/fire-damage.webp", link: "/restoration/mitigation-services/fire-mitigation" }
        ],
        faqs: [
            { q: "What is fire damage mitigation?", a: "It's the process of securing & stabilizing a property after a fire—board-ups, smoke containment, ventilation." },
            { q: "Why is fire mitigation important?", a: "Without mitigation, soot spreads, odors become permanent, and structures weaken—making restoration harder & costlier." },
            { q: "What's the difference between fire mitigation and restoration?", a: "Mitigation = prevention of further damage. Restoration = rebuild to pre-loss condition." },
            { q: "How fast should fire mitigation start?", a: "Immediately. The first 24 hours are critical." }
        ],
        steps: [
            { title: "Emergency Board-Up & Tarping", text: "Secure windows, doors, roofs", icon: "fas fa-tarp" },
            { title: "Smoke & Soot Containment", text: "Isolate affected areas to stop spread", icon: "fas fa-hard-hat" },
            { title: "Ventilation & Air Scrubbing", text: "HEPA filters + negative air machines", icon: "fas fa-wind" },
            { title: "Protection of Belongings", text: "Salvage & store safe items", icon: "fas fa-box" },
            { title: "Moisture Control from Firefighting", text: "Drying to prevent mold", icon: "fas fa-droplet" }
        ]
    },
    "mold-mitigation": {
        hero: {
            title: "Mold Mitigation Services in Florida",
            description: "Mold mitigation is about prevention and containment—stopping mold from spreading, controlling humidity, and protecting your property until full remediation can safely remove it. Unlike remediation, which eliminates colonies, mitigation is the first line of defense against contamination and health risks.",
            cta: "Stop Mold Spread Today",
            bgImage: "/images/mitigation.webp"
        },
        services: [
            { icon: "fas fa-magnifying-glass", title: "Inspection & Moisture Assessment", description: "Detect leaks, water damage & humidity.", image: "/images/mold-inspection.webp", link: "/restoration/mitigation-services/mold-mitigation" },
            { icon: "fas fa-hard-hat", title: "Containment of Affected Areas", description: "Plastic barriers + negative air pressure.", image: "/images/black-mold-removal.webp", link: "/restoration/mitigation-services/mold-mitigation" },
            { icon: "fas fa-filter", title: "HEPA Air Filtration", description: "Capture airborne spores with high-efficiency systems.", image: "/images/moldDamage.webp", link: "/restoration/mitigation-services/mold-mitigation" },
            { icon: "fas fa-spray-can", title: "Antimicrobial & Preventive Treatment", description: "Apply eco-safe treatments to surfaces.", image: "/images/mold-prevention.webp", link: "/restoration/mitigation-services/mold-mitigation" }
        ],
        faqs: [
            { q: "What is mold mitigation?", a: "It's the process of containing mold, improving air quality, and controlling moisture before remediation begins." },
            { q: "Does mold mitigation remove mold?", a: "No—mitigation prevents spread, but remediation removes colonies permanently." },
            { q: "Why is mold mitigation important?", a: "It protects health, limits property damage, and reduces remediation costs." },
            { q: "How long does mitigation take?", a: "Usually 1–3 days, depending on moisture and area size." }
        ],
        steps: [
            { title: "Inspection & Moisture Assessment", text: "Detect leaks, water damage & humidity", icon: "fas fa-magnifying-glass" },
            { title: "Containment of Affected Areas", text: "Plastic barriers + negative air pressure", icon: "fas fa-hard-hat" },
            { title: "HEPA Air Filtration", text: "Capture airborne spores with high-efficiency systems", icon: "fas fa-filter" },
            { title: "Antimicrobial & Preventive Treatment", text: "Apply eco-safe treatments to surfaces", icon: "fas fa-spray-can" },
            { title: "Moisture Control & Monitoring", text: "Industrial dehumidifiers + continuous checks", icon: "fas fa-chart-line" }
        ]
    },
    "storm-mitigation": {
        hero: {
            title: "Storm Damage Mitigation Services in Florida",
            description: "Storms and hurricanes don't just cause immediate destruction—they leave homes and businesses exposed to secondary damage like flooding, mold, and structural collapse. Storm mitigation focuses on securing and stabilizing your property right after impact.",
            cta: "Request Storm Mitigation Now",
            bgImage: "/images/mitigation.webp"
        },
        services: [
            { icon: "fas fa-tarp", title: "Emergency Board-Up & Roof Tarping", description: "Seal windows, doors & roofs against further water.", image: "/images/emergency-storm-repair.webp", link: "/restoration/mitigation-services/storm-mitigation" },
            { icon: "fas fa-tree", title: "Debris & Tree Removal", description: "Clear dangerous debris, fallen trees, and damaged structures.", image: "/images/storm-debris-removal.webp", link: "/restoration/mitigation-services/storm-mitigation" },
            { icon: "fas fa-water", title: "Water Intrusion Control", description: "Extract standing water, dry interiors, apply antimicrobials.", image: "/images/hurricane-damage.webp", link: "/restoration/mitigation-services/storm-mitigation" },
            { icon: "fas fa-tools", title: "Structural Stabilization", description: "Shore up walls, ceilings, and framing until restoration starts.", image: "/images/stormDamage.webp", link: "/restoration/mitigation-services/storm-mitigation" }
        ],
        faqs: [
            { q: "What is storm damage mitigation?", a: "It's securing & stabilizing a property after a storm—tarping roofs, boarding windows, removing debris." },
            { q: "Why is storm mitigation important?", a: "Without it, rain, debris & humidity cause higher repair costs & safety risks." },
            { q: "What's the difference between storm mitigation & restoration?", a: "Mitigation = prevent more damage. Restoration = repair & rebuild." },
            { q: "How fast should storm mitigation start?", a: "Immediately after the storm clears. The sooner it's secured, the less secondary damage occurs." }
        ],
        steps: [
            { title: "Emergency Board-Up & Roof Tarping", text: "Seal windows, doors & roofs against further water", icon: "fas fa-tarp" },
            { title: "Debris & Tree Removal", text: "Clear dangerous debris, fallen trees, and damaged structures", icon: "fas fa-tree" },
            { title: "Water Intrusion Control", text: "Extract standing water, dry interiors, apply antimicrobials", icon: "fas fa-water" },
            { title: "Structural Stabilization", text: "Shore up walls, ceilings, and framing until restoration starts", icon: "fas fa-tools" }
        ]
    }
};

/**
 * Get restoration content by type and subservice slug
 * @param {string} type - The restoration type (water, fire, mold, storm, mitigation)
 * @param {string} subSlug - The subservice slug
 * @returns {object} Content object with hero, services, faqs, and steps
 */
export function getRestorationContent(type, subSlug) {
    const contentMap = {
        water: waterContent,
        fire: fireContent,
        mold: moldContent,
        storm: stormContent,
        mitigation: mitigationContent,
    };

    const typeContent = contentMap[type];
    if (!typeContent) {
        console.warn(`No content found for type: ${type}`);
        return null;
    }

    // Return specific subservice content or fall back to main service
    return typeContent[subSlug] || typeContent[`${type}-damage`] || Object.values(typeContent)[0];
}
