import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <NavBar />
    <Home />
    <Services/>
    <About />
    <Projects />
    <Testimonials/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
