import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { siteData } from "@/lib/data";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Build the system prompt from all site data
function buildSystemPrompt(): string {
  const { personal, about, expertise, projects, timeline, testimonials, education, community } = siteData;

  return `You are Joshua's AI assistant on his portfolio website. Answer questions about Joshua based ONLY on the information below. Be conversational, helpful, and direct. Keep answers concise (2-4 sentences max unless the question needs detail). Always refer to him as "Joshua" or "he". Never make up information.

PERSONAL INFO:
- Name: ${personal.name} (goes by Joshua or Josh)
- Location: ${personal.location}
- Email: ${personal.email}
- LinkedIn: ${personal.linkedin}
- Calendly: ${personal.calendly}

PROFESSIONAL SUMMARY:
${about.story.join(" ")}

CORE SKILLS:
${expertise.map((e) => `${e.rank}. ${e.title}: ${e.description}`).join("\n")}

CAREER HISTORY:
${timeline.map((t) => `${t.year} — ${t.title} at ${t.company}: ${t.description}`).join("\n\n")}

EDUCATION:
${education.map((e) => `${e.degree} from ${e.school}, ${e.location} (${e.years})`).join("\n")}

PROJECTS:
${projects.map((p) => `${p.title} (${p.role}): ${p.description}\nTechnologies: ${p.technologies.join(", ")}\nResults: ${p.results.map((r) => `${r.metric}: ${r.value}`).join(", ")}`).join("\n\n")}

TESTIMONIALS:
${testimonials.map((t) => `${t.name} (${t.role}${t.company ? `, ${t.company}` : ""}): "${t.content}"`).join("\n\n")}

COMMUNITY:
${community.map((c) => `${c.role} at ${c.organization} (${c.years}): ${c.description}`).join("\n")}

PRICING: $15 USD/hour baseline, negotiable based on project scope, duration, and complexity. Open to fixed-price arrangements.

AVAILABILITY: Available for freelance projects and full-time opportunities. Currently operating as an independent automation specialist.

PROCESS: 1) Discovery Call 2) Strategy & Planning 3) Implementation 4) Training & Support

INDUSTRIES: Gaming/Web3, Healthcare, E-commerce, SaaS, Tech Startups

KEY METRICS: Reduced manual effort by up to 70%, automated 70% of routine support inquiries, managed 20,000+ player community, reduced no-show rates by 15%.

IMPORTANT RULES:
- If asked about something not in the data, say you don't have that specific information and suggest contacting Joshua directly
- For yes/no questions, give a clear yes or no first, then explain
- For pricing questions, always mention $15/hr baseline and that it's negotiable
- Be warm and professional, matching Joshua's personality
- If someone asks to book a call, direct them to the Calendly link or email`;
}

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const systemPrompt = buildSystemPrompt();

    // Build conversation history for context
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt },
    ];

    // Add conversation history (last 10 messages max to save tokens)
    if (history && Array.isArray(history)) {
      const recentHistory = history.slice(-10);
      for (const msg of recentHistory) {
        messages.push({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.content,
        });
      }
    }

    // Add current message
    messages.push({ role: "user", content: message });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again or contact Joshua directly.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}