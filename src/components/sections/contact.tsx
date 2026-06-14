"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";
import { Mail, Linkedin, Calendar, Send, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "freelance",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "", type: "freelance" });
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Get in Touch"
        title="Let's Work Together"
        description="Ready to automate your business operations? Book a discovery call or send me a message."
      />

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${siteData.personal.email}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
              >
                <Mail size={16} className="text-accent shrink-0" />
                {siteData.personal.email}
              </a>
              <a
                href={siteData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
              >
                <Linkedin size={16} className="text-accent shrink-0" />
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={16} className="text-accent shrink-0" />
                {siteData.personal.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <Clock size={16} className="text-accent shrink-0" />
                {siteData.personal.timezone} Timezone
              </div>
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="p-4 rounded-2xl bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <Calendar size={18} className="text-accent" />
              <h3 className="text-sm font-semibold text-foreground">Book a Discovery Call</h3>
            </div>
            <div className="rounded-xl overflow-hidden border border-border" style={{ height: "400px" }}>
              <iframe
                src="https://calendly.com/nercy-centeno-freelancer/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0b0f19&text_color=f8fafc&primary_color=3b82f6"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a Discovery Call"
              />
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <a
              href={`mailto:${siteData.personal.email}?subject=Freelance%20Project%20Inquiry`}
              className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Send size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Contact for Freelance Work</p>
                <p className="text-xs text-muted">Get a quote for your project</p>
              </div>
            </a>
            <a
              href={siteData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Linkedin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Hire for Full-Time</p>
                <p className="text-xs text-muted">View full profile on LinkedIn</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5"
          >
            <h3 className="text-lg font-semibold text-foreground">Send a Message</h3>

            {/* Inquiry Type */}
            <div className="flex gap-2">
              {[
                { value: "freelance", label: "Freelance" },
                { value: "fulltime", label: "Full-Time" },
                { value: "consulting", label: "Consulting" },
                { value: "other", label: "Other" },
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: type.value })}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    formData.type === type.value
                      ? "bg-accent text-white"
                      : "bg-background text-muted border border-border hover:text-foreground"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-foreground placeholder:text-muted/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-foreground placeholder:text-muted/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-foreground placeholder:text-muted/50"
                placeholder="Project inquiry, consultation request..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-foreground placeholder:text-muted/50 resize-none"
                placeholder="Tell me about your project, goals, and timeline..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-xl transition-all duration-200 shadow-lg shadow-accent/25"
            >
              <Send size={16} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>

            {submitted && (
              <p className="text-sm text-green-500 text-center">
                {"Thank you! I'll get back to you within 24 hours."}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}