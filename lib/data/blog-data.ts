// lib/data/blog-data.ts

import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  { id: '1', name: 'Tutorial', slug: 'tutorial' },
  { id: '2', name: 'Updates', slug: 'updates' },
  { id: '3', name: 'Interview', slug: 'interview' },
  { id: '4', name: 'News', slug: 'news' },
  { id: '5', name: 'Uncategorized', slug: 'uncategorized' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'a-place-of-silence',
    title: 'A Place of Silence',
    excerpt: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada ...',
    content: `
      <h2>A Place of Silence</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
      
      <h3>Finding Tranquility</h3>
      <p>Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
    `,
    category: ['TUTORIAL', 'UPDATES'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john-doe.jpg',
    },
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    featuredImage: '/images/blog/silence.jpg',
    tags: ['mindfulness', 'wellness', 'lifestyle'],
  },
  {
    id: '2',
    slug: 'how-to-create-a-logo-like-a-pro',
    title: 'How to create a Logo like a Pro',
    excerpt: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada ...',
    content: `
      <h2>How to create a Logo like a Pro</h2>
      <p>Creating a professional logo requires both creativity and technical skill. In this comprehensive guide, we'll walk through the essential steps and principles of logo design.</p>
      
      <h3>Understanding Brand Identity</h3>
      <p>Before diving into design, it's crucial to understand the brand's values, target audience, and positioning in the market.</p>
      
      <h3>Design Principles</h3>
      <ul>
        <li>Simplicity is key</li>
        <li>Make it memorable</li>
        <li>Ensure versatility</li>
        <li>Consider timelessness</li>
      </ul>
    `,
    category: ['INTERVIEW', 'NEWS'],
    author: {
      name: 'Jane Smith',
      avatar: '/avatars/jane-smith.jpg',
    },
    publishedAt: '2024-02-20',
    readTime: '8 min read',
    featuredImage: '/images/blog/logo-design.jpg',
    tags: ['design', 'branding', 'tutorial'],
  },
  {
    id: '3',
    slug: 'principles-of-coldness',
    title: 'Principles of Coldness',
    excerpt: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada ...',
    content: `
      <h2>Principles of Coldness</h2>
      <p>Understanding the principles of cold exposure and its benefits for health and wellbeing.</p>
      
      <h3>The Science Behind Cold Therapy</h3>
      <p>Cold exposure has been practiced for centuries across various cultures. Modern science is now validating many of these traditional practices.</p>
      
      <h3>Benefits of Cold Exposure</h3>
      <p>Regular cold exposure can improve circulation, boost immune function, and enhance mental resilience.</p>
    `,
    category: ['UNCATEGORIZED'],
    author: {
      name: 'Mike Johnson',
      avatar: '/avatars/mike-johnson.jpg',
    },
    publishedAt: '2024-03-10',
    readTime: '6 min read',
    featuredImage: '/images/blog/coldness.jpg',
    tags: ['health', 'wellness', 'lifestyle'],
  },
];

// Helper functions
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};