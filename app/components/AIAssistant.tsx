"use client";

import { useMemo, useState } from "react";
import { Bot, ChevronDown, MessageSquareText, Search, Send, Sparkles, X } from "lucide-react";
import { getModule, type Locale, type ModuleId } from "./content";

const agentModes = {
  en: ["Operations", "Marketing", "Research"],
  ar: ["العمليات", "التسويق", "البحث"],
};

const prompts = {
  en: [
    "What needs management attention today?",
    "Draft a client progress update.",
    "Which vendor should we pick?",
  ],
  ar: ["ما الذي يحتاج انتباه الإدارة اليوم؟", "اكتب تحديث تقدم للعميل.", "أي مورد يجب أن نختار؟"],
};

export default function AIAssistant({
  locale,
  activeModule,
  activeRole,
}: {
  locale: Locale;
  activeModule: ModuleId;
  activeRole: string;
}) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(0);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const activeModuleMeta = getModule(activeModule);

  const answer = useMemo(() => {
    if (locale === "ar") {
      return `تحليل ${agentModes.ar[mode]}: بناءً على وحدة ${activeModuleMeta.label.ar} ودور ${activeRole}، الإجراء الأنسب هو مراجعة السجل الأعلى أولوية، ربطه بالعميل أو المشروع، ثم حفظ القرار في سجل التدقيق.`;
    }

    return `${agentModes.en[mode]} analysis: based on ${activeModuleMeta.label.en} and the ${activeRole} role, the best next action is to review the highest-priority record, connect it to the client or project, and save the decision to the audit trail.`;
  }, [activeModuleMeta.label.ar, activeModuleMeta.label.en, activeRole, locale, mode]);

  function sendMessage(value = question) {
    const cleaned = value.trim();

    if (!cleaned) {
      return;
    }

    setMessages((current) => [...current, cleaned, answer]);
    setQuestion("");
    setOpen(true);
  }

  return (
    <>
      <button
        className="fixed bottom-5 end-5 z-30 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-3 text-sm font-semibold text-white shadow-xl transition-transform hover:-translate-y-0.5"
        onClick={() => setOpen(true)}
      >
        <Sparkles size={17} />
        {locale === "ar" ? "مساعد Pixels" : "Pixels AI"}
      </button>

      <div
        className="fixed inset-y-0 end-0 z-50 w-full max-w-[420px] border-s border-neutral-200 bg-white shadow-2xl transition-transform duration-200"
        aria-hidden={!open}
        style={{
          transform: open ? "translateX(0)" : locale === "ar" ? "translateX(-100%)" : "translateX(100%)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-neutral-200 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-950 text-white">
                  <Bot size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-950">
                    {locale === "ar" ? "وكيل Claude المدمج" : "Embedded Claude agent"}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {activeModuleMeta.label[locale]} · {activeRole}
                  </p>
                </div>
              </div>
              <button
                className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50"
                onClick={() => setOpen(false)}
                aria-label={locale === "ar" ? "إغلاق مساعد الذكاء" : "Close AI assistant"}
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {agentModes[locale].map((agent, index) => (
                <button
                  key={agent}
                  className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                    mode === index
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                  }`}
                  onClick={() => setMode(index)}
                >
                  {agent}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <Search size={16} />
                {locale === "ar" ? "أسئلة جاهزة للعرض" : "Demo prompts"}
              </div>
              <div className="mt-3 space-y-2">
                {prompts[locale].map((prompt) => (
                  <button
                    key={prompt}
                    className="block w-full rounded-lg bg-white px-3 py-2 text-start text-sm text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-50"
                    onClick={() => sendMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {messages.length === 0 ? (
              <div className="rounded-xl border border-dashed border-neutral-200 p-4 text-sm leading-6 text-neutral-500">
                {locale === "ar"
                  ? "هذا يحاكي طبقة الذكاء في PRD: محادثة مدمجة، سياق داخلي، اقتراح إجراءات، وحفظ سجل المحادثة."
                  : "This simulates the PRD AI layer: embedded chat, internal context, action suggestions, and saved conversation history."}
              </div>
            ) : null}

            {messages.map((message, index) => (
              <div
                key={`${message}-${index}`}
                className={`rounded-xl p-3 text-sm leading-6 ${
                  index % 2 === 0 ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-700"
                }`}
              >
                {index % 2 === 0 ? <MessageSquareText size={15} className="mb-2" /> : null}
                {message}
              </div>
            ))}
          </div>

          <div className="border-t border-neutral-200 p-4">
            <div className="flex gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-2 focus-within:border-neutral-400">
              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
                className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-neutral-400"
                placeholder={locale === "ar" ? "اسأل عن مشروع أو عميل..." : "Ask about a project or client..."}
              />
              <button
                className="grid h-9 w-9 place-items-center rounded-lg bg-neutral-950 text-white"
                onClick={() => sendMessage()}
                aria-label={locale === "ar" ? "إرسال السؤال" : "Send question"}
              >
                <Send size={15} />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
              <ChevronDown size={13} />
              {locale === "ar" ? "عرض توضيحي فقط؛ التكامل الفعلي يتم عبر Anthropic Claude API." : "Demo only; production connects through Anthropic Claude API."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
