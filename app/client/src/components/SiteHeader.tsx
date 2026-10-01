/**
 * LunacyMark — the Lunacy Media monogram (gold "lm"; turned over it reads
 * as a trishul). Replaces the old emblem everywhere the brand mark appears.
 */
export function LunacyMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/lm-monogram-gold.png"
      alt="Lunacy Media logo — the LM monogram; turned over, it becomes a trishul"
      className={`${className} object-contain`}
      loading="eager"
    />
  );
}

/**
 * Shared sticky site header — lunar wordmark + Contact pill.
 * Used on every page via SiteLayout.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a href="/" className="group flex items-center gap-3" aria-label="Lunacy Media — home">
          <LunacyMark className="h-9 w-auto transition duration-500 group-hover:[filter:drop-shadow(0_0_10px_rgba(212,175,55,0.55))]" />
          <span className="font-cinzel text-sm font-semibold tracking-[0.32em] text-bone">
            LUNACY MEDIA
          </span>
        </a>
        <a
          href="/contact"
          className="rounded-full border border-gold/50 px-5 py-2 text-sm font-medium text-gold transition duration-200 hover:border-gold hover:bg-gold hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
