import React from 'react'
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
   <div>
      <BlurBackground/>
      <Navbar/>
      <main className='antialiased overflow-x-hidden max-w-7xl mx auto relative z-10'>
        <Navbar />
        <Home/>
      </main>
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>


   </div>
  )
}

export default App