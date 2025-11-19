"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import bakcground from '@/app/assets/images/row-bg-1.jpg'

const TestimonialSection = () => {
  return (
    <section className=" relative w-full mt-100  lg:mt-0 ">
        
       <section className="absolute left-1/2  bottom-20 -translate-x-1/2 w-full flex flex-col lg:flex-row lg:px-10 z-10" >
      {/* LEFT RED SECTION */}
      <div className="  bg-[#F44336]   text-white flex flex-col justify-center md:py-6 px-10 py-20 lg:w-1/3 w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug tracking-tight space-y-1 md:space-y-2">
          <span className="block">What</span>
          <span className="block">Our</span>
          <span className="block">Clients</span>
          <span className="block">Say?</span>
        </h2>
      </div>


      {/* RIGHT DARK SECTION */}
      <div className="bg-[#141A22] text-white flex items-center justify-center lg:w-2/3 w-full py-20 md:px-6 lg:px-10">
        <Carousel className=" relative w-full max-w-2xl px-4">
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-300">{item.role}</p>
                    </div>
                  </div>


                  <p className="text-2xl leading-relaxed text-gray-200 max-w-xl">
                    {item.message}
                  </p>


                  <p className="text-sm text-gray-400">{item.id} / {testimonials.length}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-4  bottom-4 flex gap-4 mt-8">
            <CarouselPrevious className="static text-secondary rounded-full border border-gray-500" />
            <CarouselNext className="static text-secondary rounded-full border border-gray-500" />
          </div>
        </Carousel>
      </div>
    </section>
  

      <div className=" relative w-full h-100 z-5">
                <Image
                src={bakcground}
                alt="background image"
                fill
                className="bg-cover"
                />
      </div>
    </section>
  );
};

export default TestimonialSection;
