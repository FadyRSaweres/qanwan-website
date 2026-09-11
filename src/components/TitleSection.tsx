import { cn } from "@/lib/utils";

interface TitleSectionProps {
    title: string;
    subTitle: string;
    className?: string;
}

export function TitleSection({ title, subTitle, className }: TitleSectionProps) {
    return (
        <div className={cn("mx-auto max-w-2xl text-center", className)}>
            {/* Title */}
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl md:text-5xl">
                {title}
            </h2>

            {/* SubTitle */}
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {subTitle}
            </p>

            {/* Line */}
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-secondary-500" />
        </div>
    );
}
