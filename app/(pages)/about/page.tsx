// app/about/page.tsx
import { generatePageMetadata } from '@/lib/data/metadata';

export const metadata = generatePageMetadata(
  'About Us - GrandMax Architecture',
  'Learn about our award-winning team of architects and designers',
  '/about'
);

export default function AboutPage() {
  return <div>About content</div>;
}