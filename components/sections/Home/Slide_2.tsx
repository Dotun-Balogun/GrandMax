
'use client'
import Image from 'next/image'
import slide_2 from '@/app/assets/images/slide-1.jpg'
import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'
import { ContainerVariant, FadeUpVariant } from '@/app/styles/animation/animation'

const Slide_2 = () => {
  return (
    <section className='relative h-[50vh]  lg:min-h-screen'>
      <Image
        src={slide_2}
        alt='background image'
        fill
        priority
      />

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
          className='flex flex-col mt-10 md:mt-20 lg:mt-20'
        >
          <motion.div variants={FadeUpVariant} className='border-b border-secondary'>
            <h1 className='text-[25px] md:text-[100px] font-bold container px-4 mx-auto'>
              Fola
            </h1>
          </motion.div>

          <motion.div variants={FadeUpVariant} className='container mx-auto'>
            <p className='text-[20px] container px-4 lg:max-w-2xl md:leading-10'>
              Fola delivers innovative designs and exceptional craftsmanship,
              creating timeless spaces that blend beauty, functionality, and lasting value.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Slide_2
