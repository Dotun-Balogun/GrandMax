import Architectural_Company from '@/components/sections/Home/Architectural_Company'
import BuildingGrid from '@/components/sections/Home/BuildingGrid'
import Hero from '@/components/sections/Home/Hero'
import RecentProjectShowcase from '@/components/sections/Home/RecentProjectShowcase'
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
      </div>
  )
}

export default page