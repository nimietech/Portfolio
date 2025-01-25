import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT_CONTENT } from '../constants'
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinFill } from 'react-icons/ri';

const textVariants ={
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay,
        }

    })
}

const iconVariants ={
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay,
        }

    })
}



const Contact = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center px-4 md:px-10' id='contact'>
        <h2 className='text-4xl md:text:6xl font-medium tracking-tight mb-8'>Contact</h2>

        <div className='h-1 w-20 mb-8 bg-white'></div>

        <motion.h3 className='text-6xl md:text-8xl leading-none'
            initial= "hidden"
            whileInView= "visible"
            custom={0.4}
            variants={textVariants}>
                {CONTACT_CONTENT.headline}
        </motion.h3>

        <motion.p className='text-lg md:text-2xl mt-6 max-w-3xl' 
        initial = "hidden"
        whileInView = "visible"
        custom={0.6}
        variants={textVariants}> 
            {CONTACT_CONTENT.description}
        </motion.p>
            
        <motion.a href={`mailto:${CONTACT_CONTENT.email}`}
        className='text-2xl md:text-3xl font-medium mt-8' 
        initial= 'hidden'
        whileInView='visible'
        custom={0.8}
        variants={textVariants}>
            {CONTACT_CONTENT.email}
        </motion.a>

        <div className='flex space-x-6 mt-8'>
            {CONTACT_CONTENT.socialLinks.map( (link, i) => {
                const Icon = link.icon === "RiGithubFill" ? RiGithubFill : link.icon === "RiLinkedinFill" ? RiLinkedinFill : null;

                console.log(link.icon, Icon)
                return (
                    Icon && (
                    <motion.a key={link.platform}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={link.ariaLabel}
                    initial='hidden'
                    whileInView='visible'
                    custom={1.0 + i * 0.2}
                    variants={iconVariants}
                    className=''>
                        <Icon size={36}/>
                    </motion.a> 
                    )
                )
            })}
        </div>
    </section>
  )
}

export default Contact 