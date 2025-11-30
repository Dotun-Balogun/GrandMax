import BreadCrumb from '@/components/layout/BreadCrumb'
import BuildingGrid from '@/components/sections/Home/BuildingGrid'
import { generatePageMetadata } from '@/lib/data/metadata'
import React from 'react'

export const metadata = generatePageMetadata(
  'Building Projects',
  'Explore our diverse range of building projects showcasing our expertise in architecture and construction.',
  '/buildingProjects'
)

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-10">

      <div className="px-4 space-y-6">

        <div className="flex justify-between items-center">
        </div>

        <h1 className="text-[32px] lg:text-[42px] font-bold tracking-tight text-center md:text-left leading-tight">
          Showcasing Our{" "}
          <span className="border-b border-gray-800">
            Signature Architectural Projects
          </span>{" "}
          and Completed Works
        </h1>

        <p className="text-gray-600 text-center md:text-left max-w-3xl text-[15px] leading-relaxed">
          Discover a curated selection of our most successful building projects — 
          from modern commercial complexes to elegant residential structures.  
          Each project reflects our dedication to innovation, craftsmanship, and 
          architectural excellence.
        </p>

      </div>


      <div className="">
        <BuildingGrid />
      </div>

    </div>
  )
}

export default Page
