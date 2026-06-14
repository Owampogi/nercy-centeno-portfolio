import { HeroSection } from "@/components/sections/hero";
import { ClientLogosSection } from "@/components/sections/client-logos";
import { AboutSection } from "@/components/sections/about";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BlogSection } from "@/components/sections/blog";
import { ResumeSection } from "@/components/sections/resume";
import { ContactSection } from "@/components/sections/contact";
import { SuitsQuote } from "@/components/ui/suits-quote";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ExpertiseSection />
      <div className="section-divider" />
      <ProcessSection />
      <SuitsQuote index={0} />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <SuitsQuote index={1} />
      <div className="section-divider" />
      <BlogSection />
      <div className="section-divider" />
      <ResumeSection />
      <div className="section-divider" />
      <ContactSection />
    </>
  );
}
