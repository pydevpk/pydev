import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow">404 — Project not found</p>
      <h1 className="display-lg mt-4">This project doesn&rsquo;t exist.</h1>
      <Link
        href="/#work"
        className="mt-8 inline-flex rounded-full border border-hairline-strong px-6 py-3 text-sm hover:border-text"
      >
        Browse all work
      </Link>
    </main>
  );
}
