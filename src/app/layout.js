import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pradeep K Yadav - Portfolio",
  description: `I am AI/ML and Full-Stack Engineer with 5 years of experience in building intelligent,
scalable, and cloud-native applications. Proven expertise in designing and
deploying machine learning and AI models, backend and frontend
development, and cloud infrastructure. Skilled in end-to-end automation,
microservices architecture, API development, CI/CD pipelines, containerization,
and system security. Adept at solving real-world business challenges through AI
integration, workflow automation, and high-performance backend systems.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
