import {
  send,
  shield,
  star,
  linkedin,
} from "../assets";

/* ====== NAV ====== */
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "framework", title: "Framework" },
  { id: "engagement", title: "How We Engage" },
  { id: "impact", title: "Impact" },
  { id: "ventures", title: "Labs" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

/* ====== HERO ROTATING WORDS ====== */
export const heroRotatingLines = [
  "Train your teams on AI & Agentic AI workflows",
  "Architect enterprise-grade Agentic AI agents",
  "Deliver Gen-AI strategy to production at scale",
  "Staff your Salesforce CRM & technology projects",
];

/* ====== STATS (Hero strip) ====== */
export const stats = [
  { id: "stats-1", value: "$4–6x", title: "ROI per $1 invested in AI" },
  { id: "stats-2", value: "100+", title: "Enterprise Clients" },
  { id: "stats-3", value: "10+", title: "Industry Sectors" },
  { id: "stats-4", value: "30~", title: "Years Experience" },
];

/* ====== SERVICES (5 domains) ====== */
export const services = [
  {
    id: "service-1",
    icon: star,
    title: "AI Strategy & Governance",
    content:
      "Enterprise AI vision & roadmap, maturity assessments, AI policy & governance model design, risk classification & regulatory compliance (EU AI Act, ISO 42001), and AI Center of Excellence (CoE) design.",
  },
  {
    id: "service-2",
    icon: shield,
    title: "Agentic AI & Intelligent Automation",
    content:
      "Gen-AI MVP & pilot implementations, RAG-based enterprise applications, agentic AI agents workflow design & deployment, model validation, bias detection, explainability, and MLOps / LLMOps implementation.",
  },
  {
    id: "service-3",
    icon: send,
    title: "Customer Intelligence & Salesforce CRM",
    content:
      "AI-powered CRM strategy, Salesforce CRM consulting & CX transformation, marketing automation & personalization, Customer 360 analytics, and Next Best Action systems.",
  },
  {
    id: "service-4",
    icon: star,
    title: "Data & Cloud Foundations for AI",
    content:
      "Cloud transformation & migration, enterprise data architecture, OT-IT integration (IoT / IIoT), IT cost optimization, and enterprise application modernization.",
  },
  {
    id: "service-5",
    icon: shield,
    title: "Staffing & Talent Services",
    content:
      "Salesforce certified specialists, AI/ML engineers, Gen-AI agents developers, data engineers, cloud architects, project managers — staffing the right talent for your Salesforce, AI, and technology projects.",
  },
];

/* ====== 7P FRAMEWORK ====== */
export const frameworkPillars = [
  { id: "p-1", name: "Purpose", items: ["Strategy", "Vision", "Value Alignment", "Prioritization"] },
  { id: "p-2", name: "Process", items: ["Use-Case Definition", "Risk Classification", "MLOps / LLMOps"] },
  { id: "p-3", name: "Protection", items: ["Governance", "Risk & Security", "Compliance", "Ethical AI"] },
  { id: "p-4", name: "Playbook", items: ["Standards & Runbooks", "Operating Model", "Guardrails"] },
  { id: "p-5", name: "Performance", items: ["KPIs & ROI Metrics", "Drift Monitoring", "Improvement Cycles"] },
  { id: "p-6", name: "Platform", items: ["AI Architecture", "Data Foundation", "RAG & Agents Stack"] },
  { id: "p-7", name: "People", items: ["AI Literacy & Talent", "Culture & RACI", "Governance Boards"] },
];

/* ====== HOW WE ENGAGE (4 steps) ====== */
export const engagementSteps = [
  {
    id: "step-1",
    step: "01",
    title: "AI Maturity Diagnostic",
    description: "Comprehensive assessment of AI capabilities, data readiness, governance maturity, and organizational preparedness.",
    deliverable: "AI Maturity Scorecard & Gap Analysis Report",
    timeline: "2–4 weeks",
  },
  {
    id: "step-2",
    step: "02",
    title: "Opportunity Mapping Workshop",
    description: "Executive-facilitated workshop to identify high-value AI use cases, assess feasibility, and build a prioritized portfolio.",
    deliverable: "Prioritized Use-Case Portfolio with ROI Estimates",
    timeline: "1–2 weeks",
  },
  {
    id: "step-3",
    step: "03",
    title: "AI Transformation Roadmap",
    description: "Detailed transformation roadmap covering strategy, governance, technology, people, and delivery milestones.",
    deliverable: "Enterprise AI Transformation Roadmap",
    timeline: "3–6 weeks",
  },
  {
    id: "step-4",
    step: "04",
    title: "Implementation & Governance Setup",
    description: "Hands-on delivery of pilot AI initiatives with full governance framework, monitoring, and scale-up planning.",
    deliverable: "Production AI Solution & Governance Operating Model",
    timeline: "4–12 weeks",
  },
];

/* ====== BUSINESS IMPACT ====== */
export const impactStats = [
  { id: "imp-1", value: "30%", label: "Reduction in Operational Costs", sub: "Process automation and AI-driven optimization" },
  { id: "imp-2", value: "20%", label: "Improvement in Customer Retention", sub: "Predictive analytics and next-best-action engines" },
  { id: "imp-3", value: "3x", label: "Faster Decision Cycles", sub: "Real-time analytics and AI-powered insights" },
  { id: "imp-4", value: "50%", label: "Accelerated AI Adoption", sub: "Structured governance and change management" },
];

export const clientEngagements = [
  { id: "ce-1", sector: "Aviation", type: "Data & AI Transformation", desc: "Identified high-impact automation opportunities; built feasibility-ROI portfolio; delivered actionable roadmap." },
  { id: "ce-2", sector: "Finance & Investment", type: "GenAI Strategy", desc: "Enterprise-wide GenAI roadmap; executive workshops; ROI-driven use-case prioritization." },
  { id: "ce-3", sector: "Mining", type: "Advanced Analytics", desc: "Demand forecasting; real-time operational analytics; cost reduction through predictive planning." },
  { id: "ce-4", sector: "Healthcare", type: "Advanced Analytics", desc: "Capacity and revenue optimization; physician performance analytics; data-driven decision culture." },
  { id: "ce-5", sector: "Insurance", type: "AI-Based Assessment", desc: "Deep learning image recognition; automated cost estimation; reduced manual intervention." },
  { id: "ce-6", sector: "Multi-Sector Holding", type: "AI Governance", desc: "Group-wide AI governance framework; risk classifications; AI Excellence Center structure." },
];

/* ====== ABOUT / LEADERSHIP ====== */
export const founderProfile = {
  name: "Engin Sayan",
  title: "Founder & AI Transformation Leader",
  stats: [
    { label: "Years Experience", value: "30~" },
    { label: "Years in AI", value: "10+" },
    { label: "Industry Sectors", value: "10+" },
    { label: "Enterprise Clients", value: "100+" },
  ],
  education: "Bogazici University — MBA & Computer Engineering",
  certs: "PMP, ITIL, eTOM, TAM",
  career: [
    { company: "KPMG Turkiye", role: "Partner, Next Generation Solutions Leader", desc: "Led AI, cloud, and digital transformation programs. Sponsored GenAI initiatives, Salesforce CRM programs, and government cloud strategy." },
    { company: "IBM Turkiye", role: "Cognitive Process Transformation Country Leader", desc: "Led consulting teams across advanced analytics, AI, and customer experience. Delivered CRM modernization and digital marketing automation." },
    { company: "Turkcell & Turkcell Technology", role: "Digital Channels & CRM Unit Manager", desc: "Led modernization of digital channels, CRM, and SFA applications. Delivered 37 projects as part of the 3G transformation program." },
    { company: "Vodafone Turkiye", role: "Business Intelligence Senior Manager", desc: "Led CRM, BI, data warehouse, and data operations teams. Managed enterprise data transformation programs." },
  ],
};

export const positioning = [
  "We are not an AI experiment lab.",
  "We are not an IT outsourcing company.",
  "We are an AI Operating Model partner for enterprises.",
];

/* ====== FOOTER ====== */
export const footerLinks = [
  {
    title: "Navigate",
    links: [
      { name: "Home", link: "#home" },
      { name: "Services", link: "#services" },
      { name: "Framework", link: "#framework" },
      { name: "How We Engage", link: "#engagement" },
      { name: "Inno-Craft Labs", link: "#ventures" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "AI Strategy & Governance", link: "#services" },
      { name: "Agentic AI & Automation", link: "#services" },
      { name: "Salesforce CRM Consulting", link: "#services" },
      { name: "AI & Salesforce Staffing", link: "#services" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { name: "esayan@inno-craft.com", link: "mailto:esayan@inno-craft.com" },
      { name: "+90 507 048 0418", link: "tel:+905070480418" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/enginsayan/" },
    ],
  },
];

/* ====== SOCIAL ====== */
export const socialMedia = [
  { id: "social-media-1", icon: linkedin, link: "https://www.linkedin.com/in/enginsayan/" },
];
