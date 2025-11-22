'use client'
import { getPageName } from "@/lib/getPageName";
import { usePathname } from "next/navigation";
import BreadCrumb from '../layout/BreadCrumb'
import Image from 'next/image';
import background from '@/app/assets/images/otherHero.png'
import Header from "../layout/Header";

const DynamicHero = () => {
  const pathname = usePathname();
  const pageName = getPageName(pathname);

  return (
    <div className='w-full h-[50vh] lg:min-h-screen relative overflow-hidden'>
      <Image
        src={background}
        alt='background image'
        fill
        priority
        className='object-cover'
      />
      <div className='container px-4 mx-auto space-y-10 relative z-10 flex flex-col items-cente justify-cente h-full text-secondary'>
        <Header />
        <div className="mt-20 space-y-10">
          <BreadCrumb />

          <h1 className='text-4xl lg:text-[70px] font-bold'> {pageName} </h1>
        </div>


        
      </div>
    </div>
  )
}

export default DynamicHero