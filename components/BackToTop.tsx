"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/25 bg-black/60 text-white text-sm md:text-base backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black ${visible
                    ? "opacity-80 translate-y-0 pointer-events-auto hover:opacity-100"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            ↑
        </button>
    );
}