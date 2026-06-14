"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Business-Focused Automation Specialist"
        description="Bridging the gap between operations and technology to deliver measurable business outcomes."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Photo & Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/header-2.png"
              alt="Nercy Joshua B. Centeno — AI Automation Specialist"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-semibold text-foreground">Nercy Joshua B. Centeno</p>
              <p className="text-xs text-muted">AI Automation Specialist · Client Success Manager · Project Manager</p>
            </div>
          </div>
          {siteData.about.story.slice(0, 2).map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {siteData.about.story.slice(2).map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}

          {/* Attributes */}
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Core Attributes</h3>
            <div className="flex flex-wrap gap-3">
              {siteData.about.attributes.map((attr) => (
                <span
                  key={attr}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-lg border border-accent/20"
                >
                  <CheckCircle size={14} />
                  {attr}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Facts</h3>
            <div className="space-y-4">
              {[
                { label: "Specialization", value: "AI Automation & Client Success" },
                { label: "Industries", value: "E-commerce, Gaming, Healthcare, Tech" },
                { label: "Focus", value: "Business Outcomes & Operational Excellence" },
                { label: "Availability", value: "Freelance & Full-Time Opportunities" },
              ].map((fact) => (
                <div key={fact.label} className="flex justify-between items-start gap-4">
                  <span className="text-sm text-muted shrink-0">{fact.label}</span>
                  <span className="text-sm font-medium text-foreground text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {"Let's Work Together"}
            </h3>
            <p className="text-sm text-muted mb-4">
              {"Whether you need automation consulting, project management, or a dedicated operations partner — I'm here to help your business scale."}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}