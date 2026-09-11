export interface CompanyContact {
    id: number;
    brief_ar: string;
    brief_en: string;
    address_ar: string;
    address_en: string;
    logo: string;
    mobile: string;
    email: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    logo_url: string;
}

export const mockCompanyContact: CompanyContact = {
    id: 1,
    brief_ar: "شركة قنوان للاستثمار وإدارة المجموعات التجارية. ملتزمون ببناء مستقبل مستدام من خلال استثمارات استراتيجية ورؤية طويلة الأمد.",
    brief_en: "Qanwan Investment and Commercial Group Management Company. We are committed to building a sustainable future through strategic investments and a long-term vision.",
    address_ar: "شارع عرابي باشا متفرع من شارع ميزران مبنى رقم 10.06.304 الدور الأول",
    address_en: "Orabi Pasha Street, off Mizran Street, Building No. 10.06.304, First Floor.",
    logo: "contact/16uZzGwbA0zDsUMTIncPeFXEStebdkTnGl594T1X.jpg",
    mobile: "00218914137373",
    email: "info@qinwangruop.com",
    created_at: "2026-09-11T14:01:29.000000Z",
    updated_at: "2026-09-11T14:01:29.000000Z",
    logo_url: "http://127.0.0.1:8000/storage/contact/16uZzGwbA0zDsUMTIncPeFXEStebdkTnGl594T1X.jpg",
};