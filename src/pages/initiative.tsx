import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import { TitleSection } from "@/components/TitleSection";
import { Chanber64 } from "@/assets/ChamberLogo";

export interface SubInitiative {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  externalLink?: string;
}

export interface PartnerOrg {
  nameAr: string;
  nameEn?: string;
  logoUrl: string;
}

const MOCK_INITIATIVE_DATA: {
  title: string;
  subtitle: string;
  partner: PartnerOrg;
  bodyText: string;
  goals: string[];
  subInitiatives: SubInitiative[];
} = {
  title: "مبادرة قنوان الوطنية للتحول الرقمي",
  subtitle: "في إطار المسؤولية المجتمعية و بالتعاون مع شركاء النجاح الاتحاد العام لغرف التجارة و الصناعة و الزراعة أطلقت قنوان مبادرتها لإنشاء منصة موحدة للغرف التجارية تحت إشراف الاتحاد العام",
  partner: {
    nameAr: "الاتحاد العام لغرف التجارة والصناعة والزراعة ليبيا",
    nameEn: "Libyan General Union of Chambers of Commerce",
    logoUrl: "/xai-logo.png"
  },
  bodyText: "يأتي هذا التوجه منسجماً مع رؤية قنوان 2030، التي تهدف إلى بناء منظومة استثمارية مؤسسية مستدامة، نؤمن بأن دورنا يمتد إلى ما هو أبعد من تحقيق العوائد المالية، ليشمل المساهمة الفعالة في دعم الاقتصاد، وبناء القدرات، وتعزيز الاستدامة، ونقل المعرفة، والشراكة مع الجهات الوطنية.",
  goals: [
    "توفير منصة موحدة لكافة الغرف التجارية والجهات ذات العلاقة",
    "انشاء مستندات موحدة قابلة للتحقق",
    "التكامل مع الجهات الرقابية",
    "تعزيز الشراكة بين القطاعين العام والخاص لتحقيق الأهداف الوطنية"
  ],
  subInitiatives: [
    {
      id: "1",
      title: "برنامج دعم رواد الأعمال",
      description: "مبادرة لدعم وتمويل المشاريع الناشئة وتقديم الإرشاد والتوجيه لتحقيق نمو مستدام.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    }
  ]
};

export default function InitiativePage() {
  const { title, subtitle, partner, bodyText, goals, subInitiatives } = MOCK_INITIATIVE_DATA;
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        <TitleSection className="mb-10 sm:mb-14" title={title} subTitle={subtitle} />

        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-8 md:p-10">
          {/* partner banner */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-border bg-secondary-50/40 p-6 sm:flex-row sm:p-8">
            <div className="text-center sm:text-start">
              <h2 className="text-lg font-bold text-primary-900 sm:text-xl">
                {partner.nameAr}
              </h2>
              {partner.nameEn && (
                <p className="mt-1 text-sm font-medium text-primary-600">
                  {partner.nameEn}
                </p>
              )}
            </div>
            <img
              src={Chanber64}
              alt={partner.nameAr}
              className="h-16 w-auto object-contain sm:h-20"
            />
          </div>

          {/* body paragraph */}
          <p className="mt-6 text-center text-sm leading-relaxed text-foreground sm:text-start sm:text-base">
            {bodyText}
          </p>

          {/* goals */}
          {goals.length > 0 && (
            <div className="mt-8">
              <h3 className="border-s-4 border-secondary-500 ps-3 text-base font-bold text-primary-900 sm:text-lg">
                {t("initiative.goalsTitle")}
              </h3>
              <ul className="mt-4 space-y-3">
                {goals.map((goal, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" />
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* sub-initiatives */}
          {subInitiatives.length > 0 && (
            <div className="mt-10">
              <h3 className="border-s-4 border-secondary-500 ps-3 text-base font-bold text-primary-900 sm:text-lg">
                {t("initiative.subInitiativesTitle")}
              </h3>

              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {subInitiatives.map((sub, idx) => {
                  const CardWrapper = sub.externalLink ? "a" : "div";
                  return (
                    <motion.div
                      key={sub.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <CardWrapper
                        {...(sub.externalLink
                          ? { href: sub.externalLink, target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="block overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
                      >
                        {sub.image && (
                          <img
                            src={sub.image}
                            alt={sub.title}
                            className="h-36 w-full object-cover"
                            loading="lazy"
                          />
                        )}
                        <div className="p-4">
                          <h4 className="text-sm font-bold text-primary-900 sm:text-base">
                            {sub.title}
                          </h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                            {sub.description}
                          </p>
                        </div>
                      </CardWrapper>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
