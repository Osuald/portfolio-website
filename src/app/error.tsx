"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-950 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-900/30 border border-amber-800/40 mb-6">
            <AlertTriangle className="h-9 w-9 text-amber-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-3">Something went wrong</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                       bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm
                       transition-colors duration-200"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                       border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white
                       font-semibold text-sm transition-colors duration-200"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
