import {
  BarChart3,
  Bot,
  Building2,
  CheckSquare,
  DollarSign,
  FileText,
  FolderKanban,
  Globe,
  Image,
  LayoutDashboard,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Locale = "en" | "ar";
export type ModuleId =
  | "dashboard"
  | "crm"
  | "projects"
  | "ai-agents"
  | "portal"
  | "proposals"
  | "financials"
  | "media"
  | "vendors"
  | "reports"
  | "templates"
  | "directory";

export interface ModuleMeta {
  id: ModuleId;
  icon: LucideIcon;
  label: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const modules: ModuleMeta[] = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: { en: "Executive Dashboard", ar: "لوحة القيادة" },
    eyebrow: { en: "Command center", ar: "مركز التحكم" },
    title: { en: "Portfolio operating view", ar: "عرض تشغيلي شامل" },
    description: {
      en: "A consolidated view of revenue, delivery, client health, and operational risk.",
      ar: "عرض موحد للإيرادات والتنفيذ وصحة العملاء والمخاطر التشغيلية.",
    },
  },
  {
    id: "crm",
    icon: Users,
    label: { en: "CRM", ar: "إدارة العملاء" },
    eyebrow: { en: "Revenue pipeline", ar: "مسار الإيرادات" },
    title: { en: "Client relationship management", ar: "إدارة علاقات العملاء" },
    description: {
      en: "Prioritize opportunities, key accounts, and high-value client follow-up.",
      ar: "ترتيب الفرص والحسابات المهمة ومتابعات العملاء عالية القيمة.",
    },
  },
  {
    id: "projects",
    icon: FolderKanban,
    label: { en: "Projects", ar: "المشاريع" },
    eyebrow: { en: "Delivery governance", ar: "حوكمة التنفيذ" },
    title: { en: "Projects and tasks", ar: "المشاريع والمهام" },
    description: {
      en: "Track scope, milestones, ownership, blockers, and execution readiness.",
      ar: "متابعة النطاق والمراحل والمسؤوليات والعوائق وجاهزية التنفيذ.",
    },
  },
  {
    id: "ai-agents",
    icon: Bot,
    label: { en: "AI Agents", ar: "وكلاء الذكاء" },
    eyebrow: { en: "AI operations", ar: "تشغيل الذكاء الاصطناعي" },
    title: { en: "Agent-assisted workflows", ar: "سير عمل مدعوم بالوكلاء" },
    description: {
      en: "Use controlled AI assistants for research, operations, reporting, and client communication.",
      ar: "استخدام وكلاء منضبطين للبحث والتشغيل والتقارير والتواصل مع العملاء.",
    },
  },
  {
    id: "portal",
    icon: Globe,
    label: { en: "Client Portal", ar: "بوابة العميل" },
    eyebrow: { en: "External experience", ar: "تجربة خارجية" },
    title: { en: "Secure client portal", ar: "بوابة عميل آمنة" },
    description: {
      en: "Give clients a clean status view with approvals, milestones, and documents.",
      ar: "منح العملاء عرضاً واضحاً للحالة والموافقات والمراحل والمستندات.",
    },
  },
  {
    id: "proposals",
    icon: FileText,
    label: { en: "Proposals", ar: "العروض" },
    eyebrow: { en: "Commercial documents", ar: "مستندات تجارية" },
    title: { en: "Proposal builder", ar: "منشئ العروض" },
    description: {
      en: "Standardize premium proposals with pricing, scope, terms, and approval history.",
      ar: "توحيد العروض الاحترافية مع الأسعار والنطاق والشروط وسجل الموافقات.",
    },
  },
  {
    id: "financials",
    icon: DollarSign,
    label: { en: "Financials", ar: "المالية" },
    eyebrow: { en: "Financial control", ar: "الرقابة المالية" },
    title: { en: "Revenue and margin control", ar: "التحكم بالإيراد والهامش" },
    description: {
      en: "Monitor collection risk, margin variance, budgets, and payment milestones.",
      ar: "مراقبة مخاطر التحصيل وتغيرات الهامش والميزانيات ومراحل الدفع.",
    },
  },
  {
    id: "media",
    icon: Image,
    label: { en: "Media", ar: "الوسائط" },
    eyebrow: { en: "Asset governance", ar: "حوكمة الأصول" },
    title: { en: "Media and mood boards", ar: "الوسائط ولوحات المزاج" },
    description: {
      en: "Organize visual assets, approval sets, and client-facing presentation material.",
      ar: "تنظيم الأصول البصرية ومجموعات الموافقة ومواد العرض للعملاء.",
    },
  },
  {
    id: "vendors",
    icon: Truck,
    label: { en: "Vendors", ar: "الموردون" },
    eyebrow: { en: "Supply network", ar: "شبكة التوريد" },
    title: { en: "Vendor management", ar: "إدارة الموردين" },
    description: {
      en: "Compare preferred suppliers, lead times, terms, ratings, and procurement exposure.",
      ar: "مقارنة الموردين المفضلين ومدة التوريد والشروط والتقييمات ومخاطر الشراء.",
    },
  },
  {
    id: "reports",
    icon: BarChart3,
    label: { en: "Reports", ar: "التقارير" },
    eyebrow: { en: "Management reporting", ar: "تقارير الإدارة" },
    title: { en: "AI-generated reporting", ar: "تقارير مدعومة بالذكاء" },
    description: {
      en: "Generate executive updates from live operating data and board-ready templates.",
      ar: "إنشاء تحديثات تنفيذية من بيانات التشغيل وقوالب جاهزة للإدارة.",
    },
  },
  {
    id: "templates",
    icon: CheckSquare,
    label: { en: "Templates", ar: "القوالب" },
    eyebrow: { en: "Process library", ar: "مكتبة الإجراءات" },
    title: { en: "Task templates", ar: "قوالب المهام" },
    description: {
      en: "Codify repeatable delivery playbooks for premium interior and smart-room work.",
      ar: "توحيد إجراءات التنفيذ المتكررة للتصميم الداخلي والغرف الذكية.",
    },
  },
  {
    id: "directory",
    icon: Building2,
    label: { en: "Directory", ar: "الدليل" },
    eyebrow: { en: "People and roles", ar: "الأفراد والأدوار" },
    title: { en: "Employee directory", ar: "دليل الموظفين" },
    description: {
      en: "Clarify ownership, utilization, skills, and escalation paths across teams.",
      ar: "توضيح المسؤوليات ونسب الانشغال والمهارات ومسارات التصعيد بين الفرق.",
    },
  },
];

