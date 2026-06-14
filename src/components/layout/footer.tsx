"use client";

import { siteData } from "@/lib/data";
import { NCLogo } from "@/components/ui/nc-logo";
import { Mail, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <NCLogo size={36} />
              <span className="text-lg font-bold text-foreground">
                {siteData.personal.name}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              AI Automation Specialist helping businesses streamline operations,
              automate workflows, and scale through intelligent systems.
            </p>
            <div className="flex gap-3">
              <a
                href={`mailto:${siteData.personal.email}`}
                className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={siteData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Expertise", href: "#expertise" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "AI Automation Consulting",
                "Workflow Design & Implementation",
                "Customer Success Systems",
                "Project Management",
                "Business Process Optimization",
                "API Integrations",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteData.personal.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}