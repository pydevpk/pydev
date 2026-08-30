/**
 * Deterministic cover art for projects with no screenshot.
 * Same slug always renders the same composition.
 */

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function deriveInitials(name) {
  // Use the part before an em/en dash — the actual product name.
  const base = name.split(/[—–-]/)[0].trim();
  const words = base.split(/\s+/).filter(Boolean);
  if (words.length > 1) {
    return words.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }
  const word = words[0] || name;
  if (word === word.toUpperCase()) return word.slice(0, 5); // acronym, e.g. HTVMS
  const camel = word.match(/[A-Z][a-z]*/g); // FitBuddy -> Fit, Buddy
  if (camel && camel.length > 1) {
    return camel.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }
  return word.slice(0, 2).toUpperCase();
}

const PALETTES = [
  ["#E9A23B", "#F04E2C"],
  ["#7C5CFF", "#E9A23B"],
  ["#2CC7A6", "#1E6FE9"],
  ["#F04E2C", "#8B1E3F"],
  ["#3B82F6", "#7C5CFF"],
];

export default function ProjectCover({ project, className = "", rounded = true }) {
  const seed = hash(project.slug);
  const [c1, c2] = PALETTES[seed % PALETTES.length];
  const initials = deriveInitials(project.name);
  const gid = `g-${project.slug}`;
  const rings = 3 + (seed % 3);

  return (
    <svg
      viewBox="0 0 800 500"
      role="img"
      aria-label={`${project.name} — cover art`}
      className={`${className} ${rounded ? "rounded-lg" : ""}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="#0f0d0c" />
      <rect width="800" height="500" fill={`url(#${gid})`} opacity="0.16" />
      <g
        stroke={c1}
        strokeWidth="1"
        fill="none"
        opacity="0.28"
        transform={`translate(${560 + (seed % 60)} ${140 + (seed % 40)})`}
      >
        {Array.from({ length: rings }).map((_, i) => (
          <circle key={i} r={60 + i * 46} />
        ))}
      </g>
      <g stroke="#ffffff" strokeWidth="1" opacity="0.05">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="500" />
        ))}
      </g>
      <text
        x="56"
        y="300"
        fill="#ededed"
        fontSize="180"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="400"
        letterSpacing="-6"
      >
        {initials}
      </text>
      <text
        x="58"
        y="360"
        fill="#a59e95"
        fontSize="20"
        fontFamily="ui-monospace, monospace"
        letterSpacing="2"
      >
        {project.category.toUpperCase()}
      </text>
    </svg>
  );
}
