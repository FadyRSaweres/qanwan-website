import { Link } from "react-router-dom";
import { Code2, Smartphone, Server, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Code2, title: t("services.webTitle"), desc: t("services.webDesc"), points: [t("services.webP1"), t("services.webP2"), t("services.webP3")] },
    { icon: Smartphone, title: t("services.mobileTitle"), desc: t("services.mobileDesc"), points: [t("services.mobileP1"), t("services.mobileP2"), t("services.mobileP3")] },
    { icon: Server, title: t("services.backendTitle"), desc: t("services.backendDesc"), points: [t("services.backendP1"), t("services.backendP2"), t("services.backendP3")] },
    { icon: Layers, title: t("services.customTitle"), desc: t("services.customDesc"), points: [t("services.customP1"), t("services.customP2"), t("services.customP3")] },
  ];

  const steps = [
    { n: "01", t: t("services.step1"), d: t("services.step1Desc") },
    { n: "02", t: t("services.step2"), d: t("services.step2Desc") },
    { n: "03", t: t("services.step3"), d: t("services.step3Desc") },
    { n: "04", t: t("services.step4"), d: t("services.step4Desc") },
  ];

  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20 md:py-28">
        <div className="container max-w-3xl text-center animate-fade-up">
          <span className="mb-4 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("services.badge")}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("services.title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container">
          <SectionHeading
            eyebrow={t("services.processEyebrow")}
            title={t("services.processTitle")}
            description={t("services.processDesc")}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-background p-6">
                <div className="text-xs font-semibold tracking-wider text-accent">{p.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("services.ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t("services.ctaDesc")}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">{t("services.ctaButton")} <ArrowRight className="ms-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;