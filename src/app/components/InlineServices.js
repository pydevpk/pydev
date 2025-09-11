"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import InlineServiceCard from "./InlineServiceCard";
import "swiper/css";
import "swiper/css/navigation";

export default function InlineService() {
  const cards = [
    "Custom ML/DL model development",
    "Computer vision & NLP applications",
    "Recommendation systems & personalization",
    "Predictive analytics & forecasting",
    "Generative AI (text, images, video)",
    "REST & GraphQL API design",
    "Microservices & scalable architectures",
    "Database design & optimization (SQL/NoSQL)",
    "Real-time messaging systems",
    "Modern Web and dashboard development",
    "Scalable and secure bakcend system",
    "Responsive, secure, and high-performing apps",
    "Mobile app backend and API integration",
    "AI-driven automation workflows",
    "RPA (Robotic Process Automation)",
    "Data pipelines, ETL processes & Data warehousing",
    "Automated reporting & dashboards",
    "AWS, GCP, Azure deployment",
    "CI/CD pipelines & infrastructure as code",
    "Containerization with Docker & Kubernetes",
    "Performance tuning & cost optimization",
    "ETL pipelines & batch/real-time data processing",
    "Feature engineering & data preprocessing",
    "Secure API and app development",
    "Authentication & authorization",
    "Enterprise-grade data governance",
    "AI adoption strategy for businesses",
    "SaaS product architecture & scaling",
    "Digital transformation advisory"
  ]
  return (
    <div className="w-full max-w-6xl mx-auto py-5 relative">
      {/* Header with controls */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900"></h2>
        <div className="flex gap-2">
          <button
            className="p-2 rounded-full"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-full"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swiper container */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={3} // <-- number of cards visible at once
        loop={true} // <-- infinite loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2000, // <-- auto scroll every 2s
          disableOnInteraction: false, // <-- keep autoplay after manual swipe
        }}
        speed={1000} // <-- smooth transition speed
      >
        {cards.map((title, index) => (
          <SwiperSlide key={index+1}>
            <InlineServiceCard title={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
