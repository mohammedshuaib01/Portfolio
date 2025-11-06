import React, { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const aboutRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text" ref={aboutRef}>
          <h2>About Me</h2>
          <h3>
            I'm <span>Shuaib</span>, a Web Developer
          </h3>
          <p>
            I’m a passionate web developer focused on building responsive,
            modern, and user-friendly websites. I enjoy turning ideas into
            interactive digital experiences that not only look great but also
            perform seamlessly. I love working with React, JavaScript, and
            Django, and I’m always exploring new technologies to sharpen my
            skills.
          </p>
          {/* <p>
            When I’m not coding, I like learning new design trends and building
            creative personal projects that help me grow as a developer.
          </p> */}
          <a href="#contact" className="about-btn">Contact Me</a>
        </div>

        <div className="about-img" ref={imgRef}>
          <img src="..\src\assets\shuaiblaptop.jpg" alt="Shuaib - Web Developer" />
        </div>
      </div>
    </section>
  );
}

export default About;
