import React from 'react'
import BlogCarousel from '@/components/blog/BlogCarousel';
import { getFeaturedPosts } from '@/lib/data/blog-data';
const LatestPost = () => {
   const featuredPosts = getFeaturedPosts(6);
  return (
        <div className='w-full'>
      <div className="max-w-7xl  px-18 ">
        <div className=' space-y-2'>
          <p className="text-[14px] text-center md:text-left text-gray-500">Latest Posts</p>
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold'>
           Latest Articles 

          </h1>
        </div>


      </div>
      <div className='bg-secondary  lg:ml-10'>
        <div className="px-8">
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose  border-b text-center text-white  md:text-left font-bold'>
            Architecture</h1>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="text-white">
<BlogCarousel 
        posts={featuredPosts}
        title="Featured Posts"
        subtitle="Check out our latest and most popular articles"
      />
            
          </div>
         
        </div>
<section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to get the latest posts delivered to your inbox.
          </p>
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Subscribe Now
          </button>
        </div>
      </section>
      </div>
    </div>

  )
}

export default LatestPost