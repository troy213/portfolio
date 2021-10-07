import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experiences from './Experiences'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Modal from './Modal'

import 'font-awesome/css/font-awesome.min.css'
import './App.css'

const App = () => {
  React.useEffect(() => {
    const options = {
      root: null,
      threshold: 0,
      rootMargin: '-100px',
    }

    const serviceItems = document.querySelectorAll('.section')

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    serviceItems.forEach((item) => {
      observer.observe(item)
    })
  }, [])

  return (
    <div id='app'>
      <Modal />
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
