import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Gauge,
  Rocket,
  Users,
  Box,
  Briefcase,
  Globe,
  Target,
  TrendingUp,
  PlusIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeading from "@/components/SectionHeading";
import slideImg6 from "@/assets/6.jpg";
import slideImg5 from "@/assets/5.jpg";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import HeroSlider, { SlideItem } from "@/components/HeroSlider";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useGetHomeCounters, useGetHomeData } from "@/services/home";

const STAT_SKELETON_COUNT = 4;
const SERVICE_SKELETON_COUNT = 3;

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const { data: homeSection1Data, isLoading: isHomeDataLoading } = useGetHomeData();
  const { data: homeCounters, isLoading: isCountersLoading } = useGetHomeCounters();
  const apiData = homeSection1Data?.data[0];
  const apiCounterData = homeCounters?.data;

  const investmentModels = useMemo(() => [
    {
      icon: Briefcase,
      title: t("homeServices.title3"),
      desc: t("homeServices.description3")
    },
    {
      icon: Box,
      title: t("homeServices.title2"),
      desc: t("homeServices.description2")
    },
    {
      icon: Users,
      title: t("homeServices.title1"),
      desc: t("homeServices.description1")
    },
  ], [t]);

  const getIconFromType = (type: string) => {
    switch (type) {
      case "Plus":
        return PlusIcon;
      case "Percentage":
        return TrendingUp;
      default:
        return Briefcase;
    }
  }

  const heroSlides: SlideItem[] = useMemo(() => [
    {
      id: "mock1",
      title: "فعاليات المنتدى الليبي الدولي للاقتصاد البحري",
      titleEn: "Events of the Libyan International Maritime Economy Forum",
      description: "ينظم الاتحاد العام للغرف المنتدى الليبي الدولي للاقتصاد البحري ، و التي أقيمت فعالياته يومي 10-11 يناير 2026 باستضافة كريمة من المنطقة الحرة مصراتة. ويأتي تنظيم هذا المنتدى في إطار تعزيز الشراكات المؤسسية والعمل المشترك بين الجهات الوطنية، ودعم توجهات الاقتصاد البحري بما يسهم في خدمة الاقتصاد الوطني وتعزيز مسارات التنمية المستدامة.",
      descriptionEn: "The General Union of Chambers organizes the Libyan International Maritime Economy Forum, whose events were held on January 10-11, 2026, hosted by the Misrata Free Zone.",
      image: slideImg6,
    },
    {
      id: "mock2",
      title: "تطوير البنية التحتية والمشاريع الاستراتيجية",
      titleEn: "Infrastructure Development and Strategic Projects",
      description: "نعمل على بناء وتطوير البنية التحتية لتواكب متطلبات العصر وتدعم مسيرة النمو الاقتصادي من خلال تنفيذ مشاريع استراتيجية تهدف إلى تحقيق التنمية المستدامة.",
      descriptionEn: "We are working to build and develop infrastructure to meet modern requirements and support economic growth by implementing strategic projects aimed at achieving sustainable development.",
      image: slideImg5,
    },
    {
      id: "mock3",
      title: "دعم الابتكار والريادة في الأعمال",
      titleEn: "Supporting Innovation and Entrepreneurship",
      description: "مبادراتنا تركز على تشجيع الابتكار وريادة الأعمال، وتقديم الدعم اللازم للشباب والشركات الناشئة ليكونوا شركاء حقيقيين في صناعة المستقبل الاقتصادي.",
      descriptionEn: "Our initiatives focus on encouraging innovation and entrepreneurship, providing the necessary support for youth and startups to be true partners in shaping the economic future.",
      image: slideImg5
    },
  ], []);

  return (
    <>
      {/* ─── Hero Slider ─── */}
      <HeroSlider slides={heroSlides} />

      {/* ─── Services ─── */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 md:py-28">
        <div className="container">
          {isHomeDataLoading ? (
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <Skeleton className="mx-auto h-4 w-24" />
              <Skeleton className="mx-auto h-8 w-72" />
              <Skeleton className="mx-auto h-4 w-full" />
              <Skeleton className="mx-auto h-4 w-5/6" />
            </div>
          ) : (
              <SectionHeading
                eyebrow={t("homeServices.future_vision")}
                title={isRtl ?
                  apiData?.section_1_title_ar :
                  apiData?.section_1_title_en || t("homeServices.title")}
                description={isRtl ?
                  apiData?.section_1_description_ar :
                  apiData?.section_1_description_en || t("homeServices.description")}
              />
          )}

          <div className="mt-2 flex gap-2 justify-center">
            <Button variant="default">
              {t("homeServices.button_more")}
            </Button>
            <Button variant="outline">
              {t('homeServices.button_about')}
            </Button>
          </div>

          {isHomeDataLoading ? (
            <div className="mx-auto mb-2 mt-16 max-w-2xl space-y-3 text-center">
              <Skeleton className="mx-auto h-8 w-64" />
              <Skeleton className="mx-auto h-4 w-full" />
            </div>
          ) : (
              <SectionHeading className="mt-16 mb-2"
                title={isRtl ?
                  apiData?.section_2_title_ar :
                  apiData?.section_2_title_en || t("homeServices.title_cards")}
                description={isRtl ?
                  apiData?.section_2_description_ar :
                  apiData?.section_2_description_en || t("homeServices.subtitle")}
              />
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isHomeDataLoading
              ? Array.from({ length: SERVICE_SKELETON_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <Skeleton className="mb-5 h-11 w-11 rounded-xl" />
                  <Skeleton className="mb-2 h-4 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-5/6" />
                </div>
              ))
              : investmentModels?.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Capabilities (Vector Section) ─── */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full bg-primary-800 py-14 md:py-16 mb-32"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
            {isCountersLoading
              ? Array.from({ length: STAT_SKELETON_COUNT }).map((_, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <Skeleton className="mb-4 h-8 w-8 rounded-full bg-white/20" />
                  <Skeleton className="h-9 w-16 bg-white/20" />
                  <Skeleton className="mt-2 h-4 w-24 bg-white/20" />
                </div>
              ))
              : apiCounterData?.map((stat, idx) => {
                const Icon = getIconFromType(stat.type);
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center"
                  >
                    <Icon
                      className="mb-4 h-8 w-8 text-secondary-500"
                      strokeWidth={1.5}
                    />
                    <motion.div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      <AnimatedCounter
                        to={stat.count}
                        suffix={stat.type === "Percentage" ? "%" : ""}
                        duration={2}
                      />
                    </motion.div>
                    <div className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
                      {isRtl ? stat.title_ar : stat.title_en}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;