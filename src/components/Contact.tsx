export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-poppins font-semibold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-slate-400 mb-8">
          I’m open to internships, collaborations, and research opportunities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:your@email.com"
            className="px-6 py-3 border border-slate-700 rounded-lg hover:border-sky-400"
          >
            Email Me
          </a>

          <a
            href="tel:+250XXXXXXXXX"
            className="px-6 py-3 border border-slate-700 rounded-lg hover:border-sky-400"
          >
            Call Me
          </a>

          <a
            href="https://wa.me/250XXXXXXXXX"
            target="_blank"
            className="px-6 py-3 bg-sky-400 text-slate-900 rounded-lg font-medium"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
