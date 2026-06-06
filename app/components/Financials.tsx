"use client";

import { FormEvent, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, CreditCard, FileDown, Plus, Receipt } from "lucide-react";
import type { Locale } from "./content";

interface FinanceProject {
  id: number;
  project: string;
  budget: number;
  spent: number;
  invoice: number;
  paid: number;
  status: string;
  category: string;
}

const initialProjects: FinanceProject[] = [
  { id: 1, project: "Al-Nasser Gaming Suite", budget: 22000, spent: 14800, invoice: 15400, paid: 6600, status: "Milestone 2 pending", category: "AV Materials" },
  { id: 2, project: "Salmiya Villa Renovation", budget: 85000, spent: 53300, invoice: 62000, paid: 38000, status: "On plan", category: "Labor" },
  { id: 3, project: "Dashti Living Room", budget: 36000, spent: 21900, invoice: 24000, paid: 12000, status: "Overdue invoice", category: "Furniture" },
];

export default function Financials({ locale }: { locale: Locale }) {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedId, setSelectedId] = useState(1);
  const [activity, setActivity] = useState<string[]>([]);
  const [form, setForm] = useState({
    project: "",
    budget: "48000",
    spent: "0",
    invoice: "0",
    paid: "0",
    category: "Materials",
  });

  const selected = projects.find((project) => project.id === selectedId) ?? projects[0];
  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const totalSpent = projects.reduce((sum, project) => sum + project.spent, 0);
  const totalOutstanding = projects.reduce((sum, project) => sum + project.invoice - project.paid, 0);
  const margin = useMemo(() => Math.round(((projects.reduce((sum, p) => sum + p.invoice, 0) - totalSpent) / Math.max(1, projects.reduce((sum, p) => sum + p.invoice, 0))) * 1000) / 10, [projects, totalSpent]);

  function log(en: string, ar: string) {
    setActivity((current) => [locale === "ar" ? ar : en, ...current].slice(0, 6));
  }

  function createProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.project.trim()) return;
    const project = {
      id: Date.now(),
      project: form.project.trim(),
      budget: Number(form.budget) || 0,
      spent: Number(form.spent) || 0,
      invoice: Number(form.invoice) || 0,
      paid: Number(form.paid) || 0,
      status: locale === "ar" ? "جديد" : "New",
      category: form.category,
    };
    setProjects((current) => [project, ...current]);
    setSelectedId(project.id);
    setForm((current) => ({ ...current, project: "" }));
    log(`Finance project added: ${project.project}`, `تمت إضافة مشروع مالي: ${project.project}`);
  }

  function markPaid() {
    setProjects((current) => current.map((project) => (project.id === selected.id ? { ...project, paid: project.invoice, status: "Paid" } : project)));
    log(`Payment marked received for ${selected.project}`, `تم تسجيل دفعة مستلمة لـ ${selected.project}`);
  }

  function addExpense() {
    setProjects((current) => current.map((project) => (project.id === selected.id ? { ...project, spent: project.spent + 1250, status: project.spent + 1250 > project.budget ? "Over budget" : project.status } : project)));
    log(`Expense logged for ${selected.project}`, `تم تسجيل مصروف لـ ${selected.project}`);
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">{locale === "ar" ? "الرقابة المالية" : "Financial control"}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{locale === "ar" ? "ميزانيات وفواتير ومدفوعات المشاريع" : "Project budgets, invoices, and payments"}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">{locale === "ar" ? "أدخل ميزانية المشروع، سجل المصروف، تابع الفواتير والمدفوعات، وشاهد الهامش مباشرة." : "Enter project budget, log expenses, track invoices and payments, and see margin update live."}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-4">
            <MiniStat label={locale === "ar" ? "الميزانية" : "Budget"} value={`KD ${money(totalBudget)}`} />
            <MiniStat label={locale === "ar" ? "المصروف" : "Spent"} value={`KD ${money(totalSpent)}`} />
            <MiniStat label={locale === "ar" ? "المستحق" : "Outstanding"} value={`KD ${money(totalOutstanding)}`} />
            <MiniStat label={locale === "ar" ? "الهامش" : "Margin"} value={`${margin}%`} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[360px_1fr_340px]">
        <form className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" onSubmit={createProject}>
          <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "إضافة متابعة مالية" : "Add financial record"}</h2>
          <div className="mt-4 space-y-4">
            <Field label={locale === "ar" ? "المشروع" : "Project"} value={form.project} onChange={(value) => setForm((c) => ({ ...c, project: value }))} placeholder="New project" />
            <Field label={locale === "ar" ? "الميزانية" : "Budget"} value={form.budget} onChange={(value) => setForm((c) => ({ ...c, budget: value }))} type="number" />
            <div className="grid grid-cols-2 gap-3">
              <Field label={locale === "ar" ? "مصروف" : "Spent"} value={form.spent} onChange={(value) => setForm((c) => ({ ...c, spent: value }))} type="number" />
              <Field label={locale === "ar" ? "فاتورة" : "Invoice"} value={form.invoice} onChange={(value) => setForm((c) => ({ ...c, invoice: value }))} type="number" />
            </div>
            <Field label={locale === "ar" ? "مدفوع" : "Paid"} value={form.paid} onChange={(value) => setForm((c) => ({ ...c, paid: value }))} type="number" />
            <Field label={locale === "ar" ? "البند" : "Category"} value={form.category} onChange={(value) => setForm((c) => ({ ...c, category: value }))} />
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white">
              <Plus size={16} />
              {locale === "ar" ? "إضافة" : "Add record"}
            </button>
          </div>
        </form>

        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 p-4">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "صحة المشاريع المالية" : "Project financial health"}</h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {projects.map((project) => {
              const percent = Math.round((project.spent / Math.max(1, project.budget)) * 100);
              return (
                <button key={project.id} className={`block w-full p-4 text-start hover:bg-neutral-50 ${selected.id === project.id ? "bg-neutral-50" : ""}`} onClick={() => setSelectedId(project.id)}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-neutral-950">{project.project}</p>
                      <p className="mt-1 text-xs text-neutral-500">{project.category} · {project.status}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${percent > 90 ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"}`}>
                      {percent > 90 ? <AlertTriangle size={13} /> : <CheckCircle2 size={13} />}
                      {percent}%
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className={`h-full rounded-full ${percent > 90 ? "bg-red-600" : "bg-neutral-950"}`} style={{ width: `${Math.min(100, percent)}%` }} />
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-neutral-500">
                    <span>KD {money(project.spent)} / KD {money(project.budget)}</span>
                    <span>{locale === "ar" ? "مستحق" : "Due"} KD {money(project.invoice - project.paid)}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{selected.project}</h2>
            <div className="mt-4 grid gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white" onClick={markPaid}>
                <CreditCard size={16} />
                {locale === "ar" ? "تسجيل الدفع" : "Mark payment received"}
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={addExpense}>
                <Receipt size={16} />
                {locale === "ar" ? "إضافة مصروف 1,250" : "Add KD 1,250 expense"}
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={() => log(`Finance report exported for ${selected.project}`, `تم تصدير التقرير المالي لـ ${selected.project}`)}>
                <FileDown size={16} />
                {locale === "ar" ? "تصدير تقرير" : "Export report"}
              </button>
            </div>
          </div>
          <Activity locale={locale} activity={activity} />
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} type={type} className="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none focus:border-neutral-500" />
    </label>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3"><p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">{label}</p><p className="mt-2 truncate text-sm font-semibold text-neutral-950">{value}</p></div>;
}

function Activity({ locale, activity }: { locale: Locale; activity: string[] }) {
  return <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"><h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "النشاط المالي" : "Financial activity"}</h2><div className="mt-4 space-y-3">{(activity.length ? activity : [locale === "ar" ? "جاهز لتسجيل الفواتير والمدفوعات" : "Ready to log invoices and payments"]).map((item, index) => <p key={`${item}-${index}`} className="text-sm leading-6 text-neutral-600">{item}</p>)}</div></div>;
}

function money(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.max(0, value));
}
