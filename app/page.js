import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Temple Management System"
            stack="React.js, Node.js, MySQL"
            desc="A platform for temple events and donations with secure login and payments."
          />
          <ProjectCard
            title="ALUK E-commerce"
            stack="PHP, MySQL, Razorpay"
            desc="E-commerce platform with cart, vendor registration, and email reminders."
          />
          <ProjectCard
            title="CRM Dashboard"
            stack="PHP, MySQL, Razorpay"
            desc="E-commerce platform with cart, vendor registration, and email reminders."
          />
          <ProjectCard
            title="ALUK E-commerce"
            stack="PHP, MySQL, Razorpay"
            desc="E-commerce platform with cart, vendor registration, and email reminders."
          />
          <ProjectCard
            title="ALUK E-commerce"
            stack="PHP, MySQL, Razorpay"
            desc="E-commerce platform with cart, vendor registration, and email reminders."
          />
          <ProjectCard
            title="ALUK E-commerce"
            stack="PHP, MySQL, Razorpay"
            desc="E-commerce platform with cart, vendor registration, and email reminders."
          />
          <ProjectCard
            title="ALUK E-commerce"
            stack="PHP, MySQL, Razorpay"
            desc="E-commerce platform with cart, vendor registration, and email reminders."
          />
        </div>
      </section>
    </div>
  );
}

