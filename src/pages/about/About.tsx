import { Target, Eye, Handshake, Lightbulb, ShieldCheck, Gem, LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TitleSection } from "@/components/TitleSection";
import { JourneyTimelineSection, TimelineMilestone } from "./JourneyTimelineSection";
import { AboutItem, mockAboutItem } from "../mockData/about";
import { useMemo } from "react";
import { useGetAboutData } from "@/services/about";
import { Skeleton } from "@/components/ui/skeleton";

const About = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const { data: apiAbout, isLoading } = useGetAboutData();

  const firstSection = apiAbout?.data[0] || {} as AboutItem;
  const secondSection = apiAbout?.data[1] || {} as AboutItem;
  const thirdSection = apiAbout?.data[2] || {} as AboutItem;
  const valuesSection = apiAbout?.data[3] || {} as AboutItem;
  const TimelineSection = apiAbout?.data[4] || {} as AboutItem;

  const VALUE_ICONS_BY_INDEX: LucideIcon[] = [Gem, ShieldCheck, Lightbulb, Handshake];

  const principles = useMemo(
    () => [
      {
        label: t("about.philosophy.diversification.label"),
        text: t("about.philosophy.diversification.text"),
      },
      {
        label: t("about.philosophy.smartDisclosure.label"),
        text: t("about.philosophy.smartDisclosure.text"),
      },
      {
        label: t("about.philosophy.sustainability.label"),
        text: t("about.philosophy.sustainability.text"),
      },
      {
        label: t("about.philosophy.capitalProtection.label"),
        text: t("about.philosophy.capitalProtection.text"),
      },
    ],
    [t]
  );

  const visionMissionCards = useMemo(() => {
    if (secondSection && secondSection?.descriptions?.length > 0) {
      return secondSection?.descriptions?.map((desc, idx) => ({
        icon: idx === 0 ? Eye : Target,
        title:
          (isRtl ? desc.title_ar : desc.title_en) ||
          (idx === 0 ? t("about.visionTitle") : t("about.missionTitle")),
        text:
          (isRtl ? desc.description_ar : desc.description_en) ||
          (idx === 0 ? t("about.visionText") : t("about.missionText")),
      }));
    }
    return [
      { icon: Target, title: t("about.missionTitle"), text: t("about.missionText") },
      { icon: Eye, title: t("about.visionTitle"), text: t("about.visionText") },
    ];
  }, [secondSection, isRtl, t]);

  const philosophyPrinciples = useMemo(() => {
    if (thirdSection?.descriptions && thirdSection.descriptions.length > 0) {
      return thirdSection?.descriptions?.map((desc) => ({
        label: isRtl ? desc.title_ar : desc.title_en,
        text: isRtl ? desc.description_ar : desc.description_en,
      }));
    }
    return principles;
  }, [thirdSection, isRtl, principles]);

  const milestones: TimelineMilestone[] = useMemo(
    () => [
      {
        id: 1,
        year: "1990",
        title: t("about.journey.items.founding.title"),
        text: t("about.journey.items.founding.text"),
      },
      {
        id: 2,
        year: "2020",
        title: t("about.journey.items.diversification.title"),
        text: t("about.journey.items.diversification.text"),
      },
      {
        id: 3,
        year: "2022",
        title: t("about.journey.items.regionalExpansion.title"),
        text: t("about.journey.items.regionalExpansion.text"),
      },
      {
        id: 4,
        year: "2025",
        title: t("about.journey.items.strategicPartnership.title"),
        text: t("about.journey.items.strategicPartnership.text"),
      },
      {
        id: 5,
        year: "2026",
        title: t("about.journey.items.digitalTransformation.title"),
        text: t("about.journey.items.digitalTransformation.text"),
      },
    ],
    [t]
  );

  const timelineMilestones: TimelineMilestone[] = useMemo(() => {
    if (TimelineSection?.descriptions && TimelineSection?.descriptions.length > 0) {
      return TimelineSection?.descriptions.map((desc, idx) => ({
        id: desc.id ?? idx + 1,
        year: desc.created_at ? desc.created_at.slice(0, 4) : (1990 + idx * 5).toString(),
        title: (isRtl ? desc.title_ar : desc.title_en) || "",
        text: (isRtl ? desc.description_ar : desc.description_en) || "",
      }));
    }
    return milestones;
  }, [TimelineSection, isRtl, milestones]);

  if (isLoading) {
    return (
      <>
        <section className="border-b border-border py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <Skeleton className="mx-auto h-4 w-24 mb-3" />
            <Skeleton className="mx-auto h-8 w-72 mb-5" />
            <Skeleton className="mx-auto h-4 w-full" />
            <Skeleton className="mx-auto h-4 w-5/6 mt-2" />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mb-6 text-center">
              <Skeleton className="mx-auto h-4 w-24 mb-3" />
              <Skeleton className="mx-auto h-8 w-64" />
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-8">
                  <Skeleton className="mb-5 h-12 w-12 rounded-xl" />
                  <Skeleton className="mb-3 h-5 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mb-14 text-center">
              <Skeleton className="mx-auto h-4 w-24 mb-3" />
              <Skeleton className="mx-auto h-8 w-64" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-8 text-center">
                  <Skeleton className="mx-auto mb-5 h-14 w-14 rounded-full" />
                  <Skeleton className="mx-auto mb-3 h-5 w-24" />
                  <Skeleton className="mx-auto h-4 w-full" />
                  <Skeleton className="mx-auto mt-2 h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mb-14 text-center">
              <Skeleton className="mx-auto h-4 w-24 mb-3" />
              <Skeleton className="mx-auto h-8 w-64" />
            </div>
            <div className="mx-auto grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-4/5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mb-14 text-center">
              <Skeleton className="mx-auto h-4 w-24 mb-3" />
              <Skeleton className="mx-auto h-8 w-64" />
            </div>
            <div className="flex gap-6 overflow-hidden">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-40 w-48 shrink-0 rounded-2xl" />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <div className="container max-w-3xl text-center animate-fade-up">
          <TitleSection
            title={
              (isRtl ? firstSection?.title_ar : firstSection?.title_en) ||
              t("about.title")
            }
            subTitle={
              (isRtl ? firstSection?.slug_ar : firstSection?.slug_en) ||
              t("about.subtitle")
            }
          />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {(isRtl
              ? firstSection?.descriptions?.[0]?.description_ar
              : firstSection?.descriptions?.[0]?.description_en) ||
              t("about.paragraph")}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <TitleSection
          className="mb-6"
          title={
            (isRtl ? secondSection?.title_ar : secondSection?.title_en) ||
            t("about.title")
          }
          subTitle={
            (isRtl ? secondSection?.slug_ar : secondSection?.slug_en) ||
            t("about.subtitle")
          }
        />
        <div className="container grid gap-10 md:grid-cols-2">
          {visionMissionCards.map((b, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-card"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <TitleSection
            className="mb-14"
            title={isRtl ? valuesSection?.title_ar : valuesSection?.title_en}
            subTitle={isRtl ? valuesSection?.slug_ar : valuesSection?.slug_en}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuesSection?.descriptions?.map((v, idx) => {
              const IconComponent = VALUE_ICONS_BY_INDEX[idx % VALUE_ICONS_BY_INDEX.length];
              return (
                <div
                  key={v.id}
                  className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center">
                    <IconComponent
                      className="h-9 w-9 text-secondary-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900">{isRtl ? v.title_ar : v.title_en}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {isRtl ? v.description_ar : v.description_en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <TitleSection
            className="mb-14"
            title={
              (isRtl ? thirdSection?.title_ar : thirdSection?.title_en) ||
              t("about.philosophy.title")
            }
            subTitle={
              (isRtl ? thirdSection?.slug_ar : thirdSection?.slug_en) ||
              t("about.philosophy.subtitle")
            }
          />

          <div className="mx-auto grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
            {philosophyPrinciples.map((p, idx) => (
              <div
                key={idx}
                className="border-t border-border pt-6 text-center sm:text-start"
              >
                <p className="leading-relaxed text-foreground">
                  <span className="font-bold">{p.label}</span>
                  {t("about.philosophy.separator", {
                    defaultValue: " ",
                  })}
                  <span className="text-muted-foreground">{p.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JourneyTimelineSection
        title={
          (isRtl ? TimelineSection?.title_ar : TimelineSection?.title_en) ||
          t("about.journey.title")
        }
        subTitle={
          (isRtl ? TimelineSection?.slug_ar : TimelineSection?.slug_en) ||
          t("about.journey.subtitle")
        }
        milestones={timelineMilestones}
      />
    </>
  );
};

export default About;