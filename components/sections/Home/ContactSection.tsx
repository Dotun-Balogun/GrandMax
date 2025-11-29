'use client'
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Got a Project?
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-1 sm:mt-2">
          We've Got Your Back
        </h3>
        <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
          You are in good hands. Just tell us about your project.
        </p>
        <div className="mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
          >
            FREE CONSULTATION
          </motion.button>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16">
        {/* Email Card */}
        <motion.div
          whileHover={{ 
            scale: 1.03, 
            backgroundColor: "#1b222b",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="group w-full min-h-[180px] sm:min-h-[200px] md:min-h-[210px] p-6 sm:p-8 md:p-10 flex flex-col justify-center items-start border border-gray-200 rounded-xl gap-3 sm:gap-4 bg-white cursor-pointer hover:border-transparent shadow-sm hover:shadow-xl transition-all"
        >
          <Mail className="text-primary group-hover:text-white w-8 h-8 sm:w-10 sm:h-10 transition-colors" />
          <div className="w-full">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
              Email Us
            </h4>
            <p className="text-gray-500 group-hover:text-gray-300 mt-1 text-sm sm:text-base break-words transition-colors">
              grandmax@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Call Card */}
        <motion.div
          whileHover={{ 
            scale: 1.03, 
            backgroundColor: "#1b222b",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="group w-full min-h-[180px] sm:min-h-[200px] md:min-h-[210px] p-6 sm:p-8 md:p-10 flex flex-col justify-center items-start border border-gray-200 rounded-xl gap-3 sm:gap-4 bg-white cursor-pointer hover:border-transparent shadow-sm hover:shadow-xl transition-all"
        >
          <Phone className="text-primary group-hover:text-white w-8 h-8 sm:w-10 sm:h-10 transition-colors" />
          <div className="w-full">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
              Call Us
            </h4>
            <p className="text-gray-500 group-hover:text-gray-300 mt-1 text-sm sm:text-base break-words transition-colors">
              +234 813 866 2406
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}