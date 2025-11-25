'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Ruler, Home, Lightbulb, Users, Award } from 'lucide-react';

// Image imports (using placeholders since we can't access the actual files)
const service1 = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80";
const service2 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80";
const service3 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80";

const ServicePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
    { icon: <Users className="w-8 h-8" />, title: "Consultation", description: "Understanding your vision and requirements" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Concept Design", description: "Creating initial design concepts and visualizations" },
    { icon: <Ruler className="w-8 h-8" />, title: "Development", description: "Detailed planning and technical documentation" },
    { icon: <Building2 className="w-8 h-8" />, title: "Execution", description: "Construction oversight and quality assurance" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <img 
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to bringing your architectural vision to life
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/30"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Excellence in architecture through innovation, sustainability, and client collaboration
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "20+ Years Experience", description: "Decades of excellence in architectural design and innovation" },
              { title: "Award-Winning Designs", description: "Recognized internationally for outstanding architectural achievements" },
              { title: "Sustainable Approach", description: "Committed to environmentally responsible and energy-efficient solutions" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default ServicePage;