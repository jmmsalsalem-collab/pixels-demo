"use client";

import { useMemo, useState } from "react";
import { Menu, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import { copy, modules, type Locale, type ModuleId } from "./content";

interface SidebarProps {
  active: ModuleId;
  locale: Locale;
  mobileOpen: boolean;
  onSelect: (id: ModuleId) => void;
  onToggleLocale: () => void;
  onCloseMobile: () => void;
}

export default function Sidebar({
  active,
  locale,
  mobileOpen,
  onSelect,
  onToggleLocale,
  onCloseMobile,
}: SidebarProps) {
  const c = copy[locale];
  const isArabic = locale === "ar";
  const [query, setQuery] = useState("");

  const visibleModules = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return modules;
    }

    return modules.filter((module) => {
      const label = `${module.label.en} ${module.label.ar} ${module.eyebrow.en} ${module.eyebrow.ar}`;
      return label.toLowerCase().includes(normalized);
    });
  }, [query]);

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onCloseMobile}
      />
      <aside
        className={`fixed inset-y-0 z-40 flex w-[292px] flex-col border-neutral-200 bg-white text-neutral-950 shadow-2xl transition-transform duration-200 lg:static lg:z-auto lg:h-screen lg:translate-x-0 lg:border-e lg:shadow-none ${
          isArabic ? "right-0" : "left-0"
        } ${mobileOpen ? "translate-x-0" : isArabic ? "translate-x-full" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-950 text-sm font-bold text-white">
              P
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em]">{c.appName}</p>
              <p className="mt-0.5 text-xs text-neutral-500">{c.appSubtitle}</p>
            </div>
          </div>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 text-neutral-500 lg:hidden"
            onClick={onCloseMobile}
            aria-label="Close navigation"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-3 border-b border-neutral-200 px-5 py-4">
          <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-500 focus-within:border-neutral-400 focus-within:bg-white">
            <Search size={15} className="shrink-0" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
              placeholder={c.search}
              aria-label={c.search}
              type="search"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="rounded-lg border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
              onClick={onToggleLocale}
            >
              {c.localeSwitch}
            </button>
            <div className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              <ShieldCheck size={13} />
              {c.live}
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {visibleModules.map((module) => {
            const Icon = module.icon;
            const selected = active === module.id;
            return (
              <button
                key={module.id}
                className={`group flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-start text-sm transition-colors ${
                  selected
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-transparent text-neutral-600 hover:border-neutral-200 hover:bg-neutral-50 hover:text-neutral-950"
                }`}
                onClick={() => {
                  onSelect(module.id);
                  onCloseMobile();
                }}
              >
                <Icon size={17} className={selected ? "text-white" : "text-neutral-400 group-hover:text-neutral-700"} />
                <span className="min-w-0 flex-1 truncate">{module.label[locale]}</span>
              </button>
            );
          })}
          {visibleModules.length === 0 ? (
            <div className="rounded-lg border border-dashed border-neutral-200 px-3 py-4 text-sm text-neutral-500">
              {locale === "ar" ? "لا توجد وحدة مطابقة" : "No matching module"}
            </div>
          ) : null}
        </nav>

        <div className="border-t border-neutral-200 p-4">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-neutral-700">
              <Sparkles size={14} />
              {c.aiBadge}
            </div>
            <p className="text-xs leading-relaxed text-neutral-500">{c.secure}</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="grid h-10 w-10 place-items-center rounded-lg border border-neutral-200 bg-white text-neutral-700 lg:hidden"
      onClick={onClick}
      aria-label="Open navigation"
    >
      <Menu size={18} />
    </button>
  );
}
