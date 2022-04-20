import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-[#fff]'>
        
        <div className='max-w-[800px] mt-[-90px] w-full h-screen 
              mx-auto text-center flex flex-col justify-center'>

           <p className='text-[#00df9a] font-bold p-2'>
             Growing with data analytics.
            </p>      
           <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold p-2'>
             Grow with data.
           </h1>

           {/* npm install react-typed */}
           <div className='flex justify-center items-center'>
             <p className='md:text-5xl sm:text-4xl py-4'>
               Fast, flexible financing for
             </p>
             <Typed className='md:text-5xl sm:text-4xl md:pl-4 pl-2'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={128}
                    backSpeed={130}
                    loop
             />
           </div>

           <p className='md:text-2xl text-xl font-bold text-gray-300 p-2'>
             Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
           </p>

           <button className='bg-[#00df9a] w-[200px] rounded-md 
                  font-medium my-6 mx-auto py-2 text-[#000]
                  hover:scale-[1.1] hover:ease-in-out duration-300'>
              Get started
           </button>

        </div>

    </div>
  )
}

export default Hero;