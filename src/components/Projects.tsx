const projects = [
  {
    title: "Smart Crop Rotation System",
    description:
      "IoT-based system using sensors and data analysis to support data-driven farming decisions.",
    tech: ["IoT", "Python", "MQTT"],
    status: "Prototype",
    link: "#",
  },
  {
    title: "Rugalika Sector Digital Platform",
    description:
      "A web platform for public service access, feedback, and communication.",
    tech: ["Node.js", "TypeScript", "MongoDB"],
    status: "Testing",
    link: "#",
  },
  {
    title: "E-Shopping Mobile App",
    description:
      "Flutter-based e-commerce app with Firebase authentication and notifications.",
    tech: ["Flutter", "Firebase"],
    status: "Ready for Deployment",
    link: "https://github.com/E-Shoping/e-shoping",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-poppins font-semibold mb-12">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-slate-800 rounded-xl p-6 hover:border-sky-400 transition"
            >
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-xs text-sky-400 mb-4">
                Status: {project.status}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="text-sm text-sky-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
