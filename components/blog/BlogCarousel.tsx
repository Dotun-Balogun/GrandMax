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
  type CarouselApi,
} from '@/components/ui/carousel';

interface BlogCarouselProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({
  posts,
  title = 'Latest Posts',
  subtitle,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
            setApi={setApi}
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

            {/* Desktop only arrows */}
            <CarouselPrevious className="hidden sm:flex absolute left-0 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 bg-white shadow-xl border h-10 w-10 rounded-full z-10" />
            <CarouselNext className="hidden sm:flex absolute right-0 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-xl border h-10 w-10 rounded-full z-10" />
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === current ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
