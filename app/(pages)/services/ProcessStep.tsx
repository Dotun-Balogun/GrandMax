// app/services/components/ProcessStep.tsx
'use client';

import { motion } from 'framer-motion';
import { Building2, Ruler, Lightbulb, Users } from 'lucide-react';

interface ProcessStepProps {
  step: {
    iconName: 'Users' | 'Lightbulb' | 'Ruler' | 'Building2';
    title: string;
    description: string;
  };
  index: number;
  isLast: boolean;
}

// Icon mapping
const iconMap = {
  Users,
  Lightbulb,
  Ruler,
  Building2,
};

export default function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  const IconComponent = iconMap[step.iconName];
  
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
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative"
    >
      <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
        <IconComponent className="w-8 h-8" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/30"></div>
      )}
    </motion.div>
  );
}