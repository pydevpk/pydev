// components/TechCard.js
export default function TechCard({ logo, name, description }) {
  return (
    <div className="bg-neutral-900 w-full rounded-2xl p-6 h-[280px] flex flex-col items-center justify-center text-center text-white shadow-md">
      <div className="w-100 h-100 flex items-center justify-center rounded-xl mb-4">
        {logo}
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}