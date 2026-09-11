import { useTranslation } from "react-i18next";
import type { NewsItem } from "./types";
import { TitleSection } from "@/components/TitleSection";
import { NewsCard } from "./newsCard";

export const mockNewsItems: NewsItem[] = [
  {
    id: 1,
    title_ar: "افتتاح مشروع استثماري جديد في طرابلس",
    title_en: "New Investment Project Launched in Tripoli",
    description_ar: "أعلنت الشركة عن افتتاح مشروعها الاستثماري الجديد في طرابلس، والذي يهدف إلى تعزيز النمو الاقتصادي في المنطقة وخلق فرص عمل جديدة للشباب الليبي.",
    description_en: "The company announced the launch of its new investment project in Tripoli, aimed at boosting economic growth in the region and creating new job opportunities for Libyan youth.",
    image: "news/tripoli-investment-launch.jpg",
    date: "2026-09-01T00:00:00.000000Z",
    created_at: "2026-09-01T09:15:22.000000Z",
    updated_at: "2026-09-01T09:15:22.000000Z",
    image_url: "http://127.0.0.1:8000/storage/news/tripoli-investment-launch.jpg",
  },
  {
    id: 2,
    title_ar: "توسع الشركة في القطاع العقاري",
    title_en: "Company Expands into Real Estate Sector",
    description_ar: "في إطار خطتها الاستراتيجية للنمو، تعلن الشركة عن دخولها قطاع العقارات من خلال مشروع سكني وتجاري متكامل في مدينة بنغازي.",
    description_en: "As part of its strategic growth plan, the company announces its entry into the real estate sector through an integrated residential and commercial project in Benghazi.",
    image: "news/benghazi-real-estate.jpg",
    date: "2026-08-20T00:00:00.000000Z",
    created_at: "2026-08-20T11:42:10.000000Z",
    updated_at: "2026-08-22T14:05:33.000000Z",
    image_url: "http://127.0.0.1:8000/storage/news/benghazi-real-estate.jpg",
  },
  {
    id: 3,
    title_ar: "شراكة استراتيجية مع مستثمرين إقليميين",
    title_en: "Strategic Partnership with Regional Investors",
    description_ar: "وقعت الشركة اتفاقية شراكة استراتيجية مع مجموعة من المستثمرين الإقليميين لتطوير مشاريع مشتركة في قطاعي الطاقة والصناعة.",
    description_en: "The company signed a strategic partnership agreement with a group of regional investors to develop joint projects in the energy and industrial sectors.",
    image: "news/regional-partnership.jpg",
    date: "2026-07-15T00:00:00.000000Z",
    created_at: "2026-07-15T08:30:00.000000Z",
    updated_at: "2026-07-15T08:30:00.000000Z",
    image_url: "http://127.0.0.1:8000/storage/news/regional-partnership.jpg",
  },
  {
    id: 4,
    title_ar: "تحقيق نمو بنسبة 45% في الإيرادات السنوية",
    title_en: "Achieving 45% Growth in Annual Revenue",
    description_ar: "كشفت الشركة عن نتائجها المالية للعام الماضي، والتي أظهرت نمواً ملحوظاً بنسبة 45% في الإيرادات الإجمالية مقارنة بالعام السابق.",
    description_en: "The company revealed its financial results for the past year, showing a remarkable 45% growth in total revenue compared to the previous year.",
    image: "news/annual-revenue-growth.jpg",
    date: "2026-06-30T00:00:00.000000Z",
    created_at: "2026-06-30T16:20:45.000000Z",
    updated_at: "2026-07-02T10:11:19.000000Z",
    image_url: "http://127.0.0.1:8000/storage/news/annual-revenue-growth.jpg",
  },
  {
    id: 5,
    title_ar: "إطلاق مبادرة مسؤولية اجتماعية جديدة",
    title_en: "Launch of New Corporate Social Responsibility Initiative",
    description_ar: "ضمن التزامها بالمسؤولية الاجتماعية، أطلقت الشركة مبادرة جديدة تهدف إلى دعم التعليم والتدريب المهني للشباب في عدة مناطق ليبية.",
    description_en: "As part of its commitment to social responsibility, the company launched a new initiative aimed at supporting education and vocational training for youth across several Libyan regions.",
    image: "news/csr-initiative.jpg",
    date: "2026-05-10T00:00:00.000000Z",
    created_at: "2026-05-10T13:00:00.000000Z",
    updated_at: "2026-05-10T13:00:00.000000Z",
    image_url: "http://127.0.0.1:8000/storage/news/csr-initiative.jpg",
  },
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

        {mockNewsItems.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
            {t("news.emptyState")}
          </div>
        ) : (
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
              {mockNewsItems.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
