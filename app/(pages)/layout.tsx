import DynamicHero from '@/components/shared/DynamicHero'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="min-h-screen flex flex-col">
  <main className='flex-grow'>  
    <DynamicHero/>
    {children}
  </main>
    </div>
  )
}

export default layout