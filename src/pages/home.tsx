import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Server,
  Layers,
  ShieldCheck,
  Gauge,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import whyChooseBg from "@/assets/why_us_section_svg_bg.svg";
import vectorImage from "@/assets/data2.png";
import heroVector from "@/assets/hero2.png";
import { useTranslation } from "react-i18next";
import { useGetHomeSection1Api } from "@/services/home/section1";
import { getCurrentLanguage } from "@/services/client";
import { useGetHomeSection2Api } from "@/services/home/section2";
import { useMemo } from "react";

const Home = () => {
  const { t } = useTranslation();

  const { data: homeSection1Data } = useGetHomeSection1Api();
  const { data: homeSection2Data } = useGetHomeSection2Api();

  console.log(homeSection1Data, "useGetHomeSection1Api")
  const services = useMemo(() => [
    {
      icon: Code2,
      title: t("homeServices.webDev"),
      desc: t("homeServices.webDevDesc")
    },
    {
      icon: Smartphone,
      title: t("homeServices.mobile"),
      desc: t("homeServices.mobileDesc")
    },
    {
      icon: Server,
      title: t("homeServices.backend"),
      desc: t("homeServices.backendDesc")
    },
    {
      icon: Layers,
      title: t("homeServices.custom"),
      desc: t("homeServices.customDesc")
    },
  ], [homeSection2Data]);

  const reasons = [
    { icon: ShieldCheck, title: t("whyUs.trusted"), desc: t("whyUs.trustedDesc") },
    { icon: Gauge, title: t("whyUs.performance"), desc: t("whyUs.performanceDesc") },
    { icon: Rocket, title: t("whyUs.scale"), desc: t("whyUs.scaleDesc") },
  ];

  const capabilities = [
    {
      label: t("capabilities.dataInsights"),
      desc: t("capabilities.dataInsightsDesc"),
      color: "from-blue-500/20 to-indigo-500/10",
      accent: "#6366f1",
    },
    {
      label: t("capabilities.predictive"),
      desc: t("capabilities.predictiveDesc"),
      color: "from-violet-500/20 to-purple-500/10",
      accent: "#8b5cf6",
    },
    {
      label: t("capabilities.integration"),
      desc: t("capabilities.integrationDesc"),
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "#06b6d4",
    },
    {
      label: t("capabilities.infrastructure"),
      desc: t("capabilities.infrastructureDesc"),
      color: "from-teal-500/20 to-cyan-500/10",
      accent: "#14b8a6",
    },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-hero text-white min-h-[90vh] flex items-center">

        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[130px]" style={{ background: "hsl(212 90% 54% / 0.18)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full blur-[120px]" style={{ background: "hsl(199 95% 58% / 0.12)" }} />

        {/* Bottom fade into page */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* ── Left: Text ── */}
            <div className="animate-fade-up text-center lg:text-start">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-ring animate-pulse" />
                {t("hero.badge")}
              </motion.span>

              <h1 className="mt-4 text-4xl font-bold leading-[2] sm:text-5xl md:text-6xl" style={{ lineHeight: 1.3 }}>
                {
                  t("hero.title")}
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0">
                {t("hero.subtitle")}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 shadow-elegant font-semibold"
                >
                  <Link to="/services">
                    {t("hero.ourServices")} <ArrowRight className="ms-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/12 hover:text-white hover:border-white/40"
                >
                  <Link to="/contact">{t("hero.contactUs")}</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                {[
                  { value: homeSection1Data?.[0]?.firstCountNumber || 0, label: t("hero.stat1") },
                  { value: homeSection1Data?.[0]?.secondCountNumber || 0, label: t("hero.stat2") },
                  { value: homeSection1Data?.[0]?.thirdCountNumber || 0, label: t("hero.stat3") },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-start">
                    <div className="text-2xl font-black tracking-tight text-white">{s.value}</div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-white/45">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Vector illustration ── */}
            <div className="relative flex items-center justify-center animate-fade-in">

              {/* Glowing backdrop circle */}
              <div
                aria-hidden="true"
                className="absolute h-[420px] w-[420px] rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(212 90% 54% / 0.18) 0%, transparent 70%)",
                }}
              />

              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="absolute h-[380px] w-[380px] rounded-full border border-white/8"
              />
              <div
                aria-hidden="true"
                className="absolute h-[480px] w-[480px] rounded-full border border-white/4"
              />

              {/* Floating stat card — top left */}
              <div className="absolute -left-4 top-8 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-md shadow-card animate-fade-up"
                style={{ animationDelay: "0.3s" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "hsl(var(--ring))" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">+42% Growth</div>
                  <div className="text-[10px] text-white/50">This Quarter</div>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -right-2 bottom-10 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-md shadow-card animate-fade-up"
                style={{ animationDelay: "0.5s" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/80">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">All Systems Live</div>
                  <div className="text-[10px] text-white/50">Integrated & Running</div>
                </div>
              </div>

              {/* The vector image */}
              <motion.img
                src={vectorImage}
                alt="System Integration"
                className="relative z-10 w-full max-w-[500px] drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
                style={{
                  filter: "drop-shadow(0 20px 60px hsl(212 90% 54% / 0.3))",
                }}
              />
            </div>

          </div>
        </div>
      </section>



      {/* ─── Services ─── */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow={t("homeServices.eyebrow")}
            title={t("homeServices.title")}
            description={t("homeServices.description")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
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
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-24 md:py-36 bg-background">
        {/* subtle grid backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glow blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="container relative z-10">
          {/* heading */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-300">
              {t("capabilities.eyebrow")}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t("capabilities.titleLine1")} <br />
              <span className="dark:bg-gradient-to-r dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-black">
                {t("capabilities.titleLine2")}
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("capabilities.description")}
            </p>
          </div>

          {/* Two-column: left = vector image, right = capability cards */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Vector illustration */}
            <div className="relative flex items-center justify-center">
              {/* decorative ring */}
              <div
                aria-hidden="true"
                className="absolute h-[420px] w-[420px] rounded-full border border-indigo-500/10"
                style={{ boxShadow: "0 0 80px 2px rgba(99,102,241,0.08) inset" }}
              />
              <div
                aria-hidden="true"
                className="absolute h-[320px] w-[320px] rounded-full border border-indigo-500/15"
              />
              <img
                src={heroVector}
                alt="Data Insights, Predictive Analysis, System Integration, Scalable Infrastructure"
                className="relative z-10 w-full max-w-[420px] drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(99,102,241,0.25))" }}
              />
            </div>

            {/* Capability cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${cap.color} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card`}
                >
                  {/* corner accent */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-30 blur-2xl transition-all duration-300 group-hover:opacity-60"
                    style={{ background: cap.accent }}
                  />
                  {/* dot */}
                  <div
                    className="mb-4 h-2 w-2 rounded-full"
                    style={{ background: cap.accent, boxShadow: `0 0 8px ${cap.accent}` }}
                  />
                  <h3
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: cap.accent }}
                  >
                    {cap.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-secondary/40 p-8 backdrop-blur sm:grid-cols-4">
            {[
              { value: t("capabilities.stat1Value"), label: t("capabilities.stat1Label") },
              { value: t("capabilities.stat2Value"), label: t("capabilities.stat2Label") },
              { value: t("capabilities.stat3Value"), label: t("capabilities.stat3Label") },
              { value: t("capabilities.stat4Value"), label: t("capabilities.stat4Label") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Why choose us ─── */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-secondary/40 py-20 md:py-28">
        <img
          src={whyChooseBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow={t("whyUs.eyebrow")}
              title={t("whyUs.title")}
              description={t("whyUs.description")}
              className="lg:sticky lg:top-28 "
            />
            <div className="space-y-5">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="flex gap-5 rounded-2xl border border-border bg-background p-6 transition-smooth hover:shadow-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
              <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                {[t("whyUs.uptime"), t("whyUs.agile"), t("whyUs.senior"), t("whyUs.support")].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── Partners ─── */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20">
        <div className="container">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("partners.title")}
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {["Acme", "Northwind", "Globex", "Initech", "Umbra", "Vertex"].map((name) => (
              <div
                key={name}
                className="flex h-12 items-center justify-center rounded-md text-base font-semibold tracking-wide text-muted-foreground/70 transition-smooth hover:text-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── CTA ─── */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="pb-24">
        <div className="container">
          <div className="overflow-hidden rounded-3xl bg-gradient-hero px-8 py-14 text-center text-white md:px-14 md:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              {t("cta.subtitle")}
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-white/90">
              <Link to="/contact">{t("cta.button")} <ArrowRight className="ms-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
