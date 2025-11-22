import Image from 'next/image'
import React from 'react'
import background from '@/app/assets/images/building-3.png'
import { testimonials } from '@/lib/data/testimonials'
import TestimonialCard from '@/components/ui/Card/TestimonialCard'

const ClientTestimonial = () => {
  const testimonialsSliceData = (testimonials ?? []).slice(0,2)
  return (
    <div className='relative lg:min-h-screen  py-20 space-y-10'>
      {/* background image */}
      <Image
        src={background}
        alt='background image'
        fill
        className='bg-contained w-full h-full'

      />
      <div className=' max-w-7xl px-4 '>
        <div className='absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-0 px-4 bg-white'>
          <div className='max-w-2xl'>
            <div className='px-8 space-y-4 py-10 '>
              <p className="text-[14px] text-center text-gray-500">USER EXPERIENCES</p>
              <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  font-bold'>

                <span className='border-b'>
                  Client
                </span>
                Testimonies
              </h1>
              <div >
                <p className='text-[#757575] text-[18px] leading-6 text-center '>
                  We’ve spent decades building an enviable reputation as one of the nation’s leading general architect. National retail and commercial clients continually rely on us
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className='relative mt-20 flex flex-col md:flex-row items-center justify-center gap-4  '>
          {
            testimonialsSliceData.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id ?? index} {...testimonial} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default ClientTestimonial