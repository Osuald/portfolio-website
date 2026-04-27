export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-night-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="h-10 w-10 rounded-xl bg-seafoam-500 flex items-center justify-center font-mono font-bold text-white text-base">
          O
        </div>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-seafoam-400 animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
