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
    <div className='max-w-7xl px-4 mx-auto py-16'>
        <BuildingGrid/>

    </div>
  )
}

export default page