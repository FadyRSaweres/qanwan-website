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
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import slideImg6 from "@/assets/6.jpg";
import slideImg5 from "@/assets/5.jpg";
import { useTranslation } from "react-i18next";
import { useGetHomeSection1Api } from "@/services/home/section1";
import { useGetHomeSection2Api } from "@/services/home/section2";
import { useMemo } from "react";
import HeroSlider, { SlideItem } from "@/components/HeroSlider";
import { mockHomeSection, mockStats } from "./mockData/home";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const { data: homeSection1Data } = useGetHomeSection1Api();
  const { data: homeSection2Data } = useGetHomeSection2Api();

  console.log(homeSection1Data, "useGetHomeSection1Api")
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
  ], [homeSection2Data]);



  const getIconFromType = (type: string) => {
    switch (type) {
      case "+":
        return Briefcase;
      case "%":
        return TrendingUp;
      case "Empty":
        return Users;
    }
  }


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
    },
    {
      id: "mock3",
      title: "دعم الابتكار والريادة في الأعمال",
      titleEn: "Supporting Innovation and Entrepreneurship",
      description: "مبادراتنا تركز على تشجيع الابتكار وريادة الأعمال، وتقديم الدعم اللازم للشباب والشركات الناشئة ليكونوا شركاء حقيقيين في صناعة المستقبل الاقتصادي.",
      descriptionEn: "Our initiatives focus on encouraging innovation and entrepreneurship, providing the necessary support for youth and startups to be true partners in shaping the economic future.",
      image: slideImg5
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
          <SectionHeading
            eyebrow={t("homeServices.future_vision")}
            title={isRtl ?
              mockHomeSection?.section_1_title_ar :
              mockHomeSection?.section_1_title_en || t("homeServices.title")}
            description={isRtl ?
              mockHomeSection?.section_1_description_ar :
              mockHomeSection?.section_1_description_en || t("homeServices.description")}
          />
          <div className="mt-2 flex gap-2 justify-center">
            <Button variant="default">
              {t("homeServices.button_more")}
            </Button>
            <Button variant="outline">
              {t('homeServices.button_about')}
            </Button>
          </div>
          <SectionHeading className="mt-16 mb-2"
            // eyebrow={t("homeServices.future_vision")}
            title={isRtl ?
              mockHomeSection?.section_2_title_ar :
              mockHomeSection?.section_2_title_en || t("homeServices.title_cards")}
            description={isRtl ?
              mockHomeSection?.section_2_description_ar :
              mockHomeSection?.section_2_description_en || t("homeServices.subtitle")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {investmentModels.map((s) => (
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
            {mockStats.map((stat, idx) => {
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
                      suffix={stat.type === "Empty" ? "" : stat.type}
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

      {/* ─── Why choose us ─── */}
      {/* <motion.section
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
      </motion.section> */}

      {/* ─── Partners ─── */}
      {/* <motion.section
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
      </motion.section> */}

      {/* ─── CTA ─── */}
      {/* <motion.section
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
      </motion.section> */}
    </>
  );
};

export default Home;
