import Link from "next/link";

export default function ServiceCard({ icon, title, index, services }) {
    return (
        <div className="bg-neutral-900 max-w-3xl mx-auto rounded-2xl p-5 lg:p-20 text-white shadow-lg min-h-[400px] flex flex-col justify-between">
            <div className="text-end">
                <span className="text-gray-500 text-sm">({index})</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <p>Services</p>
            </div>
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-red-600">
                    {icon}
                </div>
                <h2 className="text-xl lg:text-5xl font-semibold flex-1">
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
                <Link
                className="text-blue-400 hover:underline"
                href="#contact"
                >
                    Contact me →
                </Link>
            </div>
        </div>
    );
}
