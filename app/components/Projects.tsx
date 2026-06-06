"use client";

import ModuleView from "./ModuleView";
import type { Locale } from "./content";

export default function Projects({ locale }: { locale: Locale }) {
  return <ModuleView id="projects" locale={locale} />;
}
