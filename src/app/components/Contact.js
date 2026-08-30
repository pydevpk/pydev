"use client";

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";
import LocalTime from "./LocalTime";
import Reveal from "./Reveal";

const EMPTY = { name: "", email: "", message: "", company: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "That doesn't look like a valid email.";
  if (!form.message.trim()) errors.message = "Please enter a message.";
  else if (form.message.trim().length < 10)
    errors.message = "A little more detail, please (10+ characters).";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus({
          state: "success",
          message: "Thanks — your message is on its way. I'll reply soon.",
        });
        setForm(EMPTY);
      } else {
        setStatus({
          state: "error",
          message:
            data.message ||
            "Something went wrong sending that. Email me directly instead.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please email me directly instead.",
      });
    }
  };

  const field =
    "w-full border-b border-hairline-strong bg-transparent py-3 text-text placeholder:text-muted-dim focus:border-accent focus:outline-none";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-hairline px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="flex items-center gap-3 eyebrow">
            <span className="h-px w-8 bg-hairline-strong" />
            Contact
          </div>
          <h2 className="display-md mt-5 text-balance">
            Let&rsquo;s work together.
          </h2>
          <p className="mt-4 text-muted text-pretty">
            Tell me about the problem you&rsquo;re solving. I usually reply
            within a day.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <MdEmail className="text-muted" />
              <a
                href={`mailto:${profile.email}`}
                className="link-underline text-text"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-muted" />
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="text-text"
              >
                {profile.phone}
              </a>
            </div>
            <p className="text-muted">
              {profile.location} · <LocalTime /> local time
            </p>
          </dl>

          <SocialLinks className="mt-8" />
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-7">
          <form onSubmit={onSubmit} noValidate className="space-y-8">
            {/* honeypot */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            {[
              { name: "name", label: "Your name", type: "text" },
              { name: "email", label: "Your email", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label className="eyebrow" htmlFor={f.name}>
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  value={form[f.name]}
                  onChange={onChange}
                  aria-invalid={!!errors[f.name]}
                  className={`${field} mt-2`}
                  placeholder={f.name === "email" ? "you@company.com" : "Jane Doe"}
                />
                {errors[f.name] ? (
                  <p className="mt-2 text-sm text-ember">{errors[f.name]}</p>
                ) : null}
              </div>
            ))}

            <div>
              <label className="eyebrow" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                className={`${field} mt-2 resize-none`}
                placeholder="What are you building, and where do you need help?"
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-ember">{errors.message}</p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status.state === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-text px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent disabled:opacity-60"
              >
                {status.state === "sending" ? "Sending…" : "Send message"}
              </button>
              {status.message ? (
                <p
                  role="status"
                  className={`text-sm ${
                    status.state === "success" ? "text-emerald-400" : "text-ember"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
