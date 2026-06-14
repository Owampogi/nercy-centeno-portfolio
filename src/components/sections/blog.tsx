"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { siteData } from "@/lib/data";
import { ArrowRight, Clock, Tag } from "lucide-react";

const placeholderPosts = [
  {
    title: "How AI Automation is Transforming Small Business Operations",
    excerpt: "Discover how SMEs are leveraging AI-powered automation to reduce costs, improve efficiency, and compete with larger enterprises in today's market.",
    category: "AI Automation",
    readTime: "8 min read",
    date: "Coming Soon",
  },
  {
    title: "5 Customer Success Metrics Every Business Should Track",
    excerpt: "Learn the essential metrics that drive customer retention, satisfaction, and long-term revenue growth for service-based businesses.",
    category: "Customer Success",
    readTime: "6 min read",
    date: "Coming Soon",
  },
  {
    title: "Building Scalable Workflows with n8n: A Practical Guide",
    excerpt: "A step-by-step guide to designing and implementing automation workflows that scale with your business using n8n and API integrations.",
    category: "Workflow Design",
    readTime: "12 min read",
    date: "Coming Soon",
  },
];

export function BlogSection() {
  return (
    <SectionWrapper id="blog">
      <SectionHeading
        label="Insights"
        title="Blog & Articles"
        description="Thoughts on AI automation, customer success, operations, and business systems."
      />

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {siteData.blogCategories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1.5 text-xs font-medium text-muted bg-surface border border-border rounded-lg hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {placeholderPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gradient-to-br from-accent/10 to-secondary-accent/10 flex items-center justify-center">
              <Tag size={32} className="text-accent/30" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">{post.date}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-muted">
          More articles coming soon. Follow me on{" "}
          <a
            href={siteData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>{" "}
          for updates.
        </p>
      </div>
    </SectionWrapper>
  );
}