// app/services/components/CTASection.tsx
'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Let's collaborate to create something extraordinary together
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-white text-secondary rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </section>
  );
}