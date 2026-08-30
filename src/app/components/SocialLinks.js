import { profile } from "@/data/profile";

export default function SocialLinks({ variant = "icon", className = "" }) {
  if (variant === "list") {
    return (
      <ul className={`flex flex-col ${className}`}>
        {profile.socials.map((s) => {
          const Icon = s.icon;
          return (
            <li key={s.label} className="border-b border-hairline last:border-0">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 text-sm"
              >
                <span className="flex items-center gap-3 text-text">
                  <Icon className="text-muted" />
                  {s.label}
                </span>
                <span className="text-muted transition-colors group-hover:text-accent">
                  {s.handle} ↗
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {profile.socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-text hover:text-text"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
