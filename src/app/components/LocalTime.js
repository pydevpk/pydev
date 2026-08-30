"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function LocalTime({ className = "" }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: profile.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time ? `${time} IST` : "—"}
    </span>
  );
}
