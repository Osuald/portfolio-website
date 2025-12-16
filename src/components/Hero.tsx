import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="font-poppins text-4xl md:text-5xl font-semibold leading-tight">
            Hi, I’m <span className="text-sky-400">Osuald Iradukunda</span>
          </h1>

          <p className="mt-4 text-slate-400 text-lg">
            Software & Systems Engineer
          </p>

          <p className="mt-6 max-w-xl text-slate-300 leading-relaxed">
            I design and build reliable web, mobile, and systems-level solutions
            focused on real-world impact, scalability, and accessibility.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-sky-400 text-slate-900 font-medium hover:bg-sky-300 transition"
            >
              View Projects
            </a>

            <a
              href="/Osuald_Iradukunda_Resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-slate-600 text-slate-200 hover:border-sky-400 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-slate-700">
            <Image
              src="/images/profile.jpg"
              alt="Osuald Iradukunda"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
