"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Pencil, Plus, Save, Trash2, WandSparkles } from "lucide-react";
import { getModule, moduleDemos, type Locale, type ModuleId } from "./content";

interface WorkspaceItem {
  id: number;
  name: string;
  owner: string;
  status: string;
  due: string;
  value: string;
  notes: string;
}

const seed: Record<Exclude<ModuleId, "dashboard" | "crm" | "ai-agents" | "financials" | "vendors">, WorkspaceItem[]> = {
  projects: [
    { id: 1, name: "Al-Nasser Gaming Suite", owner: "Project PM", status: "Procurement", due: "2026-06-12", value: "68%", notes: "Display selection blocks cable routing." },
    { id: 2, name: "Salmiya Villa Renovation", owner: "Design Lead", status: "Approval", due: "2026-06-16", value: "42%", notes: "Client needs mood board approval." },
  ],
  portal: [
    { id: 1, name: "Salmiya Villa Portal", owner: "Client Success", status: "Approval pending", due: "2026-06-08", value: "91%", notes: "Client can view milestones, media, invoices, and messages." },
    { id: 2, name: "Dashti Living Room", owner: "Project PM", status: "Invited", due: "2026-06-10", value: "74%", notes: "Portal invite sent with project-only access." },
  ],
  proposals: [
    { id: 1, name: "Gaming Room Premium Proposal", owner: "Sales", status: "Under review", due: "2026-06-09", value: "KD 22K", notes: "AI narrative and vendor pricing attached." },
    { id: 2, name: "Villa Fit-out Proposal", owner: "Commercial", status: "Draft", due: "2026-06-13", value: "KD 85K", notes: "Needs media assets and payment terms." },
  ],
  media: [
    { id: 1, name: "Modern gaming room renders", owner: "Design Team", status: "Pending approval", due: "2026-06-07", value: "12 assets", notes: "Client can approve or request revision on each image." },
    { id: 2, name: "Villa mood board set", owner: "Creative", status: "Approved", due: "2026-06-11", value: "8 assets", notes: "Ready to drag into proposal and report." },
  ],
  reports: [
    { id: 1, name: "Weekly Operations Report", owner: "AI Agent", status: "Generated", due: "2026-06-09", value: "84% used", notes: "Summarizes vendors, blockers, cost exposure, and next actions." },
    { id: 2, name: "Client Progress Summary", owner: "Project PM", status: "Draft", due: "2026-06-08", value: "Portal-ready", notes: "Client-friendly language from live project data." },
  ],
  templates: [
    { id: 1, name: "Gaming Room Template", owner: "Ops", status: "Active", due: "2026-06-06", value: "27 tasks", notes: "Survey, display, cabling, audio, lighting, test, handover." },
    { id: 2, name: "Architectural Template", owner: "PMO", status: "Active", due: "2026-06-06", value: "32 tasks", notes: "Brief, permits, procurement, execution, inspections, delivery." },
  ],
  directory: [
    { id: 1, name: "Dana Hassan", owner: "Design", status: "Available", due: "This week", value: "87% on-time", notes: "3D rendering, mood boards, client approvals." },
    { id: 2, name: "Omar Saleh", owner: "Operations", status: "Busy", due: "This week", value: "93% on-time", notes: "Procurement, vendor tracking, installation coordination." },
  ],
};

