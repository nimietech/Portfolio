import React from 'react'


const ElevatedPitch = () => {
  return (
    <section className='className= px-6 py-20'>
        <h1 className='text-4xl md:text:6xl font-medium tracking-tight mb-8 text-center'>Elevated Pitch</h1>

        <div className='h-1 w-20 mb-8 bg-white mx-auto'></div>

    <div className="relative h-full w-full max-w-3xl mx-auto my-16 rounded-xl overflow-hidden shadow-lg">
        
        <img
            src="https://placehold.co/800x450?text=Video+Coming+Soon&font=Montserrat"
            alt="Placeholder"
            className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-6">
            <div className="text-4xl mb-2">⏳</div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">Coming Soon</h2>
            <p className="text-sm md:text-base opacity-80">A fresh look into what I do – coming soon.</p>
        </div>
    </div>


    </section>
  )
}


export default ElevatedPitch






