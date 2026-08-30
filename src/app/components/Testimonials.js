import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="border-t border-hairline px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Words" title="What collaborators say." />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal key={t.name} className="flex flex-col bg-bg p-8 sm:p-10">
              <blockquote className="font-display text-xl leading-snug text-text text-pretty sm:text-2xl">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-hairline pt-6">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-hairline object-cover grayscale"
                />
                <div className="flex-1">
                  <p className="text-sm text-text">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
                <a
                  href={t.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.name} on LinkedIn`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-muted hover:border-text hover:text-text"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
