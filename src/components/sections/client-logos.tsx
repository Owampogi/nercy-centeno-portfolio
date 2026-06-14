"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const clients = [
  { name: "Mirai Labs", subtitle: "Gaming & Web3" },
  { name: "Innovative System Group Global", subtitle: "Healthcare" },
  { name: "Superbench AI", subtitle: "AI & Automation" },
  { name: "Atlantic Bulk Carriers", subtitle: "Maritime" },
];

export function ClientLogosSection() {
  return (
    <SectionWrapper id="clients" className="py-12 md:py-16">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted">
          {"Companies & Organizations I've Worked With"}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-sm font-bold text-accent shrink-0">
              {client.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">{client.name}</p>
              <p className="text-xs text-muted">{client.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}