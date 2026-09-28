import { TIERS } from "@/lib/site";

/**
 * The four-stage framework cards — shared by the homepage and /studio
 * so the tier vocabulary can never drift apart again.
 */
export default function FrameworkTiers() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {TIERS.map((tier) => (
        <article
          key={tier.numeral}
          className="card-lift flex flex-col rounded-2xl border border-white/10 bg-black/60 p-8 text-center backdrop-blur-sm"
        >
          <p
            className="text-gold-shine font-display text-4xl italic"
            aria-hidden="true"
          >
            {tier.numeral}
          </p>
          <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-bone">
            {tier.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
            {tier.description}
          </p>
          <p className="mt-6 font-cinzel text-sm font-semibold tracking-[0.18em] text-gold">
            {tier.price.toUpperCase()}
          </p>
        </article>
      ))}
    </div>
  );
}
