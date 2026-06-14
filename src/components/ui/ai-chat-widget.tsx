"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, X, MessageCircle } from "lucide-react";
import { findIntent, CONFIDENCE_THRESHOLD } from "@/lib/chatbot-intents";

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

const fallbackResponse =
  "I couldn't find a direct answer to that question. Please contact Joshua directly via the contact form on this website, email him at nercy.centeno.freelancer@gmail.com, or book a free 30-minute discovery call through the Calendly link.";

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
    const { intent, score } = findIntent(query);

    if (intent && score >= CONFIDENCE_THRESHOLD) {
      return intent.answer;
    }

    return fallbackResponse;
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