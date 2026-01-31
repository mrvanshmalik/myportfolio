import { useMemo, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import certifications from "../data/certifications";

export default function Certifications() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const list = useMemo(() => certifications || [], []);

  const onOpen = (c) => {
    setActive(c);
    setOpen(true);
  };

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="PDF certificates — clean cards + quick preview."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Card key={c.title} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 border border-base-border bg-white/5">
                <FileText className="h-6 w-6 text-white/90" />
              </div>
              <div className="text-xs text-base-muted">{c.date}</div>
            </div>

            <div className="mt-4">
              <div className="text-base font-extrabold">{c.title}</div>
              <div className="mt-1 text-sm text-base-muted">{c.issuer}</div>
            </div>

            <div className="mt-5 grid gap-2">
              <Button variant="primary" onClick={() => onOpen(c)}>
                Preview PDF
              </Button>

              <a href={c.pdf} target="_blank" rel="noreferrer">
                <Button variant="ghost" className="w-full">
                  Open in new tab <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title || "Certificate"}
      >
        {!active ? null : (
          <div className="grid gap-4">
            <div className="text-sm text-base-muted">
              Issuer:{" "}
              <span className="text-white/90 font-semibold">
                {active.issuer}
              </span>{" "}
              • {active.date}
            </div>

            <div className="overflow-hidden rounded-xl2 border border-base-border bg-white/5">
              {/* PDF Viewer */}
              <iframe
                title={active.title}
                src={active.pdf}
                className="h-[70vh] w-full"
              />
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
