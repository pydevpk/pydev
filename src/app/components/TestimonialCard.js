import Image from "next/image";

export default function TestimonialCard({ name, role, text, avatar }) {
  return (
    <div className="w-full flex flex-col items-center shadow-md rounded-2xl p-6">
      <Image
        src={avatar}
        alt={name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full border-2 border-gray-200 mb-4"
      />
      <p className="text-gray-600 italic text-center mb-4">“{text}”</p>
      <h3 className="text-lg text-gray-900">{name}</h3>
      <span className="text-sm text-gray-500">{role}</span>
    </div>
  );
}