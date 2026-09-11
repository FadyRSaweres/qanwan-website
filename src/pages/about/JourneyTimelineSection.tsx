import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { TitleSection } from "@/components/TitleSection";

export interface TimelineMilestone {
  id: string | number;
  year: string;
  title: string;
  text: string;
}

interface JourneyTimelineSectionProps {
  /** Comes from the DB — any length, rendered dynamically */
  milestones: TimelineMilestone[];
  title?: string;
  subTitle?: string;
}

/**
 * "Our Journey" timeline section.
 *
 * Mobile (<sm): single vertical line on the start side, dots + full-width
 * cards stacked in order.
 *
 * Desktop (>=sm): centered vertical line, cards alternate left/right with
 * a connector dot pointing to the center line.
 *
 * Milestone count is dynamic (DB-driven) — no fixed number assumed.
 */
export function JourneyTimelineSection({ milestones, title, subTitle }: JourneyTimelineSectionProps) {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 md:py-28"
    >
      <div className="container px-4 sm:px-6">
        <TitleSection
          className="mb-12 sm:mb-16"
          title={title || t("about.journey.title")}
          subTitle={subTitle || t("about.journey.subtitle")}
        />

        <div className="relative mx-auto max-w-4xl">
          {/* mobile line — fixed on the start side */}
          <div
            aria-hidden="true"
            className="absolute start-4 top-0 h-full w-px bg-border sm:hidden"
          />
          {/* desktop line — centered */}
          <div
            aria-hidden="true"
            className="absolute start-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border rtl:translate-x-1/2 sm:block"
          />

          <div className="flex flex-col gap-6 sm:gap-10">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative w-full ps-10 sm:ps-0",
                    "sm:w-[calc(50%-2rem)]",
                    isEven ? "sm:self-start" : "sm:self-end"
                  )}
                >
                  {/* mobile dot */}
                  <div
                    aria-hidden="true"
                    className="absolute start-[0.6rem] top-6 h-3 w-3 rounded-full border-2 border-secondary-500 bg-background sm:hidden"
                  />
                  {/* desktop connector dot */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute top-6 hidden h-3 w-3 rounded-full border-2 border-secondary-500 bg-background sm:block",
                      isEven ? "-end-[2.4rem]" : "-start-[2.4rem]"
                    )}
                  />

                  <div className="rounded-xl border border-border bg-secondary-50/40 p-5 shadow-soft transition-smooth hover:shadow-card sm:p-6">
                    <span className="text-sm font-bold text-secondary-600">
                      {m.year}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-primary-900 sm:text-lg">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
