import React, { useEffect, useRef } from "react";
import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "../../ScrollIndicator/ScrollIndicator";  

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000", // shorter = faster overall scroll, longer = slower transitions
          scrub: 2, // smoother scrub motion
          pin: true,
          // markers: true,
        },
      });

      boxesRef.current.forEach((box, i) => {
        // Each box animation segment
        const durationPerBox = 3; // controls time taken per box scroll section

        // Entrance from bottom
        tl.fromTo(
          box,
          { y: 400, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power2.out",
          },
          i * durationPerBox
        );

        // Exit smoothly to top
        tl.to(
          box,
          {
            y: -1000,
            opacity: 0,
            scale: 0.9,
            duration: 2,
            ease: "power2.inOut",
            
          },
          i * durationPerBox + 3
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "React", icon: "Images/atom.png" },
    { name: "Python", icon: "Images/python.png" },
    { name: "Django", icon: "Images/icons8-django-96.png" },
    { name: "JavaScript", icon: "Images/js.png" },
    { name: "HTML & CSS", icon: "Images/html-5.png" },
    { name: "WordPress", icon: "Images/wordpress.png" },
    { name: "Shopify", icon: "Images/shopify.png" },
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2 className="skills-title">What I Do</h2>
      <div> <ScrollIndicator /></div>
      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (boxesRef.current[index] = el)}
            className={`skill-box ${index % 2 === 0 ? "left" : "right"}`}
          >
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
