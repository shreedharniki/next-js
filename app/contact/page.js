export default function Contact() {
  return (
    <section className="p-8 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6 text-gray-700">
        I’d love to hear from you! Whether it’s a project, collaboration, or just a chat.
      </p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-3 rounded-lg" />
        <input type="email" placeholder="Your Email" className="border p-3 rounded-lg" />
        <textarea rows="4" placeholder="Message" className="border p-3 rounded-lg"></textarea>
        <button className="bg-accent text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
