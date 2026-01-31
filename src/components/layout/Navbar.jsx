import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import useScrollSpy from "../../hooks/useScrollSpy";
import useReducedMotion from "../../hooks/useReducedMotion";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";
import Container from "./Container";
import Button from "../ui/Button";
import { seo } from "../../app/seo";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(
    NAV.map((n) => n.id),
    140,
  );

  const items = useMemo(() => NAV, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-base-border bg-black/30 backdrop-blur-xl">
        <Container className="py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Brand */}
            <button
              onClick={() => go("home")}
              className="group flex items-center gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl2 border border-base-border bg-white/5 shadow-soft">
                <span className="text-sm font-extrabold text-white">VM</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold tracking-tight">
                  Vansh Malik
                </div>
                <div className="text-[11px] text-base-muted">
                  React • Vite • Tailwind
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 md:flex">
              {items.map((it) => {
                const isActive = active === it.id;
                return (
                  <button
                    key={it.id}
                    onClick={() => go(it.id)}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-semibold transition",
                      "hover:bg-white/6",
                      isActive ? "bg-white/10 text-white" : "text-base-muted",
                    )}
                  >
                    {it.label}
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={seo.resumeUrl}
                download
                className="hidden md:block"
                aria-label="Download Resume"
              >
                <Button variant="primary" size="sm">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hidden md:block"
              >
                <Button variant="ghost" size="sm">
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-xl2 border border-base-border bg-white/5 p-2 md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile overlay drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.18 } }}
              exit={{ opacity: 0, transition: { duration: 0.18 } }}
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm border-l border-base-border bg-black/55 p-4 backdrop-blur-xl"
              initial={{ x: 40, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: reduced
                  ? { duration: 0 }
                  : { duration: 0.28, ease },
              }}
              exit={{
                x: 40,
                opacity: 0,
                transition: reduced
                  ? { duration: 0 }
                  : { duration: 0.22, ease },
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold">Menu</div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl2 border border-base-border bg-white/5 p-2"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 grid gap-2">
                {items.map((it) => {
                  const isActive = active === it.id;
                  return (
                    <button
                      key={it.id}
                      onClick={() => go(it.id)}
                      className={cn(
                        "w-full rounded-xl2 border border-base-border bg-white/5 px-4 py-3 text-left font-semibold",
                        isActive
                          ? "ring-2 ring-brand-secondary/25"
                          : "hover:bg-white/8",
                      )}
                    >
                      <div className="text-sm">{it.label}</div>
                      <div className="text-xs text-base-muted">
                        Jump to {it.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-2">
                <a href={seo.resumeUrl} download>
                  <Button className="w-full" variant="primary">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
