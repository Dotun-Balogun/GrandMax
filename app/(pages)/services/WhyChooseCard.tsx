// app/services/components/WhyChooseCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface WhyChooseCardProps {
  item: {
    title: string;
    description: string;
  };
  index: number;
}

export default function WhyChooseCard({ item, index }: WhyChooseCardProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: index * 0.1 }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
        <Award className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
      <p className="opacity-90">{item.description}</p>
    </motion.div>
  );
}