export default function WorkspaceModule({
  id,
  locale,
}: {
  id: Exclude<ModuleId, "dashboard" | "crm" | "ai-agents" | "financials" | "vendors">;
  locale: Locale;
}) {
  const meta = getModule(id);
  const demo = moduleDemos[id];
  const [items, setItems] = useState(seed[id]);
  const [selectedId, setSelectedId] = useState(seed[id][0].id);
  const [editing, setEditing] = useState(false);
  const [activity, setActivity] = useState<string[]>([]);
  const [form, setForm] = useState(seed[id][0]);
  const selected = items.find((item) => item.id === selectedId) ?? items[0];

  const totals = useMemo(
    () => [
      { label: locale === "ar" ? "السجلات" : "Records", value: `${items.length}` },
      { label: locale === "ar" ? "نشطة" : "Active", value: `${items.filter((item) => !item.status.toLowerCase().includes("draft")).length}` },
      { label: locale === "ar" ? "جاهزة" : "Ready", value: `${Math.max(1, items.length - 1)}` },
    ],
    [items, locale],
  );

  function selectItem(item: WorkspaceItem) {
    setSelectedId(item.id);
    setForm(item);
    setEditing(false);
  }

  function log(en: string, ar: string) {
    setActivity((current) => [locale === "ar" ? ar : en, ...current].slice(0, 6));
  }

  function saveItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setItems((current) => current.map((item) => (item.id === form.id ? form : item)));
    setEditing(false);
    log(`${form.name} updated`, `تم تحديث ${form.name}`);
  }

  function createItem() {
    const item = {
      id: Date.now(),
      name: locale === "ar" ? "سجل جديد" : "New record",
      owner: locale === "ar" ? "الفريق" : "Team",
      status: locale === "ar" ? "مسودة" : "Draft",
      due: "2026-06-14",
      value: id === "templates" ? "12 tasks" : "Setup",
      notes: demo.artifact[locale],
    };
    setItems((current) => [item, ...current]);
    setSelectedId(item.id);
    setForm(item);
    setEditing(true);
    log(`New ${meta.label.en} record created`, `تم إنشاء سجل جديد في ${meta.label.ar}`);
  }

  function applyAISetup() {
    const updated = {
      ...selected,
      status: locale === "ar" ? "جاهز للعرض" : "Demo-ready",
      notes: `${selected.notes} ${demo.artifact[locale]}`,
    };
    setItems((current) => current.map((item) => (item.id === selected.id ? updated : item)));
    setForm(updated);
    log(`AI setup applied to ${selected.name}`, `تم تطبيق إعداد الذكاء على ${selected.name}`);
  }

  function removeItem() {
    const next = items.filter((item) => item.id !== selected.id);
    setItems(next.length ? next : seed[id]);
    setSelectedId((next[0] ?? seed[id][0]).id);
    setForm(next[0] ?? seed[id][0]);
    log(`${selected.name} removed`, `تم حذف ${selected.name}`);
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">{meta.eyebrow[locale]}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{meta.title[locale]}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">{demo.purpose[locale]}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {totals.map((total) => (
              <MiniStat key={total.label} label={total.label} value={total.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[360px_1fr_340px]">
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-neutral-200 p-4">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "السجلات" : "Records"}</h2>
            <button className="grid h-9 w-9 place-items-center rounded-lg bg-neutral-950 text-white" onClick={createItem} aria-label={locale === "ar" ? "إضافة سجل" : "Add record"}>
              <Plus size={16} />
            </button>
          </div>
          <div className="divide-y divide-neutral-100">
            {items.map((item) => (
              <button
                key={item.id}
                className={`block w-full p-4 text-start transition-colors hover:bg-neutral-50 ${item.id === selected.id ? "bg-neutral-50" : ""}`}
                onClick={() => selectItem(item)}
              >
                <p className="text-sm font-semibold text-neutral-950">{item.name}</p>
                <p className="mt-1 text-xs text-neutral-500">{item.owner} · {item.status}</p>
                <p className="mt-2 text-xs font-semibold text-neutral-700">{item.value}</p>
              </button>
            ))}
          </div>
        </div>

        <form className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" onSubmit={saveItem}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-neutral-950">{selected.name}</h2>
              <p className="mt-1 text-sm text-neutral-500">{demo.artifactTitle[locale]}</p>
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={() => setEditing((value) => !value)}>
              <Pencil size={15} />
              {editing ? (locale === "ar" ? "عرض" : "View") : locale === "ar" ? "تعديل" : "Edit"}
            </button>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field disabled={!editing} label={locale === "ar" ? "الاسم" : "Name"} value={form.name} onChange={(value) => setForm((current) => ({ ...current, name: value }))} />
            <Field disabled={!editing} label={locale === "ar" ? "المالك" : "Owner"} value={form.owner} onChange={(value) => setForm((current) => ({ ...current, owner: value }))} />
            <Field disabled={!editing} label={locale === "ar" ? "الحالة" : "Status"} value={form.status} onChange={(value) => setForm((current) => ({ ...current, status: value }))} />
            <Field disabled={!editing} label={locale === "ar" ? "تاريخ/قيمة" : "Due / value"} value={form.value} onChange={(value) => setForm((current) => ({ ...current, value }))} />
          </div>
          <label className="mt-4 block">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{locale === "ar" ? "ملاحظات وإعداد" : "Notes and setup"}</span>
            <textarea
              disabled={!editing}
              value={form.notes}
              onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
              className="mt-2 min-h-32 w-full resize-none rounded-lg border border-neutral-200 px-3 py-2.5 text-sm leading-6 text-neutral-900 outline-none disabled:bg-neutral-50 disabled:text-neutral-600 focus:border-neutral-500"
            />
          </label>
          <div className="mt-5 flex flex-wrap gap-2">
            <button disabled={!editing} className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-neutral-300">
              <Save size={16} />
              {locale === "ar" ? "حفظ" : "Save changes"}
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={applyAISetup}>
              <WandSparkles size={16} />
              {demo.secondaryAction[locale]}
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-50" onClick={removeItem}>
              <Trash2 size={16} />
              {locale === "ar" ? "حذف" : "Remove"}
            </button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "إعدادات الوحدة" : "Module setup"}</h2>
            <div className="mt-4 space-y-2">
              {demo.capabilities[locale].map((item) => (
                <div key={item} className="flex gap-2 rounded-lg bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "سجل النشاط" : "Activity"}</h2>
            <div className="mt-4 space-y-3">
              {(activity.length ? activity : [locale === "ar" ? "جاهز للتعديل والإعداد" : "Ready to edit and configure"]).map((item, index) => (
                <p key={`${item}-${index}`} className="text-sm leading-6 text-neutral-600">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, disabled }: { label: string; value: string; onChange: (value: string) => void; disabled: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</span>
      <input
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900 outline-none disabled:bg-neutral-50 disabled:text-neutral-600 focus:border-neutral-500"
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
