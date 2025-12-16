const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Spring Boot", "Firebase"],
  Systems: ["C", "C++", "C#", "Embedded Systems", "IoT"],
  Tools: ["Git", "Docker", "MongoDB", "MySQL", "Linux"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-poppins font-semibold mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-sky-400 font-medium mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-800 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
