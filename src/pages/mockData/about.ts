export interface AboutDescription {
    id?: number;
    title_ar?: string;
    title_en?: string;
    description_ar?: string;
    description_en?: string;
    about_id?: number;
    created_at?: string; // ISO 8601 date string
    updated_at?: string; // ISO 8601 date string
}

export interface AboutItem {
    id: number;
    title_ar?: string;
    title_en?: string;
    slug_ar?: string;
    slug_en?: string;
    created_at?: string; // ISO 8601 date string
    updated_at?: string; // ISO 8601 date string
    descriptions: AboutDescription[];
}

export interface InvestmentModelItem {
    id: number;
    title_ar: string;
    title_en: string;
    description_ar: string;
    description_en: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
}


export interface InvestmentSector {
    id: number;
    title_ar: string;
    title_en: string;
    slug_ar: string;
    slug_en: string;
    description_ar: string; // Comma separated focus areas, ex: "منصات دفع إلكتروني,تمويل جماعي,تطبيقات مصرفية"
    description_en: string; // Comma separated focus areas, ex: "E-payment platforms,Crowdfunding,Banking apps"
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
}


export const mockAboutItem: AboutItem[] = [
    {
        id: 1,
        title_ar: "عن قنوان",
        title_en: "About Qanwan",
        slug_ar: "بناء متكامل لهوية قنوان المؤسسية.",
        created_at: "2026-09-11T14:35:00.000000Z",
        updated_at: "2026-09-11T14:35:00.000000Z",
        descriptions: [
            {
                description_ar: "هذه الصفحة ليست تعريفاً تقليدياً، بل بناء متكاملاً لهوية قنوان المؤسسية. تتضمن نبذة واضحة عن المؤسسة، رؤيتها ورسالتها وقيمها، وفلسفة الاستثمار التي تنتهجها، مع الإشارة إلى اعتماد نموذج المحافظ الثلاث بصياغة عامة تؤكد مبدأ الاستدامة وحماية رأس المال، دون استعراض الأصول أو تفاصيلها.",
                description_en: "We believe in long-term investments that achieve sustainable growth.",
            },
        ],
    },
    {
        id: 2,
        title_ar: "رؤيتنا ورسالتنا",
        title_en: "About Qanwan",
        slug_ar: "المبادئ التي توجه أعمالنا.",
        created_at: "2026-09-11T14:35:00.000000Z",
        updated_at: "2026-09-11T14:35:00.000000Z",
        descriptions: [
            {
                title_ar: "رؤيتنا",
                title_en: "Our vision",
                description_ar: "أن نكون المؤسسة الاستثمارية الرائدة التي تساهم بفعالية في التنمية الاقتصادية المستدامة، مع تحقيق قيمة مضافة لشركائنا ومجتمعنا.",
                description_en: "We believe in long-term investments that achieve sustainable growth.",
            },
            {
                title_ar: "رسالتنا",
                title_en: "Our vision",
                description_ar: "تطوير وإدارة محفظة استثمارية متنوعة ومبتكرة، قائمة على الحوكمة الرشيدة وأفضل الممارسات العالمية، لتعظيم العائد على الاستثمار والمساهمة في بناء مستقبل واعد.",
                description_en: "We believe in long-term investments that achieve sustainable growth.",
            },
        ],
    },
    {
        id: 3,
        title_ar: "فلسفة الاستثمار",
        title_en: "Investment Philosophy",
        slug_ar: "فلسفة الاستثمار الأسس التي يقوم عليها نجاحنا",
        slug_en: "Investment Philosophy The foundations of our success",
        created_at: "2026-09-11T14:35:00.000000Z",
        updated_at: "2026-09-11T14:35:00.000000Z",
        descriptions: [
            {
                id: 1,
                title_ar: "الاستدامة",
                title_en: "Sustainability",
                description_ar: "نؤمن بالاستثمارات طويلة الأمد التي تحقق نموًا مستدامًا.",
                description_en: "We believe in long-term investments that achieve sustainable growth.",
                about_id: 1,
                created_at: "2026-09-11T14:38:20.000000Z",
                updated_at: "2026-09-11T14:38:20.000000Z",
            },
            {
                id: 2,
                title_ar: "حماية رأس المال",
                title_en: "Capital Protection",
                description_ar: "نضع حماية أصولنا وشركائنا في مقدمة أولوياتنا.",
                description_en: "We place the protection of our assets and partners at the top of our priorities.",
                about_id: 1,
                created_at: "2026-09-11T14:38:30.000000Z",
                updated_at: "2026-09-11T14:38:30.000000Z",
            },
            {
                id: 3,
                title_ar: "التنويع",
                title_en: "Diversification",
                description_ar: "ندير المخاطر ونعظم الفرص من خلال محفظة متنوعة عبر قطاعات متعددة.",
                description_en: "We manage risk and maximize opportunities through a diverse portfolio across multiple sectors.",
                about_id: 1,
                created_at: "2026-09-11T14:50:05.000000Z",
                updated_at: "2026-09-11T14:50:05.000000Z",
            },
            {
                id: 3,
                title_ar: "الإفصاح الذكي",
                title_en: "Diversification",
                description_ar: "نلتزم بالشفافية التي تبني الثقة دون كشف تفاصيل قد تستغل من أطراف غير منضبطة.",
                description_en: "We manage risk and maximize opportunities through a diverse portfolio across multiple sectors.",
                about_id: 1,
                created_at: "2026-09-11T14:50:05.000000Z",
                updated_at: "2026-09-11T14:50:05.000000Z",
            },
        ],
    },
    {
        id: 4,
        title_ar: "مسيرتنا",
        title_en: "Our Journey",
        slug_ar: "محطات استراتيجية بارزة رسمت ملامح نجاحنا ونمونا المستمر",
        slug_en: "Key milestones that shaped our journey of continuous growth and success",
        created_at: "2026-09-11T14:35:00.000000Z",
        updated_at: "2026-09-11T14:35:00.000000Z",
        descriptions: [
            {
                id: 1,
                title_ar: "التأسيس والانطلاق",
                title_en: "Founding and Launch",
                description_ar: "شركة قنوان هي امتداد لنشاط تجاري ناجح على مدار اكثر من 30 عام",
                description_en: "Qinwan is an extension of a successful business activity spanning over 30 years.",
                about_id: 1,
                created_at: "1990-09-11T15:00:00.000000Z",
                updated_at: "2026-09-11T15:00:00.000000Z",
            },
            {
                id: 2,
                title_ar: "اطلاق التنوع الاستثماري من خلال شركات تجارية تعمل في قطاعات متنوعة",
                title_en: "Launching Investment Diversification Through Commercial Companies in Various Sectors",
                description_ar: "انطلاق عدد من الشركات الناجحة في قطاعات حيوية",
                description_en: "Launch of several successful companies in vital sectors.",
                about_id: 1,
                created_at: "2020-09-11T15:00:10.000000Z",
                updated_at: "2026-09-11T15:00:10.000000Z",
            },
            {
                id: 3,
                title_ar: "التوسع الإقليمي في الشرق الاوسط",
                title_en: "Regional Expansion in the Middle East",
                description_ar: "بدأت قنوان عملياتها في سوقين إقليميين جديدين، مما عزز من تنوع استثمارتها.",
                description_en: "Qinwan began operations in two new regional markets, enhancing the diversity of its investments.",
                about_id: 1,
                created_at: "2022-09-11T15:00:20.000000Z",
                updated_at: "2026-09-11T15:00:20.000000Z",
            },
            {
                id: 4,
                title_ar: "شراكة استراتيجية كبرى",
                title_en: "Major Strategic Partnership",
                description_ar: "عقد شراكة استراتيجية مع مؤسسة مالية عالمية لتعزيز القدرات الاستثمارية للمجموعة من خلال شركاء نجاح في الداخل و الخارج",
                description_en: "Signed a strategic partnership with a global financial institution to strengthen the group's investment capabilities through success partners at home and abroad.",
                about_id: 1,
                created_at: "2025-09-11T15:00:30.000000Z",
                updated_at: "2026-09-11T15:00:30.000000Z",
            },
            {
                id: 5,
                title_ar: "اطلاق مبادرة قنوان الاقليمية للتحول الرقمي",
                title_en: "Launch of the Qinwan Regional Digital Transformation Initiative",
                description_ar: "اطلقت مبادرة قنوان الاقليمية عن طريق شركاء النجاح الاستراتيجيين و استهدفت الاكاديميات التعليمية و توثيق سبل التعاون المشترك من خلال اطر متطورة لتبادل الخبرات و التنمية المعرفية",
                description_en: "The Qinwan Regional Initiative was launched through strategic success partners, targeting educational academies and formalizing joint cooperation through advanced frameworks for knowledge exchange and development.",
                about_id: 1,
                created_at: "2026-09-11T15:00:40.000000Z",
                updated_at: "2026-09-11T15:00:40.000000Z",
            },
        ],
    }
];



