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

export type Tier = {
  numeral: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  includes: string[];
};

/**
 * The four-stage framework. Names, descriptions and prices mirror the
 * homepage and the contact form — keep them in sync here.
 */
export const TIERS: Tier[] = [
  {
    numeral: "I",
    name: "Nebula — Mythos Audit",
    tagline: "The Awakening",
    description:
      "A focused 60-90 minute session where we diagnose your story and map your clearest next move.",
    price: "From $150",
    includes: [
      "60–90 minute deep-dive session",
      "Diagnosis of your current story",
      "Your clearest-next-move map",
      "No pressure, no obligation",
    ],
  },
  {
    numeral: "II",
    name: "Neutron — Narrative System",
    tagline: "The Alignment",
    description:
      "We build your identity, story, and voice into one clear system your whole brand can run on.",
    price: "From $2,500",
    includes: [
      "Brand story bible — story, characters, rules",
      "Identity, voice and messaging system",
      "One shared playbook for every collaborator",
      "Direction that stays consistent across releases",
    ],
  },
  {
    numeral: "III",
    name: "Nova — World Build",
    tagline: "The Becoming",
    description:
      "The full package: identity, story, visuals, and a ready-to-launch creative system, built end to end.",
    price: "From $10,000",
    includes: [
      "Everything in Narrative System",
      "Visual identity and symbolic system",
      "Music, visuals and interactive deliverables",
      "Launch-ready creative system, end to end",
    ],
  },
  {
    numeral: "IV",
    name: "Orbit — Ongoing Direction",
    tagline: "The Continuum",
    description:
      "Monthly creative direction to keep everything consistent and moving after launch.",
    price: "From $750/mo",
    includes: [
      "Monthly creative direction",
      "Consistency across every release and asset",
      "Fast turnaround on new deliverables",
      "A standing creative partner, not a vendor",
    ],
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
