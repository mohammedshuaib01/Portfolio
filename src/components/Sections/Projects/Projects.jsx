import React, { useEffect, useRef } from 'react';
import './Projects.css';

// Import local images


const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current.querySelectorAll('.project-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: 'Youway - Ecommerce',
            description: 'Complete e-commerce store with optimized checkout that increased conversions by 40%',
            image: "src/assets/projects/youway.jpg",
            tags: ['E-commerce', 'Django', 'Python', 'HTML', 'CSS']
        },
        {
            title: 'Fotopi - Social Media',
            description: 'Internal platform that automated processes and reduced operational costs with multiple integrations',
            image: "src/assets/projects/fotopi.jpg",
            tags: ['Django', 'Python', 'HTML', 'CSS']
        },
        {
            title: 'ERON - CRM Website',
            description: 'Intelligent dashboards for real-time data visualization with predictive AI',
            image: "src/assets/projects/eroncrm.jpg",
            tags: [ 'React', 'JSX', 'HTML', 'CSS']
        },
        {
            title: 'RMA - Work Abroad Website',
            description: 'Modern banking interface focusing on accessibility and data security',
            image: "src/assets/projects/RMA.jpg",
            tags: ['React', 'JSX', 'HTML', 'CSS']
        },
        {
            title: 'LearnIT - LMS',
            description: 'Modern banking interface focusing on accessibility and data security',
            image: "src/assets/projects/learnit.jpg",
            tags: ['Django', 'React', 'REST API','Antigravity', 'HTML', 'CSS']
        },
        {
            title: 'Screeners - Website',
            description: 'Modern banking interface focusing on accessibility and data security',
            image: "src/assets/projects/Screeners.jpg",
            tags: ['WordPress', 'PHP', 'Hostinger']
        },
    ];

    return (
        <section className="projects-section" id="projects" ref={sectionRef}>
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">Projects</h2>
                    {/* <p className="projects-subtitle">Alguns dos trabalhos que desenvolvi para clientes satisfeitos</p> */}
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-card-title">{project.title}</h3>
                                {/* <p className="project-card-description">{project.description}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 

