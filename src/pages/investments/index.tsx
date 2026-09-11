import { Wind, Building2 as BuildingIcon, LineChart } from "lucide-react";
import { CardDetailsData, InvestmentSectorsSection } from "./InvestmentSectorsSection";
import { mockInvestmentSectors } from "../mockData/about";

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
    return (
        <InvestmentSectorsSection title={pageTitle} subtitle={pageSubtitle} cardProps={mockInvestmentSectors} />
    );
}