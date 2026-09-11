import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { CtaLink } from "./primitives";
import jayAvatar from "@/assets/pro.jpg";

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
      <div className="glass-panel mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={jayAvatar}
            alt="Jay Dewangan portrait"
            className="h-9 w-9 rounded-full object-cover object-center ring-1 ring-primary/40"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold">{profile.name}</span>
            <span className="text-[11px] text-muted-foreground">
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
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass-panel flex h-9 w-9 items-center justify-center rounded-xl lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="glass-panel mx-auto mt-2 grid w-full max-w-6xl grid-cols-2 gap-1 rounded-2xl p-3 lg:hidden">
          {[...nav, { label: "Contact", to: "/contact" }].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-glass hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
