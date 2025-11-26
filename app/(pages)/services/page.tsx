// app/services/page.tsx (Server Component)
import type { Metadata } from 'next';
import { Building2, Ruler, Home, Lightbulb, Users, Award } from 'lucide-react';
import ServiceCard_2 from '@/components/ui/Card/ServiceCard_2';
import ProcessStep from './ProcessStep';
import WhyChooseCard from './WhyChooseCard';
import CTASection from './CTASection';
import service1 from "@/app/assets/images/building-1.png"
import service2 from "@/app/assets/images/building-2.png";
import service3 from "@/app/assets/images/building-3.png";
import { generatePageMetadata } from '@/lib/data/metadata';



export const metadata =  generatePageMetadata(
   'Our Services | Architectural Design & Construction',
  'Explore our comprehensive architectural services including residential design, commercial architecture, and urban planning. Award-winning designs with sustainable solutions.',
 '/service'
);


// Static data
const services = [
  {
    id: 1,
    title: "Residential Design",
    description: "Transform your living space into a personalized sanctuary. Our residential designs blend functionality with aesthetic appeal, creating homes that reflect your lifestyle and aspirations.",
    image: service1,
    features: ["Custom Home Design", "Interior Planning", "Landscape Integration", "Sustainable Solutions"]
  },
  {
    id: 2,
    title: "Commercial Architecture",
    description: "Elevate your business presence with innovative commercial spaces. We design functional, efficient, and striking structures that enhance productivity and leave lasting impressions.",
    image: service2,
    features: ["Office Buildings", "Retail Spaces", "Mixed-Use Developments", "Brand Integration"]
  },
  {
    id: 3,
    title: "Urban Planning",
    description: "Shape the future of communities with thoughtful urban design. We create sustainable, livable environments that balance growth with environmental responsibility.",
    image: service3,
    features: ["Master Planning", "Public Spaces", "Infrastructure Design", "Community Development"]
  }
];

const process = [
  { 
    iconName: 'Users', 
    title: "Consultation", 
    description: "Understanding your vision and requirements" 
  },
  { 
    iconName: "Lightbulb" ,
    title: "Concept Design", 
    description: "Creating initial design concepts and visualizations" 
  },
  { 
    iconName: "Ruler", 
    title: "Development", 
    description: "Detailed planning and technical documentation" 
  },
  { 
    iconName: "Building2", 
    title: "Execution", 
    description: "Construction oversight and quality assurance" 
  }
] as const;

const whyChooseUs = [
  { 
    title: "20+ Years Experience", 
    description: "Decades of excellence in architectural design and innovation" 
  },
  { 
    title: "Award-Winning Designs", 
    description: "Recognized internationally for outstanding architectural achievements" 
  },
  { 
    title: "Sustainable Approach", 
    description: "Committed to environmentally responsible and energy-efficient solutions" 
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceCard_2
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to bringing your architectural vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isLast={index === process.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Excellence in architecture through innovation, sustainability, and client collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <WhyChooseCard
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}