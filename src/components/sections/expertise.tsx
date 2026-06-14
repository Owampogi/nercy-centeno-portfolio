"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";
import { 
  Bot, Users, FolderKanban, Brain, Headphones, TrendingUp, 
  Plug, Database, MessageSquare, Layout 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  bot: Bot,
  users: Users,
  "folder-kanban": FolderKanban,
  brain: Brain,
  headphones: Headphones,
  "trending-up": TrendingUp,
  plug: Plug,
  database: Database,
  "message-square": MessageSquare,
  layout: Layout,
};

export function ExpertiseSection() {
  return (
    <SectionWrapper id="expertise" className="bg-surface/30">
      <SectionHeading
        label="Core Expertise"
        title="Skills That Drive Business Results"
        description="A comprehensive skill set spanning AI automation, client success, project management, and operational excellence."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {siteData.expertise.map((skill, index) => {
          const IconComponent = iconMap[skill.icon] || Bot;
          return (
            <motion.div
              key={skill.rank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <IconComponent size={20} className="text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                      #{skill.rank}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{skill.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}