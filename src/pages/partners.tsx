import { useTranslation } from "react-i18next";
import { TitleSection } from "@/components/TitleSection";
import { mockPartners, Partner } from "./mockData/partners";

export function PartnersPage() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    return (
        <section className="py-20 md:py-28">
            <div className="container max-w-3xl text-center">
                <TitleSection
                    title={t("partners.title")}
                    subTitle={t("partners.subtitle")}
                />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {t("partners.paragraph")}
                </p>
            </div>

            <div className="container mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {mockPartners.map((partner) => {
                    const title = isRtl ? partner.title_ar : partner.title_en;
                    const hasImage = Boolean(partner.image_url);

                    return (
                        <div
                            key={partner.id}
                            className="flex min-h-[120px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
                        >
                            {hasImage ? (
                                <img
                                    src={partner.image_url}
                                    alt={title}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span className="px-4 font-medium text-foreground">{title}</span>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="container mt-10">
                <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-secondary/10 p-6 shadow-soft">
                    <p className="text-sm font-medium text-foreground">
                        {t("partners.note")}
                    </p>
                </div>
            </div>
        </section>
    );
}