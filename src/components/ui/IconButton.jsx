import { cn } from "../../utils/cn";

export default function IconButton({
  as: Comp = "button",
  className = "",
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-xl2 border border-base-border bg-white/5 p-2 shadow-soft backdrop-blur-xl transition",
        "hover:-translate-y-0.5 hover:bg-white/8 hover:shadow-lift active:translate-y-0",
        className,
      )}
      {...props}
    />
  );
}
