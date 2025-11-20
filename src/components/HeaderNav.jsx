import { useEffect, useRef, useState } from "react";
import styles from './HeaderNav.module.css';

// Util: cerrar al click fuera
function useOutsideClose(ref, onClose) {
    useEffect(() => {
        const h = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
        document.addEventListener("click", h);
        return () => document.removeEventListener("click", h);
    }, [ref, onClose]);
}

export default function HeaderNav({ navItems = [], currentPath = "/", logoSrc = "/images/LogoPrin.webp", mobileLogoSrc = "/images/isologo.webp" }) {
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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.classList.add('mobile-menu-open');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0px'; // Prevent layout shift
        } else {
            document.body.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [mobileOpen]);

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
        <header className={styles.header} ref={ref}>
            <div className={styles.containerHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <a href="/" aria-label="Home">
                            {/* Desktop Logo */}
                            <img className={`${styles.imglogoHeader} ${styles.desktopLogo}`} src={logoSrc} alt="Paramount Property Restoration" />
                            {/* Mobile Logo (Isologo) */}
                            <img className={`${styles.imglogoHeader} ${styles.mobileLogo}`} src={mobileLogoSrc || logoSrc} alt="Paramount Property Restoration" />
                        </a>
                    </div>

                    {/* Desktop */}
                    <nav className={styles.desktopNav} aria-label="Primary">
                        <ul className={styles.navList}>
                            {navItems.map((item) => {
                                const key = item.label.toLowerCase();
                                const isMega = Array.isArray(item.mega);
                                const hasDropdown = Array.isArray(item.dropdown);
                                const open = openDesktopKey === key;

                                if (isMega) {
                                    return (
                                        <li className={`${styles.navItem} ${open ? styles.open : ""}`} key={key}>
                                            <div className={styles.mega}>
                                                <div className={styles.dropdownTrigger}>
                                                    <a href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>{item.label}</a>
                                                    <button
                                                        className={`${styles.dropdownBtn} ${open ? styles.active : ""}`}
                                                        aria-expanded={open}
                                                        aria-label="Toggle menu"
                                                        onClick={(e) => { e.stopPropagation(); toggleDesktop(key); }}
                                                    >
                                                        <i className="fas fa-chevron-down" />
                                                    </button>
                                                </div>
                                                <div className={`${styles.megaPanel} ${open ? styles.show : ""}`} role="menu">
                                                    <div className={styles.megaGrid}>
                                                        {item.mega.map((col, idx) => (
                                                            <div className={styles.megaCol} key={`${key}-col-${idx}`}>
                                                                <a href={col.href} className={`${styles.megaHeading} ${isActive(col.href) ? styles.active : ""}`}>{col.heading}</a>
                                                                <ul className={styles.megaList}>
                                                                    {col.items.map((sub) => (
                                                                        <li key={sub.href}>
                                                                            <a href={sub.href} className={isActive(sub.href) ? styles.active : ""}>{sub.label}</a>
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
                                        <li className={`${styles.navItem} ${open ? styles.open : ""}`} key={key}>
                                            <div>
                                                <div className={styles.dropdownTrigger}>
                                                    <a href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>{item.label}</a>
                                                    <button
                                                        className={`${styles.dropdownBtn} ${open ? styles.active : ""}`}
                                                        aria-expanded={open}
                                                        aria-label="Toggle menu"
                                                        onClick={(e) => { e.stopPropagation(); toggleDesktop(key); }}
                                                    >
                                                        <i className="fas fa-chevron-down" />
                                                    </button>
                                                </div>
                                                <ul className={`${styles.dropdownMenu} ${open ? styles.show : ""}`} role="menu">
                                                    {item.dropdown.map((sub) => (
                                                        <li key={sub.href}><a href={sub.href} className={isActive(sub.href) ? styles.active : ""}>{sub.label}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li className={styles.navItem} key={key}>
                                        <a href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>{item.label}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Emergency CTA - Now at the end */}
                    <div className={styles.emergencyCta}>
                        <a href="tel:+17866022217" className={styles.ctaButton}>
                            <i className="fas fa-phone" aria-hidden="true"></i>
                            <div className={styles.ctaText}>
                                <span className={styles.ctaMain}>24/7 Emergency</span>
                                <span className={styles.ctaSub}>Service Available</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className={`${styles.mobileMenuBtn} ${mobileOpen ? styles.active : ""}`}
                        aria-label="Abrir menú"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <span /><span /><span />
                    </button>
                </div>

                {/* Mobile */}
                {mobileOpen && <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)}></div>}
                <nav className={`${styles.mobileNav} ${mobileOpen ? styles.show : ""}`} aria-label="Primary mobile">
                    <ul className={styles.navList}>
                        {navItems.map((item) => {
                            const key = item.label.toLowerCase();
                            const isMega = Array.isArray(item.mega);
                            const hasDropdown = Array.isArray(item.dropdown);

                            if (isMega) {
                                const open = openMobileKey === key;
                                return (
                                    <li className={`${styles.navItem} ${open ? styles.open : ""}`} key={key}>
                                        <div className={styles.mobileItem}>
                                            <a href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>{item.label}</a>
                                            <button
                                                className={`${styles.dropdownBtn} ${open ? styles.active : ""}`}
                                                aria-expanded={open}
                                                aria-label="Toggle submenu"
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMobile(key); }}
                                            >
                                                <i className="fas fa-chevron-down" />
                                            </button>
                                        </div>

                                        <ul className={`${styles.submenu} ${open ? styles.show : ""}`}>
                                            {item.mega.map((col, idx) => {
                                                const nestedKey = `${key}__${idx}`;
                                                const nestedOpen = openMobileNested === nestedKey;
                                                return (
                                                    <li className={`${styles.navItem} ${styles.nested} ${nestedOpen ? styles.open : ""}`} key={nestedKey}>
                                                        <div className={`${styles.mobileItem} ${styles.nested}`}>
                                                            <a href={col.href} className={`${styles.navLabel} ${isActive(col.href) ? styles.active : ""}`}>{col.heading}</a>
                                                            <button
                                                                className={`${styles.dropdownBtn} ${styles.nested} ${nestedOpen ? styles.active : ""}`}
                                                                aria-expanded={nestedOpen}
                                                                aria-label="Toggle sub-submenu"
                                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMobileNested(key, idx); }}
                                                            >
                                                                <i className="fas fa-chevron-down" />
                                                            </button>
                                                        </div>
                                                        <ul className={`${styles.submenu} ${styles.nested} ${nestedOpen ? styles.show : ""}`}>
                                                            {col.items.map((sub) => (
                                                                <li key={sub.href}><a href={sub.href} className={isActive(sub.href) ? styles.active : ""}>{sub.label}</a></li>
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
                                    <li className={`${styles.navItem} ${open ? styles.open : ""}`} key={key}>
                                        <div className={styles.mobileItem}>
                                            <a href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>{item.label}</a>
                                            <button
                                                className={`${styles.dropdownBtn} ${open ? styles.active : ""}`}
                                                aria-expanded={open}
                                                aria-label="Toggle submenu"
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMobile(key); }}
                                            >
                                                <i className="fas fa-chevron-down" />
                                            </button>
                                        </div>
                                        <ul className={`${styles.submenu} ${open ? styles.show : ""}`}>
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.href}><a href={sub.href} className={isActive(sub.href) ? styles.active : ""}>{sub.label}</a></li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            }

                            return (
                                <li className={styles.navItem} key={key}>
                                    <a href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>{item.label}</a>
                                </li>
                            );
                        })}

                        {/* Emergency CTA in mobile menu */}
                        <li className={`${styles.navItem} ${styles.mobileEmergency}`}>
                            <a href="tel:+17866022217" className={`${styles.navLink} ${styles.emergencyMobile}`}>
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
