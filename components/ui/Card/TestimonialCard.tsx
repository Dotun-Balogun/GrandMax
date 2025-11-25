'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import bottomImage from '@/app/assets/images/l2.jpg'

 type TestimonialCardProps ={
    image:string|StaticImageData,
    name:string,
    role:string,
    message:string
 }
const TestimonialCard = ({image,name,role,message}:TestimonialCardProps) => {
  return (
         <motion.div
                    initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="relative space-y-6 bg-secondary w-[265px] h-[400px] md:w-[590px] md:h-[341px] p-[25px] md:p-[60px] "
                        >
                          <div className="flex flex-col  md:flex-row items-center justify-center md:justify-start gap-4">
                            <Image
                              src={image}
                              alt={name}
                              width={60}
                              height={60}
                              className="rounded-full object-cover"
                            />
                            <div className='text-center md:text-left'>
                              <h3 className="text-lg font-semibold text-white">{name}</h3>
                              <p className="text-sm text-gray-300">{role}</p>
                            </div>
                          </div>
    
        
                          <p className="text-[18px] md:text-2xl text-center md:text-left leading-relaxed text-gray-200 max-w-xl">
                            {message}
                          </p>
                       <Image
                              src={bottomImage}
                              alt={name}
                              width={60}
                              height={60}
                              className=" object-cover rotate-90 absolute right-0"
                            />
        b
                        </motion.div>
  )
}

export default TestimonialCard