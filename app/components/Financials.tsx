"use client";
import { AlertTriangle, CheckCircle, Clock, TrendingUp, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
const projects = [
  { name: "Al-Nasser Gaming Suite", budget: 18500, spent: 13200, invoiced: 12000, received: 9000, margin: 28 },
  { name: "Salmiya Villa", budget: 45000, spent: 38500, invoiced: 40000, received: 32000, margin: 14 },
  { name: "Jabriya Living Room", budget: 8200, spent: 2800, invoiced: 3000, received: 3000, margin: 34 },
  { name: "Rumaithiya Gaming", budget: 22000, spent: 11500, invoiced: 10000, received: 7000, margin: 31 },
];
const invoices = [
  { client: "Mohammed Al-Rashid", project: "Al-Nasser Gaming", amount: "KD 3,000", due: "Jun 15", status: "Pending" },
  { client: "Fatima Al-Sayed", project: "Salmiya Villa", amount: "KD 8,000", due: "Jun 10", status: "Overdue" },
  { client: "Ahmed Boodai", project: "Jabriya LR", amount: "KD 3,000", due: "Jun 20", status: "Sent" },
  { client: "Sara Al-Mutairi", project: "Rumaithiya Gaming", amount: "KD 3,000", due: "Jun 25", status: "Draft" },
];
const statusStyle: Record<string, string> = { Pending: "bg-yellow-500/20 text-yellow-400", Overdue: "bg-red-500/20 text-red-400", Sent: "bg-blue-500/20 text-blue-400", Draft: "bg-gray-500/20 text-gray-400", Paid: "bg-green-500/20 text-green-400" };
export default function Financials() {
  const budgetData = projects.map(p => ({ name: p.name.split(" ")[0], budget: p.budget, spent: p.spent, over: p.spent > p.budget }));
  return (
    <div className="p-6 space-y-6">
      <div className="fade-up fade-up-1"><h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Financial Tracking</h2><p className="text-sm text-[#666] mt-0.5">Budget vs. actuals · Invoices · Payment milestones</p></div>
      <div className="grid grid-cols-4 gap-3 fade-up fade-up-2">
        {[{label:"Total Invoiced",value:"KD 65,000",sub:"Jun 2026",icon:DollarSign,color:"text-[#C9A84C]"},{label:"Received",value:"KD 51,000",sub:"78.5% collected",icon:CheckCircle,color:"text-green-400"},{label:"Pending",value:"KD 14,000",sub:"4 invoices",icon:Clock,color:"text-yellow-400"},{label:"Avg. Margin",value:"26.75%",sub:"Across active projects",icon:TrendingUp,color:"text-blue-400"}].map(s=>{
          const Icon=s.icon;
          return(<div key={s.label} className="stat-card"><div className={`w-8 h-8 rounded-lg bg-[#1E1E1E] flex items-center justify-center mb-3 ${s.color}`}><Icon size={15}/></div><div className="text-xl font-display font-bold text-[#E8E8E8]">{s.value}</div><div className="text-xs text-[#888] mt-1">{s.label}</div><div className="text-[11px] text-[#555]">{s.sub}</div></div>);})}
      </div>
      <div className="grid grid-cols-2 gap-4 fade-up fade-up-3">
        <div className="stat-card"><div className="text-sm font-semibold text-[#E8E8E8] mb-4">Budget vs. Spent</div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={budgetData} barGap={2}>
              <XAxis dataKey="name" tick={{fill:"#555",fontSize:11}} axisLine={false} tickLine={false}/>
              <YAxis tick={{fill:"#555",fontSize:11}} axisLine={false} tickLine={false} tickFormatter={v=>`${v/1000}K`}/>
              <Tooltip contentStyle={{background:"#161616",border:"1px solid #242424",borderRadius:8,fontSize:12}} formatter={v=>[`KD ${Number(v).toLocaleString()}`,""]}/>
              <Bar dataKey="budget" radius={[3,3,0,0]} fill="#1E1E1E" name="Budget"/>
              <Bar dataKey="spent" radius={[3,3,0,0]} name="Spent">{budgetData.map((e,i)=>(<Cell key={i} fill={e.over?"#EF4444":"#C9A84C"}/>))}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="stat-card"><div className="text-sm font-semibold text-[#E8E8E8] mb-4">Project Health</div>
          <div className="space-y-3">{projects.map((p,i)=>{
            const pct=Math.round((p.spent/p.budget)*100),over=pct>100;
            return(<div key={i}><div className="flex items-center justify-between mb-1"><span className="text-xs text-[#E8E8E8] truncate">{p.name.split(" ").slice(0,2).join(" ")}</span><div className="flex items-center gap-2">{over&&<AlertTriangle size={11} className="text-red-400"/>}<span className={`text-[11px] font-medium ${over?"text-red-400":"text-[#C9A84C]"}`}>{pct}%</span></div></div><div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden"><div className={`h-full rounded-full ${over?"bg-red-500":"bg-[#C9A84C]"}`} style={{width:`${Math.min(pct,100)}%`}}/></div><div className="flex justify-between mt-0.5 text-[10px] text-[#555]"><span>KD {p.spent.toLocaleString()} spent</span><span>of KD {p.budget.toLocaleString()}</span></div></div>);
          })}</div>
        </div>
      </div>
      <div className="fade-up fade-up-4"><div className="text-sm font-semibold text-[#E8E8E8] mb-3">Outstanding Invoices</div>
        <div className="bg-[#111] border border-[#1E1E1E] rounded-xl overflow-hidden"><table className="w-full">
          <thead><tr className="border-b border-[#1E1E1E]">{["Client","Project","Amount","Due Date","Status","Action"].map(h=>(<th key={h} className="text-left px-4 py-3 text-[11px] font-medium text-[#555] uppercase tracking-wider">{h}</th>))}</tr></thead>
          <tbody>{invoices.map((inv,i)=>(<tr key={i} className="border-b border-[#1A1A1A] last:border-0 hover:bg-[#161616] transition-colors"><td className="px-4 py-3 text-sm text-[#E8E8E8]">{inv.client}</td><td className="px-4 py-3 text-xs text-[#888]">{inv.project}</td><td className="px-4 py-3 text-sm font-semibold text-[#C9A84C]">{inv.amount}</td><td className="px-4 py-3 text-xs text-[#888]">{inv.due}</td><td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-[11px] font-medium ${statusStyle[inv.status]}`}>{inv.status}</span></td><td className="px-4 py-3"><button className="text-xs text-[#C9A84C]">{inv.status==="Draft"?"Send →":inv.status==="Overdue"?"Remind →":"View →"}</button></td></tr>))}</tbody>
        </table></div>
      </div>
    </div>
  );
}
