"use client";

import { ArrowUpRight, CheckCircle2, CircleDot, Clock3 } from "lucide-react";
import { copy, getModule, moduleRecords, type Locale, type ModuleId } from "./content";

interface ModuleViewProps {
  id: ModuleId;
  locale: Locale;
}

export default function ModuleView({ id, locale }: ModuleViewProps) {
  const moduleMeta = getModule(id);
  const c = copy[locale];
  const records = moduleRecords[id][locale];
  const isArabic = locale === "ar";

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
              {moduleMeta.description[locale]}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:min-w-[360px]">
            <MiniStat label={locale === "ar" ? "النشاط" : "Activity"} value="94%" />
            <MiniStat label={locale === "ar" ? "المخاطر" : "Risk"} value={locale === "ar" ? "منخفض" : "Low"} />
            <MiniStat label={locale === "ar" ? "المالك" : "Owner"} value={locale === "ar" ? "الإدارة" : "Ops"} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <div>
              <h2 className="text-base font-semibold text-neutral-950">{c.sections.records}</h2>
              <p className="mt-1 text-sm text-neutral-500">
                {locale === "ar" ? "سجلات مختارة للمتابعة التنفيذية" : "Selected records for executive follow-up"}
              </p>
            </div>
            <button className="rounded-lg border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50">
              {locale === "ar" ? "عرض الكل" : "View all"}
            </button>
          </div>
          <div className="divide-y divide-neutral-100">
            {records.map((record, index) => (
              <div key={record} className="grid gap-4 px-5 py-4 md:grid-cols-[1fr_140px_120px] md:items-center">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-neutral-100 text-sm font-semibold text-neutral-700">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">{record}</p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {locale === "ar" ? "تحديث حديث وجاهز للمراجعة" : "Recently updated and ready for review"}
                    </p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={13} />
                  {c.statuses.active}
                </span>
                <button className="inline-flex items-center justify-start gap-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 md:justify-end">
                  {locale === "ar" ? "فتح" : "Open"}
                  <ArrowUpRight size={13} className={isArabic ? "rotate-[-90deg]" : ""} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{c.sections.governance}</h2>
            <div className="mt-5 space-y-4">
              {[
                locale === "ar" ? "صلاحيات مبنية على الدور" : "Role-based permissions",
                locale === "ar" ? "سجل تدقيق قابل للتصدير" : "Exportable audit trail",
                locale === "ar" ? "تدفقات موافقة متعددة المراحل" : "Multi-step approval workflows",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CircleDot size={18} className="mt-0.5 shrink-0 text-neutral-400" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{item}</p>
                    <p className="mt-1 text-xs leading-5 text-neutral-500">
                      {locale === "ar"
                        ? "مصمم لدعم الحوكمة الداخلية ومتطلبات الفرق الكبيرة."
                        : "Designed to support internal governance and large-team controls."}
                    </p>
                  </div>
                </div>
              ))}
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
              {locale === "ar"
                ? "مراجعة السجلات الثلاثة الأعلى أولوية قبل اجتماع التشغيل القادم."
                : "Review the top three priority records before the next operating meeting."}
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
