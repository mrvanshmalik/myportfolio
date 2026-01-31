import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, stagger, ease } from "../utils/motion";
import { experience } from "../data/experience";

function TimelineDot() {
  return (
    <div className="relative mt-1 flex h-4 w-4 items-center justify-center">
      <span className="absolute inline-flex h-4 w-4 rounded-full bg-brand-primary/20" />
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
    </div>
  );
}

export default function Experience() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A clean timeline with strong bullet points and smooth reveal."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        variants={reduced ? undefined : stagger}
        className="grid gap-4"
      >
        {experience.map((item, idx) => (
          <motion.div
            key={`${item.org}-${item.role}`}
            variants={reduced ? undefined : fadeUp(idx * 0.06)}
          >
            <Card className="p-6">
              <div className="flex gap-4">
                {/* Left timeline */}
                <div className="flex w-6 flex-col items-center">
                  <TimelineDot />
                  <div className="mt-2 h-full w-px bg-base-border" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">{item.role}</div>
                      <div className="text-sm text-base-muted">{item.org}</div>
                    </div>

                    <div className="rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold text-base-text ring-1 ring-brand-secondary/20">
                      {item.period}
                    </div>
                  </div>

                  <ul className="mt-3 list-disc pl-5 text-sm text-base-muted">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>

                  <motion.div
                    className="mt-4 h-px w-full bg-base-border"
                    initial={false}
                    whileHover={reduced ? undefined : { scaleX: 1.02 }}
                    transition={{ duration: 0.2, ease }}
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
