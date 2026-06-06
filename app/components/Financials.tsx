"use client";

import ModuleView from "./ModuleView";
import type { Locale } from "./content";

export default function Financials({ locale }: { locale: Locale }) {
  return <ModuleView id="financials" locale={locale} />;
}
