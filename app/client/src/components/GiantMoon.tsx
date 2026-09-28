import { useEffect, useRef } from "react";

/**
 * GiantMoon — the signature backdrop of the lunar homepage.
 *
 * An enormous lunar disc, fixed behind the page while content scrolls over
 * it. Its motion is driven by a single rAF loop:
 *   - a slow ambient spin (one revolution = 60s), so it always feels alive;
 *   - scroll-coupled rotation, so the moon turns as you move down the page;
 *   - a lunar cycle: a soft shadow sweeps across the disc with scroll
 *     progress — full moon at the top of the page, new moon midway, full
 *     again at the bottom.
 * All motion is transform-only (GPU-composited), and everything freezes —
 * leaving a static full moon — for visitors who prefer reduced motion.
 */
export default function GiantMoon() {
  const textureRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const texture = textureRef.current;
    const shadow = shadowRef.current;
    if (!texture || !shadow) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 0);
      const y = Math.min(Math.max(window.scrollY, 0), maxScroll);
      const progress = maxScroll > 0 ? y / maxScroll : 0;

      // ambient 6°/s spin + scroll-coupled turn (0.05° per px scrolled)
      const rotation = (elapsed * 6 + y * 0.05) % 360;
      texture.style.transform = `rotate(${rotation}deg)`;

      // lunar cycle: shadow sweeps from off-disc right (+120%), through
      // center (new moon) at mid-page, to off-disc left (-120%) at the bottom
      const shadowX = 120 - 240 * progress;
      shadow.style.transform = `translateX(${shadowX}%)`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* positioning wrapper — the disc's center sits below the fold so its
          upper limb arcs across the hero like a rising moon; content scrolls
          over it. */}
      <div className="absolute left-1/2 top-[128%] -translate-x-1/2 -translate-y-1/2">
        {/* moon viewport: clips the rotating texture and the phase shadow
            to the disc */}
        <div className="giant-moon-disc relative h-[165vmin] w-[165vmin] overflow-hidden rounded-full">
          <div
            ref={textureRef}
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/images/moon-surface.webp')",
              willChange: "transform",
            }}
          />
          {/* phase shadow — starts parked off-disc (full moon); the rAF loop
              sweeps it across with scroll progress */}
          <div
            ref={shadowRef}
            className="absolute inset-0"
            style={{ transform: "translateX(120%)", willChange: "transform" }}
          >
            <div
              className="absolute inset-0 rounded-full bg-black"
              style={{ filter: "blur(2vmin)", transform: "scale(1.03)" }}
            />
          </div>
          {/* spherical shading — limb darkening plus a soft directional light
              from the upper left, fixed in space while the surface rotates
              beneath it, so the disc reads as a sphere rather than a flat
              cutout */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.38) 78%, rgba(0,0,0,0.9) 100%), radial-gradient(circle at 36% 30%, rgba(255,252,240,0.13) 0%, rgba(255,252,240,0) 55%)",
            }}
          />
        </div>
      </div>
      {/* melt the disc's edge into the black and lift contrast behind copy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 46%, transparent 42%, rgba(0,0,0,0.5) 76%, #000 100%)",
        }}
      />
    </div>
  );
}
