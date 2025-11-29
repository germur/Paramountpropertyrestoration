import { useState } from "react";
import '../styles/components/Acordeon.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const sections = [
        { id: 1, title: "What is the process?", content: "This is the content for service 1.", image: "/images/carroManu1.webp" },
        { id: 2, title: "How long does it take?", content: "This is the content for service 2.", image: "/images/carroManu2.webp" },
        { id: 3, title: "Can I get an estimate?", content: "This is the content for service 3.", image: "/images/carroManu3.webp" },
        { id: 4, title: "What does the service include?", content: "This is the content for service 4.", image: "/images/carroManu4.webp" },
    ];

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <div>
                <h3 className="tittleFAQacordeon">FAQ</h3>
            </div>
            {sections.map((section, index) => (
                <div key={section.id} className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleSection(index)}>
                        <h3 className="tittleAcordionHeader">{section.title}</h3>
                        <i className={`fas fa-chevron-down icon ${activeIndex === index ? "open" : ""}`}></i>
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? "show" : ""}`}>
                        <img className="imgItemAcordeon" src={section.image} alt={`Imagen de ${section.title}`} />
                        <p className="textContentAcorde">{section.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
