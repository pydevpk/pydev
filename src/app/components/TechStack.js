import Image from "next/image";
import { skillGroups, iconFor } from "@/data/skills";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

const MARQUEE = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "Django",
  "Next.js",
  "React",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL",
  "Redis",
  "OpenCV",
  "Elasticsearch",
];

export default function TechStack() {
  return (
    <section className="border-t border-hairline px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Tech Stack"
          title="The tools and technologies."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.label}>
              <h3 className="eyebrow border-b border-hairline pb-3">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const icon = iconFor(item);
                  return (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1.5 text-[0.8rem] text-muted"
                    >
                      {icon ? (
                        <Image
                          src={icon}
                          alt=""
                          width={14}
                          height={14}
                          className="h-3.5 w-3.5 object-contain"
                        />
                      ) : null}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Marquee duration={36} className="mt-20 border-y border-hairline py-10">
        {MARQUEE.map((name) => {
          const icon = iconFor(name);
          return (
            <span
              key={name}
              className="flex items-center gap-3 text-2xl text-muted-dim"
            >
              {icon ? (
                <Image
                  src={icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain opacity-70"
                />
              ) : null}
              {name}
            </span>
          );
        })}
      </Marquee>
    </section>
  );
}
