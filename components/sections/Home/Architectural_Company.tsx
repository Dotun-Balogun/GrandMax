import Image from "next/image"
import architectural_company_image from '@/app/assets/images/sec-1.jpg'
const Architectural_Company = () => {
  const qualities = [
    { id: 1, name: 'Interior Architectural design' },
    { id: 2, name: 'Interior Design' },
    { id: 3, name: 'Concept design' },
    { id: 4, name: 'lightening design' }
  ]
  return (
    <div className='relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 '>
      <div className="relative w-[297.5px] h-[252.9px] lg:w-[649px] lg:h-[551px]">
        <Image
          src={architectural_company_image}
          alt="architectural company image"
          sizes="h-full w-full"
          fill

        />
        <div className='hidden lg:block relatvie lg:absolute left-125 top-40  lg:w-[748px] px- py-4 bg-white'>
        <div className='px-4 space-y-4'>
          <p className="text-[14px] text-center md:text-left text-gray-500">SINCE 1992</p>
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold'>
            A Creative
            <span className='border-b'>
              Architectural Company</span> Based in New York
          </h1>
        </div>
        <div className='px-4'>
          {
            qualities.map((quality, index) => (
              <div key={index} className=' text-[22px] group flex items-center items-center  md:justify-start gap-1 leading-15'>
                <h2 className='text-[#dddddd]'>{quality.id}/</h2> <h2 className="text-[#767676] group-hover:text-primary">{quality.name}</h2>
              </div>
            ))
          }

        </div>
      </div>
      </div>
    <div className='lg:hidden relatvie   lg:w-[748px] px- py-4 bg-white'>
        <div className='px-4 space-y-4'>
          <p className="text-[14px] text-center md:text-left text-gray-500">since 1992</p>
          <h1 className='text-[32px] whitespace-normal lg:text-[42px] tracking-loose text-center md:text-left font-bold'>
  A Creative{" "}
  <span className='border-b'>
    Architectural Company
  </span>{" "}
  Based in New York 
</h1>

        </div>
        <div className='px-4'>
          {
            qualities.map((quality, index) => (
              <div key={index} className=' text-[22px] group flex items-center items-center  md:justify-start gap-1 leading-15'>
                <h2 className='text-[#dddddd]'>{quality.id}/</h2> <h2 className="text-[#767676] group-hover:text-primary">{quality.name}</h2>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Architectural_Company