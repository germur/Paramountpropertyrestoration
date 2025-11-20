import { useState } from 'react';
import styles from './AcordeonServices.module.css';
import { faqData } from '../data/faq.js';

// Banco de preguntas categorizadas EXPANDIDO - RECUPERADO
// faqData imported from ../data/faq.js

// Componente de Accordion Item con UI mejorada
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}>
            <button
                className={styles.accordionButton}
                onClick={onClick}
                aria-expanded={isOpen}
                type="button"
            >
                <h3 className={styles.accordionQuestion}>{question}</h3>
                <span className={`${styles.accordionIcon} ${isOpen ? styles.iconOpen : ''}`}>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </span>
            </button>
            <div className={`${styles.accordionContent} ${isOpen ? styles.contentOpen : ''}`}>
                <div className={styles.accordionAnswer}>
                    {/* Render multiline answers properly */}
                    {answer.split('\n').map((line, index) => (
                        <p key={index} className={styles.answerParagraph}>
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
    defaultOpen = null, // ID de pregunta abierta por defecto
    city = 'Florida', // Default location
    serviceName = 'Service' // Default service name
}) => {
    const [openItem, setOpenItem] = useState(defaultOpen);
    const [searchTerm, setSearchTerm] = useState('');

    // Helper to replace variables in text
    const processText = (text) => {
        if (!text) return '';
        return text
            .replace(/{{city}}/g, city)
            .replace(/{{service}}/g, serviceName);
    };

    // Filter and process questions
    const getQuestions = () => {
        let questions = [];

        // 1. Add custom questions first
        if (customQuestions.length > 0) {
            questions = [...customQuestions];
        }

        // 2. Add category questions
        if (categories.length > 0) {
            categories.forEach(cat => {
                if (faqData[cat]) {
                    questions = [...questions, ...faqData[cat]];
                }
            });
        } else if (category && faqData[category]) {
            // Fallback to single category
            questions = [...questions, ...faqData[category]];
        } else if (!customQuestions.length && !categories.length) {
            // If no custom questions and no specific categories, default to general
            questions = [...faqData.general];
        }


        // 3. Process text variables
        questions = questions.map(q => ({
            ...q,
            question: processText(q.question),
            answer: processText(q.answer)
        }));

        // 4. Filter by search term
        if (searchable && searchTerm) {
            const term = searchTerm.toLowerCase();
            questions = questions.filter(q =>
                q.question.toLowerCase().includes(term) ||
                q.answer.toLowerCase().includes(term)
            );
        }

        // 5. Limit items if maxItems is set
        if (maxItems) {
            questions = questions.slice(0, maxItems);
        }

        return questions;
    };

    const displayQuestions = getQuestions();

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
        <div className={`${styles.faqContainer} ${className}`}>
            {showTitle && (
                <div className={styles.faqHeader}>
                    <h2 className={styles.faqTitle}>{title}</h2>
                    {searchable && (
                        <div className={styles.faqSearch}>
                            <i className={`fas fa-search ${styles.faqSearchIcon}`}></i>
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className={styles.faqSearchInput}
                            />
                        </div>
                    )}
                </div>
            )}

            <div className={styles.accordionWrapper}>
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
                        <div className={styles.noResults}>
                            <p>No questions found matching "{searchTerm}"</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default FAQ;