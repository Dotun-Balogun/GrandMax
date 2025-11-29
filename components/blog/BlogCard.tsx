// components/blog/BlogCard.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types/blog';
import BlogCategory from './BlogCategory';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
}

const BlogCard: React.FC<BlogCardProps> = ({ post, variant = 'default' }) => {
  return (
    <article className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Featured Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 group-hover:to-black/20 transition-all duration-300" />
        {post.featuredImage ? (
          <Image
        src={post.featuredImage}
        alt={post.title ?? 'Featured image'}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
        <span className="text-sm">Featured Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        <BlogCategory categories={post.category} />

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-red-500 font-medium hover:gap-3 transition-all duration-200"
        >
          READ MORE
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;