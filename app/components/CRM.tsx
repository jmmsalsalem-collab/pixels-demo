"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileText,
  Globe2,
  MailPlus,
  Phone,
  Plus,
  UserRound,
  X,
} from "lucide-react";
import type { Locale } from "./content";

type Stage = "inquiry" | "meeting" | "proposal" | "contract" | "execution" | "delivery";

interface Lead {
  id: number;
  name: string;
  phone: string;
  projectType: string;
  budget: number;
  source: string;
  stage: Stage;
  followUp: string;
  notes: string;
  proposal: boolean;
  portal: boolean;
}

const stageLabels: Record<Locale, Record<Stage, string>> = {
  en: {
    inquiry: "Inquiry",
    meeting: "Meeting",
    proposal: "Proposal",
    contract: "Contract",
    execution: "Execution",
    delivery: "Delivery",
  },
  ar: {
    inquiry: "استفسار",
    meeting: "اجتماع",
    proposal: "عرض",
    contract: "عقد",
    execution: "تنفيذ",
    delivery: "تسليم",
  },
};

const stages: Stage[] = ["inquiry", "meeting", "proposal", "contract", "execution", "delivery"];

const projectTypes = {
  en: ["Gaming Room", "Architectural", "Living Room", "Mixed"],
  ar: ["غرفة ألعاب", "معماري", "غرفة معيشة", "مختلط"],
};

const initialLeads: Lead[] = [
  {
    id: 1,
    name: "Mohammed Al-Rashid",
    phone: "+965 5551 9090",
    projectType: "Gaming Room",
    budget: 22000,
    source: "Instagram",
    stage: "proposal",
    followUp: "2026-06-09",
    notes: "Wants premium AV package and hidden cable routing.",
    proposal: true,
    portal: false,
  },
  {
    id: 2,
    name: "Fatima Al-Sayed",
    phone: "+965 6602 1188",
    projectType: "Architectural",
    budget: 85000,
    source: "Referral",
    stage: "contract",
    followUp: "2026-06-11",
    notes: "Villa renovation. Needs phase-by-phase approval visibility.",
    proposal: true,
    portal: true,
  },
  {
    id: 3,
    name: "Khaled Dashti",
    phone: "+965 9004 4477",
    projectType: "Living Room",
    budget: 36000,
    source: "Walk-in",
    stage: "meeting",
    followUp: "2026-06-07",
    notes: "Asked for mood board and furniture sourcing options.",
    proposal: false,
    portal: false,
  },
];

const localizedType: Record<Locale, Record<string, string>> = {
  en: {
    "Gaming Room": "Gaming Room",
    Architectural: "Architectural",
    "Living Room": "Living Room",
    Mixed: "Mixed",
  },
  ar: {
    "Gaming Room": "غرفة ألعاب",
    Architectural: "معماري",
    "Living Room": "غرفة معيشة",
    Mixed: "مختلط",
  },
};

