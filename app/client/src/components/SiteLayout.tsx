import type { ReactNode } from "react";
import { useLocation } from "wouter";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

/**
 * Wraps every route with the shared lunar header + footer so no page
 * is left orphaned in the old visual language. The main element re-keys
 * on navigation so each route change plays the page-enter transition.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return (
    <div className="min-h-screen bg-black font-sans text-bone antialiased">
      <SiteHeader />
      <main key={location} className="page-enter">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
