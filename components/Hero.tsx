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
        <section
            className="relative flex h-screen items-center justify-center overflow-hidden bg-[#25373d] pt-20 text-[#ffffff]"
            aria-labelledby="hero-title"
        >
            {/* VIDEO BACKGROUND */}
            <video
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover grayscale blur-[1.5px] brightness-[0.82] contrast-90 saturate-0"
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
            />

            {/* OVERLAY SUAVE DE MARCA */}
            <div className="absolute inset-0 bg-[#25373d]/42" />

            {/* GRADIENT DE LECTURA */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#25373d]/52 via-[#25373d]/20 to-[#25373d]/74" />

            {/* VIÑETA LATERAL SUAVE */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#25373d]/28 via-transparent to-[#25373d]/28" />

            {/* LUCES DE IDENTIDAD */}
            <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#83a0ab]/14 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#567580]/16 blur-3xl" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-4xl px-6 text-center">
                <span
                    ref={eyebrowRef}
                    className="mb-6 inline-block text-xs uppercase tracking-[0.35em] text-[#d7e4e8] md:text-sm"
                >
                    Cirugía plástica · Resultados naturales
                </span>

                <h1
                    id="hero-title"
                    ref={titleRef}
                    className="mb-8 text-4xl font-semibold leading-[1.05] text-[#ffffff] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:text-7xl"
                >
                    Más que una cirugía.
                    <br />
                    <span className="text-[#c7dce3]">
                        Un cambio real, acompañado.
                    </span>
                </h1>

                <p
                    ref={textRef}
                    className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#ffffff]/88 drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:text-lg"
                >
                    Evaluación personalizada, resultados naturales y acompañamiento real
                    en procedimientos como cirugía mamaria, rinoplastia, abdomen, glúteos
                    y liposucción.
                </p>

                <a
                    ref={buttonRef}
                    href="https://wa.me/5491124793160"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reservar consulta por WhatsApp con el Dr. Víctor Pugliese"
                    className="inline-block rounded-full border border-[#ffffff]/80 bg-[#ffffff] px-8 py-4 text-sm font-medium tracking-wide text-[#25373d] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-[#83a0ab] hover:bg-[#83a0ab] hover:text-[#ffffff]"
                >
                    RESERVAR CONSULTA
                </a>
            </div>

            {/* SCROLL INDICATOR */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-sm text-[#d7e4e8]"
                aria-hidden="true"
            >
                ↓
            </div>
        </section>
    );
}