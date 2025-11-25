// components/faq/FAQSection.tsx (Server Component)
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq";

export default function FAQSection() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border-b border-gray-700"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-800 hover:no-underline [&[data-state=open]]:bg-red-500">
              <span className="text-white text-sm md:text-base font-light">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 text-sm md:text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}