"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function QuienSoyPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const filosofiaRef = useRef<HTMLElement | null>(null);
    const enfoqueRef = useRef<HTMLElement | null>(null);
    const acompanamientoRef = useRef<HTMLElement | null>(null);
    const ctaRef = useRef<HTMLElement | null>(null);

    const filosofiaContentRef = useRef<HTMLDivElement | null>(null);
    const enfoqueItemsRef = useRef<HTMLDivElement[]>([]);
    const acompanamientoContentRef = useRef<HTMLDivElement | null>(null);
    const ctaContentRef = useRef<HTMLDivElement | null>(null);

    const enfoqueItems = [
        {
            number: "01",
            title: "Evaluación personalizada",
            text: "Analizar cada caso con criterio médico antes de definir cualquier procedimiento.",
        },
        {
            number: "02",
            title: "Resultados naturales",
            text: "Buscar armonía, proporción y cambios que respeten la identidad del paciente.",
        },
        {
            number: "03",
            title: "Seguimiento real",
            text: "Acompañar el proceso completo, desde la consulta hasta la recuperación.",
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                filosofiaContentRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: filosofiaRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                enfoqueItemsRef.current,
                { opacity: 0, y: 70 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: enfoqueRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                acompanamientoContentRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: acompanamientoRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                ctaContentRef.current,
                { opacity: 0, y: 70 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar />

            <main className="bg-[#ffffff] text-[#25373d]">
                {/* HERO - OSCURO */}
                <section
                    ref={heroRef}
                    className="relative flex min-h-screen items-center overflow-hidden bg-[#25373d] px-6 pt-28 text-white"
                >
                    <div className="absolute inset-0 bg-[url('/images/quien-soy-hero.jpg')] bg-cover bg-center opacity-40" />
                    <div className="absolute inset-0 bg-[#25373d]/78" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#25373d]/90 via-[#25373d]/58 to-[#25373d]/96" />

                    <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#83a0ab]/18 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#567580]/22 blur-3xl" />

                    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
                        <div>
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab] backdrop-blur">
                                Quién soy
                            </span>

                            <h1 className="mb-8 text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
                                Cirugía plástica
                                <br />
                                <span className="text-[#83a0ab]">
                                    con criterio, naturalidad y acompañamiento.
                                </span>
                            </h1>

                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/76">
                                Soy el Dr. Víctor Pugliese, cirujano plástico. Mi trabajo se
                                enfoca en acompañar cada decisión estética desde una mirada
                                profesional, cercana y personalizada.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-[#83a0ab] bg-white px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                            >
                                QUIERO HACER UNA CONSULTA
                            </a>
                        </div>

                        <div className="hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur md:block">
                            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white/10">
                                <img
                                    src="/images/quien-soy-card.jpg"
                                    alt="Dr. Víctor Pugliese"
                                    className="h-full w-full object-cover opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FILOSOFÍA - CLARO */}
                <section
                    ref={filosofiaRef}
                    className="relative overflow-hidden bg-[#f5f8f9] px-6 py-24 text-[#25373d]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.12),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div
                        ref={filosofiaContentRef}
                        className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2"
                    >
                        <div>
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/45 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580] shadow-sm">
                                Filosofía de trabajo
                            </span>

                            <h2 className="mb-8 text-3xl font-semibold leading-[1.08] md:text-5xl">
                                Más que una cirugía:
                                <br />
                                <span className="text-[#567580]">
                                    un acompañamiento real.
                                </span>
                            </h2>

                            <p className="mb-8 leading-relaxed text-[#506065]">
                                Para mí, una cirugía estética no empieza en el quirófano. Empieza
                                mucho antes: en la escucha, en la evaluación, en entender qué
                                busca cada paciente y qué resultado es realmente posible,
                                seguro y armónico.
                            </p>

                            <p className="leading-relaxed text-[#506065]">
                                No se trata de cambiarte, sino de ayudarte a lograr una versión
                                más natural, proporcionada y coherente con tu cuerpo.
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-white p-8 shadow-[0_24px_70px_rgba(37,55,61,0.12)]">
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#83a0ab]/16 blur-3xl" />

                            <div className="relative z-10">
                                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#6b8994]">
                                    Naturalidad
                                </p>

                                <p className="text-2xl font-semibold leading-tight text-[#25373d] md:text-3xl">
                                    “El mejor resultado es el que se ve natural, se siente propio
                                    y respeta la identidad de cada paciente.”
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ENFOQUE - OSCURO */}
                <section
                    ref={enfoqueRef}
                    className="relative overflow-hidden bg-[#25373d] px-6 py-24 text-white"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,160,171,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,117,128,0.2),transparent_36%)]" />
                    <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] [background-size:56px_56px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-6xl">
                        <div className="mb-14 max-w-3xl">
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/30 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab] backdrop-blur">
                                Enfoque
                            </span>

                            <h2 className="mb-6 text-3xl font-semibold leading-[1.08] text-white md:text-5xl">
                                Mi enfoque
                                <br />
                                <span className="text-[#83a0ab]">
                                    de trabajo.
                                </span>
                            </h2>

                            <p className="max-w-2xl leading-relaxed text-white/68">
                                Cada paciente llega con una historia, una expectativa y una
                                inquietud distinta. Por eso, el proceso debe ser claro,
                                personalizado y responsable.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {enfoqueItems.map((item, index) => (
                                <div
                                    key={item.number}
                                    ref={(el) => {
                                        if (el) enfoqueItemsRef.current[index] = el;
                                    }}
                                    className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                                >
                                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#83a0ab]/10 blur-3xl" />

                                    <span className="text-sm uppercase tracking-[0.22em] text-[#83a0ab]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-4 mb-4 text-xl font-medium text-white">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-white/65">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ACOMPAÑAMIENTO - BLANCO */}
                <section
                    ref={acompanamientoRef}
                    className="relative overflow-hidden bg-white px-6 py-24 text-[#25373d]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,160,171,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(86,117,128,0.1),transparent_36%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83a0ab]/45 to-transparent" />

                    <div
                        ref={acompanamientoContentRef}
                        className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2"
                    >
                        <div>
                            <span className="mb-6 inline-flex rounded-full border border-[#83a0ab]/45 bg-[#f5f8f9] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#567580]">
                                Pacientes del interior
                            </span>

                            <h2 className="mb-8 text-3xl font-semibold leading-[1.08] md:text-5xl">
                                También acompaño
                                <br />
                                <span className="text-[#567580]">
                                    a pacientes del interior.
                                </span>
                            </h2>

                            <p className="mb-8 leading-relaxed text-[#506065]">
                                Muchas personas viajan para realizar su consulta o procedimiento.
                                Por eso, el acompañamiento también incluye orientación para que
                                el proceso sea más claro, organizado y seguro.
                            </p>

                            <ul className="space-y-4 text-[#25373d]">
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Orientación previa a la consulta.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Planificación del procedimiento.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Coordinación del seguimiento.
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#83a0ab]" />
                                    Acompañamiento durante la recuperación.
                                </li>
                            </ul>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-[#25373d]/10 bg-[#f5f8f9] p-8 shadow-[0_24px_70px_rgba(37,55,61,0.1)]">
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#83a0ab]/14 blur-3xl" />

                            <div className="relative z-10">
                                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#6b8994]">
                                    Información clara
                                </p>

                                <h3 className="mb-6 text-2xl font-semibold text-[#25373d]">
                                    La confianza también se construye con información clara.
                                </h3>

                                <p className="leading-relaxed text-[#506065]">
                                    Mi objetivo es que cada paciente tome una decisión informada,
                                    realista y acompañada, sin promesas exageradas ni resultados
                                    artificiales.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA - TONO MEDIO PREMIUM */}
                <section
                    ref={ctaRef}
                    className="relative overflow-hidden bg-[#506065] px-6 py-32 text-white"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#506065_0%,#567580_45%,#6b8994_100%)]" />
                    <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] [background-size:58px_58px]" />
                    <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#25373d]/35 blur-3xl" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                    <div
                        ref={ctaContentRef}
                        className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/14 bg-[#25373d]/75 px-6 py-14 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:px-12 md:py-16"
                    >
                        <div className="absolute -top-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#83a0ab]/20 blur-3xl" />
                        <div className="absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#567580]/20 blur-3xl" />

                        <div className="relative z-10">
                            <span className="mb-7 inline-flex rounded-full border border-[#83a0ab]/35 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#83a0ab]">
                                Evaluación personalizada
                            </span>

                            <h2 className="mb-8 text-3xl font-semibold leading-[1.08] text-white md:text-5xl">
                                Si querés evaluar tu caso,
                                <br />
                                <span className="text-[#83a0ab]">
                                    podemos conversarlo en consulta.
                                </span>
                            </h2>

                            <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-white/72">
                                Hablemos de tus objetivos, tus dudas y de cuál puede ser la mejor
                                opción para vos.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-[#83a0ab] bg-white px-10 py-5 text-sm font-medium tracking-[0.08em] text-[#25373d] transition hover:-translate-y-0.5 hover:bg-[#83a0ab] hover:text-white"
                            >
                                QUIERO CHATEAR CON EL DOCTOR
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}