import { TitleSection } from "@/components/TitleSection";
import { Heart, Building, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Community() {
    const { t } = useTranslation();
    const values = [
        {
            icon: Building,
            title: t("about.values.excellence.title"),
            text: t("about.values.excellence.text"),
        },
        {
            icon: Heart,
            title: t("about.values.integrity.title"),
            text: t("about.values.integrity.text"),
        },
        {
            icon: Users,
            title: t("about.values.innovation.title"),
            text: t("about.values.innovation.text"),
        },
    ];

    return (
        <section className="py-20 md:py-28">
            <div className="container">
                <TitleSection
                    title={t("about.values.title")}
                    subTitle={t("about.values.subtitle")}
                />
                <p className="mb-16 mt-5 text-sm leading-relaxed text-muted-foreground">
                    {t("about.paragraph")}
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
                        >
                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center">
                                <v.icon
                                    className="h-9 w-9 text-secondary-500"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-lg font-bold text-primary-900">{v.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                {v.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}