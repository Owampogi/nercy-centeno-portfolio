export const siteData = {
  personal: {
    name: "Nercy Joshua B. Centeno",
    firstName: "Joshua",
    lastName: "Centeno",
    initials: "NC",
    email: "nercy.centeno.freelancer@gmail.com",
    phone: "+639061893628",
    linkedin: "https://www.linkedin.com/in/nercy-joshua-centeno/",
    calendly: "https://calendly.com/nercy-centeno-freelancer/30min",
    location: "Malolos City, Bulacan, Philippines",
    timezone: "UTC+8",
  },
  hero: {
    headline: "Building AI-Powered Systems That Help Businesses Scale.",
    subheadline:
      "I help businesses automate workflows, improve customer operations, and create scalable systems using AI, automation, and operational expertise.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Let's Work Together",
  },
  about: {
    title: "About Me",
    story: [
      "I'm Nercy Joshua B. Centeno — an AI Automation Specialist and Client Success professional. I have over five years of professional experience across healthcare, gaming/Web3, and client operations, with nearly three years focused specifically on AI automation and n8n workflow design.",
      "I bring proven expertise in building automation solutions with n8n and integrating AI tools to streamline business processes. I'm adept at client relationship management, requirements gathering, and translating business needs into technical implementations that enhance operational efficiency.",
      "My career began in marine engineering, where I developed disciplined technical problem-solving skills. I transitioned into healthcare client services, managing end-to-end patient scheduling and registration for multiple providers, reducing no-show rates by 15% through personalized SMS and email confirmations.",
      "From there, I moved into AI and community management at Mirai Labs, managing a community of 20,000+ players, resolving complex technical issues, and training AI agents to automate Level-1 ticket resolution — clearing 70% of routine inquiries. Today, I design and deploy scalable automation workflows using n8n, connecting multiple services to streamline client business processes and reduce manual effort by up to 70%.",
    ],
    attributes: [
      "Reliable",
      "Professional",
      "Leadership-Oriented",
      "Business-Focused",
      "Results-Driven",
    ],
  },
  expertise: [
    {
      rank: 1,
      title: "AI Automation & Workflow Design",
      description:
        "Designing and deploying scalable automation workflows using n8n, Zapier, and Make.com, integrating AI tools (OpenAI, Anthropic, Google Gemini) to streamline business processes.",
      icon: "bot",
    },
    {
      rank: 2,
      title: "Client Success & Relationship Management",
      description:
        "Managing client onboarding, requirements gathering, stakeholder management, and ensuring successful solution adoption through clear communication and training.",
      icon: "users",
    },
    {
      rank: 3,
      title: "Project Coordination & Operations",
      description:
        "Coordinating projects, managing provider calendars, facilitating cross-departmental collaboration, and optimizing communication for seamless service delivery.",
      icon: "folder-kanban",
    },
    {
      rank: 4,
      title: "AI & LLM Integrations",
      description:
        "Integrating AI models (OpenAI, Anthropic, Google Gemini) and training AI agents to automate ticket resolution and enhance operational efficiency.",
      icon: "brain",
    },
    {
      rank: 5,
      title: "Customer Support & Community Management",
      description:
        "Managing communities of 20,000+ users, resolving complex technical issues, moderating forums, and maintaining top satisfaction scores across chat and email.",
      icon: "headphones",
    },
    {
      rank: 6,
      title: "Business Process Analysis",
      description:
        "Analyzing business processes, identifying bottlenecks, and translating business needs into technical implementations that reduce manual effort by up to 70%.",
      icon: "trending-up",
    },
    {
      rank: 7,
      title: "API Integrations & Webhooks",
      description:
        "Implementing JSON manipulation, conditional logic, REST APIs, and webhook integrations to solve complex client requirements for lead generation and data processing.",
      icon: "plug",
    },
    {
      rank: 8,
      title: "Database & Knowledge Base Management",
      description:
        "Auditing and updating AI knowledge base databases, ensuring accurate and current information for automated responses and agent training.",
      icon: "database",
    },
    {
      rank: 9,
      title: "Documentation & SOPs",
      description:
        "Creating documentation, SOPs, and user training materials for clients, facilitating smooth post-launch support for implemented systems.",
      icon: "message-square",
    },
    {
      rank: 10,
      title: "No-Code/Low-Code Tools",
      description:
        "Proficient in n8n, Zapier, Make.com, Google Workspace, and Microsoft 365 for rapid prototyping and deployment of business solutions.",
      icon: "layout",
    },
  ],
  projects: [
    {
      id: "multi-agent-chatbot",
      title: "Enterprise Multi-Agent AI Assistant",
      subtitle: "Multi-Agent Conversational AI Platform",
      role: "AI Solutions Architect & Automation Engineer",
      description:
        "A sophisticated multi-agent AI chatbot that classifies user requests, delegates tasks to specialized AI agents, retrieves business data, executes workflows, and generates contextual responses across multiple business functions through a single conversational interface.",
      challenge:
        "Businesses often use separate systems for customer support, reporting, lead management, knowledge retrieval, and operational tasks, creating fragmented user experiences and requiring manual coordination across platforms.",
      solution:
        "Built a multi-agent AI platform that intelligently routes requests to specialized AI agents, retrieves relevant business information from knowledge bases, executes operational workflows, and delivers contextual responses through a unified conversational interface. Unlike single-prompt chatbots, this architecture uses multiple specialized agents working together for more accurate and scalable outcomes.",
      technologies: ["n8n", "OpenAI", "Multi-Agent Architecture", "Google Sheets", "Gmail API", "Knowledge Base", "Web Chat Interface", "Business Logic Workflows"],
      results: [
        { metric: "Business Functions", value: "Unified" },
        { metric: "Agent Architecture", value: "Multi-Agent" },
        { metric: "Manual Workload", value: "Reduced" },
        { metric: "Scalability", value: "Enterprise-Ready" },
      ],
      screenshots: [
        { src: "/images/workflow-multi-agent.png", alt: "Multi-Agent AI Business Assistant Workflow", label: "Multi-Agent Architecture" },
      ],
      modules: [
        { name: "Intent Classification Engine", description: "Analyzes user requests and determines the correct agent to handle each task" },
        { name: "Multi-Agent Router", description: "Delegates tasks to specialized AI agents based on classified intent" },
        { name: "Knowledge Base Retriever", description: "Fetches relevant business information from connected knowledge sources" },
        { name: "Workflow Execution Engine", description: "Performs business process automation triggered by conversational requests" },
        { name: "Context-Aware Memory", description: "Maintains conversation context across multiple interactions and agents" },
        { name: "Email & Notification Handler", description: "Automates email responses and team notifications based on chat interactions" },
        { name: "Business Data Integration", description: "Connects to Google Sheets, Gmail, and business systems for data access" },
        { name: "Response Generator", description: "Produces human-like conversational responses combining agent outputs" },
      ],
      category: "automation",
    },
    {
      id: "upwork-proposal-builder",
      title: "Upwork AI Proposal Builder Suite",
      subtitle: "Multi-Agent AI Automation System",
      role: "AI Automation Specialist",
      description:
        "A multi-agent AI proposal generation platform that automates the end-to-end process of creating Upwork proposals — from job discovery to client-ready documents with visual workflow diagrams.",
      challenge:
        "Freelancers and agencies spend hours manually crafting proposals for each Upwork job posting — reading requirements, writing personalized cover letters, creating solution diagrams, and formatting documents. This repetitive process limits the number of proposals that can be submitted and reduces win rates due to inconsistent quality.",
      solution:
        "Built a multi-workflow AI system with 6 integrated modules: a Boss AI Agent that orchestrates specialized sub-workflows, an Application Copy Generator for personalized cover letters, a Google Docs Proposal Generator for client-ready documents, a Mermaid Diagram Generator for visual solution architectures, and an automated Job Scraper that feeds qualified opportunities into the pipeline.",
      technologies: ["n8n", "OpenAI", "Google Docs API", "Google Drive API", "Google Sheets API", "Mermaid.js", "Web Scraping", "AI Agents"],
      results: [
        { metric: "Proposal Time", value: "Hours → Minutes" },
        { metric: "Modules Integrated", value: "6 Workflows" },
        { metric: "Automation Level", value: "End-to-End" },
        { metric: "Document Quality", value: "Client-Ready" },
      ],
      screenshots: [
        { src: "/images/workflow-boss-ai.png", alt: "Boss AI Agent - Central Orchestrator", label: "Boss AI Agent (Orchestrator)" },
        { src: "/images/workflow-application-copy.png", alt: "Application Copy Generator", label: "Application Copy Generator" },
        { src: "/images/workflow-google-docs.png", alt: "Google Docs Proposal Generator", label: "Google Docs Generator" },
        { src: "/images/workflow-job-scraper.png", alt: "Automated Job Scraper", label: "Job Scraper & Analyzer" },
        { src: "/images/workflow-mermaid.png", alt: "Mermaid Diagram Generator", label: "Mermaid Diagram Generator" },
      ],
      modules: [
        { name: "Boss AI Agent", description: "Central orchestrator with memory-enabled context management and task delegation" },
        { name: "Application Copy Generator", description: "AI-powered personalized cover letters using reusable templates and dynamic personalization" },
        { name: "Job Scraper & Analyzer", description: "Automated job discovery, deduplication, relevance scoring, and proposal initiation" },
        { name: "Google Docs Generator", description: "Professional proposal documents with template cloning and automated sharing" },
        { name: "Mermaid Diagram Generator", description: "AI-powered workflow diagrams converting requirements into technical visualizations" },
        { name: "Data Pipeline", description: "End-to-end data flow connecting all modules with tracking and storage" },
      ],
      category: "automation",
    },
    {
      id: "ai-voice-call-center",
      title: "AI Voice Call Analysis & Lead Processing",
      subtitle: "Automated Call Center Analytics System",
      role: "AI Automation Specialist",
      description:
        "An automated post-call processing system that integrates with Retell AI voice agents — receiving conversation analysis data, processing and storing results, sending team notifications, and returning status updates to the calling platform.",
      challenge:
        "Customer call outcomes were difficult to track consistently and required manual documentation. Teams had no real-time visibility into call results, leading to delayed follow-ups, missed leads, and incomplete reporting records.",
      solution:
        "Built an automated workflow that receives AI-generated call analysis via webhook from Retell AI, validates and normalizes conversation data, stores structured records in Google Sheets for reporting, sends real-time Slack notifications to internal teams, and returns status responses back to the voice platform.",
      technologies: ["Retell AI", "n8n Webhooks", "Google Sheets", "Slack API", "Data Processing", "API Integration"],
      results: [
        { metric: "Call Logging", value: "Fully Automated" },
        { metric: "Team Notifications", value: "Real-Time" },
        { metric: "Manual Documentation", value: "Eliminated" },
        { metric: "Lead Visibility", value: "100%" },
      ],
      screenshots: [
        { src: "/images/workflow-call-center.png", alt: "AI Voice Call Analysis Workflow", label: "Call Processing Workflow" },
      ],
      modules: [
        { name: "Retell AI Webhook", description: "Receives conversation analysis data from AI voice agents" },
        { name: "Data Processor", description: "Validates and normalizes call results into structured records" },
        { name: "Google Sheets Logger", description: "Stores call records for centralized reporting and tracking" },
        { name: "Slack Notifier", description: "Sends real-time alerts to internal teams for follow-up actions" },
        { name: "Status Responder", description: "Returns confirmation responses back to the Retell AI platform" },
      ],
      category: "automation",
    },
    {
      id: "slack-acknowledgement-bot",
      title: "AI Acknowledgement & Smart Reply Bot",
      subtitle: "Intelligent Slack Response Automation",
      role: "AI Automation Specialist",
      description:
        "An AI-powered acknowledgement and response system that automatically handles incoming messages — classifying intent, generating context-aware replies, logging interactions, and delivering personalized responses without human intervention.",
      challenge:
        "Incoming messages and support requests required manual triage and response, leading to delayed acknowledgement times, inconsistent communication quality, and high operational overhead for support teams.",
      solution:
        "Built an intelligent message handling workflow that receives incoming messages, classifies intent using conditional logic, generates personalized AI responses via OpenAI, records interaction history in Google Sheets, and delivers replies through the connected messaging platform — all in real-time.",
      technologies: ["Slack", "n8n", "OpenAI", "Conditional Logic", "Google Sheets", "Messaging APIs"],
      results: [
        { metric: "Response Time", value: "Instant" },
        { metric: "Manual Handling", value: "Reduced" },
        { metric: "Communication Consistency", value: "Standardized" },
        { metric: "Interaction Logging", value: "Automated" },
      ],
      screenshots: [
        { src: "/images/workflow-slack-bot.png", alt: "AI Slack Acknowledgement Bot Workflow", label: "Slack Bot Workflow" },
      ],
      modules: [
        { name: "Message Receiver", description: "Captures incoming messages from Slack and connected platforms" },
        { name: "Intent Classifier", description: "Analyzes message content and determines appropriate response path" },
        { name: "AI Response Generator", description: "Generates context-aware, human-like replies using OpenAI" },
        { name: "Conditional Logic Router", description: "Routes messages to correct handlers based on classification" },
        { name: "Interaction Logger", description: "Records all interactions in Google Sheets for tracking and reporting" },
        { name: "Response Delivery", description: "Sends personalized acknowledgements and replies back to the platform" },
      ],
      category: "automation",
    },
    {
      id: "mirai-labs-ai-database",
      title: "AI Database & Community Management",
      subtitle: "20,000+ Player Community at Mirai Labs",
      role: "Customer Service Representative & AI Database Manager",
      description:
        "Managed a community of 20,000+ players, trained AI agents to automate Level-1 ticket resolution, and audited AI knowledge base databases for automated responses.",
      challenge:
        "A rapidly growing gaming community of 20,000+ players was generating high volumes of support tickets, with most being routine Level-1 inquiries. The team needed to maintain response quality while scaling support capacity without proportional headcount increases.",
      solution:
        "Trained AI agents to handle Level-1 ticket resolution, clearing 70% of routine inquiries automatically. Audited and updated the AI knowledge base database to ensure accuracy. Moderated community forums and led discussions on Web3 topics, directly contributing to user engagement and platform health.",
      technologies: ["AI Agent Training", "Knowledge Base Management", "Community Platforms", "Support Ticketing", "Web3", "Database Management"],
      results: [
        { metric: "Routine Inquiries Automated", value: "70%" },
        { metric: "Community Size Managed", value: "20,000+" },
        { metric: "Satisfaction Scores", value: "Top Tier" },
        { metric: "Platform Health", value: "Improved" },
      ],
      category: "operations",
    },
  ],
  timeline: [
    {
      year: "2018–2020",
      title: "Engine Cadet",
      company: "Atlantic Bulk Carriers Management LTD",
      description:
        "Assisted in the maintenance and monitoring of ship systems, applying disciplined technical problem-solving to ensure operational efficiency and safety. Built a foundation of systematic troubleshooting and process adherence.",
      skills: ["Technical Problem-Solving", "System Maintenance", "Process Adherence", "Safety Protocols"],
    },
    {
      year: "2021–2024",
      title: "Customer Service Representative / Account Specialist (Healthcare)",
      company: "Innovative System Group Global",
      description:
        "Managed end-to-end patient scheduling and registration for multiple providers, reducing no-show rates by 15% through personalized SMS and email confirmations. Served as the primary point of contact for healthcare clients, gathering requirements and coordinating appointments to ensure seamless service delivery.",
      skills: ["Patient Scheduling", "Account Management", "CRM Tools", "Client Communication", "Cross-Department Collaboration"],
    },
    {
      year: "2024–2025",
      title: "Customer Service Representative & AI Database Manager",
      company: "Mirai Labs",
      description:
        "Managed a community of 20,000+ players, resolved complex technical issues, and trained AI agents to automate Level-1 ticket resolution — clearing 70% of routine inquiries. Audited and updated AI knowledge base databases and moderated community forums on Web3 topics.",
      skills: ["AI Agent Training", "Knowledge Base Management", "Community Management", "Web3", "Technical Support"],
    },
    {
      year: "2025–Present",
      title: "Automations Specialist (n8n Operator)",
      company: "Individual Contractor",
      description:
        "Design and deploy scalable automation workflows using n8n, connecting multiple services to streamline client business processes and reduce manual effort by up to 70%. Implement JSON manipulation, conditional logic, and API integrations to solve complex client requirements.",
      skills: ["n8n", "API Integrations", "JSON", "Webhooks", "Workflow Design", "AI Integration", "Documentation"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Marine Engineering",
      school: "Our Lady of Fatima University",
      location: "Valenzuela City, Philippines",
      years: "2013–2017",
    },
  ],
  community: [
    {
      role: "Former Vice President",
      organization: "Bulacan Salinlahi Inc.",
      years: "2015–2016",
      description: "Organized cultural awareness seminars and events.",
    },
    {
      role: "Member",
      organization: "Dularawan Bulacan Foundation Inc.",
      years: "2012–Present",
      description: "Participated in community arts promotion.",
    },
  ],
  testimonials: [
    {
      name: "Airee David",
      role: "People Operations & Leadership Development",
      company: "",
      content:
        "Joshua is the kind of teammate every organization hopes to have—respectful, reliable, and driven by purpose. He consistently demonstrates professionalism, deep Web3 knowledge, and genuine care for the people he serves. His proactive mindset, accountability, and ability to anticipate needs make him someone you can always count on. Simply put, when Joshua is on the team, you know things are in good hands.",
      rating: 5,
      verified: true,
    },
    {
      name: "Daisy Bayani",
      role: "CSO | Community & Product Strategy | Tech & Web3",
      company: "",
      content:
        "Joshua is the type of person you can rely on without second thoughts. He is consistent, thoughtful, calm under pressure, and always focused on doing things the right way. He takes initiative, embraces challenges, and continuously works to improve himself. Hardworking and dependable, he's someone you'd trust to handle a team and keep things running smoothly.",
      rating: 5,
      verified: true,
    },
    {
      name: "Jingjing",
      role: "Founder",
      company: "Superbench AI",
      content:
        "Joshua demonstrated exceptional learning agility, quickly adapting to new tools, absorbing feedback, and successfully handling complex client onboarding and technical debugging tasks. He consistently executes well under guidance, shows a strong work ethic, and has steadily built trust through his ability to learn and deliver results. His growth trajectory extends beyond onboarding execution, with clear potential to evolve into a product-oriented account management role that combines client success, strategic thinking, and ownership. His ability to embrace challenges, improve rapidly, and take on increasing responsibility makes him a valuable asset, and we are excited to see what he can accomplish as he continues to grow.",
      rating: 5,
      verified: true,
    },
    {
      name: "Kai",
      role: "CTO & Co-Founder",
      company: "Superbench AI",
      content:
        "Joshua has done great work since joining the team. He quickly learned Sherlock and our internal systems, demonstrated strong responsiveness to clients, and actively contributed to team collaboration in a remote environment. He consistently engages with both clients and teammates in a professional and proactive manner, helping strengthen communication and alignment across the organization. His adaptability, willingness to improve documentation and onboarding processes, commitment to understanding complex systems, and focus on workflow optimization and automation make him a valuable contributor. Joshua approaches challenges with a growth mindset and continuously looks for ways to improve both his work and the experience of the clients he supports. It has been great having him onboard.",
      rating: 5,
      verified: true,
    },
  ],
  blogCategories: [
    "AI Automation",
    "Customer Success",
    "Operations",
    "Productivity",
    "Workflow Design",
    "Business Systems",
  ],
  aiAssistant: {
    knowledgeBase: [
      {
        topic: "who is joshua about bio introduction",
        response:
          "Nercy Joshua B. Centeno is an AI Automation Specialist and Client Success professional based in Malolos City, Bulacan, Philippines (UTC+8). He has over five years of professional experience across healthcare, gaming/Web3, and client operations, with nearly three years focused specifically on AI automation and n8n workflow design. He helps businesses automate workflows, improve customer operations, and create scalable systems using AI and automation. His full name is Nercy Joshua B. Centeno — he goes by Joshua or Josh. You can reach him at nercy.centeno.freelancer@gmail.com or connect on LinkedIn at linkedin.com/in/nercy-joshua-centeno.",
      },
      {
        topic: "what does joshua do work services",
        response:
          "Joshua works in AI automation, workflow automation, chatbot development, process improvement, knowledge management, and business operations. He offers: n8n automation workflow design and implementation, AI integration (OpenAI, Anthropic, Google Gemini), API integrations and webhooks, multi-agent AI system architecture, client onboarding systems, knowledge base management, documentation and SOP creation, business process analysis, Slack and team automation, Retell AI voice agent integration, content automation, and proposal generation systems. He is available for both freelance projects and full-time opportunities.",
      },
      {
        topic: "n8n make zapier tools automation platform",
        response:
          "Joshua's primary tool is n8n, where he has nearly three years of experience designing and deploying scalable automation workflows. He also understands automation principles across platforms and can evaluate whether n8n, Make.com, or another solution best fits a project's requirements. His tech stack also includes OpenAI, Anthropic, Google Gemini (AI/LLM integrations), Zapier, Make.com, Google Sheets, Google Docs, Slack API, Retell AI, Mermaid.js, Blotato, Telegram, REST APIs, webhooks, JSON manipulation, Google Workspace, Microsoft 365, and database management.",
      },
      {
        topic: "chatbot build website ai assistant",
        response:
          "Yes, Joshua builds AI-powered chatbots and assistants. His flagship project is the Enterprise Multi-Agent AI Assistant — a system that classifies user requests, delegates tasks to specialized AI agents, retrieves business data from knowledge bases, executes operational workflows, and generates contextual responses through a single conversational interface. It uses 8 modules including Intent Classification, Multi-Agent Routing, Knowledge Base Retrieval, Context-Aware Memory, and Response Generation. He has also built Slack acknowledgement bots and customer support chatbots.",
      },
      {
        topic: "crm integrate api connect existing",
        response:
          "If your CRM supports APIs, webhooks, or integrations, Joshua can typically evaluate whether it can be connected to an automation workflow. He has experience connecting automation workflows with third-party systems through APIs, webhooks, databases, spreadsheets, and cloud platforms. Many of his projects involve connecting multiple software platforms together into unified automated workflows.",
      },
      {
        topic: "projects portfolio work examples",
        response:
          "Joshua has built 5 featured projects: 1) Enterprise Multi-Agent AI Assistant — multi-agent chatbot with 8 modules for business operations. 2) Upwork AI Proposal Builder Suite — 6-module system automating proposal creation from job discovery to client-ready documents. 3) AI Voice Call Analysis & Lead Processing — Retell AI integration for automated post-call processing with Slack notifications. 4) AI Acknowledgement & Smart Reply Bot — intelligent Slack response system with intent classification and context-aware replies. 5) AI Database & Community Management at Mirai Labs — managed 20,000+ player community and trained AI agents for Level-1 ticket resolution.",
      },
      {
        topic: "proposal builder upwork freelancer",
        response:
          "The Upwork AI Proposal Builder Suite automates the end-to-end process of creating proposals. It has 6 modules: Boss AI Agent (central orchestrator with memory-enabled context), Application Copy Generator (personalized cover letters), Job Scraper & Analyzer (automated job discovery and qualification), Google Docs Generator (professional proposal documents), Mermaid Diagram Generator (workflow visualizations), and a Data Pipeline. Built using n8n, OpenAI, Google Docs API, Google Drive API, Google Sheets API, Mermaid.js, and Web Scraping.",
      },
      {
        topic: "voice call center retell phone",
        response:
          "Joshua built an AI Voice Call Analysis & Lead Processing system that integrates with Retell AI voice agents. It receives conversation analysis via webhook, validates and normalizes call results, stores records in Google Sheets, sends real-time Slack notifications, and returns status responses. Modules: Retell AI Webhook, Data Processor, Google Sheets Logger, Slack Notifier, and Status Responder.",
      },
      {
        topic: "slack bot reply message notification",
        response:
          "The AI Acknowledgement & Smart Reply Bot automatically handles incoming messages by classifying intent, generating context-aware replies using OpenAI, logging interactions in Google Sheets, and delivering personalized responses. Modules: Message Receiver, Intent Classifier, AI Response Generator, Conditional Logic Router, Interaction Logger, and Response Delivery. Built using Slack, n8n, OpenAI, Google Sheets, and Messaging APIs.",
      },
      {
        topic: "why hire different unique value worth",
        response:
          "Joshua approaches automation from both a technical and operational perspective. Instead of only building workflows, he studies the entire business process, identifies bottlenecks, and designs systems that reduce manual work while remaining easy to maintain. With over 5 years across healthcare, gaming/Web3, and consulting, he bridges business needs and technical implementations — reducing manual effort by up to 70%, automating 70% of routine support inquiries, and building enterprise-level multi-agent AI systems. Verified testimonials praise his reliability, professionalism, and growth mindset.",
      },
      {
        topic: "how work process step plan",
        response:
          "Joshua follows a 4-step process: 1) Discovery Call — discuss business challenges, goals, and current workflows. 2) Strategy & Planning — analyze processes, identify automation opportunities, design a solution blueprint. 3) Implementation — build and deploy automation workflows, integrate AI tools, ensure seamless integration. 4) Training & Support — provide documentation, SOPs, and hands-on training so your team can manage the systems confidently.",
      },
      {
        topic: "rate pricing cost budget affordable charge fee",
        response:
          "Joshua's baseline rate is $15 USD per hour, but this is negotiable depending on the project scope, duration, and complexity. He is open to discussing fixed-price arrangements for well-defined projects. Not every solution requires a large investment — he can often recommend phased implementations, quick wins, or lightweight automation strategies that deliver value without requiring a large budget. Reach out via the contact form or book a discovery call to discuss your specific needs.",
      },
      {
        topic: "available schedule full-time freelance start",
        response:
          "Joshua is available for both freelance projects and full-time opportunities. He is currently operating as an independent automation specialist. For high-priority projects, he will provide realistic timelines and determine whether an accelerated delivery schedule is possible. You can book a free 30-minute discovery call through the Calendly link on this website.",
      },
      {
        topic: "industry healthcare gaming startup web3",
        response:
          "Joshua has supported businesses across multiple industries: Gaming/Web3 (Mirai Labs — managed 20,000+ player community, led Web3 discussions), Healthcare (Innovative System Group Global — patient scheduling, reduced no-show rates by 15%), and various startups and SMEs through his freelance practice. His experience spans e-commerce, gaming, healthcare, SaaS, and tech startups.",
      },
      {
        topic: "career background experience history timeline",
        response:
          "Joshua's career progression: 1) Engine Cadet at Atlantic Bulk Carriers (2018-2020) — built disciplined technical problem-solving foundation. 2) Customer Service Rep / Account Specialist in Healthcare at Innovative System Group Global (2021-2024) — managed patient scheduling for multiple providers, reduced no-show rates by 15%. 3) Customer Service Rep & AI Database Manager at Mirai Labs (2024-2025) — managed 20,000+ player community, trained AI agents for 70% Level-1 automation. 4) Automations Specialist (n8n Operator) as Individual Contractor (2025-Present) — designs and deploys scalable automation workflows.",
      },
      {
        topic: "skills technical core expertise",
        response:
          "Joshua's core skills: AI Automation & Workflow Design, Client Success & Relationship Management, Project Coordination & Operations, AI & LLM Integrations (OpenAI, Anthropic, Google Gemini), Customer Support & Community Management, Business Process Analysis, API Integrations & Webhooks, Database & Knowledge Base Management, Documentation & SOPs, and No-Code/Low-Code Tools (n8n, Zapier, Make.com).",
      },
      {
        topic: "education degree university marine",
        response:
          "Joshua holds a Bachelor of Science in Marine Engineering from Our Lady of Fatima University in Valenzuela City, Philippines (2013-2017). His engineering background gives him a disciplined, systematic approach to technical problem-solving and process design.",
      },
      {
        topic: "community volunteer involvement leadership",
        response:
          "Joshua served as Vice President of Bulacan Salinlahi Inc. (2015-2016), organizing cultural awareness seminars and events. He has been a member of Dularawan Bulacan Foundation Inc. since 2012, participating in community arts promotion.",
      },
      {
        topic: "testimonial reference recommendation review feedback",
        response:
          "Joshua has received verified recommendations. Airee David (People Operations) describes him as respectful, reliable, and driven by purpose. Daisy Bayani (CSO, Community & Product Strategy) notes he is consistent, thoughtful, calm under pressure. Jingjing (Founder, Superbench AI) highlights his exceptional learning agility and work ethic. Kai (CTO & Co-Founder, Superbench AI) praises his adaptability, growth mindset, and focus on workflow optimization. All testimonials are verified and available on the website.",
      },
      {
        topic: "communication progress update transparent",
        response:
          "Joshua prioritizes clear communication, collaborative problem-solving, and keeping stakeholders informed throughout the project lifecycle. He creates documentation and guides for non-technical audiences, and works well with both technical and non-technical teams. His verified testimonials specifically praise his communication and reliability.",
      },
      {
        topic: "training support after delivery maintenance break",
        response:
          "Joshua designs systems with reliability and maintainability in mind. He provides documentation, SOPs, monitoring recommendations, and troubleshooting guidance. If needed, he walks teams through workflows, explains how systems operate, and helps team members become comfortable managing the automation. He also offers ongoing support options for projects that need continued maintenance.",
      },
      {
        topic: "non-technical team explain simple beginner start",
        response:
          "Joshua regularly works with non-technical stakeholders. Many of his clients are small teams with no technical people. He explains concepts, workflows, and decisions in plain language, and creates documentation intended for non-technical audiences. If you don't know where to start with automation, he can help identify opportunities, map processes, prioritize quick wins, and create a roadmap aligned with your budget and goals.",
      },
      {
        topic: "broken fix troubleshoot existing workflow",
        response:
          "Yes, Joshua has experience troubleshooting workflows, identifying bottlenecks, improving reliability, handling edge cases, and optimizing automation systems that have become difficult to maintain. If your n8n automation keeps breaking or your existing systems need improvement, he can evaluate the current setup and provide solutions.",
      },
      {
        topic: "urgent fast quick turnaround time",
        response:
          "Availability varies depending on current commitments. The best approach is to reach out with your requirements. For high-priority projects, Joshua will provide realistic timelines and determine whether an accelerated delivery schedule is possible. You can contact him directly via email at nercy.centeno.freelancer@gmail.com or book a discovery call through Calendly.",
      },
      {
        topic: "timezone remote async collaborate",
        response:
          "Joshua is based in the Philippines (UTC+8) and has experience collaborating with distributed teams across different time zones. He can work asynchronously and is comfortable with documentation-driven, async-first communication. Project communication and meeting schedules can be coordinated based on mutual availability.",
      },
      {
        topic: "multiple projects simultaneously at once",
        response:
          "Yes, Joshua is experienced in managing multiple initiatives simultaneously while maintaining structured workflows, documentation, and communication practices. He can work independently on projects or collaborate closely with founders, operations teams, marketing teams, and technical stakeholders.",
      },
      {
        topic: "knowledge base documentation faq organize",
        response:
          "Knowledge management is one of Joshua's strongest areas of experience. He has extensive experience organizing, optimizing, and maintaining knowledge bases designed for AI retrieval, creating documentation and SOPs, restructuring FAQ content for clarity, and building AI-friendly documentation optimized for retrieval-based systems.",
      },
      {
        topic: "content automation generate pipeline",
        response:
          "Joshua has worked on AI-assisted content generation and automation systems. He can automate content workflows, create AI-generated content pipelines, and build structured content operations. His experience includes content creation, content organization, content automation, and optimizing content for AI retrieval.",
      },
      {
        topic: "motivated motivation future goal ambition",
        response:
          "Joshua enjoys solving problems and building systems that eliminate repetitive work. He finds satisfaction in helping businesses become more efficient, scalable, and effective through automation and AI. He aims to become a recognized leader in AI automation and intelligent business systems, helping organizations leverage technology for greater efficiency and growth.",
      },
      {
        topic: "complex achievement biggest accomplishment",
        response:
          "One of Joshua's biggest achievements is bridging the gap between business operations and technical implementation. His most complex work includes multi-agent AI systems with 8+ interconnected modules, automated proposal generation suites with 6 integrated workflows, voice call analysis systems, and community management platforms handling 20,000+ users. He consistently transforms manual processes into scalable automated systems.",
      },
      {
        topic: "wordpress website web development",
        response:
          "Joshua has experience working on automation and chatbot projects connected to websites. While his primary focus is automation and AI systems rather than web development, he can build solutions that integrate with your existing web platforms through APIs and webhooks.",
      },
      {
        topic: "review evaluate audit existing process",
        response:
          "Understanding existing workflows is often the first step before recommending automation. Joshua can review your current processes, identify bottlenecks and automation opportunities, and provide recommendations before implementation. Process analysis and workflow discovery are common starting points for his projects.",
      },
      {
        topic: "internal tool build custom",
        response:
          "Yes, Joshua focuses on understanding the business process first and then designing custom solutions that fit the problem. Automation projects often involve creating internal tools that help teams operate more efficiently — from AI assistants and dashboards to workflow automation systems and knowledge management platforms.",
      },
    ],
  },
};

export const seoKeywords = [
  "AI Automation Specialist",
  "n8n Automation Expert",
  "Workflow Automation Consultant",
  "Client Success Manager",
  "Project Manager",
  "Business Process Automation",
  "AI Operations Specialist",
  "Customer Success Professional",
  "Nercy Centeno",
  "AI Automation Philippines",
  "Business Automation Consultant",
  "Workflow Design Expert",
];