export const copy = {
  en: {
    appName: "PIXELS",
    appSubtitle: "Enterprise Operating Platform",
    operator: "Executive Workspace",
    localeSwitch: "العربية",
    search: "Search modules, clients, projects",
    live: "Live",
    secure: "SOC-ready controls",
    aiBadge: "AI-assisted operations",
    period: "June 2026",
    primaryAction: "Create executive report",
    secondaryAction: "Review risks",
    health: "Portfolio Health",
    insightTitle: "Executive AI Brief",
    insight:
      "Three delivery milestones require management attention this week. Revenue is ahead of budget, but procurement exposure is rising across AV-heavy projects.",
    metrics: [
      { label: "Active Projects", value: "19", note: "+3 this month" },
      { label: "Portfolio Revenue", value: "KD 489K", note: "+18% QoQ" },
      { label: "Gross Margin", value: "31.4%", note: "2.1 pts above plan" },
      { label: "At-Risk Items", value: "7", note: "3 require escalation" },
    ],
    sections: {
      revenue: "Revenue vs Plan",
      priorities: "Board Priorities",
      pipeline: "Pipeline Quality",
      activity: "Operating Rhythm",
      records: "Critical Records",
      governance: "Governance",
    },
    statuses: {
      healthy: "Healthy",
      watch: "Watch",
      risk: "Risk",
      approved: "Approved",
      pending: "Pending",
      active: "Active",
    },
  },
  ar: {
    appName: "بكسلز",
    appSubtitle: "منصة تشغيل مؤسسية",
    operator: "مساحة تنفيذية",
    localeSwitch: "English",
    search: "ابحث في الوحدات والعملاء والمشاريع",
    live: "مباشر",
    secure: "ضوابط جاهزة للمؤسسات",
    aiBadge: "تشغيل مدعوم بالذكاء",
    period: "يونيو 2026",
    primaryAction: "إنشاء تقرير تنفيذي",
    secondaryAction: "مراجعة المخاطر",
    health: "صحة المحفظة",
    insightTitle: "ملخص تنفيذي ذكي",
    insight:
      "ثلاث مراحل تنفيذ تحتاج انتباه الإدارة هذا الأسبوع. الإيرادات أعلى من الخطة، لكن مخاطر التوريد ترتفع في المشاريع المعتمدة على أنظمة الصوت والصورة.",
    metrics: [
      { label: "مشاريع نشطة", value: "19", note: "+3 هذا الشهر" },
      { label: "إيراد المحفظة", value: "489K د.ك", note: "+18% ربع سنوي" },
      { label: "الهامش الإجمالي", value: "31.4%", note: "أعلى من الخطة بـ 2.1" },
      { label: "بنود عالية المخاطر", value: "7", note: "3 تحتاج تصعيد" },
    ],
    sections: {
      revenue: "الإيراد مقابل الخطة",
      priorities: "أولويات الإدارة",
      pipeline: "جودة المسار",
      activity: "إيقاع التشغيل",
      records: "سجلات حرجة",
      governance: "الحوكمة",
    },
    statuses: {
      healthy: "سليم",
      watch: "متابعة",
      risk: "خطر",
      approved: "معتمد",
      pending: "قيد الانتظار",
      active: "نشط",
    },
  },
} as const;

