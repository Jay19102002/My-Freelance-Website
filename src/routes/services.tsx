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
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
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