export default function CRM({ locale }: { locale: Locale }) {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedId, setSelectedId] = useState(initialLeads[0].id);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    projectType: "Gaming Room",
    budget: "28000",
    source: "Instagram",
    followUp: "2026-06-12",
    notes: "",
  });
  const [activity, setActivity] = useState<string[]>([
    locale === "ar"
      ? "تم إنشاء عرض لمحمد الراشد من CRM"
      : "Proposal generated for Mohammed Al-Rashid from CRM",
    locale === "ar"
      ? "تم إرسال دعوة بوابة العميل لفاطمة السيد"
      : "Client portal invite sent to Fatima Al-Sayed",
  ]);

  const selected = leads.find((lead) => lead.id === selectedId) ?? leads[0];
  const totalPipeline = leads.reduce((sum, lead) => sum + lead.budget, 0);
  const overdue = leads.filter((lead) => new Date(lead.followUp) <= new Date("2026-06-08")).length;

  const stageTotals = useMemo(
    () =>
      stages.map((stage) => ({
        stage,
        total: leads.filter((lead) => lead.stage === stage).reduce((sum, lead) => sum + lead.budget, 0),
        count: leads.filter((lead) => lead.stage === stage).length,
      })),
    [leads],
  );

  function log(en: string, ar: string) {
    setActivity((current) => [locale === "ar" ? ar : en, ...current].slice(0, 7));
  }

  function createLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      return;
    }

    const lead: Lead = {
      id: Date.now(),
      name: form.name.trim(),
      phone: form.phone.trim() || "+965 0000 0000",
      projectType: form.projectType,
      budget: Number(form.budget) || 0,
      source: form.source.trim() || "Direct",
      stage: "inquiry",
      followUp: form.followUp,
      notes: form.notes.trim() || "New lead created during demo.",
      proposal: false,
      portal: false,
    };

    setLeads((current) => [lead, ...current]);
    setSelectedId(lead.id);
    setForm((current) => ({ ...current, name: "", phone: "", notes: "" }));
    log(`Lead created: ${lead.name}`, `تم إنشاء عميل محتمل: ${lead.name}`);
  }

  function updateLead(id: number, patch: Partial<Lead>) {
    setLeads((current) => current.map((lead) => (lead.id === id ? { ...lead, ...patch } : lead)));
  }

  function moveStage(id: number, direction: 1 | -1) {
    const lead = leads.find((item) => item.id === id);

    if (!lead) {
      return;
    }

    const index = stages.indexOf(lead.stage);
    const nextStage = stages[Math.min(stages.length - 1, Math.max(0, index + direction))];

    updateLead(id, { stage: nextStage });
    log(
      `${lead.name} moved to ${stageLabels.en[nextStage]}`,
      `تم نقل ${lead.name} إلى ${stageLabels.ar[nextStage]}`,
    );
  }

  function generateProposal(lead: Lead) {
    updateLead(lead.id, { proposal: true, stage: lead.stage === "inquiry" || lead.stage === "meeting" ? "proposal" : lead.stage });
    log(`Proposal generated for ${lead.name}`, `تم إنشاء عرض لـ ${lead.name}`);
  }

  function invitePortal(lead: Lead) {
    updateLead(lead.id, { portal: true });
    log(`Portal invite sent to ${lead.name}`, `تم إرسال دعوة البوابة لـ ${lead.name}`);
  }

  function scheduleFollowUp(lead: Lead) {
    updateLead(lead.id, { followUp: "2026-06-14" });
    log(`Follow-up scheduled for ${lead.name}`, `تمت جدولة متابعة لـ ${lead.name}`);
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {locale === "ar" ? "مسار الإيرادات" : "Revenue pipeline"}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              {locale === "ar" ? "CRM تفاعلي لإدارة العملاء والفرص" : "Interactive CRM for clients and opportunities"}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              {locale === "ar"
                ? "أدخل عميلاً جديداً، حرّكه عبر المسار، افتح ملفه، أنشئ عرضاً، وجدول متابعة أو دعوة للبوابة."
                : "Create a lead, move it through the pipeline, open the client profile, generate a proposal, schedule follow-up, or invite the client to the portal."}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <MiniStat label={locale === "ar" ? "قيمة المسار" : "Pipeline value"} value={`KD ${formatMoney(totalPipeline)}`} />
            <MiniStat label={locale === "ar" ? "الفرص" : "Open leads"} value={`${leads.length}`} />
            <MiniStat label={locale === "ar" ? "متابعات عاجلة" : "Due follow-ups"} value={`${overdue}`} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[390px_1fr]">
        <form className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" onSubmit={createLead}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-neutral-950">
                {locale === "ar" ? "إضافة عميل محتمل" : "Create lead"}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                {locale === "ar" ? "المدخلات تظهر فوراً في المسار" : "Inputs appear instantly in the pipeline"}
              </p>
            </div>
            <Plus size={18} className="text-neutral-500" />
          </div>

          <div className="space-y-4">
            <Field
              label={locale === "ar" ? "اسم العميل" : "Client name"}
              value={form.name}
              onChange={(value) => setForm((current) => ({ ...current, name: value }))}
              placeholder={locale === "ar" ? "مثال: عبدالله الغانم" : "Example: Abdullah Al-Ghanim"}
            />
            <Field
              label={locale === "ar" ? "رقم الهاتف" : "Phone"}
              value={form.phone}
              onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
              placeholder="+965 5555 0000"
            />
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {locale === "ar" ? "نوع المشروع" : "Project type"}
              </span>
              <select
                value={form.projectType}
                onChange={(event) => setForm((current) => ({ ...current, projectType: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-500"
              >
                {projectTypes.en.map((type, index) => (
                  <option key={type} value={type}>
                    {projectTypes[locale][index]}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Field
                label={locale === "ar" ? "الميزانية د.ك" : "Budget KD"}
                value={form.budget}
                onChange={(value) => setForm((current) => ({ ...current, budget: value }))}
                placeholder="28000"
                type="number"
              />
              <Field
                label={locale === "ar" ? "المصدر" : "Source"}
                value={form.source}
                onChange={(value) => setForm((current) => ({ ...current, source: value }))}
                placeholder="Instagram"
              />
            </div>
            <Field
              label={locale === "ar" ? "تاريخ المتابعة" : "Follow-up date"}
              value={form.followUp}
              onChange={(value) => setForm((current) => ({ ...current, followUp: value }))}
              type="date"
            />
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {locale === "ar" ? "ملاحظات" : "Notes"}
              </span>
              <textarea
                value={form.notes}
                onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
                className="mt-2 min-h-24 w-full resize-none rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-500"
                placeholder={locale === "ar" ? "احتياج العميل أو تفاصيل المشروع..." : "Client need or project detail..."}
              />
            </label>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800">
              <Plus size={16} />
              {locale === "ar" ? "إنشاء وإضافة للمسار" : "Create and add to pipeline"}
            </button>
          </div>
        </form>

        <div className="space-y-6">
          <section className="overflow-x-auto rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="grid min-w-[940px] grid-cols-6 gap-3">
              {stageTotals.map(({ stage, total, count }) => (
                <div key={stage} className="rounded-lg border border-neutral-200 bg-neutral-50">
                  <div className="border-b border-neutral-200 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-neutral-950">{stageLabels[locale][stage]}</h3>
                      <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-neutral-600 ring-1 ring-neutral-200">
                        {count}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500">KD {formatMoney(total)}</p>
                  </div>
                  <div className="min-h-[260px] space-y-2 p-2">
                    {leads
                      .filter((lead) => lead.stage === stage)
                      .map((lead) => (
                        <button
                          key={lead.id}
                          className={`w-full rounded-lg border bg-white p-3 text-start shadow-sm transition-colors hover:border-neutral-400 ${
                            selectedId === lead.id ? "border-neutral-950" : "border-neutral-200"
                          }`}
                          onClick={() => setSelectedId(lead.id)}
                        >
                          <p className="truncate text-sm font-semibold text-neutral-950">{lead.name}</p>
                          <p className="mt-1 truncate text-xs text-neutral-500">{localizedType[locale][lead.projectType]}</p>
                          <div className="mt-3 flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-neutral-700">KD {formatMoney(lead.budget)}</span>
                            <span className={`h-2 w-2 rounded-full ${lead.portal ? "bg-emerald-500" : lead.proposal ? "bg-blue-500" : "bg-amber-500"}`} />
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <ClientDrawer
              lead={selected}
              locale={locale}
              onBack={() => moveStage(selected.id, -1)}
              onForward={() => moveStage(selected.id, 1)}
              onGenerateProposal={() => generateProposal(selected)}
              onInvitePortal={() => invitePortal(selected)}
              onSchedule={() => scheduleFollowUp(selected)}
              onClose={() => setSelectedId(leads[0]?.id ?? 0)}
            />

            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-neutral-950">
                {locale === "ar" ? "سجل النشاط" : "Activity timeline"}
              </h2>
              <div className="mt-4 space-y-3">
                {activity.map((item, index) => (
                  <div key={`${item}-${index}`} className="flex gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-neutral-950" />
                    <p className="text-sm leading-6 text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

function ClientDrawer({
  lead,
  locale,
  onBack,
  onForward,
  onGenerateProposal,
  onInvitePortal,
  onSchedule,
  onClose,
}: {
  lead: Lead;
  locale: Locale;
  onBack: () => void;
  onForward: () => void;
  onGenerateProposal: () => void;
  onInvitePortal: () => void;
  onSchedule: () => void;
  onClose: () => void;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4 border-b border-neutral-200 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            {locale === "ar" ? "ملف العميل" : "Client profile"}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-neutral-950">{lead.name}</h2>
          <p className="mt-1 text-sm text-neutral-500">{localizedType[locale][lead.projectType]} · {lead.source}</p>
        </div>
        <button
          className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50"
          onClick={onClose}
          aria-label={locale === "ar" ? "إغلاق ملف العميل" : "Close client profile"}
        >
          <X size={16} />
        </button>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-3">
        <Info icon={Phone} label={locale === "ar" ? "الهاتف" : "Phone"} value={lead.phone} />
        <Info icon={CalendarDays} label={locale === "ar" ? "المتابعة" : "Follow-up"} value={lead.followUp} />
        <Info icon={UserRound} label={locale === "ar" ? "المرحلة" : "Stage"} value={stageLabels[locale][lead.stage]} />
      </div>

      <div className="border-y border-neutral-200 bg-neutral-50 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-neutral-950">
              {locale === "ar" ? "قيمة الفرصة" : "Opportunity value"}
            </p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950">KD {formatMoney(lead.budget)}</p>
          </div>
          <div className="space-y-2 text-end">
            <Badge active={lead.proposal} label={locale === "ar" ? "عرض" : "Proposal"} />
            <Badge active={lead.portal} label={locale === "ar" ? "بوابة" : "Portal"} />
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-neutral-600">{lead.notes}</p>
      </div>

      <div className="grid gap-3 p-5 sm:grid-cols-2 xl:grid-cols-3">
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={onBack}>
          <ArrowRight size={15} className={locale === "ar" ? "" : "rotate-180"} />
          {locale === "ar" ? "رجوع مرحلة" : "Move back"}
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-950 px-3 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800" onClick={onForward}>
          {locale === "ar" ? "تقديم مرحلة" : "Move forward"}
          <ArrowRight size={15} className={locale === "ar" ? "rotate-180" : ""} />
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={onSchedule}>
          <CalendarDays size={15} />
          {locale === "ar" ? "جدولة متابعة" : "Schedule"}
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={onGenerateProposal}>
          <FileText size={15} />
          {locale === "ar" ? "إنشاء عرض" : "Proposal"}
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={onInvitePortal}>
          <Globe2 size={15} />
          {locale === "ar" ? "دعوة البوابة" : "Portal invite"}
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
          <MailPlus size={15} />
          {locale === "ar" ? "رسالة" : "Message"}
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        className="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
      />
    </label>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
      <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">{label}</p>
      <p className="mt-2 truncate text-sm font-semibold text-neutral-950">{value}</p>
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        <Icon size={14} />
        {label}
      </div>
      <p className="mt-2 truncate text-sm font-semibold text-neutral-950">{value}</p>
    </div>
  );
}

function Badge({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        active ? "bg-emerald-50 text-emerald-700" : "bg-neutral-100 text-neutral-500"
      }`}
    >
      <CheckCircle2 size={13} />
      {label}
    </span>
  );
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}
