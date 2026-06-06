"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { boardPriorities, copy, revenueData, roadmapPhases, successMetrics, type Locale, type ModuleId } from "./content";

export default function Dashboard({
  locale,
  onOpenModule,
}: {
  locale: Locale;
  onOpenModule: (module: ModuleId) => void;
}) {
  const c = copy[locale];
  const [reportReady, setReportReady] = useState(false);
  const [riskFocus, setRiskFocus] = useState<"delivery" | "procurement">("delivery");
  const currentRisk = useMemo(
    () =>
      riskFocus === "delivery"
        ? {
            title: locale === "ar" ? "مخاطر التنفيذ" : "Delivery risk",
            note:
              locale === "ar"
                ? "مرحلتان تحتاجان قراراً قبل الخميس لتجنب تأخير التركيب."
                : "Two milestones need a decision before Thursday to prevent installation delay.",
            module: "projects" as ModuleId,
          }
        : {
            title: locale === "ar" ? "مخاطر التوريد" : "Procurement exposure",
            note:
              locale === "ar"
                ? "مورد واحد يؤثر على ثلاثة مشاريع بسبب مدة توريد أطول من الخطة."
                : "One vendor affects three projects because lead time is running longer than plan.",
            module: "vendors" as ModuleId,
          },
    [locale, riskFocus],
  );

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
                {c.period}
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {c.health}: 91%
              </span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {locale === "ar" ? "منصة بكسلز المؤسسية" : "Pixels Enterprise Platform"}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              {locale === "ar" ? "تشغيل احترافي للمبيعات والتنفيذ والعملاء" : "Professional command layer for sales, delivery, and client operations"}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              {locale === "ar"
                ? "واجهة تنفيذية واضحة لمراقبة الأداء والمخاطر والقرارات اليومية بدون ازدحام بصري أو محتوى تجريبي ضعيف."
                : "A clean executive workspace for monitoring performance, risk, and daily decisions without noisy demo clutter."}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              className="rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              onClick={() => setReportReady(true)}
            >
              {c.primaryAction}
            </button>
            <button
              className="rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
              onClick={() => setRiskFocus((current) => (current === "delivery" ? "procurement" : "delivery"))}
            >
              {c.secondaryAction}
            </button>
          </div>
        </div>
      </section>

      {reportReady ? (
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-900">
                {locale === "ar" ? "تم تجهيز التقرير التنفيذي" : "Executive report prepared"}
              </p>
              <p className="mt-1 text-sm leading-6 text-blue-800">
                {locale === "ar"
                  ? "تم تجميع الأداء والمخاطر والأولويات في ملخص قابل للمراجعة."
                  : "Performance, risks, and priorities have been assembled into a review-ready summary."}
              </p>
            </div>
            <button
              className="w-fit rounded-lg bg-blue-900 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              onClick={() => onOpenModule("reports")}
            >
              {locale === "ar" ? "فتح التقارير" : "Open reports"}
            </button>
          </div>
        </section>
      ) : null}

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {c.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-neutral-500">{metric.label}</p>
              <ArrowUpRight size={16} className="text-neutral-400" />
            </div>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">{metric.value}</p>
            <p className="mt-1 text-xs text-neutral-500">{metric.note}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-neutral-950">{c.sections.revenue}</h2>
              <p className="mt-1 text-sm text-neutral-500">
                {locale === "ar" ? "أرقام شهرية بالألف دينار كويتي" : "Monthly figures in KWD thousands"}
              </p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              +11.8%
            </span>
          </div>
          <div className="grid h-[292px] grid-cols-6 items-end gap-3 border-b border-neutral-200 pb-6">
            {revenueData.map((item) => (
              <div key={item.month} className="flex h-full min-w-0 flex-col justify-end gap-2">
                <div className="relative flex flex-1 items-end justify-center rounded-lg bg-neutral-50 px-2">
                  <div
                    className="absolute bottom-0 w-2 rounded-t-full bg-neutral-300"
                    style={{ height: `${Math.max(8, (item.plan / 600) * 100)}%` }}
                  />
                  <div
                    className="relative w-6 rounded-t-md bg-neutral-950"
                    style={{ height: `${Math.max(8, (item.revenue / 600) * 100)}%` }}
                  />
                </div>
                <p className="truncate text-center text-xs font-medium text-neutral-500">{item.month}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles size={17} className="text-neutral-900" />
              <h2 className="text-base font-semibold text-neutral-950">{c.insightTitle}</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-600">{c.insight}</p>
            <button
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-blue-700"
              onClick={() => onOpenModule(currentRisk.module)}
            >
              {locale === "ar" ? "فتح الوحدة المرتبطة" : "Open related module"}
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-semibold text-neutral-950">{c.sections.priorities}</h2>
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                {currentRisk.title}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{currentRisk.note}</p>
            <div className="mt-4 space-y-3">
              {boardPriorities[locale].map((priority, index) => (
                <div key={priority} className="flex gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-neutral-600">{priority}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <OperatingPanel title={c.sections.pipeline} status={c.statuses.healthy} tone="green" locale={locale} />
        <OperatingPanel title={c.sections.activity} status={c.statuses.watch} tone="amber" locale={locale} />
        <OperatingPanel title={c.sections.governance} status={c.statuses.active} tone="neutral" locale={locale} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-neutral-950">
                {locale === "ar" ? "خارطة الطريق حسب PRD" : "PRD implementation roadmap"}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                {locale === "ar" ? "سبع مراحل، 22 أسبوعاً، جاهزة للنقاش مع العميل" : "Seven phases, 22 weeks, ready for client discussion"}
              </p>
            </div>
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
              {locale === "ar" ? "v2.0" : "v2.0"}
            </span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {roadmapPhases[locale].map((phase, index) => (
              <button
                key={phase}
                className="group flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-start transition-colors hover:border-neutral-400 hover:bg-white"
                onClick={() =>
                  onOpenModule(
                    index === 0
                      ? "crm"
                      : index === 1
                        ? "projects"
                        : index === 2
                          ? "ai-agents"
                          : index === 3
                            ? "portal"
                            : index === 4
                              ? "financials"
                              : index === 5
                                ? "media"
                                : "reports",
                  )
                }
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200 group-hover:bg-neutral-950 group-hover:text-white">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-neutral-700">{phase}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-neutral-950">
            {locale === "ar" ? "معايير نجاح العرض" : "Success metrics demo covers"}
          </h2>
          <div className="mt-5 space-y-3">
            {successMetrics[locale].map((metric) => (
              <div key={metric} className="flex gap-3 rounded-lg bg-neutral-50 px-3 py-3">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-neutral-700">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function OperatingPanel({
  title,
  status,
  tone,
  locale,
}: {
  title: string;
  status: string;
  tone: "green" | "amber" | "neutral";
  locale: Locale;
}) {
  const Icon = tone === "amber" ? AlertTriangle : CheckCircle2;
  const toneClass =
    tone === "green"
      ? "bg-emerald-50 text-emerald-700"
      : tone === "amber"
        ? "bg-amber-50 text-amber-700"
        : "bg-neutral-100 text-neutral-700";

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-neutral-950">{title}</h3>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${toneClass}`}>
          <Icon size={13} />
          {status}
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {[78, 64, 91].map((value, index) => (
          <div key={value}>
            <div className="mb-1 flex justify-between text-xs text-neutral-500">
              <span>{locale === "ar" ? `مؤشر ${index + 1}` : `Control ${index + 1}`}</span>
              <span>{value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full rounded-full bg-neutral-950" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
