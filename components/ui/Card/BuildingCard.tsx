'use client'
import Image, { StaticImageData } from 'next/image';
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

type BuildingCardProps ={
   image:StaticImageData;
  isLarge?:boolean;
  href:string;
  title:string;
  index:number;
}

const BuildingCard = ({image, isLarge,title,href}:BuildingCardProps) => {
  return (
    <Link 
     href={href}
    className= {`relative max-h-[600px] max-w-[600px] h-[158px] w-[158px] ${isLarge ?'lg:w-[600px] lg:h-[600px]':'md:w-[288px] md:h-[288px]'}   flex justify-center items-center p-4  `}>
        <Image
        src={image}
        alt="Grid Card Image"
        sizes="100%"
        className='object-cover '
        fill/>
      <motion.div
      initial={{opacity:0 ,y:20}}
      whileHover={{
        opacity:1,
          y:0,
        transition:{
          duration:0.8,
          ease:'easeInOut'
        },
      }}

      whileTap={{
      
        opacity:1,
          y:0,
        transition:{
          duration:0.8,
          ease:'easeInOut'
        },
      }}
    
      className='absolute inset-0  flex flex-col items-center justify-center text-white text-2xl font-bold lg:text-[30px]'>
        <FaArrowRight className='text-3xl mb-2'/> 
        <h1>{title}</h1>
      </motion.div>
    </Link>
  )
}

export default BuildingCard