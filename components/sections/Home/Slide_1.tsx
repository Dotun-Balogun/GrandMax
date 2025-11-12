'use client'

import Image from 'next/image'
import slide_1 from '@/app/assets/images/slide-3.jpg'
import Header from '@/components/layout/Header'
import { motion} from 'framer-motion'
import { ContainerVariant, FadeUpVariant } from '@/app/styles/animation/animation'



const Slide_1 = () => {
  return (
    <section className='relative h-[50vh]  lg:min-h-screen'>
      <motion.div
        
        className="absolute inset-0"
      >
        <Image
          src={slide_1}
          alt='background image'
          fill
          priority
          className='object-cover'
        />
      </motion.div>

      <motion.div
        variants={ContainerVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='relative z-10 flex flex-col h-full lg:py-10'
      >
        <div className='container px-4 mx-auto'>
          <Header />
        </div>

        <motion.div
          variants={ContainerVariant}
          className='flex flex-col mt-10 md:mt-40 lg:mt-20'
        >
          <motion.div variants={FadeUpVariant} className='border-b border-secondary'>
            <h1 className='text-[25px]  md:text-[100px] font-bold container px-4 mx-auto'>
              Grand Max
            </h1>
          </motion.div>

          <motion.div variants={FadeUpVariant} className='container mx-auto'>
            <p className=' text-[12px] md:text-[20px] container px-4 lg:max-w-2xl md:leading-10'>
              Grand Max delivers innovative designs and exceptional craftsmanship,
              creating timeless spaces that blend beauty, functionality, and lasting value.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Slide_1
