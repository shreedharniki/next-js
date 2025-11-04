export default function AboutSection() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="leading-relaxed text-lg">
        I’m a passionate Full Stack Developer with hands-on experience in
        building scalable web applications using modern technologies like React,
        Node.js, PHP, and Laravel. I love solving complex problems and bringing
        designs to life with clean and efficient code.
      </p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        <li><strong>Frontend:</strong> React.js, Redux, Tailwind CSS, Material UI</li>
        <li><strong>Backend:</strong> Node.js, Express.js, PHP, Laravel</li>
        <li><strong>Databases:</strong> MySQL, MongoDB</li>
        <li><strong>DevOps:</strong> Docker, Jenkins, Kubernetes, AWS</li>
      </ul>
    </section>
  );
}
