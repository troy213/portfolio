import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experiences from './Experiences'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import store from '../store'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

const App = () => {
  return (
    <div id='app'>
      <Navbar store={store} />
      <Hero store={store} />
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
