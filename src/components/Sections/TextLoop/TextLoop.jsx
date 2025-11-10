import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./TextLoop.css";

const TextLoop = () => {
  const loopRef = useRef(null);

  useEffect(() => {
    const loop = loopRef.current;
    const text = "Design ★ Code ★ Deploy ";
    loop.innerHTML = text.repeat(20); // repeat to fill the width

    // Get total scroll width
    const totalWidth = loop.scrollWidth;

    // Animate infinitely using GSAP modifiers
    gsap.to(loop, {
      x: -totalWidth / 2,
      duration: 70, // adjust speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (-totalWidth / 2)),
      },
    });
  }, []);

  return (
    <div className="text-loop-container">
      <div className="text-loop" ref={loopRef}></div>
    </div>
  );
};

export default TextLoop;
