export interface Partner {
    id: number;
    title_ar: string;
    title_en: string;
    image: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    image_url: string;
}

export const mockPartners: Partner[] = [
    {
        id: 1,
        title_ar: "بنك الوحدة",
        title_en: "Wahda Bank",
        image: "partner/wahda-bank-logo.jpg",
        created_at: "2026-09-10T15:56:50.000000Z",
        updated_at: "2026-09-10T15:56:50.000000Z",
        image_url: "http://127.0.0.1:8000/storage/partner/wahda-bank-logo.jpg",
    },
    {
        id: 2,
        title_ar: "مجموعة الصادق للاستثمار",
        title_en: "Al-Sadeq Investment Group",
        image: "partner/al-sadeq-investment-logo.jpg",
        created_at: "2026-09-10T16:02:15.000000Z",
        updated_at: "2026-09-10T16:02:15.000000Z",
        image_url: "http://127.0.0.1:8000/storage/partner/al-sadeq-investment-logo.jpg",
    },
    {
        id: 3,
        title_ar: "شركة ليبيا للتكنولوجيا المالية",
        title_en: "Libya Fintech Company",
        image: "partner/libya-fintech-logo.jpg",
        created_at: "2026-09-10T16:10:40.000000Z",
        updated_at: "2026-09-10T16:10:40.000000Z",
        image_url: "http://127.0.0.1:8000/storage/partner/libya-fintech-logo.jpg",
    },
    {
        id: 4,
        title_ar: "مؤسسة التنمية العقارية",
        title_en: "Real Estate Development Foundation",
        image: "partner/real-estate-dev-logo.jpg",
        created_at: "2026-09-10T16:18:05.000000Z",
        updated_at: "2026-09-10T16:18:05.000000Z",
        image_url: "http://127.0.0.1:8000/storage/partner/real-estate-dev-logo.jpg",
    },
];