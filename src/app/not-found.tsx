import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-950 px-4">
      <div className="max-w-md w-full text-center">
        {/* Big 404 */}
        <p className="text-[8rem] font-extrabold leading-none text-gradient mb-2 select-none">
          404
        </p>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
          <p className="text-zinc-400 text-sm">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                       bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm
                       transition-colors duration-200"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <a
            href="mailto:osualdiradukunda16@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                       border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white
                       font-semibold text-sm transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
