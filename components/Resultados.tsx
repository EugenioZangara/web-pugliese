"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const results = [
    {
        before: "/images/antes1.jpg",
        after: "/images/despues1.jpg",
        label: "Caso 01",
        procedure: "Cirugía plástica estética",
    },
    {
        before: "/images/antes2.jpg",
        after: "/images/despues2.jpg",
        label: "Caso 02",
        procedure: "Resultado natural",
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
            className="relative overflow-hidden bg-[#ffffff] px-6 py-24 text-[#25373d]"
            aria-labelledby="resultados-title"
        >
            {/* BACKGROUND PREMIUM CLARO */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.12),transparent_36%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/50 to-transparent" />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* TITULO */}
                <div ref={titleRef} className="mb-16 text-center">
                    <span className="mb-6 inline-flex items-center rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580]">
                        Resultados reales
                    </span>

                    <h2
                        id="resultados-title"
                        className="mb-5 text-3xl font-semibold leading-[1.08] md:text-5xl"
                    >
                        Esto no es un filtro.
                        <br />
                        <span className="text-[#567580]">
                            Son resultados antes y después.
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#506065] md:text-lg">
                        Casos reales de cirugía plástica estética, planificados con
                        criterio médico, naturalidad y acompañamiento profesional.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-8 md:grid-cols-2">
                    {results.map((item, index) => (
                        <article
                            key={item.label}
                            ref={(el) => {
                                if (el) imagesRef.current[index] = el;
                            }}
                            className="group relative overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-[#f5f8f9] p-4 shadow-[0_24px_70px_rgba(37,55,61,0.12)]"
                        >
                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/70 to-transparent" />

                            <div className="mb-4 flex items-center justify-between px-2 pt-2">
                                <div>
                                    <span className="block text-xs font-medium uppercase tracking-[0.24em] text-[#6b8994]">
                                        {item.label}
                                    </span>
                                    <span className="mt-1 block text-xs text-[#506065]/70">
                                        {item.procedure}
                                    </span>
                                </div>

                                <span className="rounded-full border border-[#83a0ab]/45 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#567580]">
                                    Antes / Después
                                </span>
                            </div>

                            <div className="grid gap-4">
                                {/* ANTES */}
                                <div className="relative overflow-hidden rounded-[1.4rem] bg-[#25373d]">
                                    <img
                                        src={item.before}
                                        alt={`${item.label} - antes del procedimiento de cirugía plástica`}
                                        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25373d]/55 via-transparent to-transparent" />

                                    <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#25373d]">
                                        Antes
                                    </span>
                                </div>

                                {/* DESPUÉS */}
                                <div className="relative overflow-hidden rounded-[1.4rem] bg-[#25373d]">
                                    <img
                                        src={item.after}
                                        alt={`${item.label} - después del procedimiento con resultado natural`}
                                        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25373d]/55 via-transparent to-transparent" />

                                    <span className="absolute bottom-4 left-4 rounded-full bg-[#83a0ab] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                                        Después
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* DISCLAIMER + CTA */}
                <div
                    ref={ctaRef}
                    className="mt-16 rounded-[2rem] border border-[#25373d]/10 bg-[#25373d] p-6 text-white shadow-[0_24px_70px_rgba(37,55,61,0.2)] md:p-8"
                >
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <p className="mb-2 text-sm uppercase tracking-[0.22em] text-[#83a0ab]">
                                Evaluación responsable
                            </p>

                            <h3 className="mb-2 text-2xl font-semibold">
                                Cada resultado depende de una planificación personalizada.
                            </h3>

                            <p className="max-w-2xl text-sm leading-relaxed text-white/70">
                                Las imágenes muestran casos reales. La evaluación médica es
                                clave para definir qué resultado puede esperarse según cada
                                cuerpo, procedimiento y proceso de recuperación.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Consultar por WhatsApp sobre resultados y evaluación personalizada"
                            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#83a0ab] bg-white px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                        >
                            CONSULTAR MI CASO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}