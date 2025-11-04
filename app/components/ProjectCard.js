"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, stack, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="border rounded-2xl p-6 shadow-lg bg-white hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{stack}</p>
      <p>{desc}</p>
    </motion.div>
  );
}
