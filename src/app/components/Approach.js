"use client";

import { motion } from "motion/react";
import { processSteps } from "@/data/process";
import SectionHeader from "./SectionHeader";

export default function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Approach"
          title="A process built to survive contact with reality."
          intro="Nine stages from first conversation to handover. It flexes per project, but nothing gets skipped."
        />

        <ol className="mt-16 border-t border-hairline">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 border-b border-hairline py-8 md:grid-cols-12 md:gap-8"
            >
              <span className="font-display text-3xl text-muted-dim md:col-span-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl text-text md:col-span-4">
                {step.title}
              </h3>
              <p className="text-muted text-pretty md:col-span-6">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
