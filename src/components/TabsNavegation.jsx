import { useState } from "react";
import '../styles/components/TabsNavegation.css';

export default function ProjectsFilter() {
    const categories = ["All", "Kitchens", "Bathrooms", "Rooms", "Commercials"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [fadeKey, setFadeKey] = useState(0);

    const projects = [
        { id: 1, name: "Cocina Moderna", category: "Kitchens", image: "/images/cocina.jpg", description: "Una cocina moderna con acabados en mármol y diseño minimalista." },
        { id: 2, name: "Cocina Clásica", category: "Kitchens", image: "/images/cocinaClasica.jpg", description: "Un diseño clásico con madera y toques vintage." },
        { id: 3, name: "Baño Minimalista", category: "Bathrooms", image: "/images/bañoMinimalista.jpg", description: "Baño con estilo minimalista, ducha de vidrio y tonos neutros." },
        { id: 4, name: "Baño de Lujo", category: "Bathrooms", image: "/images/bañoLujo.jpg", description: "Baño con jacuzzi, iluminación LED y mármol italiano." },
        { id: 5, name: "Habitación Rústica", category: "Rooms", image: "/images/habitaRustica.jpg", description: "Habitación con madera natural y decoración acogedora." },
        { id: 6, name: "Habitación Moderna", category: "Rooms", image: "/images/habitacionModerna.jpg", description: "Diseño con luces LED y muebles contemporáneos." },
        { id: 7, name: "Tienda de Moda", category: "Commercials", image: "/images/tiendaModa.jpg", description: "Diseño moderno para tienda de ropa con vitrinas amplias." },
        { id: 8, name: "Oficina Ejecutiva", category: "Commercials", image: "/images/oficinaEjecutiva.jpg", description: "Espacio de trabajo con decoración colorida y funcional." }
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
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`tab-button ${activeCategory === category ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
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
