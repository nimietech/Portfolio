import React from 'react'
import { motion } from 'framer-motion'
import { HERO_SECTION } from '../constants'
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
    <section className="md:w-[80%] mx-auto">
      <div className=' z-10 min-h-screen flex flex-col md:flex-row items-center gap-11 text-white w-full'>

        <motion.div className=' p-8'
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
          <motion.h1  className='text-2xl md:text-3xl lg:text-5xl my-7 md:my-10 pt-14'
                      variants={textVariants}>
            {HERO_SECTION.greeting}
          </motion.h1>

          <motion.p className='text-xl md:text-3xl mb-4'
                    variants={textVariants}>
            {HERO_SECTION.introduction}
          </motion.p>

          <motion.p className='text-xl md:text-3xl'
                    variants={textVariants}>
            {HERO_SECTION.description}
          </motion.p>
          <motion.a className='bg-stone-50 text-stone-900 p-2 lg:p-4 mt-8 rounded-2xl inline-block hover:bg-amber-950 hover:text-white'
                    href={HERO_SECTION.resumeLink}
                    download
                    rel='noopener noreferrer'
                    target='_blank'
                    variants={textVariants}>
            {HERO_SECTION.resumeLinkText}
          </motion.a>
        </motion.div>
        
        <motion.div className=' p-8 '
                    initial='hidden'
                    animate='visible'
                    variants={imageVariants}>
          <img src={glory} alt="" className='h-[180px] w-[450px] rounded-2xl'/>
        </motion.div>

      </div> 
    </section>
  )
}

export default Home