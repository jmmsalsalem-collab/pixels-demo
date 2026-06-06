"use client";

import ModuleView from "./ModuleView";
import type { Locale } from "./content";

export default function Portal({ locale }: { locale: Locale }) {
  return <ModuleView id="portal" locale={locale} />;
}
