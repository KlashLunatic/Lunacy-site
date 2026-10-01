import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import FrameworkTiers from "@/components/FrameworkTiers";
import { PRODUCT_LINES } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const CLIENT_TYPES = [
  "Music artists and record labels",
  "Fashion brands and designers",
  "Lifestyle and culture brands",
  "Tech startups and digital platforms",
  "Creative agencies",
  "Event organizers and cultural institutions",
];

export default function Services() {
  return (
    <div className="bg-coal text-bone">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/moon-texture.webp')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-coal/60 via-coal/70 to-coal"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-20 text-center sm:px-8 sm:pt-28">
          <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
            Studio Services
          </p>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.08] text-bone sm:text-6xl lg:text-7xl text-balance">
            The Offerings
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Three product lines, one discovery-first path. Every engagement
            begins with First Light — then builds through Nebula (creation),
            Neutron (preservation), and Nova (purification).
          </p>
        </div>
      </section>

      {/* Product lines at a glance */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
        <FrameworkTiers />

        {/* Full detail per line */}
        {PRODUCT_LINES.map((line, lineIndex) => (
          <div key={line.id} className="mt-24">
            <div className="text-center">
              <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
                {["Line A", "Line B", "Line C"][lineIndex]}
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium text-bone sm:text-5xl">
                {line.name}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-mist">
                {line.description}
              </p>
              <p className="mt-4 font-cinzel text-[11px] font-semibold tracking-[0.3em] text-mist/70">
                {line.keywords.join("  ·  ").toUpperCase()}
              </p>
            </div>

            {/* First Light */}
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/40 bg-gold/[0.05] p-8">
              <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
                First Light — Discovery
              </p>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-medium text-bone">
                  {line.firstLight.name}
                </h3>
                <p className="font-cinzel text-base font-semibold tracking-[0.14em] text-gold">
                  {line.firstLight.price.toUpperCase()}
                </p>
              </div>
              <p className="mt-3 leading-relaxed text-mist">
                {line.firstLight.description}
              </p>
            </div>

            {/* Tiers */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {line.tiers.map((tier) => (
                <article
                  key={tier.offer}
                  className="flex flex-col rounded-2xl border border-white/10 bg-black/40 p-8"
                >
                  <p className="font-cinzel text-[11px] font-semibold tracking-[0.24em] text-gold">
                    {tier.phase.toUpperCase()}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-bone">
                    {tier.offer}
                  </h3>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-mist">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-cinzel text-sm font-semibold tracking-[0.18em] text-gold">
                    {tier.price.toUpperCase()}
                  </p>
                  {tier.priceNote && (
                    <p className="mt-1 text-xs text-mist/70">{tier.priceNote}</p>
                  )}
                </article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-mist">
              <span className="text-gold">Best fit — </span>
              {line.bestFit}
            </p>
          </div>
        ))}
      </section>

      {/* À la carte */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-8">
          <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
            À La Carte
          </p>
          <h2 className="mt-6 font-display text-4xl font-medium text-bone sm:text-5xl">
            Need a single piece?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Standalone work is available — recording, mixing, music videos,
            websites, identity, SEO, and more. Packages remain the better-value
            path, but the rate card is there when you only need one piece of
            the system.
          </p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
          <p className="text-center font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
            Who We Work With
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-4xl font-medium text-bone sm:text-5xl">
            Built for the never-ordinary
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENT_TYPES.map((client) => (
              <div
                key={client}
                className="rounded-xl border border-white/10 bg-black/40 p-6 text-center transition duration-300 hover:border-gold/40"
              >
                <p className="text-[15px] text-bone">{client}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-mist">
            Lunacy Media works with brands that want to stand out through
            originality, symbolism, and story — not conventional marketing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-8">
          <h2 className="font-display text-4xl font-medium text-bone sm:text-5xl">
            Start with First Light
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Every new client begins with a First Light discovery engagement — a
            working session that maps your world and your clearest next move.
            The full fee is credited toward your package.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => trackEvent("project_cta_click", "services_contact_click", "services")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-base font-medium text-gold transition duration-200 hover:border-gold hover:bg-gold hover:text-coal"
            >
              Start with First Light <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
