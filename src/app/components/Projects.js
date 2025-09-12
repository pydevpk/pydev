import ProjectCard from "./ProjectCard";

import recommendationSystemImg from "../../../public/project/AI-Recommendation-jewelry.png"
import Forecasting from "../../../public/project/ai-forecasting.png"
import VisualSearch from "../../../public/project/ai-visual-search.png"
import Financial from "../../../public/project/ai-finanticx.png"
import SurveillanceCamera from "../../../public/project/ai-surveillance.png"
import Kroolo from "../../../public/project/ai-kroolo.png"

export default function Projects() {
    return (
        <section id="projects" className="border-left-main border-right-main max-w-4xl mx-auto p-5 lg:p-15 relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <div className="flex items-center gap-2 mb-2">
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <p>Projects</p>
            </div>
            <ProjectCard
                image={recommendationSystemImg.src}
                category="AI & Data Solutions"
                title="Jewelry Recommendation System"
                link="https://www.ashidiamonds.com/"
            />
            <ProjectCard
                image={Forecasting.src}
                category="AI & Data Solutions"
                title="Sales Demand Forecasting System"
                link="https://www.ashidiamonds.com/"
            />
            <ProjectCard
                image={VisualSearch.src}
                category="AI & Data Solutions"
                title="Visual Product Search"
                link="https://www.ashidiamonds.com/"
            />
            <ProjectCard
                image={Financial.src}
                category="AI & Data Solutions"
                title="Finanticx – AI-Driven Financial Platform"
                link="https://www.linkedin.com/in/vijaybabu-nakkonda-a5a81465/"
            />
            <ProjectCard
                image={Kroolo.src}
                category="AI & Data Solutions"
                title="Kroolo – AI-Powered Productivity Tool"
                link="https://kroolo.com/"
            />
            <ProjectCard
                image={SurveillanceCamera.src}
                category="AI & Data Solutions"
                title="Surveillance Security Management Tool"
            />
        </section>
    );
}