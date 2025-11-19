import { useState } from "react";
import '../styles/components/TabsNavegation.css';

// 1. NUEVA ESTRUCTURA DE DATOS: Detalles para cada servicio
const serviceDetails = {
    Kitchens: {
        challenge: {
            text: [
                "Balancing minimalism with the need for ample storage.",
                "Ensuring durable materials that align with a clean aesthetic.",
                "Delivering a premium design within a pre-defined budget."
            ],
            image: "/images/kitchenSolutionsTwo.webp"
        },
        solution: {
            text: [
                "Innovative layouts with hidden storage within furniture.",
                "Using neutral tones, natural wood, and polished concrete.",
                "Prioritizing high-impact features to optimize costs."
            ],
            image: "/images/kitchenSolutionsThree.webp"
        },
        execution: {
            text: [
                "Close collaboration with the client to refine the vision.",
                "Created detailed 3D renderings to preview the final look.",
                "On-site coordination with contractors to ensure every detail."
            ],
            image: "/images/cocinaClasica.webp"
        },
        duration: {
            title: "Project Duration: 6-8 Weeks",
            text: [
                "Phase 1 (1-2 Weeks): Concept Design and Space Planning",
                "Phase 2 (2-3 Weeks): Material Selection and Procurement",
                "Phase 3 (2-3 Weeks): Construction and Installation",
                "Phase 4 (1 Week): Final Touches and Client Handover"
            ],
            image: "/images/livingDiningSolutionsFour.webp" // Reemplaza con tu imagen
        }
    },
    Bathrooms: {
        challenge: {
            text: [
                "Maximizing functionality in often compact spaces.",
                "Ensuring proper waterproofing and ventilation.",
                "Selecting fixtures that are both beautiful and durable."
            ],
            image: "/images/banoPortfolioOne.webp" // Reemplaza con tu imagen
        },
        solution: {
            text: [
                "Using wall-mounted fixtures and glass partitions to create a sense of space.",
                "Implementing high-quality membranes and silent extraction fans.",
                "Sourcing from top brands known for quality and design."
            ],
            image: "/images/banoPortfolioTwo.webp" // Reemplaza con tu imagen
        },
        execution: {
            text: [
                "Precise tile work and plumbing installation.",
                "Custom vanity and storage solutions built to fit.",
                "Seamless integration of lighting for ambiance and function."
            ],
            image: "/images/banoPortfolioThree.webp" // Reemplaza con tu imagen
        },
        duration: {
            title: "Project Duration: 4-6 Weeks",
            text: [
                "Phase 1 (1 Week): Design and Fixture Selection",
                "Phase 2 (1-2 Weeks): Demolition and Preparation",
                "Phase 3 (2 Weeks): Installation and Finishing",
                "Phase 4 (1 Week): Final Inspection and Handover"
            ],
            image: "/images/livingDiningSolutionsFour.webp" // Reemplaza con tu imagen
        }
    },
    Bedroom: {
        challenge: {
            text: [
                "Creating a personal sanctuary that promotes rest and tranquility.",
                "Integrating smart and efficient storage solutions like walk-in closets.",
                "Designing lighting schemes that support both relaxation and activity."
            ],
            image: "/images/bedroomSolutionOne.webp" // Reemplaza con tu imagen
        },
        solution: {
            text: [
                "Using a calming color palette, sound-dampening materials, and blackout curtains.",
                "Designing custom closet systems and built-in wardrobes.",
                "Implementing layered lighting with dimmable ambient, task, and accent lights."
            ],
            image: "/images/bedroomSolutionTwo.webp" // Reemplaza con tu imagen
        },
        execution: {
            text: [
                "Professional painting and finishing for a flawless look.",
                "Custom millwork and installation of storage systems.",
                "Electrical work for new lighting fixtures and smart controls."
            ],
            image: "/images/bedroomSolutionThree.webp" // Reemplaza con tu imagen
        },
        duration: {
            title: "Project Duration: 4-7 Weeks",
            text: [
                "Phase 1 (1 Week): Style Consultation and Layout Planning",
                "Phase 2 (1-2 Weeks): Furniture and Material Selection",
                "Phase 3 (2-3 Weeks): Painting, Electrical, and Installation",
                "Phase 4 (1 Week): Final Decoration and Staging"
            ],
            image: "/images/livingDiningSolutionsFour.webp" // Reemplaza con tu imagen
        }
    },
    "Home Additions": {
        challenge: {
            text: [
                "Ensuring the new structure seamlessly integrates with the existing home's architecture.",
                "Navigating complex building codes and permit requirements.",
                "Managing structural engineering to guarantee safety and integrity."
            ],
            image: "/images/homeAddSolutionsOne.webp" // Reemplaza con tu imagen
        },
        solution: {
            text: [
                "Architectural plans that match rooflines, materials, and overall style.",
                "Full management of the permitting process with local authorities.",
                "Working with certified engineers to design foundations and support structures."
            ],
            image: "/images/homeAddSolutionsTwo.webp" // Reemplaza con tu imagen
        },
        execution: {
            text: [
                "Foundation and framing work executed to precise specifications.",
                "Exterior finishing, including siding, roofing, and windows.",
                "Complete interior finishing, from drywall to flooring and paint."
            ],
            image: "/images/homeAddSolutionsThree.webp" // Reemplaza con tu imagen
        },
        duration: {
            title: "Project Duration: 10-16 Weeks",
            text: [
                "Phase 1 (2-4 Weeks): Architectural Design and Permitting",
                "Phase 2 (3-5 Weeks): Foundation, Framing, and Exterior Work",
                "Phase 3 (4-6 Weeks): Interior Systems and Finishes",
                "Phase 4 (1 Week): Final Walkthrough and Project Completion"
            ],
            image: "/images/livingDiningSolutionsFour.webp" // Reemplaza con tu imagen
        }
    },
    "Living & Dining": {
        challenge: {
            text: [
                "Creating an open, cohesive flow between living and dining areas.",
                "Designing custom built-ins for media, storage, or display.",
                "Developing a lighting plan that defines zones and creates ambiance."
            ],
            image: "/images/livingDiningSolutionsOne.webp" // Reemplaza con tu imagen
        },
        solution: {
            text: [
                "Removing non-structural walls and using consistent flooring to unify the space.",
                "Designing and fabricating custom entertainment centers and shelving.",
                "Using a mix of recessed lighting, chandeliers, and lamps to create layers of light."
            ],
            image: "/images/livingDiningSolutionsTwo.webp" // Reemplaza con tu imagen
        },
        execution: {
            text: [
                "Structural modifications and drywall finishing.",
                "Installation of custom cabinetry and millwork.",
                "Flooring installation, painting, and final electrical work."
            ],
            image: "/images/livingDiningSolutionsThree.webp" // Reemplaza con tu imagen
        },
        duration: {
            title: "Project Duration: 5-9 Weeks",
            text: [
                "Phase 1 (1-2 Weeks): Layout Design and Material Selection",
                "Phase 2 (1-2 Weeks): Demolition and Structural Prep",
                "Phase 3 (2-4 Weeks): Installation of Floors, Built-ins, and Lighting",
                "Phase 4 (1 Week): Painting and Final Touches"
            ],
            image: "/images/livingDiningSolutionsFour.webp" // Reemplaza con tu imagen
        }
    }
};

