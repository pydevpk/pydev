import { capabilities } from "@/data/capabilities";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 border-t border-hairline px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="Four things I do, deeply."
          intro="Most projects pull from more than one of these — the value is in connecting them into a single working system."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} className="bg-bg p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-surface text-accent">
                    <Icon size={20} />
                  </span>
                  <span className="eyebrow">({c.index})</span>
                </div>
                <h3 className="display-md mt-6 text-2xl">{c.title}</h3>
                <p className="mt-3 text-muted text-pretty">{c.blurb}</p>
                <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
