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
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {posts.map((post) => (
              <CarouselItem 
                key={post.id} 
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <BlogCard post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default BlogCarousel;