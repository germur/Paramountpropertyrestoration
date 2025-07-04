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
                { href: "/services/kitchen/orlando", text: "Kitchen Remodeling Orlando" },
                { href: "/services/bathroom/kissimmee", text: "Bathroom Remodeling Kissimmee" },
                { href: "/services/exterior/winter-garden", text: "Exterior Construction Winter Garden" },
                { href: "/services/living-dining/clermont", text: "Living & Dining Clermont" },
                { href: "/services/bedroom/lakeland", text: "Bedroom Remodeling Lakeland" },
                { href: "/services/office/sanford", text: "Office Construction Sanford" },
                { href: "/services/kitchen/altamonte-springs", text: "Kitchen Remodeling Altamonte Springs" },
                { href: "/services/bathroom/oviedo", text: "Bathroom Remodeling Oviedo" }
            ]
        },
        tampaBayRegion: {
            title: "Tampa Bay Region",
            icon: "⛵",
            description: "Serving the vibrant and growing markets around Tampa Bay.",
            links: [
                { href: "/services/kitchen/tampa", text: "Kitchen Remodeling Tampa" },
                { href: "/services/exterior/st-petersburg", text: "Exterior Construction St. Petersburg" },
                { href: "/services/office/clearwater", text: "Office Construction Clearwater" },
                { href: "/services/bathroom/brandon", text: "Bathroom Remodeling Brandon" },
                { href: "/services/living-dining/sarasota", text: "Living & Dining Sarasota" },
                { href: "/services/bedroom/bradenton", text: "Bedroom Remodeling Bradenton" },
                { href: "/services/kitchen/lakeland", text: "Kitchen Remodeling Lakeland" },
                { href: "/services/bathroom/largo", text: "Bathroom Remodeling Largo" }
            ]
        },
        southFlorida: {
            title: "South Florida",
            icon: "🌴",
            description: "Our premier services for the dynamic South Florida metropolis.",
            links: [
                { href: "/services/bathroom/miami", text: "Bathroom Remodeling Miami" },
                { href: "/services/kitchen/fort-lauderdale", text: "Kitchen Remodeling Fort Lauderdale" },
                { href: "/services/living-dining/west-palm-beach", text: "Living & Dining West Palm Beach" },
                { href: "/services/office/boca-raton", text: "Office Construction Boca Raton" },
                { href: "/services/bedroom/hollywood", text: "Bedroom Remodeling Hollywood" },
                { href: "/services/exterior/coral-gables", text: "Exterior Construction Coral Gables" },
                { href: "/services/kitchen/homestead", text: "Kitchen Remodeling Homestead" },
                { href: "/services/bathroom/pembroke-pines", text: "Bathroom Remodeling Pembroke Pines" },
                { href: "/services/living-dining/miramar", text: "Living & Dining Miramar" },
                { href: "/services/exterior/miami-beach", text: "Exterior Construction Miami Beach" }
            ]
        },
        southwestFlorida: {
            title: "Southwest Florida",
            icon: "☀️",
            description: "High-end remodeling for Florida's beautiful Gulf Coast communities.",
            links: [
                { href: "/services/bedroom/naples", text: "Bedroom Remodeling Naples" },
                { href: "/services/exterior/cape-coral", text: "Exterior Construction Cape Coral" },
                { href: "/services/bathroom/fort-myers", text: "Bathroom Remodeling Fort Myers" },
                { href: "/services/kitchen/bonita-springs", text: "Kitchen Remodeling Bonita Springs" },
                { href: "/services/living-dining/marco-island", text: "Living & Dining Marco Island" },
                { href: "/services/office/port-charlotte", text: "Office Construction Port Charlotte" },
                { href: "/services/bathroom/venice", text: "Bathroom Remodeling Venice" },
                { href: "/services/kitchen/estero", text: "Kitchen Remodeling Estero" }
            ]
        },
        treasureCoast: {
            title: "Treasure Coast",
            icon: "💎",
            description: "Expert construction and remodeling along the Treasure Coast.",
            links: [
                { href: "/services/bathroom/port-st-lucie", text: "Bathroom Remodeling Port St. Lucie" },
                { href: "/services/kitchen/stuart", text: "Kitchen Remodeling Stuart" },
                { href: "/services/exterior/vero-beach", text: "Exterior Construction Vero Beach" },
                { href: "/services/living-dining/jupiter", text: "Living & Dining Jupiter" },
                { href: "/services/bedroom/palm-city", text: "Bedroom Remodeling Palm City" },
                { href: "/services/office/hobe-sound", text: "Office Construction Hobe Sound" },
                { href: "/services/bathroom/fort-pierce", text: "Bathroom Remodeling Fort Pierce" },
                { href: "/services/kitchen/jensen-beach", text: "Kitchen Remodeling Jensen Beach" }
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
                                        <a  target="_blank"
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