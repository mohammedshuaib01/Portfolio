// src/components/ScrollIndicator.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ScrollIndicator.css";

function ScrollIndicator() {
  const dotRef = useRef(null);

  useEffect(() => {
    gsap.to(dotRef.current, {
      y: 12,          // move down
      repeat: -1,     // infinite loop
      yoyo: true,     // move back up
      duration: 1.2,  // smooth speed
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="scroll-icon">
      <div className="mouse-outline">
        <div className="mouse-dot" ref={dotRef}></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
