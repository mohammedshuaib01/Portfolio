import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
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

        const cards = sectionRef.current.querySelectorAll('.exp-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            year: '2025 - Present',
            title: 'Web Developer Intern',
            company: 'Sysdevcode Technologies Pvt Ltd',
            description: 'Full-stack development intern gaining hands-on experience with React, Django, API integration, and responsive user interfaces.'
        },
        {
            year: '2023 - 2025',
            title: 'Wordpress Developer',
            company: 'Web Maestro Technologies',
            description: 'Developing custom WordPress themes with WooCommerce and Shopify integration, focusing on mobile-first, SEO-friendly design and effective team collaboration.'
        }
    ];

    return (
        <section className="experience" id="experience" ref={sectionRef}>
            <div className="exp-container">
                <div className="section-header">
                    <h2 className="exp-title">Experience</h2>
                    <p className="exp-subtitle">My professional journey and key milestones</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`exp-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="exp-dot"></div>
                            <div className="exp-card">
                                <span className="exp-year">{exp.year}</span>
                                <h3 className="exp-position">{exp.title}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                                <p className="exp-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