export default function ProjectsFilter() {
    const categories = [
        { name: "Kitchens", iconClass: "fas fa-kitchen-set" },
        { name: "Bathrooms", iconClass: "fas fa-bath" },
        { name: "Bedroom", iconClass: "fas fa-bed" },
        { name: "Home Additions", iconClass: "fas fa-house-chimney-window" },
        { name: "Living & Dining", iconClass: "fas fa-couch" },
    ];

    const [activeCategory, setActiveCategory] = useState("Kitchens"); // Estado inicial
    const [fadeKey, setFadeKey] = useState(0);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setFadeKey(prev => prev + 1);
    };

    // 2. Lógica actualizada: Selecciona los detalles del servicio activo
    const selectedServiceData = serviceDetails[activeCategory] || defaultDetails;

    return (
        <div className="projects-container">
            {/* --- Filtros de Iconos (sin cambios) --- */}
            <div className="tabs">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        className={`tab-button ${activeCategory === category.name ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <i className={category.iconClass}></i>
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>

            {/* --- 3. Renderizado del Layout Zig-Zag --- */}
            <div className="project-details-section fade-in" key={fadeKey}>
                {/* Bloque 1: Challenge */}
                <div className="project-feature-block">
                    <div className="feature-content">
                        <h2>Challenge</h2>
                        <ul>{selectedServiceData.challenge.text.map(item => <li>{item}</li>)}</ul>
                    </div>
                    <div className="feature-image">
                        <img className="imgPortfolioCards" src={selectedServiceData.challenge.image} alt={`${activeCategory} Challenge`} />
                    </div>
                </div>

                {/* Bloque 2: Solution */}
                <div className="project-feature-block">
                    <div className="feature-content">
                        <h2>Solution</h2>
                        <ul>{selectedServiceData.solution.text.map(item => <li>{item}</li>)}</ul>
                    </div>
                    <div className="feature-image">
                        <img className="imgPortfolioCards"  src={selectedServiceData.solution.image} alt={`${activeCategory} Solution`} />
                    </div>
                </div>

                {/* Bloque 3: Execution */}
                <div className="project-feature-block">
                    <div className="feature-content">
                        <h2>Execution</h2>
                        <ul>{selectedServiceData.execution.text.map(item => <li>{item}</li>)}</ul>
                    </div>
                    <div className="feature-image">
                        <img className="imgPortfolioCards"  src={selectedServiceData.execution.image} alt={`${activeCategory} Execution`} />
                    </div>
                </div>
                
                {/* Bloque 4: Duration */}
                <div className="project-feature-block">
                    <div className="feature-content">
                        <h2>{selectedServiceData.duration.title}</h2>
                        <ul>{selectedServiceData.duration.text.map(item => <li>{item}</li>)}</ul>
                    </div>
                    <div className="feature-image">
                        <img className="imgPortfolioCards"  src={selectedServiceData.duration.image} alt={`${activeCategory} Duration`} />
                    </div>
                </div>
            </div>
        </div>
    );
};