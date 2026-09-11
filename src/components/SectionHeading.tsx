import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, align = "center", className }: Props) => (
  <div
    className={cn(
      "max-w-2xl text-center",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}
  >
    {eyebrow && (
      <span className="mb-3 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {eyebrow}
      </span>
    )}
    <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
      {title}
    </h2>
    {description && (
      <p className="text-center mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;