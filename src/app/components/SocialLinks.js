import { FaXTwitter, FaDribbble, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function SocialLinks() {
  const links = [
    { href: "https://twitter.com", icon: <FaXTwitter />, label: "Twitter" },
    { href: "https://dribbble.com", icon: <FaDribbble />, label: "Dribbble" },
    { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
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
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-black text-xl hover:bg-black/70 transition"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}