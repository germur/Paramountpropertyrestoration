import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './RestorationCTA.module.css';

export default function RestorationCTA({
    title = "Ready to Restore Your Property?",
    subtitle = "Our 24/7 emergency team is standing by to help you recover.",
    buttonText = "Call Now: (786) 602-2217",
    buttonLink = "tel:7866022217",
    urgencyMessage = "60-Minute Response Time • Licensed & Insured",
    compact = false
}) {
    return (
        <section className={`${styles.ctaSection} ${compact ? styles.compact : ''}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} ${compact ? 'text-2xl font-bold mb-2' : ''}`}>{title}</h2>
                    <p className={`${styles.subtitle} ${compact ? 'mb-4 text-sm' : ''}`}>{subtitle}</p>

                    <div className={styles.actions}>
                        <a href={buttonLink} className={`${styles.primaryBtn} ${compact ? 'py-2 px-4 text-sm' : ''}`}>
                            {buttonText}
                        </a>
                    </div>

                    {!compact && (
                        <div className={styles.urgency}>
                            <span className={styles.pulse}>●</span> {urgencyMessage}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}