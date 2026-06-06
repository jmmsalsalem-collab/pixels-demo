"use client";

import WorkspaceModule from "./WorkspaceModule";
import type { Locale } from "./content";

export default function Projects({ locale }: { locale: Locale }) {
  return <WorkspaceModule id="projects" locale={locale} />;
}
