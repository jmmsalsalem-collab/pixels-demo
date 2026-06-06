"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, TrendingUp, Settings, Search } from "lucide-react";

const agents = [
  { id: "marketing", label: "Marketing Agent", icon: TrendingUp, desc: "Campaigns, ad copy, competitor research, content strategy", color: "#8B5CF6" },
  { id: "operations", label: "Operations Agent", icon: Settings, desc: "Project tracking, risk identification, resource optimization", color: "#3B82F6" },
  { id: "research", label: "Research Mode", icon: Search, desc: "Internal data + external knowledge, answer any business question", color: "#10B981" },
];

const presetPrompts: Record<string, string[]> = {
  marketing: [
    "Write a social media post for our latest gaming room project",
    "Analyze our top 3 competitors in Kuwait",
    "Suggest a campaign for Eid season gaming room promotions",
  ],
  operations: [
    "Which projects are at risk of delay this week?",
    "Suggest task assignments for the Al-Nasser project",
    "Identify the biggest operational bottlenecks this month",
  ],
  research: [
    "What's the average ROI for gaming room installations in the GCC?",
    "Compare our proposal win rate vs industry benchmarks",
    "What are current trends in architectural interior design for Kuwait?",
  ],
};

const demoResponses: Record<string, string> = {
  "Write a social media post for our latest gaming room project":
    "🎮 **Level up your living space.**\n\nWe just completed a custom gaming room in Rumaithiya — 4K surround displays, Dolby Atmos audio, custom lighting, and a setup that turns any match into an experience.\n\nThis is what Pixels does. Not just design. An entire world.\n\n📩 DM us to build yours.\n\n#PixelsKuwait #GamingRoom #InteriorDesign #Kuwait",
  "Which projects are at risk of delay this week?":
    "⚠️ **Risk Analysis — Week of June 9, 2026**\n\n**High Risk:**\n- **Al-Nasser Gaming Suite**: Display delivery from supplier delayed by 3 days. Recommend contacting Al-Jazeera Electronics for alternative sourcing.\n\n**Medium Risk:**\n- **Salmiya Villa**: Client approval on floor plan pending for 5 days. Suggest sending follow-up via portal today.\n\n**On Track:** All other 17 active projects within timeline.\n\n**Recommended Action:** Schedule a 15-min sync with Fahad re: procurement alternatives.",
};

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIAgents() {
  const [activeAgent, setActiveAgent] = useState("marketing");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your Pixels AI assistant powered by Claude. Select an agent mode and ask me anything — I have full context on your projects, clients, and team." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: msg }]);
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    const response = demoResponses[msg] || `I've analyzed your request as the **${agents.find(a => a.id === activeAgent)?.label}**.\n\n**${msg}**\n\nBased on current Pixels data — 19 active projects, 47 clients, and recent activity — here is my analysis:\n\nThis is a live demo. In the full deployment, I would access your real project data, client history, vendor database, and financial records to give you actionable, specific recommendations tailored to Pixels' operations.\n\nWould you like me to elaborate on any aspect of this?`;
    setMessages(prev => [...prev, { role: "assistant", content: response }]);
    setLoading(false);
  };

  return (
    <div className="p-6 h-[calc(100vh-0px)] flex flex-col gap-4">
      <div className="fade-up fade-up-1">
        <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">AI Agent System</h2>
        <p className="text-sm text-[#666] mt-0.5">Powered by Claude AI · Context-aware across all 11 modules</p>
      </div>

      {/* Agent selector */}
      <div className="fade-up fade-up-2 grid grid-cols-3 gap-3">
        {agents.map((agent) => {
          const Icon = agent.icon;
          return (
            <button key={agent.id} onClick={() => setActiveAgent(agent.id)}
              className={`text-left p-3.5 rounded-xl border transition-all ${activeAgent === agent.id ? "border-[#C9A84C44] bg-[#C9A84C08]" : "border-[#1E1E1E] bg-[#111] hover:border-[#2A2A2A]"}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: agent.color + "22", color: agent.color }}>
                  <Icon size={14} />
                </div>
                <span className={`text-xs font-semibold ${activeAgent === agent.id ? "text-[#C9A84C]" : "text-[#E8E8E8]"}`}>{agent.label}</span>
              </div>
              <p className="text-[11px] text-[#666] leading-relaxed">{agent.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Chat */}
      <div className="fade-up fade-up-3 flex-1 flex flex-col bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl overflow-hidden min-h-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles size={12} className="text-black" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-[#C9A84C] text-black font-medium ml-auto"
                  : "bg-[#161616] border border-[#1E1E1E] text-[#E8E8E8]"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                <Sparkles size={12} className="text-black pulse-gold" />
              </div>
              <div className="bg-[#161616] border border-[#1E1E1E] rounded-xl px-3.5 py-2.5">
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Presets */}
        <div className="px-4 py-2 border-t border-[#1A1A1A] flex gap-2 overflow-x-auto">
          {presetPrompts[activeAgent].map((p, i) => (
            <button key={i} onClick={() => sendMessage(p)}
              className="flex-shrink-0 text-[11px] text-[#888] bg-[#161616] border border-[#1E1E1E] rounded-lg px-2.5 py-1.5 hover:border-[#C9A84C44] hover:text-[#C9A84C] transition-colors">
              {p.length > 40 ? p.slice(0, 40) + "…" : p}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-[#1A1A1A] flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage("")}
            placeholder={`Ask the ${agents.find(a => a.id === activeAgent)?.label}...`}
            className="flex-1 bg-[#161616] border border-[#1E1E1E] rounded-lg px-3.5 py-2.5 text-sm text-[#E8E8E8] placeholder-[#444] focus:outline-none focus:border-[#C9A84C33]"
          />
          <button onClick={() => sendMessage("")}
            className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center text-black hover:opacity-90 transition-opacity">
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
