"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-surface/30">
      <SectionHeading
        label="Career Journey"
        title="Professional Experience"
        description="A progressive career path from customer support to AI automation specialization."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-12">
          {siteData.timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full ring-4 ring-background z-10" />

              {/* Spacer for left side on desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <div className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-3">{item.title}</h3>
                  <p className="text-sm text-accent mt-1">{item.company}</p>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-muted bg-background rounded-md border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}