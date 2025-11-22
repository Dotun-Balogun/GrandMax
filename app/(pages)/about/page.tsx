// app/about/page.tsx
import { generatePageMetadata } from '@/lib/data/metadata';

export const metadata = generatePageMetadata(
  'About Us - GrandMax Architecture',
  'Learn about our award-winning team of architects and designers',
  '/about'
);

export default function AboutPage() {
  return
   <div className='w-full max-w-7xl mx-auto px-4 py-20 lg:py-40'>
     <div className="flex flex-col md:flex-row gap-10 lg:gap-20 mt-10 lg:mt-20">
          <div>
<div className='px-4 space-y-4'>
          <p className="text-[14px] text-center md:text-left text-gray-500">since 1992</p>
          <h1 className='text-[32px] white-space-break lg:text-[42px] tracking-loose text-center  md:text-left font-bold'>
            A Creative
            <span className='border-b'>
              Architectural Company</span> Based in New York
          </h1>
        </div>
          </div>
          <div>

          </div>
        </div>
  </div>;
}