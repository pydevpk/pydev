import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const SITE_URL = "https://pydev.online";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} - ${profile.title}`,
    template: `%s - ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "AI Engineer",
    "AI Agents",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "LLM",
    "Computer Vision",
    "Next.js",
    "Python",
    "Jaipur",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.title}`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#080604",
  colorScheme: "dark",
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "IN",
    },
    url: SITE_URL,
    sameAs: profile.socials.map((s) => s.href),
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "Machine Learning",
      "Generative AI",
      "Computer Vision",
      "Full-Stack Development",
      "Cloud Infrastructure",
    ],
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.name,
      url: `${SITE_URL}/work/${p.slug}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">
        <JsonLd />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
