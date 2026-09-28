import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ObeahProject() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(\'/images/moon-texture.webp\')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 py-40 text-center">
          <p className="text-xs uppercase tracking-widest text-muted mb-6 font-medium">
            Graphic Novel Series
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
            OBEAH
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            A dark mythological narrative exploring power, transformation, and the preservation of ancestral knowledge.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200 shadow-sm">
              Read Chapter One
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-secondary transition duration-200"
            >
              Join the Archive
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-6 tracking-tight">The Story</h2>
            <p className="text-muted mb-6 leading-relaxed font-light">
              In a world where Obeah exists as a real force, one healer glimpses a timeline where her people lose their connection to power—and are enslaved. In trying to prevent that future, her magic transforms involuntarily into something darker. She becomes Paraphernalia, no longer purely healer nor villain, but a mutually peaceful enemy to the world itself.
            </p>
            <p className="text-muted font-light leading-relaxed">
              OBEAH explores how power emerges not from ambition, but from necessity.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-6 tracking-tight">Core Themes</h2>
            <ul className="space-y-4 text-muted text-sm font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Survival and transformation</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Trauma as catalyst</strong>, not endpoint</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Memory as archive</strong> and weapon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Power as protection</strong>, not dominance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Mythology as preservation</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-16 tracking-tight">Development Timeline</h2>

        <div className="space-y-8">
          {/* Completed */}
          <div className="border-l-2 border-[#d4af37] pl-8">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-medium">Completed</h3>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">Foundation</span>
            </div>
            <ul className="text-muted text-sm font-light space-y-2">
              <li>✓ Core universe and mythological framework established</li>
              <li>✓ Main character Paraphernalia fully developed</li>
              <li>✓ Chapter One narrative outline finalized</li>
              <li>✓ Panel-by-panel script template created</li>
              <li>✓ Visual tone and aesthetic direction defined</li>
            </ul>
          </div>

          {/* In Progress */}
          <div className="border-l-2 border-[#d4af37] pl-8">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-medium">In Progress</h3>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">Active</span>
            </div>
            <ul className="text-muted text-sm font-light space-y-2">
              <li>→ Finalizing Chapter One script and panel layouts</li>
              <li>→ Character reference sheets</li>
              <li>→ Environmental and symbolic design</li>
            </ul>
          </div>

          {/* Upcoming */}
          <div className="border-l-2 border-[#d4af37] pl-8">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-medium">Upcoming</h3>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">Q2–Q3 2026</span>
            </div>
            <ul className="text-muted text-sm font-light space-y-2">
              <li>→ Chapter One illustrated release</li>
              <li>→ Companion lore entries and symbolic archive</li>
              <li>→ Chapter Two script development</li>
              <li>→ Expanded character introductions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Aesthetic */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-12 tracking-tight">Visual Aesthetic</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Primary Influences</h3>
            <ul className="text-muted text-sm font-light space-y-3">
              <li>Afro-surrealism</li>
              <li>Dark mythological fantasy</li>
              <li>Graphic novel realism with symbolic abstraction</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Visual References</h3>
            <ul className="text-muted text-sm font-light space-y-3">
              <li><strong>Princess Mononoke</strong> — spiritual-natural realism</li>
              <li><strong>Castlevania (Netflix)</strong> — dark elegance and restraint</li>
              <li><strong>Berserk</strong> — mythic brutality and symbolic density</li>
              <li><strong>Blade Runner 2049</strong> — atmosphere, solitude, scale</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-lg font-medium mb-4">Key Elements</h3>
          <ul className="text-muted text-sm font-light space-y-3">
            <li>Deep shadow contrast and symbolic imagery</li>
            <li>Sigils, grimoires, and marked environments</li>
            <li>Organic textures: wood, bone, fabric, ash, ink</li>
            <li>Controlled, intentional color palettes</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <div className="text-center">
          <h2 className="text-3xl font-light mb-6 tracking-tight">Ready to Enter the Lunacy Universe?</h2>
          <p className="text-muted mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Chapter One releases Q2–Q3 2026. Join the archive for early access, lore updates, and exclusive content.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200">
              Subscribe for Updates
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-secondary transition duration-200"
            >
              Explore Other Projects
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
