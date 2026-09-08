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
import heroVector from "@/assets/hero2.png";
import slideImg6 from "@/assets/6.jpg";
import slideImg5 from "@/assets/5.jpg";
import { useTranslation } from "react-i18next";
import { useGetHomeSection1Api } from "@/services/home/section1";
import { useGetHomeSection2Api } from "@/services/home/section2";
import { useMemo } from "react";
import HeroSlider, { SlideItem } from "@/components/HeroSlider";

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

  // Mockup API data for the hero slider
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
    }
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
