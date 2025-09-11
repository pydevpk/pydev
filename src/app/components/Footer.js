"use client";

import Image from "next/image";
import ProfileImage from "../../../public/profile.jpeg"
import PradeepLogo from "../../../public/Pradeep.png"
import SocialLinks from "./SocialLinks";

export default function Footer() {
    return (
        <div className="border-left-main border-right-main max-w-4xl mx-auto p-15 text-center">
            {/* Profile Image */}
            <Image
                src={ProfileImage.src}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
            />

            {/* Name */}
            {/* <h2 className="text-xl font-semibold text-gray-800">Pradeep K Yadav</h2> */}
            <div>
                <Image src={PradeepLogo.src} width={150} height={150} alt="Pradeep Logo" className="mx-auto"></Image>
            </div>

            {/* Designation */}
            <p className="text-gray-500 mb-4">Sr Full Stack Engineer | AI Engineer | Backend Specialist</p>

            {/* Marquee */}
            <marquee className="text-white-600 font-medium">
                <div className="flex">
                    <div className="flex items-center gap-2">
                        <p className="text-6xl">Book A Call</p>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                        <span className="w-6 h-6 rounded-full bg-gray-400" />
                        <p className="text-6xl">Book A Call</p>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                        <span className="w-6 h-6 rounded-full bg-gray-400" />
                        <p className="text-6xl">Book A Call</p>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                        <span className="w-6 h-6 rounded-full bg-gray-400" />
                        <p className="text-6xl">Book A Call</p>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                        <span className="w-6 h-6 rounded-full bg-gray-400" />
                        <p className="text-6xl">Book A Call</p>
                    </div>
                </div>
            </marquee>
            <div className="mt-10">
                <SocialLinks />
            </div>
        </div>
    );
}