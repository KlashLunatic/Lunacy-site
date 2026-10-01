import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Luxury Minimal (Apple-Inspired)
 * - White background with subtle gold (#d4af37) accents
 * - Generous whitespace and refined typography
 * - Storytelling-focused layout with breathing room
 * - Mythic, architectural, intentional aesthetic
 */

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/moon-texture.webp')" }}
          role="img"
          aria-label="Lunar surface texture behind the mythology hero"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 py-32 sm:py-40 text-center">
          <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold mb-6">
            Mythology
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-[1.08] text-bone text-balance">
            The Lunacy Universe
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto font-light leading-relaxed">
            A mythology of cycles, reflection, and transformation. An archive and an engine.
          </p>
        </div>
      </section>

      {/* The Founding */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-b border-border">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl font-medium mb-6 text-bone">The Founding</h2>
            <p className="text-muted mb-6 font-light leading-relaxed">
              Lunacy Media began as a personal survival mechanism before it became a company. It started with a simple realization: that the same forces often labeled as instability—obsession, intensity, emotional depth, and unconventional thinking—were not weaknesses, but creative instruments.
            </p>
            <p className="text-muted mb-6 font-light leading-relaxed">
              The founding moment wasn't a single event, but a convergence. Music, visual art, storytelling, and symbolism were no longer separate hobbies; they were fragments of a single universe trying to assemble itself. Lunacy was created as the structure to hold that universe.
            </p>
          </div>

          <div>
            <h2 className="font-display text-4xl font-medium mb-6 text-bone">The Name</h2>
            <p className="text-muted font-light leading-relaxed">
              Historically, "lunacy" referred to madness caused by the moon. Lunacy Media reclaims that idea—framing cyclical emotional and psychological states not as dysfunction, but as phases of transformation.
            </p>
            <p className="text-muted mt-6 font-light leading-relaxed">
              Just as the moon moves through phases, Lunacy exists to document and create through cycles of evolution. The name is both metaphor and mission statement.
            </p>
            <p className="text-muted mt-6 font-light leading-relaxed">
              <em>Lunacy Media was founded to build worlds, not just projects.</em>
            </p>
          </div>
        </div>
      </section>

      {/* The Mythology */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-b border-border">
        <h2 className="font-display text-4xl font-medium mb-16 text-bone">The Mythology</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-4 text-bone">The Moon as Symbol</h3>
              <p className="text-muted font-light leading-relaxed">
                At the center of the Lunacy universe is the moon—a symbol of cycles, reflection, illusion, and transformation. The moon does not generate light; it reflects it.
              </p>
              <p className="text-muted mt-4 font-light leading-relaxed">
                Lunacy Media operates the same way, reflecting internal worlds into external form. Every project is a reflection of psychological truth, emotional precision, and intentional creation.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-medium mb-4 text-bone">Archetypal Entities</h3>
              <p className="text-muted font-light leading-relaxed">
                The Lunacy universe is populated by archetypal entities—figures that represent psychological forces, survival mechanisms, and aspects of identity. These include characters, symbols, and recurring motifs across music, visual art, and narrative projects.
              </p>
              <p className="text-muted mt-4 font-light leading-relaxed">
                Each project is not isolated; it is a fragment of a larger cosmology.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/lm-monogram-gold.png"
              alt="Lunacy Media logo — the LM monogram; turned over, it becomes a trishul"
              className="w-48 h-48 object-contain" loading="lazy"
            />
            <p className="text-xs text-muted uppercase tracking-widest font-medium mt-6 text-center">
              Cycles • Reflection • Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-b border-border">
        <h2 className="font-display text-4xl font-medium mb-16 text-bone">Core Philosophy</h2>

        <div className="space-y-16">
          <div className="pb-8 border-b border-border">
            <h3 className="font-display text-2xl font-medium mb-4 text-bone">Transformation Through Creation</h3>
            <p className="text-muted font-light leading-relaxed">
              Creation is not just expression—it is evolution. Every project exists as a record of change and a catalyst for the next stage. We don't create to replicate; we create to evolve.
            </p>
          </div>

          <div className="pb-8 border-b border-border">
            <h3 className="font-display text-2xl font-medium mb-4 text-bone">Mythology as Identity</h3>
            <p className="text-muted font-light leading-relaxed">
              Stories are not fiction; they are frameworks for understanding reality. Lunacy treats personal experience, symbolism, and narrative as foundational infrastructure. Mythology is functional, not decorative.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-medium mb-4 text-bone">Emotional Precision and Honesty</h3>
            <p className="text-muted font-light leading-relaxed">
              Nothing is created to conform. Every work exists to capture emotional truth with clarity, even when it is uncomfortable or unconventional. We prioritize authenticity over palatability.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-b border-border">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl font-medium mb-6 text-bone">Founder & Creative Director</h2>
            <h3 className="text-xl font-medium mb-6">Kailash (Klash)</h3>
            <p className="text-muted mb-6 font-light leading-relaxed">
              A multidisciplinary artist, writer, and creative director whose work spans music, graphic novels, immersive digital experiences, and symbolic design.
            </p>
            <p className="text-muted mb-6 font-light leading-relaxed">
              With a background in marketing, digital media, and experiential storytelling, his approach combines strategic structure with deeply personal narrative. His work is driven by the belief that art is both a mirror and a mechanism—something that reflects identity while actively reshaping it.
            </p>
            <p className="text-muted font-light leading-relaxed">
              He serves as the architect of the Lunacy universe, overseeing creative direction, worldbuilding, visual identity, and narrative cohesion across all mediums.
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs text-muted uppercase tracking-widest font-medium mb-8">Personal Philosophy</p>
              <ul className="space-y-4 text-muted text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span><strong>Identity is constructed</strong>, not fixed—continuously shaped through experience and intentional creation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span><strong>Creativity is survival</strong>—a mechanism and evolutionary force, not just a talent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span><strong>Creation reshapes the creator</strong> and the world around them.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-b border-border">
        <h2 className="font-display text-4xl font-medium mb-6 text-bone">Studio Structure</h2>
        <p className="text-muted mb-8 font-light leading-relaxed max-w-3xl">
          Lunacy Media is currently led independently by its Founder & Creative Director, with collaborators engaged on a project-by-project basis across music production, visual design, development, and storytelling.
        </p>
        <p className="text-muted font-light leading-relaxed max-w-3xl">
          This structure allows Lunacy to remain cohesive in vision while flexible in execution. As Lunacy expands, it will evolve into a multidisciplinary creative studio working across media, technology, and immersive experience.
        </p>
      </section>

      {/* Archive & Engine */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24">
        <div className="text-center">
          <h2 className="font-display text-4xl font-medium mb-6 text-bone">Lunacy is Both</h2>
          <p className="text-lg text-muted mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            An archive and an engine. It documents evolution while actively causing it.
          </p>
          <p className="text-muted mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Every project is a reflection of the work that came before and a catalyst for what comes next. The universe expands with intention.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200 shadow-sm"
              onClick={() => window.location.href = "/"}
            >
              Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-secondary transition duration-200"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
