'use client'
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20">
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 border-b leading-tight">
          Got a Project?
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          We’ve Got Your Back
        </h3>
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          You are in good hands, Just tell us about your project.
        </p>

        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-sm"
          >
            FREE CONSULTATION
          </motion.button>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6  mt-16">
        {/* Email Card */}
        <motion.div
          whileHover={{ scale: 1.03, backgroundColor: "#1b222b", color: "#ffffff" }}
          whileTap={{ scale: 0.97, backgroundColor: "#1b222b", color: "#ffffff" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-[370px] h-[210px] p-10  flex flex-col items-center md:items-start border rounded-xl flex items-start gap-4 bg-white cursor-pointer"
        >
          <Mail className="text-primary w-10 h-10" />
          <div>
            <h4 className="text-lg font-semibold">Email Us</h4>
            <p className="text-gray-500 mt-1">grandmax@gmail.com</p>
          </div>
        </motion.div>

        {/* Call Card */}
        <motion.div
          whileHover={{ scale: 1.03, backgroundColor: "#1b222b", color: "#ffffff" }}
          whileTap={{ scale: 0.97, backgroundColor: "#1b222b", color: "#ffffff" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-[370px] h-[210px] p-10  flex flex-col items-center md:items-start border rounded-xl flex items-start gap-4 bg-white cursor-pointer"
        >
          <Phone className="text-primary w-10 h-10" />
          <div>
            <h4 className="text-lg font-semibold">Call Us</h4>
            <p className="text-gray-500 mt-1">+234 813 866 2406</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
