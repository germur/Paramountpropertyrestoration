// Defines semantic relationships between services to improve internal linking and break silos
// Used in programmatic templates to suggest related services within the same city

export const relatedServices = {
    'water-damage': [
        { slug: 'mold-remediation', label: 'Mold Remediation' },
        { slug: 'storm-damage', label: 'Storm Damage Restoration' },
        { slug: 'fire-damage', label: 'Fire Damage Restoration' }
    ],
    'mold-remediation': [
        { slug: 'water-damage', label: 'Water Damage Restoration' },
        { slug: 'mold-remediation/mold-inspection', label: 'Mold Inspection' },
        { slug: 'mold-remediation/mold-testing', label: 'Mold Testing' }
    ],
    'fire-damage': [
        { slug: 'water-damage', label: 'Water Damage Restoration' }, // Water is used to put out fires
        { slug: 'fire-damage/smoke-damage', label: 'Smoke Damage Cleanup' },
        { slug: 'mitigation-services/fire-mitigation', label: 'Fire Mitigation' }
    ],
    'storm-damage': [
        { slug: 'water-damage', label: 'Water Damage Restoration' },
        { slug: 'storm-damage/hurricane-damage', label: 'Hurricane Damage Repair' },
        { slug: 'storm-damage/wind-damage', label: 'Wind Damage Repair' }
    ],
    // Sub-services mapping to parent or siblings
    'mold-inspection': [
        { slug: 'mold-remediation', label: 'Mold Remediation' },
        { slug: 'mold-remediation/mold-testing', label: 'Mold Testing' },
        { slug: 'water-damage', label: 'Water Damage Restoration' }
    ],
    'water-damage/flood-damage': [
        { slug: 'water-damage/emergency-water-removal', label: 'Emergency Water Removal' },
        { slug: 'mold-remediation', label: 'Mold Prevention' }
    ]
};

// Helper function to get related services for a given service slug
export function getRelatedServices(currentServiceSlug) {
    // Direct match
    if (relatedServices[currentServiceSlug]) {
        return relatedServices[currentServiceSlug];
    }

    // Fallback for sub-services (e.g., 'water-damage/flood-damage' -> try 'water-damage')
    const parentService = currentServiceSlug.split('/')[0];
    if (relatedServices[parentService]) {
        // Filter out the current subservice if it appears in the parent's list
        return relatedServices[parentService].filter(s => s.slug !== currentServiceSlug);
    }

    return [];
}
