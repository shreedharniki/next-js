"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-30 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-accent">Shreedhar</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl max-w-2xl"
      >
        Full Stack Developer with 2.6 years of experience in React, Node.js, PHP, and DevOps.
      </motion.p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 bg-accent text-black font-semibold rounded-full"
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
