import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Button from "../ui/Button";
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
  const { links = {} } = project;

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
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div>
              <h3 className="text-base font-extrabold">{project.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-base-muted">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(project.tech || []).slice(0, 4).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {/* 🔥 ACTION BUTTONS */}
            <div className="mt-auto flex gap-2">
              {links.github && (
                <a href={links.github} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="sm">
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </a>
              )}

              {links.live && links.live !== "https://" && (
                <a href={links.live} target="_blank" rel="noreferrer">
                  <Button variant="primary" size="sm">
                    <ExternalLink className="h-4 w-4" /> Live
                  </Button>
                </a>
              )}
            </div>

            <button
              onClick={() => onOpen(project)}
              className="mt-3 text-left text-sm font-semibold text-brand-secondary hover:underline"
            >
              View details →
            </button>
          </div>
        </Card>
      </Tilt>
    </motion.div>
  );
}
