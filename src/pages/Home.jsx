import React from 'react'
import { motion } from 'framer-motion'
import { HERO_SECTION, LINKS } from '../constants'
import { Typewriter } from 'react-simple-typewriter';
import glory from '../images/gloryprofile.png'

// Animation for my homepage
const textVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {opacity:1, y:0, transition:{ duration:0.8, ease:"easeOut"} }
}

const containerVariants = {
  hidden: {opacity: 1},
  visible: {opacity:1, y:0, 
            transition:{ staggerChildren:0.8} }
}


const imageVariants = {
  hidden: {clipPath: "inset(0 50% 0 50%)"},
  visible: {clipPath: "inset(0 0% 0 0)", transition:{ duration:1.2,ease: "easeInOut"}}
}


const Home = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-0">
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white w-full gap-8 py-20">

      {/* TEXT SECTION */}
      <motion.div
        className="w-full md:w-[80%] flex flex-col items-start text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12"
          variants={textVariants}
        >
          {HERO_SECTION.bio}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6"
          variants={textVariants}
        >
          <Typewriter
            words={[HERO_SECTION.description]}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 mt-8">
          <motion.a
            className="bg-stone-50 text-stone-900 px-6 py-3 text-base sm:text-lg rounded-full hover:bg-amber-950 hover:text-white transition"
            href={HERO_SECTION.href}
            variants={textVariants}
          >
            {HERO_SECTION.buttonLinkText}
          </motion.a>

          <motion.a
            className="bg-stone-50 text-stone-900 px-6 py-3 text-base sm:text-lg rounded-full hover:bg-amber-950 hover:text-white transition"
            href={HERO_SECTION.resumeLink}
            download
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}
          >
            {HERO_SECTION.resumeLinkText}
          </motion.a>
        </div>
      </motion.div>

      {/* IMAGE SECTION — uncomment if needed */}
      {/* 
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img 
          src={glory} 
          alt="" 
          className="w-[250px] sm:w-[300px] md:w-[420px] lg:w-[480px] rounded-2xl"
        />
      </motion.div>
      */}

    </div>
  </section>

  )
}

export default Home