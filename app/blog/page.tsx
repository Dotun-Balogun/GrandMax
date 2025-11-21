// app/blog/page.tsx

import BlogGrid from '@/components/blog/BlogGrid';
import BlogCarousel from '@/components/blog/BlogCarousel';
import { blogPosts, getFeaturedPosts } from '@/lib/data/blog-data';

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our collection of articles, tutorials, and insights to help you grow and learn.
          </p>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <BlogCarousel 
        posts={featuredPosts}
        title="Featured Posts"
      />

      {/* All Posts Grid */}
      <BlogGrid 
        posts={blogPosts}
        title="All Posts"
        subtitle="Browse through all our articles"
      />
    </main>
  );
}