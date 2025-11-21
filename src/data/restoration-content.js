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
            title: "Water Damage Restoration in {city} | 24/7 Emergency Extraction",
            titleFallback: "Water Damage Restoration in Florida | 24/7 Emergency Extraction",
            description: "Facing a flooded home, burst pipe, or storm damage? Time is critical. Our IICRC-certified Florida restoration team arrives in 60 minutes to extract water, dry your property, and prevent mold growth. We handle everything from leak detection to full structural repairs, billing your insurance directly so you can focus on recovery.",
            cta: "🚨 Call 24/7: (786) 602-2217",
            ctaSecondary: "Get Free Assessment",
            bgImage: "/images/hero-water.webp",
            pricing: {
                min: 2500,
                max: 7500,
                average: 5000,
                unit: "USD",
                disclaimer: "Direct insurance billing available • $0 Upfront for covered claims"
            },
            responseTime: "60 Minutes",
            availability: "24/7/365",
            certifications: ["IICRC Certified", "State Licensed", "Insurance Approved"]
        },
        services: [
            {
                icon: "fas fa-water",
                title: "Flood Damage Cleanup",
                description: "Rapid removal of standing water from storms, hurricanes, or plumbing failures. We use industrial-grade pumps and vacuums to extract thousands of gallons quickly, minimizing structural saturation.",
                slug: "flood-damage",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/flood-damage",
                ctaText: "Get 24/7 Flood Cleanup",
                features: ["Rapid Extraction", "Basement Drying", "Sewage Cleanup"]
            },
            {
                icon: "fas fa-faucet",
                title: "Leak Repair & Detection",
                description: "Hidden leak detection experts using thermal imaging to stop water damage at the source. We find leaks behind walls and under slabs without destruction.",
                slug: "leak-repair",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/leak-repair",
                ctaText: "Detect & Fix Leaks",
                features: ["Non-Invasive Detect", "Plumbing Repair", "Wall Drying"]
            },
            {
                icon: "fas fa-dungeon",
                title: "Basement Flooding",
                description: "Rapid basement water extraction and drying to prevent mold and structural damage. We remove wet drywall/insulation and dehumidify the space.",
                slug: "basement-flooding",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/basement-flooding",
                ctaText: "Dry Your Basement",
                features: ["Sump Pump Failure", "Concrete Drying", "Mold Prevention"]
            },
            {
                icon: "fas fa-cloud-rain",
                title: "Ceiling Water Damage",
                description: "Emergency ceiling leak repair and water stain removal to prevent collapse. We trace the leak and restore the drywall seamlessly.",
                slug: "ceiling-water-damage",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
                ctaText: "Repair Ceiling Damage",
                features: ["Collapse Prevention", "Leak Tracing", "Seamless Patching"]
            },
            {
                icon: "fas fa-pump-soap",
                title: "Emergency Water Removal",
                description: "Immediate 24/7 water extraction for any size emergency. We arrive in 60 minutes to save your floors, carpets, and furniture.",
                slug: "emergency-water-removal",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/emergency-water-removal",
                ctaText: "Start Water Extraction",
                features: ["Truck-Mounted Units", "Carpet Salvage", "24/7 Dispatch"]
            },
        ],
        faqs: [
            {
                q: "How much does water damage restoration cost in Florida?",
                a: "<strong>Average costs range from $2,500 to $7,500</strong> for standard restoration. However, costs vary based on the water category (Clean, Grey, Black) and the extent of the damage. <strong>Good news:</strong> Most homeowners insurance policies cover 'sudden and accidental' water damage. We work directly with your adjuster to maximize your coverage and minimize your out-of-pocket costs."
            },
            {
                q: "What is the difference between water mitigation and restoration?",
                a: "<strong>Mitigation</strong> is the immediate emergency phase: stopping the water, extracting it, and drying the structure to prevent further damage. <strong>Restoration</strong> is the rebuilding phase: repairing drywall, installing new flooring, painting, and returning your home to its pre-loss condition. We handle both seamlessly."
            },
            {
                q: "How long does the drying process take?",
                a: "<strong>Typically 3 to 5 days.</strong> We use industrial air movers and dehumidifiers to pull moisture from deep within materials. We monitor moisture levels daily. If materials are not dried properly, mold can begin to grow within 24-48 hours, so we never rush this critical step."
            },
            {
                q: "What should I do immediately after discovering water damage?",
                a: "1. <strong>Safety First:</strong> Turn off electricity to affected areas if safe.<br>2. <strong>Stop the Water:</strong> Shut off the main water valve.<br>3. <strong>Call a Pro:</strong> Contact us immediately (786-602-2217).<br>4. <strong>Document:</strong> Take photos/videos of the damage for your insurance.<br>5. <strong>Wait:</strong> Do not start major cleanup yourself; insurance needs to see the initial state."
            },
            {
                q: "Does homeowners insurance cover flood damage?",
                a: "<strong>It depends on the source.</strong> Standard policies typically cover internal issues like burst pipes or appliance leaks. They often <em>exclude</em> rising water from outside (storms, overflowing rivers)—that requires a separate Flood Insurance policy. We can help review your policy to understand your coverage."
            },
            {
                q: "Can you save my wood floors after water damage?",
                a: "<strong>Often, yes, if we act fast.</strong> Using specialized injectidry systems, we can sometimes dry hardwood floors from underneath without removing them. However, if the wood has buckled or cupped significantly, replacement might be necessary. Immediate extraction is key."
            },
            {
                q: "Is water damage dangerous to my health?",
                a: "<strong>It can be.</strong> 'Grey water' (from appliances) and 'Black water' (sewage/flood) contain harmful bacteria and pathogens. Even clean water can lead to toxic mold growth if left untreated. Our technicians wear PPE and use antimicrobial treatments to ensure your home is safe."
            }
        ],
        steps: [
            {
                title: "1. Emergency Contact & Dispatch",
                text: "You call, we answer 24/7. We dispatch a certified team to your property within 60 minutes.",
                icon: "fas fa-phone-volume",
            },
            {
                title: "2. Inspection & Assessment",
                text: "We use thermal cameras and moisture meters to map the full extent of the damage, visible and hidden.",
                icon: "fas fa-search-location",
            },
            {
                title: "3. Water Extraction",
                text: "Powerful truck-mounted pumps remove standing water immediately to stop the spread.",
                icon: "fas fa-water",
            },
            {
                title: "4. Drying & Dehumidification",
                text: "Industrial air movers and dehumidifiers run for days to eliminate moisture from walls and floors.",
                icon: "fas fa-wind",
            },
            {
                title: "5. Cleaning & Sanitizing",
                text: "We treat all affected areas with antimicrobials to prevent mold and remove odors.",
                icon: "fas fa-pump-medical",
            },
            {
                title: "6. Restoration & Repairs",
                text: "From drywall patching to new flooring, we rebuild your home to its pre-loss condition.",
                icon: "fas fa-hammer",
            },
        ],
    },

    "flood-damage": {
        hero: {
            title: "Flood Damage Cleanup in {city} | 24/7 Water Extraction",
            titleFallback: "Flood Damage Cleanup in Florida | 24/7 Water Extraction",
            description: "Storm surge? Hurricane flooding? Our Florida flood response team extracts water fast, dries your home, and sanitizes against sewage and bacteria. We protect your property from long-term structural damage and mold.",
            cta: "Start Flood Extraction Now",
            bgImage: "/images/waterDamage.webp",
        },
        education: {
            overview: "Flood damage occurs when water from external sources—such as hurricanes, tropical storms, heavy rainfall, or storm surge—enters your property and causes widespread destruction. Unlike clean water from burst pipes, floodwater is classified as 'Category 3' or 'Black Water,' meaning it contains sewage, bacteria, chemicals, and other hazardous contaminants. In Florida, our proximity to the coast, low elevation, and intense hurricane season make flood damage a serious and recurring threat. Floodwater doesn't just soak carpets and furniture—it saturates drywall, insulation, and structural framing, creating ideal conditions for mold growth within 24-48 hours. The longer water sits, the more it compromises your home's structural integrity, weakens foundations, and destroys personal belongings. Professional flood cleanup involves rapid water extraction, thorough drying, antimicrobial treatment, and complete restoration to prevent long-term health hazards and property devaluation.",
            causes: [
                "Hurricane storm surge and tropical storm flooding overwhelming drainage systems and inundating coastal and low-lying properties",
                "Heavy seasonal rainfall exceeding drainage capacity, causing street flooding that enters homes through doors, windows, and foundation cracks",
                "Overflowing rivers, lakes, and retention ponds during extreme weather events, particularly in flood-prone zones",
                "Sump pump failures or overwhelmed systems during severe storms, allowing groundwater to flood basements and crawl spaces"
            ],
            risks: [
                "Exposure to sewage, bacteria, viruses, and chemical contaminants in floodwater causing serious infections, gastrointestinal illness, and skin diseases",
                "Rapid mold growth within 24-48 hours in wet drywall, insulation, and carpets, releasing toxic spores that trigger respiratory problems and allergies",
                "Structural damage to foundations, floor joists, and wall framing as prolonged water exposure causes wood rot, warping, and compromised load-bearing capacity",
                "Electrical hazards from submerged outlets, appliances, and wiring creating risk of electrocution and fire even after water recedes"
            ],
            urgency: [
                "Floodwater spreads contaminants throughout your home within hours—immediate extraction prevents bacteria from saturating porous materials and causing permanent health hazards",
                "Mold begins colonizing wet surfaces in 24-48 hours; professional drying within this window prevents costly remediation and protects your family's respiratory health",
                "Insurance claims require prompt action and professional documentation—delays can result in claim denials or reduced coverage for secondary damage",
                "Structural deterioration accelerates rapidly as water weakens foundations and framing; fast response saves tens of thousands in reconstruction costs"
            ]
        },
        services: [
            {
                icon: "fas fa-tint",
                title: "Rapid Water Extraction",
                description: "We deploy industrial submersible pumps and truck-mounted vacuums to remove thousands of gallons of standing water in minutes.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/emergency-water-removal",
            },
            {
                icon: "fas fa-wind",
                title: "Structural Drying",
                description: "Floodwater seeps into drywall and studs. Our high-velocity air movers and dehumidifiers pull moisture out to prevent rot.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-shield-alt",
                title: "Sewage & Contaminant Cleanup",
                description: "Floodwater is often 'Black Water' containing bacteria. We sanitize and disinfect all affected surfaces for your safety.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-tools",
                title: "Debris Removal & Demolition",
                description: "We safely remove ruined drywall, carpet, and flooring, preparing your home for reconstruction.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-hammer",
                title: "Complete Restoration",
                description: "From new flooring to drywall installation, we rebuild your home to be better than before.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/flood-damage",
            },
        ],
        faqs: [
            {
                q: "How long does flood cleanup take?",
                a: "<strong>It varies by severity.</strong> Extraction takes 1-2 days. Drying takes 3-5 days. Full repairs can take 1-2 weeks. We provide a clear timeline after our initial inspection.",
            },
            {
                q: "Does insurance cover flood damage?",
                a: "<strong>Typically, no.</strong> Standard homeowners insurance covers <em>internal</em> water damage (pipes). Rising water (floods) requires a separate Flood Policy (NFIP). We help you understand your coverage and document everything."
            },
            {
                q: "Can a flooded home be saved?",
                a: "<strong>Yes, with speed.</strong> The key is immediate extraction. If water sits for days, structural integrity weakens and mold takes over. Our 24/7 response is designed to save your home."
            },
            {
                q: "What is 'Black Water'?",
                a: "<strong>Category 3 Water.</strong> It contains sewage, bacteria, and pathogens. Floodwater is almost always Black Water. It requires professional PPE and specialized sanitization—never try to clean it yourself."
            },
        ],
        steps: [
            {
                title: "1. Safety & Inspection",
                text: "We assess electrical hazards and structural stability before entering.",
                icon: "fas fa-hard-hat",
            },
            {
                title: "2. Water Extraction",
                text: "High-capacity pumps remove standing floodwater immediately.",
                icon: "fas fa-tint",
            },
            {
                title: "3. Muck-Out & Cleaning",
                text: "We remove mud, silt, and damaged materials (carpet, drywall).",
                icon: "fas fa-trash-alt",
            },
            {
                title: "4. Drying & Sanitizing",
                text: "Industrial drying plus antimicrobial treatments to kill bacteria.",
                icon: "fas fa-wind",
            },
            {
                title: "5. Reconstruction",
                text: "We repair and rebuild your home to pre-flood condition.",
                icon: "fas fa-hammer",
            },
        ],
    },

    "leak-repair": {
        hero: {
            title: "Leak Detection & Repair in {city} | Stop Hidden Damage",
            titleFallback: "Leak Detection & Repair in Florida | Stop Hidden Damage",
            description: "A small leak can cause major rot and mold. Our Florida leak detection specialists use thermal imaging and acoustic tech to find hidden leaks behind walls and under slabs without destruction.",
            cta: "Find My Leak Now",
            bgImage: "/images/waterDamage.webp",
        },
        education: {
            overview: "Hidden water leaks are silent destroyers that can cause thousands of dollars in damage before you even notice them. Unlike obvious burst pipes, slow leaks behind walls, under slabs, or in ceilings drip continuously for weeks or months, saturating insulation, rotting wood framing, and creating perfect conditions for toxic mold growth. In Florida's humid climate, even small amounts of hidden moisture accelerate deterioration and mold colonization. Common signs include unexplained increases in water bills, warm spots on floors, musty odors, or the sound of running water when all fixtures are off. Our leak detection specialists use advanced technology—thermal imaging cameras, acoustic listening devices, and moisture meters—to pinpoint the exact location of leaks without destructive exploratory demolition. We then perform surgical repairs, extract any accumulated water, dry affected structures, and restore finishes to prevent long-term damage and protect your property value.",
            causes: [
                "Aging copper or galvanized pipes developing pinhole leaks due to corrosion, hard water minerals, and Florida's acidic soil conditions",
                "Slab leaks from pipes embedded in concrete foundations shifting due to soil settlement, tree root intrusion, or poor initial installation",
                "Hidden roof leaks allowing water to travel along rafters and drip into wall cavities, often far from the actual roof penetration point",
                "Faulty plumbing connections behind walls from improper installation, vibration loosening, or degraded seals in supply lines and drain pipes"
            ],
            risks: [
                "Extensive mold growth in wall cavities and under flooring as hidden moisture creates dark, humid environments perfect for toxic spore colonization",
                "Structural wood rot weakening floor joists, wall studs, and roof rafters, compromising your home's safety and requiring costly framing replacement",
                "Skyrocketing water bills as even small leaks waste hundreds of gallons monthly—a 1/8-inch crack can leak 250 gallons per day",
                "Foundation damage and soil erosion from slab leaks undermining concrete, causing cracks, settling, and expensive structural repairs"
            ],
            urgency: [
                "Hidden leaks worsen exponentially—what starts as a small drip becomes a flood as corrosion expands and water pressure enlarges cracks",
                "Mold begins growing within 48 hours of moisture exposure; early detection prevents health hazards and $10,000+ remediation costs",
                "Insurance companies may deny claims for 'long-term seepage' if leaks aren't addressed promptly—professional detection provides documentation",
                "Every day of delay adds to water waste and structural damage; thermal imaging finds leaks in hours, saving weeks of destructive searching"
            ]
        },
        services: [
            {
                icon: "fas fa-search",
                title: "Non-Invasive Leak Detection",
                description: "We use infrared cameras and acoustic listening devices to locate leaks precisely without tearing up your walls.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-wrench",
                title: "Pipe Repair & Re-Piping",
                description: "From fixing a single burst pipe to whole-home PEX repiping, our licensed plumbers handle it all.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-cloud-rain",
                title: "Slab Leak Repair",
                description: "Leaks under your foundation are dangerous. We detect and fix them to prevent structural settling.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-wind",
                title: "Moisture Drying",
                description: "Fixing the leak is step one. We also dry the water that escaped to prevent mold growth.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-shield-alt",
                title: "Mold Prevention",
                description: "We treat wet areas with antimicrobials to ensure no mold spores take root after the leak.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/leak-repair",
            },
        ],
        faqs: [
            {
                q: "How do I know if I have a hidden water leak?",
                a: "<strong>Look for signs:</strong> Unexplained high water bills, warm spots on the floor, the sound of running water when taps are off, or musty odors. If you suspect a leak, call us for a detection scan."
            },
            {
                q: "Do you break walls to find leaks?",
                a: "<strong>Rarely.</strong> Our thermal imaging and acoustic tools allow us to 'see' and 'hear' inside walls. We only open the wall at the exact spot of the repair, minimizing damage."
            },
            {
                q: "Does insurance cover slab leaks?",
                a: "<strong>Often, yes.</strong> The 'tear-out' to get to the pipe and the resulting water damage are usually covered. The pipe repair itself might not be. We help you navigate these policy details."
            },
            {
                q: "How long does leak repair take?",
                a: "<strong>Detection takes 1-2 hours.</strong> Repair takes 2-4 hours. Drying the water damage can take 3 days. We handle the entire process from start to finish."
            },
        ],
        steps: [
            {
                title: "1. Electronic Detection",
                text: "We use advanced tech to pinpoint the leak's exact location.",
                icon: "fas fa-crosshairs",
            },
            {
                title: "2. Access & Repair",
                text: "We open the smallest area possible to fix the pipe permanently.",
                icon: "fas fa-wrench",
            },
            {
                title: "3. Water Extraction",
                text: "We remove any water that has pooled in walls or floors.",
                icon: "fas fa-tint",
            },
            {
                title: "4. Structural Drying",
                text: "We dry the area completely to prevent mold and rot.",
                icon: "fas fa-wind",
            },
            {
                title: "5. Restoration",
                text: "We patch the drywall, paint, and replace flooring.",
                icon: "fas fa-paint-roller",
            },
        ],
    },

    "basement-flooding": {
        hero: {
            title: "Basement Flooding Cleanup in {city} | Pump-Out & Drying",
            titleFallback: "Basement Flooding Cleanup in Florida | Pump-Out & Drying",
            description: "Basement underwater? Don't wait for mold. Our Florida emergency team pumps out water, dries hidden moisture in walls, and waterproofs your foundation. We restore safety and prevent structural damage.",
            cta: "Pump Out My Basement",
            bgImage: "/images/waterDamage.webp",
        },
        education: {
            overview: "Basement flooding is one of the most destructive and stressful water damage emergencies a homeowner can face. When your basement fills with water—whether from heavy rainfall, sump pump failure, burst pipes, or sewage backup—the damage extends far beyond wet carpets and ruined storage boxes. Water saturates concrete, seeps into wall cavities, soaks insulation, and creates ideal conditions for rapid mold growth and structural deterioration. In Florida, where high water tables and intense seasonal storms are common, basement flooding can happen suddenly and without warning. The porous nature of concrete means moisture wicks deep into foundations, weakening structural integrity and creating persistent humidity problems even after visible water is removed. Professional basement flood cleanup involves high-capacity water extraction, specialized cavity drying techniques, antimicrobial treatment, dehumidification, and often waterproofing solutions to prevent recurrence. Without proper drying, basements become breeding grounds for toxic mold, wood rot, and foundation damage that can cost tens of thousands to repair.",
            causes: [
                "Sump pump failures during heavy storms when power outages disable pumps or mechanical failures prevent water removal from foundation drains",
                "Heavy seasonal rainfall and tropical storms overwhelming drainage systems, causing groundwater to seep through foundation cracks and floor joints",
                "Burst water heaters, washing machine hoses, or supply line failures flooding basements with hundreds of gallons in minutes",
                "Sewage backups from overwhelmed municipal systems or clogged main lines pushing contaminated water into basement drains and toilets"
            ],
            risks: [
                "Rapid mold colonization within 24-48 hours in wet drywall, wood framing, and insulation, releasing toxic spores that cause respiratory illness and allergies",
                "Foundation damage and structural weakening as prolonged water exposure erodes concrete, rusts rebar, and causes settling and cracking",
                "Electrical hazards from submerged outlets, appliances, and service panels creating serious electrocution and fire risks",
                "Contamination from sewage backups exposing your family to dangerous bacteria, viruses, and pathogens requiring professional biohazard cleanup"
            ],
            urgency: [
                "Standing water continues damaging foundations and wicking into walls every hour it remains—immediate pump-out prevents structural compromise",
                "Mold begins growing within 24 hours in wet materials; professional extraction and drying within this window prevents costly remediation",
                "Sewage-contaminated water poses immediate health risks—professional cleanup with PPE and antimicrobials is essential for family safety",
                "Insurance claims require prompt professional response and documentation—delays can result in coverage denials for secondary damage"
            ]
        },
        services: [
            {
                icon: "fas fa-pump-soap",
                title: "Emergency Pump-Out",
                description: "We use gas-powered trash pumps to remove thousands of gallons of water from flooded basements in hours.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-wind",
                title: "Cavity Drying",
                description: "Water hides behind drywall and under flooring. We inject dry air into cavities to stop mold growth at the source.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-shield-alt",
                title: "Mold Prevention",
                description: "Basements are dark and damp—perfect for mold. We apply professional-grade antimicrobials to seal surfaces.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-chart-line",
                title: "Moisture Monitoring",
                description: "We track humidity levels daily to ensure your basement reaches a safe dry standard before we leave.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-home",
                title: "Waterproofing Solutions",
                description: "After cleanup, we can recommend sump pumps and sealing to keep your basement dry permanently.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
        ],
        faqs: [
            {
                q: "What causes basement flooding in Florida?",
                a: "<strong>Heavy rains and high water tables.</strong> Sump pump failures and burst pipes are also common. Whatever the cause, we have the equipment to fix it.",
            },
            {
                q: "Can a flooded basement be saved?",
                a: "<strong>Yes, if pumped out quickly.</strong> The longer water sits, the more it damages the foundation and drywall. Immediate extraction is critical.",
            },
            {
                q: "Do I need a sump pump?",
                a: "<strong>Highly recommended.</strong> If your basement has flooded once, it's likely to happen again. A sump pump with battery backup is your best defense.",
            },
            {
                q: "How long does basement drying take?",
                a: "<strong>3 to 5 days on average.</strong> Concrete holds moisture longer than other materials, so we use specialized dehumidifiers to pull it out.",
            },
        ],
        steps: [
            {
                title: "1. Safety Check",
                text: "We ensure electricity is off and the structure is safe to enter.",
                icon: "fas fa-hard-hat",
            },
            {
                title: "2. Pump-Out",
                text: "High-volume pumps remove standing water rapidly.",
                icon: "fas fa-pump-soap",
            },
            {
                title: "3. Debris Removal",
                text: "We remove wet carpet, padding, and ruined drywall.",
                icon: "fas fa-trash",
            },
            {
                title: "4. Structural Drying",
                text: "Industrial dehumidifiers run 24/7 to dry the concrete and framing.",
                icon: "fas fa-wind",
            },
            {
                title: "5. Sanitization",
                text: "We clean and disinfect the entire area to prevent odors and mold.",
                icon: "fas fa-spray-can",
            },
        ],
    },

    "ceiling-water-damage": {
        hero: {
            title: "Ceiling Leak Repair in {city} | Fix Stains & Sagging",
            titleFallback: "Ceiling Leak Repair in Florida | Fix Stains & Sagging",
            description: "Water stains or sagging drywall? These are signs of a serious leak above. We trace the source, fix the leak, remove damaged drywall, and restore your ceiling to a perfect finish. 24/7 Emergency Service.",
            cta: "Fix My Ceiling",
            bgImage: "/images/waterDamage.webp",
        },
        education: {
            overview: "Ceiling water damage is a visible warning sign of a serious problem above—whether from roof leaks, plumbing failures, HVAC condensation, or second-floor bathroom issues. That brown stain or sagging drywall isn't just cosmetic; it indicates water has been pooling in your attic or ceiling cavity, saturating insulation, rotting wood framing, and creating conditions for mold growth. In Florida, where intense afternoon thunderstorms and aging roofs are common, ceiling leaks can develop quickly and worsen rapidly. Water follows the path of least resistance, often traveling along rafters and joists before dripping through drywall far from the actual leak source. Wet drywall loses up to 50% of its structural strength and can collapse without warning, posing serious safety risks. Professional ceiling water damage repair involves identifying and fixing the leak source, safely removing compromised drywall and insulation, thoroughly drying the cavity, treating for mold, and restoring the ceiling with perfect texture matching so repairs are invisible.",
            causes: [
                "Roof leaks from damaged shingles, flashing failures, or storm damage allowing rainwater to enter attics and soak ceiling insulation",
                "Plumbing leaks from second-floor bathrooms, burst supply lines, or leaking drain pipes dripping water into ceiling cavities below",
                "HVAC condensation from clogged drain lines, frozen coils, or improperly installed air handlers causing water to overflow into ceilings",
                "Attic condensation in Florida's humid climate when inadequate ventilation causes moisture to condense on roof decking and drip onto insulation"
            ],
            risks: [
                "Ceiling collapse from water-saturated drywall losing structural integrity, potentially causing injury and extensive damage to rooms below",
                "Hidden mold growth in attic spaces and ceiling cavities where dark, damp conditions create perfect environments for toxic spore colonization",
                "Electrical hazards from water contacting ceiling-mounted fixtures, junction boxes, and wiring, creating shock and fire risks",
                "Structural wood rot in roof rafters, trusses, and ceiling joists as prolonged moisture exposure weakens framing and compromises roof integrity"
            ],
            urgency: [
                "Water-damaged drywall can collapse suddenly without warning—immediate professional assessment prevents injury and catastrophic failure",
                "Active leaks worsen with every rain; what starts as a small stain becomes a major repair as water damage spreads through ceiling cavities",
                "Mold begins growing in wet insulation within 24-48 hours; early intervention prevents health hazards and expensive attic remediation",
                "Insurance companies require prompt leak repairs—delays allow 'long-term seepage' exclusions that can deny your claim"
            ]
        },
        services: [
            {
                icon: "fas fa-wrench",
                title: "Leak Source Identification",
                description: "We don't just patch the hole; we find and fix the roof leak, pipe burst, or AC overflow that caused it.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-hammer",
                title: "Drywall Removal & Replacement",
                description: "Wet drywall loses 50% of its strength. We safely remove sagging sections and install new, fire-rated drywall.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-paint-roller",
                title: "Texture Matching & Painting",
                description: "Popcorn, knockdown, or smooth? We match your existing ceiling texture perfectly so the repair is invisible.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-virus",
                title: "Mold Remediation",
                description: "Ceiling cavities are dark and humid—ideal for mold. We treat the framing to ensure no spores remain.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
            {
                icon: "fas fa-wind",
                title: "Attic Insulation Replacement",
                description: "Wet insulation breeds mold. We remove soggy insulation and blow in new, energy-efficient material.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/ceiling-water-damage",
            },
        ],
        faqs: [
            {
                q: "Is a water stain on the ceiling dangerous?",
                a: "<strong>It can be.</strong> A stain means water is pooling above. This can lead to mold growth or even a ceiling collapse if the drywall becomes too heavy.",
            },
            {
                q: "Can I just paint over a water stain?",
                a: "<strong>No.</strong> You must fix the leak and dry the area first. Painting over wet drywall traps moisture and feeds mold. The stain will just come back.",
            },
            {
                q: "How long does ceiling repair take?",
                a: "<strong>Minor repairs: 1-2 days.</strong> Major restoration involving insulation and painting: 3-5 days. We work fast to minimize disruption.",
            },
            {
                q: "Will the repair be visible?",
                a: "<strong>Not with us.</strong> Our texture matching experts ensure the new patch blends seamlessly with the rest of your ceiling.",
            },
        ],
        steps: [
            {
                title: "1. Leak Detection",
                text: "We find the source (roof, pipe, AC) and stop the water.",
                icon: "fas fa-search",
            },
            {
                title: "2. Containment",
                text: "We cover your furniture and floors to protect them from dust.",
                icon: "fas fa-shield-alt",
            },
            {
                title: "3. Removal",
                text: "We cut out wet, unsafe drywall and remove wet insulation.",
                icon: "fas fa-hammer",
            },
            {
                title: "4. Drying",
                text: "We dry the attic and framing completely.",
                icon: "fas fa-wind",
            },
            {
                title: "5. Reconstruction",
                text: "We install new drywall, texture, and paint for a flawless finish.",
                icon: "fas fa-paint-roller",
            },
        ],
    },

    "emergency-water-removal": {
        hero: {
            title: "24/7 Emergency Water Removal in {city} | 60-Min Response",
            titleFallback: "24/7 Emergency Water Removal in Florida | 60-Min Response",
            description: "Flooding doesn't wait for business hours. Neither do we. Our emergency extraction teams are on call 24/7/365 to remove water, save your belongings, and stop mold before it starts.",
            cta: "Call 24/7: (786) 602-2217",
            bgImage: "/images/waterDamage.webp",
        },
        education: {
            overview: "Water damage emergencies strike without warning—burst pipes at 2 AM, storm flooding during hurricanes, water heater failures on weekends, or appliance malfunctions while you're at work. Every minute counts when water is actively flooding your home or business. Standing water spreads rapidly, wicking into walls, soaking carpets and padding, saturating hardwood floors, and damaging furniture and belongings. In Florida's humid climate, wet materials begin supporting mold growth within 24-48 hours, and structural damage accelerates quickly as water compromises drywall, insulation, and framing. Our emergency water removal teams are strategically positioned across Florida and equipped with truck-mounted extraction units, submersible pumps, and industrial-grade equipment to respond within 60 minutes, 24 hours a day, 365 days a year. Immediate professional water extraction is the critical first step that determines whether your property can be saved or requires extensive reconstruction—the faster we remove standing water and begin drying, the less damage occurs and the lower your restoration costs.",
            causes: [
                "Burst pipes from freezing temperatures, corrosion, or excessive water pressure flooding homes with hundreds of gallons per hour",
                "Storm and hurricane flooding overwhelming drainage systems and inundating properties with contaminated water requiring immediate extraction",
                "Appliance failures including water heater ruptures, washing machine hose bursts, and dishwasher leaks releasing water throughout homes",
                "Sewage backups from clogged main lines or overwhelmed municipal systems pushing contaminated water into homes requiring emergency biohazard response"
            ],
            risks: [
                "Rapid damage escalation as water spreads through porous materials—every hour of delay increases restoration costs by hundreds of dollars",
                "Mold colonization beginning within 24-48 hours in wet drywall, carpets, and wood, creating health hazards and requiring expensive remediation",
                "Structural damage to floors, walls, and foundations as prolonged water exposure causes warping, rot, and compromised integrity",
                "Permanent loss of belongings, furniture, and irreplaceable items if water extraction doesn't occur within the first few hours"
            ],
            urgency: [
                "Water migrates rapidly through walls and floors—immediate extraction within the first hour prevents damage from spreading to unaffected areas",
                "Insurance companies favor prompt professional response with documentation—delays can result in coverage denials for preventable secondary damage",
                "Mold prevention window is only 24-48 hours; emergency extraction and drying within this timeframe avoids costly remediation and health risks",
                "Every minute of delay increases restoration costs exponentially—60-minute response saves thousands in reconstruction and replacement expenses"
            ]
        },
        services: [
            {
                icon: "fas fa-home",
                title: "Residential Water Extraction",
                description: "From flooded living rooms to wet carpets, we extract water fast to save your home's finishes.",
                image: "/images/flood-damage.webp",
                link: "/restoration/water-damage/basement-flooding",
            },
            {
                icon: "fas fa-building",
                title: "Commercial Water Removal",
                description: "We minimize business downtime with powerful truck-mounted extraction units for large spaces.",
                image: "/images/ceiling-water-damage.webp",
                link: "/restoration/water-damage/emergency-water-removal",
            },
            {
                icon: "fas fa-cloud-bolt",
                title: "Storm & Hurricane Response",
                description: "When storms hit Florida, we are ready with generators and pumps to handle severe flooding.",
                image: "/images/basement-flooding.webp",
                link: "/restoration/water-damage/flood-damage",
            },
            {
                icon: "fas fa-wrench",
                title: "Burst Pipe Cleanup",
                description: "Plumbing failure? We stop the water and clean up the mess immediately.",
                image: "/images/leak-repair.webp",
                link: "/restoration/water-damage/leak-repair",
            },
            {
                icon: "fas fa-couch",
                title: "Content Protection",
                description: "We move your furniture and valuables to dry areas to prevent permanent damage.",
                image: "/images/emergency-water-removal.webp",
                link: "/restoration/water-damage/emergency-water-removal",
            },
        ],
        faqs: [
            {
                q: "How fast can you get here?",
                a: "<strong>Within 60 minutes.</strong> We have teams stationed across Florida ready to roll 24/7.",
            },
            {
                q: "Is emergency removal different from drying?",
                a: "<strong>Yes.</strong> Removal is the rapid extraction of standing water (the bulk of the water). Drying removes the remaining moisture absorbed into walls and floors.",
            },
            {
                q: "Do you work with my insurance?",
                a: "<strong>Yes.</strong> We document the emergency phase thoroughly, which is critical for your claim approval. We bill them directly.",
            },
            {
                q: "What if I wait until morning?",
                a: "<strong>Don't wait.</strong> Water migrates fast. In just a few hours, it can wick up walls, ruin cabinets, and start mold growth. Immediate action saves money.",
            },
        ],
        steps: [
            {
                title: "1. Rapid Dispatch",
                text: "Call us anytime. A live person answers and dispatches a team.",
                icon: "fas fa-phone-volume",
            },
            {
                title: "2. Water Extraction",
                text: "We pump out standing water immediately upon arrival.",
                icon: "fas fa-tint",
            },
            {
                title: "3. Content Protection",
                text: "We block up furniture and move items to safety.",
                icon: "fas fa-couch",
            },
            {
                title: "4. Moisture Inspection",
                text: "We map out where the water has traveled.",
                icon: "fas fa-search",
            },
            {
                title: "5. Drying Setup",
                text: "We set up air movers to begin the drying process instantly.",
                icon: "fas fa-wind",
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
            { icon: "fas fa-smog", title: "Smoke Damage", description: "Advanced smoke particle removal using HEPA air scrubbers and thermal fogging to eliminate odors from walls, HVAC systems, and fabrics. We neutralize acidic residue that corrodes surfaces if left untreated.", slug: "smoke-damage", image: "/images/smoke-damage.webp", link: "/restoration/fire-damage/smoke-damage", ctaText: "Remove Smoke Odors", features: ["HEPA Air Scrubbers", "Thermal Fogging", "Odor Neutralization"] },
            { icon: "fas fa-broom", title: "Soot Cleanup", description: "Specialized soot removal using dry chemical sponges and HEPA vacuums to safely clean walls, ceilings, and contents without spreading particles. We treat all surfaces with antimicrobial sealants to prevent odor return.", slug: "soot-cleanup", image: "/images/soot-cleanup.webp", link: "/restoration/fire-damage/soot-cleanup", ctaText: "Clean Soot Now", features: ["Dry Chemical Sponges", "HEPA Vacuums", "Antimicrobial Sealing"] },
            { icon: "fas fa-hammer", title: "Fire Damage Repair", description: "Complete structural restoration from charred framing to smoke-damaged drywall. We rebuild fire-rated assemblies, replace compromised insulation, and restore finishes to code-compliant, pre-loss condition.", slug: "fire-damage-repair", image: "/images/fire-damage-repair.webp", link: "/restoration/fire-damage/fire-damage-repair", ctaText: "Repair Fire Damage", features: ["Structural Rebuild", "Fire-Rated Assemblies", "Code-Compliant Finish"] },
            { icon: "fas fa-fire-extinguisher", title: "Emergency Fire Response", description: "Immediate 24/7 emergency board-up and smoke containment to prevent secondary damage. We secure openings, extract firefighting water, and stabilize structures while coordinating with your insurance adjuster.", slug: "emergency-fire-response", image: "/images/emergency-fire-response.webp", link: "/restoration/fire-damage/emergency-fire-response", ctaText: "Get Emergency Help", features: ["Emergency Board-Up", "Water Extraction", "Insurance Coordination"] }
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
        education: {
            overview: "Smoke damage is often more pervasive and difficult to remediate than the fire itself. Long after the flames are extinguished, smoke residues continue to settle on surfaces, penetrate porous materials, and circulate through HVAC systems. In Florida homes, where air conditioning is constant, smoke particles are rapidly distributed to every room, embedding in drywall, carpets, upholstery, and clothing. Different types of fires produce different types of smoke—wet smoke from smoldering fires is sticky and pungent, while dry smoke from fast-burning fires is powdery. Both contain toxic chemicals, carcinogens, and acidic compounds that can corrode metals, etch glass, and permanently stain surfaces within hours. Professional smoke damage restoration requires more than just cleaning; it involves thermal fogging, ozone treatment, and specialized chemical sponging to neutralize odors at the molecular level and physically remove toxic residues to restore safe indoor air quality.",
            causes: [
                "Protein residues from kitchen fires (burnt food, grease) leaving an invisible but extremely pungent and sticky film on walls and ceilings",
                "Synthetic smoke from burning plastics and fabrics producing thick, black, toxic residue that smears easily and is difficult to clean",
                "Puff-backs from malfunctioning oil burners or furnaces blowing soot and smoke through the heating system into every room",
                "Wildfire smoke infiltration during dry seasons entering homes through vents and windows, settling as fine ash and causing respiratory irritation"
            ],
            risks: [
                "Severe respiratory irritation and asthma attacks from inhaling microscopic soot particles and chemical off-gassing from burnt materials",
                "Permanent yellowing and staining of walls, plastics, and appliances as acidic smoke residues react with surfaces over time",
                "Corrosion and pitting of metal fixtures, electronics, and appliances due to the acidic nature of soot and smoke residue",
                "Lingering toxic odors that become embedded in structural framing and insulation, requiring extensive demolition if not treated immediately"
            ],
            urgency: [
                "Acidic soot begins discoloring plastics and tarnishing metals within minutes—immediate cleaning prevents permanent damage",
                "Smoke odors penetrate deeper into porous materials every hour; delayed treatment makes complete deodorization nearly impossible without reconstruction",
                "Toxic particulates remain airborne and settle in lungs; professional air scrubbing is needed immediately to protect family health",
                "Insurance claims for smoke damage require detailed documentation of 'unseen' damage—we provide the testing and reports needed for coverage"
            ]
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
        education: {
            overview: "Soot is a dangerous byproduct of incomplete combustion, composed of microscopic carbon particles, acids, chemicals, and metals. It doesn't just sit on the surface; it adheres to walls, ceilings, and contents, often creating an oily or sticky film that is extremely difficult to remove without professional techniques. In Florida's humid environment, soot can become acidic when mixed with moisture in the air, accelerating damage to your property. Improper cleaning methods—like wiping soot with a wet cloth—can smear the residue, drive it deeper into pores, and cause permanent staining. Our certified soot cleanup specialists use HEPA vacuums, dry chemical sponges, and specialized degreasers to lift soot safely without damaging finishes. We also address hidden soot in HVAC ducts and behind outlets to ensure your home is truly clean and safe from the health risks associated with particle inhalation.",
            causes: [
                "Incomplete combustion of organic materials like wood, paper, and cotton producing fine, powdery soot that spreads easily through air currents",
                "Burning synthetic materials (plastics, foam, carpets) creating sticky, oily soot that adheres stubbornly to walls and furniture",
                "Furnace or boiler malfunctions ('puff-backs') releasing sudden bursts of oily soot into the heating system and throughout the home",
                "Candle burning over long periods, especially scented candles, depositing fine black soot (ghosting) on walls, ceilings, and carpets"
            ],
            risks: [
                "Inhalation of microscopic soot particles (PM 2.5) which can penetrate deep into lungs and enter the bloodstream, causing heart and lung disease",
                "Etching and corrosion of glass, mirrors, and metal surfaces as acidic soot reacts with humidity, causing irreversible pitting within 72 hours",
                "Permanent discoloration of light-colored porous materials like drywall, paint, and upholstery if soot is not removed promptly",
                "Electrical short circuits and overheating in appliances and electronics as conductive soot particles accumulate inside devices"
            ],
            urgency: [
                "Soot becomes acidic with humidity and begins etching glass and metal within hours—rapid removal saves expensive fixtures",
                "Health risks from inhaling soot are immediate; professional HEPA cleaning is required to make the air safe for occupancy",
                "DIY cleaning often causes permanent damage by smearing oily soot; professional dry removal techniques are needed first",
                "The longer soot sits, the harder it is to remove; prompt action can save repainting and refinishing costs"
            ]
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
        education: {
            overview: "Fire damage is a complex combination of destruction from flames, heat, smoke, and the water used to extinguish the fire. The visible charring is often just the tip of the iceberg; heat can compromise structural integrity, melt electrical wiring, and weaken plumbing systems. In Florida, the aftermath of a fire is further complicated by high humidity, which can trigger mold growth in water-soaked areas within days. Effective fire damage repair requires a coordinated approach: immediate board-up to secure the property, water extraction to prevent mold, specialized smoke and soot removal, and finally, structural reconstruction. Our licensed general contractors handle everything from minor repairs to complete rebuilds, ensuring your property is restored to its pre-loss condition—or better—while navigating the complex insurance claims process for you.",
            causes: [
                "Electrical fires from faulty wiring, overloaded circuits, or malfunctioning appliances, often causing damage inside walls before becoming visible",
                "Kitchen fires, particularly grease fires, which are the leading cause of home fires and cause extensive smoke and protein residue damage",
                "Lightning strikes during Florida's frequent thunderstorms, causing immediate structural fires and electrical system surges",
                "Dryer vent clogs leading to lint ignition, a common but preventable cause of severe laundry room and house fires"
            ],
            risks: [
                "Structural collapse from weakened load-bearing walls, floor joists, and roof trusses compromised by high heat and charring",
                "Hidden water damage and mold growth resulting from the thousands of gallons of water used by firefighters to extinguish flames",
                "Toxic chemical exposure from burned synthetic materials, plastics, and insulation releasing hazardous carcinogens into the air",
                "Security risks from burned-out windows and doors, leaving the property vulnerable to theft, vandalism, and weather damage"
            ],
            urgency: [
                "Open windows and roofs must be boarded up immediately to prevent rain damage, theft, and liability issues",
                "Water from firefighting efforts causes mold growth in 24-48 hours; extraction must happen simultaneously with fire investigation",
                "Ash and soot are acidic and will corrode pipes and electronics if not cleaned within days, increasing restoration costs",
                "Insurance policies require you to 'mitigate further damage'—failure to secure the property can lead to claim denial"
            ]
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
        education: {
            overview: "The first 24 to 48 hours after a fire are critical for saving your property. Once the firefighters leave, your home is vulnerable to the elements, theft, and rapid secondary damage from water and corrosive smoke residues. Our emergency fire response service is designed to bridge the gap between the fire department leaving and the start of full restoration. We deploy immediately to secure the site with board-up services for broken windows and doors, tarp damaged roofs to prevent rain intrusion, and establish containment zones to stop soot from spreading to unaffected rooms. In Florida, where daily storms are common, leaving a fire-damaged roof or window open for even a few hours can lead to catastrophic water damage. Our team also provides immediate power generation, safety assessments, and coordinates with your insurance adjuster to document the loss properly from day one.",
            causes: [
                "Structural fires leaving homes exposed to weather and unauthorized entry through burned-out windows, doors, and roof sections",
                "Arson or vandalism incidents requiring immediate site security and evidence preservation for police and insurance investigations",
                "Lightning strikes causing localized fire damage and electrical hazards that need immediate containment and safety inspection",
                "Kitchen or electrical fires that have been extinguished but left the property filled with toxic smoke and water requiring urgent mitigation"
            ],
            risks: [
                "Unauthorized entry, looting, and vandalism if the property is not immediately boarded up and secured after the fire department departs",
                "Severe water damage and mold growth from rain entering through damaged roofs or windows, compounding the fire loss",
                "Cross-contamination of unaffected areas as soot and smoke travel through HVAC systems and open hallways if not contained",
                "Liability issues if someone enters your unsecured, unsafe property and gets injured on debris or unstable structures"
            ],
            urgency: [
                "Insurance policies require you to take 'reasonable steps' to prevent further damage—emergency board-up is the most critical step",
                "Rain can destroy salvageable belongings and structural elements within minutes if the roof or windows are compromised",
                "Looters often target fire-damaged homes within hours; immediate security prevents theft of remaining valuables",
                "Soot and water damage worsen exponentially with time; immediate mitigation stops the clock on destruction and reduces total claim costs"
            ]
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
        education: {
            overview: "Mold remediation is a scientific process that goes far beyond simple cleaning. In Florida's hot, humid climate, mold is a persistent threat that can colonize a home in as little as 24-48 hours following water damage. It feeds on organic materials like drywall, wood, and insulation, slowly digesting the structural components of your property while releasing microscopic spores and mycotoxins into the air. These airborne contaminants can cause serious health issues, from allergic reactions to severe respiratory infections. Professional mold remediation involves identifying the moisture source, containing the affected area to prevent cross-contamination, physically removing the mold growth using HEPA-filtered equipment, and treating surfaces with EPA-approved antimicrobials. We don't just bleach the surface; we remove the root system and correct the environment to ensure the mold doesn't return.",
            causes: [
                "Undetected plumbing leaks inside walls or under cabinets providing a constant moisture source for mold colonies",
                "Roof leaks and attic condensation allowing mold to grow on insulation and sheathing, often spreading to ceilings below",
                "High indoor humidity (above 60%) due to HVAC failures or poor ventilation, creating a perfect breeding ground for spores",
                "Flood damage or water intrusion that was not properly dried within 48 hours, leading to widespread fungal growth"
            ],
            risks: [
                "Respiratory distress, asthma attacks, and chronic sinus infections caused by inhaling high concentrations of mold spores",
                "Structural damage as mold enzymes break down cellulose in drywall and wood framing, compromising the integrity of your home",
                "Decreased property value and difficulty selling your home due to the stigma and disclosure requirements of mold history",
                "Cross-contamination of HVAC systems, spreading spores to every room in the house and requiring expensive duct cleaning"
            ],
            urgency: [
                "Mold colonies grow exponentially—what starts as a small spot can cover a wall in days if the moisture source remains",
                "Mycotoxins from black mold (Stachybotrys) are hazardous neurotoxins; immediate removal is critical for family safety",
                "Insurance coverage often depends on prompt action; ignoring visible mold can be considered 'negligence' and lead to claim denial",
                "Structural wood rot accelerates with mold presence; early remediation saves thousands in carpentry and reconstruction costs"
            ]
        },
        services: [
            { icon: "fas fa-magnifying-glass", title: "Mold Inspection", description: "DBPR-licensed mold assessment using thermal imaging and moisture meters to detect hidden growth behind walls and in HVAC systems. We provide detailed reports with spore counts and remediation protocols for insurance claims.", slug: "mold-inspection", image: "/images/mold-inspection.webp", link: "/restoration/mold-remediation/mold-inspection", ctaText: "Book Inspection", features: ["DBPR-Licensed", "Thermal Imaging", "Insurance Reports"] },
            { icon: "fas fa-broom", title: "Black Mold Removal", description: "Safe removal of toxic Stachybotrys (black mold) using negative air chambers and HEPA filtration. We contain affected areas, remove contaminated materials, and apply EPA-approved antimicrobials to prevent regrowth.", slug: "black-mold-removal", image: "/images/black-mold-removal.webp", link: "/restoration/mold-remediation/black-mold-removal", ctaText: "Remove Black Mold", features: ["Negative Air Chambers", "HEPA Filtration", "EPA-Approved Treatment"] },
            { icon: "fas fa-shield-alt", title: "Mold Prevention", description: "Comprehensive moisture control including dehumidification, ventilation improvements, and application of mold-resistant coatings to vulnerable areas. We identify and fix humidity sources to prevent future infestations.", slug: "mold-prevention", image: "/images/mold-prevention.webp", link: "/restoration/mold-remediation/mold-prevention", ctaText: "Prevent Mold", features: ["Moisture Control", "Dehumidification", "Mold-Resistant Coating"] },
            { icon: "fas fa-vial", title: "Mold Testing", description: "Certified laboratory air and surface sampling to identify mold species and concentration levels. We use AIHA-accredited labs for accurate results and provide clearance testing after remediation to verify safe air quality.", slug: "mold-testing", image: "/images/mold-testing.webp", link: "/restoration/mold-remediation/mold-testing", ctaText: "Test Air Quality", features: ["AIHA-Accredited Labs", "Air Sampling", "Clearance Testing"] }
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
        education: {
            overview: "Visible mold is often just a symptom of a larger, hidden problem. Because mold thrives in dark, damp environments, the most dangerous colonies frequently grow behind drywall, under flooring, or inside HVAC ducts where they can't be seen. A professional mold inspection is the only way to uncover the full extent of an infestation. Our DBPR-licensed mold assessors use advanced diagnostic tools—including thermal imaging cameras to detect hidden moisture pockets, hygrometers to measure humidity levels, and borescopes to see inside wall cavities—to locate fungal growth without destructive demolition. We provide a comprehensive, unbiased report detailing the type of mold present, the spore concentration levels, and the specific source of moisture causing the growth. This documentation is essential for insurance claims and for developing an effective remediation protocol.",
            causes: [
                "Musty odors that persist despite cleaning, indicating active mold growth in hidden areas like crawlspaces or wall voids",
                "Unexplained allergic reactions or respiratory symptoms among family members that improve when leaving the house",
                "History of water damage or flooding that may have left trapped moisture in building materials",
                "Real estate transactions requiring a 'clean bill of health' for the property to ensure no hidden liabilities exist"
            ],
            risks: [
                "Hidden mold releasing spores into the air for months or years, causing chronic health issues without the homeowner knowing the cause",
                "Extensive structural rot occurring behind walls where it goes unnoticed until significant damage has been done",
                "Denial of insurance claims due to lack of professional documentation proving the cause and extent of the mold damage",
                "Purchase of a 'lemon' property with pre-existing mold issues that could cost tens of thousands to remediate later"
            ],
            urgency: [
                "If you can smell mold, it's already airborne; an inspection is needed immediately to identify the source and protect air quality",
                "Buying or selling a home requires clear answers fast; our rapid inspection reports keep your real estate closing on track",
                "Unchecked moisture causes mold to spread to unaffected areas; early detection limits the scope and cost of remediation",
                "Health symptoms won't improve until the source is found; identifying the mold type helps doctors treat mold-related illnesses"
            ]
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
        education: {
            overview: "Stachybotrys chartarum, commonly known as 'black mold,' is the most feared fungal infestation for good reason. Unlike common mildew, black mold produces mycotoxins—potent neurotoxins that can cause severe health problems including chronic fatigue, headaches, respiratory bleeding, and neurological issues. It typically grows on cellulose-rich materials like drywall, cardboard, and wood that have been wet for an extended period. Removing black mold is not a DIY project; disturbing the colony releases billions of toxic spores into the air, drastically increasing exposure risks. Our black mold removal protocol follows strict IICRC S520 standards: we build negative-air containment chambers to isolate the area, use full PPE including respirators, and employ HEPA air scrubbers to capture airborne spores. We physically remove the contaminated materials and chemically treat the remaining structure to ensure your home is safe again.",
            causes: [
                "Long-term, undetected water leaks that keep building materials constantly saturated for weeks or months",
                "Flooding events involving contaminated water (Category 3) that soak into drywall and insulation",
                "Condensation issues in HVAC systems or attics that provide a steady supply of moisture to organic dust and materials",
                "Poorly ventilated bathrooms or laundry rooms where humidity remains high enough to support toxic mold growth"
            ],
            risks: [
                "Severe toxicity (Sick Building Syndrome) affecting the nervous system, immune system, and respiratory system of occupants",
                "Permanent contamination of porous belongings like furniture, clothing, and mattresses, requiring total disposal",
                "Legal liability for landlords or business owners if tenants or employees are exposed to known toxic mold hazards",
                "Complete loss of structural drywall and framing in affected areas, necessitating extensive and expensive reconstruction"
            ],
            urgency: [
                "Black mold mycotoxins are dangerous immediately upon inhalation; evacuation and professional removal are often necessary",
                "Spores spread through HVAC systems rapidly; containment must be set up instantly to protect the rest of the building",
                "The longer black mold grows, the more expensive the remediation; it digs deep into structural wood, making surface cleaning impossible",
                "Health effects can be long-lasting; prompt removal is the only way to stop the exposure and begin recovery"
            ]
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
        education: {
            overview: "In Florida's tropical climate, mold prevention is an ongoing battle. High humidity, frequent storms, and air conditioning usage create a perfect storm for fungal growth. Prevention is far cheaper and healthier than remediation. Our mold prevention services focus on controlling the one factor mold needs to survive: moisture. We implement comprehensive strategies including crawlspace encapsulation, dehumidification system installation, and the application of antimicrobial coatings to vulnerable surfaces. We also assess your property's envelope—roof, windows, and foundation—to identify and seal potential water intrusion points. By maintaining indoor humidity below 60% and eliminating organic food sources, we create an environment where mold simply cannot grow, protecting your property and your health for the long term.",
            causes: [
                "Inadequate ventilation in attics, bathrooms, and kitchens allowing moisture to accumulate and condense on surfaces",
                "Poorly sealed windows and doors letting in humid outdoor air that condenses when it meets cool air-conditioned surfaces",
                "Oversized or undersized HVAC units that fail to properly dehumidify the air, leading to 'clammy' indoor conditions",
                "Lack of vapor barriers in crawlspaces or slab foundations allowing ground moisture to wick up into the home"
            ],
            risks: [
                "Recurrent mold blooms that require repeated, expensive cleaning because the underlying moisture issue was never solved",
                "Gradual degradation of indoor air quality as minor mold growth releases allergens continuously over time",
                "Damage to clothes, shoes, and leather goods which are often the first items to show mold growth in humid closets",
                "Voided manufacturer warranties on flooring and windows if installation guidelines regarding moisture control were not followed"
            ],
            urgency: [
                "Florida humidity is constant; without active prevention, mold can start growing in a clean home within days of an AC failure",
                "Prevention costs a fraction of remediation; investing in moisture control now saves thousands in future repairs",
                "Protecting vulnerable populations (infants, elderly) requires proactive air quality management, not just reactive cleaning",
                "Water damage events are inevitable; having mold-resistant materials and coatings in place minimizes the impact when they occur"
            ]
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
        education: {
            overview: "You can't fight what you can't see. Mold testing provides the scientific data needed to make informed decisions about your property's safety. While a visual inspection finds obvious growth, air quality testing reveals the invisible threat: airborne spore counts. We use air-o-cell cassettes to capture microscopic particles and bio-tape lifts to sample surface growth. These samples are analyzed by an independent, AIHA-accredited laboratory to identify the specific genus of mold (e.g., Aspergillus, Penicillium, Stachybotrys) and the concentration levels compared to outdoor baselines. This data is crucial for three reasons: it confirms if a property is safe to occupy, it dictates the necessary remediation protocol, and 'clearance testing' proves that a remediation job was successful. Don't guess with your health—get the facts.",
            causes: [
                "Need for objective proof of mold presence to justify insurance coverage or landlord action",
                "Verification of successful remediation ('clearance testing') to ensure the area is safe for re-occupancy",
                "Unexplained health symptoms where doctors suspect environmental triggers but need confirmation of mold exposure",
                "Real estate due diligence to ensure a property doesn't have a hidden history of water damage and mold"
            ],
            risks: [
                "False negatives from DIY test kits which are notoriously unreliable and often show 'mold' even in safe homes, causing unnecessary panic",
                "False positives or missed hidden mold if sampling is not performed by a trained technician using proper protocols",
                "Incomplete remediation if the specific mold type is not identified, as some species require more aggressive treatment than others",
                "Legal disputes without admissible lab data to prove the existence and severity of the mold condition"
            ],
            urgency: [
                "If you suspect toxic mold, you need to know immediately to determine if evacuation is necessary",
                "Insurance claims have strict deadlines; having a certified lab report expedites the approval process",
                "Before buying a home, you have a limited inspection window; rapid testing ensures you don't buy a moldy money pit",
                "Peace of mind is invaluable; knowing your air is safe allows you to sleep soundly without worrying about invisible threats"
            ]
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
        education: {
            overview: "Florida's severe weather—from daily thunderstorms to catastrophic hurricanes—poses a constant threat to property integrity. Storm damage is rarely limited to just one area; high winds tear off roof shingles, flying debris shatters windows, and driving rain floods interiors. The result is a complex mix of structural, water, and potential mold damage that requires a coordinated, multi-faceted restoration approach. Our storm damage team is equipped to handle every aspect of recovery: we deploy immediately to install emergency roof tarps and board up windows, remove hazardous fallen trees, extract standing water, and then begin the process of structural repair. We understand that after a storm, your home is vulnerable to the elements and looters, which is why our priority is securing the property envelope within hours of the event.",
            causes: [
                "Hurricane-force winds (74+ mph) lifting roof shingles, ripping off siding, and toppling trees onto structures",
                "Wind-driven rain entering through compromised soffits, vents, and window seals, causing hidden water damage inside walls",
                "Hail impacts damaging roof granules and cracking skylights, leading to long-term leaks and UV degradation",
                "Tornadoes and microbursts causing sudden, localized structural failure and scattering dangerous debris across properties"
            ],
            risks: [
                "Secondary water damage destroying insulation, drywall, and flooring if the roof or windows are not tarped immediately",
                "Mold growth beginning within 24-48 hours in warm, humid post-storm conditions, especially when power outages prevent AC use",
                "Structural collapse risks from weakened roof trusses or load-bearing walls impacted by fallen trees",
                "Electrical hazards from exposed wiring, water-damaged outlets, and downed power lines on the property"
            ],
            urgency: [
                "Insurance policies require 'mitigation of damages' (tarping/boarding) to maintain coverage; delays can lead to claim denial",
                "Another storm could strike at any time; a compromised home cannot withstand a second impact without temporary protection",
                "Security is compromised when windows and doors are broken; immediate board-up prevents theft and vandalism",
                "Water trapped in walls causes rot and mold rapidly; immediate extraction is vital to save the structure"
            ]
        },
        services: [
            { icon: "fas fa-hurricane", title: "Hurricane Damage", description: "Comprehensive hurricane recovery including emergency blue roof tarping, storm surge water extraction, and structural stabilization. We handle wind-torn siding, shattered windows, and flood-damaged interiors with rapid debris removal and mold prevention protocols.", slug: "hurricane-damage", image: "/images/hurricane-damage.webp", link: "/restoration/storm-damage/hurricane-damage", ctaText: "Restore Storm Damage", features: ["Blue Roof Tarping", "Storm Surge Cleanup", "Structural Stabilization"] },
            { icon: "fas fa-wind", title: "Wind Damage", description: "Expert repair of wind-damaged roofs, siding, and gutters using hurricane-rated materials. We replace missing shingles, seal exposed underlayment, and restore structural integrity to prevent water intrusion and further deterioration.", slug: "wind-damage", image: "/images/wind-damage.webp", link: "/restoration/storm-damage/wind-damage", ctaText: "Repair Wind Damage", features: ["Hurricane-Rated Materials", "Roof Sealing", "Structural Integrity"] },
            { icon: "fas fa-tree", title: "Storm Debris Removal", description: "Safe removal of fallen trees, branches, and storm debris using heavy equipment and certified arborists. We clear roofs, yards, and driveways, then haul away all materials for eco-friendly disposal and site restoration.", slug: "storm-debris-removal", image: "/images/storm-debris-removal.webp", link: "/restoration/storm-damage/storm-debris-removal", ctaText: "Remove Debris", features: ["Certified Arborists", "Heavy Equipment", "Eco-Friendly Disposal"] },
            { icon: "fas fa-ambulance", title: "Emergency Storm Repair", description: "Immediate 24/7 emergency response with roof tarping, window board-up, and water extraction to prevent secondary damage. We stabilize structures, document damage for insurance, and begin restoration while coordinating with adjusters.", slug: "emergency-storm-repair", image: "/images/emergency-storm-repair.webp", link: "/restoration/storm-damage/emergency-storm-repair", ctaText: "Get Emergency Help", features: ["24/7 Response", "Emergency Tarping", "Insurance Documentation"] }
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
        education: {
            overview: "Hurricanes are the most destructive force of nature in Florida, capable of causing total property loss through a combination of wind, rain, and storm surge. The damage is often layered: high winds strip the roof, allowing rain to soak the interior, while rising floodwaters destroy the lower levels. Recovery requires a massive, coordinated effort involving debris removal, water extraction, demolition of ruined materials, and extensive structural rebuilding. Our hurricane response team monitors storms before they make landfall and pre-positions equipment to respond as soon as it is safe. We handle the entire recovery process, from the initial chaotic days of securing the property and removing wet materials to the final coat of paint during reconstruction, working closely with your insurance adjuster to document every inch of damage.",
            causes: [
                "Category 1-5 winds causing progressive damage from shingle loss to complete roof and wall failure",
                "Storm surge inundating coastal properties with corrosive saltwater, destroying foundations, electrical systems, and interiors",
                "Flying debris (missiles) penetrating building envelopes, allowing wind and water to pressurize and destroy structures from within",
                "Prolonged rainfall during slow-moving storms causing freshwater flooding even in non-coastal, inland areas"
            ],
            risks: [
                "Total structural failure if compromised load-bearing components are not identified and shored up immediately",
                "Widespread black mold growth due to the combination of heat, humidity, and lack of power/AC for days or weeks",
                "Contamination from sewage and chemicals mixed into floodwaters, creating hazardous conditions for occupants",
                "Long-term corrosion of electrical wiring, HVAC components, and metal fasteners exposed to saltwater spray or surge"
            ],
            urgency: [
                "The 'Golden Hour' for recovery is the first 48 hours; getting the property dry and secure determines if it can be saved",
                "Insurance adjusters are overwhelmed after a storm; having a professional contractor document damage early speeds up your claim",
                "Mold grows explosively in post-hurricane heat; waiting for power to return before drying guarantees a mold infestation",
                "Supply shortages (tarps, plywood, generators) occur instantly; our pre-stocked inventory ensures your home gets protected while others wait"
            ]
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
        education: {
            overview: "You don't need a named hurricane to suffer severe wind damage. Florida's severe thunderstorms, microbursts, and tornadoes can generate wind speeds exceeding 60-100 mph, causing significant damage in seconds. Wind damage is often deceptive; while missing shingles are obvious, the real danger lies in the 'lift' that breaks the adhesive seals of your roof, or the stress fractures in siding and windows that allow water to seep in over time. Our wind damage experts inspect your property for these subtle signs of compromise. We provide immediate emergency tarping to seal the building envelope and prevent water intrusion, followed by permanent repairs using high-quality, wind-rated materials designed to withstand future storms.",
            causes: [
                "Microbursts and straight-line winds from thunderstorms hitting properties with sudden, explosive force",
                "Tornadoes causing catastrophic localized damage, twisting structures and stripping exterior cladding",
                "Uplift pressure on roof overhangs and eaves peeling back roofing materials and exposing the wood deck to rain",
                "Impact damage from flying tree limbs, patio furniture, and loose debris shattering windows and puncturing siding"
            ],
            risks: [
                "Slow leaks from unsealed shingles or flashing that rot roof decking and attic insulation over months without being noticed",
                "Window seal failure leading to fogging, drafts, and water intrusion during subsequent rainstorms",
                "Siding detachment allowing water to trap against the house wrap, causing hidden mold and wood rot in wall cavities",
                "Diminished wind resistance of the roof, making it likely to fail completely during the next minor wind event"
            ],
            urgency: [
                "Exposed roof decking absorbs water like a sponge; tarping must happen before the next rain shower to save the roof",
                "Broken windows compromise home security and allow humidity to spike indoors; board-up is essential immediately",
                "Insurance claims for wind damage often have time limits; prompt inspection proves the damage was storm-related, not wear-and-tear",
                "Loose debris on your property can become dangerous projectiles in the next gust; cleanup prevents further damage"
            ]
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
        education: {
            overview: "The aftermath of a storm leaves properties cluttered with dangerous debris—fallen trees, scattered roof shingles, twisted metal siding, and shattered glass. This debris isn't just unsightly; it poses a serious safety hazard to your family and blocks access for repair crews and emergency vehicles. Attempting to clear storm debris yourself can be dangerous, especially when dealing with heavy tree limbs or materials entangled with power lines. Our professional debris removal teams use heavy equipment—skid steers, grapple trucks, and chainsaws—to safely clear your property. We handle the heavy lifting, hauling, and eco-friendly disposal, ensuring your yard, driveway, and roof are clean and safe so that restoration work can begin.",
            causes: [
                "Fallen trees and large branches blocking driveways, crushing fences, or resting precariously on roof structures",
                "Construction materials like shingles, siding, and aluminum fascia stripped from your home or neighboring properties",
                "Flooded furniture, carpets, and drywall that have been removed from the home and need immediate disposal",
                "Hazardous waste including broken glass, nails, and sharp metal fragments scattered across lawns and walkways"
            ],
            risks: [
                "Physical injury from attempting to move heavy or unstable debris without proper equipment and training",
                "Puncture wounds and tetanus risks from stepping on hidden nails or sharp metal in tall grass or piles",
                "Further damage to the home if fallen trees are removed incorrectly, causing them to roll or snap back onto the structure",
                "Pest infestations as piles of wet wood and debris attract termites, rodents, and mosquitoes"
            ],
            urgency: [
                "Debris blocks access for insurance adjusters and repair contractors, delaying the start of your restoration claim",
                "Wet debris against the house promotes termite activity and wood rot; clearing the perimeter is a priority",
                "HOA and municipal codes often require rapid cleanup to maintain neighborhood safety and aesthetics",
                "Loose debris becomes dangerous missiles if another storm approaches; clearing the yard protects your home"
            ]
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
        education: {
            overview: "When a storm breaches your home's defenses, waiting for business hours isn't an option. Water pouring through a hole in the roof or a broken window causes exponential damage with every passing minute. Our emergency storm repair service is built for speed and reliability. We operate 24/7/365 to provide immediate stabilization of your property. This includes installing heavy-duty roof tarps, boarding up shattered windows, extracting standing water, and structurally shoring up weakened areas. Our goal is to stop the bleeding—preventing secondary damage like mold and rot—so that permanent repairs can be planned and executed properly. We also provide the critical documentation your insurance company needs to process your emergency claim immediately.",
            causes: [
                "Sudden structural breaches from fallen trees or wind-borne debris allowing water to flood the interior",
                "Roof failures during active storms requiring immediate temporary waterproofing to protect contents",
                "Shattered windows and sliding doors leaving the home exposed to wind, rain, and potential intruders",
                "Electrical hazards and power outages requiring immediate safety assessments and temporary power solutions"
            ],
            risks: [
                "Rapid mold growth and water damage spreading to unaffected rooms if the envelope isn't sealed immediately",
                "Collapse of weakened ceilings or overhangs if water weight is not relieved and structures aren't shored up",
                "Theft and vandalism of unsecured properties, especially when neighborhoods are evacuated or without power",
                "Denial of insurance coverage for 'secondary damage' if the homeowner fails to take immediate steps to mitigate loss"
            ],
            urgency: [
                "Emergency tarping and board-up stops water intrusion instantly, saving thousands in interior repair costs",
                "Security is paramount; securing the home protects your family and your remaining possessions",
                "Documentation of the emergency condition is vital for insurance; we take photos and notes before temporary repairs cover the damage",
                "Peace of mind comes from knowing your home is stable and dry, allowing you to focus on the next steps of recovery"
            ]
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
        education: {
            overview: "Mitigation is the critical first step in any property damage event. While restoration focuses on repairing and rebuilding what was lost, mitigation is about stopping the damage from spreading further. In Florida's humid climate, the window for effective mitigation is incredibly short. Water wicks into drywall, soot corrodes metal, and mold spores colonize organic materials within hours. Our mitigation services are designed to 'stop the bleeding' immediately. Whether it's extracting standing water, boarding up a broken window, or setting up containment barriers around a mold source, our goal is to stabilize the environment. This proactive approach not only saves salvageable materials but also significantly reduces the overall cost and timeline of the insurance claim.",
            causes: [
                "Sudden water intrusion from burst pipes or appliance failures that needs immediate extraction to prevent structural saturation",
                "Fire events leaving the property exposed to weather and filled with corrosive smoke residues that damage electronics",
                "Mold discoveries that require instant containment to prevent spores from contaminating the HVAC system and other rooms",
                "Storm damage leaving the building envelope compromised, requiring emergency tarping to stop rain from entering"
            ],
            risks: [
                "Exponential increase in repair costs if water or smoke is allowed to sit for even 24 hours without mitigation",
                "Denial of insurance claims if the policyholder fails to take 'reasonable steps' to prevent further damage (a standard policy clause)",
                "Permanent damage to high-value items like hardwood floors, cabinets, and electronics that could have been saved",
                "Cross-contamination of unaffected areas, turning a localized problem into a whole-home disaster"
            ],
            urgency: [
                "Mitigation must start immediately; waiting for an adjuster to arrive days later often results in total loss of materials",
                "Mold begins to grow in 24-48 hours; drying and containment must be established before this window closes",
                "Acidic soot residues begin pitting metal and etching glass within minutes of a fire; immediate cleaning stops this corrosion",
                "Security risks from open windows or doors require instant board-up to protect the property from theft and liability"
            ]
        },
        services: [
            { icon: "fas fa-tint", title: "Water Mitigation", description: "Emergency water extraction using truck-mounted pumps and industrial dehumidifiers to stop damage progression. We remove standing water, dry structural cavities, and apply antimicrobials to prevent mold growth before restoration begins.", slug: "water-mitigation", image: "/images/water-damage.webp", link: "/restoration/mitigation-services/water-mitigation", ctaText: "Stop Water Damage", features: ["Truck-Mounted Pumps", "Industrial Dehumidifiers", "Antimicrobial Treatment"] },
            { icon: "fas fa-fire-extinguisher", title: "Fire Mitigation", description: "Immediate post-fire containment with emergency board-up, smoke sealing, and negative air machines to prevent soot spread. We extract firefighting water, stabilize structures, and protect salvageable contents before full restoration.", slug: "fire-mitigation", image: "/images/fire-damage.webp", link: "/restoration/mitigation-services/fire-mitigation", ctaText: "Contain Fire Damage", features: ["Negative Air Machines", "Smoke Sealing", "Content Protection"] },
            { icon: "fas fa-virus", title: "Mold Mitigation", description: "Rapid mold containment using plastic barriers and HEPA air scrubbers to prevent spore migration. We control moisture sources, treat affected areas with antimicrobials, and stabilize humidity levels before remediation begins.", slug: "mold-mitigation", image: "/images/mold-damage.webp", link: "/restoration/mitigation-services/mold-mitigation", ctaText: "Contain Mold Spread", features: ["Plastic Barriers", "HEPA Air Scrubbers", "Spore Prevention"] },
            { icon: "fas fa-cloud-rain", title: "Storm Mitigation", description: "Emergency storm securing with roof tarping, window board-up, and debris removal to prevent further property damage. We extract storm water, stabilize compromised structures, and document all damage for insurance claims.", slug: "storm-mitigation", image: "/images/storm-damage.webp", link: "/restoration/mitigation-services/storm-mitigation", ctaText: "Secure Storm Damage", features: ["Roof Tarping", "Window Board-Up", "Damage Documentation"] }
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
        education: {
            overview: "Water mitigation is the science of drying. It's not just about vacuuming up water; it's about removing the moisture absorbed into the structural materials of your home. When water enters a building, it follows the path of least resistance, hiding behind baseboards, under flooring, and inside wall cavities. If left unchecked, this trapped moisture causes wood to warp, drywall to disintegrate, and mold to flourish. Our water mitigation process uses industrial-grade extractors to remove standing water, followed by the strategic placement of low-grain refrigerant (LGR) dehumidifiers and high-velocity air movers. We monitor the drying progress daily using moisture meters and thermal imaging to ensure that every material reaches its dry standard, preventing secondary damage and ensuring your home is truly dry.",
            causes: [
                "Plumbing failures like burst supply lines, leaking water heaters, or overflowing toilets that flood interiors rapidly",
                "Appliance malfunctions such as dishwasher leaks or washing machine hose breaks releasing gallons of water",
                "Roof leaks or window seal failures during storms allowing rainwater to saturate insulation and drywall",
                "Sewage backups introducing contaminated water (Category 3) that requires specialized cleaning and sanitization"
            ],
            risks: [
                "Structural weakening as water breaks down the cellular structure of wood framing and dissolves drywall gypsum",
                "Microbial growth (mold and bacteria) beginning within 24-48 hours in wet, humid conditions",
                "Delamination of carpet and warping of hardwood floors, rendering them unsalvageable if not dried immediately",
                "Electrical hazards from water coming into contact with outlets, wiring, and appliances"
            ],
            urgency: [
                "The first 24 hours are the 'Golden Window' to save porous materials; after this, replacement is often the only option",
                "Standing water wicks up walls at a rate of one inch per hour, increasing the amount of drywall that needs removal",
                "Insurance coverage depends on prompt action; delays can be interpreted as negligence",
                "Humidity levels must be controlled instantly to prevent secondary moisture damage to unaffected furniture and electronics"
            ]
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
        education: {
            overview: "The aftermath of a fire is a race against time. While the flames cause immediate destruction, the smoke and soot left behind continue to damage your property long after the fire trucks leave. Soot is highly acidic and will corrode metal fixtures, etch glass, and permanently stain plastics and appliances if not neutralized quickly. Fire mitigation involves immediate actions to stabilize the property: boarding up broken windows to secure the site, placing air scrubbers to remove airborne particulates, and applying corrosion inhibitors to at-risk surfaces. We also address the water damage left by firefighting efforts, which can cause mold if not dried immediately. Our goal is to preserve as much of the structure and contents as possible before the reconstruction phase begins.",
            causes: [
                "Kitchen fires releasing protein-based smoke residues that are sticky, pungent, and difficult to clean",
                "Electrical fires causing synthetic materials to burn, creating toxic, black soot that coats surfaces",
                "Water damage from fire hoses and sprinkler systems saturating flooring and walls during suppression",
                "Breaches in the roof or windows from the fire itself or firefighter access, leaving the home exposed"
            ],
            risks: [
                "Permanent etching and pitting of aluminum window frames, chrome fixtures, and glass surfaces from acidic soot",
                "Deeply embedded smoke odors in porous materials like upholstery and carpet that become impossible to remove over time",
                "Mold growth resulting from the water used to extinguish the fire, compounding the damage",
                "Theft and vandalism if the property is not immediately boarded up and secured after the incident"
            ],
            urgency: [
                "Corrosion begins within minutes; pre-cleaning metal and glass within the first 24 hours is essential to save them",
                "Smoke odors penetrate deeper into structural framing with every passing hour, increasing deodorization costs",
                "Water must be extracted immediately to prevent the 'double disaster' of fire followed by mold",
                "Insurance adjusters need to see that you took steps to protect the property to approve the full claim"
            ]
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
        education: {
            overview: "When mold is discovered, the immediate priority is not just removal, but containment. Disturbing a mold colony without proper precautions releases billions of spores into the air, which can travel through the HVAC system and contaminate the entire building. Mold mitigation focuses on isolating the affected area to protect the rest of the property and its occupants. We construct airtight containment barriers using heavy-duty plastic and establish negative air pressure using HEPA-filtered air scrubbers. This ensures that any spores released during the assessment or stabilization process are captured and not allowed to spread. We also address the moisture source immediately—whether it's a leak or high humidity—to stop the mold from growing further while a comprehensive remediation plan is developed.",
            causes: [
                "Discovery of visible mold growth during renovations or after moving furniture",
                "Musty odors indicating hidden mold in wall cavities or crawlspaces",
                "Recent water damage events that were not properly dried, leading to fungal growth",
                "HVAC system malfunctions causing high indoor humidity and condensation on surfaces"
            ],
            risks: [
                "Cross-contamination of clean areas (bedrooms, kitchens) with mold spores, endangering family health",
                "Inhalation of mycotoxins by occupants if the area is not properly isolated",
                "Colonization of the HVAC system, which can circulate spores to every room in the house",
                "Increased remediation costs if the mold is allowed to spread beyond the initial source area"
            ],
            urgency: [
                "Containment must be set up immediately upon discovery to protect air quality",
                "Air scrubbers should be running 24/7 to reduce the ambient spore count and protect occupants",
                "Moisture sources must be stopped instantly to cut off the mold's food supply",
                "Protecting the HVAC system is critical; once contaminated, duct cleaning becomes a major expense"
            ]
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
        education: {
            overview: "After a storm passes, your home is often left vulnerable. A missing roof section, a broken window, or a collapsed fence isn't just damage—it's an entry point for more destruction. Storm mitigation is the emergency response phase that bridges the gap between the disaster and the permanent repair. Our teams deploy immediately to secure the building envelope. We install shrink-wrap or tarps on damaged roofs to prevent rain intrusion, board up shattered windows to deter looters and keep out weather, and remove hazardous debris that blocks access. By stabilizing the structure and making it watertight, we prevent the secondary wave of damage—water saturation and mold—that often causes more loss than the storm itself.",
            causes: [
                "Roof damage from high winds allowing rainwater to pour into the attic and living spaces",
                "Broken windows and doors from flying debris compromising the home's security and weatherproofing",
                "Structural instability caused by fallen trees or wind load requiring temporary shoring",
                "Flooding from storm surge or heavy rain that needs immediate extraction to prevent mold"
            ],
            risks: [
                "Catastrophic water damage to interiors if the roof is not tarped before the next rain band arrives",
                "Looting and vandalism of unsecured properties in the chaotic aftermath of a storm",
                "Collapse of weakened structural elements if not properly shored up and stabilized",
                "Rapid mold growth in the hot, humid post-storm environment if the property is not dried out"
            ],
            urgency: [
                "Emergency tarping is the single most effective way to limit loss; it must be done as soon as it is safe",
                "Security board-ups protect your remaining valuables when you may not be able to stay in the home",
                "Insurance policies require you to mitigate damage; failure to secure the home can affect your claim",
                "Removing hazardous debris is essential to allow insurance adjusters and repair crews safe access"
            ]
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
