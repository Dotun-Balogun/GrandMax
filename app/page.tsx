import Architectural_Company from '@/components/sections/Home/Architectural_Company'
import BuildingGrid from '@/components/sections/Home/BuildingGrid'
import Hero from '@/components/sections/Home/Hero'
import RecentProjectShowcase from '@/components/sections/Home/RecentProjectShowcase'
import TestimonialSection from '@/components/sections/Home/TestimonialSection'
import WhatDoWeDo from '@/components/sections/Home/WhatDoWeDo'
import Gap from '@/components/shared/Gap'

const page = () => {
  return (
    <div className=' '>
      <Hero/>
      <Gap/>
      <Architectural_Company/>
      <Gap/>
      <RecentProjectShowcase/>
      <Gap/>
      <BuildingGrid/>
      <Gap/>
      <WhatDoWeDo/>
      <Gap/>
      <Gap/>
      <TestimonialSection/>
      </div>
  )
}

export default page