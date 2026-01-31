import { cn } from "../../utils/cn";

export default function Card({ className = "", ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl2 border border-base-border bg-white/5 shadow-soft backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
