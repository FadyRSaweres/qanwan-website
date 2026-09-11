"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCurrentLanguage } from "@/services/client";

export interface SlideItem {
    id: number | string;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    image: string;
    link?: string;
}

interface HeroSliderProps {
    slides: SlideItem[];
    /** Read-more button link prefix, defaults to "/" */
    linkPrefix?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, linkPrefix = "/" }) => {
    const { t } = useTranslation();
    const lang = getCurrentLanguage();
    const isAr = lang === "ar";

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            direction: isAr ? "rtl" : "ltr",
        },
        [Autoplay({ delay: 3000, stopOnInteraction: true })]
    );

    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        setCount(emblaApi.scrollSnapList().length);
        setCurrent(emblaApi.selectedScrollSnap());

        const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (isAr) emblaApi?.scrollNext();
        else emblaApi?.scrollPrev();
    }, [emblaApi, isAr]);

    const scrollNext = useCallback(() => {
        if (isAr) emblaApi?.scrollPrev();
        else emblaApi?.scrollNext();
    }, [emblaApi, isAr]);

    if (!slides || slides.length === 0) return null;

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ height: "calc(100vh - 64px)", minHeight: 420 }}
            dir={isAr ? "rtl" : "ltr"}
        >
            {/* Embla viewport */}
            <div ref={emblaRef} className="overflow-hidden h-full w-full">
                {/* Embla container — no margin/padding so loop clones measure correctly */}
                <div className="flex h-full">
                    {slides.map((slide, index) => {
                        const title = isAr ? slide.title : slide.titleEn;
                        const description = isAr ? slide.description : slide.descriptionEn;
                        const href = slide.link ?? `${linkPrefix}${slide.id}`;

                        return (
                            <div
                                key={slide.id ?? index}
                                className="relative flex-none w-full h-full"
                            >
                                {/* Background image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    {/* Dark overlay */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.08) 100%)",
                                        }}
                                    />
                                </div>

                                {/* Text content */}
                                <div
                                    className="relative z-10 h-full flex items-center"
                                    style={{ paddingInlineStart: "6%", paddingInlineEnd: "40%" }}
                                >
                                    <div className="max-w-[600px]">
                                        <h1
                                            className="text-white font-bold mb-4 leading-snug"
                                            style={{
                                                fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
                                                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                                            }}
                                        >
                                            {title}
                                        </h1>
                                        <p
                                            className="text-white/80 mb-8 leading-relaxed"
                                            style={{
                                                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                                                textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                                            }}
                                        >
                                            {description}
                                        </p>
                                        <Link
                                            to={href}
                                            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973a] text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
                                            style={{ fontSize: "0.95rem" }}
                                        >
                                            {t("hero.readMore", "اقرأ الخبر")}
                                            {isAr ? (
                                                <ChevronLeft className="h-4 w-4" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4" />
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── Prev / Next arrows ── */}
            <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors duration-200"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                onClick={scrollNext}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors duration-200"
            >
                <ChevronRight className="h-5 w-5" />
            </button>

            {/* ── Dot indicators ── */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={`rounded-full transition-all duration-300 ${
                            i === current
                                ? "w-6 h-2.5 bg-[#c9a84c]"
                                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
