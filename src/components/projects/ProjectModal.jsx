import { useMemo } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Modal from "../ui/Modal";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ProjectModal({ open, onClose, project }) {
  const tech = useMemo(() => project?.tech || [], [project]);
  const highlights = useMemo(() => project?.highlights || [], [project]);
  const links = project?.links || {};

  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose} title={project.title}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl2 border border-base-border bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-4">
          <p className="text-sm text-base-muted">{project.description}</p>

          {highlights.length > 0 && (
            <div>
              <div className="text-sm font-extrabold">Highlights</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-base-muted">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <div className="text-sm font-extrabold">Tech Stack</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="mt-3 flex gap-3">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer">
                <Button variant="secondary">
                  <Github className="h-4 w-4" />
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            )}

            {links.live && links.live !== "https://" && (
              <a href={links.live} target="_blank" rel="noreferrer">
                <Button variant="primary">
                  <ExternalLink className="h-4 w-4" />
                  Live <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
