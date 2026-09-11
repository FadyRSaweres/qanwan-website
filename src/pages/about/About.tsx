import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Handshake, Lightbulb, ShieldCheck, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";
import { TitleSection } from "@/components/TitleSection";
import { JourneyTimelineSection, TimelineMilestone } from "./JourneyTimelineSection";

const About = () => {
  const { t } = useTranslation();

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

  const principles = [
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
  ];


  const milestones: TimelineMilestone[] = [
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
  ];

  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <div className="container max-w-3xl text-center animate-fade-up">
          <TitleSection
            title={t("about.title")}
            subTitle={t("about.subtitle")}
          />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {t("about.paragraph")}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <TitleSection className="mb-6"
          title={t("about.title")}
          subTitle={t("about.subtitle")}
        />
        <div className="container grid gap-10 md:grid-cols-2">
          {[
            { icon: Target, title: t("about.missionTitle"), text: t("about.missionText") },
            { icon: Eye, title: t("about.visionTitle"), text: t("about.visionText") },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-card">
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
            title={t("about.philosophy.title")}
            subTitle={t("about.philosophy.subtitle")}
          />

          <div className="mx-auto grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.label}
                className="border-t border-border pt-6 text-center sm:text-start"
              >
                <p className="leading-relaxed text-foreground">
                  <span className="font-bold">{p.label}</span>
                  {t("about.philosophy.separator", {
                    defaultValue: " "
                  })}
                  < span className="text-muted-foreground" > {p.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >


      <JourneyTimelineSection milestones={milestones} />


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
