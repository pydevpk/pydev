import {FaLinkedinIn} from "react-icons/fa6";
import Image from "next/image";

export default function TestimonialCard({ name, role, text, avatar, linkedIn }) {
  return (
    <div className="w-full flex flex-col items-center shadow-md rounded-2xl p-6">
      <Image
        src={avatar}
        alt={name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full border-2 border-gray-200 mb-4"
      />
      <p className="text-white-600 italic text-center mb-4">“{text}”</p>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-lg text-white-900">{name}</h3>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-black text-xl hover:bg-white/70 transition">
          <FaLinkedinIn className="mr-2" />        
          </a>
      </div>
      <span className="text-sm text-white-500">{role}</span>
    </div>
  );
}