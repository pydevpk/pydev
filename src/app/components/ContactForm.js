"use client"; // if you are using Next.js App Router

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // 🔹 disable form before request
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        alert(JSON.stringify(data?.message));
        setLoading(false); // 🔹 enable form after response
        if (data.success) {
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <section id="contact" className="border-left-main border-right-main max-w-4xl mx-auto p-15 relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <div className="w-full playgroud rounded-2xl p-20">
                <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                    <p>Contact Me</p>
                </div>
                <h2 className="text-7xl text-white-800 mb-6 text-left">
                    Contact For Work
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 mt-20">
                    {/* Name */}
                    <div>
                        <label className="block text-lg font-medium text-white-700 mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 px-0 py-2"
                            placeholder="Enter Your Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-lg font-medium text-white-700 mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 px-0 py-2"
                            placeholder="Enter Your Email"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-lg font-medium text-white-700 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                            className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 px-0 py-2 resize-none"
                            placeholder="Write me here..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="w-50 border border-gray-300 text-white py-2 rounded-lg hover:border-gray-600 transition"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}