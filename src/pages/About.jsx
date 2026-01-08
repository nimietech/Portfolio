import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_CONTENT } from '../constants'
import glory from '../images/gloryprofile.png';
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
    <section className='py-10 px-6' id='about'>
        <h1 className='text-4xl md:text:6xl font-medium tracking-tight mb-8 text-center'>About me</h1>

        <div className='h-1 w-20 mb-8 bg-white mx-auto'></div>

        <div className='md:w-[100%] mx-auto pt-10 flex items-center flex-col gap-8'>
            <motion.div className=''
                    initial='hidden'
                    animate='visible'
                    >
                    <img src={glory} alt="" className='md:h-[200px] w-[200px] md:w-[190px] rounded-full border-8 border-amber-950'/>
            </motion.div> 

            {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
                <p className='text-base sm:text-lg leading-relaxed w-full sm:w-[90%] md:w-[70%] lg:w-[60%] text-center'>

                    {paragraph}
                </p>
            ))}

            <a href="" className='bg-stone-50 text-stone-900 p-2 text-lg lg:p-4 mt-8 rounded-full inline-block hover:bg-amber-950 hover:text-white mr-4'>Let’s Work Together</a>
        </div>


    </section>
  )
}

export default About