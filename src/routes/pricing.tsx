import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { FaqSection, FinalCta, PricingSection } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Website & AI Automation Packages — Jay Dewangan" },
      {
        name: "description",
        content:
          "Websites from ₹6,999, business websites from ₹19,999, AI automation from ₹14,999, and AI voice agents from ₹19,999 setup.",
      },
      { property: "og:title", content: "Pricing | Website & AI Automation Packages" },
      {
        property: "og:description",
        content: "Transparent starting packages for websites, AI agents, and automation systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/pricing" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pricing | Website & AI Automation Packages — Jay Dewangan" },
      {
        name: "twitter:description",
        content: "Transparent starting packages for websites, AI agents, and automation systems.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/pricing",
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
              "@type": "Offer",
              position: 1,
              name: "Website Starter",
              price: "6999",
              priceCurrency: "INR",
              description: "Professional website, responsive design, contact form, WhatsApp integration, basic SEO, deployment.",
              seller: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Offer",
              position: 2,
              name: "Business Website",
              price: "19999",
              priceCurrency: "INR",
              description: "Custom website, multiple pages, lead-gen forms, WhatsApp, analytics, SEO, CMS, integrations.",
              seller: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Offer",
              position: 3,
              name: "AI Automation",
              price: "14999",
              priceCurrency: "INR",
              description: "Custom AI agent, business knowledge base, workflow automation, API & CRM integrations.",
              seller: { "@id": "https://jaydewangan.com/#person" },
            },
            {
              "@type": "Offer",
              position: 4,
              name: "AI Voice Agent",
              price: "19999",
              priceCurrency: "INR",
              description: "Custom AI voice agent, telephony setup, call workflows, lead qualification, appointment booking.",
              seller: { "@id": "https://jaydewangan.com/#person" },
            },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="Pricing"
          title={
            <>
              Starting Packages, <span className="text-gradient">Custom Outcomes</span>.
            </>
          }
          subtitle="Pick the closest starting point — the final scope is always shaped around your business."
        />
      </Section>
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
