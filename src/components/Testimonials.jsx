import React from 'react'
import Image_1 from "../assets/projects/Testimonials.jpg"

const Testimonials = () => {
  return (
    <div className='w-full relative h-[550px] border-2 border-amber-950'>
  <img src={Image_1} alt="" className='w-full h-[550px] object-cover' />
  <div className='absolute inset-0 bg-cyan-600 opacity-50 z-10 w-[1170px] mx-40 bg-opacity-90'></div>
</div>

  )
}

export default Testimonials
