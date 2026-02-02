import { useMemo, useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Modal from "../ui/Modal";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function ModalImg({ src, alt }) {
  const [bad, setBad] = useState(false);

  if (!src || bad) {
    return (
      <div className="flex h-64 w-full items-center justify-center bg-white/5 text-sm font-semibold text-base-muted">
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

export default function ProjectModal({ open, onClose, project }) {
  const tech = useMemo(() => project?.tech || [], [project]);
  const highlights = useMemo(() => project?.highlights || [], [project]);
  const links = project?.links || {};

  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose} title={project.title}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl2 border border-base-border bg-white/5">
          <ModalImg src={project.image} alt={project.title} />
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

          <div className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="w-full sm:w-auto">
                  <Github className="h-4 w-4" />
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            )}

            {links.live &&
              links.live !== "https://" &&
              links.live !== "https://" && (
                <a href={links.live} target="_blank" rel="noreferrer">
                  <Button variant="primary" className="w-full sm:w-auto">
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
