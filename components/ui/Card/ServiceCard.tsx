"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceType } from "@/lib/data/services";

interface Props {
  item: ServiceType;
}

const ServiceCard = ({ item }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="flex flex-col lg:items-start items-center  text-center lg:text-left gap-3 max-w-sm"
    >
      {/* Icon */}
      <Image
        src={item.image}
        alt={item.title}
        className="w-14 h-14 object-contain"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed">
        {item.description}
      </p>

      {/* Link */}
      <button className="text-[#fc4142] text-sm font-medium hover:underline">
        — MORE DETAILS
      </button>
    </motion.div>
  );
};

export default ServiceCard;
