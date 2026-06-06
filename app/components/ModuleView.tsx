"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Clock3,
  FileCheck2,
  MessageSquareText,
  PanelRightOpen,
  ShieldCheck,
} from "lucide-react";
import { copy, getModule, moduleDemos, moduleRecords, type Locale, type ModuleId } from "./content";

interface ModuleViewProps {
  id: ModuleId;
  locale: Locale;
}

const stageValues = [34, 68, 92];

export default function ModuleView({ id, locale }: ModuleViewProps) {
  const moduleMeta = getModule(id);
  const demo = moduleDemos[id];
  const c = copy[locale];
  const records = moduleRecords[id][locale];
  const isArabic = locale === "ar";
  const [selectedRecord, setSelectedRecord] = useState(0);
  const [approvedRecords, setApprovedRecords] = useState<number[]>([]);
  const [activityCount, setActivityCount] = useState(4);
  const [clientNote, setClientNote] = useState("");

  const selectedName = records[selectedRecord] ?? records[0];
  const selectedApproved = approvedRecords.includes(selectedRecord);
  const progress = stageValues[selectedRecord % stageValues.length];
  const status = selectedApproved ? c.statuses.approved : progress > 80 ? c.statuses.watch : c.statuses.active;

  const actionText = useMemo(() => {
    if (selectedApproved) {
      return locale === "ar"
        ? `تم اعتماد السجل وإضافته إلى سجل التدقيق. ${demo.artifact[locale]}`
        : `Record approved and added to the audit trail. ${demo.artifact[locale]}`;
    }

    return demo.artifact[locale];
  }, [demo.artifact, locale, selectedApproved]);

  function toggleApproval() {
    setApprovedRecords((current) =>
      current.includes(selectedRecord)
        ? current.filter((record) => record !== selectedRecord)
        : [...current, selectedRecord],
    );
    setActivityCount((current) => current + 1);
  }

  function addClientNote() {
    setClientNote(
      locale === "ar"
        ? `تم تجهيز تحديث العميل لـ ${selectedName}`
        : `Client update prepared for ${selectedName}`,
    );
    setActivityCount((current) => current + 1);
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {moduleMeta.eyebrow[locale]}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              {moduleMeta.title[locale]}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              {moduleMeta.description[locale]} {demo.purpose[locale]}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:min-w-[360px]">
            {demo.metrics[locale].map((metric) => (
              <MiniStat key={metric.label} label={metric.label} value={metric.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4">
            <div>
              <h2 className="text-base font-semibold text-neutral-950">{c.sections.records}</h2>
              <p className="mt-1 text-sm text-neutral-500">
                {locale === "ar" ? "اختر سجلاً لترى التفاصيل والإجراءات" : "Select a record to view details and actions"}
              </p>
            </div>
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
              {records.length} {locale === "ar" ? "سجلات" : "records"}
            </span>
          </div>
          <div className="divide-y divide-neutral-100">
            {records.map((record, index) => {
              const selected = selectedRecord === index;
              const approved = approvedRecords.includes(index);

              return (
                <button
                  key={record}
                  className={`grid w-full gap-4 px-5 py-4 text-start transition-colors md:grid-cols-[1fr_150px_120px] md:items-center ${
                    selected ? "bg-neutral-50" : "hover:bg-neutral-50"
                  }`}
                  onClick={() => setSelectedRecord(index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-semibold ${
                        selected ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-950">{record}</p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {locale === "ar" ? "اضغط لفتح مساحة العمل" : "Click to open workspace"}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      approved ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    <CheckCircle2 size={13} />
                    {approved ? c.statuses.approved : c.statuses.active}
                  </span>
                  <span className="inline-flex items-center justify-start gap-1.5 text-xs font-semibold text-neutral-700 md:justify-end">
                    {selected ? (locale === "ar" ? "مفتوح" : "Open") : locale === "ar" ? "فتح" : "Open"}
                    <ArrowUpRight size={13} className={isArabic ? "rotate-[-90deg]" : ""} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-neutral-950">
                {locale === "ar" ? "متطلبات PRD المغطاة" : "PRD requirements covered"}
              </h2>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {locale === "ar" ? "جاهز للعرض" : "Demo-ready"}
              </span>
            </div>
            <div className="mt-4 grid gap-2">
              {demo.capabilities[locale].map((capability) => (
                <div key={capability} className="flex items-start gap-2 rounded-lg bg-neutral-50 px-3 py-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-600" />
                  <span className="text-sm leading-5 text-neutral-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-neutral-950">{selectedName}</h2>
                <p className="mt-1 text-sm text-neutral-500">
                  {locale === "ar" ? "مساحة عمل تفاعلية للعرض التجريبي" : "Interactive workspace for the client demo"}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700">
                  <PanelRightOpen size={13} />
                  {status}
                </span>
                <span className="text-xs text-neutral-500">
                  {locale === "ar" ? `${activityCount} تفاعلات` : `${activityCount} demo interactions`}
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {demo.workflow[locale].slice(0, 5).map((stage, index) => {
                const complete = progress >= (index + 1) * 30 || selectedApproved;

                return (
                  <div key={stage} className="flex gap-3">
                    <div
                      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${
                        complete ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-400"
                      }`}
                    >
                      {complete ? <CheckCircle2 size={14} /> : <CircleDot size={14} />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-neutral-900">{stage}</p>
                        <span className="text-xs text-neutral-500">
                          {complete ? c.statuses.approved : c.statuses.pending}
                        </span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-100">
                        <div
                          className="h-full rounded-full bg-neutral-950 transition-all"
                          style={{ width: `${complete ? 100 : Math.max(18, progress - index * 18)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                onClick={toggleApproval}
              >
                <FileCheck2 size={16} />
                {selectedApproved
                  ? locale === "ar"
                    ? "إلغاء الاعتماد"
                    : "Undo approval"
                  : demo.primaryAction[locale]}
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
                onClick={addClientNote}
              >
                <MessageSquareText size={16} />
                {demo.secondaryAction[locale]}
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">
              {demo.artifactTitle[locale]}
            </h2>
            <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <ShieldCheck size={16} />
                {selectedName}
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{actionText}</p>
              {clientNote ? (
                <p className="mt-3 rounded-lg bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm">{clientNote}</p>
              ) : null}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-neutral-950 p-5 text-white shadow-sm">
            <div className="flex items-center gap-2">
              <Clock3 size={17} />
              <h2 className="text-base font-semibold">
                {locale === "ar" ? "الإجراء التالي" : "Next best action"}
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {selectedApproved
                ? locale === "ar"
                  ? "شارك تحديثاً مختصراً مع العميل واحفظ القرار في سجل التدقيق."
                  : "Share a concise client update and keep the decision in the audit trail."
                : locale === "ar"
                  ? "اعتمد السجل أو جهز تحديث العميل قبل اجتماع التشغيل القادم."
                  : "Approve the record or prepare the client update before the next operating meeting."}
            </p>
          </div>
        </div>
      </section>
    </div>
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
