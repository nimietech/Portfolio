import React from 'react';
import { SKILLS } from '../constants';




const Skills = () => {
  return (
    <section className='px-6 py-16' id='skills'>
        <h1 className='text-4xl md:text:6xl font-medium tracking-tight mb-8 text-center'>Skills</h1>

        <div className='h-1 w-20 mb-8 bg-white mx-auto'></div>

        <div className='md:w-[80%] mx-auto'>
          <div className=' grid grid-cols-3 gap-8 md:gap-6'>
          {SKILLS.map((skill, i) => (
            <div className=' flex justify-center'>
             <img
             key={i} // Add the key directly here
             src={skill.image}
             alt={skill.name}
             className="w-[100px] md:w-[80px] md:h-[100px] cursor-pointer"/>
            </div>
          ))}
          </div>
        </div>
    </section>
  )
}

export default Skills