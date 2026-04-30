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
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true,
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
                        start: "top 85%",
                        end: "top 30%",
                        scrub: true,
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
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true,
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
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar />

            <main className="bg-black text-white">
                {/* HERO */}
                <section
                    ref={heroRef}
                    className="relative min-h-screen flex items-center px-6 pt-28 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/images/quien-soy-hero.jpg')] bg-cover bg-center opacity-45" />
                    <div className="absolute inset-0 bg-black/70" />

                    <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="inline-block text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
                                Quién soy
                            </span>

                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                                Cirugía plástica
                                <br />
                                <span className="text-gray-400">
                                    con criterio, naturalidad y acompañamiento.
                                </span>
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                                Soy el Dr. Víctor Pugliese, cirujano plástico. Mi trabajo se
                                enfoca en acompañar cada decisión estética desde una mirada
                                profesional, cercana y personalizada.
                            </p>

                            <a
                                href="https://wa.me/5491124793160"
                                target="_blank"
                                className="inline-block border border-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition"
                            >
                                QUIERO HACER UNA CONSULTA
                            </a>
                        </div>

                        <div className="hidden md:block border border-white/20 p-6">
                            <div className="aspect-[4/5] bg-white/10 overflow-hidden">
                                <img
                                    src="/images/quien-soy-card.jpg"
                                    alt="Dr. Víctor Pugliese"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FILOSOFÍA */}
                <section
                    ref={filosofiaRef}
                    className="py-24 px-6 border-t border-white/10"
                >
                    <div
                        ref={filosofiaContentRef}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                Más que una cirugía:
                                <br />
                                <span className="text-gray-400">un acompañamiento real.</span>
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                Para mí, una cirugía estética no empieza en el quirófano. Empieza
                                mucho antes: en la escucha, en la evaluación, en entender qué
                                busca cada paciente y qué resultado es realmente posible,
                                seguro y armónico.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                No se trata de cambiarte, sino de ayudarte a lograr una versión
                                más natural, proporcionada y coherente con tu cuerpo.
                            </p>
                        </div>

                        <div className="border border-white/20 p-8">
                            <p className="text-2xl md:text-3xl font-semibold leading-tight">
                                “El mejor resultado es el que se ve natural, se siente propio y
                                respeta la identidad de cada paciente.”
                            </p>
                        </div>
                    </div>
                </section>

                {/* ENFOQUE */}
                <section ref={enfoqueRef} className="bg-white text-black py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-3xl mb-14">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                                Mi enfoque de trabajo
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Cada paciente llega con una historia, una expectativa y una
                                inquietud distinta. Por eso, el proceso debe ser claro,
                                personalizado y responsable.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div
                                ref={(el) => {
                                    if (el) enfoqueItemsRef.current[0] = el;
                                }}
                                className="border border-black/20 p-6"
                            >
                                <span className="text-gray-500 text-sm">01</span>
                                <h3 className="text-xl font-medium mt-3 mb-4">
                                    Evaluación personalizada
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Analizar cada caso con criterio médico antes de definir
                                    cualquier procedimiento.
                                </p>
                            </div>

                            <div
                                ref={(el) => {
                                    if (el) enfoqueItemsRef.current[1] = el;
                                }}
                                className="border border-black/20 p-6"
                            >
                                <span className="text-gray-500 text-sm">02</span>
                                <h3 className="text-xl font-medium mt-3 mb-4">
                                    Resultados naturales
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Buscar armonía, proporción y cambios que respeten la identidad
                                    del paciente.
                                </p>
                            </div>

                            <div
                                ref={(el) => {
                                    if (el) enfoqueItemsRef.current[2] = el;
                                }}
                                className="border border-black/20 p-6"
                            >
                                <span className="text-gray-500 text-sm">03</span>
                                <h3 className="text-xl font-medium mt-3 mb-4">
                                    Seguimiento real
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Acompañar el proceso completo, desde la consulta hasta la
                                    recuperación.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACOMPAÑAMIENTO */}
                <section ref={acompanamientoRef} className="py-24 px-6">
                    <div
                        ref={acompanamientoContentRef}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                También acompaño a pacientes del interior.
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                Muchas personas viajan para realizar su consulta o procedimiento.
                                Por eso, el acompañamiento también incluye orientación para que
                                el proceso sea más claro, organizado y seguro.
                            </p>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Orientación previa a la consulta.</li>
                                <li>• Planificación del procedimiento.</li>
                                <li>• Coordinación del seguimiento.</li>
                                <li>• Acompañamiento durante la recuperación.</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 p-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                La confianza también se construye con información clara.
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                Mi objetivo es que cada paciente tome una decisión informada,
                                realista y acompañada, sin promesas exageradas ni resultados
                                artificiales.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    ref={ctaRef}
                    className="bg-black text-white py-32 px-6 text-center border-t border-white/10"
                >
                    <div ref={ctaContentRef} className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-tight">
                            Si querés evaluar tu caso,
                            <br />
                            podemos conversarlo en consulta.
                        </h2>

                        <p className="text-gray-400 mb-12">
                            Hablemos de tus objetivos, tus dudas y de cuál puede ser la mejor
                            opción para vos.
                        </p>

                        <a
                            href="https://wa.me/5491124793160"
                            target="_blank"
                            className="inline-block border border-white px-10 py-5 text-sm tracking-wide hover:bg-white hover:text-black transition"
                        >
                            QUIERO CHATEAR CON EL DOCTOR
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}