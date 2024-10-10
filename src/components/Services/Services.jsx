import React from 'react'
import ServiceImg from '../../assets/8.jpg'

const Services = () => {
  return (
    <>
     <div className='container py-12'>
        
        {/*header section */}
        <div className='flex items-center justify-between py-12 '>
          <h1 className='text-4xl xl:text-5xl font-bold max-w-[550px]'>
             Classes to spark Your{''} <span className='text-gray-400 underline'>Creativity</span>
          </h1>
          <p className='hidden md:block'>
            Notified to Spark your<span className='text-gray-400 underline'>Balance</span>
          </p>
        </div>
       {/*cards section*/}
       <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
         <div>
            <img src={ServiceImg} alt=''className='w-[300px]mx-auto sm:w-full'/>
         </div>
         <div className='max-w-[300px]mx-auto space-x-4'>
            <img src={ServiceImg} alt='' className='w-14'/>
             <p className='text-xl font-semibold uppercase'>Learn By doing</p>
            <p className='pl-6 text-gray-500 border-l-2'>
                Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Voluptas reiciendis tempore odio?
                adipisicing elit. Voluptas reiciendis tempore odio?
            </p>
         </div>
         <div>
            <img src=''/>
         </div>
         <div></div>
       </div>


     </div>
    </>
  )
}

export default Services