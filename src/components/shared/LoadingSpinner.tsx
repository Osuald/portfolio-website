export default function LoadingSpinner({ size = 6 }: { size?: number }) {
  return (
    <div
      className={`h-${size} w-${size} rounded-full border-2 border-zinc-700 border-t-primary-500 animate-spin`}
      aria-label="Loading"
    />
  );
}
