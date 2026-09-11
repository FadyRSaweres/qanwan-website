export interface HomeSection {
    id: number;
    section_1_title_ar: string;
    section_1_title_en: string;
    section_1_description_ar: string;
    section_1_description_en: string;
    section_2_title_ar: string;
    section_2_title_en: string;
    section_2_description_ar: string;
    section_2_description_en: string;
    section_3_title_ar: string;
    section_3_title_en: string;
    section_3_description_ar: string;
    section_3_description_en: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
}

export interface StatItem {
    id: number;
    title_ar: string;
    title_en: string;
    count: number;
    type: string; // e.g. "%", "+", "Empty" (no suffix)
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
}

export interface StatsResponse {
    data: StatItem[];
}

export const mockHomeSection: HomeSection = {
    id: 1,
    section_1_title_ar: "رؤية 2030",
    section_1_title_en: "2030 Vision",
    section_1_description_ar: "رؤية ..تخطيط..تنفيذ..ريادة",
    section_1_description_en: "Vision..Planning..Execution..Leadership",
    section_2_title_ar: "نموذجنا الاستثماري",
    section_2_title_en: "Our Investment Model",
    section_2_description_ar: "نعتمد على نموذج استثماري متوازن يضمن النمو المستدام وحماية رأس المال.",
    section_2_description_en: "We rely on a balanced investment model that ensures sustainable growth and capital preservation.",
    section_3_title_ar: "شراكات استراتيجية",
    section_3_title_en: "Strategic Partnerships",
    section_3_description_ar: "نبني شراكات استراتيجية مع مؤسسات رائدة لتعزيز محفظتنا الاستثمارية وتحقيق قيمة مستدامة.",
    section_3_description_en: "We build strategic partnerships with leading institutions to strengthen our investment portfolio and achieve sustainable value.",
    created_at: "2026-09-11T13:26:09.000000Z",
    updated_at: "2026-09-11T13:26:09.000000Z",
};

export const mockStats: StatItem[] = [
    {
        id: 1,
        title_ar: "نمو إجمالي سنوي",
        title_en: "Annual Gross Growth",
        count: 45,
        type: "%",
        created_at: "2026-09-11T13:47:41.000000Z",
        updated_at: "2026-09-11T13:48:00.000000Z",
    },
    {
        id: 2,
        title_ar: "مشروع استراتيجي",
        title_en: "Strategic Projects",
        count: 15,
        type: "+",
        created_at: "2026-09-11T13:48:10.000000Z",
        updated_at: "2026-09-11T13:48:10.000000Z",
    },
    {
        id: 3,
        title_ar: "قطاعات استثمارية",
        title_en: "Investment Sectors",
        count: 6,
        type: "Empty",
        created_at: "2026-09-11T13:48:20.000000Z",
        updated_at: "2026-09-11T13:48:20.000000Z",
    },
    {
        id: 4,
        title_ar: "أسواق إقليمية",
        title_en: "Regional Markets",
        count: 3,
        type: "Empty",
        created_at: "2026-09-11T13:48:30.000000Z",
        updated_at: "2026-09-11T13:48:30.000000Z",
    },
];