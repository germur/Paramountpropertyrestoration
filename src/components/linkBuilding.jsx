import '../styles/components/LinkBuildingSection.css'

const LinkBuildingSection = ({
    baseUrl = "",
    showStats = false,
    showTitle = false,
    compact = true,
    categories = "all" // "all", "major", "premium", "growth", "central", "coastal", "services"
}) => {

    const linkData = {
        major: {
            title: "Major Markets",
            icon: "🏙️",
            description: "High population centers with maximum search volume",
            links: [
                { href: "/servicios/bathroom/miami", text: "Bathroom Remodeling Miami" },
                { href: "/servicios/kitchen/miami", text: "Kitchen Remodeling Miami" },
                { href: "/servicios/bathroom/orlando", text: "Bathroom Remodeling Orlando" },
                { href: "/servicios/kitchen/orlando", text: "Kitchen Remodeling Orlando" },
                { href: "/servicios/bathroom/tampa", text: "Bathroom Remodeling Tampa" },
                { href: "/servicios/kitchen/tampa", text: "Kitchen Remodeling Tampa" },
                { href: "/servicios/exterior/fort-lauderdale", text: "Exterior Construction Fort Lauderdale" },
                { href: "/servicios/living-dining/west-palm-beach", text: "Living & Dining West Palm Beach" }
            ]
        },
        premium: {
            title: "Premium Areas",
            icon: "💎",
            description: "High-value markets with affluent demographics",
            links: [
                { href: "/servicios/kitchen/boca-raton", text: "Kitchen Remodeling Boca Raton" },
                { href: "/servicios/bathroom/coral-gables", text: "Bathroom Remodeling Coral Gables" },
                { href: "/servicios/exterior/miami-beach", text: "Exterior Construction Miami Beach" },
                { href: "/servicios/bedroom/naples", text: "Bedroom Remodeling Naples" },
                { href: "/servicios/office/sarasota", text: "Office Construction Sarasota" },
                { href: "/servicios/living-dining/marco-island", text: "Living & Dining Marco Island" },
                { href: "/servicios/kitchen/bonita-springs", text: "Kitchen Remodeling Bonita Springs" },
                { href: "/servicios/bathroom/hollywood", text: "Bathroom Remodeling Hollywood" }
            ]
        },
        growth: {
            title: "Growth Areas",
            icon: "📈",
            description: "Emerging markets with development potential",
            links: [
                { href: "/servicios/exterior/cape-coral", text: "Exterior Construction Cape Coral" },
                { href: "/servicios/bathroom/port-st-lucie", text: "Bathroom Remodeling Port St. Lucie" },
                { href: "/servicios/kitchen/pembroke-pines", text: "Kitchen Remodeling Pembroke Pines" },
                { href: "/servicios/living-dining/miramar", text: "Living & Dining Miramar" },
                { href: "/servicios/bedroom/lakeland", text: "Bedroom Remodeling Lakeland" },
                { href: "/servicios/office/clearwater", text: "Office Construction Clearwater" },
                { href: "/servicios/exterior/st-petersburg", text: "Exterior Construction St. Petersburg" },
                { href: "/servicios/bathroom/fort-myers", text: "Bathroom Remodeling Fort Myers" }
            ]
        },
        central: {
            title: "Central Florida",
            icon: "🎯",
            description: "Tourism and residential hub markets",
            links: [
                { href: "/servicios/kitchen/kissimmee", text: "Kitchen Remodeling Kissimmee" },
                { href: "/servicios/bathroom/winter-garden", text: "Bathroom Remodeling Winter Garden" },
                { href: "/servicios/exterior/clermont", text: "Exterior Construction Clermont" },
                { href: "/servicios/living-dining/sanford", text: "Living & Dining Sanford" },
                { href: "/servicios/bedroom/altamonte-springs", text: "Bedroom Remodeling Altamonte Springs" },
                { href: "/servicios/office/oviedo", text: "Office Construction Oviedo" },
                { href: "/servicios/bathroom/brandon", text: "Bathroom Remodeling Brandon" },
                { href: "/servicios/kitchen/bradenton", text: "Kitchen Remodeling Bradenton" }
            ]
        },
        coastal: {
            title: "Coastal Markets",
            icon: "🏖️",
            description: "Premium coastal and waterfront communities",
            links: [
                { href: "/servicios/exterior/vero-beach", text: "Exterior Construction Vero Beach" },
                { href: "/servicios/bathroom/stuart", text: "Bathroom Remodeling Stuart" },
                { href: "/servicios/kitchen/homestead", text: "Kitchen Remodeling Homestead" },
                { href: "/servicios/living-dining/miami-beach", text: "Living & Dining Miami Beach" },
                { href: "/servicios/bedroom/hollywood", text: "Bedroom Remodeling Hollywood" },
                { href: "/servicios/office/fort-lauderdale", text: "Office Construction Fort Lauderdale" },
                { href: "/servicios/exterior/naples", text: "Exterior Construction Naples" },
                { href: "/servicios/bathroom/marco-island", text: "Bathroom Remodeling Marco Island" }
            ]
        },
        services: {
            title: "All Services",
            icon: "🛠️",
            description: "Complete service portfolio showcase",
            links: [
                { href: "/servicios/office/miami", text: "Office Construction Miami" },
                { href: "/servicios/bedroom/orlando", text: "Bedroom Remodeling Orlando" },
                { href: "/servicios/living-dining/tampa", text: "Living & Dining Tampa" },
                { href: "/servicios/office/boca-raton", text: "Office Construction Boca Raton" },
                { href: "/servicios/bedroom/fort-lauderdale", text: "Bedroom Remodeling Fort Lauderdale" },
                { href: "/servicios/living-dining/coral-gables", text: "Living & Dining Coral Gables" },
                { href: "/servicios/office/cape-coral", text: "Office Construction Cape Coral" },
                { href: "/servicios/bedroom/clearwater", text: "Bedroom Remodeling Clearwater" }
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
                            Strategic Link Building
                        </h2>
                        <p className={`link-building-subtitle ${compact ? 'compact' : ''}`}>
                            Optimized internal linking structure targeting high-impact service and location combinations
                            for maximum SEO efficiency and user experience.
                        </p>
                    </div>
                )}

                {showStats && (
                    <div className={`link-building-stats ${compact ? 'compact' : ''}`}>
                        <h3 className={`link-building-stats-title ${compact ? 'compact' : ''}`}>
                            SEO Strategy Overview
                        </h3>
                        <div className={`link-building-stats-grid ${compact ? 'compact' : ''}`}>
                            <div className="link-building-stat-item">
                                <div className={`link-building-stat-number ${compact ? 'compact' : ''}`}>
                                    {totalLinks}
                                </div>
                                <div className={`link-building-stat-label ${compact ? 'compact' : ''}`}>
                                    Strategic Links
                                </div>
                            </div>
                            <div className="link-building-stat-item">
                                <div className={`link-building-stat-number ${compact ? 'compact' : ''}`}>6</div>
                                <div className={`link-building-stat-label ${compact ? 'compact' : ''}`}>
                                    Core Services
                                </div>
                            </div>
                            <div className="link-building-stat-item">
                                <div className={`link-building-stat-number ${compact ? 'compact' : ''}`}>192</div>
                                <div className={`link-building-stat-label ${compact ? 'compact' : ''}`}>
                                    Total Pages
                                </div>
                            </div>
                            <div className="link-building-stat-item">
                                <div className={`link-building-stat-number ${compact ? 'compact' : ''}`}>
                                    {Math.round((totalLinks / 192) * 100)}%
                                </div>
                                <div className={`link-building-stat-label ${compact ? 'compact' : ''}`}>
                                    Coverage Rate
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <a
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