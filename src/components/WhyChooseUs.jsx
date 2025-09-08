import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/components/WhyChooseUs.css';

const WhyChooseUs = ({ 
  title = "Why Choose Us", 
  items = []
}) => {
    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us-container">
                <h2 className="why-choose-us-title">{title}</h2>
                <ul className="why-choose-us-list">
                    {items.map((item, index) => (
                        <li key={index} className="why-choose-us-item">
                            <i className="fas fa-check why-choose-us-icon"></i>
                            <span className="why-choose-us-text">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhyChooseUs;