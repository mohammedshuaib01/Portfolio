import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Works.css";



gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and GSAP animations.",
    image: "Images/a2.jpg",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    desc: "A clean, responsive e-commerce site using Django backend.",
    image: "Images/bar.jpg",
  },
  {
    id: 3,
    title: "Jewellery Website",
    desc: "Creative branding visuals and digital identity designs.",
    image: "Images/jesslady.jpg",
  },
  {
    id: 4,
    title: "Photography Gallery",
    desc: "An immersive gallery layout with smooth GSAP transitions.",
    image: "Images/cleaning.jpg",
  },
 
];

function Works() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;

    const scrollWidth = horizontal.scrollWidth - window.innerWidth;

    gsap.to(horizontal, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "center center", // starts when the section hits center
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section id= "works" className="works-section" ref={sectionRef}>
      <div className="works-header">
        <h2>Projects</h2>
        {/* <p>Some of my favorite works showcasing creativity, design, and code.</p> */}
      </div>
      <div className="works-container" ref={horizontalRef}>
        {projects.map((project) => (
          <div key={project.id} className="work-card">
            <img src={project.image} alt={project.title} />
            <div className="work-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
    