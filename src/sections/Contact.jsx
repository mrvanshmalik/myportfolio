import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, stagger } from "../utils/motion";
import { profile } from "../data/profile";

function ContactTile({ icon, title, text, href, rightSlot }) {
  const isHttp = href?.startsWith("http");

  return (
    <Card className="p-6 transition hover:-translate-y-0.5 hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold">
            {icon} {title}
          </div>

          {href ? (
            <a
              href={href}
              target={isHttp ? "_blank" : undefined}
              rel="noreferrer"
              className="mt-2 block break-all text-sm text-brand-secondary underline-offset-4 hover:underline"
            >
              {text}
            </a>
          ) : (
            <div className="mt-2 break-all text-sm text-base-muted">{text}</div>
          )}
        </div>

        {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
      </div>
    </Card>
  );
}

export default function Contact() {
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Quick links for recruiters — email, GitHub, LinkedIn + resume."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        variants={reduced ? undefined : stagger}
        className="grid gap-4 md:grid-cols-3"
      >
        <motion.div variants={reduced ? undefined : fadeUp(0)}>
          <ContactTile
            icon={<Mail size={18} />}
            title="Email"
            text={profile.email}
            href={`mailto:${profile.email}`}
            rightSlot={
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-soft ring-1 ring-base-border backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/8 hover:shadow-lift"

              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy"}
              </button>
            }
          />
        </motion.div>

        <motion.div variants={reduced ? undefined : fadeUp(0.05)}>
          <ContactTile
            icon={<Github size={18} />}
            title="GitHub"
            text={profile.github}
            href={profile.github}
          />
        </motion.div>

        <motion.div variants={reduced ? undefined : fadeUp(0.1)}>
          <ContactTile
            icon={<Linkedin size={18} />}
            title="LinkedIn"
            text={profile.linkedin}
            href={profile.linkedin}
          />
        </motion.div>
      </motion.div>

      <div className="mt-6">
        <Button
          as="a"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </Button>
      </div>
    </Section>
  );
}
