"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const results = [
    {
        before: "/images/antes1.jpg",
        after: "/images/despues1.jpg",
        label: "Caso 01",
    },
    {
        before: "/images/antes2.jpg",
        after: "/images/despues2.jpg",
        label: "Caso 02",
    },
];

export default function Resultados() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const imagesRef = useRef<HTMLDivElement[]>([]);
    const ctaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 25%",
                    scrub: true,
                },
            });

            tl.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                }
            )
                .fromTo(
                    imagesRef.current,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.96,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.18,
                        ease: "none",
                    },
                    0.2
                )
                .fromTo(
                    ctaRef.current,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "none",
                    },
                    0.75
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#ffffff] py-24 px-6 text-[#25373d]"
        >
            {/* BACKGROUND PREMIUM CLARO */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.12),transparent_36%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/50 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* TITULO */}
                <div ref={titleRef} className="mb-16 text-center">
                    <span className="inline-flex items-center rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580] mb-6">
                        Resultados reales
                    </span>

                    <h2 className="text-3xl md:text-5xl font-semibold mb-5 leading-[1.08]">
                        Esto no es un filtro
                    </h2>

                    <p className="text-base md:text-lg text-[#506065] max-w-2xl mx-auto leading-relaxed">
                        Son cambios reales, planificados con criterio médico,
                        naturalidad y acompañamiento profesional.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-8">
                    {results.map((item, index) => (
                        <div
                            key={item.label}
                            ref={(el) => {
                                if (el) imagesRef.current[index] = el;
                            }}
                            className="group relative overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-[#f5f8f9] p-4 shadow-[0_24px_70px_rgba(37,55,61,0.12)]"
                        >
                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/70 to-transparent" />

                            <div className="mb-4 flex items-center justify-between px-2 pt-2">
                                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#6b8994]">
                                    {item.label}
                                </span>

                                <span className="rounded-full border border-[#83a0ab]/45 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#567580]">
                                    Antes / Después
                                </span>
                            </div>

                            <div className="grid gap-4">
                                {/* ANTES */}
                                <div className="relative overflow-hidden rounded-[1.4rem] bg-[#25373d]">
                                    <img
                                        src={item.before}
                                        alt={`${item.label} antes`}
                                        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25373d]/55 via-transparent to-transparent" />

                                    <span className="absolute left-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#25373d]">
                                        Antes
                                    </span>
                                </div>

                                {/* DESPUÉS */}
                                <div className="relative overflow-hidden rounded-[1.4rem] bg-[#25373d]">
                                    <img
                                        src={item.after}
                                        alt={`${item.label} después`}
                                        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25373d]/55 via-transparent to-transparent" />

                                    <span className="absolute left-4 bottom-4 rounded-full bg-[#83a0ab] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                                        Después
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DISCLAIMER + CTA */}
                <div
                    ref={ctaRef}
                    className="mt-16 rounded-[2rem] border border-[#25373d]/10 bg-[#25373d] p-6 text-white shadow-[0_24px_70px_rgba(37,55,61,0.2)] md:p-8"
                >
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <p className="text-sm uppercase tracking-[0.22em] text-[#83a0ab] mb-2">
                                Evaluación responsable
                            </p>

                            <h3 className="text-2xl font-semibold mb-2">
                                Cada resultado depende de una planificación personalizada.
                            </h3>

                            <p className="text-sm leading-relaxed text-white/70 max-w-2xl">
                                Las imágenes muestran casos reales. La evaluación médica es
                                clave para definir qué resultado puede esperarse en cada
                                paciente.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#83a0ab] bg-white px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                        >
                            QUIERO MI CAMBIO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}