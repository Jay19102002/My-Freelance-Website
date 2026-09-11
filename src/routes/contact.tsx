import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";
import { AvailabilitySection, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Start a Website or AI Automation Project — Jay Dewangan" },
      {
        name: "description",
        content:
          "Send a project inquiry or chat on WhatsApp for websites, AI agents, voice agents, and business automation.",
      },
      { property: "og:title", content: "Contact | Start a Project with Jay Dewangan" },
      {
        property: "og:description",
        content:
          "Tell me what you're building and I'll help you choose the right technology and automation approach.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactSection />
      <AvailabilitySection />
      <FinalCta />
    </>
  );
}
