import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { CtaLink } from "./primitives";
import jayAvatar from "@/assets/pro.jpg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Technologies", to: "/technologies" },
  { label: "Process", to: "/process" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="nav-solid mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={jayAvatar}
            alt="Jay Dewangan portrait"
            className="h-9 w-9 rounded-full object-cover object-center ring-1 ring-primary/40"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold">{profile.name}</span>
            <span className="text-[10px] text-muted-foreground sm:text-[11px]">
              Web Developer & AI Automation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CtaLink to="/contact" size="sm" className="hidden sm:inline-flex">
            Start a Project
          </CtaLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Toggle menu"
                className="nav-solid flex h-9 w-9 items-center justify-center rounded-xl lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-full max-w-xs flex-col justify-between border-l border-border bg-card p-6 text-foreground shadow-2xl"
            >
              <div className="flex flex-col">
                <SheetHeader className="pb-6 text-left">
                  <div className="flex items-center gap-3">
                    <img
                      src={jayAvatar}
                      alt="Jay Dewangan portrait"
                      className="h-10 w-10 rounded-full object-cover object-center ring-1 ring-primary/40"
                    />
                    <div className="flex flex-col leading-tight">
                      <SheetTitle className="font-display text-base font-semibold text-foreground">
                        {profile.name}
                      </SheetTitle>
                      <span className="text-xs text-muted-foreground">
                        Web Developer & AI Automation
                      </span>
                    </div>
                  </div>
                </SheetHeader>

                <nav className="flex flex-col gap-1 pt-2">
                  {[
                    { label: "Home", to: "/" },
                    ...nav,
                    { label: "Contact", to: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeProps={{ className: "bg-primary/10 text-primary font-medium" }}
                      className="flex items-center rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t border-border pt-6">
                <CtaLink
                  to="/contact"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Start a Project
                </CtaLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
