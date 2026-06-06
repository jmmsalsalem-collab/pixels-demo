"use client";

import { FormEvent, useMemo, useState } from "react";
import { AlertTriangle, PackageCheck, Plus, Star, Truck } from "lucide-react";
import type { Locale } from "./content";

interface Vendor {
  id: number;
  name: string;
  category: string;
  contact: string;
  rating: number;
  leadTime: number;
  price: number;
  status: string;
}

const initialVendors: Vendor[] = [
  { id: 1, name: "Al-Jazeera Electronics", category: "Displays", contact: "+965 2221 4400", rating: 4.5, leadTime: 9, price: 1850, status: "Preferred" },
  { id: 2, name: "Gulf Lighting Co.", category: "Lighting", contact: "+965 1888 0202", rating: 4.8, leadTime: 5, price: 620, status: "Recommended" },
  { id: 3, name: "Premium Furniture KW", category: "Furniture", contact: "+965 6060 7788", rating: 4.2, leadTime: 14, price: 2400, status: "Watch lead time" },
];

export default function Vendors({ locale }: { locale: Locale }) {
  const [vendors, setVendors] = useState(initialVendors);
  const [selectedId, setSelectedId] = useState(2);
  const [activity, setActivity] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", category: "Audio", contact: "", rating: "4.4", leadTime: "7", price: "1200" });
  const selected = vendors.find((vendor) => vendor.id === selectedId) ?? vendors[0];
  const best = useMemo(() => vendors.toSorted((a, b) => b.rating - a.rating || a.leadTime - b.leadTime)[0], [vendors]);

  function log(en: string, ar: string) {
    setActivity((current) => [locale === "ar" ? ar : en, ...current].slice(0, 6));
  }

  function addVendor(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim()) return;
    const vendor = {
      id: Date.now(),
      name: form.name.trim(),
      category: form.category,
      contact: form.contact || "+965 0000 0000",
      rating: Number(form.rating) || 4,
      leadTime: Number(form.leadTime) || 7,
      price: Number(form.price) || 0,
      status: locale === "ar" ? "جديد" : "New",
    };
    setVendors((current) => [vendor, ...current]);
    setSelectedId(vendor.id);
    setForm((current) => ({ ...current, name: "", contact: "" }));
    log(`Vendor added: ${vendor.name}`, `تمت إضافة مورد: ${vendor.name}`);
  }

  function createPO() {
    setVendors((current) => current.map((vendor) => (vendor.id === selected.id ? { ...vendor, status: "PO issued" } : vendor)));
    log(`Purchase order issued for ${selected.name}`, `تم إصدار أمر شراء لـ ${selected.name}`);
  }

  function markDelivered() {
    setVendors((current) => current.map((vendor) => (vendor.id === selected.id ? { ...vendor, status: "Delivered", leadTime: Math.max(1, vendor.leadTime - 1) } : vendor)));
    log(`${selected.name} marked delivered`, `تم تسجيل تسليم ${selected.name}`);
  }

  function flagPrice() {
    setVendors((current) => current.map((vendor) => (vendor.id === selected.id ? { ...vendor, status: "Price review", price: vendor.price + 150 } : vendor)));
    log(`Price review flagged for ${selected.name}`, `تم تمييز مراجعة السعر لـ ${selected.name}`);
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">{locale === "ar" ? "شبكة التوريد" : "Supply network"}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{locale === "ar" ? "إعداد الموردين والمنتجات وأوامر الشراء" : "Vendor, product, and purchase order setup"}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">{locale === "ar" ? "أضف مورداً، تابع السعر ووقت التوريد، أصدر أمر شراء، وسجل التسليم أو مراجعة السعر." : "Add suppliers, track price and lead time, issue purchase orders, and mark delivery or price review."}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <MiniStat label={locale === "ar" ? "الموردون" : "Vendors"} value={`${vendors.length}`} />
            <MiniStat label={locale === "ar" ? "أفضل تقييم" : "Top rating"} value={`${best.rating}/5`} />
            <MiniStat label={locale === "ar" ? "أسرع توريد" : "Fastest lead"} value={`${Math.min(...vendors.map((v) => v.leadTime))}d`} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[360px_1fr_340px]">
        <form className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" onSubmit={addVendor}>
          <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "إضافة مورد" : "Add vendor"}</h2>
          <div className="mt-4 space-y-4">
            <Field label={locale === "ar" ? "اسم المورد" : "Vendor name"} value={form.name} onChange={(value) => setForm((c) => ({ ...c, name: value }))} />
            <Field label={locale === "ar" ? "الفئة" : "Category"} value={form.category} onChange={(value) => setForm((c) => ({ ...c, category: value }))} />
            <Field label={locale === "ar" ? "التواصل" : "Contact"} value={form.contact} onChange={(value) => setForm((c) => ({ ...c, contact: value }))} />
            <div className="grid grid-cols-3 gap-3">
              <Field label={locale === "ar" ? "تقييم" : "Rating"} value={form.rating} onChange={(value) => setForm((c) => ({ ...c, rating: value }))} type="number" />
              <Field label={locale === "ar" ? "أيام" : "Days"} value={form.leadTime} onChange={(value) => setForm((c) => ({ ...c, leadTime: value }))} type="number" />
              <Field label={locale === "ar" ? "السعر" : "Price"} value={form.price} onChange={(value) => setForm((c) => ({ ...c, price: value }))} type="number" />
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white">
              <Plus size={16} />
              {locale === "ar" ? "إضافة المورد" : "Add vendor"}
            </button>
          </div>
        </form>

        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 p-4">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "قاعدة الموردين" : "Vendor database"}</h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {vendors.map((vendor) => (
              <button key={vendor.id} className={`grid w-full gap-4 p-4 text-start hover:bg-neutral-50 md:grid-cols-[1fr_100px_100px_120px] ${selected.id === vendor.id ? "bg-neutral-50" : ""}`} onClick={() => setSelectedId(vendor.id)}>
                <div>
                  <p className="text-sm font-semibold text-neutral-950">{vendor.name}</p>
                  <p className="mt-1 text-xs text-neutral-500">{vendor.category} · {vendor.contact}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700"><Star size={14} />{vendor.rating}</span>
                <span className="text-sm text-neutral-600">{vendor.leadTime} {locale === "ar" ? "أيام" : "days"}</span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700">{vendor.status}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "توصية الذكاء" : "AI vendor recommendation"}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{locale === "ar" ? `يوصى بـ ${best.name} بسبب تقييم ${best.rating} ووقت توريد ${best.leadTime} أيام.` : `${best.name} is recommended because it has a ${best.rating} rating and ${best.leadTime}-day lead time.`}</p>
            <div className="mt-5 grid gap-2">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white" onClick={createPO}><Truck size={16} />{locale === "ar" ? "إصدار أمر شراء" : "Issue PO"}</button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50" onClick={markDelivered}><PackageCheck size={16} />{locale === "ar" ? "تسجيل التسليم" : "Mark delivered"}</button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-200 px-4 py-2.5 text-sm font-semibold text-amber-700 hover:bg-amber-50" onClick={flagPrice}><AlertTriangle size={16} />{locale === "ar" ? "مراجعة السعر" : "Flag price"}</button>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-950">{locale === "ar" ? "النشاط" : "Activity"}</h2>
            <div className="mt-4 space-y-3">{(activity.length ? activity : [locale === "ar" ? "جاهز لإعداد الموردين وأوامر الشراء" : "Ready to set up vendors and purchase orders"]).map((item, index) => <p key={`${item}-${index}`} className="text-sm leading-6 text-neutral-600">{item}</p>)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return <label className="block"><span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</span><input value={value} onChange={(event) => onChange(event.target.value)} type={type} className="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none focus:border-neutral-500" /></label>;
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3"><p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">{label}</p><p className="mt-2 truncate text-sm font-semibold text-neutral-950">{value}</p></div>;
}
