"use client";
// components/ServicesSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ServiceCard from "./ServiceCard";
// import { PenTool, Layout, Code, Cpu } from "lucide-react"; // Example icons
import { FaMicrochip, FaDev, FaNetworkWired, FaGears } from "react-icons/fa6";

const services = [
    {
        icon: <FaMicrochip className="text-white" size={40} />,
        title: "AI & Data Solutions",
        index: "01",
        services: [
            "Unmatched Precision in Every Build",
            "Innovative AI & Data Solutions",
            "Future-Ready Digital Transformation"
        ],
    },
    {
        icon: <FaDev className="text-white" size={40} />,
        title: "Full-Stack Development",
        index: "02",
        services: [
            "Unmatched Precision in Every Build",
            "Innovative AI & Data Solutions",
            "Future-Ready Digital Transformation"
        ],
    },
    {
        icon: <FaNetworkWired className="text-white" size={40} />,
        title: "Workflow & Business Automation",
        index: "03",
        services: [
            "Unmatched Precision in Every Build",
            "Innovative AI & Data Solutions",
            "Future-Ready Digital Transformation"
        ],
    },
    {
        icon: <FaGears className="text-white" size={40} />,
        title: "Cloud & DevOps",
        index: "04",
        services: [
            "Unmatched Precision in Every Build",
            "Innovative AI & Data Solutions",
            "Future-Ready Digital Transformation"
        ],
    },
];

export default function ServicesSlider() {
    return (
        <section className="border-left-main border-right-main max-w-4xl mx-auto p-15 relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: true }}
                loop={true}
                modules={[Autoplay]}
            >
                {services.map((service, i) => (
                    <SwiperSlide key={i}>
                        <ServiceCard {...service} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}