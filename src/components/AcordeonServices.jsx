import { useState } from 'react';
import '../styles/components/AcordeonServices.css';
import { faqData } from '../data/faq.js';

// Banco de preguntas categorizadas EXPANDIDO - RECUPERADO
// faqData imported from ../data/faq.js

// Componente de Accordion Item con UI mejorada
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`accordionItem ${isOpen ? 'accordionItem--open' : ''}`}>
            <button
                className="accordionButton"
                onClick={onClick}
                aria-expanded={isOpen}
                type="button"
            >
                <h3 className="accordionQuestion">{question}</h3>
                <span className={`accordionIcon ${isOpen ? 'iconOpen' : ''}`}>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </span>
            </button>
            <div className={`accordionContent ${isOpen ? 'contentOpen' : ''}`}>
                <div className="accordionAnswer">
                    {/* Render multiline answers properly */}
                    {answer.split('\n').map((line, index) => (
                        <p key={index} className="answerParagraph">
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Componente principal FAQ optimizado
const FAQ = ({
    category = 'general',
    title = 'Frequently Asked Questions',
    categories = [], // Array de categorías para mezclar
    customQuestions = [], // Para preguntas personalizadas
    showTitle = true,
    maxItems = null, // Limitar número de preguntas
    className = '', // Clase adicional
    searchable = false, // Funcionalidad de búsqueda
    defaultOpen = null // ID de pregunta abierta por defecto
}) => {
    const [openItem, setOpenItem] = useState(defaultOpen);
    const [searchTerm, setSearchTerm] = useState('');

    // Obtener las preguntas según la configuración
    const getQuestions = () => {
        if (customQuestions.length > 0) {
            return customQuestions;
        }

        if (categories.length > 0) {
            return categories.flatMap(cat => faqData[cat] || []);
        }

        return faqData[category] || faqData.general;
    };

    const allQuestions = getQuestions();

    // Filtrar preguntas por término de búsqueda
    const filteredQuestions = searchable && searchTerm
        ? allQuestions.filter(item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : allQuestions;

    const displayQuestions = maxItems
        ? filteredQuestions.slice(0, maxItems)
        : filteredQuestions;

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Close any open item when searching
        if (e.target.value) {
            setOpenItem(null);
        }
    };

    return (
        <div className={`faqContainer ${className}`}>
            {showTitle && (
                <div className="faqHeader">
                    <h2 className="faqTitle">{title}</h2>
                    {searchable && (
                        <div className="faqSearch">
                            <i className="fas fa-search faqSearchIcon"></i>
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="faqSearchInput"
                            />
                        </div>
                    )}
                </div>
            )}

            <div className="accordionWrapper">
                {displayQuestions.length > 0 ? (
                    displayQuestions.map((item) => (
                        <AccordionItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItem === item.id}
                            onClick={() => toggleItem(item.id)}
                        />
                    ))
                ) : (
                    searchable && searchTerm && (
                        <div className="noResults">
                            <p>No questions found matching "{searchTerm}"</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default FAQ;