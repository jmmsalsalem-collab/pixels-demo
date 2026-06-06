"use client";

import ModuleView from "./ModuleView";
import type { Locale } from "./content";

export function MediaGallery({ locale }: { locale: Locale }) {
  return <ModuleView id="media" locale={locale} />;
}

export function Vendors({ locale }: { locale: Locale }) {
  return <ModuleView id="vendors" locale={locale} />;
}

export function Reports({ locale }: { locale: Locale }) {
  return <ModuleView id="reports" locale={locale} />;
}

export function Templates({ locale }: { locale: Locale }) {
  return <ModuleView id="templates" locale={locale} />;
}

export function Directory({ locale }: { locale: Locale }) {
  return <ModuleView id="directory" locale={locale} />;
}
