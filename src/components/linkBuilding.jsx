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
                { href: "/servicios/kitchen/orlando", text: "Kitchen Remodeling Orlando" },
                { href: "/servicios/bathroom/kissimmee", text: "Bathroom Remodeling Kissimmee" },
                { href: "/servicios/exterior/winter-garden", text: "Exterior Construction Winter Garden" },
                { href: "/servicios/living-dining/clermont", text: "Living & Dining Clermont" },
                { href: "/servicios/bedroom/lakeland", text: "Bedroom Remodeling Lakeland" },
                { href: "/servicios/office/sanford", text: "Office Construction Sanford" },
                { href: "/servicios/kitchen/altamonte-springs", text: "Kitchen Remodeling Altamonte Springs" },
                { href: "/servicios/bathroom/oviedo", text: "Bathroom Remodeling Oviedo" }
            ]
        },
        tampaBayRegion: {
            title: "Tampa Bay Region",
            icon: "⛵",
            description: "Serving the vibrant and growing markets around Tampa Bay.",
            links: [
                { href: "/servicios/kitchen/tampa", text: "Kitchen Remodeling Tampa" },
                { href: "/servicios/exterior/st-petersburg", text: "Exterior Construction St. Petersburg" },
                { href: "/servicios/office/clearwater", text: "Office Construction Clearwater" },
                { href: "/servicios/bathroom/brandon", text: "Bathroom Remodeling Brandon" },
                { href: "/servicios/living-dining/sarasota", text: "Living & Dining Sarasota" },
                { href: "/servicios/bedroom/bradenton", text: "Bedroom Remodeling Bradenton" },
                { href: "/servicios/kitchen/lakeland", text: "Kitchen Remodeling Lakeland" },
                { href: "/servicios/bathroom/largo", text: "Bathroom Remodeling Largo" }
            ]
        },
        southFlorida: {
            title: "South Florida",
            icon: "🌴",
            description: "Our premier services for the dynamic South Florida metropolis.",
            links: [
                { href: "/servicios/bathroom/miami", text: "Bathroom Remodeling Miami" },
                { href: "/servicios/kitchen/fort-lauderdale", text: "Kitchen Remodeling Fort Lauderdale" },
                { href: "/servicios/living-dining/west-palm-beach", text: "Living & Dining West Palm Beach" },
                { href: "/servicios/office/boca-raton", text: "Office Construction Boca Raton" },
                { href: "/servicios/bedroom/hollywood", text: "Bedroom Remodeling Hollywood" },
                { href: "/servicios/exterior/coral-gables", text: "Exterior Construction Coral Gables" },
                { href: "/servicios/kitchen/homestead", text: "Kitchen Remodeling Homestead" },
                { href: "/servicios/bathroom/pembroke-pines", text: "Bathroom Remodeling Pembroke Pines" },
                { href: "/servicios/living-dining/miramar", text: "Living & Dining Miramar" },
                { href: "/servicios/exterior/miami-beach", text: "Exterior Construction Miami Beach" }
            ]
        },
        southwestFlorida: {
            title: "Southwest Florida",
            icon: "☀️",
            description: "High-end remodeling for Florida's beautiful Gulf Coast communities.",
            links: [
                { href: "/servicios/bedroom/naples", text: "Bedroom Remodeling Naples" },
                { href: "/servicios/exterior/cape-coral", text: "Exterior Construction Cape Coral" },
                { href: "/servicios/bathroom/fort-myers", text: "Bathroom Remodeling Fort Myers" },
                { href: "/servicios/kitchen/bonita-springs", text: "Kitchen Remodeling Bonita Springs" },
                { href: "/servicios/living-dining/marco-island", text: "Living & Dining Marco Island" },
                { href: "/servicios/office/port-charlotte", text: "Office Construction Port Charlotte" },
                { href: "/servicios/bathroom/venice", text: "Bathroom Remodeling Venice" },
                { href: "/servicios/kitchen/estero", text: "Kitchen Remodeling Estero" }
            ]
        },
        treasureCoast: {
            title: "Treasure Coast",
            icon: "💎",
            description: "Expert construction and remodeling along the Treasure Coast.",
            links: [
                { href: "/servicios/bathroom/port-st-lucie", text: "Bathroom Remodeling Port St. Lucie" },
                { href: "/servicios/kitchen/stuart", text: "Kitchen Remodeling Stuart" },
                { href: "/servicios/exterior/vero-beach", text: "Exterior Construction Vero Beach" },
                { href: "/servicios/living-dining/jupiter", text: "Living & Dining Jupiter" },
                { href: "/servicios/bedroom/palm-city", text: "Bedroom Remodeling Palm City" },
                { href: "/servicios/office/hobe-sound", text: "Office Construction Hobe Sound" },
                { href: "/servicios/bathroom/fort-pierce", text: "Bathroom Remodeling Fort Pierce" },
                { href: "/servicios/kitchen/jensen-beach", text: "Kitchen Remodeling Jensen Beach" }
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