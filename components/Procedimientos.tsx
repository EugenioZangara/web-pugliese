"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const procedimientos = [
    {
        title: "Cirugía mamaria",
        eyebrow: "Forma, volumen y armonía",
        description:
            "Procedimiento orientado a mejorar la forma, el volumen y la armonía mamaria con una planificación personalizada según tu cuerpo y tus objetivos.",
        href: "/cirugia-mamaria",
        cta: "Ver cirugía mamaria",
    },
    {
        title: "Abdomen",
        eyebrow: "Contorno corporal",
        description:
            "Cirugía de abdomen y abdominoplastia para mejorar la firmeza, el contorno y la armonía corporal después de cambios físicos importantes.",
        href: "/abdomen",
        cta: "Ver abdomen",
    },
    {
        title: "Glúteos",
        eyebrow: "Diseño corporal",
        description:
            "Cirugía de glúteos enfocada en mejorar forma, volumen y proporción corporal, buscando un resultado armónico y natural.",
        href: "/gluteos",
        cta: "Ver glúteos",
    },
    {
        title: "Rinoplastia",
        eyebrow: "Armonía facial",
        description:
            "Cirugía de nariz pensada para mejorar la armonía facial y, en algunos casos, acompañar una mejora funcional de la respiración.",
        href: "/rinoplastia",
        cta: "Ver rinoplastia",
    },
];

export default function Procedimientos() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const ctaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 30%",
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
                    cardsRef.current,
                    {
                        opacity: 0,
                        y: 80,
                    },
                    {
                        opacity: 1,
                        y: 0,
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
                    0.65
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#25373d] px-6 py-24 text-white"
            aria-labelledby="procedimientos-title"
        >
            {/* BACKGROUND PREMIUM */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.28),transparent_32%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/60 to-transparent" />
            <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#83a0ab]/10 blur-3xl" />
            <div className="absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-[#567580]/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* TITULO */}
                <div className="mb-14 max-w-3xl">
                    <span className="mb-6 inline-flex items-center rounded-full border border-[#83a0ab]/35 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab]">
                        Procedimientos
                    </span>

                    <h2
                        id="procedimientos-title"
                        ref={titleRef}
                        className="text-3xl font-semibold leading-[1.08] text-white md:text-5xl"
                    >
                        Procedimientos destacados
                        <br />
                        <span className="text-[#83a0ab]">
                            con enfoque natural y personalizado.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                        Cada cirugía plástica requiere evaluación, planificación y
                        acompañamiento profesional para buscar un resultado armónico,
                        seguro y coherente con tu cuerpo.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {procedimientos.map((item, index) => (
                        <article
                            key={item.title}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#83a0ab]/70 hover:bg-white/[0.09]"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#506065] via-[#83a0ab] to-[#567580] opacity-70" />
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#83a0ab]/10 blur-3xl transition group-hover:bg-[#83a0ab]/20" />

                            <div className="relative z-10 flex h-full flex-col">
                                <div className="mb-10 flex items-center justify-between">
                                    <span className="text-sm uppercase tracking-[0.18em] text-[#83a0ab]">
                                        0{index + 1}
                                    </span>

                                    <span
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#83a0ab]/35 bg-white/5 text-[#83a0ab] transition group-hover:bg-[#83a0ab] group-hover:text-white"
                                        aria-hidden="true"
                                    >
                                        →
                                    </span>
                                </div>

                                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#83a0ab]">
                                    {item.eyebrow}
                                </p>

                                <h3 className="mb-5 text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mb-8 text-sm leading-relaxed text-white/68">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={item.href}
                                        aria-label={`${item.cta} con el Dr. Víctor Pugliese`}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-[#83a0ab]"
                                    >
                                        {item.cta}
                                        <span
                                            className="transition group-hover:translate-x-1"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div
                    ref={ctaRef}
                    className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur md:flex-row md:p-8"
                >
                    <div>
                        <p className="mb-2 text-sm uppercase tracking-[0.22em] text-[#83a0ab]">
                            Evaluación personalizada
                        </p>
                        <h3 className="text-2xl font-semibold text-white">
                            ¿Querés saber qué procedimiento se adapta a tu caso?
                        </h3>
                    </div>

                    <a
                        href="https://wa.me/5491124793160"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Consultar por WhatsApp qué procedimiento se adapta a mi caso"
                        className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#83a0ab] bg-white px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                    >
                        CONTACTAR
                    </a>
                </div>
            </div>
        </section>
    );
}