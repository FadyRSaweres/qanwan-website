import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { type LucideIcon, CheckCircle2, ChevronLeft, Building2, Briefcase } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TitleSection } from "@/components/TitleSection";
import { InvestmentSector } from "../mockData/about";

/**
 * A related/invested company shown inside the detail dialog.
 * All fields come from the CMS.
 */
export interface SectorCompany {
    id: string | number;
    name: string;
    logoUrl?: string;
    url?: string;
}

/**
 * One investment sector card. Everything is CMS-driven —
 * title, subtitle, icon, description, focus areas, and companies.
 */
export interface CardDetailsData {
    id: string | number;
    /** Card + dialog heading, e.g. "الطاقة المتجددة" */
    cardTitle: string;
    /** Short label shown above the title in the dialog, e.g. "القطاع الاستثماري" */
    cardSubtitle?: string;
    /** Icon component resolved from an icon-name string coming from the CMS */
    icon: LucideIcon;
    /** Generic one-liner shown on the card face under the icon */
    overview: string;
    /** Longer paragraph shown inside the dialog and on the card */
    description: string;
    /** "مجالات التركيز" — list of focus area labels */
    focusAreas: string[];
    /** Companies invested in within this sector; empty array -> empty-state message */
    companies: SectorCompany[];
    /** Optional per-card accent theme; defaults to primary if omitted */
    accent?: "emerald" | "primary" | "sky" | "secondary";
}

interface InvestmentSectorsSectionProps {
    title: string;
    subtitle: string;
    cardProps: InvestmentSector[];
}



const accentStyles: Record<
    NonNullable<CardDetailsData["accent"]>,
    { border: string; iconBg: string; iconText: string }
> = {
    emerald: {
        border: "border-emerald-200 hover:border-emerald-300",
        iconBg: "bg-emerald-100",
        iconText: "text-emerald-600",
    },
    primary: {
        border: "border-primary-200 hover:border-primary-300",
        iconBg: "bg-primary-100",
        iconText: "text-primary-600",
    },
    sky: {
        border: "border-sky-200 hover:border-sky-300",
        iconBg: "bg-sky-100",
        iconText: "text-sky-600",
    },
    secondary: {
        border: "border-secondary-200 hover:border-secondary-300",
        iconBg: "bg-secondary-100",
        iconText: "text-secondary-700",
    },
};




