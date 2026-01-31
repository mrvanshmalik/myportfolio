import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, stagger } from "../utils/motion";
import { education } from "../data/education";

export default function Education() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="education"
      title="Education"
      subtitle="Simple, clean, and easy for recruiters to scan."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        variants={reduced ? undefined : stagger}
        className="grid gap-4 md:grid-cols-2"
      >
        {education.map((e, idx) => (
          <motion.div
            key={`${e.school}-${e.period}`}
            variants={reduced ? undefined : fadeUp(idx * 0.05)}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{e.school}</div>
                  <div className="text-sm text-base-muted">{e.degree}</div>
                </div>
                <Badge tone="soft">{e.period}</Badge>
              </div>

              {e.details?.length ? (
                <ul className="mt-4 list-disc pl-5 text-sm text-base-muted">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-base-muted">
                  Strong fundamentals + consistent project building.
                </p>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
