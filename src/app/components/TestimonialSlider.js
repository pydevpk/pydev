"use client"; // needed if you are in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import VijayImage from "../../../public/clients/vijay.jpeg"
import MostafaImage from "../../../public/clients/mostafa.jpeg"

import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: "Vijaybabu Nakkonda",
        role: "Solution Architect at Nakkonda Technology",
        text: "Pradeep is a great Python Developer. He understands user requirements and do the best to implement within agreed timelines. He is good at Python website backend development with LLM and AI.",
        avatar: VijayImage.src
    },
    {
        name: "Mostafa Qawaqzeh",
        role: "Founder at IshareIt",
        text: "I had the absolute pleasure of working with Pradeep on a challenging project, and I could not recommend him highly enough. He was the star of our team, excelling not only as a developer but also as a key contributor to the strategy planning for software development life cycle. Pradeep’s technical skills, combined with his ability to deeply understand project requirements, made him an irreplaceable part of the team...",
        avatar: MostafaImage.src
    },
];

export default function TestimonialSlider() {
    return (
        <div className="border-left-main border-right-main max-w-4xl mx-auto p-15 relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}