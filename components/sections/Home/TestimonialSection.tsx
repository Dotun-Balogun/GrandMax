"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials";
import bakcground from '@/app/assets/images/row-bg-1.jpg'

const TestimonialSection = () => {
  return (
    <section className="w-full">
        <div className="flex flex-col  max-w-7xl px-4 mx-auto items-center justify-center lg:flex-row w-full ">
<div className="h-full bg-[#fc4142] flex items-center justify-center p-12">
        <h2 className="text-white text-4xl font-bold leading-tight">
          What <br /> Our Clients <br /> Say?
        </h2>
      </div>
      <div className="w- bg-[#10151b] text-white p-10 flex items-center justify-">
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={item.id}>
                <div className="flex flex-col gap-4">
                  {/* Profile row */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.role}</p>
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-gray-300 leading-relaxed">
                    {item.message}
                  </p>

                  {/* Index */}
                  <p className="text-sm text-gray-500">
                    {index + 1} / {testimonials.length}
                  </p>

                  {/* Arrows */}
                  <div className="flex gap-4 mt-2">
                    <CarouselPrevious className="border border-gray-600 text-white" />
                    <CarouselNext className="border border-gray-600 text-white" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
        </div>
      {/* LEFT RED PANEL */}
      

      {/* RIGHT CAROUSEL PANEL */}
      

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
