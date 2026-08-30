"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, profile } from "@/data/profile";
import LocalTime from "./LocalTime";
import StatusPill from "./StatusPill";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-hairline bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-text"
          onClick={() => setOpen(false)}
        >
          Pradeep<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 text-xs text-muted lg:flex">
          <LocalTime />
          <span className="h-3 w-px bg-hairline-strong" />
          <StatusPill />
        </div>

        <button
          type="button"
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-text transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-text transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-bg px-5 pt-24 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-hairline py-5 font-display text-3xl text-text"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted">
              <LocalTime />
              <StatusPill />
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block text-sm text-accent"
            >
              {profile.email}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
