"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ProcessCard from "./ProcessCard";

export default function ProcessScroller() {
    const cards = [
        {
            "id": 1,
            "title": "Requirement Gathering & Understanding",
            "desc": "Talk with stakeholders/clients/team to understand what problem needs solving."
        },
        {
            "id": 2,
            "title": "Research & Feasibility",
            "desc": "Explore tools, frameworks, libraries, and feasibility of requested features."
        },
        {
            "id": 3,
            "title": "System Design & Architecture",
            "desc": "Define how the system will work. Break down into components."
        },
        {
            "id": 4,
            "title": "UI/UX Design",
            "desc": "Create/Understand wireframes, mockups, or prototypes."
        },
        {
            "id": 5,
            "title": "Development (Agile Iterations)",
            "desc": "Break down into sprints and implement feature by feature."
        },
        {
            "id": 6,
            "title": "Testing & QA",
            "desc": "Unit tests, integration tests, manual testing, and UAT (User Acceptance Testing)."
        },
        {
            "id": 7,
            "title": "Deployment",
            "desc": "Push to production with security in place."
        },
        {
            "id": 8,
            "title": "Maintenance & Monitoring",
            "desc": "Monitor performance, error logs, user feedback."
        },
        {
            "id": 9,
            "title": "Documentation & Knowledge Transfer",
            "desc": "Write developer docs, API docs, and user guides."
        }
    ]

    return (
        <div className="border-left-main border-right-main max-w-4xl mx-auto p-5 lg:p-15 relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <h1 className="text-7xl font-bold text-white-800 mb-4 text-center">
                Work Process
            </h1>

            <Swiper
                modules={[Autoplay]}
                direction="vertical"
                spaceBetween={16}
                slidesPerView={1} 
                loop={true} 
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                }}
                speed={800} 
                className="h-[400px]"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={card.id}>
                        <ProcessCard number={index + 1} title={card.title} desc={card.desc} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
