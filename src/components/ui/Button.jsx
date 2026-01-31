import { cn } from "../../utils/cn";

export default function Button({
  as: Comp = "button",
  className = "",
  variant = "primary", // primary | secondary | ghost
  size = "md", // sm | md | lg
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/35 disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-secondary to-brand-primary text-black shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
    secondary:
      "glass text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
    ghost:
      "text-white/90 hover:text-white hover:bg-white/7 border border-base-border bg-white/4",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
