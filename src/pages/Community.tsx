import { TitleSection } from "@/components/TitleSection";
import { useGetCommunity } from "@/services/community";
import { Heart, Building, Users, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const COMMUNITY_ICONS: LucideIcon[] = [Heart, Building, Users, Heart];

export default function Community() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";
    const { data: communityApiData } = useGetCommunity();

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
                  {communityApiData?.data?.map((v, i) => {
                      const Icon = COMMUNITY_ICONS[i % COMMUNITY_ICONS.length];

                      return (
                          <div
                    key={v.id}
                    className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
                >
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center">
                        <Icon className="h-9 w-9 text-secondary-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-primary-900">
                        {isRtl ? v.title_ar : v.title_en}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {isRtl ? v.description_ar : v.description_en}
                    </p>
                </div>
              );
          })}
              </div>
          </div>
      </section>
  );
}