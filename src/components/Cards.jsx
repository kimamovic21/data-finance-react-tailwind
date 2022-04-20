import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#fff]'>
      
      <div className='max-w-[1240px] mx-auto 
           grid md:grid-cols-3 gap-8'>

         <div className='w-full shadow-xl flex flex-col cursor-pointer
              p-4 my-4 rounded-lg hover:scale-105 duration-100'>
             <img className='w-20 mx-auto mt-[-3rem] bg-[#fff]
                  rounded-lg p-2 border border-green-200'
                  src={Single} 
                  alt="" />
             <h2 className='text-2xl font-bold text-center py-8'>
               Single user
              </h2>
             <p className='text-center text-4xl font-extrabold'>
               $149
             </p>
             <div className='text-center font-medium'>
               <p className='py-2 border-b mx-8 mt-8'>
                 500GB Storage
               </p>
               <p className='py-2 border-b mx-8'>1 granted user</p>
               <p className='py-2 border-b mx-8'>Send up to 2GB</p>
             </div>
             <button className='bg-[#00df9a] w-[200px] rounded-md 
                  font-medium my-6 mx-auto py-2 text-[#000]'>
               Start trial
              </button>
         </div>

         <div className='bg-gray-100 w-full shadow-xl flex flex-col cursor-pointer
              p-4 my-4 rounded-lg hover:scale-105 duration-100'>
             <img className='w-20 mx-auto mt-[-3rem] bg-[#fff]
                  rounded-lg p-2 border border-green-200'
                  src={Double} 
                  alt="" />
             <h2 className='text-2xl font-bold text-center py-8'>
                Partnership
              </h2>
             <p className='text-center text-4xl font-extrabold'>
               $199
             </p>
             <div className='text-center font-medium'>
               <p className='py-2 border-b mx-8 mt-8'>
                 1TB Storage
               </p>
               <p className='py-2 border-b mx-8'>3 granted user</p>
               <p className='py-2 border-b mx-8'>Send up to 10GB</p>
             </div>
             <button className='bg-[#00df9a] w-[200px] rounded-md
                  font-medium my-6 mx-auto py-2 text-[#000]'>
               Start trial
              </button>
         </div>

         <div className='bg-gray-200 w-full shadow-xl flex flex-col cursor-pointer
              p-4 my-4 rounded-lg hover:scale-105 duration-100'>
             <img className='w-20 mx-auto mt-[-3rem] bg-[#fff] 
                  rounded-lg p-2 border border-green-200'
                  src={Triple} 
                  alt="" />
             <h2 className='text-2xl font-bold text-center py-8'>
               Group account
              </h2>
             <p className='text-center text-4xl font-extrabold'>
               $299
             </p>
             <div className='text-center font-medium'>
               <p className='py-2 border-b border-[#fff] mx-8 mt-8'>
                 5TB Storage
               </p>
               <p className='py-2 border-b border-[#fff] mx-8'>10 granted user</p>
               <p className='py-2 border-b border-[#fff] mx-8'>Send up to 20GB</p>
             </div>
             <button className='bg-[#00df9a] w-[200px] rounded-md 
                  font-medium my-6 mx-auto py-2 text-[#000]'>
               Start trial
              </button>
         </div>

      </div>

    </div>
  )
}

export default Cards;