import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/components/ServiceHighlights.css';

const ServiceHighlights = ({ 
  title = "Service Highlights", 
  highlights = []
}) => {
    return (
        <section className="service-highlights-section">
            <div className="service-highlights-container">
                <h2 className="service-highlights-title">{title}</h2>
                <ul className="service-highlights-list">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="service-highlights-item">
                            <i className="fas fa-star service-highlights-icon"></i>
                            <span className="service-highlights-text">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ServiceHighlights;