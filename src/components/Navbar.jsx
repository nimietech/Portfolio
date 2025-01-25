import React, { useState } from 'react'
import { LINKS } from '../constants'
import {RiCloseFill} from '@remixicon/react'
import {RiMenu3Fill} from '@remixicon/react'


const Navbar = () => {
    const [openBar, setOpenBar] = useState (false)

    const handleClick = () => {
        setOpenBar(!openBar)
    }

  return (
    <div className='fixed top-0 left-0 w-full z-50'>

      <div className='flex justify-between items-center md:max-w-[80%] mx-auto my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg m-0'>
        <div className='text-white font-semibold text-lg uppercase'>
        <a href="/">Glory Omoruyi</a>
        </div>

        <div className='hidden md:flex space-x-8'>
        {LINKS.map((link, i) => (
          <a href={link.href} key={i} className='text-white hover:text-stone-400 transition duration-300'>{link.label}</a>
        ))}
        </div>

        <div className='md:hidden'>
        <button onClick={handleClick} className='text-white focus:outline-none' aria-label={openBar ? "Close menu" : "Open menu"}>
          {openBar ? <RiCloseFill size={30}/> : <RiMenu3Fill size={30} />}
        </button>
        </div>

      </div>
          {/* displays the links in the bar */}
          {openBar && (
            <div className='md:hidden absolute top-[70px] flex flex-col bg-stone-950/30 backdrop-blur-lg rounded-l space-y-4 w-full py-4'>
               {LINKS.map((link, i) => (
            <a href={link.href} key={i} className='text-white hover:text-stone-400 transition duration-200 flex justify-start pl-4'>{link.label}</a>
          ))}
            </div>
          )}
    </div>  
  )
}

export default Navbar