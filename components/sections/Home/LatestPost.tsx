import React from 'react'

const LatestPost = () => {
  return (
        <div className='w-full'>
      <div className="max-w-7xl mx-auto px-4">
        <div className=' space-y-2'>
          <p className="text-[14px] text-center md:text-left text-gray-500">WHAT DO WE DO HERE</p>
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold'>
            what  make us

          </h1>
        </div>


      </div>
      <div className='bg-secondary px-4 lg:ml-10'>
        <div className="max-w-7xl mx-auto px-">
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose  border-b text-center text-white  md:text-left font-bold'>
            Different</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="max-w-[674px] flex flex-col  items-center md:items-start md:justify-start text-center md:text-left space-y-8 mx-auto px-4 text-[18px] py-10 text-[#ffffff] md:py-20 md:mx-0 md:px-10 lg:max-w-3xl">
            <p>
              Known for creating current, iconic, must–experience spaces,
               Pinnacle Architect has been innovating hospitality design
                for luxury and boutique brands for nearly 50 years. 
            </p>
            <p>
              Today, 
                Pinnacle Architect offers an even broader range of design 
                services and specialty studios to meet clients’ needs in 
                the ever-evolving hospitality industry.
            </p>

            <button className='w-[204px] h-[55px] text-base'>
              Learn More 
            </button>

            
          </div>
          <div className='text-white text-3xl font-bold py-20'>
           
          </div>
        </div>

      </div>
    </div>

  )
}

export default LatestPost