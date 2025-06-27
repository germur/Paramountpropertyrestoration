import { useState } from "react";
import '../styles/components/TabsNavegation.css';

export default function ProjectsFilter() {
    // Categories array with names in English
    const categories = [
        { name: "All", iconClass: "fas fa-border-all" },
        { name: "Kitchens", iconClass: "fas fa-kitchen-set" },
        { name: "Bathrooms", iconClass: "fas fa-bath" },
        { name: "Bedroom", iconClass: "fas fa-bed" },
        { name: "Home Additions", iconClass: "fas fa-house-chimney-window" },
        { name: "Living & Dining", iconClass: "fas fa-couch" },
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [fadeKey, setFadeKey] = useState(0);
    const projects = [
        {
            id: 1, name: "Modern Kitchen", category: "Kitchens", image: "images/cocina.jpg",
            description: "A modern kitchen with marble finishes and a minimalist design.",
            challenge: "To integrate all high-end appliances without visually cluttering the space.",
            solution: "Custom cabinets with flat fronts were designed, and a monochromatic color palette was used to unify the environment.",
            execution: "Installation of furniture, quartz countertops, and an under-cabinet LED lighting system.",
            time: "6 Weeks"
        },
        {
            id: 2, name: "Classic Kitchen", category: "Kitchens", image: "images/cocinaClasica.jpg",
            description: "A classic design with wood and vintage touches.",
            challenge: "To maintain a classic and warm style without sacrificing modern functionality.",
            solution: "A combination of cherry wood cabinets with state-of-the-art appliances hidden behind panels.",
            execution: "Detailed woodworking, installation of a central island, and classic-style faucets.",
            time: "8 Weeks"
        },
        {
            id: 3, name: "Minimalist Bathroom", category: "Bathrooms", image: "images/bañoMinimalista.jpg",
            description: "A bathroom with a minimalist style, glass shower, and neutral tones.",
            challenge: "To create a sense of spaciousness in a small area.",
            solution: "Use of a large mirror, a frameless glass shower enclosure, and large-format tiles to reduce visual seams.",
            execution: "Installation of wall-hung toilets, a floating vanity, and wall niches for storage.",
            time: "4 Weeks"
        },
        {
            id: 4, name: "Luxury Bathroom", category: "Bathrooms", image: "images/bañoLujo.jpg",
            description: "A bathroom with a jacuzzi, LED lighting, and Italian marble.",
            challenge: "To integrate a complete spa system with a luxurious and relaxing aesthetic.",
            solution: "Design of a dedicated wet area for the jacuzzi and shower, completely clad in Calacatta marble.",
            execution: "Installation of a hydrotherapy system, chromotherapy, and an integrated sound system.",
            time: "10 Weeks"
        },
        {
            id: 5, name: "Rustic Bedroom", category: "Bedroom", image: "images/habitaRustica.jpg",
            description: "A bedroom with natural wood and cozy decor.",
            challenge: "To achieve a rustic and cozy atmosphere without it feeling dark or outdated.",
            solution: "Use of reclaimed wood beams on the ceiling, light-toned walls, and natural textiles like linen and wool.",
            execution: "Treatment and assembly of wood, installation of wide-plank flooring, and creation of a custom headboard.",
            time: "5 Weeks"
        },
        {
            id: 6, name: "Modern Bedroom", category: "Bedroom", image: "images/habitacionModerna.jpg",
            description: "A design with LED lights and contemporary furniture.",
            challenge: "To create a futuristic and functional atmosphere, suitable for rest and work.",
            solution: "Design of indirect lighting with RGB LED strips, clean-lined furniture, and an integrated desk.",
            execution: "Installation of a home automation system for light and blind control, and assembly of high-gloss lacquered furniture.",
            time: "6 Weeks"
        },
        {
            id: 9, name: "Sunrooms & Outdoor Living", category: "Home Additions", image: "images/homeAddSolutionsThree.jpg",
            description: "Bring the outdoors in with custom sunrooms, screened enclosures, or expansive patio additions. Perfect for enjoying the climate.",
            challenge: "To seamlessly blend the new addition with the existing home architecture.",
            solution: "Utilized matching exterior materials and created a wide, open transition from the interior living space to the new sunroom.",
            execution: "Foundation work, framing, installation of high-efficiency glass panels, and electrical wiring for lighting and fans.",
            time: "9 Weeks"
        },
        {
            id: 10, name: "Custom Built-Ins & Storage", category: "Living & Dining", image: "images/livingDiningSolutionsTwo.jpg",
            description: "Design and install custom shelving, media centers, and display units. Maximize space and add architectural interest while keeping your area clutter-free.",
            challenge: "To maximize storage in a combined living/dining area without making the space feel cramped.",
            solution: "A full-wall, floor-to-ceiling built-in unit with a combination of open shelving and closed cabinets.",
            execution: "On-site measurement, custom fabrication in our workshop, and final installation with scribe molding for a perfect fit.",
            time: "4 Weeks"
        }
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setFadeKey((prev) => prev + 1);
    };

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <div className="projects-container">
            <div className="tabs">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className={`tab-button ${activeCategory === category.name ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <i className={category.iconClass}></i>
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>

            <div className="projects-list fade-in" key={fadeKey}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <div className="project-info">
                            <h2 className="titleCard">{project.name}</h2>
                            <p>{project.description}</p>
                            
                            <div className="project-details-extra">
                                <h2 className="project-detail-heading">Challenge</h2>
                                <p className="project-detail-text">{project.challenge}</p>

                                <h2 className="project-detail-heading">Solution</h2>
                                <p className="project-detail-text">{project.solution}</p>

                                <h2 className="project-detail-heading">Execution</h2>
                                <p className="project-detail-text">{project.execution}</p>

                                <h2 className="project-detail-heading">Project Timeline</h2>
                                <p className="project-detail-text">{project.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};