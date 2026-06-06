"use client";

import WorkspaceModule from "./WorkspaceModule";
import type { Locale } from "./content";

export function MediaGallery({ locale }: { locale: Locale }) {
  return <WorkspaceModule id="media" locale={locale} />;
}

export function Reports({ locale }: { locale: Locale }) {
  return <WorkspaceModule id="reports" locale={locale} />;
}

export function Templates({ locale }: { locale: Locale }) {
  return <WorkspaceModule id="templates" locale={locale} />;
}

export function Directory({ locale }: { locale: Locale }) {
  return <WorkspaceModule id="directory" locale={locale} />;
}
