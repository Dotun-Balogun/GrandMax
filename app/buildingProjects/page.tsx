import BreadCrumb from '@/components/layout/BreadCrumb'
import BuildingGrid from '@/components/sections/Home/BuildingGrid'
import { generatePageMetadata } from '@/lib/data/metadata'
import { title } from 'process'
import React from 'react'


const metadata = generatePageMetadata(
     'Building Projects',
     'Explore our diverse range of building projects showcasing our expertise in architecture and construction.',
    '/buildingProjects'
)

const page = () => {
  return (
    <div className='max-w-7xl px-4 mx-auto py-10 '>
        <div className='px-4 space-y-4'>
          <BreadCrumb/>
<h1 className='text-[32px] whitespace-normal lg:text-[42px] tracking-loose text-center md:text-left font-bold'>
  Showcasing Our{" "}
  <span className='border-b'>
    Signature Architectural Projects
  </span>{" "}
  and Completed Works
</h1>


        </div>
        <div className='gap-10'>
        <BuildingGrid/>

        </div>

    </div>
  )
}

export default page