import '../styles/components/AreasServed.css'

const areas = [
    { city: "Miami, FL", image: "images/miami.png" },
    { city: "Orlando, FL", image: "images/orlando.png" },
    { city: "Tampa, FL", image: "images/tampa.png" },
    { city: "Sarasota, FL", image: "images/saratosa.png" },
];

export default function AreasServed() {
    return (
        <section className="areas-served">
            <h3>Areas Served</h3>
            <div className="areas-grid">
                {areas.map((area, index) => (
                    <div className="area-card" key={index}>
                        <img src={area.image} alt={area.city} />
                        <p>{area.city}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}