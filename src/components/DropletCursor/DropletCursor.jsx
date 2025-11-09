import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./DropletCursor.css";

function DropletCursor() {
  const mainRef = useRef(null);
  const tail1Ref = useRef(null);
  const tail2Ref = useRef(null);

  useEffect(() => {
    const main = mainRef.current;
    const tail1 = tail1Ref.current;
    const tail2 = tail2Ref.current;

    const moveCursor = (e) => {
      gsap.to(main, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(tail1, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(tail2, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="droplet-cursor main" ref={mainRef}></div>
      <div className="droplet-cursor tail1" ref={tail1Ref}></div>
      <div className="droplet-cursor tail2" ref={tail2Ref}></div>
    </>
  );
}

export default DropletCursor;
