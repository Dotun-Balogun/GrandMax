// lib/types/blog.ts

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string[];
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  featuredImage: string;
  tags?: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}