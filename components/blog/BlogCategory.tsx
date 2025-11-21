// components/blog/BlogCategory.tsx

import React from 'react';

interface BlogCategoryProps {
  categories: string[];
}

const BlogCategory: React.FC<BlogCategoryProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category, index) => (
        <span
          key={index}
          className="text-xs font-medium tracking-wider text-gray-500 uppercase"
        >
          {category}
          {index < categories.length - 1 && ','}
        </span>
      ))}
    </div>
  );
};

export default BlogCategory;