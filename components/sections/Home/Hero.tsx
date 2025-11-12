'use client'
import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Slide_1 from './Slide_1'
import Slide_2 from './Slide_2'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const slides = [
    { id: 1, title: 'Fola', component: <Slide_1 /> },
    { id: 2, title: 'Grand Max', component: <Slide_2 /> },
  ]
  
  // autoplay plugin
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: false })
  
  // Watch for slide changes
  useEffect(() => {
    if (!api) return
    
    // Set initial index
    setSelectedIndex(api.selectedScrollSnap())
    
    // Listen for slide changes
    api.on('select', () => {
      setSelectedIndex(api.selectedScrollSnap())
    })
  }, [api])
  
  return (
    <section className='relative w-full'>
      <Carousel
        setApi={setApi}
        plugins={[plugin]}
        opts={{ loop: true }}
        className="w-full h-[50vh] md:h-[70vh] lg:min-h-screen relative overflow-hidden"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              {slide.component}
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* White control box positioned bottom-left */}
        <div className='absolute bottom-0 left-0 bg-white shadow-lg  flex items-center justify-between gap-4 px-5 py-3 z-50'>
          <div className='text-secondary font-semibold text-sm md:text-base'>
            {slides[selectedIndex]?.title}
          </div>
          <div className='flex items-center gap-2'>
            <CarouselPrevious className="static bg-black/10 hover:bg-black/30 text-black rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold translate-x-0 translate-y-0">
              ‹
            </CarouselPrevious>
            <CarouselNext className="static bg-black/10 hover:bg-black/30 text-black rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold translate-x-0 translate-y-0">
              ›
            </CarouselNext>
          </div>
        </div>
      </Carousel>
    </section>
  )
}

export default Hero