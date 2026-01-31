import { cn } from "../../utils/cn";

export default function Badge({ className = "", tone = "soft", ...props }) {
  const tones = {
    soft: "bg-brand-primary/12 text-white ring-1 ring-brand-primary/20",
    info: "bg-brand-secondary/12 text-white ring-1 ring-brand-secondary/20",
    neutral: "bg-white/7 text-white/90 ring-1 ring-base-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
