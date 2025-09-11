import { FaXTwitter, FaLinkedinIn, FaInstagram, FaUpwork } from "react-icons/fa6";

export default function SocialLinks() {
  const links = [
    { href: "https://x.com/mrraosahab", icon: <FaXTwitter />, label: "Twitter" },
    { href: "https://www.linkedin.com/in/pydev/", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { href: "https://www.upwork.com/freelancers/~01123953b888bc1202", icon: <FaUpwork />, label: "Upwork" },
    { href: "https://www.instagram.com/mr.raosahab_", icon: <FaInstagram />, label: "Instagram" }
  ];

  return (
    <div className="flex gap-4 justify-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-black text-xl hover:bg-white/70 transition"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}