import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  id,
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-hairline-strong" />
          <span className="eyebrow" id={id}>
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="display-md mt-5 text-balance">{title}</h2>
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
