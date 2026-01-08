import React from 'react'
import { Routes, Route } from "react-router-dom";
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import ElevatedPitch from './pages/ElevatedPitch'
import { MoreProjects } from './pages/moreProjects';

const App = () => {
  return (
   <div>
      <BlurBackground/>
      <main className='antialiased overflow-x-hidden max-w-7xl mx auto relative z-10'>
        <Navbar />
        <Home/>
      </main>
      <About/>
      <Skills/>
      <Projects/>
      <ElevatedPitch/>
      <Contact/>
   </div>
  )
}

export default App