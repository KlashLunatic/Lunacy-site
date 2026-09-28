import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import FrameworkTiers from "@/components/FrameworkTiers";
import { TIERS } from "@/lib/site";
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
            The Framework
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Four stages, from first conversation to ongoing direction — each with
            a clear scope and a clear price. No black boxes, no mystery quotes.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
        <FrameworkTiers />

        {/* What each stage includes */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TIERS.map((tier) => (
            <article
              key={tier.numeral}
              className="rounded-2xl border border-white/10 bg-black/40 p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl italic text-gold">
                  {tier.numeral}
                </span>
                <h2 className="font-display text-2xl font-medium text-bone">
                  {tier.name}
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
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
            </article>
          ))}
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
            Start with a Mythos Audit
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
            A focused 60-90 minute call where we figure out your story and your
            clearest next move. No pressure, no obligation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => trackEvent("project_cta_click", "services_contact_click", "services")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-base font-medium text-gold transition duration-200 hover:border-gold hover:bg-gold hover:text-coal"
            >
              Book a Mythos Audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
