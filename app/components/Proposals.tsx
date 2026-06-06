"use client";

import WorkspaceModule from "./WorkspaceModule";
import type { Locale } from "./content";

export function Proposals({ locale }: { locale: Locale }) {
  return <WorkspaceModule id="proposals" locale={locale} />;
}
