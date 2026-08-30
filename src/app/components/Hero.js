"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";
import portrait from "../../../public/profile.jpeg";
import SocialLinks from "./SocialLinks";
import LocalTime from "./LocalTime";

const line = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (i) =>
    reduce
      ? {}
      : { variants: line, custom: i, initial: "hidden", animate: "show" };

  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-8">
      {/* ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 right-0 h-[80vh] w-[80vh] rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent), transparent 62%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.p className="eyebrow flex items-center gap-3" {...anim(0)}>
          <span className="h-px w-8 bg-hairline-strong" />
          {profile.name} — {profile.title}
        </motion.p>

        <h1 className="display-xl mt-8 max-w-[16ch] text-balance">
          {profile.headline.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="mr-[0.22em] inline-block"
              {...anim(i + 1)}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          {...anim(10)}
        >
          <p className="max-w-lg text-lg leading-relaxed text-muted text-pretty">
            {profile.tagline}
          </p>

          <div className="flex items-center gap-4">
            <Image
              src={portrait}
              alt={profile.name}
              width={64}
              height={64}
              priority
              className="h-16 w-16 rounded-full border border-hairline object-cover grayscale"
            />
            <div className="text-sm">
              <p className="text-text">{profile.location}</p>
              <p className="text-muted">
                <LocalTime /> · local time
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5"
          {...anim(11)}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-text px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
          >
            View selected work
            <span className="transition-transform group-hover:translate-x-0.5">
              ↓
            </span>
          </a>
          <a
            href="#contact"
            className="link-underline text-sm text-muted hover:text-text"
          >
            Start a conversation
          </a>
          <SocialLinks className="ml-auto" />
        </motion.div>
      </div>
    </section>
  );
}
