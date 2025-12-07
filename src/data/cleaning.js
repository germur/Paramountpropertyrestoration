// src/data/cleaning.js
import { cities } from "./locations.js";

export const cleaningVertical = {
    title: "Clinical Grade Hygiene for Your Home",
    subtitle: "We elevate the standard of residential cleaning in Florida. Restoration technology applied to daily home maintenance.",
    heroVideo: "/videos/cleaning-hero.mp4", // Placeholder
};

export const pricingPackages = [
    {
        id: "essential",
        name: "Essential Maintenance",
        tagline: "Weekly or Bi-weekly Clinical Care",
        idealFor: "Regular maintenance to keep humidity and dust in check.",
        features: [
            "Surface sanitization",
            "HEPA vacuuming of floors",
            "Kitchen & Bathroom clinical clean",
            "Dust removal",
            "Touch-point disinfection"
        ],
        cta: "Schedule Weekly",
        icon: "fas fa-sparkles"
    },
    {
        id: "restorative",
        name: "Restorative Deep Clean",
        tagline: "The 'Reset Button' for Your Home",
        isPopular: true,
        idealFor: "First-time cleans, spring cleaning, or homes untouched for 3+ months.",
        features: [
            "All Essential features",
            "Hand-washing baseboards",
            "Interior cabinet cleaning (if requested)",
            "Window treatment",
            "A/C Vent inspection",
            "Moisture check in wet areas"
        ],
        cta: "Schedule Deep Clean",
        icon: "fas fa-hands-bubbles"
    },
    {
        id: "transitional",
        name: "Transition & Move-In/Out",
        tagline: "Security Deposit Guard",
        idealFor: "Buying, selling, or changing tenants.",
        features: [
            "Guaranteed inspection pass",
            "Appliance deep clean (interior)",
            "Full sanitization fogging",
            "Inside cupboards & drawers",
            "Scuff mark removal"
        ],
        cta: "Get Moving Quote",
        icon: "fas fa-box-open"
    }
];

export const protocolSteps = [
    {
        category: "Kitchen Hygiene",
        steps: [
            { text: "Hospital-grade disinfection of countertops", icon: "Spray" },
            { text: "Deep cleaning of appliance exteriors & handles", icon: "Sparkles" },
            { text: "Scrubbing and sealing of floor grout lines", icon: "Grid" },
            { text: "Degreasing of range hoods and backsplashes", icon: "Fan" },
            { text: "Sanitization of sinks and faucets", icon: "Droplets" }
        ]
    },
    {
        category: "Bathroom Sanitization",
        steps: [
            { text: "Anti-mold treatment for shower walls and glass", icon: "CloudFog" },
            { text: "High-level disinfection of toilets and bidets", icon: "Trash2" },
            { text: "Exhaust fan cleaning and flow check", icon: "Wind" },
            { text: "Descaling of faucets and showerheads", icon: "Waves" },
            { text: "Moisture meter check around toilets/tubs (The PPR Factor)", icon: "Activity" }
        ]
    },
    {
        category: "Air & Surfaces",
        steps: [
            { text: "HEPA vacuuming of all upholstery", icon: "Sofa" },
            { text: "Damp wiping of baseboards and door frames", icon: "RectangleHorizontal" },
            { text: "Ceiling fan blade cleaning", icon: "Fan" },
            { text: "Window sill and track vacuuming/wiping", icon: "AlignJustify" },
            { text: "Light switch and doorknob disinfection", icon: "Fingerprint" }
        ]
    },
    {
        category: "The Paramount Factor (Exclusive)",
        highlight: true,
        steps: [
            { text: "Visual leak inspection under sinks", icon: "Search" },
            { text: "A/C filter check and return grill vacuuming", icon: "AirVent" },
            { text: "Relative humidity spot-check in critical areas", icon: "ThermometerSun" },
            { text: "Bio-load swab testing (optional add-on)", icon: "TestTube" },
            { text: "Digital report of any structural concerns found", icon: "FileText" }
        ]
    }
];

export const cleaningServices = [
    {
        slug: "deep-cleaning",
        title: "Deep Cleaning Services",
        shortDescription: "A thorough top-to-bottom clean to reset your home's hygiene.",
        fullDescription: "Our Deep Cleaning service goes beyond aesthetics. We remove deep-seated dust, allergens, and potential mold food sources from every corner of your home, using restoration-grade equipment.",
        benefits: ["Eliminates accumulated allergens", "Restores surface shine", "Prevents long-term material degradation"],
        icon: "fas fa-layer-group"
    },
    {
        slug: "move-in-move-out",
        title: "Move-In / Move-Out Cleaning",
        shortDescription: "Ensure a fresh start or a full security deposit return.",
        fullDescription: "Whether you are selling a home or moving into a new one, our transitional cleaning ensures the property is clinically clean and free of previous biological footprints.",
        benefits: ["Security deposit guarantee", "Sanitized for new occupants", "Photo-documented results"],
        icon: "fas fa-truck-moving"
    },
    {
        slug: "sanitization-disinfection",
        title: "Sanitization & Disinfection",
        shortDescription: "Hospital-grade protection against viruses and bacteria.",
        fullDescription: "Using EPA-approved disinfectants and electrostatic fogging, we neutralize 99.9% of pathogens. Ideal for homes with immunocompromised residents or after illness.",
        benefits: ["EPA-approved chemicals", "Electrostatic technology", "Safe for pets and kids"],
        icon: "fas fa-virus-slash"
    }
];

// Helper to get combinations with cities (if needed for SEO pages)
export function getCleaningCityCombinations() {
    const combinations = [];
    cleaningServices.forEach(service => {
        cities.forEach(city => {
            combinations.push({
                params: {
                    service: service.slug,
                    city: city.slug
                },
                props: {
                    service,
                    city
                }
            });
        });
    });
    return combinations;
}
