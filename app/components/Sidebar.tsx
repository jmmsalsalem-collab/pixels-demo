"use client";
import {
  Users, FolderKanban, Bot, Globe, FileText,
  DollarSign, Image, Truck, BarChart3, CheckSquare,
  Building2, LayoutDashboard, ChevronRight, Sparkles
} from "lucide-react";

const modules = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "crm", label: "CRM", icon: Users },
  { id: "projects", label: "Projects & Tasks", icon: FolderKanban },
  { id: "ai-agents", label: "AI Agents", icon: Bot },
  { id: "portal", label: "Client Portal", icon: Globe },
  { id: "proposals", label: "Proposal Builder", icon: FileText },
  { id: "financials", label: "Financial Tracking", icon: DollarSign },
  { id: "media", label: "Media Gallery", icon: Image },
  { id: "vendors", label: "Vendor Management", icon: Truck },
  { id: "reports", label: "AI Reports", icon: BarChart3 },
  { id: "templates", label: "Task Templates", icon: CheckSquare },
  { id: "directory", label: "Employee Directory", icon: Building2 },
];

export default function Sidebar({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <aside className="w-[220px] flex-shrink-0 bg-[#0D0D0D] border-r border-[#1E1E1E] h-screen sticky top-0 flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-[#1E1E1E]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
            <span className="text-black font-display font-bold text-sm">P</span>
          </div>
          <div>
            <div className="font-display font-semibold text-sm text-[#E8E8E8] leading-none">PIXELS</div>
            <div className="text-[10px] text-[#555] mt-0.5 font-body">Smart Platform</div>
          </div>
        </div>
      </div>

      {/* AI Badge */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 bg-[#C9A84C11] border border-[#C9A84C22] rounded-lg px-3 py-2">
          <Sparkles size={11} className="text-[#C9A84C]" />
          <span className="text-[11px] text-[#C9A84C] font-body">Claude AI Powered</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 pb-4 overflow-y-auto space-y-0.5">
        {modules.map((mod) => {
          const Icon = mod.icon;
          return (
            <button
              key={mod.id}
              className={`sidebar-link w-full text-left ${active === mod.id ? "active" : ""}`}
              onClick={() => onSelect(mod.id)}
            >
              <Icon size={15} />
              <span className="flex-1">{mod.label}</span>
              {active === mod.id && <ChevronRight size={12} className="text-[#C9A84C]" />}
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-[#1E1E1E]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#C9A84C22] border border-[#C9A84C44] flex items-center justify-center">
            <span className="text-[11px] text-[#C9A84C] font-semibold">A</span>
          </div>
          <div className="min-w-0">
            <div className="text-xs font-medium text-[#E8E8E8] truncate">Admin</div>
            <div className="text-[10px] text-[#555]">System Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
