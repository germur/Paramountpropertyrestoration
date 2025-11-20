import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './RestorationCTA.module.css';

const RestorationCTA = ({
    title = "Don't let damage linger.",
    subtitle = "Schedule your free assessment now—restoration starts immediately.",
    buttonText = "Free Assessment →",
    buttonLink = "/contact",
    urgencyMessage = ""
}) => {
    return (
        <section className={styles.restorationCtaSection}>
            <div className={styles.restorationCtaContainer}>
                <div className={styles.restorationCtaContent}>
                    {urgencyMessage && (
                        <p className={styles.restorationCtaUrgency}>{urgencyMessage}</p>
                    )}
                    <h2 className={styles.restorationCtaTitle}>{title}</h2>
                    <p className={styles.restorationCtaSubtitle}>{subtitle}</p>
                    <a href={buttonLink} className={styles.restorationCtaButton}>
                        {buttonText}
                        <i className={`fas fa-arrow-right ${styles.restorationCtaArrow}`}></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RestorationCTA;