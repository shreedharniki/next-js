import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-r from-slate-950 via-purple-900 to-slate-950 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        {/* Heading */}
        <h3 className="text-2xl font-semibold text-white">
          Let’s Build Something Amazing <span className="text-accent">Together 🚀</span>
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 text-2xl">
          <a
            href="https://github.com/shreedharniki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/shreedharniki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:shreedharniki@gmail.com"
            className="hover:text-accent transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Name / Credit */}
        <p className="text-sm text-gray-400">
          Designed & Developed by{" "}
          <span className="text-accent font-semibold">Shreedhar Niki</span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Shreedhar Niki. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
