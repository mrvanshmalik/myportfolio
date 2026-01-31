import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import { projects } from "../data/projects";
import { cn } from "../utils/cn";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, stagger } from "../utils/motion";

function uniq(arr) {
  return Array.from(new Set(arr));
}

export default function Projects() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const tags = useMemo(() => {
    const all = projects.flatMap((p) => p.tech || []);
    return ["All", ...uniq(all)];
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => (p.tech || []).includes(filter));
  }, [filter]);

  const onOpen = (p) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Premium UI, clean code, and interview-ready architecture."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        variants={reduced ? undefined : stagger}
        className="grid gap-4"
      >
        <motion.div
          variants={reduced ? undefined : fadeUp(0)}
          className="flex flex-wrap gap-2"
        >
          {tags.slice(0, 12).map((t) => {
            const activeTag = filter === t;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={cn(
                  "rounded-full border border-base-border px-4 py-2 text-sm font-semibold transition",
                  activeTag
                    ? "bg-linear-to-r from-brand-secondary to-brand-primary text-black"
                    : "bg-white/5 text-white/80 hover:bg-white/8",
                )}
              >
                {t}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          variants={reduced ? undefined : fadeUp(0.08)}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onOpen={onOpen}
              active={active?.id === p.id}
            />
          ))}
        </motion.div>
      </motion.div>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        project={active}
      />
    </Section>
  );
}
