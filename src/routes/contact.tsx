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
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/contact" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | Start a Project with Jay Dewangan" },
      {
        name: "twitter:description",
        content:
          "Tell me what you're building and I'll help you choose the right technology and automation approach.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/contact",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Jay Dewangan",
          url: "https://jaydewangan.com/contact",
          mainEntity: {
            "@type": "Person",
            name: "Jay Dewangan",
            email: "jaydewanganbusiness@gmail.com",
            telephone: "+917224050204",
            url: "https://jaydewangan.com",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactSection headingAs="h1" />
      <AvailabilitySection />
      <FinalCta />
    </>
  );
}
