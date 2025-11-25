// app/services/components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white py-20 px-4 overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Crafting exceptional spaces that inspire, function, and endure through innovative architectural solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}