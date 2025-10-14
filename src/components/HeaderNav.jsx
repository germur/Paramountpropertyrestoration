import { useEffect, useRef, useState } from "react";

// Util: cerrar al click fuera
function useOutsideClose(ref, onClose) {
    useEffect(() => {
        const h = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
        document.addEventListener("click", h);
        return () => document.removeEventListener("click", h);
    }, [ref, onClose]);
}

export default function HeaderNav({ navItems = [], currentPath = "/", logoSrc = "/images/LogoPrin.png" }) {
    // estado
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDesktopKey, setOpenDesktopKey] = useState(null);        // "services" | "restoration" | null
    const [openMobileKey, setOpenMobileKey] = useState(null);          // primer nivel móvil
    const [openMobileNested, setOpenMobileNested] = useState(null);    // `${key}__${index}` | null

    const ref = useRef(null);
    useOutsideClose(ref, () => {
        setOpenDesktopKey(null);
    });

    useEffect(() => {
        const onEsc = (e) => {
            if (e.key === "Escape") {
                setOpenDesktopKey(null);
                setMobileOpen(false);
                setOpenMobileKey(null);
                setOpenMobileNested(null);
            }
        };
        document.addEventListener("keydown", onEsc);
        return () => document.removeEventListener("keydown", onEsc);
    }, []);

    const isActive = (href) => href === currentPath;

    // desktop toggles (garantiza uno abierto)
    const toggleDesktop = (key) => {
        setOpenDesktopKey((k) => (k === key ? null : key));
    };

    // mobile toggles (garantiza uno abierto por nivel)
    const toggleMobile = (key) => {
        setOpenMobileKey((k) => (k === key ? null : key));
        setOpenMobileNested(null);
    };
    const toggleMobileNested = (key, idx) => {
        const composite = `${key}__${idx}`;
        setOpenMobileNested((k) => (k === composite ? null : composite));
    };

    return (
        <header className="header" ref={ref}>
            <div className="containerHeader">
                <div className="header-content">
                    <div className="logo">
                        <a href="/" aria-label="Home">
                            <img className="imglogoHeader" src={logoSrc} alt="logoHeader" />
                        </a>
                    </div>

                    {/* Desktop */}
                    <nav className="nav desktop-nav" aria-label="Primary">
                        <ul className="nav-list">
                            {navItems.map((item) => {
                                const key = item.label.toLowerCase();
                                const isMega = Array.isArray(item.mega);
                                const hasDropdown = Array.isArray(item.dropdown);
                                const open = openDesktopKey === key;

                                if (isMega) {
                                    return (
                                        <li className={`nav-item ${open ? "open" : ""}`} key={key}>
                                            <div className="mega">
                                                <div className="dropdown-trigger">
                                                    <a href={item.href} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</a>
                                                    <button
                                                        className={`dropdown-btn ${open ? "active" : ""}`}
                                                        aria-expanded={open}
                                                        aria-label="Toggle menu"
                                                        onClick={(e) => { e.stopPropagation(); toggleDesktop(key); }}
                                                    >
                                                        <i className="fas fa-chevron-down" />
                                                    </button>
                                                </div>
                                                <div className={`mega-panel ${open ? "show" : ""}`} role="menu">
                                                    <div className="mega-grid">
                                                        {item.mega.map((col, idx) => (
                                                            <div className="mega-col" key={`${key}-col-${idx}`}>
                                                                <a href={col.href} className={`mega-heading ${isActive(col.href) ? "active" : ""}`}>{col.heading}</a>
                                                                <ul className="mega-list">
                                                                    {col.items.map((sub) => (
                                                                        <li key={sub.href}>
                                                                            <a href={sub.href} className={isActive(sub.href) ? "active" : ""}>{sub.label}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }

                                if (hasDropdown) {
                                    return (
                                        <li className={`nav-item ${open ? "open" : ""}`} key={key}>
                                            <div className="dropdown">
                                                <div className="dropdown-trigger">
                                                    <a href={item.href} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</a>
                                                    <button
                                                        className={`dropdown-btn ${open ? "active" : ""}`}
                                                        aria-expanded={open}
                                                        aria-label="Toggle menu"
                                                        onClick={(e) => { e.stopPropagation(); toggleDesktop(key); }}
                                                    >
                                                        <i className="fas fa-chevron-down" />
                                                    </button>
                                                </div>
                                                <ul className={`dropdown-menu ${open ? "show" : ""}`} role="menu">
                                                    {item.dropdown.map((sub) => (
                                                        <li key={sub.href}><a href={sub.href} className={isActive(sub.href) ? "active" : ""}>{sub.label}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li className="nav-item" key={key}>
                                        <a href={item.href} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Emergency CTA - Now at the end */}
                    <div className="emergency-cta">
                        <a href="tel:+17866022217" className="cta-button emergency">
                            <i className="fas fa-phone" aria-hidden="true"></i>
                            <div className="cta-text">
                                <span className="cta-main">24/7 Emergency</span>
                                <span className="cta-sub">Service Available</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className={`mobile-menu-btn ${mobileOpen ? "active" : ""}`}
                        aria-label="Abrir menú"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <span /><span /><span />
                    </button>
                </div>

                {/* Mobile */}
                <nav className={`nav mobile-nav ${mobileOpen ? "show" : ""}`} aria-label="Primary mobile">
                    <ul className="nav-list">
                        {navItems.map((item) => {
                            const key = item.label.toLowerCase();
                            const isMega = Array.isArray(item.mega);
                            const hasDropdown = Array.isArray(item.dropdown);

                            if (isMega) {
                                const open = openMobileKey === key;
                                return (
                                    <li className={`nav-item ${open ? "open" : ""}`} key={key}>
                                        <div className="mobile-item">
                                            <a href={item.href} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</a>
                                            <button
                                                className={`dropdown-btn ${open ? "active" : ""}`}
                                                aria-expanded={open}
                                                aria-label="Toggle submenu"
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMobile(key); }}
                                            >
                                                <i className="fas fa-chevron-down" />
                                            </button>
                                        </div>

                                        <ul className={`submenu ${open ? "show" : ""}`}>
                                            {item.mega.map((col, idx) => {
                                                const nestedKey = `${key}__${idx}`;
                                                const nestedOpen = openMobileNested === nestedKey;
                                                return (
                                                    <li className={`nav-item nested ${nestedOpen ? "open" : ""}`} key={nestedKey}>
                                                        <div className="mobile-item nested">
                                                            <a href={col.href} className={`nav-label ${isActive(col.href) ? "active" : ""}`}>{col.heading}</a>
                                                            <button
                                                                className={`dropdown-btn nested ${nestedOpen ? "active" : ""}`}
                                                                aria-expanded={nestedOpen}
                                                                aria-label="Toggle sub-submenu"
                                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMobileNested(key, idx); }}
                                                            >
                                                                <i className="fas fa-chevron-down" />
                                                            </button>
                                                        </div>
                                                        <ul className={`submenu nested ${nestedOpen ? "show" : ""}`}>
                                                            {col.items.map((sub) => (
                                                                <li key={sub.href}><a href={sub.href} className={isActive(sub.href) ? "active" : ""}>{sub.label}</a></li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                );
                            }

                            if (hasDropdown) {
                                const open = openMobileKey === key;
                                return (
                                    <li className={`nav-item ${open ? "open" : ""}`} key={key}>
                                        <div className="mobile-item">
                                            <a href={item.href} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</a>
                                            <button
                                                className={`dropdown-btn ${open ? "active" : ""}`}
                                                aria-expanded={open}
                                                aria-label="Toggle submenu"
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMobile(key); }}
                                            >
                                                <i className="fas fa-chevron-down" />
                                            </button>
                                        </div>
                                        <ul className={`submenu ${open ? "show" : ""}`}>
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.href}><a href={sub.href} className={isActive(sub.href) ? "active" : ""}>{sub.label}</a></li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            }

                            return (
                                <li className="nav-item" key={key}>
                                    <a href={item.href} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</a>
                                </li>
                            );
                        })}
                        
                        {/* Emergency CTA in mobile menu */}
                        <li className="nav-item mobile-emergency">
                            <a href="tel:+17866022217" className="nav-link emergency-mobile">
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                24/7 Emergency Service
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
