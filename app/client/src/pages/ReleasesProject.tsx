import { Button } from "@/components/ui/button";

export default function ReleasesProject() {
  const releases = [
    {
      title: "Mulligan",
      type: "Album",
      status: "In Development",
      releaseWindow: "2026–2027",
      description: "A narrative-driven album exploring identity, loss, and resilience.",
    },
    {
      title: "Between The Last Letters",
      type: "Album",
      status: "In Development",
      releaseWindow: "2026–2027",
      description: "An intimate exploration of memory and connection across time.",
    },
    {
      title: "Kaalu Raam",
      type: "Album",
      status: "In Development",
      releaseWindow: "2027–2028",
      description: "A transcendent journey through mythology and transformation.",
    },
  ];

  const upcomingSingles = [
    { title: "OBEAH", description: "Introducing the dark mythology of the graphic novel" },
    { title: "Mulligan", description: "The opening chapter of loss and resilience" },
    { title: "Memory", description: "A meditation on preservation and trauma" },
    { title: "Hazardous", description: "Exploring power and protection" },
    { title: "Crossfire", description: "Narrative escalation and transformation" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(\'/images/releases-hero.webp\')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 py-40 text-center">
          <p className="text-xs uppercase tracking-widest text-muted mb-6 font-medium">
            Interconnected Musical Narratives
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
            Lunacy Releases
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Every release is both music and narrative infrastructure. Albums and singles introduce characters, archetypes, and mythological forces within the Lunacy universe.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200 shadow-sm">
              Subscribe for Updates
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-secondary transition duration-200"
            >
              Explore Lore
            </Button>
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24">
        <h2 className="text-3xl font-light mb-16 tracking-tight">Albums in Development</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {releases.map((release, idx) => (
            <div key={idx} className="border border-border rounded-lg p-8 hover:border-[#d4af37] transition duration-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium mb-1">{release.title}</h3>
                  <p className="text-xs text-muted uppercase tracking-widest">{release.type}</p>
                </div>
                <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium whitespace-nowrap ml-4">
                  {release.status}
                </span>
              </div>
              <p className="text-muted text-sm font-light mb-6 leading-relaxed">{release.description}</p>
              <p className="text-xs text-muted/60 font-light">Expected: {release.releaseWindow}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Singles Roadmap */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-16 tracking-tight">Upcoming Singles (2026)</h2>

        <div className="space-y-6">
          {upcomingSingles.map((single, idx) => (
            <div key={idx} className="border-l-2 border-[#d4af37] pl-8 pb-6">
              <h3 className="text-lg font-medium mb-2">{single.title}</h3>
              <p className="text-muted text-sm font-light">{single.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <p className="text-muted font-light leading-relaxed">
            Additional singles will be released strategically to introduce archetypes and narrative elements before full album releases. Each single serves as a narrative waypoint, deepening the Lunacy universe with every release.
          </p>
        </div>
      </section>

      {/* Genres & Styles */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-12 tracking-tight">Sonic Landscape</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium mb-6">Core Genres</h3>
            <ul className="text-muted text-sm font-light space-y-3">
              <li>Experimental hip-hop</li>
              <li>UK garage</li>
              <li>Electronic / ambient</li>
              <li>Alternative rap</li>
              <li>Dark atmospheric production</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Narrative Function</h3>
            <p className="text-muted text-sm font-light leading-relaxed">
              Each sound represents a different environment or archetype within the Lunacy universe. Music acts as both emotional expression and worldbuilding mechanism, introducing characters, psychological states, and mythological forces.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-16 tracking-tight">Release Timeline</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-[#d4af37] pl-8">
            <h3 className="text-lg font-medium mb-4">2026</h3>
            <ul className="text-muted text-sm font-light space-y-2">
              <li>→ Singles rollout begins</li>
              <li>→ First official Lunacy releases published</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#d4af37] pl-8">
            <h3 className="text-lg font-medium mb-4">2026–2027</h3>
            <ul className="text-muted text-sm font-light space-y-2">
              <li>→ Mulligan album release</li>
              <li>→ Between The Last Letters release</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#d4af37] pl-8">
            <h3 className="text-lg font-medium mb-4">2027–2028</h3>
            <ul className="text-muted text-sm font-light space-y-2">
              <li>→ Kaalu Raam release</li>
              <li>→ Full Trisomy cycle completed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <div className="text-center">
          <h2 className="text-3xl font-light mb-6 tracking-tight">Stay in the Orbit</h2>
          <p className="text-muted mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Get notified when singles drop, albums release, and new chapters unfold. Join thousands of listeners building the Lunacy universe together.
          </p>
          <Button className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200">
            Subscribe for Release Notifications
          </Button>
        </div>
      </section>

      
    </div>
  );
}
