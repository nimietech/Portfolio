import React from 'react';
import { SKILLS } from '../constants';




const Skills = () => {
  return (
    <section className='px-6 py-16' id='skills'>
        <h1 className='text-4xl md:text:6xl font-medium tracking-tight mb-8 text-center'>Skills</h1>

        <div className='h-1 w-20 mb-8 bg-white mx-auto'></div>

        <div className="w-full sm:w-[95%] md:w-[90%] mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 py-8">
  {SKILLS.map((skill, i) => (
    <div
      key={i}
  className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform duration-300 shadow-md"
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[80px] md:h-[80px] mb-2"
      />
      <p className="text-sm font-semibold text-white tracking-wide text-center">
        {skill.name}
      </p>
    </div>
  ))}
</div>


        {/* <div className='md:w-[80%] mx-auto'>
          <div className=' grid grid-cols-3 gap-8 md:gap-6'>
          {SKILLS.map((skill, i) => (
            <div className=' flex flex-col items-center justify-center'>
             <img
             key={i} // Add the key directly here
             src={skill.image}
             alt={skill.name}
             className="w-[100px] md:w-[80px] md:h-[100px] cursor-pointer"/>

             <p className='text-sm font-medium text-white tracking-wide'>{skill.name}</p>
            </div>
          ))}
          </div>
        </div> */}
    </section>
  )
}

export default Skills