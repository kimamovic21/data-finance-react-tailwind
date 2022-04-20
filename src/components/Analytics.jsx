import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-[#f2eeee] py-16 px-4'>
        
        <div className='max-w-[1240px] mx-auto 
            grid md:grid-cols-2 gap-4'>

            <img className='w-[500px] mx-auto my-4 shadow-lg'
                 src={Laptop} 
                 alt="Laptop image" 
            />

            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold uppercase'>
                    Data analytics dashboard
                </p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>
                    Manage data analytics centrally
                </h1>
                <p className='text-gray-600'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing 
                   elit. In repudiandae placeat doloremque inventore,
                   maxime hic, accusantium dicta illo, ratione aliquam 
                   culpa praesentium! Architecto, doloribus perferendis 
                   repellendus ipsam consectetur recusandae odit?
                </p>
                <button className='bg-[#000] w-[200px] rounded-md 
                        font-medium my-6 mx-auto md:mx-0 py-2 text-[#00df9a]
                        hover:scale-[1.1] hover:ease-in-out duration-300'>
                      Get started
                </button>
            </div>

        </div>

    </div>
  )
}

export default Analytics;