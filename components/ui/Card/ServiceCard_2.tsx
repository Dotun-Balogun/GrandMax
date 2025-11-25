// app/services/components/ServiceCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    image: string|StaticImageData
    features: string[];
  };
  index: number;
}

export default function ServiceCard_2({ service, index }: ServiceCardProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
    >
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src={service.image} 
            alt={service.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
        </motion.div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
          Service {service.id}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-primary">{service.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          {service.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}