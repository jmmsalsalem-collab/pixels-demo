"use client";

import ModuleView from "./ModuleView";
import type { Locale } from "./content";

export function Proposals({ locale }: { locale: Locale }) {
  return <ModuleView id="proposals" locale={locale} />;
}
