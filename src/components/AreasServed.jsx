import styles from './AreasServed.module.css'

const areas = [
    { city: "Miami", state: "FL", icon: "🌴" },
    { city: "Orlando", state: "FL", icon: "🏰" },
    { city: "Tampa", state: "FL", icon: "⛵" },
    { city: "Sarasota", state: "FL", icon: "🌊" },
];

export default function AreasServed() {
    return (
        <section className={styles.areasServed}>
            <h3>Areas Served</h3>
            <div className={styles.areasGrid}>
                {areas.map((area, index) => (
                    <div className={styles.areaCard} key={index}>
                        <div className={styles.areaIcon}>{area.icon}</div>
                        <p><strong>{area.city}</strong>, {area.state}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}