import Image from 'next/image'
import React from 'react'
import building from '@/app/assets/images/building-1.png'
import building_2 from '@/app/assets/images/building-2.png'
import ClientTestimonial from './ClientTestimonial'
import Gap from '@/components/shared/Gap'

const AboutPage = () => {
  return (
    <main className='w-full min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 py-20  space-y-10'>
         <div className="flex flex-col md:flex-row  justify-center gap-10">
        <div className='max-w-2xl'>
          <div className='px-4 space-y-4'>
            <p className="text-[14px] text-center md:text-left text-gray-500">OUR BENEFITS</p>
            <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold'>

              <span className='border-b'>
                Quality
              </span>
              Reliability and Professionalism
            </h1>
            <div >
              <p className='text-[#757575] text-[18px] leading-6 text-center md:text-left'>
                We have earned strong recognition
                for undertaking all sorts of big
                and small projects, fostering innovation,
                embracing emerging technologies and making
                a difference for our clients, employees,
                community and environment.
              </p>
            </div>
          </div>
        </div>

        <div className='relative w-full h-full'>
          <Image
            src={building}
            alt='background image'
            priority
            width={900}
            height={600}
            className='object-cover h-full w-full'
          />
        </div>
      </div>


      <div className='flex  flex-col md:flex-row  justify-center gap-10 '>
        <div className='relative w-full h-full'>
          <Image
            src={building_2}
            alt='background image'
            priority
            width={900}
            height={600}
            className='object-cover h-full w-full'
          />
        </div>

        <div className='max-w-lg'>
          <p className="text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold">
            We believe architecture is critically important to addressing the most pressing challenges.
          </p>
        </div>
      </div>

         </div>
<Gap/>
           <ClientTestimonial/>

         </main>
  )
}

export default AboutPage




