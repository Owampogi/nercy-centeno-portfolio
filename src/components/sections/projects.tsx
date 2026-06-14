"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [filter, setFilter] = useState("all");

  const categories = ["all", "automation", "operations"];
  const filteredProjects = filter === "all"
    ? siteData.projects
    : siteData.projects.filter(p => p.category === filter);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Featured Projects"
        title="Case Studies & Results"
        description="Real projects delivering measurable business impact through AI automation and operational excellence."
      />

      {/* Filter */}
      <div className="flex justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 capitalize ${
              filter === cat
                ? "bg-accent text-background shadow-lg shadow-accent/25"
                : "bg-surface text-muted hover:text-foreground border border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-2 inline-block">
                      {project.role}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted mt-1">{project.subtitle}</p>
                  </div>
                  <button
                    onClick={() => {
                      setExpandedProject(expandedProject === project.id ? null : project.id);
                      setActiveScreenshot(0);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent bg-accent/10 hover:bg-accent/20 rounded-lg transition-all duration-200 shrink-0"
                  >
                    {expandedProject === project.id ? "Less" : "Details"}
                    {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
                <p className="text-muted text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-muted bg-background rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border">
                      <div className="grid md:grid-cols-2 gap-8 mt-6">
                        {/* Challenge */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            Challenge
                          </h4>
                          <p className="text-sm text-muted leading-relaxed">{project.challenge}</p>
                        </div>
                        {/* Solution */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            Solution
                          </h4>
                          <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Screenshots Gallery */}
                      {project.screenshots && project.screenshots.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-foreground mb-4">Workflow Screenshots</h4>
                          <div className="rounded-xl overflow-hidden border border-border bg-background">
                            {/* Main Screenshot */}
                            <div className="relative w-full" style={{ minHeight: "300px" }}>
                              <Image
                                src={project.screenshots[activeScreenshot].src}
                                alt={project.screenshots[activeScreenshot].alt}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                            {/* Screenshot Labels */}
                            <div className="flex gap-2 p-3 overflow-x-auto">
                              {project.screenshots.map((screenshot, i) => (
                                <button
                                  key={i}
                                  onClick={() => setActiveScreenshot(i)}
                                  className={`px-3 py-1.5 text-xs font-medium rounded-lg shrink-0 transition-all duration-200 ${
                                    activeScreenshot === i
                                      ? "bg-accent text-background"
                                      : "bg-surface text-muted hover:text-foreground border border-border"
                                  }`}
                                >
                                  {screenshot.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Modules */}
                      {project.modules && project.modules.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Layers size={16} className="text-accent" />
                            System Modules
                          </h4>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {project.modules.map((mod, i) => (
                              <div
                                key={i}
                                className="p-3 rounded-lg bg-background border border-border"
                              >
                                <p className="text-xs font-semibold text-accent mb-1">{mod.name}</p>
                                <p className="text-xs text-muted leading-relaxed">{mod.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Results */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-foreground mb-4">Key Results</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {project.results.map((result) => (
                            <div
                              key={result.metric}
                              className="p-4 rounded-xl bg-accent/5 border border-accent/20 text-center"
                            >
                              <div className="text-xl font-bold text-accent">{result.value}</div>
                              <div className="text-xs text-muted mt-1">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}