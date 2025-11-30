import projectImage from '@/app/assets/images/project-1.jpg'
import { Farro } from 'next/font/google'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const RecentProjectShowcase = () => {
    return (
        <section className='container px-4 mx-auto'>
            <div className='px-4 space-y-2 max-w-2xl'>
                <p className="text-[14px] text-center md:text-left text-gray-500">Our Project</p>
                <h1 className='text-[32px] lg:text-[42px] tracking-loose text-center md:text-left font-bold'>
  A{" "}
  <span className='border-b border-secondary'>
    Show case
  </span>{" "}
  of Our{" "}
  <span className='border-b border-secondary'>
    Recent Project
  </span>
</h1>

                <p className="text-[#666666] text-[18px] leading-8 text-center md:text-left">
                    We look with care and attention at all elements,
                    your specific situation and your wishes.
                    From glass walls, floors, finishes, ceilings or even the design of a room.
                    We turn every assignment into a unique project by
                    working with stylish, high-quality materials.
                </p>
            </div>
            <div className='relative flex flex-col items-center mt-10'>
                <div className="relative w-[297.5px] h-[700px] lg:w-[546px] lg:h-[756px]">
                    <Image
                        src={projectImage}
                        alt="Recent Project image"
                        sizes="h-full w-full"
                        fill

                    />
                    <h1 className=' w-full absolute -top-6  p-4 left-1/2 -translate-x-1/2 border-b hover:text-primary border-b-secondary  text-center font-bold text-[20px] md:text-[38px]'>Dejavu Building</h1>
                    <div className='absolute w-full bottom-0 md:left-50 py-2  md:right-0 hidden md:flex flex-col md:flex-row justify-evenly items-center bg-white max-h-[110px] z-10 '>
                        <div className='flex flex-col items-center  gap-1 h-full'>
                            <h2 className='text-[#767676] text-[12px]'>Category</h2>
                            <h2 className="text-black font-bold text-2xl group-hover:text-primary">Resident</h2>

                        </div>
                        <div className='flex flex-col gap-1 items-center h-full'>
                            <h2 className='text-[#767676] text-[12px]'>Type</h2>
                            <h2 className="text-black text-2xl font-bold group-hover:text-primary">Building</h2>
                        </div>
                        <div className='flex flex-col gap-1 items-center h-full'>
                            <h2 className='text-[#767676] text-[12px]'>year</h2>
                            <h2 className="text-black font-bold text-2xl group-hover:text-primary">{new Date().getFullYear()}</h2>

                        </div>
                        <div className='flex flex-col gap-1 items-center w-full lg:w-19 h-full bg-primary hover:bg-secondary justify-center px-4 py-2 '>
                            <FaArrowRight className='text-3xl mt-2 text-white hover:text-white cursor-pointer' />
                        </div>
                    </div>
                </div>
                {/* mobile view */}
                <div className='md:hidden w-full h-[200px]  py-2  md:right-0 flex flex-col  justify-evenly items-center bg-white max-h-[110px] z-10 '>
                        <div className='flex flex-col items-center  gap-1 h-full'>
                            <h2 className='text-[#767676] text-[12px]'>Category</h2>
                            <h2 className="text-black font-bold text-2xl group-hover:text-primary">Resident</h2>

                        </div>
                        <div className='flex flex-col gap-1 items-center h-full'>
                            <h2 className='text-[#767676] text-[12px]'>Type</h2>
                            <h2 className="text-black text-2xl font-bold group-hover:text-primary">Building</h2>
                        </div>
                        <div className='flex flex-col gap-1 items-center h-full'>
                            <h2 className='text-[#767676] text-[12px]'>year</h2>
                            <h2 className="text-black font-bold text-2xl group-hover:text-primary">{new Date().getFullYear()}</h2>

                        </div>
                        <div className='flex flex-col gap-1 items-center w-full lg:w-19 h-full bg-primary hover:bg-secondary justify-center px-4 py-2 '>
                            <FaArrowRight className='text-3xl mt-2 text-white hover:text-white cursor-pointer' />
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default RecentProjectShowcase