export function InvestmentSectorsSection({
    title,
    subtitle,
    cardProps,
}: InvestmentSectorsSectionProps) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n?.language === "ar";
    const [activeCard, setActiveCard] = useState<CardDetailsData | null>(null);

    const cards = useMemo((): CardDetailsData[] => {
        if (!cardProps) return [];

        return cardProps.map((card, index): CardDetailsData => {
            const accents: CardDetailsData["accent"][] = ["emerald", "primary", "sky", "secondary"];

            return {
                id: card.id,
                cardTitle: isRtl ? card.title_ar : card.title_en,
                cardSubtitle: isRtl ? "القطاع الاستثماري" : "Investment Sector",
                icon: Briefcase,
                overview: "",
                description: isRtl ? card.slug_ar : card.slug_en,
                focusAreas: isRtl
                    ? (card.description_ar ? card.description_ar.split(",").map((f) => f.trim()) : [])
                    : (card.description_en ? card.description_en.split(",").map((f) => f.trim()) : []),
                companies: [],
                accent: accents[index % accents.length],
            };
        });
    }, [cardProps, isRtl]);


    return (
        <section className="py-16 md:py-28">
            <div className="container px-4 sm:px-6">
                <TitleSection className="mb-10 sm:mb-14" title={title} subTitle={subtitle} />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, idx) => {
                        const accent = accentStyles[card.accent ?? "primary"];
                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                role="button"
                                tabIndex={0}
                                onClick={() => setActiveCard(card)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") setActiveCard(card);
                                }}
                                className={cn(
                                    "flex cursor-pointer flex-col rounded-2xl border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card",
                                    accent.border
                                )}
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-bold text-primary-900">
                                        {card.cardTitle}
                                    </h3>
                                    <div
                                        className={cn(
                                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                                            accent.iconBg
                                        )}
                                    >
                                        <Icon className={cn("h-5 w-5", accent.iconText)} />
                                    </div>
                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {card.overview}
                                </p>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveCard(card);
                                    }}
                                    className="mt-3 flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
                                >
                                    <Building2 className="h-4 w-4" />
                                    {t("investmentSectors.viewCompaniesLink")}
                                </button>

                                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-foreground">
                                    {card.description}
                                </p>

                                {card.focusAreas.length > 0 && (
                                    <div className="mt-4">
                                        <span className="text-sm font-semibold text-foreground">
                                            {t("investmentSectors.focusAreasLabel")}
                                        </span>
                                        <ul className="mt-2 space-y-1.5">
                                            {card.focusAreas.map((area) => (
                                                <li
                                                    key={area}
                                                    className="flex items-center justify-start gap-2 text-sm text-muted-foreground"
                                                >
                                                    <CheckCircle2 className="h-4 w-4 text-secondary-500" />
                                                    {area}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <Button
                                    variant="outline"
                                    className="mt-6 w-full gap-1.5"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveCard(card);
                                    }}
                                >
                                    <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                                    {t("investmentSectors.viewDetailsCta")}
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <SectorDetailsDialog
                card={activeCard}
                open={!!activeCard}
                onOpenChange={(open) => !open && setActiveCard(null)}
            />
        </section>
    );
}

interface SectorDetailsDialogProps {
    card: CardDetailsData | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

function SectorDetailsDialog({ card, open, onOpenChange }: SectorDetailsDialogProps) {
    const { t } = useTranslation();
    if (!card) return null;

    const Icon = card.icon;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-xl gap-0 overflow-hidden p-0 sm:max-w-2xl">
                <DialogHeader className="border-b border-border px-6 py-4">
                    <DialogTitle className="text-base font-bold text-primary-900">
                        {card.cardTitle}
                    </DialogTitle>
                </DialogHeader>

                <div className="max-h-[75vh] overflow-y-auto p-6">
                    {/* hero banner */}
                    <div className="rounded-xl bg-gradient-to-br from-primary-800 to-primary-500 p-6 text-primary-foreground">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                {card.cardSubtitle && (
                                    <span className="text-xs font-medium opacity-80">
                                        {card.cardSubtitle}
                                    </span>
                                )}
                                <h3 className="mt-1 text-xl font-bold">{card.cardTitle}</h3>
                            </div>
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                                <Icon className="h-6 w-6" />
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed opacity-90">
                            {card.description}
                        </p>
                    </div>

                    {/* focus areas */}
                    {card.focusAreas.length > 0 && (
                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-foreground">
                                {t("investmentSectors.focusAreasLabel")}
                            </h4>
                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                {card.focusAreas.map((area) => (
                                    <div
                                        key={area}
                                        className="flex items-center justify-start gap-2 rounded-lg border border-border bg-secondary-50/40 px-4 py-3 text-sm text-foreground"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-secondary-500" />
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* companies */}
                    <div className="mt-6">
                        <h4 className="text-sm font-bold text-foreground">
                            {t("investmentSectors.companiesLabel")}
                        </h4>

                        {card.companies.length === 0 ? (
                            <div className="mt-3 rounded-lg bg-secondary-50/50 px-4 py-4 text-sm text-muted-foreground">
                                {t("investmentSectors.noCompaniesMessage")}
                            </div>
                        ) : (
                            <ul className="mt-3 space-y-2">
                                {card.companies.map((company) => (
                                    <li
                                        key={company.id}
                                        className="flex items-center gap-3 rounded-lg border border-border px-4 py-3"
                                    >
                                        {company.logoUrl ? (
                                            <img
                                                src={company.logoUrl}
                                                alt={company.name}
                                                className="h-8 w-8 rounded object-contain"
                                            />
                                        ) : (
                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary-100">
                                                <Building2 className="h-4 w-4 text-secondary-600" />
                                            </div>
                                        )}
                                        {company.url ? (
                                            <a
                                                href={company.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-medium text-primary-600 hover:underline"
                                            >
                                                {company.name}
                                            </a>
                                        ) : (
                                            <span className="text-sm font-medium text-foreground">
                                                {company.name}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
