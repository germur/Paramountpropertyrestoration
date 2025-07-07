import '../styles/components/LinkBuildingSection.css'

const LinkBuildingSection = ({
    baseUrl = "",
    showStats = false,
    showTitle = false,
    compact = true,
    categories = "all"
}) => {

    // El objeto de datos ahora está organizado por regiones geográficas
    const linkData = {
        centralFlorida: {
            title: "Central Florida",
            icon: "🎯",
            description: "Covering the tourism and residential hubs of the state's core.",
            links: [
                { href: "/services/kitchen-remodeling/orlando", text: "Kitchen Remodeling Orlando" },
                { href: "/services/kitchen-remodeling/altamonte-springs", text: "Kitchen Remodeling Altamonte Springs" },
                { href: "/services/bathroom-remodeling/kissimmee", text: "Bathroom Remodeling Kissimmee" },
                { href: "/services/bathroom-remodeling/oviedo", text: "Bathroom Remodeling Oviedo" },
                { href: "/services/living-dining-remodeling/clermont", text: "Living & Dining Clermont" },
                { href: "/services/living-dining-remodeling/lakeland", text: "Living & Dining Lakeland" },
                { href: "/services/bedroom-remodeling/lakeland", text: "Bedroom Remodeling Lakeland" },
                { href: "/services/bedroom-remodeling/winter-garden", text: "Bedroom Remodeling Winter Garden" },
                { href: "/services/home-additions-remodeling/orlando", text: "Home Additions Remodeling Orlando" },
                { href: "/services/home-additions-remodeling/kissimmee", text: "Home Additions Remodeling Kissimmee" }
            ]
        },
        tampaBayRegion: {
            title: "Tampa Bay Region",
            icon: "⛵",
            description: "Serving the vibrant and growing markets around Tampa Bay.",
            links: [
                { href: "/services/kitchen-remodeling/tampa", text: "Kitchen Remodeling Tampa" },
                { href: "/services/kitchen-remodeling/lakeland", text: "Kitchen Remodeling Lakeland" },
                { href: "/services/bathroom-remodeling/brandon", text: "Bathroom Remodeling Brandon" },
                { href: "/services/bathroom-remodeling/largo", text: "Bathroom Remodeling Largo" },
                { href: "/services/living-dining-remodeling/sarasota", text: "Living & Dining Sarasota" },
                { href: "/services/living-dining-remodeling/st-petersburg", text: "Living & Dining Remodeling St. Petersburg" },
                { href: "/services/bedroom-remodeling/bradenton", text: "Bedroom Remodeling Bradenton" },
                { href: "/services/bedroom-remodeling/clearwater", text: "Bedroom Remodeling Clearwater" },
                { href: "/services/home-additions-remodeling/tampa", text: "Home Additions Remodeling Tampa" },
                { href: "/services/home-additions-remodeling/st-petersburg", text: "Home Additions Remodeling St. Petersburg" }
            ]
        },
        southFlorida: {
            title: "South Florida",
            icon: "🌴",
            description: "Our premier services for the dynamic South Florida metropolis.",
            links: [
                { href: "/services/kitchen-remodeling/fort-lauderdale", text: "Kitchen Remodeling Fort Lauderdale" },
                { href: "/services/kitchen-remodeling/homestead", text: "Kitchen Remodeling Homestead" },
                { href: "/services/bathroom-remodeling/miami", text: "Bathroom Remodeling Miami" },
                { href: "/services/bathroom-remodeling/pembroke-pines", text: "Bathroom Remodeling Pembroke Pines" },
                { href: "/services/living-dining-remodeling/west-palm-beach", text: "Living & Dining West Palm Beach" },
                { href: "/services/living-dining-remodeling/miramar", text: "Living & Dining Miramar" },
                { href: "/services/bedroom-remodeling/hollywood", text: "Bedroom Remodeling Hollywood" },
                { href: "/services/bedroom-remodeling/boca-raton", text: "Bedroom Remodeling Boca Raton" },
                { href: "/services/home-additions-remodeling/miami", text: "Home Additions Remodeling Miami" },
                { href: "/services/home-additions-remodeling/coral-gables", text: "Home Additions Remodeling Coral Gables" }
            ]
        },
        southwestFlorida: {
            title: "Southwest Florida",
            icon: "☀️",
            description: "High-end remodeling for Florida's beautiful Gulf Coast communities.",
            links: [
                { href: "/services/kitchen-remodeling/bonita-springs", text: "Kitchen Remodeling Bonita Springs" },
                { href: "/services/kitchen-remodeling/estero", text: "Kitchen Remodeling Estero" },
                { href: "/services/bathroom-remodeling/fort-myers", text: "Bathroom Remodeling Fort Myers" },
                { href: "/services/bathroom-remodeling/venice", text: "Bathroom Remodeling Venice" },
                { href: "/services/bedroom-remodeling/naples", text: "Bedroom Remodeling Naples" },
                { href: "/services/bedroom-remodeling/cape-coral", text: "Bedroom Remodeling Cape Coral" },
                { href: "/services/living-dining-remodeling/marco-island", text: "Living & Dining Marco Island" },
                { href: "/services/living-dining-remodeling/port-charlotte", text: "Living & Dining Port Charlotte" },
                { href: "/services/home-additions-remodeling/naples", text: "Home Additions Remodeling Naples" },
                { href: "/services/home-additions-remodeling/cape-coral", text: "Home Additions Remodeling Cape Coral" }
            ]
        },
        treasureCoast: {
            title: "Treasure Coast",
            icon: "💎",
            description: "Expert construction and remodeling along the Treasure Coast.",
            links: [
                { href: "/services/kitchen-remodeling/stuart", text: "Kitchen Remodeling Stuart" },
                { href: "/services/kitchen-remodeling/jensen-beach", text: "Kitchen Remodeling Jensen Beach" },
                { href: "/services/bathroom-remodeling/port-st-lucie", text: "Bathroom Remodeling Port St. Lucie" },
                { href: "/services/bathroom-remodeling/fort-pierce", text: "Bathroom Remodeling Fort Pierce" },
                { href: "/services/living-dining-remodeling/jupiter", text: "Living & Dining Jupiter" },
                { href: "/services/living-dining-remodeling/vero-beach", text: "Living & Dining Vero Beach" },
                { href: "/services/bedroom-remodeling/palm-city", text: "Bedroom Remodeling Palm City" },
                { href: "/services/bedroom-remodeling/hobe-sound", text: "Bedroom Remodeling Hobe Sound" },
                { href: "/services/home-additions-remodeling/port-st-lucie", text: "Home Additions Remodeling Port St. Lucie" },
                { href: "/services/home-additions-remodeling/vero-beach", text: "Home Additions Remodeling Vero Beach" }
            ]
        }
    };

    const getCategoriesToShow = () => {
        if (categories === "all") return Object.keys(linkData);
        if (Array.isArray(categories)) return categories;
        return [categories];
    };

    const categoriesToShow = getCategoriesToShow();
    const totalLinks = categoriesToShow.reduce((sum, cat) => sum + linkData[cat].links.length, 0);

    return (
        <div className={`link-building-container ${compact ? 'compact' : 'full'}`}>
            <div className="link-building-inner">
                {showTitle && (
                    <div className={`link-building-header ${compact ? 'compact' : ''}`}>
                        <h2 className={`link-building-title ${compact ? 'compact' : ''}`}>
                            Our Service Areas
                        </h2>
                        <p className={`link-building-subtitle ${compact ? 'compact' : ''}`}>
                            Providing expert remodeling and construction services across Florida's key regions.
                        </p>
                    </div>
                )}

                {showStats && (
                    <div className={`link-building-stats ${compact ? 'compact' : ''}`}></div>
                )}

                <div className={`link-building-grid ${compact ? 'compact' : ''}`}>
                    {categoriesToShow.map((categoryKey) => {
                        const category = linkData[categoryKey];
                        return (
                            <div
                                key={categoryKey}
                                className={`link-category ${compact ? 'compact' : ''}`}
                            >
                                <div className={`category-header ${compact ? 'compact' : ''}`}>
                                    <div className={`category-icon ${compact ? 'compact' : ''}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className={`category-title ${compact ? 'compact' : ''}`}>
                                        {category.title}
                                    </h3>
                                </div>
                                <div className={`links-list ${compact ? 'compact' : ''}`}>
                                    {category.links.map((link, index) => (
                                        <a target="_blank"
                                            key={index}
                                            href={`${baseUrl}${link.href}`}
                                            className={`link-item ${compact ? 'compact' : ''}`}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LinkBuildingSection;