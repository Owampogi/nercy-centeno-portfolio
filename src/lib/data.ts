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
        topic: "automation projects",
        response:
          "Nercy has worked on several key automation projects including Daloy PH (an omnichannel lead management platform), AI-powered chatbots and Slack bots, automated reminder systems, and comprehensive business workflow automations using tools like n8n, OpenAI APIs, and custom integrations.",
      },
      {
        topic: "industries supported",
        response:
          "Nercy has supported businesses across multiple industries: Gaming/Web3 (Mirai Labs with 20,000+ community), Healthcare (Innovative System Group Global), and various SMEs through his freelance automation practice.",
      },
      {
        topic: "tools and technologies",
        response:
          "Nercy works with n8n, Zapier, Make.com for workflow automation. He integrates AI models including OpenAI, Anthropic, and Google Gemini. He's proficient with REST APIs, webhooks, JSON manipulation, Google Workspace, Microsoft 365, and database management.",
      },
      {
        topic: "why hire nercy",
        response:
          "Nercy brings a unique combination of client success experience and technical automation expertise. With over 5 years of experience across healthcare, gaming, and freelance consulting, he bridges the gap between business needs and technical implementations. He's reduced manual effort by up to 70% for clients and automated 70% of routine support inquiries.",
      },
      {
        topic: "career background",
        response:
          "Nercy started as an Engine Cadet at Atlantic Bulk Carriers, transitioned into healthcare account management at Innovative System Group Global, then moved into AI database management at Mirai Labs where he managed a 20,000+ player community. He now operates as an independent automation specialist designing n8n workflows for clients.",
      },
      {
        topic: "services offered",
        response:
          "Nercy offers n8n automation workflow design, AI integration (OpenAI, Anthropic, Google Gemini), API integrations, client onboarding systems, knowledge base management, documentation and SOP creation, and business process analysis. He's available for both freelance projects and full-time opportunities.",
      },
      {
        topic: "education",
        response:
          "Nercy holds a Bachelor of Science in Marine Engineering from Our Lady of Fatima University (2013-2017). His engineering background gives him a disciplined approach to technical problem-solving and systematic thinking.",
      },
      {
        topic: "community involvement",
        response:
          "Nercy served as Vice President of Bulacan Salinlahi Inc. (2015-2016), organizing cultural awareness seminars and events. He's been a member of Dularawan Bulacan Foundation Inc. since 2012, participating in community arts promotion.",
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