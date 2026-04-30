"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            titleRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        )
            .fromTo(
                textRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.6"
            )
            .fromTo(
                buttonRef.current,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            );
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden pt-20">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center scale-105" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6 max-w-3xl">

                {/* TITLE */}
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl font-semibold mb-6 leading-tight"
                >
                    Esto no es un filtro.
                    <br />
                    <span className="text-gray-300">
                        Es un cambio real.
                    </span>
                </h1>

                {/* TEXT */}
                <p
                    ref={textRef}
                    className="text-lg text-gray-300 mb-10"
                >
                    Resultados naturales, evaluación personalizada y acompañamiento en todo el proceso.
                </p>

                {/* BUTTON */}
                <a
                    ref={buttonRef}
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    className="inline-block border border-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition opacity-100"
                >
                    CONTACTAR
                </a>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
                ↓
            </div>
        </section>
    );
}