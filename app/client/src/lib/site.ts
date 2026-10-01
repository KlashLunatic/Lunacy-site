/**
 * Lunacy Media — site-wide content config.
 *
 * STATS: Kyle confirmed (Sept 27, 2026) these are REAL historical figures, and
 * noted the true numbers have since gone up. On Sept 28 he asked to OMIT the
 * stats section entirely until fresh numbers are provided — the homepage
 * section is parked (see HomeLunar.tsx). When he sends new values, update
 * below and re-enable the section.
 */
export const SITE_STATS = [
  {
    key: "speed",
    value: "3.4×",
    label: "Faster from idea to finished brand",
  },
  {
    key: "retention",
    value: "92%",
    label: "Client retention rate",
  },
  {
    key: "words",
    value: "11k+",
    label: "Words of brand strategy written",
  },
  {
    key: "projects",
    value: "6",
    label: "Original projects currently in the works",
  },
] as const;

export type OfferTier = {
  phase: string;
  offer: string;
  price: string;
  priceNote?: string;
  includes: string[];
};

export type FirstLight = {
  name: string;
  price: string;
  description: string;
};

export type ProductLine = {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  firstLight: FirstLight;
  tiers: OfferTier[];
  bestFit: string;
};

/**
 * The three product lines. Mirrors the Lunacy Media offers & pricing sheet
 * (v2, Oct 2026) — the sheet is the source of truth; keep this in sync.
 * Discovery-first: every new client enters through a First Light engagement.
 */
export const PRODUCT_LINES: ProductLine[] = [
  {
    id: "artist-accelerator",
    name: "Artist Accelerator",
    description:
      "A connected creative system for motivated artists building sound, image, and momentum.",
    keywords: ["Music", "Visuals", "Positioning"],
    firstLight: {
      name: "Artist Diagnostic",
      price: "$750",
      description:
        "Deep-dive across sound, image, and positioning, with a written roadmap. Full fee credited toward the package.",
    },
    tiers: [
      {
        phase: "Nebula — Creation",
        offer: "Artist Launch",
        price: "Custom scoped",
        priceNote: "quoted per project",
        includes: [
          "5-track extended play (EP): recording, mixing, and mastering",
          "Artist visual identity: logo, color, and typography",
          "Electronic press kit (EPK)",
          "One indie music video",
        ],
      },
      {
        phase: "Neutron — Preservation",
        offer: "Artist Momentum",
        price: "Custom scoped",
        priceNote: "per month · billed in advance",
        includes: [
          "One single per month: record, mix, and master",
          "Monthly content asset pack: cover art, social templates, and short-form cuts",
          "Release checklist and distribution guidance",
        ],
      },
      {
        phase: "Nova — Purification",
        offer: "Catalog Purification",
        price: "Custom scoped",
        priceNote: "quoted per project",
        includes: [
          "Catalog audit across sound, visuals, and positioning",
          "Remaster up to 10 tracks",
          "Visual identity refresh",
        ],
      },
    ],
    bestFit:
      "Independent artists ready to treat their career as a coherent world rather than a string of disconnected releases.",
  },
  {
    id: "small-business",
    name: "Small Business Web & Brand",
    description:
      "A credible, useful digital presence for owner-operated businesses ready to grow with intention.",
    keywords: ["Brand", "Website", "Local Search"],
    firstLight: {
      name: "Brand & Web Audit",
      price: "$950",
      description:
        "Audit of brand, website, and local search, with written findings and next steps. Full fee credited toward the package.",
    },
    tiers: [
      {
        phase: "Nebula — Creation",
        offer: "Business Launch",
        price: "Custom scoped",
        priceNote: "quoted per project",
        includes: [
          "5–10 page website: design, build, and search engine optimization (SEO) foundation",
          "Logo and mini identity: colors, fonts, and usage",
          "Google Business Profile and citations setup",
        ],
      },
      {
        phase: "Neutron — Preservation",
        offer: "Growth Care",
        price: "Custom scoped",
        priceNote: "per month · billed in advance",
        includes: [
          "Site maintenance and hosting management",
          "Local SEO: Google Business Profile, citations, and on-page optimization",
          "Two content pieces per month",
        ],
      },
      {
        phase: "Nova — Purification",
        offer: "Brand Refresh",
        price: "Custom scoped",
        priceNote: "quoted per project",
        includes: [
          "Brand and website audit",
          "Identity refresh and site updates",
        ],
      },
    ],
    bestFit:
      "Mom-and-pop businesses that need a polished, maintainable brand and website without building an internal creative team.",
  },
  {
    id: "brand-activations",
    name: "Brand Activations",
    description:
      "Activations built as experiences — creative direction, production, and amplification as one system.",
    keywords: ["Concept", "Production", "Amplification"],
    firstLight: {
      name: "Activation Concept Sprint",
      price: "$1,500",
      description:
        "Working session on concept territory, audience, and format, with a concept brief. Full fee credited toward the activation.",
    },
    tiers: [
      {
        phase: "Nebula — Creation",
        offer: "Activation",
        price: "Custom scoped",
        priceNote: "quoted per project",
        includes: [
          "Concept and creative direction",
          "Production, staffing, and permits",
          "Social and public relations amplification",
        ],
      },
      {
        phase: "Neutron — Preservation",
        offer: "Post-Activation Content Engine",
        price: "Custom scoped",
        priceNote: "per month · billed in advance",
        includes: [
          "Turn event capture into a sustained social content stream",
          "Maintain campaign narrative after the physical moment ends",
        ],
      },
      {
        phase: "Nova — Purification",
        offer: "Activation Retrospective + Brand Tune-Up",
        price: "Custom scoped",
        priceNote: "quoted per project",
        includes: [
          "Review execution, audience response, and reusable assets",
          "Translate learnings into sharper brand and campaign direction",
        ],
      },
    ],
    bestFit:
      "Reserve 20–30% of the total activation budget for social and PR amplification — that is the part that makes the moment outlive the night.",
  },
];

export const CONTACT_EMAIL = "info@lunacymedia.ca";

export const FOOTER_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "Worlds", href: "/worlds" },
      { label: "Mythology", href: "/mythology" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/mythology" },
      { label: "Team", href: "/team" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Licensing", href: "/licensing" },
    ],
  },
];
