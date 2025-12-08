import { cities } from "./locations.js";

export const cleaningVertical = {
    title: "Commercial Grade Hygiene for Your Facility",
    subtitle: "We elevate the standard of commercial cleaning in Florida. Restoration technology applied to daily facility maintenance.",
    heroVideo: "/videos/cleaning-hero.mp4", // Placeholder
};

export const pricingPackages = [
    {
        id: "day-porter",
        name: "Day Porter Service",
        tagline: "Continuous Facility Care",
        idealFor: "High-traffic offices, medical centers, and lobbies requiring constant upkeep.",
        features: [
            "Restroom sanitation & restocking",
            "Lobby & reception upkeep",
            "Spill response & spot cleaning",
            "High-touch point disinfection",
            "Cafeteria/breakroom maintenance"
        ],
        cta: "Request Porter",
        icon: "fas fa-user-tie"
    },
    {
        id: "janitorial",
        name: "Nightly Janitorial",
        tagline: "Comprehensive After-Hours Care",
        isPopular: true,
        idealFor: "Offices, retail spaces, and banks requiring thorough nightly cleaning.",
        features: [
            "Full trash removal & liner replacement",
            "Vacuuming & mopping of all floors",
            "Restroom deep cleaning & sanitization",
            "Desk & surface dusting",
            "Secure facility lock-up protocol"
        ],
        cta: "Schedule Walkthrough",
        icon: "fas fa-moon"
    },
    {
        id: "commercial-deep",
        name: "Commercial Deep Clean",
        tagline: "Restorative Facility Reset",
        idealFor: "Quarterly maintenance, post-event cleaning, or new tenant prep.",
        features: [
            "Carpet extraction & upholstery cleaning",
            "VCT floor stripping & waxing",
            "High dusting (vents, lights, ceilings)",
            "Grout scrubbing & sealing",
            "Window washing (interior/exterior)"
        ],
        cta: "Get Project Quote",
        icon: "fas fa-hands-bubbles"
    }
];

export const protocolSteps = [
    {
        category: "Restroom Sanitation",
        steps: [
            { text: "Hospital-grade disinfection of all fixtures", icon: "Spray" },
            { text: "Grout line scrubbing and organic waste removal", icon: "Grid" },
            { text: "Partition wall and door sanitization", icon: "Shield" },
            { text: "Restocking of all consumables (soap, paper, etc.)", icon: "RefreshCw" },
            { text: "Odor neutralization treatment", icon: "Wind" }
        ]
    },
    {
        category: "Workspace & Common Areas",
        steps: [
            { text: "HEPA vacuuming of carpets and mats", icon: "Fan" },
            { text: "Damp wiping of desks, phones, and keyboards", icon: "Monitor" },
            { text: "Glass and entryway door polishing", icon: "Sparkles" },
            { text: "Trash and recycling removal with liner change", icon: "Trash2" },
            { text: "Light switch and door handle disinfection", icon: "Fingerprint" }
        ]
    },
    {
        category: "Floor Care & Maintenance",
        steps: [
            { text: "Auto-scrubbing of hard surface floors", icon: "Disc" },
            { text: "Burnishing for high-gloss finish", icon: "Sun" },
            { text: "Spot carpet cleaning for high traffic lanes", icon: "Droplets" },
            { text: "Baseboard detail cleaning", icon: "RectangleHorizontal" },
            { text: "Safety mat placement and cleaning", icon: "Footprints" }
        ]
    },
    {
        category: "The Paramount Standard (Exclusive)",
        highlight: true,
        steps: [
            { text: "Monthly ATP surface testing reports", icon: "Microscope" },
            { text: "Proactive HVAC filter check", icon: "AirVent" },
            { text: "OSHA compliant safety protocols", icon: "HardHat" },
            { text: "Uniformed, badged, and background-checked staff", icon: "IdCard" },
            { text: "Digital communication log for facility managers", icon: "Tablet" }
        ]
    }
];

export const cleaningServices = [
    {
        slug: "janitorial-services",
        title: "Janitorial Services",
        shortDescription: "Daily or nightly cleaning for professional environments.",
        fullDescription: "Consistent, reliable cleaning that keeps your business running smoothly. We customize our schedule to your operations, ensuring a pristine environment for employees and clients without disruption.",
        benefits: ["Customized cleaning schedules", "Supply inventory management", "Dedicated account manager"],
        icon: "fas fa-broom"
    },
    {
        slug: "commercial-floor-care",
        title: "Commercial Floor Care",
        shortDescription: "Specialized care for VCT, carpet, tile, and stone.",
        fullDescription: "Protect your flooring investment with our specialized maintenance programs. From strip and wax for VCT to encapsulation cleaning for carpets, we extend the life of your commercial floors.",
        benefits: ["VCT Strip & Wax", "Carpet Extraction", "Tile & Grout Restoration"],
        icon: "fas fa-arrows-spin"
    },
    {
        slug: "post-construction",
        title: "Post-Construction",
        shortDescription: "Final clean for new builds and renovations.",
        fullDescription: "Turn your construction site into a showroom. We handle the heavy lifting of debris removal, fine dust cleaning, and final detail work to get your property ready for occupancy.",
        benefits: ["Debris removal", "Fine dust extraction", "Window detailing"],
        icon: "fas fa-hard-hat"
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
