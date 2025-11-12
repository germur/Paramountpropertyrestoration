import '../styles/components/AreasServed.css'

const areas = [
    { city: "Miami", state: "FL", icon: "🌴" },
    { city: "Orlando", state: "FL", icon: "🏰" },
    { city: "Tampa", state: "FL", icon: "⛵" },
    { city: "Sarasota", state: "FL", icon: "🌊" },
];

export default function AreasServed() {
    return (
        <section className="areas-served">
            <h3>Areas Served</h3>
            <div className="areas-grid">
                {areas.map((area, index) => (
                    <div className="area-card" key={index}>
                        <div className="area-icon">{area.icon}</div>
                        <p><strong>{area.city}</strong>, {area.state}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}