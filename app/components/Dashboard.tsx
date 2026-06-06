"use client";
import { Users, FolderOpen, DollarSign, AlertCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 42000, budget: 50000 },
  { month: "Feb", revenue: 58000, budget: 55000 },
  { month: "Mar", revenue: 51000, budget: 60000 },
  { month: "Apr", revenue: 73000, budget: 65000 },
  { month: "May", revenue: 68000, budget: 70000 },
  { month: "Jun", revenue: 89000, budget: 75000 },
];

const projectsData = [
  { name: "Gaming", count: 8 },
  { name: "Architectural", count: 5 },
  { name: "Living Room", count: 4 },
  { name: "Mixed", count: 2 },
];

const recentProjects = [
  { name: "Al-Nasser Gaming Suite", type: "Gaming Room", status: "In Progress", progress: 72, budget: "KD 18,500" },
  { name: "Salmiya Villa Renovation", type: "Architectural", status: "Review", progress: 90, budget: "KD 45,000" },
  { name: "Jabriya Living Room", type: "Living Room", status: "Design", progress: 35, budget: "KD 8,200" },
  { name: "Rumaithiya Gaming Den", type: "Gaming Room", status: "Procurement", progress: 55, budget: "KD 22,000" },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-blue-500/20 text-blue-400",
  "Review": "bg-yellow-500/20 text-yellow-400",
  "Design": "bg-purple-500/20 text-purple-400",
  "Procurement": "bg-orange-500/20 text-orange-400",
};

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="fade-up fade-up-1">
        <h1 className="font-display text-2xl font-semibold text-[#E8E8E8]">Good morning, Admin</h1>
        <p className="text-sm text-[#666] mt-1">Here&apos;s what&apos;s happening at Pixels today — Sunday, June 2026</p>
      </div>

      {/* AI Insight */}
      <div className="fade-up fade-up-1 bg-gradient-to-r from-[#C9A84C11] to-[#C9A84C05] border border-[#C9A84C33] rounded-xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
          <Sparkles size={14} className="text-black" />
        </div>
        <div>
          <div className="text-xs font-semibold text-[#C9A84C] mb-1">AI Insight — Claude</div>
          <p className="text-sm text-[#C8C8C8] leading-relaxed">3 projects are approaching their payment milestones this week. Al-Nasser Gaming Suite is 72% complete — consider sending a progress report to the client. Revenue is up 31% vs. last month.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 fade-up fade-up-2">
        {[
          { label: "Active Projects", value: "19", sub: "+3 this month", icon: FolderOpen, color: "text-blue-400" },
          { label: "Total Clients", value: "47", sub: "+5 this month", icon: Users, color: "text-green-400" },
          { label: "Monthly Revenue", value: "KD 89K", sub: "+31% vs last month", icon: DollarSign, color: "text-[#C9A84C]" },
          { label: "Tasks Overdue", value: "4", sub: "Needs attention", icon: AlertCircle, color: "text-red-400" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-9 h-9 rounded-lg bg-[#1E1E1E] flex items-center justify-center ${stat.color}`}>
                  <Icon size={16} />
                </div>
                <ArrowUpRight size={14} className="text-[#444]" />
              </div>
              <div className="text-2xl font-display font-semibold text-[#E8E8E8]">{stat.value}</div>
              <div className="text-xs text-[#888] mt-1">{stat.label}</div>
              <div className="text-[11px] text-[#555] mt-0.5">{stat.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-4 fade-up fade-up-3">
        {/* Revenue */}
        <div className="col-span-2 stat-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm font-semibold text-[#E8E8E8]">Revenue vs Budget</div>
              <div className="text-xs text-[#666] mt-0.5">Last 6 months (KWD)</div>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#666]">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#C9A84C] inline-block" />Revenue</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#333] inline-block" />Budget</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fill: "#555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v/1000}K`} />
              <Tooltip contentStyle={{ background: "#161616", border: "1px solid #242424", borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="budget" stroke="#333" strokeWidth={1.5} fill="none" />
              <Area type="monotone" dataKey="revenue" stroke="#C9A84C" strokeWidth={2} fill="url(#goldGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Projects by type */}
        <div className="stat-card">
          <div className="text-sm font-semibold text-[#E8E8E8] mb-1">Projects by Type</div>
          <div className="text-xs text-[#666] mb-4">Active only</div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={projectsData} layout="vertical">
              <XAxis type="number" tick={{ fill: "#555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" tick={{ fill: "#888", fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
              <Tooltip contentStyle={{ background: "#161616", border: "1px solid #242424", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="count" fill="#C9A84C" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="fade-up fade-up-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-[#E8E8E8]">Active Projects</div>
          <button className="text-xs text-[#C9A84C] hover:text-[#E8C96A] transition-colors">View all →</button>
        </div>
        <div className="bg-[#111] border border-[#1E1E1E] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1E1E1E]">
                {["Project", "Type", "Status", "Progress", "Budget"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[11px] font-medium text-[#555] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((p, i) => (
                <tr key={i} className="border-b border-[#1A1A1A] hover:bg-[#161616] transition-colors cursor-pointer">
                  <td className="px-4 py-3 text-sm font-medium text-[#E8E8E8]">{p.name}</td>
                  <td className="px-4 py-3 text-xs text-[#888]">{p.type}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-[11px] font-medium ${statusColor[p.status]}`}>{p.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-[#1E1E1E] rounded-full overflow-hidden w-16">
                        <div className="h-full bg-[#C9A84C] rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                      <span className="text-xs text-[#888]">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#888]">{p.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
