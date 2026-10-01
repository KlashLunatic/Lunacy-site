import { PRODUCT_LINES } from "@/lib/site";

/**
 * The three product lines — shared by the homepage and /studio so the
 * offering vocabulary can never drift apart again. Mirrors the offers &
 * pricing sheet (v2): every line opens with a First Light discovery
 * engagement, then builds through Nebula, Neutron, and Nova.
 */
export default function FrameworkTiers() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {PRODUCT_LINES.map((line, i) => (
        <article
          key={line.id}
          className="card-lift flex flex-col rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm"
        >
          <p
            className="text-gold-shine font-display text-4xl italic"
            aria-hidden="true"
          >
            {["I", "II", "III"][i]}
          </p>
          <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-bone">
            {line.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            {line.description}
          </p>

          <div className="mt-6 rounded-xl border border-gold/30 bg-gold/[0.06] p-5 text-left">
            <p className="font-cinzel text-[10px] font-semibold tracking-[0.28em] text-gold">
              FIRST LIGHT — DISCOVERY
            </p>
            <p className="mt-2 text-[15px] font-medium text-bone">
              {line.firstLight.name}
            </p>
            <p className="mt-1 font-cinzel text-sm font-semibold tracking-[0.14em] text-gold">
              {line.firstLight.price.toUpperCase()}
            </p>
          </div>

          <ul className="mt-6 flex-1 space-y-3 text-left">
            {line.tiers.map((tier) => (
              <li
                key={tier.offer}
                className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-3 text-sm"
              >
                <span className="text-bone">
                  <span className="text-mist">{tier.phase.split(" — ")[0]}</span>
                  {" · "}
                  {tier.offer}
                </span>
                <span className="shrink-0 font-cinzel text-[11px] font-semibold tracking-[0.14em] text-gold">
                  {tier.price.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-relaxed text-mist/70">
            Every engagement begins with First Light — the full fee is credited
            toward the package.
          </p>
        </article>
      ))}
    </div>
  );
}
