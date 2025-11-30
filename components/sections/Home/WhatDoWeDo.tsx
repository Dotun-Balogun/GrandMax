import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import whatwedo  from '@/app/assets/images/what-we-do.jpg'
import { services } from '@/lib/data/services'
import ServiceCard from '@/components/ui/Card/ServiceCard'

const WhatDoWeDo = () => {
  return (
    <div className='w-full'>
      <div className="max-w-7xl mx-auto px-4">
        <div className=' space-y-2'>
          <p className="text-[14px] text-center md:text-left text-gray-500">WHAT DO WE DO HERE</p>
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold'>
            what  make us

          </h1>
        </div>


      </div>
      <div className='bg-secondary px-4 lg:mr-10'>
        <div className="max-w-7xl mx-auto px-10">
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose  border-b text-center text-white  md:text-left font-bold'>
            Different</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="lg:max-w-[674px] flex flex-col  items-center md:items-start md:justify-start text-center md:text-left space-y-8 mx-auto px-4 text-[18px] py-10 text-[#ffffff] md:py-20 md:mx-0 md:px-10 lg:max-w-3xl">
            <p>
              Known for creating current, iconic, must–experience spaces,
               Pinnacle Architect has been innovating hospitality design
                for luxury and boutique brands for nearly 50 years. 
            </p>
            <p>
              Today, 
                Pinnacle Architect offers an even broader range of design 
                services and specialty studios to meet clients’ needs in 
                the ever-evolving hospitality industry.
            </p>

            <Button className='w-[204px] h-[55px] text-base'>
              Learn More 
            </Button>

            <div className=' relative lg:w-[540px] lg:h-[640px] w-[317px] h-[370px]'>
            <Image
            src={whatwedo}
            alt='what we do '
            fill
            />
            </div>
          </div>
          <div className='text-white text-3xl font-bold py-20'>
            <div className="max-w-6xl mx-auto grid  gap-14 ">
        {services.map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhatDoWeDo