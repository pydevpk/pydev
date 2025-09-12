"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PradeepLogo from "../../../public/Pradeep.png"

export default function Navbar() {
    const [time, setTime] = useState("");
    const now = new Date();

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const indianTime = now.toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });
            setTime(indianTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <nav className="bg-black text-white max-w-4xl mx-auto shadow-md border-left-main border-right-main p-5 lg:p-10">
            <div className="flex justify-between items-center">

                <div className="hidden md:block">
                    <Image src={PradeepLogo.src} width={150} height={150} alt="Pradeep Logo"></Image>
                </div>

                <div className="hidden md:block text-sm text-green-400">
                    ● Available
                </div>

                <div className="text-sm w-full md:w-auto text-center text-gray-300 md:text-right">
                    <p>Jaipur, India</p>
                    <p>{time}</p>
                </div>
            </div>
        </nav>
    );
}