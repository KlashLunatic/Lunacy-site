import { CONTACT_EMAIL, FOOTER_COLUMNS } from "@/lib/site";
import { LunacyMark } from "./SiteHeader";

/**
 * Shared site footer — lunar wordmark, studio line, link columns, sign-off.
 * Used on every page via SiteLayout.
 */
export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-coal">
      {/* faint moonrise behind the footer */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/images/moon-texture.webp')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-coal via-coal/60 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8">
        <div className="flex items-center gap-3">
          <LunacyMark className="h-9 w-auto" />
          <div>
            <span className="font-cinzel text-sm font-semibold tracking-[0.32em] text-bone">
              LUNACY MEDIA
            </span>
            <p className="mt-1 font-cinzel text-[10px] font-medium tracking-[0.32em] text-gold">
              YOUR FOREVER ENDEAVOR
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
          The mythology and worldbuilding studio for ambitious storytellers. Based in
          Toronto, Canada.
        </p>

        <nav
          className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3"
          aria-label="Footer"
        >
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="font-cinzel text-xs font-semibold tracking-[0.22em] text-gold">
                {col.heading.toUpperCase()}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-mist transition duration-200 hover:text-bone"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-mist/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Lunacy Media — Forged among the stars.</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition duration-200 hover:text-bone"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
