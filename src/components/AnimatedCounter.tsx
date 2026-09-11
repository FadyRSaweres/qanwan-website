import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    to: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

/**
 * Counts up from 0 → `to` when the element scrolls into view.
 * Suffix is appended after the number (e.g. "+", "%").
 */
export function AnimatedCounter({
    to,
    suffix = "",
    duration = 2,
    className,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration,
    });
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, motionValue, to]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest).toString() + suffix;
            }
        });
        return unsubscribe;
    }, [springValue, suffix]);

    return (
        <span ref={ref} className={className}>
            0{suffix}
        </span>
    );
}
