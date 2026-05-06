"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testimonios() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<HTMLElement[]>([]);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const marqueeTweenRef = useRef<gsap.core.Tween | null>(null);

    const testimonios = [
        "Me sentí acompañada en todo el proceso, no solo en la cirugía.",
        "Los resultados fueron súper naturales, justo lo que buscaba.",
        "Viajé desde el interior y me ayudaron con todo.",
        "Tenía miedo, pero la contención fue clave.",
        "Volvería a elegirlo sin dudar.",
        "No es solo estética, es confianza.",
        "El seguimiento después de la cirugía fue excelente.",
        "Me cambió la forma de verme y sentirme.",
    ];

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
            ).fromTo(
                itemsRef.current,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    ease: "none",
                },
                0.2
            );

            if (trackRef.current) {
                marqueeTweenRef.current = gsap.to(trackRef.current, {
                    xPercent: -50,
                    duration: 42,
                    ease: "none",
                    repeat: -1,
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        marqueeTweenRef.current?.pause();
    };

    const handleMouseLeave = () => {
        marqueeTweenRef.current?.resume();
    };

    const testimoniosDuplicados = [...testimonios, ...testimonios];

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#25373d] px-6 py-24 text-white"
            aria-labelledby="testimonios-title"
        >
            {/* BACKGROUND OSCURO PREMIUM */}
            <div className="absolute inset-0 bg-[#25373d]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(131,160,171,0.22),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(107,137,148,0.18),transparent_34%)]" />

            {/* Cuadriculado removido */}

            <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-[#506065]/30 to-transparent" />
            <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#83a0ab]/12 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#567580]/14 blur-3xl" />

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/25 to-transparent" />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* TITULO */}
                <div ref={titleRef} className="mb-12 max-w-3xl">
                    <span className="mb-6 inline-flex items-center rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab] backdrop-blur">
                        Experiencias reales
                    </span>

                    <h2
                        id="testimonios-title"
                        className="mb-5 text-3xl font-semibold leading-[1.08] text-white md:text-5xl"
                    >
                        Testimonios de pacientes
                        <br />
                        <span className="text-[#83a0ab]">
                            que vivieron un proceso acompañado.
                        </span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
                        En cirugía plástica, la confianza no se construye solo con el
                        resultado final. También importa la claridad antes de decidir, la
                        contención durante el proceso y el seguimiento después de la
                        cirugía.
                    </p>
                </div>

                {/* TESTIMONIOS AUTOMÁTICOS INFINITOS */}
                <div
                    className="relative overflow-hidden pb-5"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    aria-label="Testimonios de pacientes sobre su experiencia"
                >
                    <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#25373d] to-transparent md:w-32" />
                    <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#25373d] to-transparent md:w-32" />

                    <div
                        ref={trackRef}
                        className="flex w-max gap-6 will-change-transform"
                    >
                        {testimoniosDuplicados.map((texto, index) => {
                            const isDuplicate = index >= testimonios.length;

                            return (
                                <article
                                    key={`${texto}-${index}`}
                                    ref={(el) => {
                                        if (el) itemsRef.current[index] = el;
                                    }}
                                    aria-hidden={isDuplicate}
                                    className="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#83a0ab]/55 hover:bg-white/[0.085] md:min-w-[340px]"
                                >
                                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/55 to-transparent" />
                                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#83a0ab]/10 blur-3xl transition group-hover:bg-[#83a0ab]/18" />

                                    <div className="relative z-10">
                                        <div className="mb-8 flex items-center justify-between">
                                            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#83a0ab]">
                                                Paciente 0
                                                {(index % testimonios.length) + 1}
                                            </span>

                                            <span
                                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#83a0ab]/20 bg-white/[0.06] text-2xl leading-none text-[#83a0ab]"
                                                aria-hidden="true"
                                            >
                                                ”
                                            </span>
                                        </div>

                                        <p className="text-base leading-relaxed text-white/86">
                                            “{texto}”
                                        </p>

                                        <div className="mt-8 flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-[#83a0ab]" />
                                            <span className="text-xs uppercase tracking-[0.18em] text-white/55">
                                                Acompañamiento real
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* NOTA INFERIOR */}
                <div className="mt-10 rounded-[2rem] border border-[#83a0ab]/18 bg-white/[0.055] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="mb-2 text-sm uppercase tracking-[0.22em] text-[#83a0ab]">
                                Más que una cirugía
                            </p>

                            <h3 className="text-2xl font-semibold">
                                Un proceso pensado para que te sientas segura/o.
                            </h3>

                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
                                Desde la primera consulta hasta el postoperatorio, el
                                acompañamiento profesional ayuda a tomar decisiones con más
                                tranquilidad y expectativas realistas.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Reservar consulta por WhatsApp con el Dr. Víctor Pugliese"
                            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#83a0ab] bg-white px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                        >
                            RESERVAR CONSULTA
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}