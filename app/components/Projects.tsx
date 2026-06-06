"use client";
import { useState } from "react";
import { Plus, Calendar, User, Paperclip, MessageSquare, AlertTriangle } from "lucide-react";
const kanbanCols = [
  { id: "design", label: "Design", color: "#8B5CF6", tasks: [
    { id: 1, title: "3D Render — Al-Nasser Suite", project: "Al-Nasser Gaming", assignee: "Layla", due: "Jun 12", priority: "high", comments: 3, files: 2 },
    { id: 2, title: "Mood board — Jabriya Living Room", project: "Jabriya LR", assignee: "Omar", due: "Jun 14", priority: "medium", comments: 1, files: 4 },
  ]},
  { id: "approval", label: "Approval", color: "#F59E0B", tasks: [
    { id: 3, title: "Client sign-off — Salmiya Floor Plan", project: "Salmiya Villa", assignee: "Sara", due: "Jun 10", priority: "high", comments: 5, files: 1 },
  ]},
  { id: "procurement", label: "Procurement", color: "#3B82F6", tasks: [
    { id: 4, title: 'Order Samsung 85" Displays x4', project: "Rumaithiya Gaming", assignee: "Fahad", due: "Jun 11", priority: "high", comments: 2, files: 0 },
    { id: 5, title: "Cable routing materials", project: "Al-Nasser Gaming", assignee: "Ali", due: "Jun 13", priority: "low", comments: 0, files: 1 },
  ]},
  { id: "execution", label: "Execution", color: "#10B981", tasks: [
    { id: 6, title: "Install surround sound system", project: "Al-Nasser Gaming", assignee: "Ali", due: "Jun 15", priority: "medium", comments: 4, files: 3 },
    { id: 7, title: "Flooring installation — Phase 2", project: "Salmiya Villa", assignee: "Khalid", due: "Jun 16", priority: "medium", comments: 2, files: 0 },
  ]},
  { id: "review", label: "Review", color: "#C9A84C", tasks: [
    { id: 8, title: "Final QA walkthrough", project: "Salmiya Villa", assignee: "Sara", due: "Jun 18", priority: "high", comments: 6, files: 5 },
  ]},
];
const priorityStyle: Record<string, string> = { high: "bg-red-500/20 text-red-400", medium: "bg-yellow-500/20 text-yellow-400", low: "bg-green-500/20 text-green-400" };
export default function Projects() {
  const [view, setView] = useState<"kanban" | "list">("kanban");
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between fade-up fade-up-1">
        <div><h2 className="font-display text-xl font-semibold text-[#E8E8E8]">Projects & Tasks</h2><p className="text-sm text-[#666] mt-0.5">19 active projects · 47 open tasks</p></div>
        <div className="flex items-center gap-2">
          <div className="flex bg-[#111] border border-[#1E1E1E] rounded-lg p-0.5">
            {["kanban","list"].map(v=>(<button key={v} onClick={()=>setView(v as "kanban"|"list")} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view===v?"bg-[#1E1E1E] text-[#E8E8E8]":"text-[#666]"}`}>{v=="kanban"?"Kanban":"List"}</button>))}
          </div>
          <button className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors"><Plus size={15} /> New Project</button>
        </div>
      </div>
      <div className="fade-up fade-up-2 flex gap-3 overflow-x-auto pb-4">
        {kanbanCols.map((col) => (
          <div key={col.id} className="flex-shrink-0 w-[230px]">
            <div className="flex items-center justify-between mb-2.5 px-1">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{background:col.color}}/><span className="text-xs font-semibold text-[#E8E8E8]">{col.label}</span><span className="text-[11px] text-[#555] bg-[#1A1A1A] rounded-full px-1.5 py-0.5">{col.tasks.length}</span></div>
              <button className="text-[#444]"><Plus size={13}/></button>
            </div>
            <div className="space-y-2">
              {col.tasks.map(task=>(
                <div key={task.id} className="bg-[#111] border border-[#1E1E1E] rounded-xl p-3 cursor-pointer hover:border-[#C9A84C33] transition-all hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-2 mb-2"><div className="text-xs font-medium text-[#E8E8E8] leading-snug">{task.title}</div>{task.priority==="high"&&<AlertTriangle size={11} className="text-red-400 flex-shrink-0 mt-0.5"/>}</div>
                  <div className="text-[11px] text-[#555] mb-2.5">{task.project}</div>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${priorityStyle[task.priority]}`}>{task.priority}</span>
                    <div className="flex items-center gap-2 text-[#555]">
                      {task.comments>0&&<span className="flex items-center gap-0.5 text-[10px]"><MessageSquare size={10}/>{task.comments}</span>}
                      {task.files>0&&<span className="flex items-center gap-0.5 text-[10px]"><Paperclip size={10}/>{task.files}</span>}
                      <span className="flex items-center gap-0.5 text-[10px]"><Calendar size={10}/>{task.due}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-[#1A1A1A]"><div className="w-5 h-5 rounded-full bg-[#C9A84C22] border border-[#C9A84C33] flex items-center justify-center"><span className="text-[9px] text-[#C9A84C] font-semibold">{task.assignee[0]}</span></div><span className="text-[10px] text-[#666]">{task.assignee}</span></div>
                </div>
              ))}
              <button className="w-full border border-dashed border-[#1E1E1E] rounded-xl py-2.5 text-[11px] text-[#444] hover:border-[#C9A84C33] flex items-center justify-center gap-1"><Plus size={11}/>Add task</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
