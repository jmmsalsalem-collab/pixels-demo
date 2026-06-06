"use client";

import ModuleView from "./ModuleView";
import type { Locale } from "./content";

export default function AIAgents({ locale }: { locale: Locale }) {
  return <ModuleView id="ai-agents" locale={locale} />;
}
