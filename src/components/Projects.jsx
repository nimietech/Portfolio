import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const projectVariants = {
    hidden: {
        opacity: 0, scale:0.8, rotate: -40, y:50
    },

    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        y:0, 
        transition: {
            duration: .7,
            ease: "easeOut",
            type: "spring",
            bounce: 0.4
        }

    }
}

const Projects = () => {
  return (
    <section className='px-6 py-20' id='project'>
        <h1 className='text-4xl md:text:6xl font-medium tracking-tight mb-8 text-center'>My Work</h1>

        <div className='h-1 w-20 mb-8 bg-white mx-auto'></div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto w-[90%] gap-8'>
            {PROJECTS.map( (project, i) => (
                <motion.div key={i} 
                className='relative overflow-hidden group rounded-lg'
                initial= "hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={projectVariants}>
                    <div className='relative w-[490px] h-[280px]'>
                    <img src={project.image} 
                         alt={project.name}
                         className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg'/>

                    {/* Overlay */}
                    <div className='absolute top-0 left-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white pr-16 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pt-10'>
                        <h2 className='text-xl font-semibold uppercase tracking-wide text-white mb-2 text-center'>{project.name}</h2>

                        <p className='mb-4 text-gray-200 text-lg font-light max-w-[85%]'>{project.description}</p>  
                    </div>   
                    </div>

                    {/* Professional Info Box */}
                <div className=' text-white p-4 mt-2 rounded-md shadow-md'>
                      <h3 className='text-lg font-bold mb-2'>My Role:</h3>
                      {i === 0 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>Frontend Developer – Built responsive, accessible components using ReactJS, TailwindCSS</li>
                        </ul>
                      )}
                      {i === 1 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>UI/UX Designer – Designed modern car display and browsing interface</li>
                          <li>Frontend Developer – Developed entire frontend using ReactJS and JavaScript</li>
                        </ul>
                      )}
                      {i === 2 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>UI/UX Designer – Created modern tech-inspired design</li>
                          <li>Frontend Developer – Built using HTML, CSS, and JavaScript</li>
                        </ul>
                      )}

                      <h3 className='text-lg font-bold mt-4 mb-2'>Key Achievements:</h3>
                      {i === 0 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>Reduced client onboarding time by 50% through intuitive navigation</li>
                          <li>Implemented responsive layouts for seamless mobile experience</li>
                          <li>Boosted visitor engagement through visually compelling UI</li>
                        </ul>
                      )}
                      {i === 1 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>Streamlined car search and comparison with interactive UI</li>
                          <li>Integrated car trend highlights to boost page views</li>
                          <li>Enhanced user retention with fast-loading, optimized design</li>
                        </ul>
                      )}
                      {i === 2 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>Launched online presence for RAWBOT tech company</li>
                          <li>Increased inquiry rates through clear service presentation</li>
                          <li>Custom-coded sections that reflect brand identity</li>
                        </ul>
                      )}
                </div>
                </motion.div>
            ))}
        </div>

        <div className=" mt-12 ml-20 py-6 text-white rounded-lg shadow-lg text-md md:text-base">
        <p>
            <strong>Disclosure:</strong> The visuals displayed here are real screenshots from client projects I've personally designed and developed. 
            To respect confidentiality agreements, some details have been generalized or selectively presented. 
            These examples highlight the scale, creativity, and problem-solving approach I bring to every collaboration.
        </p>
        </div>

    </section>
  )
}

export default Projects