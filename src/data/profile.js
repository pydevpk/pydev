import {
  FaXTwitter,
  FaLinkedinIn,
  FaUpwork,
  FaInstagram,
} from "react-icons/fa6";

export const SHOW_EDUCATION = true;

export const profile = {
  name: "Pradeep Kumar Yadav",
  firstName: "Pradeep",
  title: "Senior Full-Stack & AI Engineer",
  // Value proposition used as the hero headline.
  headline: "I build intelligent, scalable, cloud-native systems.",
  tagline:
    "AI/ML and full-stack engineer turning real business problems into production software — from model to AI agent to endpoint to interface.",
  location: "Jaipur, India",
  timezone: "Asia/Kolkata",
  email: "info@pydev.online",
  phone: "+91 830 243 2383",
  availability: "Available for contract & freelance work",

  summary:
    "AI/ML and Full-Stack Engineer with 5 years of experience building intelligent, scalable, and cloud-native applications. Proven expertise in designing and deploying machine learning and AI models, backend and frontend development, and cloud infrastructure. Skilled in end-to-end automation, microservices architecture, API development, CI/CD pipelines, containerization, and system security — solving real-world business challenges through AI integration, workflow automation, and high-performance backend systems.",

  stats: [
    { value: "5+", label: "Years building production systems" },
    { value: "15+", label: "Projects shipped end to end" },
    { value: "4", label: "Domains: AI, full-stack, automation, cloud" },
    { value: "20+", label: "AWS & cloud services in production" },
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
  ],

  education: {
    degree: "B.Tech, Computer Science",
    institution: "Vivekananda Global University, Jaipur",
    period: "2016 – 2020",
  },

  socials: [
    {
      href: "https://www.linkedin.com/in/pydev/",
      label: "LinkedIn",
      handle: "in/pydev",
      icon: FaLinkedinIn,
    },
    {
      href: "https://www.upwork.com/freelancers/~01123953b888bc1202",
      label: "Upwork",
      handle: "Top Rated",
      icon: FaUpwork,
    },
    {
      href: "https://x.com/mrraosahab",
      label: "X (Twitter)",
      handle: "@mrraosahab",
      icon: FaXTwitter,
    },
    {
      href: "https://www.instagram.com/mr.raosahab_",
      label: "Instagram",
      handle: "@mr.raosahab_",
      icon: FaInstagram,
    },
  ],
};

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];
