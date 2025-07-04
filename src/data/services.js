// src/data/servicios.js

export const services = [
    {
        slug: 'bathroom',
        nombre: 'Bathroom Remodeling',
        descripcion: 'Complete bathroom renovation and remodeling services with modern designs and quality fixtures',
        icon: '🛁'
    },
    {
        slug: 'kitchen',
        nombre: 'Kitchen Remodeling',
        descripcion: 'Custom kitchen renovation with premium cabinets, countertops, and modern appliances',
        icon: '🍳'
    },
    {
        slug: 'exterior',
        nombre: 'Exterior Construction',
        descripcion: 'Exterior improvements including siding, roofing, windows, and outdoor living spaces',
        icon: '🏡'
    },
    {
        slug: 'living-dining',
        nombre: 'Living & Dining',
        descripcion: 'Living room and dining area renovation to create open, functional, and beautiful spaces',
        icon: '🛋️'
    },
    {
        slug: 'bedroom',
        nombre: 'Bedroom Remodeling',
        descripcion: 'Bedroom renovation and expansion services to create your perfect personal retreat',
        icon: '🛏️'
    },
    {
        slug: 'office',
        nombre: 'Office Construction',
        descripcion: 'Home office and commercial office space construction and renovation services',
        icon: '💼'
    }
];

