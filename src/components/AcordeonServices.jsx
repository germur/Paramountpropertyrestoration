import React, { useState } from 'react';
import '../styles/components/AcordeonServices.css';

// Banco de preguntas categorizadas
const faqData = {
    bathroom: [
        {
            id: 'bath-1',
            question: '¿Cuánto tiempo toma remodelar un baño completo?',
            answer: 'Un baño completo generalmente toma entre 2-5 días dependiendo del alcance del proyecto. Los baños pequeños pueden completarse en 2-3 días, mientras que los master bathrooms pueden requerir hasta una semana.'
        },
        {
            id: 'bath-2',
            question: '¿Necesito permisos para remodelar mi baño?',
            answer: 'Depende del alcance del trabajo. Para cambios cosméticos como pintura o reemplazo de accesorios, generalmente no. Para cambios estructurales, plomería o electricidad, sí se requieren permisos.'
        },
        {
            id: 'bath-3',
            question: '¿Qué incluye el servicio de impermeabilización?',
            answer: 'Incluye membrana impermeable en todas las áreas húmedas, sellado de juntas, tratamiento de esquinas y prueba de fugas antes de la instalación final.'
        }
    ],
    kitchen: [
        {
            id: 'kitchen-1',
            question: '¿Puedo mantener mis electrodomésticos actuales?',
            answer: 'Por supuesto! Podemos diseñar la nueva cocina alrededor de sus electrodomésticos existentes o ayudarle a seleccionar nuevos según su presupuesto.'
        },
        {
            id: 'kitchen-2',
            question: '¿Cuánto tiempo estaré sin cocina?',
            answer: 'Una remodelación típica de cocina toma 3-6 semanas. Podemos ayudar a establecer una cocina temporal para minimizar las molestias.'
        },
        {
            id: 'kitchen-3',
            question: '¿Ofrecen diseño 3D antes de comenzar?',
            answer: 'Sí, incluimos diseño 3D gratuito para que pueda visualizar exactamente cómo quedará su cocina antes de comenzar cualquier trabajo.'
        }
    ],
    flooring: [
        {
            id: 'floor-1',
            question: '¿Qué tipo de piso es mejor para áreas de alto tráfico?',
            answer: 'Para alto tráfico recomendamos porcelanato, vinilo de lujo (LVP) o pisos laminados de alta calidad. Son duraderos y fáciles de mantener.'
        },
        {
            id: 'floor-2',
            question: '¿Puedo instalar piso nuevo sobre el existente?',
            answer: 'En muchos casos sí, especialmente con pisos flotantes. Sin embargo, evaluamos cada situación para asegurar resultados óptimos.'
        },
        {
            id: 'floor-3',
            question: '¿Cuánto tiempo debo esperar antes de caminar sobre el piso nuevo?',
            answer: 'Depende del tipo de piso. Los flotantes se pueden usar inmediatamente, mientras que los pegados requieren 24-48 horas.'
        }
    ],
    general: [
        {
            id: 'gen-1',
            question: '¿Ofrecen garantía en sus trabajos?',
            answer: 'Sí, todos nuestros trabajos incluyen garantía de 1 año en mano de obra y respetamos las garantías de los fabricantes en materiales.'
        },
        {
            id: 'gen-2',
            question: '¿Trabajan con seguros de hogar?',
            answer: 'Sí, tenemos experiencia trabajando con la mayoría de las compañías de seguros y podemos ayudar con la documentación necesaria.'
        },
        {
            id: 'gen-3',
            question: '¿Ofrecen financiamiento?',
            answer: 'Trabajamos con varias opciones de financiamiento para hacer su proyecto más accesible. Consulte por planes de 6, 12 o 24 meses.'
        }
    ]
};

// Componente de Accordion Item
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="accordionItem">
            <button
                className="accordionButton"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="accordionQuestion">{question}</h3>
                <span className={`accordionIcon ${isOpen ? 'iconOpen' : ''}`}>
                    <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </span>
            </button>
            <div
                className={`accordionContent ${isOpen ? 'contentOpen' : ''}`}
            >
                <div className="accordionAnswer">
                    {answer}
                </div>
            </div>
        </div>
    );
};

// Componente principal FAQ
const FAQ = ({
    category = 'general',
    title = 'Preguntas Frecuentes',
    categories = [], // Array de categorías si quieres mezclar
    customQuestions = [], // Para preguntas personalizadas
    showTitle = true,
    maxItems = null, // Limitar número de preguntas mostradas
    className = '' // Clase adicional para personalización
}) => {
    const [openItem, setOpenItem] = useState(null);

    // Obtener las preguntas según la configuración
    const getQuestions = () => {
        // Si hay preguntas personalizadas, usarlas
        if (customQuestions.length > 0) {
            return customQuestions;
        }

        // Si hay múltiples categorías, combinarlas
        if (categories.length > 0) {
            return categories.flatMap(cat => faqData[cat] || []);
        }

        // Si no, usar la categoría única
        return faqData[category] || faqData.general;
    };

    const questions = getQuestions();
    const displayQuestions = maxItems ? questions.slice(0, maxItems) : questions;

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className={`faqContainer ${className}`}>
            {showTitle && (
                <h2 className="faqTitle">
                    {title}
                </h2>
            )}
            <div className="accordionWrapper">
                {displayQuestions.map((item) => (
                    <AccordionItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItem === item.id}
                        onClick={() => toggleItem(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
export { faqData };