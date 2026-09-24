import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import { ElevenLabsWidget } from "@/components/site/ElevenLabsWidget";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jay Dewangan | Web Developer & AI Agent Automation Specialist" },
      {
        name: "description",
        content:
          "Jay Dewangan builds high-performance websites, AI agents, voice agents, chatbots, and business automation systems for startups and businesses.",
      },
      { name: "author", content: "Jay Dewangan" },
      {
        name: "keywords",
        content:
          "Web Developer in India, Freelance Web Developer, AI Automation Developer, AI Agent Developer, AI Voice Agent Developer, AI Automation Services, Business Automation, AI Chatbot Developer, Full Stack Developer, Custom AI Agent Development, AI Voice Automation, Website Development Services",
      },
      { property: "og:title", content: "Jay Dewangan | Web Developer & AI Automation Specialist" },
      {
        property: "og:description",
        content:
          "High-performance websites, AI agents, voice agents, chatbots, and business automation systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jay Dewangan | Web Developer & AI Automation Specialist" },
      {
        name: "twitter:description",
        content:
          "High-performance websites, AI agents, voice agents, chatbots, and business automation systems.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "google-site-verification",
        content: "iUCYK9yJUYmTPuATMMmD2PqqCsNL4Vqpo1iLIviNwdc",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/logo.jpg", type: "image/jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://jaydewangan.com/#person",
              name: "Jay Dewangan",
              jobTitle: "Freelance Web Developer & AI Agent Automation Specialist",
              url: "https://jaydewangan.com",
              email: "jaydewanganbusiness@gmail.com",
              telephone: "+917224050204",
              image: "https://jaydewangan.com/jd_logo.png",
              sameAs: [
                "https://www.linkedin.com/in/jaydewangan",
                "https://github.com/Jay19102002",
              ],
              knowsAbout: [
                "Full-Stack Web Development",
                "React",
                "TypeScript",
                "TanStack Start",
                "AI Agent Development",
                "AI Voice Agents",
                "AI Chatbots",
                "Business Process Automation",
                "CRM Integration",
                "API Integrations",
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://jaydewangan.com/#service",
              name: "Jay Dewangan — Freelance Web Development & AI Automation",
              url: "https://jaydewangan.com",
              logo: "https://jaydewangan.com/jd_logo.png",
              image: "https://jaydewangan.com/jd_logo.png",
              email: "jaydewanganbusiness@gmail.com",
              telephone: "+917224050204",
              priceRange: "$$",
              areaServed: "Worldwide",
              founder: {
                "@id": "https://jaydewangan.com/#person",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://jaydewangan.com/#website",
              url: "https://jaydewangan.com",
              name: "Jay Dewangan Portfolio",
              description:
                "High-performance websites, AI agents, voice agents, chatbots, and business automation systems.",
              publisher: {
                "@id": "https://jaydewangan.com/#person",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="iUCYK9yJUYmTPuATMMmD2PqqCsNL4Vqpo1iLIviNwdc"
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster position="top-right" />
      <ElevenLabsWidget />
    </QueryClientProvider>
  );
}

