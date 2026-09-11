import { TitleSection } from "@/components/TitleSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { InvestmentModelItem } from "../mockData/about";

export interface InvestmentPortfolio {
    id: string | number;
    title: string;
    text: string;
}

interface InvestmentModelSectionProps {
    /** Dynamic, count comes from the DB */
    portfolios: InvestmentModelItem[];
}

/**
 * "Investment Model" section.
 * TitleSection -> intro line -> dynamic list of portfolio cards -> footer block,
 * all inside one outer bordered card.
 */
export function InvestmentModelSection({ portfolios }: InvestmentModelSectionProps) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n?.language === 'ar';
    return (
        <section className="py-16 md:py-28">
            <div className="container px-4 sm:px-6">
                <TitleSection
                    className="mb-10 sm:mb-14"
                    title={t("about.investmentModel.title")}
                    subTitle={t("about.investmentModel.subtitle")}
                />

                <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-8 md:p-10">
                    {/* intro line */}
                    <p className="text-start text-sm leading-relaxed text-foreground sm:text-base">
                        {t("about.investmentModel.intro")}
                    </p>

                    {/* portfolio cards */}
                    <div className="mt-8 flex flex-col gap-4 sm:gap-5">
                        {portfolios.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-background p-5 text-start sm:p-6"
                            >
                                <h3 className="text-lg font-bold text-primary-900 sm:text-xl">
                                    {isRtl ? p?.title_ar : p?.title_en}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    {isRtl ? p?.description_ar : p?.description_en}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* footer block */}
                    <div className="mt-8 border-t border-border pt-6 text-center sm:mt-10 sm:pt-8">
                        <h4 className="text-base font-bold text-primary-900 sm:text-lg">
                            {t("about.investmentModel.footerTitle")}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {t("about.investmentModel.footerText")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
