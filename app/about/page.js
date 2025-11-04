export default function About() {
  return (
    <section className="p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg leading-relaxed">
        I am a Full Stack Developer with <strong>2.6 years of experience</strong> in
        developing end-to-end scalable web applications using modern technologies.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Skills</h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Frontend:</strong>Next .js ,React.js, Redux, JS (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI</li>
        <li><strong>Backend:</strong> Node.js, Express.js, PHP,  REST API, JWT, Nodemailer</li>
        <li><strong>Databases:</strong> MySQL, MongoDB</li>
        <li><strong>Integrations:</strong> Razorpay, Stripe, SMTP, Calendar, File Uploads</li>
        <li><strong>DevOps:</strong> Docker, Jenkins, Kubernetes, Ansible, Git, AWS</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Experience</h2>
      <p className="mt-2">
        <strong>Software Developer</strong> – CodeMyThought  
        <br />
        <span className="text-sm text-gray-600">
          Feb 2023 – Present (2.6 Years) | Bangalore, India
        </span>
      </p>
    </section>
  );
}
