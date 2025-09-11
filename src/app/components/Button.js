export default function Button({text}) {
  return (
    <a
      href="#contact"
      className="inline-block px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition"
    >
      {text}
    </a>
  );
}