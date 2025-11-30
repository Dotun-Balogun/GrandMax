// components/blog/BlogCarousel.tsx

'use client';

import React from 'react';
import { BlogPost } from '@/lib/types/blog';
import BlogCard from './BlogCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface BlogCarouselProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ 
  posts, 
  title = 'Latest Posts',
  subtitle 
}) => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 text-base sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {posts.map((post) => (
                <CarouselItem 
                  key={post.id} 
                  className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons - Positioned Outside on Desktop, Overlay on Mobile */}
            <CarouselPrevious 
              className="absolute left-0 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white hover:bg-gray-100 shadow-xl border border-gray-200 disabled:opacity-30 z-10"
              aria-label="Previous slide"
            />
            <CarouselNext 
              className="absolute right-0 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-0 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white hover:bg-gray-100 shadow-xl border border-gray-200 disabled:opacity-30 z-10"
              aria-label="Next slide"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;