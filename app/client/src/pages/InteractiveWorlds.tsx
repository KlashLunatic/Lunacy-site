import { Button } from "@/components/ui/button";

export default function InteractiveWorlds() {
  const projects = [
    {
      name: "TAMMY",
      stage: "MVP in Development",
      description: "An AI-driven interactive guide to the Lunacy universe",
      features: [
        "Interactive lobby environment",
        "AI-driven conversational interface",
        "Scene-based narrative progression",
        "Living guide to the Lunacy universe",
      ],
      timeline: "MVP targeted: 2026",
      status: "Active Development",
    },
    {
      name: "OBEAH Interactive Archive",
      stage: "Conceptual / Planned",
      description: "An immersive exploration of the OBEAH graphic novel universe",
      features: [
        "Visual environments from the narrative",
        "Expanded narrative portals",
        "Deeper symbolic exploration",
        "Interactive lore archive",
      ],
      timeline: "Post graphic novel release",
      status: "Planned Expansion",
    },
    {
      name: "Lunacy World Platform",
      stage: "Long-term Infrastructure",
      description: "A unified platform connecting all Lunacy projects",
      features: [
        "Modular expansion system",
        "Cross-project narrative integration",
        "Community and collaboration tools",
        "Persistent world progression",
      ],
      timeline: "Multi-year expansion",
      status: "Infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(\'/images/worlds-hero.webp\')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 py-40 text-center">
          <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold mb-6">
            Original Worlds
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-[1.08] text-bone text-balance">
            Interactive Worlds
          </h1>
          <p className="text-lg text-mist max-w-2xl mx-auto mb-12 leading-relaxed">
            Explore the Lunacy universe through immersive, AI-driven interactive experiences designed for Gen Z audiences and funder-ready deliverables.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200 shadow-sm">
              Explore TAMMY
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-secondary transition duration-200"
            >
              Collaborate
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24">
        <h2 className="font-display text-4xl font-medium mb-16 text-bone">Active & Planned Projects</h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-border rounded-lg p-8 hover:border-[#d4af37] transition duration-200">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium mb-2">{project.name}</h3>
                  <p className="text-muted text-sm font-light">{project.description}</p>
                </div>
                <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium whitespace-nowrap ml-4">
                  {project.status}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3 uppercase tracking-widest">Key Features</h4>
                <ul className="text-muted text-sm font-light space-y-2">
                  {project.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-xs text-muted/60 font-light">{project.timeline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="font-display text-4xl font-medium mb-12 text-bone">Designed For</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-medium mb-6 text-bone">Primary Audience</h3>
            <ul className="text-muted text-sm font-light space-y-3">
              <li>Ages 16–35</li>
              <li>Fans of immersive storytelling</li>
              <li>Graphic novel and experimental music audiences</li>
              <li>Individuals interested in mythology and identity</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-medium mb-6 text-bone">Secondary Audience</h3>
            <ul className="text-muted text-sm font-light space-y-3">
              <li>Creative communities</li>
              <li>Early adopters of experimental digital media</li>
              <li>Fans of narrative-driven interactive experiences</li>
              <li>Collaborators and funders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Mechanics */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="font-display text-4xl font-medium mb-12 text-bone">Core Mechanics</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-medium mb-6 text-bone">Interactive Systems</h3>
            <ul className="text-muted text-sm font-light space-y-3">
              <li>Interactive lobby and exploration system</li>
              <li>Branching narrative scenes</li>
              <li>AI-driven character interaction</li>
              <li>Persistent world progression</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-medium mb-6 text-bone">Expansion Potential</h3>
            <ul className="text-muted text-sm font-light space-y-3">
              <li>Modular expansion system</li>
              <li>Visual environments</li>
              <li>Expanded narrative portals</li>
              <li>Deeper symbolic exploration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="font-display text-4xl font-medium mb-16 text-bone">Development Roadmap</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-[#d4af37] pl-8">
            <h3 className="font-display text-xl font-medium mb-4 text-bone">TAMMY MVP</h3>
            <p className="text-muted text-sm font-light mb-3">
              The first interactive world — an AI-driven guide introducing visitors to the Lunacy universe through conversation, exploration, and narrative progression.
            </p>
            <p className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">Target: 2026</p>
          </div>

          <div className="border-l-2 border-[#d4af37] pl-8">
            <h3 className="font-display text-xl font-medium mb-4 text-bone">OBEAH Interactive Archive</h3>
            <p className="text-muted text-sm font-light mb-3">
              An immersive expansion allowing deep exploration of the OBEAH graphic novel universe with visual environments and symbolic archives.
            </p>
            <p className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">Post Graphic Novel Release</p>
          </div>

          <div className="border-l-2 border-[#d4af37] pl-8">
            <h3 className="font-display text-xl font-medium mb-4 text-bone">Lunacy World Platform</h3>
            <p className="text-muted text-sm font-light mb-3">
              A long-term unified platform connecting all projects, enabling cross-narrative exploration and community collaboration.
            </p>
            <p className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">Multi-Year Expansion</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <div className="text-center">
          <h2 className="text-3xl font-light mb-6 tracking-tight">Ready to Explore?</h2>
          <p className="text-muted mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            TAMMY MVP launches 2026. Collaborators, artists, and developers are invited to shape the future of interactive storytelling within the Lunacy universe.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200">
              Get Notified at Launch
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-secondary transition duration-200"
            >
              Inquire About Collaboration
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
