import React from 'react'
// import { useEffect } from "react";
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollSmoother } from 'gsap/all'
import "./App.css";




import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Sections/Hero/Hero'
import About from './components/Sections/About/About'
import Skills from './components/Sections/Skills/skills'
import Works from './components/Sections/Works/Works'



// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {

  // useEffect(() => {
  //   // Initialize smooth scroll only once
  //   if (!ScrollSmoother.get()) {
  //     ScrollSmoother.create({
  //       wrapper: "#smooth-wrapper",
  //       content: "#smooth-content",
  //       smooth: 1.2, // controls smoothness speed
  //       effects: true,
  //     });
  //   }
  // }, []);


  return (

    <div id="smooth-wrapper">
      <div id="smooth-content">

        <Header />

        <Hero />


        <About />

        <Skills />

        <Works />

        <Footer />

      </div>
    </div>
  )
}

export default App