export const ciudades = [
    // Central Florida
    { slug: 'orlando', nombre: 'Orlando', region: 'Central Florida', poblacion: '307,573', county: 'Orange County' },
    { slug: 'kissimmee', nombre: 'Kissimmee', region: 'Central Florida', poblacion: '79,226', county: 'Osceola County' },
    { slug: 'winter-garden', nombre: 'Winter Garden', region: 'Central Florida', poblacion: '46,964', county: 'Orange County' },
    { slug: 'clermont', nombre: 'Clermont', region: 'Central Florida', poblacion: '43,021', county: 'Lake County' },
    { slug: 'lakeland', nombre: 'Lakeland', region: 'Central Florida', poblacion: '115,451', county: 'Polk County' },
    { slug: 'sanford', nombre: 'Sanford', region: 'Central Florida', poblacion: '61,051', county: 'Seminole County' },
    { slug: 'altamonte-springs', nombre: 'Altamonte Springs', region: 'Central Florida', poblacion: '46,231', county: 'Seminole County' },
    { slug: 'oviedo', nombre: 'Oviedo', region: 'Central Florida', poblacion: '41,062', county: 'Seminole County' },

    // Tampa Bay Region (Nombre de región corregido para consistencia)
    { slug: 'tampa', nombre: 'Tampa', region: 'Tampa Bay Region', poblacion: '384,959', county: 'Hillsborough County' },
    { slug: 'st-petersburg', nombre: 'St. Petersburg', region: 'Tampa Bay Region', poblacion: '258,308', county: 'Pinellas County' },
    { slug: 'clearwater', nombre: 'Clearwater', region: 'Tampa Bay Region', poblacion: '117,292', county: 'Pinellas County' },
    { slug: 'brandon', nombre: 'Brandon', region: 'Tampa Bay Region', poblacion: '114,626', county: 'Hillsborough County' },
    { slug: 'sarasota', nombre: 'Sarasota', region: 'Tampa Bay Region', poblacion: '57,738', county: 'Sarasota County' }, // REGIÓN CORREGIDA
    { slug: 'bradenton', nombre: 'Bradenton', region: 'Tampa Bay Region', poblacion: '59,439', county: 'Manatee County' }, // REGIÓN CORREGIDA
    { slug: 'largo', nombre: 'Largo', region: 'Tampa Bay Region', poblacion: '82,485', county: 'Pinellas County' }, // AÑADIDA

    // South Florida
    { slug: 'miami', nombre: 'Miami', region: 'South Florida', poblacion: '442,241', county: 'Miami-Dade County' },
    { slug: 'fort-lauderdale', nombre: 'Fort Lauderdale', region: 'South Florida', poblacion: '182,760', county: 'Broward County' },
    { slug: 'west-palm-beach', nombre: 'West Palm Beach', region: 'South Florida', poblacion: '117,415', county: 'Palm Beach County' },
    { slug: 'boca-raton', nombre: 'Boca Raton', region: 'South Florida', poblacion: '97,422', county: 'Palm Beach County' },
    { slug: 'hollywood', nombre: 'Hollywood', region: 'South Florida', poblacion: '153,067', county: 'Broward County' },
    { slug: 'coral-gables', nombre: 'Coral Gables', region: 'South Florida', poblacion: '49,700', county: 'Miami-Dade County' },
    { slug: 'homestead', nombre: 'Homestead', region: 'South Florida', poblacion: '80,737', county: 'Miami-Dade County' },
    { slug: 'pembroke-pines', nombre: 'Pembroke Pines', region: 'South Florida', poblacion: '171,178', county: 'Broward County' },
    { slug: 'miramar', nombre: 'Miramar', region: 'South Florida', poblacion: '134,721', county: 'Broward County' },
    { slug: 'miami-beach', nombre: 'Miami Beach', region: 'South Florida', poblacion: '82,890', county: 'Miami-Dade County' },

    // Southwest Florida
    { slug: 'naples', nombre: 'Naples', region: 'Southwest Florida', poblacion: '22,088', county: 'Collier County' },
    { slug: 'cape-coral', nombre: 'Cape Coral', region: 'Southwest Florida', poblacion: '194,016', county: 'Lee County' },
    { slug: 'fort-myers', nombre: 'Fort Myers', region: 'Southwest Florida', poblacion: '86,395', county: 'Lee County' },
    { slug: 'bonita-springs', nombre: 'Bonita Springs', region: 'Southwest Florida', poblacion: '53,644', county: 'Lee County' },
    { slug: 'marco-island', nombre: 'Marco Island', region: 'Southwest Florida', poblacion: '17,963', county: 'Collier County' },
    { slug: 'port-charlotte', nombre: 'Port Charlotte', region: 'Southwest Florida', poblacion: '60,625', county: 'Charlotte County' }, // AÑADIDA
    { slug: 'venice', nombre: 'Venice', region: 'Southwest Florida', poblacion: '25,463', county: 'Sarasota County' }, // AÑADIDA
    { slug: 'estero', nombre: 'Estero', region: 'Southwest Florida', poblacion: '36,939', county: 'Lee County' }, // AÑADIDA

    // Treasure Coast
    { slug: 'port-st-lucie', nombre: 'Port St. Lucie', region: 'Treasure Coast', poblacion: '204,851', county: 'St. Lucie County' },
    { slug: 'stuart', nombre: 'Stuart', region: 'Treasure Coast', poblacion: '17,287', county: 'Martin County' },
    { slug: 'vero-beach', nombre: 'Vero Beach', region: 'Treasure Coast', poblacion: '17,350', county: 'Indian River County' },
    { slug: 'jupiter', nombre: 'Jupiter', region: 'Treasure Coast', poblacion: '61,047', county: 'Palm Beach County' }, // AÑADIDA
    { slug: 'palm-city', nombre: 'Palm City', region: 'Treasure Coast', poblacion: '25,836', county: 'Martin County' }, // AÑADIDA
    { slug: 'hobe-sound', nombre: 'Hobe Sound', region: 'Treasure Coast', poblacion: '14,699', county: 'Martin County' }, // AÑADIDA
    { slug: 'fort-pierce', nombre: 'Fort Pierce', region: 'Treasure Coast', poblacion: '47,297', county: 'St. Lucie County' }, // AÑADIDA
    { slug: 'jensen-beach', nombre: 'Jensen Beach', region: 'Treasure Coast', poblacion: '12,652', county: 'Martin County' }, // AÑADIDA
];

// Función para generar todas las combinaciones
export function getAllCombinations() {
    const combinations = [];

    services.forEach(servicio => {
        ciudades.forEach(ciudad => {
            combinations.push({
                servicio: servicio.slug,
                ciudad: ciudad.slug,
                servicioData: servicio,
                ciudadData: ciudad
            });
        });
    });

    return combinations;
}
// Función para obtener datos específicos
export function getServicioData(slug) {
    return servicios.find(s => s.slug === slug);
}

export function getCiudadData(slug) {
    return ciudades.find(c => c.slug === slug);
}

// Función para obtener ciudades por región
export function getCiudadesByRegion(region) {
    return ciudades.filter(c => c.region === region);
}

// Función para obtener estadísticas
export function getStats() {
    return {
        totalServicios: servicios.length,
        totalCiudades: ciudades.length,
        totalCombinaciones: servicios.length * ciudades.length,
        regiones: [...new Set(ciudades.map(c => c.region))]
    };
}