"use client";
import { Search, Filter, Plus, Phone, Mail, Calendar, ChevronRight, TrendingUp } from "lucide-react";

const pipeline = [
  { stage: "Inquiry", count: 8, color: "#6B7280" },
  { stage: "Meeting", count: 5, color: "#3B82F6" },
  { stage: "Proposal", count: 4, color: "#8B5CF6" },
  { stage: "Contract", count: 3, color: "#F59E0B" },
  { stage: "Execution", count: 6, color: "#10B981" },
  { stage: "Delivery", count: 2, color: "#C9A84C" },
];

const clients = [
  { name: "Mohammed Al-Rashid", type: "Gaming Room", budget: "KD 22,000", stage: "Execution", last: "2 days ago", avatar: "M" },
  { name: "Fatima Al-Sayed", type: "Architectural", budget: "KD 85,000", stage: "Contract", last: "1 day ago", avatar: "F" },
  { name: "Ahmed Boodai", type: "Living Room", budget: "KD 12,500", stage: "Proposal", last: "3 days ago", avatar: "A" },
  { name: "Sara Al-Mutairi", type: "Gaming Room", budget: "KD 31,000", stage: "Meeting", last: "Today", avatar: "S" },
  { name: "Khaled Dashti", type: "Architectural", budget: "KD 120,000", stage: "Inquiry", last: "Today", avatar: "K" },
  { name: "Noura Al-Hamad", type: "Living Room", budget: "KD 9,800", stage: "Execution", last: "4 days ago", avatar: "N" },
];

const stageColor: Record<string, string> = {
  Inquiry: "bg-gray-500/20 text-gray-400",
  Meeting: "bg-blue-500/20 text-blue-400",
  Proposal: "bg-purple-500/20 text-purple-400",
  Contract: "bg-yellow-500/20 text-yellow-400",
  Execution: "bg-green-500/20 text-green-400",
  Delivery: "bg-[#C9A84C]/20 text-[#C9A84C]",
};

export default function CRM() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between fade-up fade-up-1">
        <div>
          <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">CRM</h2>
          <p className="text-sm text-[#666] mt-0.5">Client management & sales pipeline</p>
        </div>
        <button className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          <Plus size={15} /> Add Client
        </button>
      </div>

      {/* Pipeline */}
      <div className="fade-up fade-up-2">
        <div className="text-xs font-medium text-[#666] uppercase tracking-wider mb-3">Sales Pipeline</div>
        <div className="grid grid-cols-6 gap-2">
          {pipeline.map((stage) => (
            <div key={stage.stage} className="stat-card text-center cursor-pointer hover:border-[#C9A84C33]">
              <div className="text-2xl font-display font-bold" style={{ color: stage.color }}>{stage.count}</div>
              <div className="text-[11px] text-[#666] mt-1">{stage.stage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion bar */}
      <div className="fade-up fade-up-2 bg-[#111] border border-[#1E1E1E] rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-[#E8E8E8]">Pipeline Flow</div>
          <div className="flex items-center gap-1 text-xs text-green-400">
            <TrendingUp size={12} /> 34% conversion rate
          </div>
        </div>
        <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
          {pipeline.map((s) => (
            <div key={s.stage} className="flex-1 rounded-sm" style={{ background: s.color, opacity: 0.7 }} title={s.stage} />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {pipeline.map((s) => (
            <div key={s.stage} className="text-[10px] text-[#555] flex-1 text-center">{s.stage}</div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="fade-up fade-up-3 flex gap-2">
        <div className="flex-1 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
          <input className="w-full bg-[#111] border border-[#1E1E1E] rounded-lg pl-9 pr-4 py-2.5 text-sm text-[#E8E8E8] placeholder-[#444] focus:outline-none focus:border-[#C9A84C33]" placeholder="Search clients..." />
        </div>
        <button className="flex items-center gap-2 bg-[#111] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-sm text-[#888] hover:text-[#E8E8E8] transition-colors">
          <Filter size={14} /> Filter
        </button>
      </div>

      {/* Client list */}
      <div className="fade-up fade-up-4 bg-[#111] border border-[#1E1E1E] rounded-xl overflow-hidden">
        {clients.map((client, i) => (
          <div key={i} className="flex items-center gap-4 px-4 py-3.5 border-b border-[#1A1A1A] last:border-0 hover:bg-[#161616] cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#C9A84C22] border border-[#C9A84C44] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-semibold text-[#C9A84C]">{client.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#E8E8E8]">{client.name}</div>
              <div className="text-xs text-[#666] mt-0.5">{client.type} · {client.budget}</div>
            </div>
            <span className={`px-2 py-1 rounded-full text-[11px] font-medium ${stageColor[client.stage]}`}>{client.stage}</span>
            <div className="text-xs text-[#555] w-20 text-right">{client.last}</div>
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-lg bg-[#1A1A1A] hover:bg-[#222] flex items-center justify-center text-[#666] hover:text-[#E8E8E8] transition-colors">
                <Phone size={12} />
              </button>
              <button className="w-7 h-7 rounded-lg bg-[#1A1A1A] hover:bg-[#222] flex items-center justify-center text-[#666] hover:text-[#E8E8E8] transition-colors">
                <Mail size={12} />
              </button>
              <button className="w-7 h-7 rounded-lg bg-[#1A1A1A] hover:bg-[#222] flex items-center justify-center text-[#666] hover:text-[#E8E8E8] transition-colors">
                <Calendar size={12} />
              </button>
            </div>
            <ChevronRight size={14} className="text-[#444]" />
          </div>
        ))}
      </div>
    </div>
  );
}
