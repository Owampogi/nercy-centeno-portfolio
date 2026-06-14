"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { Calendar, Search, Cog, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Discovery Call",
    description: "We discuss your business challenges, goals, and current workflows. I ask the right questions to understand exactly what you need.",
  },
  {
    number: "02",
    icon: Search,
    title: "Strategy & Planning",
    description: "I analyze your processes, identify automation opportunities, and design a solution blueprint tailored to your specific business needs.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Implementation",
    description: "I build and deploy your automation workflows, integrate AI tools, and ensure everything works seamlessly with your existing systems.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Training & Support",
    description: "I provide documentation, SOPs, and hands-on training so your team can manage the systems confidently. Ongoing support available.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <SectionHeading
        label="How I Work"
        title="Simple, Transparent Process"
        description="From first conversation to fully deployed automation — here's what working with me looks like."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <step.icon size={20} className="text-accent" />
              </div>
              <span className="text-3xl font-bold text-accent/20">{step.number}</span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}