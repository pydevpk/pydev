import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display-lg mt-4">Page not found.</h1>
      <p className="mt-3 text-muted">
        The page you&rsquo;re looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-hairline-strong px-6 py-3 text-sm hover:border-text"
      >
        Back home
      </Link>
    </main>
  );
}
