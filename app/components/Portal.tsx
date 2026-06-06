"use client";

import WorkspaceModule from "./WorkspaceModule";
import type { Locale } from "./content";

export default function Portal({ locale }: { locale: Locale }) {
  return <WorkspaceModule id="portal" locale={locale} />;
}
