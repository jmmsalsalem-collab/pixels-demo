"use client";
import { Sparkles, FileText, Plus, Send, CheckCircle, Clock, X, Eye } from "lucide-react";
const proposals = [{client:"Khaled Dashti",type:"Architectural",value:"KD 95,000",status:"Sent",date:"Jun 5",sent:true},{client:"Noura Al-Hamad",type:"Gaming Room",value:"KD 28,000",status:"Accepted",date:"Jun 2",sent:true},{client:"Tariq Al-Sabah",type:"Living Room",value:"KD 15,500",status:"Draft",date:"Jun 8",sent:false},{client:"Hessa Al-Mutairi",type:"Gaming Room",value:"KD 42,000",status:"Under Review",date:"Jun 4",sent:true}];
const statusStyle: Record<string,string> = {Sent:"bg-blue-500/20 text-blue-400",Accepted:"bg-green-500/20 text-green-400",Draft:"bg-gray-500/20 text-gray-400","Under Review":"bg-yellow-500/20 text-yellow-400",Rejected:"bg-red-500/20 text-red-400"};
export function Proposals() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between fade-up fade-up-1">
        <div><h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Proposal Builder</h2><p className="text-sm text-[#666] mt-0.5">AI-powered branded proposals linked to your CRM pipeline</p></div>
        <button className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors"><Plus size={15}/> New Proposal</button>
      </div>
      <div className="fade-up fade-up-2 bg-gradient-to-r from-[#C9A84C11] to-transparent border border-[#C9A84C22] rounded-xl p-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0"><Sparkles size={15} className="text-black"/></div>
        <div className="flex-1"><div className="text-xs font-semibold text-[#C9A84C]">AI Writing Assistant</div><p className="text-sm text-[#C8C8C8] mt-0.5">Claude auto-drafts proposal narratives from client context, adjusts tone, and auto-populates pricing from vendor database.</p></div>
        <button className="text-xs text-[#C9A84C] border border-[#C9A84C33] rounded-lg px-3 py-2 hover:bg-[#C9A84C11] transition-colors">Try AI Draft →</button>
      </div>
      <div className="fade-up fade-up-2 grid grid-cols-3 gap-3">
        {[{label:"Gaming Room",sub:"25+ line items · Audio, Displays, Lighting",used:12},{label:"Architectural",sub:"Full scope · Design through handover",used:7},{label:"Interior Design",sub:"Furniture, Mood, Finishes, Install",used:5}].map(t=>(
          <div key={t.label} className="stat-card cursor-pointer hover:border-[#C9A84C33] transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#C9A84C22] flex items-center justify-center mb-3"><FileText size={15} className="text-[#C9A84C]"/></div>
            <div className="text-sm font-semibold text-[#E8E8E8]">{t.label} Template</div>
            <div className="text-[11px] text-[#666] mt-1">{t.sub}</div>
            <div className="text-[11px] text-[#555] mt-2">Used {t.used} times</div>
          </div>
        ))}
      </div>
      <div className="fade-up fade-up-3 bg-[#111] border border-[#1E1E1E] rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-[#1A1A1A]"><div className="text-sm font-semibold text-[#E8E8E8]">Recent Proposals</div></div>
        {proposals.map((p,i)=>(
          <div key={i} className="flex items-center gap-4 px-4 py-3.5 border-b border-[#1A1A1A] last:border-0 hover:bg-[#161616] cursor-pointer transition-colors">
            <div className="flex-1 min-w-0"><div className="text-sm font-medium text-[#E8E8E8]">{p.client}</div><div className="text-xs text-[#666]">{p.type}</div></div>
            <div className="text-sm font-semibold text-[#C9A84C]">{p.value}</div>
            <span className={`px-2 py-1 rounded-full text-[11px] font-medium ${statusStyle[p.status]}`}>{p.status}</span>
            <div className="text-xs text-[#555]">{p.date}</div>
            <div className="flex gap-1">
              <button className="text-xs text-[#888] bg-[#1A1A1A] border border-[#222] rounded px-2 py-1">Edit</button>
              {!p.sent&&<button className="text-xs text-[#C9A84C] bg-[#C9A84C11] border border-[#C9A84C22] rounded px-2 py-1 flex items-center gap-1"><Send size={10}/>Send</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
