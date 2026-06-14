"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";
import { Download, FileText, Briefcase, GraduationCap, Award } from "lucide-react";

export function ResumeSection() {
  const handleDownload = () => {
    const resumeContent = `
${siteData.personal.name}
AI Automation Specialist | Client Success Manager | Project Manager

CONTACT
Email: ${siteData.personal.email}
LinkedIn: ${siteData.personal.linkedin}

SUMMARY
${siteData.about.story.join("\n\n")}

EXPERIENCE
${siteData.timeline.map((t) => `${t.title} — ${t.company} (${t.year})\n${t.description}`).join("\n\n")}

SKILLS
${siteData.expertise.map((e) => `${e.rank}. ${e.title}`).join("\n")}

PROJECTS
${siteData.projects.map((p) => `${p.title} — ${p.role}\n${p.description}`).join("\n\n")}
    `.trim();

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Nercy-Centeno-Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <SectionWrapper id="resume" className="bg-surface/30">
      <SectionHeading
        label="Resume"
        title="Download My Resume"
        description="Get a comprehensive overview of my professional background, skills, and experience."
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          {/* Resume Header */}
          <div className="p-8 border-b border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <FileText size={28} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{siteData.personal.name}</h3>
                <p className="text-sm text-muted">AI Automation Specialist | Client Success Manager | Project Manager</p>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-xl transition-all duration-200 shadow-lg shadow-accent/25"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>

          {/* Resume Preview */}
          <div className="p-8 space-y-8">
            {/* Summary */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText size={18} className="text-accent" />
                <h4 className="text-lg font-semibold text-foreground">Professional Summary</h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {siteData.about.story[0]}
              </p>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={18} className="text-accent" />
                <h4 className="text-lg font-semibold text-foreground">Experience</h4>
              </div>
              <div className="space-y-4">
                {siteData.timeline.map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md h-fit shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground">{item.title}</h5>
                      <p className="text-xs text-accent">{item.company}</p>
                      <p className="text-xs text-muted mt-1 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-accent" />
                <h4 className="text-lg font-semibold text-foreground">Core Skills</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {siteData.expertise.slice(0, 6).map((skill) => (
                  <div
                    key={skill.rank}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border"
                  >
                    <span className="text-xs font-bold text-accent">#{skill.rank}</span>
                    <span className="text-sm text-foreground">{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-accent" />
                <h4 className="text-lg font-semibold text-foreground">Education</h4>
              </div>
              <div className="space-y-3">
                {siteData.education?.map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md h-fit shrink-0">
                      {edu.years}
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground">{edu.degree}</h5>
                      <p className="text-xs text-accent">{edu.school}</p>
                      <p className="text-xs text-muted">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community & Leadership */}
            {siteData.community && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award size={18} className="text-accent" />
                  <h4 className="text-lg font-semibold text-foreground">Community & Leadership</h4>
                </div>
                <div className="space-y-3">
                  {siteData.community.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md h-fit shrink-0">
                        {item.years}
                      </span>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">{item.role}</h5>
                        <p className="text-xs text-accent">{item.organization}</p>
                        <p className="text-xs text-muted mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}