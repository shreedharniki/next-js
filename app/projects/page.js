"use client";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Temple Management System (TMS)",
      tech: "React.js, Node.js, MySQL, Express.js, JWT",
      desc: "Developed a complete temple event and donation platform with secure login and payment integration.",
    },
    {
      title: "ALUK E-Commerce Platform",
      tech: "PHP, MySQL, Razorpay API, HTML/CSS, SMTP",
      desc: "Built a vendor-based e-commerce site with cart, calendar integration, and automated emails.",
    },
    {
      title: "CRM System",
      tech: "PHP, MySQL",
      desc: "Created a custom CRM with role-based access and customer email automation.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-slate-800 mb-10"
        >
          My <span className="text-accent">Projects</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{project.tech}</p>
              <p className="text-gray-700">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
