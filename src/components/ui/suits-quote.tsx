"use client";

import { motion } from "framer-motion";

const quotes = [
  { text: "The only time success comes before work is in the dictionary.", author: "Harvey Specter" },
  { text: "I don't have dreams, I have goals.", author: "Harvey Specter" },
  { text: "Work until you no longer have to introduce yourself.", author: "Harvey Specter" },
  { text: "You always have a choice.", author: "Harvey Specter" },
  { text: "People respond to how you dress, so like it or not, this is what you have to do.", author: "Harvey Specter" },
  { text: "The person that doesn't appreciate everything doesn't deserve anything.", author: "Harvey Specter" },
  { text: "Anyone can do my job, but no one can be me.", author: "Harvey Specter" },
  { text: "I'm not a great lawyer because I'm smart. I'm a great lawyer because I care.", author: "Mike Ross" },
];

interface SuitsQuoteProps {
  index?: number;
}

export function SuitsQuote({ index = 0 }: SuitsQuoteProps) {
  const quote = quotes[index % quotes.length];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-accent/5 border border-accent/10">
            <p className="text-lg md:text-xl italic text-foreground/80 mb-3">
              &ldquo;{quote.text}&rdquo;
            </p>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent">
              — {quote.author}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}