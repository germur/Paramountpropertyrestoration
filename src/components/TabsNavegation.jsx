import { useState } from "react";
import '../styles/components/TabsNavegation.css';

export default function ProjectsFilter() {
    // Array de categorías actualizado con los nuevos íconos
    const categories = [
        { name: "All", iconClass: "fas fa-border-all" },
        { name: "Kitchens", iconClass: "fas fa-kitchen-set" },
        { name: "Bathrooms", iconClass: "fas fa-bath" },
        { name: "Bedroom", iconClass: "fas fa-bed" },
        { name: "Home Additions", iconClass: "fas fa-house-chimney-window" },
        { name: "Living Dining", iconClass: "fas fa-couch" },
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [fadeKey, setFadeKey] = useState(0);

    const projects = [
        { id: 1, name: "Cocina Moderna", category: "Kitchens", image: "images/cocina.jpg", description: "Una cocina moderna con acabados en mármol y diseño minimalista." },
        { id: 2, name: "Cocina Clásica", category: "Kitchens", image: "images/cocinaClasica.jpg", description: "Un diseño clásico con madera y toques vintage." },
        { id: 3, name: "Baño Minimalista", category: "Bathrooms", image: "images/bañoMinimalista.jpg", description: "Baño con estilo minimalista, ducha de vidrio y tonos neutros." },
        { id: 4, name: "Baño de Lujo", category: "Bathrooms", image: "images/bañoLujo.jpg", description: "Baño con jacuzzi, iluminación LED y mármol italiano." },
        { id: 5, name: "Habitación Rústica", category: "Bedroom", image: "images/habitaRustica.jpg", description: "Habitación con madera natural y decoración acogedora." },
        { id: 6, name: "Habitación Moderna", category: "Bedroom", image: "images/habitacionModerna.jpg", description: "Diseño con luces LED y muebles contemporáneos." },
        { id: 7, name: "Tienda de Moda", category: "Commercials", image: "images/tiendaModa.jpg", description: "Diseño moderno para tienda de ropa con vitrinas amplias." },
        { id: 8, name: "Oficina Ejecutiva", category: "Commercials", image: "images/oficinaEjecutiva.jpg", description: "Espacio de trabajo con decoración colorida y funcional." },
        // Aquí podrías añadir proyectos para "Home Additions" y "Living Dining"
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setFadeKey((prev) => prev + 1); // Trigger animation by changing key
    };

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <div className="projects-container">
            <div className="tabs">
                {/* Se ha vuelto a usar <button> por accesibilidad */}
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
                            <h3 className="titleCard">{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};