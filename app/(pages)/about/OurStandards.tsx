import Image from 'next/image'
import React from 'react'
import building_3 from '@/app/assets/images/building-2.png'
import { Progress } from '@/components/ui/progress'

const OurStandards = () => {
  return (
    <section className='w-full relative'>
  <div className='max-w-7xl mx-auto px-4  space-y-10'>
  <div className='flex flex-col md:flex-row  justify-center gap-10'>
     <div className='max-w-2xl'>
          <div className='px-4 space-y-4'>
            <p className="text-[14px] text-center md:text-left text-gray-500">OUR STANDARDS</p>
            <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold'>

              <span className='border-b'>
                Early
              </span>
              Digital Explorations
            </h1>
            <div >
              <p className='text-[#757575] text-[18px] leading-6 text-center md:text-left'>
             digital exploration of architectural concepts in the early stages of design. By leveraging advanced software and technologies, we create detailed 3D models, virtual reality experiences, and interactive simulations that allow clients to visualize and engage with their projects before construction begins. This approach enhances collaboration, improves design accuracy, and ultimately leads to more successful project outcomes.
              </p>
            </div>
          </div>
          <div className='space-y-6 mt-6'>
  <div>
    <div className='flex justify-between mb-2'>
      <span className='text-gray-600 text-sm'>Innovation</span>
      <span className='text-gray-600 text-sm'>80%</span>
    </div>
    <Progress value={80} />
  </div>
  <div>
    <div className='flex justify-between mb-2'>
      <span className='text-gray-600 text-sm'>Quality</span>
      <span className='text-gray-600 text-sm'>90%</span>
    </div>
    <Progress value={90} />
  </div>
  <div>
    <div className='flex justify-between mb-2'>
      <span className='text-gray-600 text-sm'>Sustainability</span>
      <span className='text-gray-600 text-sm'>85%</span>
    </div>
    <Progress value={85} />
  </div>
  <div>
    <div className='flex justify-between mb-2'>
      <span className='text-gray-600 text-sm'>Collaboration</span>
      <span className='text-gray-600 text-sm'>95%</span>
    </div>
    <Progress value={95} />
  </div>
 </div>
</div>
<div>
    <Image
            src={building_3}
            alt='background image'  
            priority
            width={900}
            height={600}
            className='object-cover h-full w-full'
          />
</div>
  </div>
  </div>
    </section>
  )
}

export default OurStandards