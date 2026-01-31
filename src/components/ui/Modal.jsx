import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import useReducedMotion from "../../hooks/useReducedMotion";
import { ease } from "../../utils/motion";
import IconButton from "./IconButton";
import { cn } from "../../utils/cn";

export default function Modal({
  open,
  onClose,
  title,
  children,
  className = "",
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.18 } }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
          />

          <motion.div
            className="fixed inset-0 z-50 grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 14, scale: 0.98, opacity: 0 }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
                transition: reduced
                  ? { duration: 0 }
                  : { duration: 0.28, ease },
              }}
              exit={{
                y: 14,
                scale: 0.98,
                opacity: 0,
                transition: reduced ? { duration: 0 } : { duration: 0.2, ease },
              }}
              className={cn(
                "w-full max-w-4xl rounded-xl2 border border-base-border bg-black/55 shadow-lift backdrop-blur-xl",
                className,
              )}
            >
              <div className="flex items-center justify-between border-b border-base-border px-5 py-4">
                <div className="text-sm font-extrabold tracking-tight">
                  {title}
                </div>
                <IconButton onClick={onClose} aria-label="Close modal">
                  <X className="h-5 w-5 text-white/90" />
                </IconButton>
              </div>

              <div className="p-5">{children}</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
