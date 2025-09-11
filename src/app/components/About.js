import InlineService from "./InlineServices";

export default function About() {
    return (
        <section id="about" className="border-left-main border-right-main max-w-4xl mx-auto p-15 relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <div className="w-full">
                <div className="flex w-full">
                    <div className="basis-1/3 px-4 py-10">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-gray-400" />
                            <p>About Me</p>
                        </div>
                    </div>

                    <div className="basis-3/4 px-4 py-10">
                        <h1 className="text-4xl font-semibold flex-1">
                            Behind every great design is an even greater story
                        </h1>
                        <p className="mt-10">
                            Every design has a starting point, and for truly impactful visuals. It's the narrative that guides the creative process, ensuring the final product resonates with meaning and purpose. We believe that understanding the story is paramount.
                        </p>
                    </div>
                </div>
                <div className="p-5 playgroud">
                    <InlineService />
                </div>
            </div>
        </section>
    );
}