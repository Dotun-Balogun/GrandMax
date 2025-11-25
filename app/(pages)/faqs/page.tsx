// app/faq/page.tsx (Server Component)

import ContactFormWrapper from "@/components/faq/ContactWapper";
import FAQSection from "@/components/faq/FAQSection";
import { generatePageMetadata } from "@/lib/data/metadata";

export const metadata = generatePageMetadata(
  'Frequently Asked Questions',
  'Find answers to common questions about our architectural services, design process, costs, and more.',
  '/faq'
);

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-red-500 text-sm font-medium mb-2 uppercase tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Common Questions
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FAQSection/>
          <ContactFormWrapper />
        </div>
      </div>
    </div>
  );
}








