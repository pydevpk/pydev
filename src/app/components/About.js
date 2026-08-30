"use client";

import { profile, SHOW_EDUCATION } from "@/data/profile";
import Reveal, { RevealGroup, revealItem } from "./Reveal";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-hairline px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="flex items-center gap-3 eyebrow">
              <span className="h-px w-8 bg-hairline-strong" />
              About
            </div>
            <p className="mt-6 font-display text-sm tracking-widest text-muted">
              {profile.location} · {profile.availability}
            </p>
          </Reveal>

          <div className="md:col-span-8">
            <Reveal>
              <h2 className="display-md text-balance">
                Every piece of software tells the story of the engineer who
                built it.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted text-pretty">
                {profile.summary}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <Reveal>
                <h3 className="eyebrow">Languages</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {profile.languages.map((l) => (
                    <li key={l.name}>
                      {l.name} — <span className="text-text">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              {SHOW_EDUCATION ? (
                <Reveal>
                  <h3 className="eyebrow">Education</h3>
                  <p className="mt-3 text-sm text-muted">
                    <span className="text-text">
                      {profile.education.degree}
                    </span>
                    <br />
                    {profile.education.institution}
                    <br />
                    {profile.education.period}
                  </p>
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>

        <RevealGroup className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {profile.stats.map((s) => (
            <motion.div
              key={s.label}
              variants={revealItem}
              className="bg-bg p-7"
            >
              <p className="font-display text-4xl text-accent">{s.value}</p>
              <p className="mt-2 text-sm text-muted text-pretty">{s.label}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
