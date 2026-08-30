"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import ProjectCover from "./ProjectCover";

export default function ProjectRow({ project, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-hairline py-10 first:border-t-0 md:py-14"
    >
      <Link
        href={`/work/${project.slug}`}
        className="grid gap-8 md:grid-cols-12 md:items-center"
      >
        <div
          className={`relative overflow-hidden rounded-xl border border-hairline bg-surface md:col-span-7 ${
            index % 2 === 1 ? "md:order-2" : ""
          }`}
        >
          <div className="aspect-[16/10] w-full">
            {project.cover ? (
              <Image
                src={project.cover}
                alt={project.name}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <ProjectCover
                project={project}
                rounded={false}
                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            )}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="flex items-center gap-3 eyebrow">
            <span>{num}</span>
            <span className="h-px w-6 bg-hairline-strong" />
            <span>{project.category}</span>
          </div>
          <h3 className="display-md mt-4 text-[1.7rem] leading-tight transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-3 text-muted text-pretty">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline px-2.5 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-text">
            View project
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
