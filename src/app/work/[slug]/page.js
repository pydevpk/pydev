import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  projects,
  getProject,
  getAdjacentProjects,
} from "@/data/projects";
import { profile } from "@/data/profile";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";
import ProjectCover from "@/app/components/ProjectCover";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} — Case Study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const meta = [
    ["Role", project.role],
    ["Context", project.context],
    // ["Year", project.year],
    ["Category", project.category],
  ];

  return (
    <>
      <Nav />
      <main id="top" className="px-5 pt-32 sm:px-8">
        <article className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              href="/#work"
              className="link-underline text-sm text-muted hover:text-text"
            >
              ← All work
            </Link>
            <div className="mt-6 flex items-center gap-3 eyebrow">
              <span className="h-px w-8 bg-hairline-strong" />
              {project.category}
            </div>
            <h1 className="display-lg mt-5 text-balance">{project.name}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted text-pretty">
              {project.summary}
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-surface"
          >
            <div className="relative aspect-[16/9] w-full">
              {project.cover ? (
                <Image
                  src={project.cover}
                  alt={project.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              ) : (
                <ProjectCover
                  project={project}
                  rounded={false}
                  className="h-full w-full"
                />
              )}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3">
            <Reveal className="md:col-span-1">
              <dl className="space-y-5">
                {meta.map(([k, v]) => (
                  <div key={k} className="border-t border-hairline pt-3">
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-1 text-sm text-text">{v}</dd>
                  </div>
                ))}
                {project.liveLink ? (
                  <div className="border-t border-hairline pt-3">
                    <dt className="eyebrow">Live</dt>
                    <dd className="mt-1 text-sm">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent link-underline"
                      >
                        Visit site ↗
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </Reveal>

            <div className="md:col-span-2">
              <Reveal>
                <h2 className="eyebrow">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-pretty">
                  {project.overview}
                </p>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="eyebrow">What I did</h2>
                <ul className="mt-5 space-y-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed text-muted text-pretty">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="eyebrow">Tech</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-20 rounded-2xl border border-hairline bg-surface p-8 text-center sm:p-12">
            <p className="font-display text-2xl text-balance sm:text-3xl">
              Have a project like this in mind?
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex rounded-full bg-text px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              Start a conversation
            </Link>
          </Reveal>

          <nav className="mt-16 grid gap-4 border-t border-hairline py-10 sm:grid-cols-2">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="group">
                <span className="eyebrow">← Previous</span>
                <p className="mt-1 text-text group-hover:text-accent">
                  {prev.name}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group sm:text-right"
              >
                <span className="eyebrow">Next →</span>
                <p className="mt-1 text-text group-hover:text-accent">
                  {next.name}
                </p>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
