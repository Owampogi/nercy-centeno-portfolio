// Intent-based retrieval system for the AI Chatbot
// Fully deterministic, database-driven — no LLM required

export interface ChatIntent {
  intent: string;
  keywords: string[];
  answer: string;
}

export const CONFIDENCE_THRESHOLD = 3;

export const intents: ChatIntent[] = [
  {
    intent: "pricing",
    keywords: [
      "expensive", "price", "pricing", "cost", "rate", "rates",
      "budget", "affordable", "cheap", "fee", "fees", "charge",
      "charges", "quotation", "quote", "how much", "pay", "paying",
      "investment", "spend", "dollar", "usd", "per hour", "hourly",
    ],
    answer:
      "Joshua's baseline rate is $15 USD per hour, but this is negotiable depending on the project scope, duration, and complexity. He is open to discussing fixed-price arrangements for well-defined projects. Not every solution requires a large investment — he can often recommend phased implementations, quick wins, or lightweight automation strategies that deliver value without requiring a large budget. Reach out via the contact form or book a discovery call to discuss your specific needs.",
  },
  {
    intent: "availability",
    keywords: [
      "available", "availability", "start", "starting", "open",
      "taking clients", "free", "open for work", "hiring",
      "when can", "how soon", "timeline", "turnaround", "urgent",
      "urgently", "quickly", "quick", "fast", "asap", "immediately",
      "right now", "this week", "this month",
    ],
    answer:
      "Joshua is available for both freelance projects and full-time opportunities. He is currently operating as an independent automation specialist. For high-priority projects, he will provide realistic timelines and determine whether an accelerated delivery schedule is possible. Availability varies depending on current commitments — the best approach is to reach out with your requirements. You can book a free 30-minute discovery call through the Calendly link on this website or email him at nercy.centeno.freelancer@gmail.com.",
  },
  {
    intent: "hiring",
    keywords: [
      "hire", "hiring", "worth", "qualified", "quality", "good enough",
      "recommend", "reliable", "trust", "capable", "competent",
      "should i", "should we", "good fit", "right person",
      "right fit", "why hire", "impressive", "standout", "stand out",
    ],
    answer:
      "Joshua approaches automation from both a technical and operational perspective. Instead of only building workflows, he studies the entire business process, identifies bottlenecks, and designs systems that reduce manual work while remaining easy to maintain. With over 5 years across healthcare, gaming/Web3, and consulting, he bridges business needs and technical implementations — reducing manual effort by up to 70% and building enterprise-level multi-agent AI systems. His verified testimonials from Airee David, Daisy Bayani, Jingjing (Founder, Superbench AI), and Kai (CTO, Superbench AI) all praise his reliability, professionalism, learning agility, and growth mindset.",
  },
  {
    intent: "freelance",
    keywords: [
      "freelance", "freelancer", "contract", "contractor",
      "project-based", "gig", "short term", "short-term",
      "one-off", "one off", "engagement",
    ],
    answer:
      "Joshua is available for freelance and contract-based projects. He works on a project basis with clear scopes, milestones, and deliverables. His baseline rate is $15 USD per hour (negotiable), and he is open to fixed-price arrangements for well-defined projects. He can work independently or collaborate closely with your team. Book a discovery call through the Calendly link on this website to discuss your project.",
  },
  {
    intent: "fulltime",
    keywords: [
      "full-time", "fulltime", "full time", "permanent",
      "employee", "employment", "staff", "in-house",
      "remote position", "job", "role", "opportunity",
    ],
    answer:
      "Joshua is open to full-time opportunities where he can create meaningful impact through AI, automation, and operational excellence. He has over 5 years of professional experience across healthcare, gaming/Web3, and client operations. His career progression from Customer Support to Client Success to Project Management to AI Automation Specialist demonstrates consistent growth and versatility. Connect with him on LinkedIn at linkedin.com/in/nercy-joshua-centeno or reach out via email at nercy.centeno.freelancer@gmail.com.",
  },
  {
    intent: "chatbot",
    keywords: [
      "chatbot", "chat bot", "chat-bot", "website bot",
      "messenger bot", "bot", "conversational", "ai chat",
      "customer bot", "support bot", "virtual assistant",
      "ai assistant", "ai agent",
    ],
    answer:
      "Yes, Joshua builds AI-powered chatbots and assistants. His flagship project is the Enterprise Multi-Agent AI Assistant — a system that classifies user requests, delegates tasks to specialized AI agents, retrieves business data from knowledge bases, executes operational workflows, and generates contextual responses through a single conversational interface. It uses 8 modules including Intent Classification, Multi-Agent Routing, Knowledge Base Retrieval, Context-Aware Memory, and Response Generation. He has also built Slack acknowledgement bots and customer support chatbots using n8n, OpenAI, and various API integrations.",
  },
  {
    intent: "automation",
    keywords: [
      "automation", "automate", "automated", "workflow",
      "workflows", "streamline", "efficiency", "optimize",
      "optimization", "process", "processes", "system",
      "systems", "pipeline", "orchestration",
    ],
    answer:
      "Joshua specializes in AI automation and workflow design using n8n, Zapier, and Make.com. He has nearly three years of experience designing and deploying scalable automation workflows that connect multiple services to streamline business processes. His projects include multi-agent AI systems, content automation pipelines, voice call processors, intelligent reply bots, and proposal generation suites. He implements JSON manipulation, conditional logic, and API integrations to solve complex client requirements, reducing manual effort by up to 70%.",
  },
  {
    intent: "n8n",
    keywords: [
      "n8n", "n eight n", "workflow tool", "automation tool",
      "automation platform", "no-code", "low-code", "make.com",
      "zapier", "make", "integromat",
    ],
    answer:
      "n8n is Joshua's primary workflow automation tool with nearly three years of experience. He designs and deploys scalable automation workflows using n8n, connecting multiple services through APIs, webhooks, JSON manipulation, and conditional logic. He has built multi-agent systems, content automation pipelines, voice call processors, and intelligent reply bots all using n8n as the orchestration layer. He also understands automation principles across platforms and can evaluate whether n8n, Make.com, Zapier, or another solution best fits a project's requirements.",
  },
  {
    intent: "crm",
    keywords: [
      "crm", "salesforce", "hubspot", "customer relationship",
      "lead management", "lead", "leads", "pipeline",
      "customer database", "client management",
    ],
    answer:
      "If your CRM supports APIs, webhooks, or integrations, Joshua can typically connect it to an automation workflow. He has experience connecting automation workflows with third-party systems through APIs, webhooks, databases, spreadsheets, and cloud platforms. His project Daloy PH is an example of a CRM-integrated automation platform that centralizes customer conversations and improves lead management for SMEs.",
  },
  {
    intent: "wordpress",
    keywords: [
      "wordpress", "wp", "website", "web development",
      "web design", "landing page", "site", "web app",
    ],
    answer:
      "Joshua has experience working on automation and chatbot projects connected to websites. While his primary focus is automation and AI systems rather than web development, he can build solutions that integrate with your existing web platforms through APIs and webhooks. If you need a chatbot, lead capture system, or automation connected to your WordPress or website, he can help with the integration layer.",
  },
  {
    intent: "ai",
    keywords: [
      "ai", "artificial intelligence", "machine learning", "ml",
      "llm", "openai", "gpt", "chatgpt", "gemini", "anthropic",
      "claude", "ai integration", "ai model", "multi-agent",
      "agent", "agents",
    ],
    answer:
      "Joshua integrates AI models including OpenAI, Anthropic, and Google Gemini into business automation workflows. His most complex AI work includes the Enterprise Multi-Agent AI Assistant with 8 modules (Intent Classification, Multi-Agent Routing, Knowledge Base Retrieval, Context-Aware Memory, Workflow Execution, Email Handling, Data Integration, and Response Generation). He has also built AI-powered chatbots, content generators, voice call processors, and intelligent reply systems. He uses AI for prompt engineering, structured output parsing, and retrieval-augmented generation within n8n workflows.",
  },
  {
    intent: "support",
    keywords: [
      "support", "customer support", "customer service",
      "help desk", "ticketing", "ticket", "helpdesk",
      "client support", "user support", "community",
    ],
    answer:
      "Joshua has extensive customer support experience. At Mirai Labs, he managed a community of 20,000+ players, resolved complex technical issues, and trained AI agents to automate Level-1 ticket resolution — clearing 70% of routine inquiries. At Innovative System Group Global, he served as the primary point of contact for healthcare clients, managing patient scheduling and ensuring high satisfaction scores. He designs support systems that combine AI automation with human oversight for optimal customer experience.",
  },
  {
    intent: "documentation",
    keywords: [
      "documentation", "document", "docs", "sop", "sops",
      "standard operating", "knowledge base", "knowledge",
      "faq", "wiki", "guide", "manual", "handbook",
      "organize", "organizing", "structure",
    ],
    answer:
      "Knowledge management is one of Joshua's strongest areas of experience. He has extensive experience organizing, optimizing, and maintaining knowledge bases designed for AI retrieval, creating documentation and SOPs, restructuring FAQ content for clarity, and building AI-friendly documentation optimized for retrieval-based systems. At Mirai Labs, he audited and updated AI knowledge base databases to ensure accuracy for automated responses. He creates documentation intended for both technical and non-technical audiences.",
  },
  {
    intent: "startup",
    keywords: [
      "startup", "start-up", "founder", "entrepreneur",
      "early stage", "seed", "venture", "new business",
      "small business", "sme", "smb",
    ],
    answer:
      "Joshua has worked extensively with startups, SaaS platforms, Web3 projects, gaming communities, and fast-moving teams that need practical automation solutions without large engineering departments. His approach starts with understanding business needs and recommending phased implementations that deliver value within budget constraints. Many startup founders value his ability to bridge business operations and technical implementation without requiring a full engineering team.",
  },
  {
    intent: "web3",
    keywords: [
      "web3", "web 3", "blockchain", "crypto", "defi",
      "nft", "dao", "decentralized", "gaming",
      "game", "player", "community management",
    ],
    answer:
      "Joshua has direct Web3 and gaming industry experience. At Mirai Labs, he managed a community of 20,000+ players, moderated forums, led discussions on Web3 topics, and trained AI agents for support automation in a gaming/Web3 environment. His verified testimonials from Airee David (People Operations) and Daisy Bayani (CSO, Community & Product Strategy) both reference his deep Web3 knowledge and community management capabilities.",
  },
  {
    intent: "communication",
    keywords: [
      "communicate", "communication", "update", "updates",
      "transparent", "transparency", "progress", "report",
      "reporting", "responsive", "responsiveness",
    ],
    answer:
      "Joshua prioritizes clear communication, collaborative problem-solving, and keeping stakeholders informed throughout the project lifecycle. He creates documentation and guides for non-technical audiences, and works well with both technical and non-technical teams. His verified testimonials specifically praise his communication and reliability — Kai (CTO, Superbench AI) notes his strong responsiveness to clients and active contribution to team collaboration.",
  },
  {
    intent: "maintenance",
    keywords: [
      "maintenance", "maintain", "support after", "after delivery",
      "post-delivery", "ongoing", "monitoring", "break",
      "broken", "fix", "troubleshoot", "debug", "error",
      "issue", "issues", "problem", "problems",
    ],
    answer:
      "Joshua designs systems with reliability and maintainability in mind. He provides documentation, SOPs, monitoring recommendations, and troubleshooting guidance. If your existing n8n automation keeps breaking or your systems need improvement, he can evaluate the current setup and provide solutions. He also offers ongoing support options for projects that need continued maintenance after delivery.",
  },
  {
    intent: "training",
    keywords: [
      "training", "train", "teach", "educate", "onboard",
      "onboarding", "walkthrough", "demo", "explain",
      "learn", "workshop", "handover", "hand-off",
    ],
    answer:
      "Yes, Joshua provides training as part of his process. His 4-step workflow includes a Training & Support phase where he provides documentation, SOPs, and hands-on training so your team can manage the systems confidently. He walks teams through workflows, explains how systems operate, and helps team members become comfortable managing the automation. He regularly works with non-technical stakeholders and explains concepts in plain language.",
  },
  {
    intent: "timeline",
    keywords: [
      "career", "background", "history", "timeline",
      "journey", "progression", "path", "transition",
      "past", "previous", "before", "worked",
    ],
    answer:
      "Joshua's career progression: 1) Engine Cadet at Atlantic Bulk Carriers (2018-2020) — built disciplined technical problem-solving foundation. 2) Customer Service Rep / Account Specialist in Healthcare at Innovative System Group Global (2021-2024) — managed patient scheduling for multiple providers, reduced no-show rates by 15%. 3) Customer Service Rep & AI Database Manager at Mirai Labs (2024-2025) — managed 20,000+ player community, trained AI agents for 70% Level-1 automation. 4) Automations Specialist (n8n Operator) as Individual Contractor (2025-Present) — designs and deploys scalable automation workflows.",
  },
  {
    intent: "experience",
    keywords: [
      "experience", "experienced", "years", "senior",
      "skill", "skills", "expertise", "proficient",
      "capable", "competent", "technical",
    ],
    answer:
      "Joshua has over 5 years of professional experience across healthcare, gaming/Web3, and client operations, with nearly 3 years focused specifically on AI automation and n8n workflow design. His core skills: AI Automation & Workflow Design, Client Success & Relationship Management, Project Coordination & Operations, AI & LLM Integrations (OpenAI, Anthropic, Google Gemini), Customer Support & Community Management, Business Process Analysis, API Integrations & Webhooks, Database & Knowledge Base Management, Documentation & SOPs, and No-Code/Low-Code Tools (n8n, Zapier, Make.com).",
  },
  {
    intent: "industries",
    keywords: [
      "industry", "industries", "sector", "sectors",
      "healthcare", "gaming", "ecommerce", "e-commerce",
      "retail", "saas", "tech", "technology",
    ],
    answer:
      "Joshua has supported businesses across multiple industries: Gaming/Web3 (Mirai Labs — managed 20,000+ player community, led Web3 discussions), Healthcare (Innovative System Group Global — patient scheduling, reduced no-show rates by 15%), and various startups and SMEs through his freelance practice. His experience spans e-commerce, gaming, healthcare, SaaS, and tech startups.",
  },
  {
    intent: "projects",
    keywords: [
      "project", "projects", "portfolio", "work", "built",
      "created", "example", "examples", "case study",
      "case studies", "achievement", "accomplishment",
      "complex", "flagship", "best work",
    ],
    answer:
      "Joshua has built 5 featured projects: 1) Enterprise Multi-Agent AI Assistant — multi-agent chatbot with 8 modules for business operations. 2) Upwork AI Proposal Builder Suite — 6-module system automating proposal creation from job discovery to client-ready documents. 3) AI Voice Call Analysis & Lead Processing — Retell AI integration for automated post-call processing with Slack notifications. 4) AI Acknowledgement & Smart Reply Bot — intelligent Slack response system with intent classification and context-aware replies. 5) AI Database & Community Management at Mirai Labs — managed 20,000+ player community and trained AI agents for Level-1 ticket resolution.",
  },
  {
    intent: "tools",
    keywords: [
      "tool", "tools", "tech", "stack", "technology",
      "technologies", "platform", "platforms", "software",
      "integration", "integrations", "api", "apis",
    ],
    answer:
      "Joshua's tech stack includes: n8n (primary workflow automation), OpenAI, Anthropic, and Google Gemini (AI/LLM integrations), Zapier and Make.com (alternative automation platforms), Google Sheets and Google Docs (data management and document automation), Slack API (team automation), Retell AI (voice agent integration), Mermaid.js (workflow visualization), Blotato (social media automation), and Telegram (notifications). He is also proficient with REST APIs, webhooks, JSON manipulation, Google Workspace, Microsoft 365, database management, and structured output parsing.",
  },
  {
    intent: "services",
    keywords: [
      "service", "services", "offer", "offers", "provide",
      "provides", "do", "does", "what can", "help with",
      "specialize", "specializes", "focus", "consulting",
      "consultant",
    ],
    answer:
      "Joshua offers: n8n automation workflow design and implementation, AI integration (OpenAI, Anthropic, Google Gemini), API integrations and webhooks, multi-agent AI system architecture, client onboarding systems, knowledge base management, documentation and SOP creation, business process analysis, Slack and team automation, Retell AI voice agent integration, content automation, proposal generation systems, and custom internal tools. He is available for both freelance projects and full-time opportunities.",
  },
  {
    intent: "process",
    keywords: [
      "process", "step", "steps", "how does he work",
      "how does it work", "workflow", "methodology",
      "approach", "how", "work together", "collaborate",
    ],
    answer:
      "Joshua follows a 4-step process: 1) Discovery Call — discuss business challenges, goals, and current workflows. 2) Strategy & Planning — analyze processes, identify automation opportunities, design a solution blueprint. 3) Implementation — build and deploy automation workflows, integrate AI tools, ensure seamless integration. 4) Training & Support — provide documentation, SOPs, and hands-on training so your team can manage the systems confidently.",
  },
  {
    intent: "non-technical",
    keywords: [
      "non-technical", "not technical", "beginner", "simple",
      "easy", "understand", "explain", "plain language",
      "jargon", "no experience", "where to start",
      "don't know", "clueless", "new to",
    ],
    answer:
      "Joshua regularly works with non-technical stakeholders. Many of his clients are small teams with no technical people. He explains concepts, workflows, and decisions in plain language, and creates documentation intended for non-technical audiences. If you do not know where to start with automation, he can help identify opportunities, map processes, prioritize quick wins, and create a roadmap aligned with your budget and goals. His approach starts with understanding business needs before introducing technical solutions.",
  },
  {
    intent: "contact",
    keywords: [
      "contact", "reach", "email", "phone", "call",
      "meeting", "schedule", "book", "calendly",
      "linkedin", "connect", "message", "talk",
      "discuss", "consultation", "discovery",
    ],
    answer:
      "You can reach Joshua at nercy.centeno.freelancer@gmail.com or connect on LinkedIn at linkedin.com/in/nercy-joshua-centeno. You can book a free 30-minute discovery call through the Calendly link on this website. He is based in the Philippines (UTC+8) and works remotely with clients worldwide. He can work asynchronously and is comfortable with documentation-driven, async-first communication.",
  },
  {
    intent: "education",
    keywords: [
      "education", "degree", "university", "college",
      "school", "study", "studied", "graduate",
      "qualification", "marine", "engineering",
    ],
    answer:
      "Joshua holds a Bachelor of Science in Marine Engineering from Our Lady of Fatima University in Valenzuela City, Philippines (2013-2017). His engineering background gives him a disciplined, systematic approach to technical problem-solving and process design. He also served as Vice President of Bulacan Salinlahi Inc. (2015-2016) and has been a member of Dularawan Bulacan Foundation Inc. since 2012.",
  },
  {
    intent: "testimonials",
    keywords: [
      "testimonial", "testimonials", "review", "reviews",
      "feedback", "reference", "references", "recommendation",
      "recommendations", "said", "opinion", "opinions",
      "colleague", "manager", "leader",
    ],
    answer:
      "Joshua has received verified recommendations from colleagues and leaders. Airee David (People Operations) describes him as respectful, reliable, and driven by purpose. Daisy Bayani (CSO, Community & Product Strategy) notes he is consistent, thoughtful, calm under pressure. Jingjing (Founder, Superbench AI) highlights his exceptional learning agility and work ethic. Kai (CTO & Co-Founder, Superbench AI) praises his adaptability, growth mindset, and focus on workflow optimization. All testimonials are verified and displayed on this website.",
  },
  {
    intent: "about",
    keywords: [
      "about", "who", "joshua", "josh", "nercy",
      "centeno", "bio", "biography", "introduction",
      "personal", "himself", "background",
    ],
    answer:
      "Nercy Joshua B. Centeno is an AI Automation Specialist and Client Success professional based in Malolos City, Bulacan, Philippines (UTC+8). He has over five years of professional experience across healthcare, gaming/Web3, and client operations, with nearly three years focused specifically on AI automation and n8n workflow design. He helps businesses automate workflows, improve customer operations, and create scalable systems using AI and automation. His full name is Nercy Joshua B. Centeno — he goes by Joshua or Josh.",
  },
  {
    intent: "timezone",
    keywords: [
      "timezone", "time zone", "remote", "async",
      "asynchronous", "location", "based", "country",
      "philippines", "utc", "hours", "overlap",
    ],
    answer:
      "Joshua is based in Malolos City, Bulacan, Philippines (UTC+8 timezone). He has experience collaborating with distributed teams across different time zones. He can work asynchronously and is comfortable with documentation-driven, async-first communication. Project communication and meeting schedules can be coordinated based on mutual availability.",
  },
];

export function findIntent(query: string): { intent: ChatIntent | null; score: number } {
  const normalizedQuery = query.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
  
  let bestMatch: ChatIntent | null = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    for (const keyword of intent.keywords) {
      if (normalizedQuery.includes(keyword)) {
        // Longer keywords score higher
        score += keyword.length;
        // Exact word boundary match bonus
        const wordBoundaryRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`);
        if (wordBoundaryRegex.test(normalizedQuery)) {
          score += 2;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  }

  return { intent: bestMatch, score: bestScore };
}