import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import useReducedMotion from "../../hooks/useReducedMotion";
import { ease } from "../../utils/motion";

export default function ScrollTopButton() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={onTop}
          aria-label="Scroll to top"
          initial={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }}
          animate={reduced ? false : { opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.2, ease }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white shadow-lift"
        >
          <ArrowUp size={18} />
          Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
