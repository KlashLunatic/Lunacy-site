import { Link } from "wouter";
import {
  ArrowRight,
  Award,
  BookOpen,
  Compass,
  Globe,
  Users,
  Zap,
} from "lucide-react";
import FrameworkTiers from "@/components/FrameworkTiers";
import GiantMoon from "@/components/GiantMoon";
import Reveal from "@/components/Reveal";

const PILL_GOLD =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-black/55 px-8 py-4 text-base font-medium text-gold backdrop-blur-sm transition duration-200 hover:border-gold hover:bg-gold hover:text-black hover:shadow-[0_0_36px_rgba(212,175,55,0.4)]";
const PILL_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/55 px-8 py-4 text-base font-medium text-bone backdrop-blur-sm transition duration-200 hover:border-bone/60 hover:bg-white/10";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-cinzel text-xs font-semibold tracking-[0.32em] text-gold">
      {children}
    </p>
  );
}

/** Radial scrim that keeps copy legible where the giant moon sits behind it. */
function MoonScrim({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background:
          "radial-gradient(ellipse 70% 62% at 50% 42%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 55%, transparent 78%)",
      }}
    />
  );
}

const WHAT_WE_DO = [
  {
    n: "01",
    icon: BookOpen,
    title: "A brand story bible",
    body: "One clear document covering your story, characters, and rules — so every future project stays consistent, no matter who's working on it.",
  },
  {
    n: "02",
    icon: Compass,
    title: "Direction that stays consistent",
    body: "We keep every release, post, and asset pointed at the same story — so nothing you put out ever feels off-brand.",
  },
  {
    n: "03",
    icon: Users,
    title: "One shared playbook",
    body: "Every collaborator — designer, musician, editor — works from the same brief. No lost context, no guesswork, no surprises.",
  },
  {
    n: "04",
    icon: Zap,
    title: "Fast turnaround",
    body: "Music, visuals, and interactive work move quickly. Concepts become finished deliverables in days, not months.",
  },
  {
    n: "05",
    icon: Award,
    title: "Investor and grant-ready",
    body: "Pitch decks and funding applications built with real research behind every claim — the kind that holds up under questions.",
  },
  {
    n: "06",
    icon: Globe,
    title: "Works everywhere you show up",
    body: "Brand, music, film, interactive, print — the same story, told consistently everywhere your audience finds you.",
  },
];

export default function HomeLunar() {
  return (
    <div className="relative bg-black text-bone">
      {/* The giant rotating moon — fixed behind everything on this page */}
      <GiantMoon />

      <div className="relative z-10">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden">
          {/* scrim: dark behind the headline for WCAG AA contrast — the giant
              moon's limb arcs across the lower hero behind the copy */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-transparent"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl px-4 pb-28 pt-24 text-center sm:px-8 sm:pt-36">
            <Reveal>
              <Eyebrow>Your Forever Endeavour</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 font-display text-6xl font-medium leading-[1.04] text-bone sm:text-7xl lg:text-8xl">
                The moon teaches us that sometimes&hellip;
                <br />
                it&rsquo;s not just a{" "}
                <em className="text-gold-shine italic">phase</em>.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
                Brand identity, worldbuilding, and narrative strategy for artists,
                founders, and organizations who were never meant to be ordinary.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className={PILL_GOLD}>
                  Book a Mythos Audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/work" className={PILL_GHOST}>
                  View Work
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ============ FEATURED WORLD — sits on the moon surface ============ */}
          <div className="relative border-t border-white/10 bg-gradient-to-r from-transparent via-black/55 to-transparent">
            <Link
              href="/worlds"
              className="group mx-auto flex max-w-6xl flex-wrap items-baseline justify-center gap-x-6 gap-y-2 px-4 py-6 sm:px-8"
              aria-label="Featured world: The Trisomy — Music, Mythic Autobiography"
            >
              <span className="rounded-full border border-gold/40 px-4 py-1.5 font-cinzel text-xs font-semibold tracking-[0.32em] text-gold transition duration-300 group-hover:border-gold group-hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]">
                Featured World
              </span>
              <span className="font-display text-2xl italic text-bone sm:text-3xl">The Trisomy</span>
              <span className="text-sm text-mist">Music&nbsp;&nbsp;/&nbsp;&nbsp;Mythic Autobiography</span>
            </Link>
          </div>
        </section>

        {/* ============ 01 / WHAT WE DO ============ */}
        <section className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8 sm:py-36">
          <MoonScrim />
          <div className="relative text-center">
            <Reveal>
              <Eyebrow>01 / What We Do</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.06] text-bone sm:text-6xl">
                Everything your brand needs,{" "}
                <em className="italic text-gold">under one roof</em>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                Stop juggling five different agencies. Lunacy handles your strategy,
                sound, visuals, and story as one connected system — so everything
                stays consistent and on-brand.
              </p>
            </Reveal>
          </div>

          <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((card, i) => (
              <Reveal key={card.n} delay={(i % 3) * 110}>
                <article className="card-lift relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm">
                  <span
                    className="pointer-events-none absolute -top-2 right-4 font-display text-7xl italic text-white/[0.07]"
                    aria-hidden="true"
                  >
                    {card.n}
                  </span>
                  <card.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-2xl font-medium text-bone">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mist">{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ 02 / THE FRAMEWORK ============ */}
        <section className="relative overflow-hidden border-t border-white/10">
          <div
            className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8 sm:py-36">
            <div className="text-center">
              <Reveal>
                <Eyebrow>02 / The Framework</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.06] text-bone sm:text-6xl">
                  A simple, <em className="italic text-gold">four-step</em> way to
                  work together
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                  From a first conversation to ongoing support — here&rsquo;s exactly
                  what each stage includes and what it costs.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8">
                  <Link href="/contact" className={PILL_GOLD}>
                    Book a Mythos Audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="mt-16">
                <FrameworkTiers />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats parked — Kyle asked to omit until fresh numbers are provided. */}

        {/* ============ 03 / BEGIN ============ */}
        <section className="relative border-t border-white/10">
          <MoonScrim />
          <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-8 sm:py-36">
            <Reveal>
              <Eyebrow>03 / Begin</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[1.06] text-bone sm:text-6xl">
                Every world begins <em className="italic text-gold">the same way.</em>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
                A feeling. A question. A vision that refuses to stay quiet. If
                something brought you here — trust it.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className={PILL_GOLD}>
                  Book a Mythos Audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className={PILL_GHOST}>
                  Talk to the Studio
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="mx-auto mt-10 max-w-xl text-[15px] leading-relaxed text-mist">
                A Mythos Audit is a focused 60-90 minute call where we figure out
                your story and your clearest next move. No pressure, no obligation.
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
