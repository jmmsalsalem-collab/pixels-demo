"use client";

import { useMemo, useState } from "react";
import AIAssistant from "./components/AIAssistant";
import AIAgents from "./components/AIAgents";
import CRM from "./components/CRM";
import Dashboard from "./components/Dashboard";
import Financials from "./components/Financials";
import { Directory, MediaGallery, Reports, Templates, Vendors } from "./components/Modules";
import Portal from "./components/Portal";
import Projects from "./components/Projects";
import { Proposals } from "./components/Proposals";
import Sidebar, { MobileMenuButton } from "./components/Sidebar";
import { copy, getModule, roles, type Locale, type ModuleId } from "./components/content";

export default function Home() {
  const [activeModule, setActiveModule] = useState<ModuleId>("dashboard");
  const [locale, setLocale] = useState<Locale>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(1);

  const active = useMemo(() => getModule(activeModule), [activeModule]);
  const c = copy[locale];
  const isArabic = locale === "ar";
  const roleLabel = roles[locale][activeRole];

  const renderModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <Dashboard locale={locale} onOpenModule={setActiveModule} />;
      case "crm":
        return <CRM locale={locale} />;
      case "projects":
        return <Projects locale={locale} />;
      case "ai-agents":
        return <AIAgents locale={locale} />;
      case "portal":
        return <Portal locale={locale} />;
      case "proposals":
        return <Proposals locale={locale} />;
      case "financials":
        return <Financials locale={locale} />;
      case "media":
        return <MediaGallery locale={locale} />;
      case "vendors":
        return <Vendors locale={locale} />;
      case "reports":
        return <Reports locale={locale} />;
      case "templates":
        return <Templates locale={locale} />;
      case "directory":
        return <Directory locale={locale} />;
      default:
        return <Dashboard locale={locale} onOpenModule={setActiveModule} />;
    }
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-neutral-100 text-neutral-950">
      <div className="flex min-h-screen">
        <Sidebar
          active={activeModule}
          locale={locale}
          mobileOpen={mobileOpen}
          onSelect={setActiveModule}
          onToggleLocale={() => setLocale((current) => (current === "en" ? "ar" : "en"))}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-neutral-200 bg-neutral-100/85 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <MobileMenuButton onClick={() => setMobileOpen(true)} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    {active.eyebrow[locale]}
                  </p>
                  <h2 className="truncate text-lg font-semibold text-neutral-950">{active.label[locale]}</h2>
                </div>
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <label className="sr-only" htmlFor="role-selector">
                  {isArabic ? "الدور" : "Role"}
                </label>
                <select
                  id="role-selector"
                  value={activeRole}
                  onChange={(event) => setActiveRole(Number(event.target.value))}
                  className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 outline-none transition-colors hover:bg-neutral-50 focus:border-neutral-400"
                >
                  {roles[locale].map((role, index) => (
                    <option key={role} value={index}>
                      {role}
                    </option>
                  ))}
                </select>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600">
                  {c.operator}
                </span>
                <button
                  className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
                  onClick={() => setLocale((current) => (current === "en" ? "ar" : "en"))}
                >
                  {c.localeSwitch}
                </button>
              </div>
            </div>
          </header>

          <main>{renderModule()}</main>
        </div>
      </div>
      <AIAssistant locale={locale} activeModule={activeModule} activeRole={roleLabel} />
    </div>
  );
}
