const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Years of Coding", value: "4+" },
  { label: "GPA (Top Rank)", value: "4.61 / 5" },
  { label: "Tech Stack", value: "10+" },
];

export default function Stats() {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-poppins font-semibold text-sky-400">
              {stat.value}
            </p>
            <p className="mt-2 text-slate-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
