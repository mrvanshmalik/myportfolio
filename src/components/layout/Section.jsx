import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";
import { fadeUp } from "../../utils/motion";
import Container from "./Container";

export default function Section({ id, title, subtitle, children }) {
  const reduced = useReducedMotion();

  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <Container>
        {(title || subtitle) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            variants={reduced ? undefined : fadeUp(0)}
            className="mb-8 md:mb-10"
          >
            {title ? (
              <h2 className="text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
                <span
                  className="bg-linear-to-r from-brand-secondary via-white to-brand-primary bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "shimmer 5s linear infinite",
                  }}
                >
                  {title}
                </span>
              </h2>
            ) : null}

            {subtitle ? (
              <p className="mt-2 max-w-2xl text-sm text-base-muted md:text-base">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-6 h-px w-full bg-linear-to-r from-white/0 via-white/14 to-white/0" />
          </motion.div>
        )}

        {children}
      </Container>
    </section>
  );
}
