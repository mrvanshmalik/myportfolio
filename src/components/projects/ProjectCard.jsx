import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import useReducedMotion from "../../hooks/useReducedMotion";
import { scaleIn } from "../../utils/motion";
import { cn } from "../../utils/cn";

function Img({ src, alt }) {
  const [bad, setBad] = useState(false);

  if (!src || bad) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white/5 text-sm font-semibold text-base-muted">
        No Preview
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setBad(true)}
      className="h-full w-full object-cover"
    />
  );
}

export default function ProjectCard({ project, onOpen, active = false }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -120px 0px" }}
      variants={reduced ? undefined : scaleIn(0)}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable
        glareMaxOpacity={0.18}
        scale={1.02}
        className="h-full"
      >
        <Card
          className={cn(
            "group relative flex h-full flex-col overflow-hidden transition",
            "hover:-translate-y-1 hover:shadow-lift",
            active ? "ring-2 ring-brand-secondary/25" : "",
          )}
        >
          <div className="relative aspect-16/10 overflow-hidden border-b border-base-border">
            <Img src={project.image} alt={project.title} />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-70" />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-extrabold">{project.title}</h3>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-base-muted">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(project.tech || []).slice(0, 5).map((t) => (
                <Badge key={t} tone="neutral">
                  {t}
                </Badge>
              ))}
              {(project.tech || []).length > 5 ? (
                <Badge tone="info">+{(project.tech || []).length - 5}</Badge>
              ) : null}
            </div>

            <button
              onClick={() => onOpen?.(project)}
              className="mt-auto rounded-xl2 border border-base-border bg-white/5 px-4 py-3 text-left text-sm font-semibold transition hover:bg-white/8"
            >
              View details →
            </button>
          </div>
        </Card>
      </Tilt>
    </motion.div>
  );
}
