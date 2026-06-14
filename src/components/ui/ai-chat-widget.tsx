"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, X, MessageCircle } from "lucide-react";
import { siteData } from "@/lib/data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "What projects has Joshua worked on?",
  "What industries has he supported?",
  "What tools does he use?",
  "What is his rate?",
];

const phraseMap: [string, string][] = [
  ["expensive to hire", "rate pricing cost budget affordable charge fee"],
  ["expensive to work with", "rate pricing cost budget affordable charge fee"],
  ["how much does he charge", "rate pricing cost budget affordable charge fee"],
  ["how much does he cost", "rate pricing cost budget affordable charge fee"],
  ["how much to hire", "rate pricing cost budget affordable charge fee"],
  ["what is his rate", "rate pricing cost budget affordable charge fee"],
  ["not expensive", "rate pricing cost budget affordable charge fee"],
  ["how much", "rate pricing cost budget affordable charge fee"],
  ["worth the", "rate pricing cost budget affordable charge fee"],
  ["don't know where to start", "non-technical team explain simple beginner start"],
  ["where do i start", "non-technical team explain simple beginner start"],
  ["where to start", "non-technical team explain simple beginner start"],
  ["keeps breaking", "broken fix troubleshoot existing workflow"],
  ["existing workflow", "broken fix troubleshoot existing workflow"],
  ["what makes him different", "why hire different unique value worth"],
  ["different from other", "why hire different unique value worth"],
  ["good enough", "why hire different unique value worth"],
  ["worth hiring", "why hire different unique value worth"],
  ["worth it", "why hire different unique value worth"],
  ["hire him", "why hire different unique value worth"],
  ["hire joshua", "why hire different unique value worth"],
  ["what does he do", "what does joshua do work services"],
  ["what can he do", "what does joshua do work services"],
  ["what does he offer", "what does joshua do work services"],
  ["how does he work", "how work process step plan"],
  ["how does it work", "how work process step plan"],
  ["work process", "how work process step plan"],
  ["most complex", "complex achievement biggest accomplishment"],
  ["review our process", "review evaluate audit existing process"],
  ["existing process", "review evaluate audit existing process"],
  ["internal tool", "internal tool build custom"],
  ["custom tool", "internal tool build custom"],
  ["build tool", "internal tool build custom"],
  ["knowledge base", "knowledge base documentation faq organize"],
  ["generate content", "content automation generate pipeline"],
  ["time zone", "timezone remote async collaborate"],
  ["multiple project", "multiple projects simultaneously at once"],
  ["chat bot", "chatbot build website ai assistant"],
  ["website bot", "chatbot build website ai assistant"],
  ["after project", "training support after delivery maintenance break"],
  ["support after", "training support after delivery maintenance break"],
  ["non-technical", "non-technical team explain simple beginner start"],
  ["not technical", "non-technical team explain simple beginner start"],
  ["work he done", "projects portfolio work examples"],
  ["how fast can", "urgent fast quick turnaround time"],
  ["when can he", "available schedule full-time freelance start"],
  ["what tool", "n8n make zapier tools automation platform"],
  ["tool he use", "n8n make zapier tools automation platform"],
  ["cheap", "rate pricing cost budget affordable charge fee"],
  ["affordable", "rate pricing cost budget affordable charge fee"],
  ["expensive", "rate pricing cost budget affordable charge fee"],
  ["budget", "rate pricing cost budget affordable charge fee"],
  ["charge", "rate pricing cost budget affordable charge fee"],
  ["pricing", "rate pricing cost budget affordable charge fee"],
  ["fee", "rate pricing cost budget affordable charge fee"],
  ["price", "rate pricing cost budget affordable charge fee"],
  ["cost", "rate pricing cost budget affordable charge fee"],
  ["rate", "rate pricing cost budget affordable charge fee"],
  ["impressive", "why hire different unique value worth"],
  ["qualified", "why hire different unique value worth"],
  ["hire", "why hire different unique value worth"],
  ["urgent", "urgent fast quick turnaround time"],
  ["quickly", "urgent fast quick turnaround time"],
  ["asap", "urgent fast quick turnaround time"],
  ["available", "available schedule full-time freelance start"],
  ["testimonial", "testimonial reference recommendation review feedback"],
  ["reference", "testimonial reference recommendation review feedback"],
  ["feedback", "testimonial reference recommendation review feedback"],
  ["services", "what does joshua do work services"],
  ["offer", "what does joshua do work services"],
  ["technology", "n8n make zapier tools automation platform"],
  ["stack", "n8n make zapier tools automation platform"],
  ["n8n", "n8n make zapier tools automation platform"],
  ["make.com", "n8n make zapier tools automation platform"],
  ["zapier", "n8n make zapier tools automation platform"],
  ["process", "how work process step plan"],
  ["chatbot", "chatbot build website ai assistant"],
  ["crm", "crm integrate api connect existing"],
  ["integrate", "crm integrate api connect existing"],
  ["project", "projects portfolio work examples"],
  ["portfolio", "projects portfolio work examples"],
  ["industry", "industry healthcare gaming startup web3"],
  ["startup", "industry healthcare gaming startup web3"],
  ["gaming", "industry healthcare gaming startup web3"],
  ["healthcare", "industry healthcare gaming startup web3"],
  ["web3", "industry healthcare gaming startup web3"],
  ["career", "career background experience history timeline"],
  ["background", "career background experience history timeline"],
  ["history", "career background experience history timeline"],
  ["communicate", "communication progress update transparent"],
  ["transparent", "communication progress update transparent"],
  ["training", "training support after delivery maintenance break"],
  ["maintenance", "training support after delivery maintenance break"],
  ["explain", "non-technical team explain simple beginner start"],
  ["broken", "broken fix troubleshoot existing workflow"],
  ["fix", "broken fix troubleshoot existing workflow"],
  ["troubleshoot", "broken fix troubleshoot existing workflow"],
  ["timezone", "timezone remote async collaborate"],
  ["remote", "timezone remote async collaborate"],
  ["faq", "knowledge base documentation faq organize"],
  ["documentation", "knowledge base documentation faq organize"],
  ["content", "content automation generate pipeline"],
  ["motivat", "motivated motivation future goal ambition"],
  ["goal", "motivated motivation future goal ambition"],
  ["future", "motivated motivation future goal ambition"],
  ["achievement", "complex achievement biggest accomplishment"],
  ["accomplishment", "complex achievement biggest accomplishment"],
  ["biggest", "complex achievement biggest accomplishment"],
  ["wordpress", "wordpress website web development"],
  ["evaluate", "review evaluate audit existing process"],
  ["audit", "review evaluate audit existing process"],
  ["team", "multiple projects simultaneously at once"],
  ["solo", "available schedule full-time freelance start"],
  ["about", "who is joshua about bio introduction"],
  ["who is", "who is joshua about bio introduction"],
];

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    const kb = siteData.aiAssistant.knowledgeBase;

    for (const [phrase, topic] of phraseMap) {
      if (lowerQuery.includes(phrase)) {
        const match = kb.find((e) => e.topic === topic);
        if (match) return match.response;
      }
    }

    let bestMatch: { entry: (typeof kb)[0]; score: number } | null = null;
    for (const entry of kb) {
      const keywords = entry.topic.toLowerCase().split(" ");
      let score = 0;
      for (const kw of keywords) {
        if (kw.length > 3 && lowerQuery.includes(kw)) {
          score += kw.length;
        }
      }
      if (score > 0 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = { entry, score };
      }
    }

    if (bestMatch && bestMatch.score >= 5) {
      return bestMatch.entry.response;
    }

    return "That's a great question! For the most detailed answer, I'd recommend reaching out to Joshua directly via the contact form on this website or booking a free 30-minute discovery call through his Calendly link. You can also email him at nercy.centeno.freelancer@gmail.com.";
  };

  const handleSend = (text?: string) => {
    const query = text || input.trim();
    if (!query) return;

    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(query);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-background shadow-lg shadow-accent/30 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-border flex items-center gap-3 bg-surface">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Sparkles size={14} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">AI Assistant</p>
                <p className="text-[10px] text-muted">{"Ask about Joshua's experience"}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-muted hover:text-foreground hover:bg-background transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <Bot size={28} className="text-muted mx-auto mb-2" />
                  <p className="text-xs text-muted mb-3">
                    {"Hi! Ask me about Joshua's experience, projects, or services."}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSend(q)}
                        className="px-3 py-1.5 text-[11px] font-medium text-accent bg-accent/10 hover:bg-accent/20 rounded-lg border border-accent/20 transition-all duration-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={12} className="text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent text-background"
                        : "bg-background border border-border text-muted"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-lg bg-surface flex items-center justify-center shrink-0 mt-1">
                      <User size={12} className="text-muted" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Bot size={12} className="text-accent" />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-background border border-border">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-muted rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1 h-1 bg-muted rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1 h-1 bg-muted rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-3 py-2 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Joshua..."
                  className="flex-1 px-3 py-2 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent/50 text-foreground placeholder:text-muted/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-3 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send size={12} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}