import { Wind, Building2 as BuildingIcon, LineChart } from "lucide-react";
import { CardDetailsData, InvestmentSectorsSection } from "./InvestmentSectorsSection";

// Suppose your BE returns icon as a string key ("wind", "building", "line-chart") —
// map it to a real component before rendering:
const iconMap = {
    wind: Wind,
    building: BuildingIcon,
    "line-chart": LineChart,
};

export default function Investments() {
    // pageTitle/pageSubtitle and cards all fetched from CMS
    const pageTitle = "استثماراتنا"; // from BE
    const pageSubtitle = "نبرز القطاعات التي تعمل بها قنوان بصيغة منظمة وجذابة..."; // from BE

    const cards: CardDetailsData[] = [
        {
            id: 1,
            cardTitle: "الطاقة المتجددة",
            cardSubtitle: "القطاع الاستثماري",
            icon: iconMap["wind"],
            overview: "استعرض نظرة أوسع عن هذا القطاع وفرصه والشركات المرتبطة به.",
            description: "الاستثمار في مشاريع الطاقة الشمسية وطاقة الرياح لدعم مستقبل مستدام.",
            focusAreas: ["محطات طاقة شمسية", "مزارع رياح", "حلول تخزين الطاقة"],
            companies: [], // empty -> shows the "no companies yet" message
            accent: "primary",
        },
        {
            id: 2,
            cardTitle: "الطاقة المتجددة",
            cardSubtitle: "القطاع الاستثماري",
            icon: iconMap["wind"],
            overview: "استعرض نظرة أوسع عن هذا القطاع وفرصه والشركات المرتبطة به.",
            description: "الاستثمار في مشاريع الطاقة الشمسية وطاقة الرياح لدعم مستقبل مستدام.",
            focusAreas: ["محطات طاقة شمسية", "مزارع رياح", "حلول تخزين الطاقة"],
            companies: [], // empty -> shows the "no companies yet" message
            accent: "sky",
        },
        {
            id: 3,
            cardTitle: "الطاقة المتجددة",
            cardSubtitle: "القطاع الاستثماري",
            icon: iconMap["wind"],
            overview: "استعرض نظرة أوسع عن هذا القطاع وفرصه والشركات المرتبطة به.",
            description: "الاستثمار في مشاريع الطاقة الشمسية وطاقة الرياح لدعم مستقبل مستدام.",
            focusAreas: ["محطات طاقة شمسية", "مزارع رياح", "حلول تخزين الطاقة"],
            companies: [], // empty -> shows the "no companies yet" message
            accent: "emerald",
        },
        // ...more cards from BE
    ];

    return (
        <InvestmentSectorsSection title={pageTitle} subtitle={pageSubtitle} cards={cards} />
    );
}