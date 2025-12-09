// src/data/faqs.js

// 1. Preguntas Globales (Appears everywhere - Trust & Authority)
export const commonFAQs = [
    {
        id: 'global-1',
        question: "Do you work directly with my insurance company?",
        answer: "Yes, we handle the entire claims process. We document the damage, submit the billing directly to your insurance provider (Direct Billing), and negotiate to ensure you get the coverage you deserve."
    },
    {
        id: 'global-2',
        question: "Are your technicians licensed and certified?",
        answer: "Absolutely. Our team holds IICRC certifications for Water, Fire, and Mold restoration. We are also fully licensed and insured to operate in the state of Florida."
    },
    {
        id: 'global-3',
        question: "What is your emergency response time in Florida?",
        answer: "We guarantee a 60-minute response time for emergencies in Miami, Orlando, Tampa, and surrounding areas. Our teams are on standby 24/7 to prevent secondary damage."
    }
];

// 2. Preguntas Específicas por Servicio (SEO Long-Tail & PAA)
export const serviceFAQs = {
    "water-damage": [
        {
            id: 'water-1',
            question: "How much does water damage restoration cost in Florida without insurance?",
            answer: "Costs vary widely based on the Category (clean vs. sewage) and Class (extent) of water damage. Simple extraction can start around $1,000, while extensive structural drying and repairs can range from $3,000 to over $10,000. We provide free on-site inspections to give you an accurate estimate."
        },
        {
            id: 'water-2',
            question: "How long does it take for mold to grow after a leak?",
            answer: "In Florida's humid climate, mold can begin to grow within 24 to 48 hours of water exposure. Immediate water extraction and professional structural drying are critical to prevent mold infestations."
        },
        {
            id: 'water-3',
            question: "What is the difference between water mitigation and restoration?",
            answer: "Water mitigation stops the damage (extraction, drying, cleaning), while restoration repairs the structure (drywall replacement, painting, flooring). We perform both services seamlessly to get your home back to normal."
        },
        {
            id: 'water-4',
            question: "Can I stay in my house during water damage cleanup?",
            answer: "It depends on the severity. If there is extensive flooding, sewage contamination, or lack of power/A/C, we may recommend temporary relocation. For minor leaks where we can isolate the work area, you can often stay safely."
        }
    ],
    "fire-damage": [
        {
            id: 'fire-1',
            question: "Is it safe to sleep in a house with smoke smell?",
            answer: "We do not recommend it. Smoke particles contain toxins and carcinogens that can continue to settle in your lungs. Additionally, lingering odors indicate that particulate matter is still present in the air and surfaces."
        },
        {
            id: 'fire-2',
            question: "How do you remove the smoke smell permanently?",
            answer: "We don't just mask odors. We use thermal fogging, ozone generators, and hydroxyl machines to neutralize smoke particles embedded in walls, ducts, and furniture at the molecular level."
        },
        {
            id: 'fire-3',
            question: "Can you save furniture damaged by smoke and soot?",
            answer: "Often, yes. We use specialized cleaning techniques, including ultrasonic cleaning and restoration dry cleaning, to salvage furniture, electronics, and textiles. Items that cannot be saved are documented for your insurance claim."
        }
    ],
    "mold-remediation": [
        {
            id: 'mold-1',
            question: "Does bleach kill mold on drywall?",
            answer: "No. Bleach is effective on non-porous surfaces like tile, but on porous materials like drywall or wood, it only bleaches the color while the roots remain and regrow. We use professional antimicrobial solutions and physical removal (hepa vacuuming, removal of affected materials) to eliminate the colony effectively."
        },
        {
            id: 'mold-2',
            question: "Does homeowners insurance cover mold remediation in Florida?",
            answer: "It depends. If the mold is a result of a sudden, covered peril (like a burst pipe) and reported immediately, it is often covered. Slow leaks or maintenance neglect are typically excluded. We help you review your policy and document the source of damage."
        },
        {
            id: 'mold-3',
            question: "Is mold inspection free?",
            answer: "We offer free visual inspections. If a mold problem is suspected but not visible, or if insurance requires it, we recommend a third-party air quality test, which typically has a fee but provides the necessary legal proof of mold types and levels."
        }
    ],
    "storm-damage": [
        {
            id: 'storm-1',
            question: "What should I do right after storm damage?",
            answer: "Ensure safety first. Stay away from downed power lines. Then, call a professional for emergency tarping or board-up services to prevent further rain intrusion. Document all damage with photos before moving any debris."
        },
        {
            id: 'storm-2',
            question: "Do you provide emergency roof tarping?",
            answer: "Yes, we provide 24/7 emergency roof tarping and window board-up services to secure your property immediately after a hurricane or severe storm, preventing secondary water damage."
        }
    ]
    // Add other services as needed
};

// Función helper para combinar preguntas
export const getFAQs = (serviceSlug) => {
    // Si el slug no coincide exacto, intenta buscar uno que contenga parte del string (ej: 'water')
    let specific = serviceFAQs[serviceSlug] || [];

    // Fallback: buscar por keyword si no hay match exacto
    if (specific.length === 0 && serviceSlug) {
        if (serviceSlug.includes('water')) specific = serviceFAQs['water-damage'];
        else if (serviceSlug.includes('fire')) specific = serviceFAQs['fire-damage'];
        else if (serviceSlug.includes('mold')) specific = serviceFAQs['mold-remediation'];
        else if (serviceSlug.includes('storm')) specific = serviceFAQs['storm-damage'];
    }

    return [...specific, ...commonFAQs];
};
