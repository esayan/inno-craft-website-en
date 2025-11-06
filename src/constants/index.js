import {
  // icons
  send,
  shield,
  star,
  // socials
  linkedin,
} from "../assets";

/* ====== NAV ====== */
export const navLinks = [
  { id: "home",     title: "Home" },
  { id: "services", title: "Our Services" },
  { id: "contact",  title: "Contact Us" },
];

/* ====== HERO / IMPACT STRIP (short, punchy wins) ====== */
export const impact = [
  { id: "impact-1", text: "Turn AI from slides into shipped products—in weeks, not months." },
  { id: "impact-2", text: "Lift conversion & retention with AI-assisted journeys and CRM automation." },
  { id: "impact-3", text: "Cut manual work with GenAI copilots; free people for higher-value tasks." },
  { id: "impact-4", text: "Governance and security by design—scale AI with confidence." },
];

/* ====== FEATURES (What we do) ====== */
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "GenAI Awareness · Discovery · Build · Scale-up",
    content:
      "From maturity assessment and use-case discovery to strategy, roadmap, implementation and scale-up. We identify the right use cases, define KPIs, build MVPs, and operationalize GenAI across teams.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "AI-Focused Digital Transformation",
    content:
      "AI-first redesign of people, organization, governance, technology, and processes. We assess current maturity, model the TO-BE, build the roadmap, and deliver implementation with measurable outcomes.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "CRM Salesforce Implementation",
    content:
      "End-to-end CRM: needs analysis, process design, Salesforce configuration & integration, data & analytics, enablement and ongoing care—so CRM becomes a growth engine, not just a database.",
  },
];

/* ====== ABOUT ====== */
export const about = {
  headline: "We craft AI-driven transformation.",
  subline:
    "Inno-Craft is a boutique consultancy focused on GenAI strategy & roadmap, Salesforce CRM implementation, and AI-first digital transformation.",
  bullets: [
    "Pragmatic roadmaps tied to KPIs",
    "Responsible AI, governance & security baked in",
    "From PoC to production and scale-up",
  ],
};

/* ====== TESTIMONIALS (keep empty until you have references) ====== */
export const feedback = [];

/* ====== KPIs / STATS (optional) ====== */
export const stats = [
  { id: "stats-1", title: "Core Practices", value: "GenAI · AI-DX · CRM" },
  { id: "stats-2", title: "Delivery Focus", value: "Roadmap → MVP → Scale" },
  { id: "stats-3", title: "Obsessed With", value: "Measurable ROI" },
];

/* ====== FOOTER ====== */
export const footerLinks = [
  {
    title: "Navigate",
    links: [
      { name: "Home", link: "#home" },
      { name: "Our Services", link: "#services" },
      { name: "Contact Us", link: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "GenAI Awareness · Discovery · Build · Scale-up", link: "#services" },
      { name: "AI-Focused Digital Transformation", link: "#services" },
      { name: "CRM Salesforce Implementation", link: "#services" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "esayan@inno-craft.com", link: "mailto:esayan@inno-craft.com" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/enginsayan/" },
    ],
  },
];

/* ====== SOCIAL (LinkedIn only) ====== */
export const socialMedia = [
  { id: "social-media-1", icon: linkedin, link: "https://www.linkedin.com/in/enginsayan/" },
];

/* ====== CLIENT LOGOS (removed for now) ====== */
export const clients = []; // keep empty; hide section in component if length===0
