// import { ArrowUpRight } from "react-icons/fa6";

export default function ProjectCard({ image, category, title, link }) {
  return (
    <div className="relative w-full rounded-2xl bg-black">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-150 object-cover" />

      {/* Overlay */}
      <div className="absolute absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
        {/* Info */}
        <div className="text-white rounded-xl border border-white/20 bg-black/50 text-white transition hover:bg-white/15 hover:-translate-y-1 w-full p-5">
          <p className="text-sm opacity-70 ">{category}</p>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="inline-block mt-2 rounded-full bg-white/10 px-3 py-1 text-xs">
            <a href={link} target="_blank">Visit</a>
          </span>
        </div>
      </div>
    </div>
  );
}