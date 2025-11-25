"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden">

      {/* Soft gradient shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-[450px] h-[450px] bg-secondary/30 rounded-full blur-[120px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] bottom-[-150px] right-[-150px]" />
      </div>

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10 max-w-md text-center 
          backdrop-blur-xl bg-white/10 border border-white/20 
          shadow-xl rounded-3xl px-10 py-12 text-white
        "
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-8xl font-extrabold tracking-tight"
        >
          404
        </motion.h1>

        <p className="text-lg mt-4 text-white/90">
          This page has gone missing — maybe it wandered off into the unknown.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/">
            <Button
              className="
                bg-secondary hover:bg-secondary/80 
                text-white px-6 py-3 text-base rounded-xl 
                flex items-center gap-2 mx-auto
              "
            >
              <MoveLeft size={18} />
              Return Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
