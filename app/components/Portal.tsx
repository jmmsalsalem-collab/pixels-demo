"use client";
import { CheckCircle, Clock, Download, MessageSquare, Image as ImageIcon, Lock } from "lucide-react";

const milestones = [
  { label: "Design Brief", date: "May 5", done: true },
  { label: "3D Renders Approved", date: "May 18", done: true },
  { label: "Procurement Started", date: "Jun 1", done: true },
  { label: "Installation Phase 1", date: "Jun 15", done: false, active: true },
  { label: "Audio/Visual Setup", date: "Jun 22", done: false },
  { label: "Final Handover", date: "Jul 1", done: false },
];

const updates = [
  { date: "Jun 8", title: "Display units arrived from supplier", type: "procurement", unread: true },
  { date: "Jun 6", title: "Cable routing completed — Phase 1", type: "execution", unread: true },
  { date: "Jun 3", title: "Your approval needed: Lighting layout v2", type: "approval", unread: false },
  { date: "May 28", title: "Mood board finalized and uploaded", type: "design", unread: false },
];

const typeColor: Record<string, string> = {
  procurement: "bg-blue-500/20 text-blue-400",
  execution: "bg-green-500/20 text-green-400",
  approval: "bg-yellow-500/20 text-yellow-400",
  design: "bg-purple-500/20 text-purple-400",
};

export default function Portal() {
  return (
    <div className="p-6 space-y-6">
      <div className="fade-up fade-up-1 flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Client Portal</h2>
          <p className="text-sm text-[#666] mt-0.5">Secure external view for your clients</p>
        </div>
        <div className="flex items-center gap-2 bg-[#111] border border-[#1E1E1E] rounded-lg px-3 py-2 text-xs text-[#888]">
          <Lock size={12} className="text-[#C9A84C]" />
          <span>Isolated · RBAC secured</span>
        </div>
      </div>

      {/* Preview badge */}
      <div className="fade-up fade-up-1 bg-[#111] border border-[#1E1E1E] rounded-xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#C9A84C22] border border-[#C9A84C44] flex items-center justify-center">
          <span className="font-semibold text-[#C9A84C]">M</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-[#E8E8E8]">Mohammed Al-Rashid</div>
          <div className="text-xs text-[#666]">Al-Nasser Gaming Suite · Last login: Today 11:42 AM</div>
        </div>
        <div className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-2.5 py-1">
          Portal Active
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 fade-up fade-up-2">
        {/* Progress */}
        <div className="col-span-2 space-y-4">
          {/* Overall */}
          <div className="stat-card">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold text-[#E8E8E8]">Project Progress</div>
              <span className="text-lg font-display font-bold gold-text">72%</span>
            </div>
            <div className="h-2.5 bg-[#1E1E1E] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] rounded-full transition-all" style={{ width: "72%" }} />
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-[#666]">
              <span>Started May 5</span>
              <span>Est. completion Jul 1</span>
            </div>
          </div>

          {/* Milestones */}
          <div className="stat-card">
            <div className="text-sm font-semibold text-[#E8E8E8] mb-4">Milestones</div>
            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-px bg-[#1E1E1E]" />
              <div className="space-y-3">
                {milestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-3 relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center z-10 flex-shrink-0 ${
                      m.done ? "bg-green-500/20 border border-green-500/40"
                      : m.active ? "bg-[#C9A84C22] border border-[#C9A84C44]"
                      : "bg-[#1A1A1A] border border-[#242424]"
                    }`}>
                      {m.done ? <CheckCircle size={12} className="text-green-400" />
                      : m.active ? <Clock size={12} className="text-[#C9A84C] pulse-gold" />
                      : <div className="w-2 h-2 rounded-full bg-[#333]" />}
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className={`text-sm ${m.done ? "text-[#666] line-through" : m.active ? "text-[#E8E8E8] font-medium" : "text-[#555]"}`}>{m.label}</span>
                      <span className="text-xs text-[#555]">{m.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="stat-card overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-[#E8E8E8]">Updates</div>
            <span className="w-4 h-4 rounded-full bg-[#C9A84C] text-black text-[10px] flex items-center justify-center font-bold">2</span>
          </div>
          <div className="space-y-2 flex-1">
            {updates.map((u, i) => (
              <div key={i} className={`p-2.5 rounded-lg border cursor-pointer transition-colors ${u.unread ? "border-[#C9A84C22] bg-[#C9A84C08]" : "border-[#1A1A1A] hover:border-[#222]"}`}>
                {u.unread && <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mb-1.5" />}
                <div className="text-xs text-[#E8E8E8] font-medium leading-snug">{u.title}</div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${typeColor[u.type]}`}>{u.type}</span>
                  <span className="text-[10px] text-[#555]">{u.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-3 pt-3 border-t border-[#1A1A1A] space-y-2">
            <button className="w-full flex items-center gap-2 bg-[#161616] border border-[#1E1E1E] rounded-lg px-3 py-2 text-xs text-[#888] hover:text-[#E8E8E8] hover:border-[#2A2A2A] transition-colors">
              <MessageSquare size={12} /> Message project manager
            </button>
            <button className="w-full flex items-center gap-2 bg-[#161616] border border-[#1E1E1E] rounded-lg px-3 py-2 text-xs text-[#888] hover:text-[#E8E8E8] hover:border-[#2A2A2A] transition-colors">
              <Download size={12} /> Download contract
            </button>
            <button className="w-full flex items-center gap-2 bg-[#161616] border border-[#1E1E1E] rounded-lg px-3 py-2 text-xs text-[#888] hover:text-[#E8E8E8] hover:border-[#2A2A2A] transition-colors">
              <ImageIcon size={12} /> View media gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
