import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import IconButton from "../components/ui/IconButton";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, stagger } from "../utils/motion";
import { profile } from "../data/profile";
import { seo } from "../app/seo";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="scroll-mt-24 pt-12 md:pt-20">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={reduced ? undefined : stagger}
          className="relative overflow-hidden rounded-xl2 border border-base-border bg-white/5 p-6 shadow-lift backdrop-blur-xl md:p-10"
        >
          {/* top glow */}
          <div
            className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(56,189,248,0.35), transparent 60%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.35), transparent 60%)",
            }}
          />

          <motion.p
            variants={reduced ? undefined : fadeUp(0)}
            className="text-sm font-semibold text-white/80"
          >
            {profile.headline}
          </motion.p>

          <motion.h1
            variants={reduced ? undefined : fadeUp(0.05)}
            className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-5xl"
          >
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-brand-secondary via-white to-brand-primary bg-clip-text text-transparent">
              {profile.name}
            </span>
            .
          </motion.h1>

          <motion.div
            variants={reduced ? undefined : fadeUp(0.1)}
            className="mt-4 text-base text-base-muted md:text-lg"
          >
            <TypeAnimation
              sequence={[
                "I build modern React apps with premium UI + smooth animations.",
                1200,
                "I build responsive dashboards and enterprise-style projects.",
                1200,
                "I build clean projects .",
                1200,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={reduced ? undefined : fadeUp(0.15)}
            className="mt-5 max-w-2xl text-sm text-base-muted md:text-base"
          >
            {profile.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduced ? undefined : fadeUp(0.2)}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="primary"
              size="lg"
            >
              View Projects <ArrowUpRight className="h-5 w-5" />
            </Button>

            <a href={seo.resumeUrl} download>
              <Button variant="secondary" size="lg">
                Download Resume <Download className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={reduced ? undefined : fadeUp(0.25)}
            className="mt-7 flex flex-wrap items-center gap-2"
          >
            {profile.links?.github ? (
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <IconButton aria-label="GitHub">
                  <Github className="h-5 w-5 text-white/90" />
                </IconButton>
              </a>
            ) : null}

            {profile.links?.linkedin ? (
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <IconButton aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-white/90" />
                </IconButton>
              </a>
            ) : null}

            {profile.email ? (
              <a href={`mailto:${profile.email}`}>
                <IconButton aria-label="Email">
                  <Mail className="h-5 w-5 text-white/90" />
                </IconButton>
              </a>
            ) : null}
          </motion.div>

          {/* mini stats */}
          <motion.div
            variants={reduced ? undefined : fadeUp(0.3)}
            className="mt-8 grid gap-3 md:grid-cols-3"
          >
            <div className="rounded-xl2 border border-base-border bg-white/5 p-4">
              <div className="text-xs font-semibold text-base-muted">Focus</div>
              <div className="mt-1 text-sm font-extrabold">Frontend + UI</div>
            </div>
            <div className="rounded-xl2 border border-base-border bg-white/5 p-4">
              <div className="text-xs font-semibold text-base-muted">Stack</div>
              <div className="mt-1 text-sm font-extrabold">
                React • Vite • Tailwind • Python • C++
              </div>
            </div>
            <div className="rounded-xl2 border border-base-border bg-white/5 p-4">
              <div className="text-xs font-semibold text-base-muted">Goal</div>
              <div className="mt-1 text-sm font-extrabold">Become a Good Developer</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
