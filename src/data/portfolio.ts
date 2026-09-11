export const profile = {
  name: "Jay Dewangan",
  title: "Freelance Web Developer & AI Agent Automation Specialist",
  positioning:
    "I'm an independent freelance developer building high-performance websites and AI-powered automation systems. You hire me directly — one point of contact, clear scope, fixed or hourly.",
  availability: "Freelance — available for new projects",
  email: "jaydewanganbusiness@gmail.com",
  emailLink: "mailto:jaydewanganbusiness@gmail.com",
  whatsapp: "+91 7224050204",
  whatsappLink: "https://wa.me/917224050204",
  location: "India — working with clients worldwide",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jaydewangan" },
    { label: "GitHub", href: "https://github.com/Jay19102002" },
  ],
  specialties: [
    "Full-Stack Web Development",
    "AI Agent Development",
    "AI Voice Agents",
    "AI Chatbots",
    "Business Automation",
    "CRM Automation",
    "API Integrations",
    "Workflow Automation",
    "SaaS Development",
  ],
};

export const heroStats = [
  { value: "50+", label: "Projects" },
  { value: "20+", label: "Businesses Helped" },
  { value: "24/7", label: "AI Automation" },
  { value: "100%", label: "Custom Solutions" },
];

export const resultStats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "20+", label: "Businesses Supported" },
  { value: "1000+", label: "Hours Automated" },
  { value: "24/7", label: "AI Automation" },
  { value: "99%", label: "Client Satisfaction" },
];

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline:
      "Modern, responsive, high-performance websites for businesses, startups, and personal brands.",
    items: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
      "E-commerce websites",
      "SaaS websites",
      "Custom web applications",
      "Admin dashboards",
      "Full-stack applications",
      "API integrations",
      "Website redesigns",
    ],
  },
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    tagline:
      "Intelligent AI agents that understand users, access business information, and perform useful tasks.",
    items: [
      "AI customer-support agents",
      "AI sales agents",
      "AI lead qualification agents",
      "AI appointment agents",
      "AI internal business agents",
      "Custom AI assistants",
    ],
  },
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents",
    tagline: "Voice agents that answer and place calls like a trained team member.",
    items: [
      "Answer phone calls",
      "Make outbound calls",
      "Qualify leads",
      "Answer FAQs",
      "Book appointments",
      "Follow up with customers",
      "Transfer calls to humans",
      "Handle customer support",
    ],
    note: "Hindi • English • Hinglish • Multilingual",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    tagline: "Always-on chat that converts visitors and resolves questions instantly.",
    items: [
      "Websites",
      "WhatsApp",
      "Customer support",
      "Lead generation",
      "Sales",
      "FAQs",
      "Appointment booking",
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    tagline: "Automate repetitive business processes using AI and integrations.",
    items: [
      "Lead automation",
      "CRM automation",
      "Email automation",
      "WhatsApp automation",
      "Appointment automation",
      "Customer follow-up",
      "Data processing",
      "Notifications",
      "Document workflows",
      "Reporting automation",
    ],
  },
  {
    slug: "api-integration",
    title: "API & Tool Integration",
    tagline: "Connect the business systems you already use into one flow.",
    items: [
      "Google Workspace",
      "WhatsApp",
      "CRM platforms",
      "Payment systems",
      "Calendars",
      "Email platforms",
      "LLM APIs",
      "Voice platforms",
      "Custom APIs",
      "Webhooks",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  problem: string;
  solution: string;
  technology: string[];
  implementation: string[];
  results: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "ai-voice-agent-platform",
    title: "AI Voice Agent Platform",
    category: "AI Automation",
    description:
      "A complete AI voice-agent platform that helps businesses automate inbound and outbound calls, qualify leads, book appointments, and handle customer support.",
    features: [
      "AI voice agent",
      "Call automation",
      "Lead qualification",
      "Appointment booking",
      "Call transcripts",
      "Analytics",
      "CRM integration",
    ],
    problem:
      "The business missed a large share of inbound calls outside working hours and had no consistent way to follow up on new enquiries. Every call had to be handled manually by a small sales team.",
    solution:
      "A voice-agent platform where each business can configure an AI caller with its own script, knowledge base, qualification questions, and calendar. Calls are handled end to end and escalated to a human only when needed.",
    technology: [
      "Antigravity",
      "Vibe Coding",
      "ElevenLabs",
      "Claude",
      "N8N",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "OpenAI APIs",
      "Speech-to-Text",
      "Text-to-Speech",
      "Telephony APIs",
      "Webhooks",
    ],
    implementation: [
      "Telephony webhook receives the call and streams audio to the speech-to-text layer.",
      "The agent reasons over the business knowledge base and qualification rules in real time.",
      "Responses are synthesised back to the caller with low-latency text-to-speech.",
      "Qualified leads are written to the CRM and an appointment slot is booked on the calendar.",
      "Transcripts, recordings, and outcomes appear in the analytics dashboard.",
    ],
    results: [
      { value: "24/7", label: "Call coverage" },
      { value: "80%", label: "Calls fully automated" },
      { value: "3x", label: "Faster lead response" },
      { value: "~120 hrs", label: "Saved per month" },
    ],
  },
  {
    slug: "real-estate-ai-automation",
    title: "Real Estate AI Automation",
    category: "AI + Real Estate",
    description:
      "An AI-powered system that automatically contacts real-estate leads, understands property requirements, qualifies prospects, and schedules site visits.",
    features: [
      "AI lead qualification",
      "Automated calling",
      "WhatsApp follow-up",
      "Appointment scheduling",
      "CRM updates",
    ],
    problem:
      "Portal leads arrived in bulk but agents contacted them hours later, by which time prospects had already spoken to a competitor. Requirements were never recorded consistently.",
    solution:
      "An automation layer that calls and messages every new lead within seconds, captures budget, location, and configuration, then books site visits directly into the agent's calendar.",
    technology: [
      "N8N",
      "ElevenLabs",
      "Antigravity",
      "Vibe Coding",
      "Node.js",
      "OpenAI APIs",
      "WhatsApp Business API",
      "Telephony APIs",
      "Supabase",
    ],
    implementation: [
      "Portal and website leads are pushed into a single intake webhook.",
      "The AI voice agent calls instantly; unanswered leads move to a WhatsApp sequence.",
      "Requirements are extracted into structured fields and scored against inventory.",
      "Hot leads get a site-visit slot; cold leads enter a nurture cadence.",
      "Every interaction syncs to the CRM with a full conversation summary.",
    ],
    results: [
      { value: "<30 sec", label: "Lead response time" },
      { value: "+42%", label: "Site visits booked" },
      { value: "5x", label: "Leads handled per agent" },
      { value: "-35%", label: "Cost per qualified lead" },
    ],
  },
  {
    slug: "business-website",
    title: "Business Website",
    category: "Web Development",
    description:
      "A premium conversion-focused business website designed to generate leads and communicate services clearly.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Contact forms",
      "WhatsApp integration",
      "CMS/content management",
      "Analytics",
    ],
    problem:
      "The company relied on referrals and an outdated site that loaded slowly, ranked poorly, and gave visitors no clear next step.",
    solution:
      "A rebuilt, content-managed website with sharp service positioning, fast page loads, structured SEO, and multiple conversion paths including WhatsApp.",
    technology: [
      "Antigravity",
      "Claude",
      "Vibe Coding",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "REST APIs",
      "Analytics",
    ],
    implementation: [
      "Content and service architecture mapped to real buyer questions.",
      "Component-driven build with image optimisation and Core Web Vitals budget.",
      "Structured data, metadata, and sitemap wired for search visibility.",
      "Form submissions routed to email, CRM, and WhatsApp notifications.",
      "Editable content model so the team can publish without a developer.",
    ],
    results: [
      { value: "2.1x", label: "More enquiries" },
      { value: "-64%", label: "Page load time" },
      { value: "+180%", label: "Organic impressions" },
      { value: "98", label: "Performance score" },
    ],
  },
  {
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    category: "AI Agent",
    description:
      "An intelligent customer-support agent trained on business documentation, FAQs, products, and policies.",
    features: [
      "Knowledge-base integration",
      "Natural-language conversations",
      "Automated support",
      "Human escalation",
      "Conversation history",
    ],
    problem:
      "Support handled the same questions repeatedly across email and WhatsApp, with slow first-response times and inconsistent answers.",
    solution:
      "A retrieval-augmented support agent that answers from approved company content, keeps context across a conversation, and hands off cleanly to a human when confidence is low.",
    technology: [
      "Antigravity",
      "Vibe Coding",
      "ElevenLabs",
      "N8N",
      "Python",
      "OpenAI APIs",
      "RAG",
      "Vector Databases",
      "PostgreSQL",
      "React",
      "Webhooks",
    ],
    implementation: [
      "Documentation, policies, and product data indexed into a vector store.",
      "Every answer is grounded in retrieved sources to prevent invented replies.",
      "Confidence thresholds and intent rules trigger human escalation.",
      "Conversation history is stored for auditing and continuous tuning.",
      "Deployed to the website widget and WhatsApp from one shared brain.",
    ],
    results: [
      { value: "72%", label: "Tickets auto-resolved" },
      { value: "<10 sec", label: "First response" },
      { value: "-50%", label: "Support workload" },
      { value: "4.8/5", label: "Customer rating" },
    ],
  },
  {
    slug: "automation-dashboard",
    title: "Automation Dashboard",
    category: "Full-Stack Development",
    description:
      "A business dashboard for monitoring automated workflows, leads, calls, customers, and AI-agent activity.",
    features: [
      "Analytics",
      "User management",
      "AI activity",
      "Lead tracking",
      "Reports",
      "API integrations",
    ],
    problem:
      "Automation was running across several tools with no single place to see what happened, what failed, or what it was worth.",
    solution:
      "A full-stack dashboard that aggregates workflow runs, AI-agent conversations, calls, and lead outcomes into one operational view with alerts and exports.",
    technology: [
      "Antigravity",
      "Vibe Coding",
      "N8N",
      "ElevenLabs",
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "Webhooks",
      "Tailwind CSS",
    ],
    implementation: [
      "Each automation posts run events to a unified ingestion endpoint.",
      "Events are normalised into leads, conversations, calls, and jobs.",
      "Role-based access separates owners, managers, and operators.",
      "Failure alerts fire to email and WhatsApp with retry controls.",
      "Scheduled reports summarise volume, outcomes, and time saved.",
    ],
    results: [
      { value: "1 view", label: "For every workflow" },
      { value: "-90%", label: "Time spent reporting" },
      { value: "99.5%", label: "Workflow uptime" },
      { value: "Real-time", label: "Failure alerts" },
    ],
  },
];

