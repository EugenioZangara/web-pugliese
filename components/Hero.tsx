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
        <section className="relative h-screen flex items-center justify-center text-[#ffffff] overflow-hidden pt-20 bg-[#25373d]">
            {/* VIDEO BACKGROUND */}
            <video
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.72] contrast-110 saturate-[0.85]"
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            />

            {/* OVERLAY PRINCIPAL DE MARCA */}
            <div className="absolute inset-0 bg-[#25373d]/75" />

            {/* GRADIENT DE PROFUNDIDAD */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#25373d]/85 via-[#25373d]/45 to-[#25373d]/95" />

            {/* LUZ SUAVE DE IDENTIDAD */}
            <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#83a0ab]/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#567580]/25 blur-3xl" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <span
                    ref={eyebrowRef}
                    className="inline-block text-xs md:text-sm tracking-[0.35em] uppercase text-[#83a0ab] mb-6"
                >
                    Cirugía plástica · Resultados naturales
                </span>

                <h1
                    ref={titleRef}
                    className="text-4xl md:text-7xl font-semibold mb-8 leading-[1.05] text-[#ffffff]"
                >
                    Más que una cirugía.
                    <br />
                    <span className="text-[#83a0ab]">
                        Un cambio real, acompañado.
                    </span>
                </h1>

                <p
                    ref={textRef}
                    className="text-base md:text-lg text-[#ffffff]/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Evaluación personalizada, resultados naturales y acompañamiento real
                    en cada etapa del proceso.
                </p>

                <a
                    ref={buttonRef}
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-[#83a0ab] bg-[#ffffff] px-8 py-4 text-sm font-medium tracking-wide text-[#25373d] shadow-[0_18px_45px_rgba(37,55,61,0.35)] transition hover:bg-[#83a0ab] hover:text-[#ffffff] hover:border-[#83a0ab] hover:-translate-y-0.5"
                >
                    RESERVAR CONSULTA
                </a>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#83a0ab] text-sm animate-bounce">
                ↓
            </div>
        </section>
    );
}