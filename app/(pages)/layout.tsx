import BreadCrumb from '@/components/layout/BreadCrumb'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="min-h-screen flex flex-col">
  <main className='flex-grow'>  
    <BreadCrumb/>
    {children}
  </main>
    </div>
  )
}

export default layout