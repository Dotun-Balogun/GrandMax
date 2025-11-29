// lib/data/blog-data.ts

import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  { id: '1', name: 'Architecture', slug: 'architecture' },
  { id: '2', name: 'Design', slug: 'design' },
  { id: '3', name: 'Projects', slug: 'projects' },
  { id: '4', name: 'News', slug: 'news' },
  { id: '5', name: 'Sustainability', slug: 'sustainability' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'modern-office-design-trends',
    title: 'Modern Office Design Trends in 2025',
    excerpt: 'Explore the latest office design trends that foster collaboration, productivity, and sustainability in the modern workplace.',
    content: `
      <h2>Modern Office Design Trends in 2025</h2>
      <p>Designing an office today goes beyond aesthetics. Modern workplaces focus on flexibility, employee wellness, and sustainable practices. Companies are increasingly investing in collaborative zones, biophilic design, and smart technology integration.</p>
      
      <h3>Collaborative Spaces</h3>
      <p>Open-plan areas combined with breakout rooms encourage teamwork and creativity while maintaining individual focus zones.</p>
      
      <h3>Sustainability Matters</h3>
      <p>From recycled materials to energy-efficient lighting, sustainable design choices are becoming standard in corporate offices.</p>
    `,
    category: ['ARCHITECTURE', 'DESIGN'],
    author: {
      name: 'Alice Morgan',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    publishedAt: '2025-05-15',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1598300050164-0d2ee0269243?auto=format&fit=crop&w=1170&q=80',
    tags: ['office', 'workspace', 'trends', 'design'],
  },
  {
    id: '2',
    slug: 'sustainable-residential-projects',
    title: 'Sustainable Residential Projects Transforming Cities',
    excerpt: 'Discover how sustainable residential projects are reshaping urban living, combining eco-friendly materials with smart architecture.',
    content: `
      <h2>Sustainable Residential Projects Transforming Cities</h2>
      <p>Urban living is evolving with an emphasis on sustainability and energy efficiency. Residential projects now integrate green rooftops, passive design, and renewable energy sources.</p>
      
      <h3>Green Architecture</h3>
      <p>Buildings designed with eco-friendly materials reduce carbon footprints and improve indoor air quality for residents.</p>
      
      <h3>Smart Technology</h3>
      <p>From automated lighting to energy monitoring systems, smart homes are at the forefront of sustainable living.</p>
    `,
    category: ['ARCHITECTURE', 'SUSTAINABILITY'],
    author: {
      name: 'David Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    publishedAt: '2025-04-20',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1580584120821-0b7c60a57b11?auto=format&fit=crop&w=1170&q=80',
    tags: ['sustainability', 'residential', 'green', 'architecture'],
  },
  {
    id: '3',
    slug: 'award-winning-commercial-buildings',
    title: 'Award-Winning Commercial Buildings of the Year',
    excerpt: 'A showcase of commercial architecture that pushes the boundaries of design, innovation, and functionality in urban landscapes.',
    content: `
      <h2>Award-Winning Commercial Buildings of the Year</h2>
      <p>This year’s top commercial projects highlight innovation, sustainability, and smart design. Architects are redefining city skylines with creative forms and efficient spaces.</p>
      
      <h3>Design Excellence</h3>
      <p>These buildings are celebrated for their balance of aesthetics, function, and environmental responsibility.</p>
      
      <h3>Urban Impact</h3>
      <p>Beyond beauty, they enhance the city environment, providing green spaces, community areas, and advanced energy solutions.</p>
    `,
    category: ['PROJECTS', 'DESIGN'],
    author: {
      name: 'Maria Lopez',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    publishedAt: '2025-03-10',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1170&q=80',
    tags: ['commercial', 'award', 'architecture', 'design'],
  },
  {
    id: '4',
    slug: 'architecture-news-april-2025',
    title: 'Architecture News: April 2025 Highlights',
    excerpt: 'Stay updated with the latest news, upcoming projects, and industry insights from the world of architecture and urban design.',
    content: `
      <h2>Architecture News: April 2025 Highlights</h2>
      <p>This month in architecture, we cover major project launches, innovative design solutions, and sustainable initiatives shaping cities globally.</p>
      
      <h3>Upcoming Projects</h3>
      <p>Several high-profile commercial and residential projects are slated to open in major cities this year, emphasizing sustainability and innovative design.</p>
      
      <h3>Industry Insights</h3>
      <p>Experts share trends in urban planning, eco-friendly construction, and new materials for modern architecture.</p>
    `,
    category: ['NEWS'],
    author: {
      name: 'Liam O’Connor',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
    publishedAt: '2025-04-05',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1170&q=80',
    tags: ['news', 'architecture', 'projects', 'urban'],
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
