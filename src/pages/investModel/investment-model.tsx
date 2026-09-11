import { TitleSection } from "@/components/TitleSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { InvestmentModelSection, InvestmentPortfolio } from "./InvestmentModelSection";

export default function InvestmentModel() {

    const { t } = useTranslation();
    const portfolios: InvestmentPortfolio[] = [
        {
            id: 1,
            title: t("about.investmentModel.items.longTerm.title"),
            text: t("about.investmentModel.items.longTerm.text"),
        },
        {
            id: 2,
            title: t("about.investmentModel.items.stabilityGrowth.title"),
            text: t("about.investmentModel.items.stabilityGrowth.text"),
        },
        {
            id: 3,
            title: t("about.investmentModel.items.opportunityFunding.title"),
            text: t("about.investmentModel.items.opportunityFunding.text"),
        },
    ];

    return (
        <InvestmentModelSection portfolios={portfolios} />
    )
}