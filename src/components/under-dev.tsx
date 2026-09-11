import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Wrench, HardHat, Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * "تحت التطوير" — Under Development page.
 * Shown for routes/sections that aren't ready yet.
 */
export default function UnderDevelopmentPage() {
    const { t } = useTranslation();

    return (
        <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
            {/* subtle background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-500/10 blur-[100px]"
            />

            {/* icon cluster */}
            <div className="relative mb-8 flex items-center justify-center">
                {/* rotating dashed ring */}
                <motion.div
                    aria-hidden="true"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute h-40 w-40 rounded-full border-2 border-dashed border-secondary-300"
                />

                {/* bouncing hard hat, top-left */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-2 -top-2 flex h-11 w-11 items-center justify-center rounded-full bg-secondary-100 shadow-soft"
                >
                    <HardHat className="h-5 w-5 text-secondary-600" />
                </motion.div>

                {/* bouncing construction sign, bottom-right */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute -bottom-2 -right-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 shadow-soft"
                >
                    <Construction className="h-5 w-5 text-primary-600" />
                </motion.div>

                {/* central wrench — the "someone fixing it" motion */}
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-card shadow-elegant">
                    <motion.div
                        animate={{ rotate: [0, -25, 0, 25, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Wrench className="h-12 w-12 text-primary-600" strokeWidth={1.75} />
                    </motion.div>
                </div>
            </div>

            {/* copy */}
            <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl"
            >
                {t("underDevelopment.title")}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
                {t("underDevelopment.subtitle")}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
            >
                <Button asChild size="lg" className="gap-2">
                    <Link to="/">
                        <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                        {t("underDevelopment.backHomeCta")}
                    </Link>
                </Button>
            </motion.div>
        </div>
    );
}
