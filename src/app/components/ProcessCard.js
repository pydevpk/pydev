export default function ProcessCard({ number, title, desc }) {
    return (
        <div className="w-full playgroud p-10">
            <div className="content flex flex-col justify-between flex-grow min-h-[284px]">
                <div>
                    <span className="inline-block mt-2 rounded-full bg-white/10 px-3 py-1 text-xs">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-gray-400" />
                            <p>Step {number}</p>
                        </div>
                    </span>
                </div>
                <div className="wrap">
                    <h1 className="text-5xl font-bold text-white-800 mb-4">{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}