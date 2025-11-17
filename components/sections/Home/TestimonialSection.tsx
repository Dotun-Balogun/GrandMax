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
    <section className=" relative w-full ">
        
       <section className="absolute left-1/2 -translate-x-1/2 w-full flex flex-col lg:flex-row lg:px-10" >
      {/* LEFT RED SECTION */}
      <div className=" bg-[#F44336] text-white flex flex-col justify-center px-10 py-20 lg:w-1/3 w-full">
        <h2 className="text-5xl font-bold leading-tight space-y-4">
          <div>What</div>
          <div>Our</div>
          <div>Clients</div>
          <div>Say?</div>
        </h2>
      </div>


      {/* RIGHT DARK SECTION */}
      <div className="bg-[#141A22] text-white flex items-center justify-center lg:w-2/3 w-full py-20 px-10">
        <Carousel className="w-full max-w-2xl">
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
          <div className="flex gap-4 mt-8">
            <CarouselPrevious className="text-white rounded-full border border-gray-500" />
            <CarouselNext className="text-white rounded-full border border-gray-500" />
          </div>
        </Carousel>
      </div>
    </section>
  

      <div className="w-full h-50">
                <Image
                src={bakcground}
                alt="background image"
                />
      </div>
    </section>
  );
};

export default TestimonialSection;
