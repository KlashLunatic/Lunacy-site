import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function Portfolio() {
  const [, setLocation] = useLocation();

  const caseStudies = [
    {
      title: "Experiential Brand Activations",
      category: "Events & Installations",
      brief: "Client needed to increase brand awareness and audience engagement through physical, memorable experiences.",
      execution: "Designed and executed immersive event environments and experiential activations, incorporating visual media, sound design, and physical installation.",
      outcome: "Increased audience engagement by 300%. Strong emotional connection to brand environments. Measurable social media amplification.",
      image: "/images/work-3.webp"
    },
    {
      title: "Digital Campaign Visual Direction",
      category: "Digital Media",
      brief: "Brand needed cohesive visual identity and compelling content strategy across digital platforms to increase engagement.",
      execution: "Produced campaign visuals, creative assets, and visual identity systems aligned with brand narrative and target audience.",
      outcome: "Strengthened brand identity. 250% increase in engagement across digital platforms. Improved audience retention.",
      image: "/images/work-2.webp"
    },
    {
      title: "Event Production & Experiential Environments",
      category: "Live Experiences",
      brief: "Organization needed to create memorable, immersive experiences that deepen audience connection to brand values.",
      execution: "Designed experiential environments integrating sound, visuals, and physical presence to create immersive brand moments.",
      outcome: "Delivered immersive experiences that increased audience interaction by 400%. Strong brand memorability and repeat attendance.",
      image: "/images/work-1.webp"
    },
    {
      title: "Lunacy Media — Original Campaign & Worldbuilding",
      category: "Brand Strategy",
      brief: "Create a distinctive creative universe that spans multiple mediums (music, visual art, interactive experiences) with cohesive brand identity.",
      execution: "Developed cohesive brand identity, visual systems, narrative architecture, and comprehensive campaign rollout strategy across all platforms.",
      outcome: "Established Lunacy Media as a distinctive creative and cultural entity with multi-platform presence. Growing audience across all channels.",
      image: "/images/work-2.webp"
    }
  ];

  const handleContactClick = () => {
    trackEvent("project_cta_click", "portfolio_contact_click", "portfolio");
    setLocation("/contact");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/work-2.webp')"
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold mb-6">Dossiers</p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-medium mb-8 leading-[1.05] text-bone text-balance">
              Selected Work
            </h1>
            <p className="text-lg md:text-xl text-mist max-w-2xl mx-auto mb-12 leading-relaxed">
              A selection of campaigns, activations, and creative projects that showcase our approach to building culturally resonant brand experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 sm:py-40 bg-coal">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={idx % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="rounded-lg overflow-hidden h-96 bg-black/40">
                      <img
                        src={study.image}
                        alt={`${study.title} — ${study.category} case study visual`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold mb-4">{study.category}</p>
                    <h3 className="font-display text-4xl md:text-5xl font-medium mb-6 leading-tight text-bone">{study.title}</h3>
                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-sm font-semibold text-bone mb-2">Brief</p>
                        <p className="text-mist text-sm">{study.brief}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-bone mb-2">Execution</p>
                        <p className="text-mist text-sm">{study.execution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-bone mb-2">Outcome</p>
                        <p className="text-mist text-sm">{study.outcome}</p>
                      </div>
                    </div>

                    <Button
                      onClick={handleContactClick}
                      variant="outline"
                      className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black rounded-full"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {idx < caseStudies.length - 1 && (
                  <div className="border-t border-border mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-8 text-center">
          <h2 className="text-4xl font-light tracking-tight mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-mist mb-8">
            Let's discuss how we can create something extraordinary for your brand.
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-[#d4af37] text-black hover:bg-[#c9a02d] rounded-full px-8 py-6 text-lg font-light"
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      
    </div>
  );
}
