/**
 * Global Constants for Paramount Property Restoration
 * Centralized configuration for contact info, branding, and common values
 */

// Contact Information
export const CONTACT_PHONE = "+1-786-602-2217";
export const CONTACT_PHONE_FORMATTED = "(786) 602-2217";
export const CONTACT_PHONE_DISPLAY = "786-602-2217";

// Brand Colors
export const BRAND_COLORS = {
    primary: "#35c3e9",
    primaryDark: "#2ba3c9",
    dark: "#1E293B",
    accent: "#35c3e9",
    white: "#ffffff",
    light: "#f8f9fa",
    gray: "#666666",
};

// Company Information
export const COMPANY_INFO = {
    name: "Paramount Property Restoration",
    legalName: "Paramount Property Restoration LLC",
    phone: CONTACT_PHONE,
    phoneFormatted: CONTACT_PHONE_FORMATTED,
    phoneDisplay: CONTACT_PHONE_DISPLAY,
    email: "info@paramountpropertyrestoration.com",
    website: "https://paramountpropertyrestoration.com",

    // Business Address
    address: {
        street: "",
        city: "Miami",
        state: "FL",
        stateCode: "FL",
        zip: "",
        region: "South Florida"
    },

    // Service Area
    serviceArea: {
        primary: "Central and South Florida",
        regions: ["South Florida", "Central Florida", "Tampa Bay", "Southwest Florida", "Northeast Florida"],
    },
};

// Service Hours
export const SERVICE_HOURS = {
    emergency: "24/7/365",
    office: {
        weekday: "Monday - Friday, 7:00 AM - 6:00 PM",
        weekend: "Available by appointment",
    },
};

// Social Media (if needed)
export const SOCIAL_MEDIA = {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
};

// SEO Constants
export const SEO_DEFAULTS = {
    siteName: "Paramount Property Restoration",
    defaultDescription: "Florida's complete property partner: 24/7 emergency restoration (water, fire, mold, storm) + professional remodeling services. Licensed, insured, rapid response.",
    ogImage: "/images/og-image.webp",
};
