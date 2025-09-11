// components/ServiceCard.js
export default function ServiceCard({ icon, title, index, services }) {
  return (
    <div className="bg-neutral-900 max-w-3xl mx-auto rounded-2xl p-20 text-white shadow-lg min-h-[400px] flex flex-col justify-between">
        <div className="text-end">
            <span className="text-gray-500 text-sm">({index})</span>
        </div>
        <p className="mb-3">Services</p>
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-red-600">
          {icon}
        </div>
        <h2 className="text-5xl font-semibold flex-1">
          {title}
        </h2>
      </div>

      {/* Services List */}
      <ul className="mt-6 space-y-2 text-gray-300 text-sm">
        {services.map((service, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <p className="text-white-500">{service}</p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-6 flex justify-between text-xs text-gray-500">
        <span>🌍 Available Worldwide</span>
        <a href="#" className="text-blue-400 hover:underline">
          Contact me →
        </a>
      </div>
    </div>
  );
}
