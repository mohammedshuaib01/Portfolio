import React from 'react'
import "./App.css";


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Sections/Hero/Hero'
import About from './components/Sections/About/About'
import Skills from './components/Sections/Skills/Skills'
import Works from './components/Sections/Works/Works'
import Projects from './components/Sections/Projects/Projects'
import Contact from './components/Sections/Contact/Contact'
import Experience from './components/Sections/Experience/Experience'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Preloader from './components/Preloader/Preloader'
import DropletCursor from './components/DropletCursor/DropletCursor'
import TextLoop from './components/Sections/TextLoop/TextLoop'

function App() {

  return (

    <div id="smooth-wrapper">
      <div id="smooth-content">

        <Preloader />

        <Header />

        {/* <DropletCursor /> */}


        <Hero /> 

        <About />

        <Experience />

        {/* <TextLoop/> */}

        <Skills />

        {/* <Works /> */}
        <Projects />

        <Contact />

        <Footer />



        {/* Scroll Button  */}
        <ScrollToTop />

      </div>
    </div>
  )
}

export default App
