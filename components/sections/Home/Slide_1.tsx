import Image from 'next/image'
import React from 'react'
import slide_1 from '@/app/assets/images/slide-3.jpg'
import Header from '@/components/layout/Header'

const Slide_1 = () =>{
  return (
    <section className='relative h-[50vh]  md:h-[70vh] lg:min-h-screen'>
        <Image 
        src={slide_1}
        alt='background image'
        fill
        priority
        />
        <div className='relative z-10 flex flex-col  h-full container px-4 mx-auto lg:py-10 '>
<Header/>
        </div>
    </section>
  )
}

export default Slide_1