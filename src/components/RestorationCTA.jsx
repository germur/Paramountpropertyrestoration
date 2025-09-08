import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/components/RestorationCTA.css';

const RestorationCTA = ({ 
  title = "Don't let damage linger.", 
  subtitle = "Schedule your free assessment now—restoration starts immediately.", 
  buttonText = "Free Assessment →", 
  buttonLink = "/contact",
  urgencyMessage = ""
}) => {
    return (
        <section className="restoration-cta-section">
            <div className="restoration-cta-container">
                <div className="restoration-cta-content">
                    {urgencyMessage && (
                        <p className="restoration-cta-urgency">{urgencyMessage}</p>
                    )}
                    <h2 className="restoration-cta-title">{title}</h2>
                    <p className="restoration-cta-subtitle">{subtitle}</p>
                    <a href={buttonLink} className="restoration-cta-button">
                        {buttonText}
                        <i className="fas fa-arrow-right restoration-cta-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RestorationCTA;