export const techStack = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "Webhooks"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Puter"] },
  {
    category: "AI & Development",
    items: ["Antigravity", "Vibe Coding", "OpenAI APIs", "AI Agents", "LLMs", "RAG", "Vector Databases", "AI Workflows", "Puter AI"],
  },
  { category: "Automation", items: ["N8N", "Zapier", "Make", "Webhooks", "API automation"] },
  {
    category: "Voice AI",
    items: ["ElevenLabs", "AI Voice APIs", "Speech-to-Text", "Text-to-Speech", "Telephony APIs"],
  },
];

export const workflows = [
  {
    title: "Website lead to booked meeting",
    steps: [
      "Website Lead",
      "AI Agent",
      "Qualification",
      "CRM",
      "Follow-Up",
      "Appointment",
      "Human Sales Team",
    ],
  },
  {
    title: "Inbound call to confirmed appointment",
    steps: [
      "Incoming Call",
      "AI Voice Agent",
      "Customer Questions",
      "Qualification",
      "Calendar",
      "Appointment Booked",
    ],
  },
  {
    title: "Customer message to resolved query",
    steps: [
      "Customer Message",
      "AI Chatbot",
      "Knowledge Base",
      "Answer",
      "CRM Update",
      "Notification",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    body: "Understand the business, requirements, goals, and challenges.",
  },
  {
    number: "02",
    title: "Strategy",
    body: "Design the website, AI agent, automation workflow, or complete system.",
  },
  {
    number: "03",
    title: "Development",
    body: "Build the solution using modern technologies.",
  },
  {
    number: "04",
    title: "Testing",
    body: "Test functionality, integrations, performance, security, and user experience.",
  },
  {
    number: "05",
    title: "Launch",
    body: "Deploy the project and connect all required systems.",
  },
  {
    number: "06",
    title: "Support",
    body: "Provide maintenance, improvements, automation updates, and technical support.",
  },
];

export const whyWorkWithMe = [
  {
    title: "Business-Focused Development",
    body: "Technology should solve a real business problem — not add another tool to manage.",
  },
  {
    title: "Custom Solutions",
    body: "No unnecessary templates or one-size-fits-all systems.",
  },
  {
    title: "AI + Web Expertise",
    body: "Websites, AI agents, APIs, and automation combined into one solution.",
  },
  {
    title: "Scalable Architecture",
    body: "Systems built to grow with the business, not to be rebuilt in a year.",
  },
  {
    title: "Fast Communication",
    body: "Clear, direct communication throughout the project.",
  },
  {
    title: "Long-Term Support",
    body: "Continuous improvement and maintenance after launch.",
  },
];

export const testimonials = [
  {
    quote:
      "Jay completely transformed our online presence and automated our lead follow-up. We now respond to new enquiries within seconds instead of hours.",
    name: "Rahul Mehta",
    company: "Skyline Realty",
    industry: "Real Estate",
    projectType: "AI Automation",
  },
  {
    quote:
      "The AI voice agent handles our after-hours calls better than we expected. Appointments get booked while the team is asleep.",
    name: "Priya Nair",
    company: "Clarity Dental Studio",
    industry: "Healthcare",
    projectType: "AI Voice Agent",
  },
  {
    quote:
      "Our new website finally explains what we do. Enquiries doubled in the first two months and the team can update content themselves.",
    name: "Aman Gupta",
    company: "Nexa Interiors",
    industry: "Interior Design",
    projectType: "Business Website",
  },
  {
    quote:
      "He understood our workflow before writing a line of code. The automation removed an entire day of manual work every week.",
    name: "Sarah Whitfield",
    company: "Northbridge Consulting",
    industry: "B2B Services",
    projectType: "Business Automation",
  },
  {
    quote:
      "The support agent answers product questions accurately and escalates the tricky ones. Our support load dropped by half.",
    name: "Vikram Shetty",
    company: "Loopware",
    industry: "SaaS",
    projectType: "AI Agent",
  },
];

export const pricing = [
  {
    name: "Website Starter",
    price: "Starting from ₹25,000",
    includes: [
      "Professional website",
      "Responsive design",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO",
      "Deployment",
    ],
    cta: "Get Website",
  },
  {
    name: "Business Website",
    price: "Starting from ₹60,000",
    featured: true,
    includes: [
      "Custom website",
      "Multiple pages",
      "Lead-generation forms",
      "WhatsApp integration",
      "Analytics",
      "SEO",
      "CMS/content management",
      "Third-party integrations",
    ],
    cta: "Build My Website",
  },
  {
    name: "AI Automation",
    price: "Starting from ₹30,000",
    includes: [
      "Custom AI agent",
      "Business knowledge base",
      "Workflow automation",
      "API integrations",
      "CRM integration",
      "Testing",
      "Deployment",
    ],
    cta: "Automate My Business",
  },
  {
    name: "AI Voice Agent",
    price: "Starting from ₹45,000 setup",
    priceNote: "Plus applicable usage / telephony charges.",
    includes: [
      "Custom AI voice agent",
      "Voice configuration",
      "Business knowledge",
      "Call workflow",
      "Lead qualification",
      "Appointment booking",
      "Call transfer",
      "Deployment",
    ],
    cta: "Build My Voice Agent",
  },
];

export const faqs = [
  {
    q: "What services do you provide?",
    a: "Web development, AI agents, AI voice agents, chatbots, business automation, API integrations, and custom software development.",
  },
  {
    q: "Can you build a complete website from scratch?",
    a: "Yes. The website can be designed, developed, integrated, optimized, and deployed from scratch — including content structure, SEO, and analytics.",
  },
  {
    q: "Can you build an AI voice agent for my business?",
    a: "Yes. AI voice agents can be customized for sales, support, lead qualification, appointment booking, and other workflows, in Hindi, English, Hinglish, or multiple languages.",
  },
  {
    q: "Can you integrate AI with my existing CRM?",
    a: "Yes. CRM, calendars, WhatsApp, websites, APIs, and other business systems can be connected so data flows in one place.",
  },
  {
    q: "Do you take on freelance contracts and retainers?",
    a: "Yes. I work freelance on fixed-scope projects, hourly engagements, and ongoing monthly retainers — whichever fits your budget and workload.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. I work with both Indian and international clients, with communication and delivery adapted to your timezone.",
  },
  {
    q: "How long does a project take?",
    a: "Landing pages typically take 1–2 weeks, business websites 2–4 weeks, AI agents and chatbots 2–4 weeks, and voice agents or full automation systems 3–6 weeks depending on complexity.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. Ongoing maintenance, monitoring, automation updates, and technical support are available as a monthly engagement.",
  },
  {
    q: "Can I request a custom solution?",
    a: "Absolutely. Most projects are custom. Reach out via the contact form and we'll scope the right approach for your business.",
  },
];

export const availabilityFor = [
  "Website development",
  "AI automation",
  "AI voice agents",
  "Custom AI agents",
  "Business automation",
  "Long-term development partnerships",
];

export const projectTypes = [
  "Website",
  "Web Application",
  "AI Agent",
  "AI Voice Agent",
  "Chatbot",
  "Business Automation",
  "API Integration",
  "Other",
];

export const budgets = [
  "Under ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
];

export const footerNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Technologies", to: "/technologies" },
  { label: "Process", to: "/process" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;
