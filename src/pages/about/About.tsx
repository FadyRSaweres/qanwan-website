import { Target, Eye, Handshake, Lightbulb, ShieldCheck, Gem } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TitleSection } from "@/components/TitleSection";
import { JourneyTimelineSection, TimelineMilestone } from "./JourneyTimelineSection";
import { mockAboutItem } from "../mockData/about";
import { useMemo } from "react";

const About = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const firstSection = mockAboutItem[0];
  const secondSection = mockAboutItem[1];
  const thirdSection = mockAboutItem[2];
  const TimelineSection = mockAboutItem[3];

  const values = [
    {
      icon: Gem,
      title: t("about.values.excellence.title"),
      text: t("about.values.excellence.text"),
    },
    {
      icon: ShieldCheck,
      title: t("about.values.integrity.title"),
      text: t("about.values.integrity.text"),
    },
    {
      icon: Lightbulb,
      title: t("about.values.innovation.title"),
      text: t("about.values.innovation.text"),
    },
    {
      icon: Handshake,
      title: t("about.values.partnership.title"),
      text: t("about.values.partnership.text"),
    },
  ];

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
    if (secondSection?.descriptions && secondSection.descriptions.length > 0) {
      return secondSection.descriptions.map((desc, idx) => ({
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
      return thirdSection.descriptions.map((desc) => ({
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
    if (TimelineSection?.descriptions && TimelineSection.descriptions.length > 0) {
      return TimelineSection.descriptions.map((desc, idx) => ({
        id: desc.id ?? idx + 1,
        year: desc.created_at ? desc.created_at.slice(0, 4) : (1990 + idx * 5).toString(),
        title: (isRtl ? desc.title_ar : desc.title_en) || "",
        text: (isRtl ? desc.description_ar : desc.description_en) || "",
      }));
    }
    return milestones;
  }, [TimelineSection, isRtl, milestones]);

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
            title={t("about.values.title")}
            subTitle={t("about.values.subtitle")}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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


      {/* <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow={t("about.storyEyebrow")}
            title={t("about.storyTitle")}
            description={t("about.storyDesc")}
          />
          <div className="grid grid-cols-2 gap-5">
            {[
              { k: "150+", v: t("about.projectsDelivered") },
              { k: "40+", v: t("about.enterpriseClients") },
              { k: "12+", v: t("about.industriesServed") },
              { k: "99.9%", v: t("about.uptimeSLA") },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t("about.ceoMessage")}</p>
                <p className="text-xs text-muted-foreground">XAI Technology</p>
              </div>
            </div>
            <blockquote className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
              {t("about.ceoQuote")}
            </blockquote>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{t("about.teamLine")}</span>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="lg">
              <Link to="/contact">{t("about.workWithUs")}</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
