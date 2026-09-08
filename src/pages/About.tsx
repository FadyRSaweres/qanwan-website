import { Link } from "react-router-dom";
import { Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20 md:py-28">
        <div className="container max-w-3xl text-center animate-fade-up">
          <span className="mb-4 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("about.badge")}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("about.title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
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

      <section className="bg-secondary/40 py-20 md:py-28">
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
      </section>

      <section className="py-20 md:py-28">
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
      </section>
    </>
  );
};

export default About;
