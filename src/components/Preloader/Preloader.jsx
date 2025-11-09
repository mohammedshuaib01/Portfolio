// src/components/Preloader.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Preloader.css";

function Preloader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Fade out when page loads
    window.addEventListener("load", () => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          loaderRef.current.style.display = "none";
        },
      });
    });
  }, []);

  return (
    <div className="preloader" ref={loaderRef}>
      <div className="loader-circle"></div>
      <h2 className="loader-text">Loading...</h2>
    </div>
  );
}

export default Preloader;
