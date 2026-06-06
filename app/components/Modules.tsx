"use client";
import { Upload, CheckCircle, Star, Package, Sparkles, Users, BarChart3, CheckSquare } from "lucide-react";

// ======================== MEDIA GALLERY ========================
const mediaAssets = [
  { label: "Al-Nasser — Display Wall Setup", type: "Progress", status: "Approved", phase: "Execution" },
  { label: "Salmiya Villa — Living Area Render", type: "3D Render", status: "Approved", phase: "Design" },
  { label: "Jabriya — Mood Board v2", type: "Mood Board", status: "Pending Approval", phase: "Design" },
  { label: "Rumaithiya — Cable Layout", type: "Blueprint", status: "Internal", phase: "Procurement" },
  { label: "Al-Nasser — Before Photos", type: "Before/After", status: "Internal", phase: "Survey" },
  { label: "Salmiya — Kitchen Render", type: "3D Render", status: "Pending Approval", phase: "Design" },
];

const statusDot: Record<string, string> = {
  Approved: "#10B981",
  "Pending Approval": "#F59E0B",
  Internal: "#6B7280",
};

export function MediaGallery() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between fade-up fade-up-1">
        <div>
          <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Media & Mood Board Gallery</h2>
          <p className="text-sm text-[#666] mt-0.5">Structured visual asset management</p>
        </div>
        <button className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          <Upload size={15} /> Upload Assets
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 fade-up fade-up-2">
        {[
          { label: "Total Assets", value: "284", sub: "Across 19 projects" },
          { label: "Pending Approval", value: "8", sub: "Client action needed" },
          { label: "Approved This Month", value: "47", sub: "Jun 2026" },
        ].map(s => (
          <div key={s.label} className="stat-card text-center">
            <div className="text-3xl font-display font-bold gold-text">{s.value}</div>
            <div className="text-xs text-[#E8E8E8] mt-1">{s.label}</div>
            <div className="text-[11px] text-[#555]">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="fade-up fade-up-3 grid grid-cols-3 gap-3">
        {mediaAssets.map((a, i) => (
          <div key={i} className="bg-[#111] border border-[#1E1E1E] rounded-xl overflow-hidden hover:border-[#C9A84C33] transition-all cursor-pointer">
            <div className="h-28 bg-gradient-to-br from-[#161616] to-[#1A1A1A] flex items-center justify-center relative">
              <div className="text-4xl opacity-20">🖼</div>
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 rounded-full" style={{ background: statusDot[a.status] }} />
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs font-medium text-[#E8E8E8] truncate">{a.label}</div>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[10px] text-[#555]">{a.type} · {a.phase}</span>
                <span className="text-[10px]" style={{ color: statusDot[a.status] }}>{a.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ======================== VENDORS ========================
const vendors = [
  { name: "Al-Jazeera Electronics", specialty: "Displays & AV", rating: 4.8, products: 24, leadTime: "3-5 days", preferred: true },
  { name: "Gulf Lighting Co.", specialty: "Smart Lighting", rating: 4.5, products: 18, leadTime: "5-7 days", preferred: true },
  { name: "Kuwait Cable House", specialty: "Cabling & Routing", rating: 4.2, products: 32, leadTime: "2-3 days", preferred: false },
  { name: "Premium Furniture KW", specialty: "Gaming Chairs & Furniture", rating: 4.6, products: 15, leadTime: "7-10 days", preferred: true },
];

export function Vendors() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between fade-up fade-up-1">
        <div>
          <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Vendor Management</h2>
          <p className="text-sm text-[#666] mt-0.5">Central supplier database · Pricing · Lead times</p>
        </div>
        <button className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          <Package size={15} /> Add Vendor
        </button>
      </div>

      <div className="fade-up fade-up-2 bg-[#C9A84C11] border border-[#C9A84C22] rounded-xl p-3.5 flex items-center gap-3">
        <Sparkles size={14} className="text-[#C9A84C]" />
        <p className="text-sm text-[#C8C8C8]">AI recommends best vendor based on price, lead time, and rating for each project. <span className="text-[#C9A84C]">3 recommendations pending review.</span></p>
      </div>

      <div className="fade-up fade-up-3 grid grid-cols-2 gap-3">
        {vendors.map((v, i) => (
          <div key={i} className="stat-card hover:border-[#C9A84C33] cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold text-[#E8E8E8]">{v.name}</div>
                  {v.preferred && <span className="text-[10px] bg-[#C9A84C22] text-[#C9A84C] px-1.5 py-0.5 rounded-full">Preferred</span>}
                </div>
                <div className="text-xs text-[#666] mt-0.5">{v.specialty}</div>
              </div>
              <div className="flex items-center gap-1 text-xs text-yellow-400">
                <Star size={11} fill="currentColor" />
                <span>{v.rating}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#1A1A1A] rounded-lg p-2.5">
                <div className="text-[11px] text-[#555]">Products</div>
                <div className="text-sm font-semibold text-[#E8E8E8]">{v.products}</div>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg p-2.5">
                <div className="text-[11px] text-[#555]">Lead Time</div>
                <div className="text-sm font-semibold text-[#E8E8E8]">{v.leadTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ======================== AI REPORTS ========================
const reportTypes = [
  { label: "Project Status Report", audience: "Management / Client", freq: "On-demand", icon: BarChart3 },
  { label: "Weekly Team Performance", audience: "Management", freq: "Weekly", icon: Users },
  { label: "Client Summary Report", audience: "Client", freq: "On-demand", icon: CheckCircle },
  { label: "Monthly Sales Report", audience: "Management", freq: "Monthly", icon: BarChart3 },
];

export function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div className="fade-up fade-up-1">
        <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">AI Auto-Generated Reports</h2>
        <p className="text-sm text-[#666] mt-0.5">One-click professional reports from live system data</p>
      </div>

      <div className="fade-up fade-up-2 bg-gradient-to-r from-[#C9A84C11] to-transparent border border-[#C9A84C22] rounded-xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
          <Sparkles size={13} className="text-black" />
        </div>
        <div>
          <div className="text-xs font-semibold text-[#C9A84C] mb-1">How it works</div>
          <p className="text-sm text-[#C8C8C8]">Claude reads live data from all 11 modules and generates structured, narrative-rich reports in Pixels&apos; branded PDF format. Not just data — actionable insights.</p>
        </div>
      </div>

      <div className="fade-up fade-up-3 grid grid-cols-2 gap-3">
        {reportTypes.map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className="stat-card hover:border-[#C9A84C33] cursor-pointer transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#C9A84C22] flex items-center justify-center">
                  <Icon size={16} className="text-[#C9A84C]" />
                </div>
                <span className="text-[10px] text-[#555] bg-[#1A1A1A] rounded-full px-2 py-0.5">{r.freq}</span>
              </div>
              <div className="text-sm font-semibold text-[#E8E8E8]">{r.label}</div>
              <div className="text-xs text-[#666] mt-1">{r.audience}</div>
              <button className="mt-3 w-full text-xs text-[#C9A84C] border border-[#C9A84C22] rounded-lg py-2 hover:bg-[#C9A84C11] transition-colors flex items-center justify-center gap-1">
                <Sparkles size={11} /> Generate Report
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ======================== TASK TEMPLATES ========================
const templates = [
  {
    type: "Gaming Room", tasks: 25, color: "#8B5CF6",
    categories: ["Room Survey", "Display Selection", "Cable Routing", "Audio Setup", "Lighting", "Installation", "Testing", "Handover"]
  },
  {
    type: "Architectural", tasks: 30, color: "#3B82F6",
    categories: ["Design Brief", "Permits", "Structural Survey", "Procurement", "Construction Phases", "Inspections", "Delivery"]
  },
  {
    type: "Living Room", tasks: 20, color: "#10B981",
    categories: ["Mood Board", "Furniture Sourcing", "Lighting Plan", "Installation", "Styling", "Final Shoot"]
  },
];

export function Templates() {
  return (
    <div className="p-6 space-y-6">
      <div className="fade-up fade-up-1">
        <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Smart Task Templates</h2>
        <p className="text-sm text-[#666] mt-0.5">Auto-generate checklists when a new project is created</p>
      </div>

      <div className="fade-up fade-up-2 bg-[#C9A84C11] border border-[#C9A84C22] rounded-xl p-3.5 flex items-center gap-3">
        <CheckSquare size={14} className="text-[#C9A84C]" />
        <p className="text-sm text-[#C8C8C8]">AI improves templates after every completed project. Dependency rules pre-linked — critical path tasks auto-sequenced.</p>
      </div>

      <div className="fade-up fade-up-3 grid grid-cols-3 gap-4">
        {templates.map((t, i) => (
          <div key={i} className="stat-card hover:border-[#C9A84C33] cursor-pointer transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-[#E8E8E8]">{t.type}</div>
              <span className="text-2xl font-display font-bold" style={{ color: t.color }}>{t.tasks}+</span>
            </div>
            <div className="space-y-1.5">
              {t.categories.map((c, j) => (
                <div key={j} className="flex items-center gap-2 text-xs text-[#666]">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: t.color + "88" }} />
                  {c}
                </div>
              ))}
            </div>
            <button className="mt-4 w-full text-xs border rounded-lg py-2 transition-colors" style={{ borderColor: t.color + "33", color: t.color }}>
              Preview Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ======================== EMPLOYEE DIRECTORY ========================
const employees = [
  { name: "Sara Al-Mahmoud", role: "Senior Project Manager", dept: "Operations", projects: 4, onTime: 94, workload: "high", skills: ["Architecture", "Client Relations", "AutoCAD"] },
  { name: "Omar Al-Fadhli", role: "Lead Designer", dept: "Design", projects: 3, onTime: 88, workload: "medium", skills: ["3D Rendering", "Interior Design", "SketchUp"] },
  { name: "Ali Hassan", role: "AV Installation Tech", dept: "Technical", projects: 5, onTime: 97, workload: "high", skills: ["AV Systems", "Cable Routing", "Electrical"] },
  { name: "Layla Al-Sabah", role: "3D Visualizer", dept: "Design", projects: 2, onTime: 91, workload: "low", skills: ["3D Render", "Lumion", "Photoshop"] },
  { name: "Fahad Al-Rasheed", role: "Procurement Manager", dept: "Operations", projects: 6, onTime: 83, workload: "high", skills: ["Vendor Relations", "Costing", "Logistics"] },
  { name: "Khalid Al-Mutairi", role: "Site Supervisor", dept: "Construction", projects: 3, onTime: 90, workload: "medium", skills: ["Construction", "QA/QC", "Safety"] },
];

const workloadStyle: Record<string, string> = {
  high: "bg-red-500/20 text-red-400",
  medium: "bg-yellow-500/20 text-yellow-400",
  low: "bg-green-500/20 text-green-400",
};

export function Directory() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between fade-up fade-up-1">
        <div>
          <h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Employee Directory & Org Chart</h2>
          <p className="text-sm text-[#666] mt-0.5">Team profiles · Skills · Workload visibility for AI routing</p>
        </div>
        <div className="flex items-center gap-2 bg-[#C9A84C11] border border-[#C9A84C22] rounded-lg px-3 py-2 text-xs text-[#C9A84C]">
          <Sparkles size={11} /> AI task routing active
        </div>
      </div>

      <div className="fade-up fade-up-2 grid grid-cols-3 gap-3">
        {[
          { label: "Team Members", value: "18" },
          { label: "Overloaded", value: "3" },
          { label: "Available Capacity", value: "5" },
        ].map(s => (
          <div key={s.label} className="stat-card text-center">
            <div className="text-3xl font-display font-bold gold-text">{s.value}</div>
            <div className="text-xs text-[#888] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="fade-up fade-up-3 grid grid-cols-2 gap-3">
        {employees.map((e, i) => (
          <div key={i} className="stat-card hover:border-[#C9A84C33] cursor-pointer transition-all">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C22] border border-[#C9A84C44] flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-[#C9A84C]">{e.name.split(" ").map(n => n[0]).join("").slice(0, 2)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#E8E8E8]">{e.name}</div>
                <div className="text-xs text-[#666]">{e.role}</div>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${workloadStyle[e.workload]}`}>{e.workload}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#555] mb-3">
              <span>{e.projects} projects</span>
              <span>·</span>
              <span className="text-green-400">{e.onTime}% on-time</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {e.skills.map((s, j) => (
                <span key={j} className="text-[10px] bg-[#1A1A1A] border border-[#222] text-[#777] rounded px-1.5 py-0.5">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
