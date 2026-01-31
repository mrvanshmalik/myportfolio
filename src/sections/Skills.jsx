import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, stagger, ease } from "../utils/motion";
import { skills } from "../data/skills";

function Chip({ children }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease }}
      className="inline-flex"
    >
      <Badge tone="neutral">{children}</Badge>
    </motion.span>
  );
}

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Organized categories with animated chips and clean readability."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        variants={reduced ? undefined : stagger}
        className="grid gap-4 md:grid-cols-2"
      >
        {skills.map((group, idx) => (
          <motion.div
            key={group.title}
            variants={reduced ? undefined : fadeUp(idx * 0.05)}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">{group.title}</div>
                <span className="text-xs font-semibold text-base-muted">
                  {group.items.length} skills
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>

              <div className="mt-5 h-px w-full bg-base-border" />

              <p className="mt-4 text-sm text-base-muted">
                Clean fundamentals + practical project work.
                
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
