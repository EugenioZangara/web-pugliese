"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const eyebrowRef = useRef<HTMLSpanElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const buttonRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            eyebrowRef.current,
            { y: 24, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
            }
        )
            .fromTo(
                titleRef.current,
                { y: 48, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.45"
            )
            .fromTo(
                textRef.current,
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                },
                "-=0.55"
            )
            .fromTo(
                buttonRef.current,
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            );
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden pt-20">
            {/* VIDEO BACKGROUND */}
            <video
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-110"
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/65" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <span
                    ref={eyebrowRef}
                    className="inline-block text-xs md:text-sm tracking-[0.35em] uppercase text-white/70 mb-6"
                >
                    Cirugía plástica · Resultados naturales
                </span>

                <h1
                    ref={titleRef}
                    className="text-4xl md:text-7xl font-semibold mb-8 leading-[1.05]"
                >
                    Más que una cirugía.
                    <br />
                    <span className="text-white/70">Un cambio real, acompañado.</span>
                </h1>

                <p
                    ref={textRef}
                    className="text-base md:text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Evaluación personalizada, resultados naturales y acompañamiento real
                    en cada etapa del proceso.
                </p>

                <a
                    ref={buttonRef}
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    className="inline-block border border-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition"
                >
                    RESERVAR CONSULTA
                </a>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
                ↓
            </div>
        </section>
    );
}