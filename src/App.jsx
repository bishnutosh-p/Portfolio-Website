import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Loader, Tech, Works, StarsCanvas, Education, Scroller } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Works />
        <Experience />
        <Tech />
        {/* <Feedbacks /> Commented this out since currently no testimonials available... LOL*/}
        <div callName="relative z-0">
          <Contact />
          {/* <StarsCanvas />  This thing slows down the loading and causes jiterryness, hence I have commented this out. */}
        </div>
        <Scroller />
      </div>
    </BrowserRouter>
  )
}

export default App