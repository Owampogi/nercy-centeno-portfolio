"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        label="Testimonials"
        title="What Colleagues & Leaders Say About Me"
        description="Trusted by teammates, managers, and company leadership for reliability, technical problem-solving, client success, and continuous improvement."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {siteData.testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300"
          >
            <Quote size={32} className="text-accent/20 absolute top-6 right-6" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              {testimonial.verified && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-green-400 bg-green-500/10 border border-green-500/20 rounded-full">
                  <CheckCircle size={10} />
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted">
                  {testimonial.role}
                  {testimonial.company ? `, ${testimonial.company}` : ""}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}