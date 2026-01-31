import { useMemo } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Modal from "../ui/Modal";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ProjectModal({ open, onClose, project }) {
  const tech = useMemo(() => project?.tech || [], [project]);
  const highlights = useMemo(() => project?.highlights || [], [project]);

  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose} title={project.title}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl2 border border-base-border bg-white/5">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="grid h-64 place-items-center text-sm text-base-muted">
              No Preview
            </div>
          )}
        </div>

        <div className="grid gap-4">
          <p className="text-sm text-base-muted">{project.description}</p>

          {highlights.length ? (
            <div>
              <div className="text-sm font-extrabold">Highlights</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-base-muted">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {tech.length ? (
            <div>
              <div className="text-sm font-extrabold">Tech</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <Badge key={t} tone="neutral">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-2 flex flex-wrap gap-3">
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noreferrer">
                <Button variant="secondary">
                  <Github className="h-4 w-4" />
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            ) : null}

            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer">
                <Button variant="primary">
                  <ExternalLink className="h-4 w-4" />
                  Live <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
}
