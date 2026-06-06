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
    label: { en: "Onboarding", ar: "بدء المشاريع" },
    eyebrow: { en: "Smart templates", ar: "قوالب ذكية" },
    title: { en: "Smart task templates and onboarding", ar: "قوالب المهام وبدء المشاريع" },
    description: {
      en: "Auto-generate project checklists when new architectural, gaming room, living room, or mixed projects start.",
      ar: "إنشاء قوائم مهام تلقائية عند بدء مشاريع معمارية أو غرف ألعاب أو غرف معيشة أو مشاريع مختلطة.",
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

export interface ModuleDemo {
  purpose: Record<Locale, string>;
  capabilities: Record<Locale, string[]>;
  workflow: Record<Locale, string[]>;
  artifactTitle: Record<Locale, string>;
  artifact: Record<Locale, string>;
  primaryAction: Record<Locale, string>;
  secondaryAction: Record<Locale, string>;
  metrics: Record<Locale, { label: string; value: string }[]>;
}

const sharedGovernance = {
  en: ["RBAC permissions", "Audit log", "Client-safe data isolation"],
  ar: ["صلاحيات حسب الدور", "سجل تدقيق", "عزل بيانات العميل"],
};

export const moduleDemos: Record<ModuleId, ModuleDemo> = {
  dashboard: {
    purpose: {
      en: "Executive view of the whole Pixels platform: revenue, client transparency, operations, AI activity, and rollout readiness.",
      ar: "عرض تنفيذي شامل لمنصة بكسلز: الإيرادات، شفافية العميل، التشغيل، نشاط الذكاء، وجاهزية الإطلاق.",
    },
    capabilities: sharedGovernance,
    workflow: {
      en: ["Review portfolio health", "Generate management report", "Route risks to owners"],
      ar: ["مراجعة صحة المحفظة", "إنشاء تقرير إداري", "توجيه المخاطر للمسؤولين"],
    },
    artifactTitle: { en: "Board-ready summary", ar: "ملخص جاهز للإدارة" },
    artifact: {
      en: "Revenue is ahead of plan, but procurement lead times and client approvals need management attention this week.",
      ar: "الإيرادات أعلى من الخطة، لكن أوقات توريد الموردين وموافقات العملاء تحتاج انتباه الإدارة هذا الأسبوع.",
    },
    primaryAction: { en: "Generate board report", ar: "إنشاء تقرير الإدارة" },
    secondaryAction: { en: "Assign risk owner", ar: "تعيين مسؤول المخاطر" },
    metrics: {
      en: [
        { label: "Modules", value: "11" },
        { label: "Launch phases", value: "7" },
        { label: "Target timeline", value: "22w" },
      ],
      ar: [
        { label: "الوحدات", value: "11" },
        { label: "مراحل الإطلاق", value: "7" },
        { label: "المدة المستهدفة", value: "22 أسبوع" },
      ],
    },
  },
  crm: {
    purpose: {
      en: "Manage clients, project type, budget, source, communication history, contracts, and sales pipeline.",
      ar: "إدارة العملاء، نوع المشروع، الميزانية، المصدر، سجل التواصل، العقود، ومسار المبيعات.",
    },
    capabilities: {
      en: ["Full client profile", "Visual pipeline", "Follow-up reminders", "Contracts and files"],
      ar: ["ملف عميل كامل", "مسار مبيعات مرئي", "تذكير متابعة", "عقود وملفات"],
    },
    workflow: {
      en: ["Inquiry", "Meeting", "Proposal", "Contract", "Execution", "Delivery"],
      ar: ["استفسار", "اجتماع", "عرض", "عقد", "تنفيذ", "تسليم"],
    },
    artifactTitle: { en: "Client timeline", ar: "خط العميل الزمني" },
    artifact: {
      en: "Next reminder: send revised gaming room proposal within 24 hours of the client meeting.",
      ar: "التذكير التالي: إرسال عرض غرفة الألعاب المعدل خلال 24 ساعة من اجتماع العميل.",
    },
    primaryAction: { en: "Schedule follow-up", ar: "جدولة متابعة" },
    secondaryAction: { en: "Create proposal", ar: "إنشاء عرض" },
    metrics: {
      en: [
        { label: "Conversion", value: "38%" },
        { label: "Open deals", value: "KD 227K" },
        { label: "Follow-ups", value: "12" },
      ],
      ar: [
        { label: "التحويل", value: "38%" },
        { label: "فرص مفتوحة", value: "227K د.ك" },
        { label: "متابعات", value: "12" },
      ],
    },
  },
  projects: {
    purpose: {
      en: "Track architectural, gaming room, living room, and mixed projects through phases, tasks, dependencies, Kanban, and Gantt views.",
      ar: "متابعة المشاريع المعمارية وغرف الألعاب وغرف المعيشة والمشاريع المختلطة عبر المراحل والمهام والاعتماديات.",
    },
    capabilities: {
      en: ["Project phases", "Task dependencies", "Kanban board", "Gantt timeline", "Team comments"],
      ar: ["مراحل المشروع", "اعتماديات المهام", "لوحة كانبان", "مخطط جانت", "تعليقات الفريق"],
    },
    workflow: {
      en: ["Design", "Approval", "Procurement", "Execution", "Review", "Handover"],
      ar: ["تصميم", "موافقة", "توريد", "تنفيذ", "مراجعة", "تسليم"],
    },
    artifactTitle: { en: "Blocked dependency", ar: "اعتمادية متوقفة" },
    artifact: {
      en: "Cable routing cannot start until display selection is approved by the client.",
      ar: "لا يمكن بدء تمديد الكابلات قبل اعتماد العميل لاختيار الشاشات.",
    },
    primaryAction: { en: "Resolve blocker", ar: "حل العائق" },
    secondaryAction: { en: "Open Gantt view", ar: "فتح مخطط جانت" },
    metrics: {
      en: [
        { label: "Completed tasks", value: "142" },
        { label: "Delayed", value: "6" },
        { label: "Top contributor", value: "Dana" },
      ],
      ar: [
        { label: "مهام مكتملة", value: "142" },
        { label: "متأخرة", value: "6" },
        { label: "الأكثر إنجازاً", value: "دانا" },
      ],
    },
  },
  "ai-agents": {
    purpose: {
      en: "Embedded Claude-powered agents for marketing, operations, research, report drafting, and proactive task suggestions.",
      ar: "وكلاء مدعومون بكلود للتسويق والعمليات والبحث وصياغة التقارير واقتراح المهام.",
    },
    capabilities: {
      en: ["Marketing agent", "Operations agent", "Research mode", "Project-aware memory", "Tool calling"],
      ar: ["وكيل تسويق", "وكيل عمليات", "وضع البحث", "ذاكرة مرتبطة بالمشروع", "استدعاء أدوات"],
    },
    workflow: {
      en: ["Ask", "Retrieve context", "Analyze", "Suggest action", "Save conversation"],
      ar: ["اسأل", "استرجاع السياق", "تحليل", "اقتراح إجراء", "حفظ المحادثة"],
    },
    artifactTitle: { en: "AI recommendation", ar: "توصية الذكاء" },
    artifact: {
      en: "Move the AV vendor review to today and assign procurement backup before the installation window slips.",
      ar: "انقل مراجعة مورد الصوت والصورة إلى اليوم وعيّن بديلاً للمشتريات قبل تأخر نافذة التركيب.",
    },
    primaryAction: { en: "Ask operations agent", ar: "اسأل وكيل العمليات" },
    secondaryAction: { en: "Save AI task", ar: "حفظ مهمة الذكاء" },
    metrics: {
      en: [
        { label: "Weekly AI use", value: "64" },
        { label: "Saved chats", value: "238" },
        { label: "Suggested tasks", value: "17" },
      ],
      ar: [
        { label: "استخدام أسبوعي", value: "64" },
        { label: "محادثات محفوظة", value: "238" },
        { label: "مهام مقترحة", value: "17" },
      ],
    },
  },
  portal: {
    purpose: {
      en: "Give each client a secure project-only view with phase progress, milestones, documents, media, approvals, and messaging.",
      ar: "منح كل عميل عرضاً آمناً لمشروعه فقط مع المراحل والمعالم والمستندات والوسائط والموافقات والرسائل.",
    },
    capabilities: {
      en: ["Unique client login", "Milestone tracker", "Approvals", "Documents", "Direct messages"],
      ar: ["دخول خاص للعميل", "متابعة المعالم", "موافقات", "مستندات", "رسائل مباشرة"],
    },
    workflow: {
      en: ["Login", "Review progress", "Open media", "Approve phase", "Message PM"],
      ar: ["دخول", "مراجعة التقدم", "فتح الوسائط", "اعتماد المرحلة", "مراسلة المدير"],
    },
    artifactTitle: { en: "Client approval request", ar: "طلب موافقة العميل" },
    artifact: {
      en: "Salmiya Villa mood board is ready for approval. Client sees only this project and its documents.",
      ar: "لوحة مزاج فيلا السالمية جاهزة للاعتماد. العميل يرى هذا المشروع ومستنداته فقط.",
    },
    primaryAction: { en: "Approve phase", ar: "اعتماد المرحلة" },
    secondaryAction: { en: "Send portal update", ar: "إرسال تحديث البوابة" },
    metrics: {
      en: [
        { label: "Portal logins", value: "31" },
        { label: "Pending approvals", value: "4" },
        { label: "Update calls avoided", value: "18" },
      ],
      ar: [
        { label: "دخول البوابة", value: "31" },
        { label: "موافقات معلقة", value: "4" },
        { label: "مكالمات تم تقليلها", value: "18" },
      ],
    },
  },
  proposals: {
    purpose: {
      en: "Create branded AI-assisted proposals linked to CRM, vendor pricing, media assets, portal delivery, version history, and PDF export.",
      ar: "إنشاء عروض احترافية مدعومة بالذكاء مرتبطة بالعملاء وأسعار الموردين والوسائط والبوابة والتصدير PDF.",
    },
    capabilities: {
      en: ["Project templates", "AI narrative", "Vendor pricing", "Version history", "PDF export"],
      ar: ["قوالب مشاريع", "صياغة بالذكاء", "أسعار الموردين", "سجل النسخ", "تصدير PDF"],
    },
    workflow: {
      en: ["Draft", "Sent", "Under review", "Accepted", "Rejected"],
      ar: ["مسودة", "مرسل", "قيد المراجعة", "مقبول", "مرفوض"],
    },
    artifactTitle: { en: "Proposal preview", ar: "معاينة العرض" },
    artifact: {
      en: "Gaming Room proposal includes scope, timeline, itemized pricing, AV supplier options, and branded PDF export.",
      ar: "عرض غرفة الألعاب يتضمن النطاق والجدول والأسعار التفصيلية وخيارات مورد الصوت والصورة وتصدير PDF.",
    },
    primaryAction: { en: "Generate proposal", ar: "إنشاء العرض" },
    secondaryAction: { en: "Send to portal", ar: "إرساله للبوابة" },
    metrics: {
      en: [
        { label: "Turnaround", value: "-50%" },
        { label: "Accepted", value: "8" },
        { label: "Under review", value: "5" },
      ],
      ar: [
        { label: "وقت الإنجاز", value: "-50%" },
        { label: "مقبولة", value: "8" },
        { label: "قيد المراجعة", value: "5" },
      ],
    },
  },
  financials: {
    purpose: {
      en: "Track project-level budget, actual expenses, invoices, payment milestones, profitability, and exportable finance reports.",
      ar: "متابعة ميزانية المشروع والمصروف الفعلي والفواتير ومعالم الدفع والربحية والتقارير المالية القابلة للتصدير.",
    },
    capabilities: {
      en: ["Budget categories", "Actual expenses", "Invoice status", "Payment milestones", "Profitability"],
      ar: ["بنود الميزانية", "المصروف الفعلي", "حالة الفواتير", "معالم الدفع", "الربحية"],
    },
    workflow: {
      en: ["Budget set", "Expenses logged", "Invoice sent", "Payment received", "Margin reported"],
      ar: ["تحديد الميزانية", "تسجيل المصروف", "إرسال الفاتورة", "استلام الدفع", "تقرير الهامش"],
    },
    artifactTitle: { en: "Budget vs actual", ar: "الميزانية مقابل الفعلي" },
    artifact: {
      en: "AV materials are 8% over plan. Payment milestone two is pending and should trigger a client reminder.",
      ar: "مواد الصوت والصورة أعلى من الخطة بـ 8%. معلم الدفع الثاني معلق ويحتاج تذكير للعميل.",
    },
    primaryAction: { en: "Mark payment received", ar: "تسجيل الدفع" },
    secondaryAction: { en: "Export finance report", ar: "تصدير التقرير المالي" },
    metrics: {
      en: [
        { label: "Budget tracked", value: "100%" },
        { label: "Outstanding", value: "KD 74K" },
        { label: "Margin", value: "31.4%" },
      ],
      ar: [
        { label: "ميزانيات متابعة", value: "100%" },
        { label: "مستحقات", value: "74K د.ك" },
        { label: "الهامش", value: "31.4%" },
      ],
    },
  },
  media: {
    purpose: {
      en: "Organize before/after photos, 3D renders, mood boards, blueprints, approval statuses, and internal inspiration assets.",
      ar: "تنظيم صور قبل/بعد والرندرات ولوحات المزاج والمخططات وحالات الموافقة ومكتبة الإلهام الداخلية.",
    },
    capabilities: {
      en: ["Bulk upload", "Auto metadata", "Client approvals", "Inspiration library", "Proposal drag-in"],
      ar: ["رفع جماعي", "بيانات تلقائية", "موافقات العميل", "مكتبة إلهام", "إدراج في العروض"],
    },
    workflow: {
      en: ["Upload", "Tag", "Request approval", "Client comment", "Archive"],
      ar: ["رفع", "تصنيف", "طلب موافقة", "تعليق العميل", "أرشفة"],
    },
    artifactTitle: { en: "Mood board approval", ar: "اعتماد لوحة المزاج" },
    artifact: {
      en: "Three renders are pending client approval; one image has a revision request on lighting tone.",
      ar: "ثلاث رندرات بانتظار موافقة العميل؛ صورة واحدة عليها طلب تعديل في درجة الإضاءة.",
    },
    primaryAction: { en: "Send approval request", ar: "إرسال طلب موافقة" },
    secondaryAction: { en: "Add to proposal", ar: "إضافة للعرض" },
    metrics: {
      en: [
        { label: "Assets", value: "486" },
        { label: "Pending", value: "9" },
        { label: "Approved", value: "73%" },
      ],
      ar: [
        { label: "الأصول", value: "486" },
        { label: "معلقة", value: "9" },
        { label: "معتمدة", value: "73%" },
      ],
    },
  },
  vendors: {
    purpose: {
      en: "Centralize supplier profiles, product catalog, live price history, lead times, preferred vendors, purchase orders, and AI recommendations.",
      ar: "توحيد ملفات الموردين وكتالوج المنتجات وتاريخ الأسعار وأوقات التوريد والموردين المفضلين وأوامر الشراء وتوصيات الذكاء.",
    },
    capabilities: {
      en: ["Vendor profiles", "Product catalog", "Lead times", "PO tracking", "AI best-vendor suggestion"],
      ar: ["ملفات الموردين", "كتالوج المنتجات", "أوقات التوريد", "تتبع أوامر الشراء", "اقتراح أفضل مورد"],
    },
    workflow: {
      en: ["Select SKU", "Compare vendors", "Issue PO", "In transit", "Delivered", "Installed"],
      ar: ["اختيار المنتج", "مقارنة الموردين", "إصدار أمر شراء", "قيد الشحن", "تم التسليم", "تم التركيب"],
    },
    artifactTitle: { en: "AI vendor pick", ar: "اختيار المورد بالذكاء" },
    artifact: {
      en: "Gulf Lighting is recommended: 2-day faster lead time and higher project rating despite 3% higher price.",
      ar: "يوصى بشركة الخليج للإضاءة: وقت توريد أسرع بيومين وتقييم أعلى رغم سعر أعلى بـ 3%.",
    },
    primaryAction: { en: "Create purchase order", ar: "إنشاء أمر شراء" },
    secondaryAction: { en: "Flag stale price", ar: "تمييز سعر قديم" },
    metrics: {
      en: [
        { label: "Preferred vendors", value: "18" },
        { label: "Late items", value: "3" },
        { label: "Price alerts", value: "5" },
      ],
      ar: [
        { label: "موردون مفضلون", value: "18" },
        { label: "بنود متأخرة", value: "3" },
        { label: "تنبيهات أسعار", value: "5" },
      ],
    },
  },
  reports: {
    purpose: {
      en: "Generate Claude-powered project, client, team, monthly sales, operations, and financial health reports from live module data.",
      ar: "إنشاء تقارير مشاريع وعملاء وفريق ومبيعات وعمليات وصحة مالية مدعومة بكلود من بيانات الوحدات.",
    },
    capabilities: {
      en: ["Project status", "Client summary", "Team performance", "Sales report", "Financial health"],
      ar: ["حالة المشروع", "ملخص العميل", "أداء الفريق", "تقرير المبيعات", "الصحة المالية"],
    },
    workflow: {
      en: ["Select audience", "Pull live data", "AI narrative", "Review", "Export PDF", "Share"],
      ar: ["اختيار الجمهور", "سحب البيانات", "صياغة الذكاء", "مراجعة", "تصدير PDF", "مشاركة"],
    },
    artifactTitle: { en: "AI report output", ar: "مخرجات تقرير الذكاء" },
    artifact: {
      en: "Weekly operations report summarizes procurement delays, cost exposure, blockers, and next actions.",
      ar: "تقرير العمليات الأسبوعي يلخص تأخيرات التوريد والمخاطر المالية والعوائق والإجراءات التالية.",
    },
    primaryAction: { en: "Generate report", ar: "إنشاء التقرير" },
    secondaryAction: { en: "Export PDF", ar: "تصدير PDF" },
    metrics: {
      en: [
        { label: "Reports used", value: "84%" },
        { label: "Generated", value: "26" },
        { label: "Without edits", value: "19" },
      ],
      ar: [
        { label: "تقارير مستخدمة", value: "84%" },
        { label: "تم إنشاؤها", value: "26" },
        { label: "دون تعديل", value: "19" },
      ],
    },
  },
  templates: {
    purpose: {
      en: "Auto-generate editable project task checklists with dependencies and AI improvements based on completed work.",
      ar: "إنشاء قوائم مهام قابلة للتعديل مع الاعتماديات وتحسينات الذكاء بناءً على المشاريع المنجزة.",
    },
    capabilities: {
      en: ["Gaming Room 25+ tasks", "Architectural 30+ tasks", "Living Room 20+ tasks", "Dependency rules", "Assignee suggestions"],
      ar: ["غرفة ألعاب 25+ مهمة", "معماري 30+ مهمة", "غرفة معيشة 20+ مهمة", "قواعد اعتماد", "اقتراح مسؤولين"],
    },
    workflow: {
      en: ["Choose project type", "Generate checklist", "Edit tasks", "Assign owners", "Launch project"],
      ar: ["اختيار نوع المشروع", "إنشاء القائمة", "تعديل المهام", "تعيين المسؤولين", "إطلاق المشروع"],
    },
    artifactTitle: { en: "Generated checklist", ar: "قائمة مهام مولدة" },
    artifact: {
      en: "Gaming Room template created 27 tasks including survey, display selection, cabling, audio, lighting, testing, and handover.",
      ar: "قالب غرفة الألعاب أنشأ 27 مهمة تشمل القياس واختيار الشاشات والكابلات والصوت والإضاءة والاختبار والتسليم.",
    },
    primaryAction: { en: "Generate tasks", ar: "إنشاء المهام" },
    secondaryAction: { en: "Apply AI improvement", ar: "تطبيق تحسين الذكاء" },
    metrics: {
      en: [
        { label: "Tasks generated", value: "27" },
        { label: "Dependencies", value: "11" },
        { label: "Time saved", value: "6h" },
      ],
      ar: [
        { label: "مهام مولدة", value: "27" },
        { label: "اعتماديات", value: "11" },
        { label: "وقت محفوظ", value: "6 ساعات" },
      ],
    },
  },
  directory: {
    purpose: {
      en: "Show employee profiles, org chart, skills, workloads, performance, availability, and AI task routing suggestions.",
      ar: "عرض ملفات الموظفين والهيكل التنظيمي والمهارات والعبء والأداء والتوفر واقتراحات توجيه المهام بالذكاء.",
    },
    capabilities: {
      en: ["Employee profiles", "Org chart", "Workload visibility", "Skills matching", "Performance metrics"],
      ar: ["ملفات الموظفين", "هيكل تنظيمي", "وضوح العبء", "مطابقة المهارات", "مؤشرات الأداء"],
    },
    workflow: {
      en: ["Open employee", "Review workload", "Match skill", "Assign task", "Track performance"],
      ar: ["فتح الموظف", "مراجعة العبء", "مطابقة المهارة", "تعيين مهمة", "تتبع الأداء"],
    },
    artifactTitle: { en: "AI routing suggestion", ar: "اقتراح توجيه الذكاء" },
    artifact: {
      en: "Assign 3D render review to Dana: highest skill match and 22% remaining capacity this week.",
      ar: "عيّن مراجعة الرندر ثلاثي الأبعاد إلى دانا: أعلى تطابق مهاري و22% طاقة متاحة هذا الأسبوع.",
    },
    primaryAction: { en: "Assign task", ar: "تعيين المهمة" },
    secondaryAction: { en: "Export org chart", ar: "تصدير الهيكل" },
    metrics: {
      en: [
        { label: "Team", value: "24" },
        { label: "Overloaded", value: "3" },
        { label: "On-time rate", value: "87%" },
      ],
      ar: [
        { label: "الفريق", value: "24" },
        { label: "عبء زائد", value: "3" },
        { label: "الالتزام", value: "87%" },
      ],
    },
  },
};

export const roles = {
  en: ["System Admin", "Project Manager", "Design Team", "Marketing Team", "Operations", "Accountant", "Client"],
  ar: ["مدير النظام", "مدير المشروع", "فريق التصميم", "فريق التسويق", "العمليات", "المحاسب", "العميل"],
};

export const roadmapPhases = {
  en: [
    "Foundation: Auth, RBAC, Directory, CRM, bilingual shell",
    "Project engine: Tasks, Kanban/Gantt, templates, notifications",
    "AI integration: Claude agents, research, RAG pipeline",
    "Client and proposals: Portal, approvals, PDF export",
    "Financial and vendors: Budgets, invoices, purchase tracking",
    "Media and reports: Approvals, AI reports, dashboards",
    "Launch: UAT, training, migration, soft launch",
  ],
  ar: [
    "الأساس: الدخول والصلاحيات والدليل والعملاء والواجهة الثنائية",
    "محرك المشاريع: المهام وكانبان/جانت والقوالب والتنبيهات",
    "تكامل الذكاء: وكلاء كلود والبحث وخط RAG",
    "العميل والعروض: البوابة والموافقات وتصدير PDF",
    "المالية والموردون: الميزانيات والفواتير وتتبع الشراء",
    "الوسائط والتقارير: الموافقات وتقارير الذكاء واللوحات",
    "الإطلاق: اختبار وتدريب وترحيل وإطلاق ناعم",
  ],
};

export const successMetrics = {
  en: [
    "100% employee onboarding in Month 1",
    "All active project clients onboarded to portal in Month 2",
    "50+ AI interactions per week",
    "50% faster proposal turnaround",
    "30% fewer overdue tasks",
  ],
  ar: [
    "إدخال 100% من الموظفين في الشهر الأول",
    "إدخال جميع عملاء المشاريع النشطة للبوابة في الشهر الثاني",
    "50+ تفاعل ذكاء أسبوعياً",
    "تقليل وقت إعداد العروض 50%",
    "تقليل المهام المتأخرة 30%",
  ],
};

export function getModule(id: ModuleId) {
  return modules.find((module) => module.id === id) ?? modules[0];
}
