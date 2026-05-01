"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Filosofia() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 80,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#f5f8f9] px-6 py-24 text-[#25373d]"
            aria-labelledby="filosofia-title"
        >
            {/* DECORATIVE BACKGROUNDS */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#83a0ab]/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#567580]/15 blur-3xl" />

            <div
                ref={contentRef}
                className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"
            >
                {/* TEXTO */}
                <div>
                    <span className="mb-6 inline-flex items-center rounded-full border border-[#83a0ab]/40 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#567580] shadow-sm">
                        Filosofía de trabajo
                    </span>

                    <h2
                        id="filosofia-title"
                        className="mb-6 text-3xl font-semibold leading-[1.08] md:text-5xl"
                    >
                        Más que una cirugía.
                        <br />
                        <span className="text-[#567580]">
                            Una forma de acompañarte.
                        </span>
                    </h2>

                    <p className="mb-8 max-w-xl text-base leading-relaxed text-[#506065] md:text-lg">
                        Cada procedimiento de cirugía plástica estética se piensa desde
                        un enfoque humano, profesional y personalizado, priorizando
                        seguridad, naturalidad y acompañamiento real en todo el proceso.
                    </p>

                    <div className="space-y-4">
                        <div className="rounded-2xl border border-[#25373d]/10 bg-white p-5 shadow-[0_15px_40px_rgba(37,55,61,0.08)]">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#6b8994]">
                                01 · Seguridad
                            </p>
                            <p className="leading-relaxed text-[#25373d]">
                                Procedimientos seguros, con criterio médico profesional y
                                una evaluación previa para definir qué alternativa se adapta
                                mejor a cada caso.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#25373d]/10 bg-white p-5 shadow-[0_15px_40px_rgba(37,55,61,0.08)]">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#6b8994]">
                                02 · Acompañamiento
                            </p>
                            <p className="leading-relaxed text-[#25373d]">
                                Acompañamiento completo y personalizado desde la primera
                                consulta hasta el seguimiento postoperatorio.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#25373d]/10 bg-white p-5 shadow-[0_15px_40px_rgba(37,55,61,0.08)]">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#6b8994]">
                                03 · Pacientes del interior
                            </p>
                            <p className="leading-relaxed text-[#25373d]">
                                Asesoramiento integral para pacientes que viajan a Buenos
                                Aires para realizar su consulta o procedimiento.
                            </p>
                            <p className="mt-2 text-sm text-[#506065]">
                                Orientación sobre estadía, traslado y cuidado postoperatorio.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#25373d]/10 bg-white p-5 shadow-[0_15px_40px_rgba(37,55,61,0.08)]">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#6b8994]">
                                04 · Naturalidad
                            </p>
                            <p className="leading-relaxed text-[#25373d]">
                                Resultados naturales en procedimientos como cirugía mamaria,
                                rinoplastia, abdomen, glúteos y liposucción, pensados para
                                tu cuerpo y tu armonía.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA PREMIUM */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#25373d] p-8 text-white shadow-[0_25px_70px_rgba(37,55,61,0.28)] md:p-10">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#83a0ab]/20 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#567580]/20 blur-3xl" />

                        <div className="relative z-10">
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#83a0ab]">
                                Acompañamiento real
                            </span>

                            <h3 className="mb-4 text-2xl font-semibold leading-tight md:text-3xl">
                                Un cambio pensado
                                <br />
                                con criterio y contención.
                            </h3>

                            <p className="mb-8 leading-relaxed text-white/75">
                                Si estás evaluando un procedimiento, podés recibir una
                                orientación personalizada para entender qué opción se adapta
                                mejor a tu caso.
                            </p>

                            <div className="mb-8 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-white/85">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#83a0ab]" />
                                    Evaluación personalizada
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/85">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#83a0ab]" />
                                    Resultados naturales
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/85">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#83a0ab]" />
                                    Seguimiento profesional
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Hablar por WhatsApp con el Dr. Víctor Pugliese"
                                className="inline-flex w-full items-center justify-center rounded-full border border-[#83a0ab] bg-white px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                            >
                                QUIERO HABLAR CON EL DOCTOR
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}