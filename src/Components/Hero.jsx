import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center'>
            <div className='w-10 h-[2px] bg-orange-400 mr-3'></div>New Trends
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>Sale <br />
            <span className='font-semibold'>MEN/WOMEN</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-red-600'>Discover More</Link>
        </div>
        
      </div>
      
    </section>
  ) 
}

export default Hero