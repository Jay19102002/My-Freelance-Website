import { createFileRoute } from "@tanstack/react-router";
import { AgentDemo } from "@/components/site/AgentDemo";
import { ContactSection } from "@/components/site/ContactSection";
import {
  AboutSection,
  AutomationShowcase,
  AvailabilitySection,
  FaqSection,
  FinalCta,
  Hero,
  PricingSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  StatsSection,
  TechSection,
  TestimonialsSection,
  WhySection,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "google-site-verification",
        content: "iUCYK9yJUYmTPuATMMmD2PqqCsNL4Vqpo1iLIviNwdc",
      },
      { title: "Jay Dewangan | Web Developer & AI Agent Automation Specialist" },
      {
        name: "description",
        content:
          "Jay Dewangan builds high-performance websites, AI agents, voice agents, chatbots, and business automation systems for startups and businesses.",
      },
      {
        property: "og:title",
        content: "Jay Dewangan | Web Developer & AI Agent Automation Specialist",
      },
      {
        property: "og:description",
        content:
          "Websites, AI agents, voice agents, chatbots, and automation systems that help businesses work smarter.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection compact />
      <ServicesSection />
      <ProjectsSection limit={4} />
      <TechSection />
      <AutomationShowcase />
      <AgentDemo />
      <ProcessSection />
      <WhySection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <AvailabilitySection />
      <ContactSection />
      <FinalCta />
    </>
  );
}
