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
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto w-full sm:w-[95%] lg:w-[90%] gap-8'>
            {PROJECTS.map( (project, i) => (
                <motion.div key={i} 
                className='relative overflow-hidden group rounded-lg'
                initial= "hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={projectVariants}>
                    <div className='relative w-full h-[220px] sm:h-[260px] md:h-[280px]'>
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
                <div className=' text-white p-4 mt-2 rounded-md shadow-md mb-10'>
                      <h3 className='text-lg font-bold mb-2'>My Role:</h3>
                      {i === 0 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>Frontend Developer – Built responsive, accessible components using ReactJS, q              TailwindCSS</li>
                        </ul>
                      )}
                      {i === 1 && (
                        <div>
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>UI/UX Designer – Designed modern car display and browsing interface</li>
                          <li>Frontend Developer – Developed entire frontend using ReactJS and JavaScript</li>
                        </ul>
                        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 max-w-md">
                          <p className="text-xs text-red-500 mt-2">
                            * Demo account for testing purposes only
                          </p>

                          <div className="text-sm text-gray-600 space-y-1">
                            <p>
                              <span className="font-medium text-gray-800">Username:</span> glory
                            </p>
                            <p>
                              <span className="font-medium text-gray-800">Password:</span> nimietech
                            </p>
                          </div>
                        </div>
                        </div>
                      )}
                      {i === 2 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                          <li>UI/UX Designer – Created modern tech-inspired design</li>
                          <li>Frontend Developer – Built using HTML, CSS, and JavaScript</li>
                        </ul>
                      )}  
                      {i === 3 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                           <li>UI/UX Designer – Designed a modern, tech-inspired user interface</li>
                          <li>Implemented the full UI with modern frontend frameworks</li>
                        </ul>
                      )}  
                      {i === 4 && (
                        <ul className='text-lg space-y-1 list-disc list-inside'>
                           <li>UI/UX Designer – Designed a modern, tech-inspired user interface</li>
                          <li>Implemented the full UI with modern frontend frameworks</li>
                        </ul>
                      )}  
                </div>
                
                <button className='flex flex-col justify-center mb-4'>
                <a className="bg-stone-50 text-stone-900 px-6 py-3 text-base sm:text-lg rounded-full hover:bg-amber-950 hover:text-white transition"
                href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                </button>
              </motion.div> 
            ))}
        </div>

        <div className="mt-12 mx-4 sm:mx-10 md:mx-20 py-6 text-white rounded-lg shadow-lg text-sm sm:text-md md:text-base">

        <p>
            <strong>Disclosure:</strong> This visuals are screenshots of some of the projects I've personally developed from scratch. 
            To respect confidentiality agreements, some details have been generalized or selectively presented. 
            These examples highlight the scale, creativity, and problem-solving approach I bring to every collaboration.
        </p>
        </div>

    </section>
  )
}

export default Projects