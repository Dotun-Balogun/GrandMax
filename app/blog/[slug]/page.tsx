// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import BlogDetail from '@/components/blog/BlogDetail';
import BlogCarousel from '@/components/blog/BlogCarousel';
import { getBlogPostBySlug, blogPosts } from '@/lib/data/blog-data';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Blog Detail */}
      <BlogDetail post={post} />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white border-t border-gray-200">
          <BlogCarousel 
            posts={relatedPosts}
            title="Related Posts"
            subtitle="Continue reading"
          />
        </div>
      )}
    </main>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}