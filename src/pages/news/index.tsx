import { useTranslation } from "react-i18next";
import type { NewsItem } from "./types";
import { TitleSection } from "@/components/TitleSection";
import { NewsCard } from "./newsCard";

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "1",
    newsTitle: "Qanwan Secures Series A Funding",
    newsSubtitle: "Leading venture capital firms join to fuel our expansion in the MENA region.",
    newsDate: "2024-03-15",
    newsImages: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"],
    newsContent: "Full details about the latest funding round and how it will be used to accelerate product development."
  },
  {
    id: "2",
    newsTitle: "New Product Features Launched",
    newsSubtitle: "Our flagship product now includes cutting-edge technologies to enhance productivity.",
    newsDate: "2024-02-28",
    newsImages: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"],
    newsContent: "Detailed overview of the newly introduced features designed to enhance user productivity."
  },
  {
    id: "3",
    newsTitle: "Strategic Partnership Announced",
    newsSubtitle: "New alliance aimed at providing better integration for enterprise clients.",
    newsDate: "2024-01-10",
    newsImages: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"],
    newsContent: "Information regarding the new strategic partnership and its benefits to enterprise customers."
  }
];

/**
 * "آخر الأخبار" — News listing page.
 * Renders TitleSection followed by a stacked list of NewsCard items.
 */
export default function NewsListPage() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-28">
      <div className="container px-4 sm:px-6">
        <TitleSection
          className="mb-10 sm:mb-14"
          title={t("news.pageTitle")}
          subTitle={t("news.pageSubtitle")}
        />

        {MOCK_NEWS.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
            {t("news.emptyState")}
          </div>
        ) : (
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            {MOCK_NEWS.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
