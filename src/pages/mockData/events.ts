export interface EventItem {
    id: number;
    title_ar: string;
    title_en: string;
    description_ar: string;
    description_en: string;
    image: string;
    date: string; // ISO 8601 date string
    add_to_slider: boolean;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    image_url: string;
}

export const mockEventItems: EventItem[] = [
    {
        id: 1,
        title_ar: "افتتاح مشروع استثماري جديد في طرابلس",
        title_en: "New Investment Project Launched in Tripoli",
        description_ar: "أعلنت شركة قنوان عن افتتاح مشروعها الاستثماري الجديد في طرابلس، والذي يهدف إلى تعزيز النمو الاقتصادي في المنطقة وخلق فرص عمل جديدة للشباب الليبي.",
        description_en: "Qinwan announced the launch of its new investment project in Tripoli, aimed at boosting economic growth in the region and creating new job opportunities for Libyan youth.",
        image: "news/tripoli-investment-launch.jpg",
        date: "2026-03-15T00:00:00.000000Z",
        add_to_slider: true,
        created_at: "2026-03-15T09:15:22.000000Z",
        updated_at: "2026-03-15T09:15:22.000000Z",
        image_url: "http://127.0.0.1:8000/storage/news/tripoli-investment-launch.jpg",
    },
    {
        id: 2,
        title_ar: "نمو إجمالي سنوي",
        title_en: "Annual gross growth",
        description_ar: "نمو إجمالي سنوينمو إجمالي سنوينمو إجمالي سنوي",
        description_en: "نمو إجمالي سنوينمو إجمالي سنوينمو إجمالي سنوينمو إجمالي سنوي",
        image: "news/FGoTkuZ2hsjVMeIVqdSrHMW7PDZ1EkumXPksAfUi.jpg",
        date: "2026-01-01T00:00:00.000000Z",
        add_to_slider: false,
        created_at: "2026-09-11T14:25:43.000000Z",
        updated_at: "2026-09-11T14:25:43.000000Z",
        image_url: "http://127.0.0.1:8000/storage/news/FGoTkuZ2hsjVMeIVqdSrHMW7PDZ1EkumXPksAfUi.jpg",
    },
    {
        id: 3,
        title_ar: "توسع الشركة في القطاع العقاري",
        title_en: "Company Expands into Real Estate Sector",
        description_ar: "في إطار خطتها الاستراتيجية للنمو، تعلن قنوان عن دخولها قطاع العقارات من خلال مشروع سكني وتجاري متكامل في مدينة بنغازي.",
        description_en: "As part of its strategic growth plan, Qinwan announces its entry into the real estate sector through an integrated residential and commercial project in Benghazi.",
        image: "news/benghazi-real-estate.jpg",
        date: "2026-05-20T00:00:00.000000Z",
        add_to_slider: true,
        created_at: "2026-05-20T11:42:10.000000Z",
        updated_at: "2026-05-22T14:05:33.000000Z",
        image_url: "http://127.0.0.1:8000/storage/news/benghazi-real-estate.jpg",
    },
];