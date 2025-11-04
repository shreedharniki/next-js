"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] 
                 bg-white/70 backdrop-blur-lg border border-white/30 
                 shadow-xl rounded-2xl px-6 py-4 flex justify-between items-center 
                 z-50"
    >
      <Link
        href="/"
        className="text-2xl font-bold text-gray-900 hover:text-accent transition"
      >
        MyPortfolio
      </Link>

      <div className="space-x-6 text-gray-800 font-medium">
        <Link href="/" className="hover:text-accent transition">Home</Link>
        <Link href="/about" className="hover:text-accent transition">About</Link>
        <Link href="/projects" className="hover:text-accent transition">Projects</Link>
        <Link href="/contact" className="hover:text-accent transition">Contact</Link>
      </div>
    </motion.nav>
  );
}

