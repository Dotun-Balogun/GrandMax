// components/blog/BlogGrid.tsx

import React from 'react';
import { BlogPost } from '@/lib/types/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
}

const BlogGrid: React.FC<BlogGridProps> = ({ 
  posts, 
  title = 'All Posts',
  subtitle 
}) => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
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
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;