export const mockInvestmentModel: InvestmentModelItem[] = [
    {
        id: 1,
        title_ar: "محفظة الاستثمارات طويلة الاجل",
        title_en: "Long-Term Investments Portfolio",
        description_ar: "و ترتكز على الاستثمار في المشاريع الكبرى في عدد من القطاعات المتنوعة مثل التطوير العقاري - التكنولوجيا - الذكاء الصناعي - التعليم و البحث العلمي",
        description_en: "Focuses on investing in major projects across a range of diverse sectors such as real estate development, technology, artificial intelligence, and education and scientific research.",
        created_at: "2026-09-10T14:39:42.000000Z",
        updated_at: "2026-09-10T14:39:42.000000Z",
    },
    {
        id: 2,
        title_ar: "محفظة الاستقرار و النمو",
        title_en: "Stability and Growth Portfolio",
        description_ar: "و تتميز هذه المحفظة بادوات حفظ و استقرار التدفقات النقدية و الاصول بالاستثمار في قطاعات ذات عوائد ثابتة و مستمرة مثل الذهب و المعادن الثمينة و ادارة الاصول العقارية و التوريدات التجارية و التسويق",
        description_en: "This portfolio is characterized by tools that preserve and stabilize cash flows and assets by investing in sectors with stable and continuous returns, such as gold and precious metals, real estate asset management, and commercial supply and marketing.",
        created_at: "2026-09-10T14:40:10.000000Z",
        updated_at: "2026-09-10T14:40:10.000000Z",
    },
    {
        id: 3,
        title_ar: "محفظة تمويل الفرص",
        title_en: "Opportunity Financing Portfolio",
        description_ar: "و هي محفظة تعنى بالصفقات السريعة و اعمال التمويل قصيرة الاجل في عدد من المجالات المتنوعة بما يتوافق مع سياسات و لوائح مؤسسة قنوان",
        description_en: "This portfolio focuses on quick deals and short-term financing operations across a range of diverse fields, in accordance with Qinwan's policies and regulations.",
        created_at: "2026-09-10T14:40:30.000000Z",
        updated_at: "2026-09-10T14:40:30.000000Z",
    },
];

