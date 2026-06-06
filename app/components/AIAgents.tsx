"use client";

import { FormEvent, useMemo, useState } from "react";
import { Bot, CheckCircle2, MessageSquareText, Plus, Send } from "lucide-react";
import type { Locale } from "./content";

const modes = {
  en: ["Operations Agent", "Marketing Agent", "Research Agent"],
  ar: ["وكيل العمليات", "وكيل التسويق", "وكيل البحث"],
};

const canned = {
  en: [
    "Find project risks for this week.",
    "Draft a client update for Salmiya Villa.",
    "Suggest the best vendor for lighting.",
  ],
  ar: ["حدد مخاطر المشاريع لهذا الأسبوع.", "اكتب تحديث عميل لفيلا السالمية.", "اقترح أفضل مورد للإضاءة."],
};

export default function AIAgents({ locale }: { locale: Locale }) {
  const [mode, setMode] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([
    locale === "ar" ? "مراجعة تأخير مورد الصوت والصورة" : "Review AV supplier delay",
    locale === "ar" ? "إرسال ملخص تقدم للعميل" : "Send client progress summary",
  ]);

  const response = useMemo(() => {
    if (locale === "ar") {
      return `${modes.ar[mode]}: بناءً على بيانات العملاء والمشاريع والموردين، أوصي بإنشاء مهمة متابعة، ربطها بالمشروع، وحفظ القرار في سجل المحادثة.`;
    }
    return `${modes.en[mode]}: Based on client, project, and vendor data, I recommend creating a follow-up task, linking it to the project, and saving the decision in conversation history.`;
  }, [locale, mode]);

  function ask(value = prompt) {
    const cleaned = value.trim();
    if (!cleaned) return;
    setMessages((current) => [...current, cleaned, response]);
    setPrompt("");
  }

  function saveTask() {
    const task = locale === "ar" ? `مهمة من ${modes.ar[mode]}: مراجعة الأولوية التالية` : `Task from ${modes.en[mode]}: review next priority`;
    setTasks((current) => [task, ...current]);
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">{locale === "ar" ? "تشغيل الذكاء الاصطناعي" : "AI operations"}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{locale === "ar" ? "تحدث مع وكلاء Pixels" : "Talk to Pixels AI agents"}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">{locale === "ar" ? "واجهة محادثة كاملة لعرض وكلاء التسويق والعمليات والبحث مع حفظ المحادثات وتحويل الردود إلى مهام." : "A full AI workbench for Marketing, Operations, and Research agents with saved history and task creation."}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <MiniStat label={locale === "ar" ? "الوكلاء" : "Agents"} value="3" />
            <MiniStat label={locale === "ar" ? "المحادثات" : "Messages"} value={`${messages.length}`} />
            <MiniStat label={locale === "ar" ? "المهام" : "Tasks"} value={`${tasks.length}`} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 p-5">
            <div className="grid gap-2 sm:grid-cols-3">
              {modes[locale].map((item, index) => (
                <button key={item} className={`rounded-lg border px-3 py-2.5 text-sm font-semibold ${mode === index ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"}`} onClick={() => setMode(index)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="min-h-[420px] space-y-4 p-5">
            {messages.length === 0 ? (
              <div className="rounded-xl border border-dashed border-neutral-200 p-5 text-sm leading-6 text-neutral-500">
                {locale === "ar" ? "اسأل الوكيل عن مشروع، مورد، عميل، تقرير، أو مخاطرة تشغيلية." : "Ask the agent about a project, vendor, client, report, or operational risk."}
              </div>
            ) : null}
            {messages.map((message, index) => (
              <div key={`${message}-${index}`} className={`max-w-3xl rounded-xl p-4 text-sm leading-6 ${index % 2 === 0 ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-700"}`}>
                {index % 2 === 0 ? <MessageSquareText size={16} className="mb-2" /> : <Bot size={16} className="mb-2" />}
                {message}
              </div>
            ))}
          </div>
          <form className="border-t border-neutral-200 p-5" onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); ask(); }}>
            <div className="flex gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-2 focus-within:border-neutral-400">
              <input value={prompt} onChange={(event) => setPrompt(event.target.value)} className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" placeholder={locale === "ar" ? "اسأل وكيل Pixels..." : "Ask Pixels agent..."} />
              <button className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-950 text-white"><Send size={16} /></button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "أسئلة جاهزة" : "Demo prompts"}</h2>
            <div className="mt-4 space-y-2">
              {canned[locale].map((item) => (
                <button key={item} className="block w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-start text-sm text-neutral-700 hover:bg-neutral-50" onClick={() => ask(item)}>
                  {item}
                </button>
              ))}
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white" onClick={saveTask}>
              <Plus size={16} />
              {locale === "ar" ? "حفظ الرد كمهمة" : "Save response as task"}
            </button>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "مهام مقترحة" : "Suggested tasks"}</h2>
            <div className="mt-4 space-y-3">
              {tasks.map((task, index) => (
                <div key={`${task}-${index}`} className="flex gap-2 rounded-lg bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-600" />
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3"><p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">{label}</p><p className="mt-2 truncate text-sm font-semibold text-neutral-950">{value}</p></div>;
}
