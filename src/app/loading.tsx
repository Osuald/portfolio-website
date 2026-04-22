export default function Loading() {
  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 animate-pulse" />
          <div className="absolute inset-1 rounded-xl bg-surface-950 flex items-center justify-center">
            <span className="text-2xl font-extrabold text-gradient">O</span>
          </div>
          <div className="absolute -inset-2 rounded-3xl border-2 border-transparent border-t-primary-500 animate-spin" />
        </div>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
