import { projects } from "@/data/projects";
import SectionHeader from "./SectionHeader";
import ProjectRow from "./ProjectRow";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Softwares, shipped end to end."
          intro="Recommendation and forecasting engines, real-time computer vision, AI agents and full-stack platforms — each taken from problem statement to production."
        />

        <div className="mt-14">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
