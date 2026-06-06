"use client";

import ModuleView from "./ModuleView";
import type { Locale } from "./content";

export default function CRM({ locale }: { locale: Locale }) {
  return <ModuleView id="crm" locale={locale} />;
}
