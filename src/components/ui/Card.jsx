import { cn } from "../../utils/cn";

export default function Card({ className = "", ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl2 border border-base-border bg-white/10 shadow-2xl  shadow-white/5 backdrop-blur-xl transition-transform hover:scale-102 duration-500 ease-in-out hover:shadow-white/10",
        className,
      )}
      {...props}
    />
  );
}
