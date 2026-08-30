export default function StatusPill({ label = "Available", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm text-muted ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}
