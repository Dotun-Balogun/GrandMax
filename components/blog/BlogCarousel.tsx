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
      <div className="container mx-auto  lg:px-8">
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
        <div className="relative px-8 sm:px-10 md:px-12 lg:px-4">
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
            
            {/* Mobile & Desktop Navigation Buttons */}
            <CarouselPrevious 
              className="absolute -left-2 sm:-left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 bg-white hover:bg-gray-100 shadow-lg border-2 border-gray-200 disabled:opacity-50"
              aria-label="Previous slide"
            />
            <CarouselNext 
              className="absolute -right-2 sm:-right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 bg-white hover:bg-gray-100 shadow-lg border-2 border-gray-200 disabled:opacity-50"
              aria-label="Next slide"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;