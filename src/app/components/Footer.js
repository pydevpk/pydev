import Link from "next/link";
import { navLinks, profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";
import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <Marquee
        duration={28}
        className="border-b border-hairline py-8 text-muted-dim"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-5xl tracking-tight sm:text-7xl"
          >
            Let&rsquo;s build something
            <span className="mx-8 text-accent">✦</span>
          </span>
        ))}
      </Marquee>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="font-display text-2xl text-text">
              Pradeep<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {profile.title} — {profile.availability.toLowerCase()}.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-4 inline-block text-sm text-text"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex gap-14">
            <nav className="flex flex-col gap-2">
              <span className="eyebrow mb-1">Sitemap</span>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted hover:text-text"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="eyebrow mb-1">Elsewhere</span>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Love by <a href="https://pydev.online">pydev</a>.</p>
          <a href="#top" className="hover:text-text">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
