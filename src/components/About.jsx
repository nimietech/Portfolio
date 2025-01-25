import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_CONTENT } from '../constants'

const textVariants = {
    hidden: {
        opacity: 0, y:50
    },

    visible: {
        opacity: 1,
        y:0, 
        transition: {
            duration: 0.6,
            ease: "easeOut",
        }

    }
}

const About = () => {
  return (
    <section className=' py-10 px-6' id='about'>
        <h1 className='text-4xl md:text:6xl font-medium tracking-tight mb-8'>About</h1>

        <div className='h-1 w-20 mb-8 bg-white'></div>

        <div className='md:w-[80%] mx-auto pt-14'>
            {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
                <motion.p key={i}
                initial= "hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                variants={textVariants}
                className='text-xl md:text-3xl mb-8 leading-relaxed'>
                    {paragraph}
                </motion.p>
            ))}
        </div>
    </section>
  )
}

export default About