import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import {
  AutomationShowcase,
  FinalCta,
  PricingSection,
  ProcessSection,
  ServicesSection,
} from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Web Development & AI Automation — Jay Dewangan" },
      {
        name: "description",
        content:
          "Web development, AI agent development, AI voice agents, chatbots, business automation, and API integrations for growing businesses.",
      },
      { property: "og:title", content: "Services | Web Development & AI Automation" },
      {
        property: "og:description",
        content:
          "Websites, AI agents, voice agents, chatbots, automation workflows, and integrations built end to end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/services" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services | Web Development & AI Automation" },
      {
        name: "twitter:description",
        content:
          "Websites, AI agents, voice agents, chatbots, automation workflows, and integrations built end to end.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/services",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Service",
              position: 1,
              name: "Web Development",
              description: "High-performance marketing sites, SaaS frontends, and custom web applications.",
              provider: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Service",
              position: 2,
              name: "AI Agent Development",
              description: "Autonomous agents that research, draft, summarize, triage, and route work through your tools.",
              provider: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Service",
              position: 3,
              name: "AI Voice Agents",
              description: "Conversational voice agents for phone and web calls in Hindi, English, and Hinglish.",
              provider: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Service",
              position: 4,
              name: "AI Chatbots",
              description: "Website and WhatsApp chatbots grounded in your business knowledge base.",
              provider: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Service",
              position: 5,
              name: "Business Automation",
              description: "n8n, Make, and webhook workflows that move data and trigger actions without manual work.",
              provider: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Service",
              position: 6,
              name: "API & Tool Integrations",
              description: "Connect CRMs, payments, calendars, ERPs, and databases into one clean data flow.",
              provider: { "@id": "https://jaydewangan.com/#person" },
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="Services"
          title={
            <>
              Websites, AI Agents, and <span className="text-gradient">Automation Systems</span>.
            </>
          }
          subtitle="Six service areas that combine into one working system for your business."
        />
      </Section>
      <ServicesSection />
      <AutomationShowcase />
      <ProcessSection />
      <PricingSection />
      <FinalCta />
    </>
  );
}
