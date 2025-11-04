import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

/* ====== NAV ====== */
export const navLinks = [
  { id: "home",      title: "Home" },
  { id: "services",  title: "Services" },
  { id: "solutions", title: "Solutions" },
  { id: "clients",   title: "Clients" },
  { id: "contact",   title: "Contact" },
];

/* ====== FEATURE CARDS (Homepage sections) ====== */
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Gen-AI Strategy & Use-Case Design",
    content:
      "Identify high-impact, feasible AI opportunities. We turn fuzzy ideas into clear roadmaps, KPIs, and quick wins.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Security, Privacy & Governance",
    content:
      "Ship with confidence. We design solutions with data protection, compliance, and responsible AI built in.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Build, Integrate & Launch Fast",
    content:
      "From PoC to production: we implement LLMs, CRM and Data products, integrate with your stack, and measure ROI.",
  },
];

/* ====== TESTIMONIALS ====== */
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Inno-Craft helped us choose the right Gen-AI use cases and delivered a working MVP in weeks.",
    name: "Herman Jensen",
    title: "Chief Digital Officer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Their governance and security approach made stakeholders comfortable to scale AI across teams.",
    name: "Steve Mark",
    title: "Head of Technology",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Clear roadmap, measurable impact. Exactly the partner we needed to move from slides to shipped products.",
    name: "Kenn Gallagher",
    title: "VP, Product",
    img: people03,
  },
];

/* ====== KPIs / STATS STRIP ====== */
export const stats = [
  { id: "stats-1", title: "Projects Delivered", value: "40+" },
  { id: "stats-2", title: "Enterprise Clients", value: "25+" },
  { id: "stats-3", title: "Avg. ROI Uplift",   value: "3.5×" },
];

/* ====== FOOTER LINKS ====== */
export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", link: "#home" },
      { name: "Services", link: "#services" },
      { name: "Solutions", link: "#solutions" },
      { name: "Clients", link: "#clients" },
      { name: "Contact", link: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", link: "#solutions" },
      { name: "Playbooks", link: "#services" },
      { name: "Blog", link: "#" },
      { name: "Privacy & Terms", link: "#" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "hello@inno-craft.com", link: "mailto:hello@inno-craft.com" },
      { name: "LinkedIn", link: "https://www.linkedin.com/" },
    ],
  },
];

/* ====== SOCIAL ====== */
export const socialMedia = [
  { id: "social-media-1", icon: linkedin, link: "https://www.linkedin.com/" },
  { id: "social-media-2", icon: twitter,  link: "https://www.twitter.com/" },
  { id: "social-media-3", icon: facebook, link: "https://www.facebook.com/" },
  { id: "social-media-4", icon: instagram,link: "https://www.instagram.com/" },
];

/* ====== CLIENT LOGOS (placeholder) ====== */
export const clients = [
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];