export const revenueData = [
  { month: "Jan", revenue: 420, plan: 390 },
  { month: "Feb", revenue: 455, plan: 410 },
  { month: "Mar", revenue: 438, plan: 430 },
  { month: "Apr", revenue: 512, plan: 455 },
  { month: "May", revenue: 496, plan: 470 },
  { month: "Jun", revenue: 548, plan: 490 },
];

export const boardPriorities = {
  en: [
    "Resolve AV supplier exposure on two gaming-suite projects.",
    "Approve revised procurement budget for Salmiya Villa.",
    "Convert three proposal-stage opportunities before month end.",
  ],
  ar: [
    "معالجة مخاطر مورد الصوت والصورة في مشروعين للغرف الذكية.",
    "اعتماد ميزانية الشراء المعدلة لمشروع فيلا السالمية.",
    "تحويل ثلاث فرص في مرحلة العرض قبل نهاية الشهر.",
  ],
};

export const moduleRecords: Record<ModuleId, Record<Locale, string[]>> = {
  dashboard: {
    en: ["Al-Nasser Gaming Suite", "Salmiya Villa Renovation", "Jabriya Living Room"],
    ar: ["جناح ألعاب النصر", "تجديد فيلا السالمية", "غرفة معيشة الجابرية"],
  },
  crm: {
    en: ["Mohammed Al-Rashid - KD 22K", "Fatima Al-Sayed - KD 85K", "Khaled Dashti - KD 120K"],
    ar: ["محمد الراشد - 22 ألف د.ك", "فاطمة السيد - 85 ألف د.ك", "خالد دشتي - 120 ألف د.ك"],
  },
  projects: {
    en: ["Design approval", "Procurement release", "Installation readiness"],
    ar: ["اعتماد التصميم", "إطلاق الشراء", "جاهزية التركيب"],
  },
  "ai-agents": {
    en: ["Marketing analyst", "Operations copilot", "Research assistant"],
    ar: ["محلل التسويق", "مساعد العمليات", "مساعد البحث"],
  },
  portal: {
    en: ["Client approvals", "Milestone updates", "Document access"],
    ar: ["موافقات العملاء", "تحديثات المراحل", "الوصول للمستندات"],
  },
  proposals: {
    en: ["Gaming room template", "Architectural scope", "Premium fit-out proposal"],
    ar: ["قالب غرفة ألعاب", "نطاق معماري", "عرض تجهيز فاخر"],
  },
  financials: {
    en: ["Collections aging", "Margin variance", "Payment milestones"],
    ar: ["أعمار التحصيل", "تغيرات الهامش", "مراحل الدفع"],
  },
  media: {
    en: ["Mood board approvals", "Site photography", "3D render review"],
    ar: ["اعتماد لوحات المزاج", "تصوير الموقع", "مراجعة الرندرات"],
  },
  vendors: {
    en: ["Al-Jazeera Electronics", "Gulf Lighting Co.", "Premium Furniture KW"],
    ar: ["الجزيرة للإلكترونيات", "شركة الخليج للإضاءة", "بريميوم للأثاث"],
  },
  reports: {
    en: ["Executive update", "Client progress PDF", "Risk register"],
    ar: ["تحديث تنفيذي", "تقرير تقدم للعميل", "سجل المخاطر"],
  },
  templates: {
    en: ["Site survey", "Design phase", "Procurement checklist"],
    ar: ["مسح الموقع", "مرحلة التصميم", "قائمة الشراء"],
  },
  directory: {
    en: ["Project director", "Design lead", "Procurement owner"],
    ar: ["مدير المشروع", "قائد التصميم", "مسؤول الشراء"],
  },
};

export function getModule(id: ModuleId) {
  return modules.find((module) => module.id === id) ?? modules[0];
}
