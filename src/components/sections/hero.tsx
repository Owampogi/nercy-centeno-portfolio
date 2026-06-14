"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { siteData } from "@/lib/data";
import { CounterAnimation } from "@/components/ui/counter-animation";

const metrics = [
  { icon: Zap, value: 70, suffix: "%", label: "Manual Work Reduced" },
  { icon: TrendingUp, value: 35, suffix: "%", label: "Revenue Increase" },
  { icon: Users, value: 4, suffix: "+", label: "Industries Served" },
  { icon: Sparkles, value: 95, suffix: "%", label: "Client Satisfaction" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-accent/20 ring-offset-4 ring-offset-background">
                <Image
                  src="/images/header-photo.png"
                  alt="Nercy Joshua B. Centeno"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full ring-4 ring-background" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-8">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-foreground">Building</span>{" "}
            <span className="gradient-text">AI-Powered Systems</span>{" "}
            <span className="text-foreground">That Help Businesses</span>{" "}
            <span className="gradient-text">Scale.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {siteData.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent/90 rounded-xl transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              {siteData.hero.primaryCta}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-surface hover:bg-surface/80 rounded-xl transition-all duration-200 border border-border hover:border-accent/30 hover:-translate-y-0.5"
            >
              {siteData.hero.secondaryCta}
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group p-4 rounded-xl bg-surface/50 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <metric.icon className="w-5 h-5 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-foreground">
                  <CounterAnimation end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xs text-muted mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-muted"
          >
            <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              AI Automation
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Client Success
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Project Management
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Operations
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}