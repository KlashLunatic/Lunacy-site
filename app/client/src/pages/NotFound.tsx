import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Branded 404 — "Lost in the Void".
 */
export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-coal text-bone">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/moon-hero.webp')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-coal/70 via-coal/60 to-coal"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-32 text-center sm:px-8">
        <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
          404
        </p>
        <h1 className="mt-6 font-display text-6xl font-medium text-bone sm:text-7xl text-balance">
          Lost in the Void
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
          This page drifted beyond the edge of the map. The worlds you&rsquo;re
          looking for are still out there.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-base font-medium text-gold transition duration-200 hover:border-gold hover:bg-gold hover:text-coal"
          >
            Return Home <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
