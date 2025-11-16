// import React from 'react'

import BuildingCard from '@/components/ui/Card/BuildingCard'
import { buildingData } from '@/lib/data/buildingdata'

const BuildingGrid = () => {
 const leftColumnBuildings = buildingData.slice(0, 3); 
  const rightColumnBuildings = buildingData.slice(3, 6); 

  return (
    <section className='max-w-7xl mx-auto px-4 mt-20 '>
      {/* desktop grid */}
      <div className="hidden lg:grid grid-cols-2 place-items-center">
        <div className="max-w-[600px]">
          <div className='flex flex-col gap-4'>
            <BuildingCard 
              image={leftColumnBuildings[0]?.image} 
              title={leftColumnBuildings[0]?.title}
              href={leftColumnBuildings[0]?.link}
              isLarge={true}
                
              index={0}
            />
             <div className='flex justify-between gap-5'>
              <BuildingCard 
                image={leftColumnBuildings[1]?.image} 
                title={leftColumnBuildings[1]?.title}
               href={leftColumnBuildings[1]?.link}

                index={1}
              />
              <BuildingCard 
                image={leftColumnBuildings[2]?.image} 
                title={leftColumnBuildings[2]?.title}
                href={leftColumnBuildings[2]?.link}

                index={2}
              />
            </div>
           
          </div>
          <div>

          </div>
        </div>

        <div className="max-w-[600px]">
           <div className="max-w-[600px] w-full">
          <div className='flex flex-col-reverse gap-4'>
            {/* Large card on bottom */}
            <BuildingCard 
              image={rightColumnBuildings[2]?.image} 
              title={rightColumnBuildings[2]?.title}
                            href={leftColumnBuildings[2]?.link}

              isLarge={true}
              index={5}
            />
            {/* Two small cards above */}
            <div className='flex justify-between gap-5'>
              <BuildingCard 
                image={rightColumnBuildings[0]?.image} 
                title={rightColumnBuildings[0]?.title}
                              href={leftColumnBuildings[0]?.link}

                index={3}
              />
              <BuildingCard 
                image={rightColumnBuildings[1]?.image} 
                title={rightColumnBuildings[1]?.title}
                href={leftColumnBuildings[1]?.link}

                index={4}
              />
            </div>
          </div>
        </div>
         
          <div>

          </div>
        </div>
       
      </div>

{/* mobile grid */}
 <div className="lg:hidden grid grid-cols-2 place-items-center gap-4 ">
  
    {buildingData.map((building,index) => (
          <BuildingCard 
            key={building.id}
            image={building.image} 
            title={building.title}
            index={index}
            href={building.link}

          />
        ))}
  
              

        </div>

    </section>
  )
}

export default BuildingGrid



