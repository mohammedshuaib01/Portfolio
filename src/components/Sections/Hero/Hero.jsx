import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DarkVeil from "../../Backgrounds/DarkVeil";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",       // starts as soon as hero hits top of screen
        end: "bottom center", // a bit longer duration for smoother motion
        scrub: 1,
        // markers: true,             // smooth scrubbing (1s delay feel)
      },
    });

    tl.to(leftRef.current, {
      x: -520,
      opacity: 0.8,
      filter: "blur(5px)",
      ease: "power2.out",
    }).to(
      rightRef.current,
      {
        x: 520,
        opacity: 0.8,
        filter: "blur(5px)",
        ease: "power2.out",
      },
      0 // run together
    );

    return () => tl.kill();
  }, []);


  return (
    <section id="home" className="hero">
      <div style={{ width: "100%", height: "100vh", position: "absolute", zIndex: 0 }}>
        <DarkVeil />
      </div>

      <div className="hero-content">
        <h2 className="intro-text">
          Hi, I’m <span></span>
        </h2>

        <h1 className="split-title">
          <span ref={leftRef} className="shu">SHU</span>
          <span ref={rightRef} className="aib">AIB.</span>
        </h1>

        <h2 className="sub-text">Full-stack Developer </h2>
      </div>
    </section>

  );
}

export default Hero;