export const mockInvestmentSectors: InvestmentSector[] = [
    {
        id: 1,
        title_ar: "الطاقة المتجددة",
        title_en: "Renewable Energy",
        slug_ar: "الطاقة-المتجددة",
        slug_en: "renewable-energy",
        description_ar: "محطات طاقة شمسية,مزارع رياح,حلول تخزين الطاقة",
        description_en: "Solar power plants,Wind farms,Energy storage solutions",
        created_at: "2026-09-10T15:19:52.000000Z",
        updated_at: "2026-09-10T15:19:52.000000Z",
    },
    {
        id: 2,
        title_ar: "العقارات والتطوير العمراني",
        title_en: "Real Estate and Urban Development",
        slug_ar: "العقارات-والتطوير-العمراني",
        slug_en: "real-estate-urban-development",
        description_ar: "مجمعات سكنية,أبراج تجارية,إدارة أصول",
        description_en: "Residential complexes,Commercial towers,Asset management",
        created_at: "2026-09-10T15:20:05.000000Z",
        updated_at: "2026-09-10T15:20:05.000000Z",
    },
    {
        id: 3,
        title_ar: "التكنولوجيا المالية",
        title_en: "Financial Technology",
        slug_ar: "التكنولوجيا-المالية",
        slug_en: "fintech",
        description_ar: "منصات دفع إلكتروني,تمويل جماعي,تطبيقات مصرفية",
        description_en: "E-payment platforms,Crowdfunding,Banking apps",
        created_at: "2026-09-10T15:20:20.000000Z",
        updated_at: "2026-09-10T15:20:20.000000Z",
    },
    {
        id: 4,
        title_ar: "الخدمات اللوجستية",
        title_en: "Logistics Services",
        slug_ar: "الخدمات-اللوجستية",
        slug_en: "logistics-services",
        description_ar: "مراكز توزيع,إدارة سلاسل إمداد,نقل مبرد",
        description_en: "Distribution centers,Supply chain management,Refrigerated transport",
        created_at: "2026-09-10T15:20:35.000000Z",
        updated_at: "2026-09-10T15:20:35.000000Z",
    },
    {
        id: 5,
        title_ar: "الزراعة والأمن الغذائي",
        title_en: "Agriculture and Food Security",
        slug_ar: "الزراعة-والأمن-الغذائي",
        slug_en: "agriculture-food-security",
        description_ar: "زراعة مائية,تقنيات زراعية حديثة,تصنيع غذائي",
        description_en: "Hydroponic farming,Modern agri-tech,Food manufacturing",
        created_at: "2026-09-10T15:20:50.000000Z",
        updated_at: "2026-09-10T15:20:50.000000Z",
    },
    {
        id: 6,
        title_ar: "الرعاية الصحية",
        title_en: "Healthcare",
        slug_ar: "الرعاية-الصحية",
        slug_en: "healthcare",
        description_ar: "مستشفيات متخصصة,مراكز تشخيصية,تكنولوجيا صحية",
        description_en: "Specialized hospitals,Diagnostic centers,Health technology",
        created_at: "2026-09-10T15:21:05.000000Z",
        updated_at: "2026-09-10T15:21:05.000000Z",
    },
];